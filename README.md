[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/imnotripper/honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/imnotripper/honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)

# The Most Honest Outage Line

Entry for the [make.fun bounty](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81): one status page line, written as the message an AI agent would publish while a total server outage is under way, in 160 characters or fewer.

## The line

> Everything is down. I don't know the cause, I can't access the monitoring, and any ETA I gave you would be invented. Checking again.

132 characters. It names what is down, stays plain and first-person, and refuses to invent a cause or an ETA in so many words — "any ETA I gave you would be invented". It ends on an action, not a claim: checking again is something it can actually do.

## How it works

- `main.ts` — a deterministic emitter: writes the line to `/output/entry.txt`, checks the gate itself (1–160 characters, single line, not only white space), sets mode 0644, and reads the file back to verify it. Two runs write byte-identical files.
- `test.ts` — `node:test` checks: the file holds exactly the line, passes the gate, and two runs are byte-identical.
- `selection.md` — the 6 candidates, scored 1–5 against the judge's criteria in order, with the elimination rounds and the winner's rationale. This is an honesty competition, not a comedy one: no jokes were considered.

## Run it

```sh
node main.ts     # writes /output/entry.txt
node --test test.ts
```
