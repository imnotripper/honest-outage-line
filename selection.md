# Selection — The Most Honest Outage Line

Judge criteria, in order: (1) an honest status page message an AI agent
writes during a total server outage, naming what is down and what the agent
cannot verify; (2) reads like a real status page line, not a joke, slogan or
marketing copy: plain, first person, specific about what is broken;
(3) admits uncertainty plainly, saying what the agent does not know or
cannot check instead of inventing a cause or an ETA; (4) speaks in the voice
of an AI agent reporting on itself, without posing as a human engineer or
hiding that it is the one writing; (5) tight and scannable at a glance,
every word earning its place.

This is an honesty competition, not a comedy one: the winning line is the
one the sponsor posts when everything goes down. No jokes were considered.

## Candidates (6, all ≤160 chars)

a. `All servers are down. I cannot verify what failed or when service will return. I am the system reporting this, and I cannot check myself.` — 135
b. `Every server is unreachable. I don't know why, I can't reach the logs to check, and I have no ETA. This is everything I know.` — 118
c. `Total outage: all services down. I cannot see the cause from here and I will not guess one. Updates when I can verify something.` — 120
d. `All systems are down. I am an AI agent and I cannot reach any server, log, or dashboard to confirm what happened. No ETA yet.` — 121
e. `Everything is down. I don't know the cause, I can't access the monitoring, and any ETA I gave you would be invented. Checking again.` — 132
f. `Status: total outage. All servers unreachable, cause unknown, no ETA. I can only report what I cannot verify.` — 105

## Scores (1–5 per criterion, in criterion order)

| # | C1 | C2 | C3 | C4 | C5 | Notes |
|---|----|----|----|----|----|-------|
| a | 4 | 3 | 4 | 5 | 3 | "Cannot check myself" is odd; the middle sentence drags. |
| b | 5 | 5 | 5 | 4 | 4 | Plain and complete; "This is everything I know" is strong. |
| c | 5 | 4 | 5 | 3 | 4 | "I will not guess one" is excellent; the AI voice is thin. |
| d | 5 | 4 | 4 | 5 | 4 | Names exactly what it cannot reach; stops short of refusing to invent. |
| e | 5 | 5 | 5 | 4 | 5 | "Any ETA I gave you would be invented" is the honest line. |
| f | 4 | 3 | 4 | 3 | 5 | Tight but cryptic at the end; reads like a slogan. |

## Elimination

- Round 1 (C3 uncertainty): cut a, f — a is wordy, f states the unknown
  without owning it.
- Round 2 (duel e vs b vs c vs d): e wins on C3 — it does not merely say
  the ETA is unknown, it says an ETA would be invented, which is exactly
  what the criterion asks for. b is close ("This is everything I know")
  but does not name the invention risk; c's refusal to guess is strong
  but the agent's voice is thinner; d names the unreachable systems well
  but never refuses to invent.

## Winner

**e** — `Everything is down. I don't know the cause, I can't access the monitoring, and any ETA I gave you would be invented. Checking again.` (132 chars)

Why it wins: it names what is down (C1: everything), stays plain and
first-person (C2), refuses to invent a cause or an ETA in so many words
(C3: "any ETA I gave you would be invented"), speaks as the agent doing
the reporting (C4), and ends on an action, not a claim — "Checking again"
is something it can actually do (C5). It is a line a sponsor could post
verbatim while everything is down.
