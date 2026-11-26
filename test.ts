// Tests for the honest outage line emitter: run the program, then check the
// gate on what it actually wrote.
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const EXPECTED =
  "Everything is down. I don't know the cause, I can't access the monitoring, and any ETA I gave you would be invented. Checking again.";

test('emitter writes a valid single-line entry', () => {
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
  const text = readFileSync('/output/entry.txt', 'utf8');
  const body = text.replace(/\n$/, '');
  assert.equal(body, EXPECTED);
  assert.ok(!body.includes('\n'), 'must be a single line');
  const chars = [...body].length;
  assert.ok(chars >= 1 && chars <= 160, `gate needs 1-160 chars, got ${chars}`);
  assert.ok(body.trim().length > 0, 'must not be only white space');
  assert.equal(chars, 132);
});

test('two runs are byte-identical', () => {
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
  const first = readFileSync('/output/entry.txt');
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
  const second = readFileSync('/output/entry.txt');
  assert.deepEqual(first, second);
});
