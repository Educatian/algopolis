# ALGOPOLIS — Development Roadmap

A prioritized plan for evolving ALGOPOLIS (game ②) as an evidence‑grounded AI‑literacy game and a partner to **Reboot 2050** (game ①).

## Where it is now (shipped)
- Real **3D** isometric city (Three.js): orbit / tilt / zoom, raised tiles, billboard buildings, fog.
- **Civ‑lite systems**: build + upgrade + adjacency, 4 resources (Budget/Data/Insight/Unrest), tech tree, policies.
- **AI‑ethics engine**: bias feedback loop, 5 meters, tile debugging, ethical event deck, rival AI nations + leaderboard, multiple victory paths + collapse.
- **Pedagogy**: hands‑on spotlight tutorial, per‑cycle coaching debriefs, end‑screen concept recap.
- **Bilingual** EN / 한국어 (toggle, `?lang`), all strings externalized.
- Single static page, deployed on Higgsfield; mirrored source on GitHub.

---

## P1 — Near‑term (polish & classroom‑ready)
| Item | Why | Notes |
|---|---|---|
| **Balance pass** | "Just Steward" (all meters ≥62) is very hard; tune tech costs, pool, event frequency | Use the node sim harness; target reachable S with skilled play |
| **Sound** — BGM + SFX | Engagement; matches Reboot's audio layer | Royalty‑free / on‑theme; mute toggle; lazy‑load |
| **Mobile polish** | Touch already works; tighten phone layout (390×844), bigger tap targets, panel as bottom sheet | Test gestures vs orbit |
| **Accessibility** | Keyboard focus order, ARIA on controls, colorblind‑safe meter cues, reduced‑motion option | WCAG‑minded |
| **Save / resume + best score** | `localStorage` run state + personal best per victory path | No backend needed |
| **Asset weight** | Icons are 256px in deploy; consider sprite‑atlas + webp to cut first load further | Currently ~5MB zip |

## P2 — Mid‑term (research + content depth)
| Item | Why |
|---|---|
| **Telemetry implementation** | Per [`TELEMETRY_PLAN.md`](TELEMETRY_PLAN.md) — isolated store, `?uid`, mirrored schema. Build only **after Reboot 2050 data collection**, never touching Reboot's store |
| **Korean study readiness** | KO shipped; add KO tutorial/voice check, KO debrief copy review with operator |
| **Content variety** | More techs (e.g., differential privacy, red‑teaming), more events, scenario seeds with distinct starting biases |
| **Difficulty modes** | Guided / Standard / Expert (resource & bias intensity) for different audiences |
| **In‑game glossary** | Tap any concept term → short definition (ties to competency map) |
| **Facilitator/debrief view** | Printable end‑of‑session summary (meters trajectory + concepts explored) for teachers |

## P3 — Long‑term (suite & platform)
| Item | Why |
|---|---|
| **Two‑game suite portal** | One landing page launching Reboot 2050 + ALGOPOLIS with shared `?uid`; sequence "citizen → designer" |
| **Combined analytics dashboard** | Read‑only view over both games' (isolated) telemetry, joined on participant id |
| **True 3D building meshes** | Optional upgrade from billboards to low‑poly meshes that turn with the camera |
| **Procedural maps & biomes** | Replayability; seed sharing |
| **Classroom / multiplayer mode** | Cohort sessions, shared scenarios, compare‑your‑algorithm |
| **Teacher authoring** | Edit scenarios / events / weights without code; export results |

## Cross‑cutting / tech debt
- **Modularize** `index.html` (sim / render / HUD / tour as ES modules) for maintainability and tests.
- **Automated checks**: keep the node sim‑invariant harness; add a tiny puppeteer smoke test in CI.
- **i18n scale**: structure ready for more languages beyond EN/KO.
- **Verification discipline**: every deploy → node `--check` + sim harness + headless screenshot (engine serves an iframe app‑shell, so verify via render, not `curl`).

## Research alignment
Map every new mechanic to the competency framework in [`../README.md`](../README.md) (CT · AI literacy · AI ethics) and to study constructs (MEEGA+, ABCE, Tsai CT, Rest). Prefer changes that produce **observable behavioral evidence** (logged), not just self‑report.

## Guardrails
- Keep the **single‑page, zero‑backend** core (offline‑capable).
- **Never** modify Reboot 2050's Firestore/dashboard; ALGOPOLIS telemetry stays isolated.
- Pedagogy first: the bias feedback loop and the fairness↔efficiency tension are the product — don't dilute them for spectacle.
