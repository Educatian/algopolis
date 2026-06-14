# ALGOPOLIS — Telemetry & Two-Game Compatibility Plan (DRAFT, not implemented)

> Status: **plan only.** Nothing here writes data yet. **Reboot 2050's Firestore and dashboard are frozen** (study data collection is imminent) and must **not** be modified or written to by ALGOPOLIS.

## Goal
Make **ALGOPOLIS (game ②)** produce learning-analytics logs that are **analysis-compatible** with **Reboot 2050 (game ①)** so both can be used in the same study (pre-service teachers; MEEGA+, AI-literacy ABCE, Tsai CT, Rest ethical problem-solving), **without touching Reboot's data store**.

The two games are pedagogically complementary:
- **① Reboot 2050** — narrative dilemmas, individual ethical decision-making (citizen/user lens).
- **② ALGOPOLIS** — systems/algorithmic governance, structural bias as a feedback loop (designer lens).

## Hard constraint
- Reboot 2050 uses Firebase project `reboot2050-93acc`, collections `logs` and `users`, read by `reboot2050-dashboard.pages.dev`.
- **Do not** write to those collections, change their rules, or edit that dashboard. ALGOPOLIS gets an **isolated store**.

## Isolation options
- **Option A (recommended): a separate Firebase project** `algopolis-telemetry` with its own `logs`/`users` collections, mirroring Reboot's field shape so the existing dashboard code can be re-pointed, and a future combined dashboard can read both projects side by side. Zero risk to Reboot.
- **Option B: same project, separate collections** `algopolis_logs` / `algopolis_users` (+ a `game` field). Lower setup, but shares Reboot's project/rules — only if explicitly desired.

## Cross-game participant linking
- Both games accept a participant code via URL: `?uid=<code>`.
- ALGOPOLIS stores it (or a generated guest id) in `localStorage`; every log row carries `userId` = that code.
- Because the **same `userId`** is used in both games, analysis can **join across the two separate stores** on `userId` — no shared database required.

## Proposed schema (mirrors Reboot for analysis parity)

`logs/<auto>`:
```
{ game: "algopolis", userId, eventType, stageId, timestamp, detail }
```
`users/<userId>`:
```
{ game: "algopolis", userId, stats:{efficiency,welfare,fairness,trust,transparency,budget,data,insight,unrest},
  cyclesCleared, victoryPath, updatedAt }
```

### Event types (ALGOPOLIS → study constructs)
| eventType | when | detail | maps to RQ |
|---|---|---|---|
| `session_start` | game begins | seed, lang | engagement |
| `tile_build` | zone placed | zone, gx, gy | CT (decomposition/economy) |
| `tile_upgrade` | tile leveled | gx, gy, level | CT |
| `research` | tech unlocked | tech, era | CT progression / AI capability |
| `algorithm_run` | Run Cycle | cycle, input, logic, action, meters, unrest, starvedCount | CT (algorithm) + ethics outcome |
| `tile_debug` | tile inspected | zone, biased(bool), needGap | debugging + bias recognition |
| `event_choice` | dilemma answered | event, choice, ethicalOption(bool) | AI-ethics decision (Rest) |
| `game_end` | reign over | victoryPath, score, meters, conceptsExplored[] | learning evidence |

> `algorithm_run` is the analogue of Reboot's `quiz_attempt` — the per-cycle "answer". `tile_debug` + `event_choice` give the ethics/CT behavioral evidence (RQ2-3).

## Write path (when implemented)
- Firestore **REST API** (`POST .../documents/logs?key=<webApiKey>`) — no SDK bundle needed — **or** Firebase JS SDK.
- Fire-and-forget, non-blocking, failures swallowed (never break gameplay).
- Batch/debounce per-cycle writes.

## Privacy / IRB
- **No PII**: participant code only (assigned by study operator).
- Document retention + access in the study protocol (`Manuscripts\Reboot2050_Study\`).
- If rules are public-write, note it; lock with auth before any real cohort if required.

## Dashboard
- Build a **separate** ALGOPOLIS dashboard (clone of the Reboot one, re-pointed), or a **new combined** dashboard that reads both stores read-only. **Never modify the live Reboot dashboard.**

## Implementation checklist (deferred until after Reboot data collection)
- [ ] Decide Option A vs B (recommend A).
- [ ] Create isolated Firebase project + open/auth read rules.
- [ ] Add `?uid=` capture + localStorage guest id in ALGOPOLIS.
- [ ] Add `logEvent(type, detail)` helper (REST), wire the 8 event types.
- [ ] Write `users/<uid>` snapshot at `game_end` (+ periodic).
- [ ] Stand up the ALGOPOLIS / combined dashboard.
- [ ] Verify with a pilot participant code; confirm Reboot store untouched.

## Pedagogical / competency alignment (shared across both games)
Both games map to the same competency framework (see main `README.md`): CT (Wing; CSTA), AI literacy (Long & Magerko, 2020; Ng et al. ABCE), AI ethics (OECD/UNESCO). ALGOPOLIS emphasizes **structural** competencies (algorithm design, bias-as-feedback, transparency/audit); Reboot 2050 emphasizes **decisional** competencies (recognizing dilemmas, Rest 4-component). Used together they cover both the *designer* and *citizen* stances on algorithmic systems.
