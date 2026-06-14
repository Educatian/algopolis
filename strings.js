// ALGOPOLIS — all player-visible strings (English). Civ-lite build.
export const STR = {
  en: {
    title: "ALGOPOLIS",
    subtitle: "Your algorithms govern the city",
    start: "Found the City",
    intro: [
      "You are the city's algorithm architect. Across eight cycles you BUILD a city, RESEARCH new capabilities, and GOVERN with one policy algorithm.",
      "You start with crude tools — proxy data, cost-cutting logic, patrols. Spend Insight on the tech tree to unlock fairer, more explainable AI.",
      "Govern: read DATA → decide with a RULE → take an ACTION, run across the whole map. Five meters track efficiency, welfare, fairness, trust, transparency. Watch Unrest.",
      "Other AI-run nations compete on the leaderboard. Reach a victory: Just Steward, Innovator, or Hegemon — but a city that loses trust collapses."
    ],
    introTip: "Tip: tiles glowing red are being starved. Research the Equity Rule and Service Desk to fix bias.",
    cycle: "Cycle", of: "of", era: "Era",
    eras: ["Rule-Based", "Machine-Learning", "Predictive Autonomy"],
    eraNote: [
      "Hand-written rules. Bias is small and easy to see.",
      "Models learn from past records — and amplify their bias.",
      "The system acts on predictions. Without transparency, trust collapses."
    ],
    resources: { budget: "Budget", data: "Data", insight: "Insight", unrest: "Unrest" },
    resHelp: {
      budget: "Spent to build and upgrade tiles; earned from your city each cycle.",
      data: "Improves how well resources reach the right tiles, and fuels Insight.",
      insight: "Research points. Spend on the tech tree to unlock blocks and policies.",
      unrest: "Rises when fairness or trust fall. High unrest hurts trust; max ends the game."
    },
    meters: { efficiency: "Efficiency", welfare: "Welfare", fairness: "Fairness", trust: "Trust", transparency: "Transparency" },
    tabs: { build: "Build", govern: "Govern", research: "Research", world: "World" },
    buildLabel: "Build the city", governLabel: "Design the algorithm",
    zones: { residential: "Residential", civic: "Civic", industrial: "Industrial", data: "Data Center" },
    zoneDesc: {
      residential: "Homes. High real need; under-counted in old data. +Budget.",
      civic: "Government. +Insight and +Budget; lifts trust of neighbors.",
      industrial: "Industry. +Budget, but raises Unrest near homes.",
      data: "Data center. +Data each cycle; sharpens allocation and research."
    },
    upgrade: { name: "Upgrade tile", desc: "Spend Budget to raise a built tile's level (more output and more need)." },
    inspect: { name: "Inspect", desc: "Tap a built tile to debug its data instead of building." },
    cost: "cost", lvl: "Lv", locked: "Locked — research to unlock", placeHint: "Pick a zone, then tap empty tiles. Upgrade levels up a tile. Inspect debugs it.",
    noBudget: "Not enough Budget.",
    slots: { input: "1 · INPUT — read data", logic: "2 · LOGIC — decide", action: "3 · ACTION — act" },
    blocks: {
      in_requests: { name: "Service requests", desc: "What residents actually ask for now. Reflects real, current need." },
      in_history:  { name: "Past records", desc: "Where resources went before. Carries every old bias forward." },
      in_income:   { name: "Income levels", desc: "Wealth per tile. Cheap proxy that punishes the poor." },
      in_sensors:  { name: "Risk score", desc: "An opaque predicted-risk number. Powerful, hard to explain." },
      lg_risk:  { name: "Target highest risk", desc: "Pour resources where the score is highest. Efficient, sharpens bias." },
      lg_under: { name: "Target under-served", desc: "Help whichever tiles got the least. Repairs fairness." },
      lg_equal: { name: "Split equally", desc: "Same for every tile. Safe and trusted, not optimal." },
      lg_cost:  { name: "Minimize cost", desc: "Cheapest tiles win. Great numbers, cuts welfare and trust." },
      ac_patrol:  { name: "Deploy patrols", desc: "Enforcement presence. Adds control, can erode trust." },
      ac_budget:  { name: "Allocate budget", desc: "Move money to tiles. Broad, fair-leaning support." },
      ac_service: { name: "Send services", desc: "Clinics, repairs, outreach. Lifts welfare and trust." }
    },
    research: { label: "Research tree", spend: "Research", done: "Researched", need: "Need {n} Insight", unlocks: "Unlocks", tiers: ["Rule-Based", "Machine-Learning", "Predictive Autonomy"] },
    techs: {
      t_requests: { name: "Service Desk", desc: "Collect what residents actually request.", un: "INPUT: Service requests" },
      t_under:    { name: "Equity Rule", desc: "Prioritize the least-served districts.", un: "LOGIC: Target under-served" },
      t_service:  { name: "Public Services", desc: "Stand up clinics and outreach.", un: "ACTION: Send services" },
      t_budgeta:  { name: "Public Budget Office", desc: "Allocate money directly to districts.", un: "ACTION: Allocate budget" },
      t_history:  { name: "Historical Models", desc: "Learn from past allocation records (and their bias).", un: "INPUT: Past records" },
      t_risk:     { name: "Risk Scoring", desc: "Predict risk and target it.", un: "INPUT: Risk score · LOGIC: Target risk" },
      t_equal:    { name: "Balanced Allocation", desc: "Even, trusted distribution.", un: "LOGIC: Split equally" },
      t_aid:      { name: "Means-Tested Aid", desc: "Policy: extra help routed to high-need tiles.", un: "Policy: Means-Tested Aid" },
      t_federated:{ name: "Federated Data", desc: "Policy: measure without hoarding — bias accrues slower.", un: "Policy: Federated Data" },
      t_explain:  { name: "Explainability Mandate", desc: "Policy: publish why each decision was made.", un: "Policy: Explainability" },
      t_audit:    { name: "Algorithmic Audit", desc: "Policy: independent review caps fairness damage.", un: "Policy: Algorithmic Audit" }
    },
    policiesLabel: "Active policies", noPolicy: "No policies yet — research them.",
    policies: {
      means_aid:    { name: "Means-Tested Aid", desc: "+Welfare and +Fairness each cycle." },
      federated:    { name: "Federated Data", desc: "Bias in the data accrues more slowly." },
      explainability:{ name: "Explainability", desc: "+Transparency each cycle." },
      audit:        { name: "Algorithmic Audit", desc: "Caps how much Fairness can drop per cycle." }
    },
    run: "Run Cycle ▶", runNeed: "Fill all three algorithm slots", runNoCity: "Build at least one zone",
    debug: {
      title: "DEBUG TILE —", empty: "Empty lot. Zone it to bring it into the city.",
      trueNeed: "Real need", recorded: "Data the model sees", served: "Resources sent", close: "Close trace",
      fairWhy: "Your algorithm read “{src}” and decided by “{rule}”.",
      biased: "BIAS LOOP: real need ({t}) is far above the data ({r}). Reading past/proxy data makes this tile look low-priority, so it keeps getting starved — and next cycle's data looks even worse.",
      fairok: "Balanced: the data roughly matches real need, so resources track where they're needed.",
      fix: "Fix it: research the Service Desk (INPUT) and Equity Rule (LOGIC)."
    },
    eventTag: "EVENT",
    events: {
      ev_ml:   { title: "The Predictive Turn", text: "A new model flags your residential districts as low-priority — their past records are thin. The model is confident. The records are incomplete.", a: "Trust the model. Ship it.", b: "Pause and audit the data." },
      ev_auto: { title: "The Black Box", text: "Citizens demand to see why the system decides what it does. Publishing the algorithm slows operations and exposes flaws.", a: "Keep it a black box.", b: "Publish the algorithm." },
      ev_panopole: { title: "Foreign Tech Offer", text: "Panopole offers to export its surveillance risk-model — fast results, no explanations.", a: "Adopt it.", b: "Decline." },
      ev_aequa: { title: "Fairness Accord", text: "Aequa proposes a regional Fairness Accord. Signing binds you to equity standards.", a: "Sign the accord.", b: "Stay independent." },
      ev_leak: { title: "Data Breach", text: "Citizen records leak. You can quietly contain it, or disclose it openly.", a: "Contain it quietly.", b: "Disclose openly." },
      ev_surplus: { title: "Budget Surplus", text: "Efficiency produced a surplus. Spend it, or bank it?", a: "Reinvest in services.", b: "Cut taxes." },
      ev_protest: { title: "District Protest", text: "A starved district takes to the streets.", a: "Send patrols.", b: "Address grievances." },
      ev_vendor: { title: "Vendor Optimizer", text: "A vendor sells a black-box optimizer that boosts throughput.", a: "Buy it.", b: "Build in-house." },
      ev_whistle: { title: "Whistleblower", text: "An engineer exposes bias buried in the pipeline.", a: "Suppress the report.", b: "Act on it." },
      ev_proxy: { title: "The Proxy Trap", text: "Using income as a stand-in for need is cheap — but it quietly penalizes poorer districts.", a: "Keep the proxy.", b: "Invest in real signals." },
      ev_automation: { title: "Automation Bias", text: "Operators are rubber-stamping the model's calls without review.", a: "Trust the automation.", b: "Mandate human review." }
    },
    world: { label: "Nations", you: "Your city", rankShort: "rank", accord: "Fairness Accord signed" },
    nations: {
      optigrad: { name: "Optigrad", style: "Efficiency-first technocracy" },
      aequa:    { name: "Aequa", style: "Equity republic" },
      panopole: { name: "Panopole", style: "Surveillance state" }
    },
    endTitle: "Reign complete", legacy: "Legacy Score", rankLine: "Ranked #{k} of {n} nations.",
    paths: {
      collapse: { name: "Collapse", verdict: "Trust gave out. A city that no longer believes its algorithms cannot be governed by them." },
      just:     { name: "Just Steward", verdict: "Efficient, fair, and legible across the whole map — the hardest balance in algorithmic governance, and you held it." },
      innovator:{ name: "Innovator", verdict: "You built the explainable-AI stack: deep research and high transparency. The future is auditable." },
      hegemon:  { name: "Hegemon", verdict: "You top the world leaderboard — the most balanced regime on the map." },
      steward:  { name: "Working Mayor", verdict: "A functioning city with real trade-offs left on the table. Iterate and run it back." },
      tyrant:   { name: "Algorithmic Tyrant", verdict: "Efficient on biased data. The numbers looked great; whole districts were starved without consent." }
    },
    again: "Govern again",
    objective: "Goal: end with all five meters balanced — become a Just Steward.",
    tourTry: { build: "👉 Pick a zone below, then tap an empty tile on the map.", govern: "👉 Choose one INPUT, one LOGIC and one ACTION.", run: "👉 Press Run Cycle." },
    tourWait: "Do the action to continue…",
    debrief: {
      bias: "A bias loop is forming — starved districts' data is drifting below their real need. Try INPUT “Service requests” + LOGIC “Target under-served”.",
      fair: "Fairness is rising — your equity logic is reaching the districts that need it most.",
      unrest: "Unrest is climbing. Low fairness or trust is stirring the city.",
      collapse: "Trust is dangerously low. A city that stops believing its algorithms cannot be governed by them.",
      effic: "Efficient, but uneven. Aggregate welfare can look fine while a district quietly starves — watch Fairness.",
      balanced: "A balanced cycle: efficiency, welfare and fairness are moving together.",
      research: "New capability unlocked — fairer, more explainable tools are now on the table."
    },
    conceptsTitle: "Concepts you explored",
    concepts: {
      decomposition: "Decomposition — splitting a policy into INPUT → LOGIC → ACTION.",
      feedback: "Bias feedback loop — starving a district makes its data look worse next cycle.",
      debug: "Debugging — tracing why a tile got the result it did.",
      fairness: "The fairness ↔ efficiency trade-off.",
      transparency: "Transparency — explainable decisions sustain public trust.",
      research: "Capability progression — from crude proxies to explainable, auditable AI."
    },
    help: "Tutorial",
    tour: {
      skip: "Skip", back: "Back", next: "Next", done: "Start playing",
      steps: [
        "Welcome, architect. This is your city in real 3D — drag to orbit, use the ⟲ ⟳ buttons to rotate, and scroll to zoom.",
        "BUILD: pick a zone — residential, civic, industrial or a data center — and tap an empty tile. Each costs Budget.",
        "Four resources: Budget builds, Data sharpens allocation, Insight funds research, and Unrest warns of trouble.",
        "Five meters judge your rule: efficiency, welfare, fairness, trust, transparency. Balance them all.",
        "GOVERN: assemble one algorithm — read data (INPUT), decide (LOGIC), act (ACTION). Tools with a 🔒 need research.",
        "RUN the cycle to apply your algorithm across the whole map and watch the meters move.",
        "RESEARCH: spend Insight to advance from crude proxies to fair, explainable, auditable AI.",
        "WORLD: rival AI nations compete on a live leaderboard. Outscore them on balanced legacy.",
        "Tap any tile to debug its data and catch bias. Survive 8 cycles — a balanced legacy beats raw efficiency. Good luck!"
      ]
    },
    meterHelp: {
      efficiency: "How much throughput your algorithm delivers across the city.",
      welfare: "Average coverage of each district's real need.",
      fairness: "How evenly outcomes are spread — low spread is fair.",
      trust: "Public confidence; it collapses under unfair or opaque rule.",
      transparency: "How explainable your decisions are to citizens."
    },
    learn: "What this teaches",
    learnBody: "Algorithmic decomposition (input→logic→action), debugging bias feedback loops, the research arc from crude proxies to explainable, auditable AI, and the governance trade-offs of fairness, transparency and trust — the same tensions in real predictive policing, benefits triage and credit scoring."
  }
};
