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
  },
  ko: {
    title: "ALGOPOLIS",
    subtitle: "당신의 알고리즘이 도시를 다스린다",
    start: "도시 세우기",
    intro: [
      "당신은 도시의 알고리즘 설계자입니다. 8사이클에 걸쳐 도시를 건설(BUILD)하고, 새 역량을 연구(RESEARCH)하고, 하나의 정책 알고리즘으로 통치(GOVERN)합니다.",
      "처음엔 조잡한 도구(대리 데이터·비용절감·순찰)로 시작합니다. 인사이트를 테크트리에 투자해 더 공정하고 설명 가능한 AI를 해금하세요.",
      "통치: 데이터 읽기(INPUT) → 규칙 판단(LOGIC) → 행동(ACTION)을 조립해 맵 전체에 실행합니다. 다섯 미터—효율·후생·공정·신뢰·투명성—를 지켜보고, 불만도 주의하세요.",
      "다른 AI 통치 국가들이 리더보드에서 경쟁합니다. 승리에 도달하세요: 정의로운 청지기·혁신가·패권국. 단, 신뢰를 잃으면 도시는 붕괴합니다."
    ],
    introTip: "팁: 빨갛게 빛나는 타일은 굶주리는 중입니다. 형평 규칙과 서비스 요청을 연구해 편향을 고치세요.",
    cycle: "사이클", of: "/", era: "시대",
    eras: ["규칙 기반", "기계학습", "예측 자율"],
    eraNote: [
      "손으로 쓴 규칙. 편향이 작고 보이기 쉽습니다.",
      "모델이 과거 기록을 학습합니다 — 그 안의 편향까지 증폭하면서.",
      "시스템이 예측으로 행동합니다. 투명성이 없으면 신뢰가 무너집니다."
    ],
    resources: { budget: "예산", data: "데이터", insight: "인사이트", unrest: "불만" },
    resHelp: {
      budget: "타일 건설·업그레이드에 사용. 매 사이클 도시에서 수입 발생.",
      data: "자원이 올바른 타일에 닿는 정확도를 높이고 인사이트를 공급.",
      insight: "연구 점수. 테크트리에 써서 블록·정책을 해금.",
      unrest: "공정·신뢰가 낮으면 상승. 높으면 신뢰 손상, 최대치면 게임 종료."
    },
    meters: { efficiency: "효율", welfare: "후생", fairness: "공정", trust: "신뢰", transparency: "투명성" },
    tabs: { build: "건설", govern: "통치", research: "연구", world: "세계" },
    buildLabel: "도시 건설", governLabel: "알고리즘 설계",
    zones: { residential: "주거구", civic: "행정구", industrial: "산업구", data: "데이터센터" },
    zoneDesc: {
      residential: "주택. 실제 수요 높음, 과거 데이터엔 과소기록. 예산↑.",
      civic: "행정. 인사이트·예산↑, 인접 구역 신뢰 상승.",
      industrial: "산업. 예산↑, 주거 인접 시 불만 상승.",
      data: "데이터센터. 매 사이클 데이터↑, 분배·연구를 날카롭게."
    },
    upgrade: { name: "타일 업그레이드", desc: "예산을 써서 지어진 타일 레벨↑ (산출·수요 증가)." },
    inspect: { name: "조사", desc: "지어진 타일을 탭하면 건설 대신 데이터 디버그." },
    cost: "비용", lvl: "Lv", locked: "잠김 — 연구로 해금", placeHint: "구역을 고른 뒤 빈 타일을 탭하세요. 업그레이드는 레벨↑, 조사는 디버그.",
    noBudget: "예산이 부족합니다.",
    slots: { input: "1 · INPUT — 데이터 읽기", logic: "2 · LOGIC — 판단", action: "3 · ACTION — 행동" },
    blocks: {
      in_requests: { name: "서비스 요청", desc: "주민이 지금 실제로 요청하는 것. 실제·현재 수요 반영." },
      in_history:  { name: "과거 기록", desc: "이전에 자원이 간 곳. 과거의 모든 편향을 이어받음." },
      in_income:   { name: "소득 수준", desc: "타일별 부. 싼 대리지표지만 가난한 곳을 불리하게." },
      in_sensors:  { name: "위험 점수", desc: "불투명한 예측 위험 수치. 강력하지만 설명하기 어렵다." },
      lg_risk:  { name: "최고 위험 집중", desc: "점수 높은 곳에 자원 집중. 효율적이지만 편향을 날카롭게." },
      lg_under: { name: "최저 수혜 우선", desc: "가장 덜 받은 타일을 도움. 공정을 회복." },
      lg_equal: { name: "균등 분배", desc: "모든 타일 동일. 안전·신뢰받지만 최적은 아님." },
      lg_cost:  { name: "비용 최소화", desc: "가장 싼 타일이 승리. 수치는 좋지만 후생·신뢰를 깎음." },
      ac_patrol:  { name: "순찰 배치", desc: "단속 존재. 통제는 늘지만 신뢰를 깎을 수 있음." },
      ac_budget:  { name: "예산 배분", desc: "타일에 예산 이동. 폭넓고 공정에 우호적." },
      ac_service: { name: "서비스 파견", desc: "의료·수리·아웃리치. 후생·신뢰를 올림." }
    },
    research: { label: "연구 트리", spend: "연구", done: "완료", need: "인사이트 {n} 필요", unlocks: "해금", tiers: ["규칙 기반", "기계학습", "예측 자율"] },
    techs: {
      t_requests: { name: "민원 데스크", desc: "주민이 실제로 요청하는 것을 수집.", un: "INPUT: 서비스 요청" },
      t_under:    { name: "형평 규칙", desc: "가장 덜 받은 구역을 우선.", un: "LOGIC: 최저 수혜 우선" },
      t_service:  { name: "공공 서비스", desc: "의료·아웃리치를 구축.", un: "ACTION: 서비스 파견" },
      t_budgeta:  { name: "예산실", desc: "구역에 직접 예산 배분.", un: "ACTION: 예산 배분" },
      t_history:  { name: "과거 데이터 모델", desc: "과거 배분 기록(그 편향까지)을 학습.", un: "INPUT: 과거 기록" },
      t_risk:     { name: "위험 점수화", desc: "위험을 예측해 겨냥.", un: "INPUT: 위험 점수 · LOGIC: 위험 집중" },
      t_equal:    { name: "균형 분배", desc: "고르고 신뢰받는 분배.", un: "LOGIC: 균등 분배" },
      t_aid:      { name: "선별 지원", desc: "정책: 고수요 타일에 추가 지원.", un: "정책: 선별 지원" },
      t_federated:{ name: "연합 데이터", desc: "정책: 모으지 않고 측정 — 편향이 천천히 누적.", un: "정책: 연합 데이터" },
      t_explain:  { name: "설명 의무", desc: "정책: 각 결정의 이유를 공개.", un: "정책: 설명가능성" },
      t_audit:    { name: "알고리즘 감사", desc: "정책: 독립 검토가 공정 손상을 제한.", un: "정책: 알고리즘 감사" }
    },
    policiesLabel: "활성 정책", noPolicy: "아직 정책 없음 — 연구하세요.",
    policies: {
      means_aid:    { name: "선별 지원", desc: "매 사이클 후생·공정 +." },
      federated:    { name: "연합 데이터", desc: "데이터 편향이 더 천천히 누적." },
      explainability:{ name: "설명가능성", desc: "매 사이클 투명성 +." },
      audit:        { name: "알고리즘 감사", desc: "사이클당 공정 하락폭을 제한." }
    },
    run: "사이클 실행 ▶", runNeed: "세 알고리즘 슬롯을 모두 채우세요", runNoCity: "구역을 하나 이상 건설하세요",
    debug: {
      title: "타일 디버그 —", empty: "빈 부지. 구역을 지정해 도시에 편입하세요.",
      trueNeed: "실제 수요", recorded: "모델이 보는 데이터", served: "보낸 자원", close: "추적 닫기",
      fairWhy: "알고리즘이 “{src}”를 읽고 “{rule}”로 판단했습니다.",
      biased: "편향 루프: 실제 수요({t})가 데이터({r})보다 훨씬 높습니다. 과거·대리 데이터를 읽으면 이 타일이 저우선으로 보여 계속 굶주리고, 다음 사이클 데이터는 더 나빠집니다.",
      fairok: "균형: 데이터가 실제 수요와 거의 일치해 자원이 필요한 곳으로 갑니다.",
      fix: "고치기: INPUT “서비스 요청” + LOGIC “최저 수혜 우선”을 연구하세요."
    },
    eventTag: "이벤트",
    events: {
      ev_ml:   { title: "예측의 전환", text: "새 모델이 주거 구역들을 저우선으로 분류합니다 — 과거 기록이 빈약해서입니다. 모델은 확신하고, 기록은 불완전합니다.", a: "모델을 믿고 배포한다.", b: "멈추고 데이터를 감사한다." },
      ev_auto: { title: "블랙박스", text: "시민들이 시스템의 판단 이유를 보여달라 요구합니다. 알고리즘 공개는 운영을 느리게 하고 결함을 드러냅니다.", a: "블랙박스로 유지한다.", b: "알고리즘을 공개한다." },
      ev_panopole: { title: "외국 기술 제안", text: "파놉올이 자국 감시 위험모델을 수출하려 합니다 — 빠른 결과, 설명은 없음.", a: "도입한다.", b: "거절한다." },
      ev_aequa: { title: "공정 협약", text: "아에쿠아가 지역 공정 협약을 제안합니다. 서명하면 형평 기준에 구속됩니다.", a: "협약에 서명한다.", b: "독자 노선을 유지한다." },
      ev_leak: { title: "데이터 유출", text: "시민 기록이 유출됐습니다. 조용히 수습하거나, 공개할 수 있습니다.", a: "조용히 수습한다.", b: "공개한다." },
      ev_surplus: { title: "예산 흑자", text: "효율이 흑자를 냈습니다. 쓸까요, 모을까요?", a: "서비스에 재투자.", b: "세금 인하." },
      ev_protest: { title: "구역 시위", text: "굶주린 구역이 거리로 나섰습니다.", a: "순찰을 보낸다.", b: "불만을 해결한다." },
      ev_vendor: { title: "벤더 옵티마이저", text: "처리량을 높여주는 블랙박스 최적화기를 벤더가 판매합니다.", a: "구매한다.", b: "자체 개발한다." },
      ev_whistle: { title: "내부고발", text: "한 엔지니어가 파이프라인에 묻힌 편향을 폭로합니다.", a: "보고서를 덮는다.", b: "조치한다." },
      ev_proxy: { title: "대리지표의 함정", text: "소득을 수요의 대리지표로 쓰는 건 싸지만, 가난한 구역을 조용히 불리하게 합니다.", a: "대리지표를 유지한다.", b: "실제 신호에 투자한다." },
      ev_automation: { title: "자동화 편향", text: "운영자들이 검토 없이 모델의 결정을 그대로 승인하고 있습니다.", a: "자동화를 신뢰한다.", b: "사람 검토를 의무화한다." }
    },
    world: { label: "국가들", you: "내 도시", rankShort: "순위", accord: "공정 협약 체결" },
    nations: {
      optigrad: { name: "옵티그라드", style: "효율 우선 기술관료국" },
      aequa:    { name: "아에쿠아", style: "형평 공화국" },
      panopole: { name: "파놉올", style: "감시 국가" }
    },
    endTitle: "통치 종료", legacy: "유산 점수", rankLine: "{n}개국 중 {k}위.",
    paths: {
      collapse: { name: "붕괴", verdict: "신뢰가 무너졌습니다. 더 이상 자신의 알고리즘을 믿지 않는 도시는 그 알고리즘으로 통치될 수 없습니다." },
      just:     { name: "정의로운 청지기", verdict: "효율적이면서 공정하고 설명 가능한 통치 — 알고리즘 거버넌스에서 가장 어려운 균형을 지켜냈습니다." },
      innovator:{ name: "혁신가", verdict: "설명가능 AI 스택을 구축했습니다: 깊은 연구와 높은 투명성. 감사 가능한 미래입니다." },
      hegemon:  { name: "패권국", verdict: "세계 리더보드 1위 — 맵에서 가장 균형 잡힌 체제입니다." },
      steward:  { name: "일하는 시장", verdict: "작동하는 도시, 그러나 남겨둔 절충들. 다시 돌려보세요." },
      tyrant:   { name: "알고리즘 폭군", verdict: "편향된 데이터로 효율을 냈습니다. 수치는 좋았지만 구역들이 동의 없이 굶주렸습니다." }
    },
    again: "다시 통치",
    objective: "목표: 다섯 미터를 모두 균형 있게 — 정의로운 청지기가 되세요.",
    tourTry: { build: "👉 아래 구역을 고르고 맵의 빈 타일을 탭하세요.", govern: "👉 INPUT·LOGIC·ACTION을 하나씩 고르세요.", run: "👉 사이클 실행을 누르세요." },
    tourWait: "동작을 완료하면 계속됩니다…",
    debrief: {
      bias: "편향 루프 형성 중 — 굶주린 구역의 데이터가 실제 수요 아래로 흘러내립니다. INPUT “서비스 요청” + LOGIC “최저 수혜 우선”을 시도하세요.",
      fair: "공정이 오릅니다 — 형평 로직이 가장 필요한 구역에 닿고 있습니다.",
      unrest: "불만이 오릅니다. 낮은 공정·신뢰가 도시를 흔듭니다.",
      collapse: "신뢰가 위험할 정도로 낮습니다. 도시가 알고리즘을 더는 믿지 않으면 통치할 수 없습니다.",
      effic: "효율적이지만 불균등. 한 구역이 조용히 굶어도 총 후생은 멀쩡해 보입니다 — 공정을 보세요.",
      balanced: "균형 잡힌 사이클: 효율·후생·공정이 함께 움직입니다.",
      research: "새 역량 해금 — 더 공정하고 설명 가능한 도구가 열렸습니다."
    },
    conceptsTitle: "탐구한 개념",
    concepts: {
      decomposition: "분해 — 정책을 INPUT → LOGIC → ACTION으로 나누기.",
      feedback: "편향 피드백 루프 — 굶긴 구역의 데이터가 다음 사이클에 더 나빠짐.",
      debug: "디버깅 — 타일이 왜 그 결과를 얻었는지 추적.",
      fairness: "공정 ↔ 효율 절충.",
      transparency: "투명성 — 설명 가능한 결정이 신뢰를 지탱.",
      research: "역량 진보 — 조잡한 대리지표에서 설명·감사 가능한 AI로."
    },
    help: "튜토리얼",
    tour: {
      skip: "건너뛰기", back: "이전", next: "다음", done: "플레이 시작",
      steps: [
        "환영합니다, 설계자님. 진짜 3D 도시입니다 — 드래그로 궤도 회전, ⟲ ⟳로 회전, 스크롤로 줌.",
        "건설: 구역(주거·행정·산업·데이터센터)을 골라 빈 타일을 탭하세요. 각 건설은 예산을 씁니다.",
        "네 자원: 예산은 건설, 데이터는 분배 정확도, 인사이트는 연구, 불만은 위험 경고.",
        "다섯 미터가 통치를 평가합니다: 효율·후생·공정·신뢰·투명성. 모두 균형을.",
        "통치: 알고리즘 하나를 조립 — 데이터 읽기(INPUT)·판단(LOGIC)·행동(ACTION). 🔒는 연구 필요.",
        "사이클 실행으로 알고리즘을 맵 전체에 적용하고 미터 변화를 보세요.",
        "연구: 인사이트를 써서 조잡한 대리지표에서 공정·설명·감사 가능한 AI로 나아가세요.",
        "세계: 경쟁 AI 국가들이 실시간 리더보드에서 겨룹니다. 균형 유산으로 앞서세요.",
        "타일을 탭해 데이터를 디버그하고 편향을 잡으세요. 8사이클 생존 — 균형이 순수 효율을 이깁니다. 행운을!"
      ]
    },
    meterHelp: {
      efficiency: "알고리즘이 도시 전반에 내는 처리량.",
      welfare: "각 구역의 실제 수요 대비 평균 충족도.",
      fairness: "결과가 얼마나 고르게 퍼졌는가 — 편차가 작을수록 공정.",
      trust: "시민의 신뢰. 불공정·불투명 통치 시 붕괴.",
      transparency: "결정이 시민에게 얼마나 설명 가능한가."
    },
    learn: "무엇을 가르치는가",
    learnBody: "알고리즘 분해(input→logic→action), 편향 피드백 루프 디버깅, 조잡한 대리지표에서 설명·감사 가능한 AI로 가는 연구 아크, 그리고 공정·투명성·신뢰의 거버넌스 절충 — 예측 치안·복지 심사·신용 평가의 실제 긴장과 동일합니다."
  }
};
