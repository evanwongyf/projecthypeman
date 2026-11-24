// The shape of a written archive guide. Guides are plain data so one renderer can show
// any of them; the text supports **bold**, *italic*, [links](@topic/path) and maths written
// in TeX between \( and \), where a link starting with @ points at another archive page.

// The named accent colours a diagram or mindmap node can take, mapped to CSS vars by the
// renderer (see DIAGRAM_TONE in GuideBlocks.tsx).
export type DiagramTone = 'orange' | 'mustard' | 'teal' | 'pink' | 'mint' | 'lavender' | 'ink'

export type Block =
  | { t: 'p'; text: string }
  | { t: 'list'; items: string[]; ordered?: boolean }
  | { t: 'callout'; tone: 'tip' | 'warn' | 'note' | 'myth' | 'fact'; title?: string; text: string }
  | { t: 'cards'; items: { title: string; body: string; tag?: string }[]; cols?: 2 | 3 }
  | { t: 'steps'; items: { title: string; body: string }[] }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  // Ordered levels, lowest first, drawn as a ladder: taxonomies, stages, tiers.
  | { t: 'levels'; items: { name: string; body: string; verbs?: string[] }[]; caption?: string }
  // A repeating loop of stages: Kolb, Gibbs, plan-do-review.
  | { t: 'cycle'; items: { name: string; body: string }[]; caption?: string }
  | { t: 'quote'; text: string; by?: string }
  | { t: 'terms'; items: { term: string; def: string }[] }
  | { t: 'dodont'; do: string[]; dont: string[] }
  // A worked example or classroom script, one labelled line at a time.
  | { t: 'example'; title: string; lines: { label?: string; text: string }[] }
  | { t: 'checklist'; items: string[] }
  // A curated list of other archive pages, shown as cards, each with an optional note.
  | { t: 'links'; items: { path: string; note?: string }[] }
  // An interactive tool, built as its own component.
  | { t: 'tool'; tool: 'objective-builder' | 'revision-planner' }
  // Sign language: the alphabet or numbers drawn as animated hands (all, or just `only`),
  // a set of word signs from lib/sign/words, and the signing tools.
  | { t: 'handshapes'; set: 'alphabet' | 'numbers'; only?: string[] }
  | { t: 'signs'; words: string[] }
  | { t: 'sign-tool'; tool: 'settings' | 'fingerspeller' | 'phrases' | 'chart' }
  // Fitness: 3D animated exercises (ids from lib/fitness/moves) and the training calculators.
  | { t: 'exercises'; ids: string[] }
  // A displayed formula in TeX, with an optional legend of its symbols (also TeX).
  // `syntax` teaches how to read the notation (how to say each symbol or operator aloud and
  // what it asks you to do); `worked` plugs real numbers into the formula one step at a time.
  // Step and answer text may contain \( TeX \) like any other prose.
  | {
      t: 'math'
      tex: string
      caption?: string
      // A plain-words story of what the formula does, for complete beginners, shown before the
      // piece-by-piece notation guide.
      plain?: string
      where?: { sym: string; def: string }[]
      syntax?: { sym: string; say: string }[]
      // `why` gives each step its reason, shown in brackets after the step.
      worked?: { title?: string; steps: string[]; why?: string[]; answer: string }
    }
  // The medication reference browser (see lib/medicine). `cls` locks it to one drug class.
  | { t: 'med-browser'; cls?: string }
  // First aid: an animated, step-by-step bandaging technique (see lib/firstaid/bandages), drawn
  // as original schematic diagrams (no photo dataset of bandaging technique exists), and a
  // browser of first aid kit equipment and what each item is for (see lib/firstaid/equipment).
  | { t: 'bandage'; id: 'sling' | 'spiral-wrap' | 'figure-eight-ankle' | 'pressure-dressing' | 'head-wrap' | 'joint-spica' }
  | { t: 'first-aid-kit'; category?: string }
  // A metric or formula explained for reading, not just computing: what it measures, a
  // plain-English (ELI5) version, and what a higher or lower reading implies. `typical`
  // is an optional "in practice" range or rule of thumb.
  | {
      t: 'metric'
      name: string
      shows: string
      eli5: string
      higher: string
      lower: string
      typical?: string
    }
  // A candlestick chart from [open, high, low, close] rows; `mark` highlights candles by
  // index, `lines` draws labelled price levels.
  | {
      t: 'candles'
      rows: number[][]
      mark?: number[]
      lines?: { y: number; label: string; at?: number }[]
      caption?: string
      title?: string
      // Simple moving averages to draw over the candles, by period.
      sma?: number[]
      boxes?: { from: number; to: number; label?: string; lo?: number; hi?: number; color?: string }[]
      points?: { i: number; label: string; at?: 'high' | 'low' }[]
      segments?: { from: [number, number]; to: [number, number]; label?: string; color?: string; dashed?: boolean }[]
      arrows?: { i: number; from: number; to: number; label?: string }[]
      height?: number
    }
  // A plotted diagram: curves given as functions, points, reference lines and shaded areas.
  | {
      t: 'plot'
      title?: string
      x: [number, number]
      y: [number, number]
      xLabel?: string
      yLabel?: string
      curves?: { f: (x: number) => number; label?: string; color?: string; dashed?: boolean; from?: number; to?: number }[]
      data?: { pts: [number, number][]; label?: string; color?: string; dashed?: boolean; dots?: boolean }[]
      points?: { x: number; y: number; label: string }[]
      vlines?: { x: number; label?: string }[]
      hlines?: { y: number; label?: string }[]
      shade?: { from: number; to: number; label?: string; color?: string }[]
      // Filled regions given as polygons in data coordinates (surplus triangles, a tax wedge),
      // labelled at their centre or at `at`.
      areas?: { pts: [number, number][]; label?: string; color?: string; at?: [number, number] }[]
      // Straight segments in data coordinates: dashed drop lines to the axes, or arrows that
      // show a curve shifting.
      segments?: { from: [number, number]; to: [number, number]; label?: string; color?: string; dashed?: boolean; arrow?: boolean }[]
      caption?: string
    }
  | {
      t: 'fin-tool'
      tool: 'anatomy' | 'indicators' | 'patterns' | 'compound' | 'dcf' | 'ddm' | 'altman' | 'position' | 'heikin-ashi' | 'options' | 'black-scholes' | 'bond' | 'futures' | 'forex'
      // For the indicator lab: which indicator to show first.
      focus?: 'ma' | 'bollinger' | 'rsi' | 'macd' | 'atr' | 'stochastic' | 'obv' | 'donchian' | 'keltner' | 'ichimoku' | 'adx' | 'williams' | 'cci' | 'psar' | 'mfi'
    }
  | { t: 'fit-tool'; tool: 'pace' | 'race' | 'vo2' | 'hr' | 'plan' | 'one-rep-max' | 'timer' }
  // A code listing, lightly syntax-highlighted; lines wrap rather than scroll.
  | { t: 'code'; code: string; lang?: 'python' | 'bash' | 'text'; title?: string; caption?: string }
  // A flowchart: boxes joined by arrows, left to right on wide screens and top to bottom
  // on phones; `loop` adds a labelled arrow back to the start.
  | { t: 'flow'; nodes: { label: string; sub?: string; tone?: 'data' | 'model' | 'process' | 'output' | 'human' }[]; title?: string; loop?: string; caption?: string }
  // A freely laid out flowchart: nodes placed on a small (col, row) grid, joined by curved
  // or straight arrows that leave and enter whichever side is nearest, so branches can run
  // left, right, up or down rather than only downward. Good for decision trees, triage and
  // branching processes. `shape` distinguishes a decision (diamond), a start/end (pill), a
  // step (rect, the default) or a small junction (circle). An edge's `label` sits at its
  // midpoint (for example "yes" / "no" off a decision diamond).
  | {
      t: 'diagram'
      title?: string
      caption?: string
      nodes: { id: string; label: string; sub?: string; col: number; row: number; shape?: 'rect' | 'pill' | 'diamond' | 'circle'; tone?: DiagramTone; w?: number }[]
      edges: { from: string; to: string; label?: string; tone?: DiagramTone; dashed?: boolean }[]
    }
  // A mindmap: one central idea with branches radiating out at varied angles, each branch
  // optionally carrying a short list of sub-points. Good for a topic overview where a strict
  // top-to-bottom flow would be artificial.
  | { t: 'mindmap'; center: string; branches: { label: string; tone?: DiagramTone; items?: string[] }[]; caption?: string }
  // Artificial intelligence: interactive diagrams and labs.
  | {
      t: 'ai-viz'
      viz:
        | 'gradient-descent' | 'optimizers' | 'linreg' | 'overfit' | 'perceptron' | 'knn' | 'kmeans' | 'tree' | 'forest' | 'svm' | 'pca' | 'threshold'
        | 'network' | 'playground' | 'backprop' | 'conv' | 'attention' | 'embedding' | 'bpe' | 'sampling' | 'diffusion' | 'qlearning'
    }
  // A formal proof, laid out as statement/reason pairs, so the logical chain is visible
  // step by step; ends with a ∎. `given` lists starting assumptions, `claim` what is
  // being shown.
  | {
      t: 'proof'
      claim: string
      given?: string[]
      steps: { statement: string; reason: string }[]
      method?: 'direct' | 'contradiction' | 'induction' | 'contrapositive' | 'counterexample'
      note?: string
    }
  // Mathematics: interactive diagrams for reading and exploring a function, limit,
  // derivative, integral, vector or matrix.
  | {
      t: 'math-viz'
      viz: 'function-explorer' | 'limit-explorer' | 'derivative-explorer' | 'riemann-sum' | 'vector-ops' | 'matrix-transform'
    }
  // Sports science: interactive diagrams for projectile motion, F1 aerodynamics/grip,
  // and tyre degradation and pit strategy.
  | {
      t: 'sports-viz'
      viz: 'projectile' | 'downforce' | 'tyre-strategy'
    }
  // Formula 1 circuit atlas: maps, telemetry-style traces, corner tables and lap-model labs
  // computed from the circuit's traced centreline (see lib/f1). `circuit` is a circuit id
  // such as "monza"; `sector` picks one of the lap's three sectors for the sector view.
  | {
      t: 'f1-viz'
      viz:
        | 'map' | 'sector' | 'traces' | 'corners' | 'explorer' | 'sensitivity' | 'gg'
        | 'atlas-rank' | 'atlas-scatter' | 'atlas-grid' | 'atlas-table' | 'atlas-sensitivity'
        | 'line-demo' | 'cornering-limit' | 'curvature' | 'passes'
      circuit?: string
      sector?: 1 | 2 | 3
    }
  // A horizontal bar chart (or forest plot when items have intervals): label, value, and an
  // optional interval [lo, hi] drawn as a whisker. Items with `group` set start a labelled group.
  | {
      t: 'bars'
      title?: string
      items: { label: string; value: number; lo?: number; hi?: number; group?: string; note?: string; color?: string }[]
      unit?: string
      // Draw the zero line (for effects that can be negative).
      zero?: boolean
      // Reference lines, e.g. conventional small / medium / large effect sizes.
      refs?: { at: number; label: string }[]
      // Axis range; defaults to the data.
      min?: number
      max?: number
      decimals?: number
      caption?: string
    }
  // Teaching and motivation: interactive tools and charts for the motivation shelf.
  | { t: 'teach-viz'; viz: 'motivation-audit' | 'flow-map' | 'arousal-curve' | 'effect-size' }
  // Learning labs: spacing and forgetting, attention across a lesson, agent reliability over many
  // steps, and an audit against Mayer's multimedia principles (illustrative models).
  | { t: 'learn-lab'; viz: 'forgetting-curve' | 'attention-lesson' | 'agent-reliability' | 'multimedia-audit' }
  // Cybersecurity: labs for the arithmetic of passwords, hashes, public-key crypto, risk
  // scoring and detection. Educational and defensive: nothing here attacks a real system.
  | {
      t: 'sec-viz'
      viz: 'password-entropy' | 'hash-avalanche' | 'birthday' | 'diffie-hellman' | 'rsa-toy' | 'risk-matrix' | 'cvss' | 'base-rate' | 'freq-analysis' | 'coverage'
    }
  // Cloud computing: labs for availability, queueing, scaling, caching, hashing, cost and
  // networking arithmetic.
  | { t: 'cloud-viz'; viz: 'nines' | 'queue' | 'autoscale' | 'cost' | 'ring' | 'cache' | 'quorum' | 'cidr' | 'percentiles' | 'latency' }
  // Quantitative finance and trading: simulations of prices, risk, portfolios, bet sizing and
  // strategy testing, always on synthetic data and labelled as such.
  | {
      t: 'quant-viz'
      viz: 'gbm' | 'returns-dist' | 'var' | 'frontier' | 'kelly' | 'trade-sim' | 'ou' | 'binomial' | 'overfit' | 'random-entry' | 'impact' | 'factor-regression'
    }
  // Weather and meteorology: labs for humidity, stability, wind, station plots, heat stress
  // and forecast skill.
  | { t: 'wx-viz'; viz: 'dewpoint' | 'lapse-rate' | 'geostrophic' | 'station-model' | 'heat-stress' | 'brier' }
  // Investing, forex and crypto labs: a stock screener, lump sum versus dollar-cost averaging,
  // allocation bands, pip and position sizing, cross rates, carry, AMMs, issuance, token unlocks, FX
  // hedging, network value and MVRV, on synthetic or illustrative data.
  | { t: 'fin-lab'; viz: 'screener' | 'dca-lump' | 'alloc-growth' | 'pip-calc' | 'cross-rates' | 'carry' | 'amm' | 'supply' | 'vesting' | 'fx-hedge' | 'metcalfe' | 'mvrv' }
  // Weather charts: radar, satellite, wind barbs and roses, isobar charts with fronts, skew-T diagrams,
  // meteograms, ensembles, IDF curves, cloud cover and Hovmöller diagrams, on synthetic data.
  // Survival skills: a step-by-step rope diagram of a knot or lashing (see lib/survival/knots).
  | { t: 'knot'; id: 'overhand' | 'clove-hitch' | 'reef' | 'bowline' | 'figure8' | 'square-lashing' | 'shear-lashing' | 'diagonal-lashing' }
  // Medicine: ECG labs and the annotatable image viewer for X-rays and MRI (see lib/medicine).
  | {
      t: 'med-chart'
      viz: 'ecg-anatomy' | 'ecg-lab' | 'ecg-12lead' | 'ecg-quiz' | 'imaging'
      rhythm?: 'sinus' | 'brady' | 'tachy' | 'afib' | 'flutter' | 'avb1' | 'mobitz1' | 'mobitz2' | 'chb' | 'svt' | 'pvc' | 'vt' | 'vf' | 'asystole' | 'stemi-ant' | 'stemi-inf' | 'hyperk' | 'lbbb' | 'pericarditis'
      set?: 'cxr' | 'bone' | 'mri-brain' | 'mri-spine'
      case?: string
    }
  // Tetris: stepped board diagrams (verified placements, spins and clears) and the piece rotation chart.
  // Neuroscience: an interactive brain atlas with side, middle and slice views.
  | { t: 'brain-map' }
  // Food therapy: a vitamin and mineral explorer, and a scalable recipe card.
  | { t: 'nutrient-explorer' }
  // Personality types: the pair explorer, the all-pairs heatmap, every type's stack, and one
  // type's table against all sixteen (see lib/personality).
  | { t: 'mbti'; viz: 'pair' | 'matrix' | 'stack' | 'type-table'; a?: string; b?: string }
  // Networking and IoT: an MQTT topic matcher, a radio link budget, battery life and TCP congestion.
  | { t: 'net-lab'; viz: 'mqtt' | 'link-budget' | 'battery' | 'tcp' }
  // Chinese dialects: a phrase table that reads itself aloud with the device's voices, and a
  // chart of a dialect's tones drawn as pitch contours.
  | { t: 'speak'; lang: 'mandarin' | 'cantonese' | 'hokkien' | 'teochew' | 'hakka' | 'hainanese'; title?: string; note?: string; items: { hz?: string; rom: string; say?: string; en: string; note?: string }[] }
  | { t: 'tones'; dialect: 'cantonese' | 'hokkien' | 'teochew' | 'hakka' | 'hainanese' }
  // Tarot: the 78-card deck browser, spreads you can draw, and a flashcard quiz.
  | { t: 'tarot'; mode: 'deck' | 'spread' | 'quiz'; suit?: 'major' | 'wands' | 'cups' | 'swords' | 'pentacles' }
  // Game theory and herd behaviour: payoff matrices, repeated-game tournaments, evolution,
  // Schelling segregation and information cascades.
  | { t: 'game-lab'; viz: 'payoff' | 'tournament' | 'evolution' | 'schelling' | 'cascade'; preset?: 'pd' | 'stag' | 'chicken' | 'bos' | 'pennies' | 'custom' }
  | {
      t: 'recipe'
      name: string
      jp?: string
      serves: number
      time: string
      tags: string[]
      ingredients: { qty?: number; unit?: string; item: string; note?: string }[]
      steps: string[]
      why: string
      note?: string
      // Kit needed, a rough cost per serving, and a photo key from lib/food/photos (credited
      // Wikimedia Commons images saved under public/food/img).
      equipment?: string[]
      cost?: string
      photo?: string
      // Swaps for allergies, budgets or what is in the cupboard.
      swaps?: string[]
    }
  // A grid of photographed foods with a line or two each (photo keys as for recipes).
  | { t: 'food-photos'; items: { photo: string; title: string; body: string }[] }
  | { t: 'tetris'; id: 'pieces' | 'holes' | 'holes-bad' | 'well' | 'combo' | 'perfect-clear' | 'tsd' | 'tss' | 'tst' | 'tmini' | 'no-spin' }
  | { t: 'wx-chart'; viz: 'radar' | 'zr-relation' | 'satellite' | 'wind-barb' | 'wind-rose' | 'isobar-map' | 'front-symbols' | 'skew-t' | 'meteogram' | 'ensemble' | 'idf' | 'oktas' | 'hovmoller' }
  // Banking: labs for interest, loans, money creation, capital, runs and credit risk.
  | { t: 'bank-viz'; viz: 'compound' | 'flat-rate' | 'amortisation' | 'money-multiplier' | 'leverage' | 'bank-run' | 'credit-risk' | 'card-interest' }
  // Economics labs: markets and welfare, firms and competition, market failure, labour,
  // macroeconomics, public debt, trade, growth, inequality and behavioural economics.
  | {
      t: 'econ-viz'
      viz:
        | 'tax-wedge' | 'price-control' | 'cost-curves' | 'cournot' | 'externality' | 'lemons' | 'monopsony' | 'multiplier'
        | 'ad-as' | 'debt-path' | 'comparative-advantage' | 'tariff' | 'solow' | 'lorenz' | 'prospect' | 'discounting'
    }
  // Accounting and taxation: ledgers, depreciation, inventory, cost-volume-profit and tax.
  | { t: 'acct-viz'; viz: 'ledger' | 'depreciation' | 'inventory' | 'cvp' | 'income-tax' | 'gst' | 'corp-tax' }
  // Training and nutrition labs: macros, volume, periodisation, fitness-fatigue and fuelling.
  | { t: 'fit-lab'; viz: 'macros' | 'volume' | 'periodisation' | 'banister' | 'fuelling' }
  // Football: a data-driven pitch diagram (players, runs, passes, zones) for tactics and
  // positions; coordinates run 0 to 100 along the pitch (own goal at 0, attacking to 100) and
  // 0 to 100 across it (top to bottom).
  | {
      t: 'pitch'
      title?: string
      view?: 'full' | 'attack' | 'defence'
      players?: { x: number; y: number; label?: string; team?: 'a' | 'b' | 'gk' | 'ball' }[]
      arrows?: { from: [number, number]; to: [number, number]; kind?: 'pass' | 'run' | 'press' | 'shot' | 'dribble' | 'cross'; label?: string }[]
      zones?: { x: number; y: number; w: number; h: number; label?: string; tone?: 'a' | 'b' | 'hot' | 'cool' | 'neutral' }[]
      marks?: { x: number; y: number; r?: number; label?: string }[]
      caption?: string
    }
  // Football labs: expected goals, formations, shot maps, passing networks, pressing, offside
  // and pitch control, on synthetic data.
  | { t: 'ftbl-viz'; viz: 'xg-lab' | 'formation-lab' | 'shot-map' | 'xg-timeline' | 'passing-network' | 'pressing-lab' | 'offside-lab' | 'pitch-control' | 'xt-lab' }
  // Card games and Mahjong: interactive strategy charts, probability tools and tile/hand
  // diagrams for blackjack, poker and Mahjong.
  | {
      t: 'games-viz'
      viz: 'blackjack-strategy' | 'blackjack-count' | 'poker-hand-ranks' | 'poker-odds' | 'poker-bluff' | 'mahjong-tiles' | 'mahjong-hand' | 'mahjong-gameplay'
    }
  // A small hand of real playing cards shown inline, next to prose that describes them,
  // so "you hold 5-6, the board shows 7-8-K" is actually drawn, not just described.
  | {
      t: 'card-hand'
      cards: { rank: string; suit: '♠' | '♥' | '♦' | '♣' }[]
      label?: string
      caption?: string
    }
  // The Mahjong equivalent of card-hand: real tile glyphs shown inline next to prose.
  | {
      t: 'tile-hand'
      tiles: { glyph: string; label?: string }[]
      label?: string
      caption?: string
    }
  // Medicine: interactive diagrams for pharmacology, microbiology, immunology and the
  // body's major organ systems.
  | {
      t: 'med-viz'
      viz: 'drug-names' | 'dose-response' | 'virus-structure' | 'immune-response' | 'antibody-binding' | 'heart-flow' | 'blood-pressure' | 'lung-airflow'
    }
  // Military fieldcraft: interactive diagrams for fire and movement, individual movement
  // techniques, contact drills, radio reports and casualty triage. General infantry
  // fieldcraft education, not a reproduction of any restricted training manual.
  | {
      t: 'mil-viz'
      viz: 'fire-movement' | 'imt-sequence' | 'contact-drill' | 'overrun-response' | 'sitrep-builder' | 'casualty-triage'
    }

  // Grammar systems: a constituency tree explorer and a dependency parse of the same
  // sentences, a systemic-functional clause analyser across the three metafunctions, a
  // morpheme splitter and word builder, the verb group machine (tense, aspect, modality,
  // voice) and a typology explorer.
  | { t: 'grammar-lab'; viz: 'tree' | 'dependency' | 'functional' | 'morphology' | 'tam' | 'typology' }
  // Debate: the argument builder (claim, mechanism, evidence, impact, weighing), the weighing
  // machine, a format comparator with speech timelines, a flow sheet stepped speech by speech,
  // a speech timer with the protected minutes marked, a fallacy spotter and a motion analyser.
  | { t: 'debate-lab'; viz: 'argument' | 'weighing' | 'formats' | 'flow' | 'timer' | 'fallacy' | 'motion' | 'bayes' | 'coverage' | 'map' }
  // Facilitation: the arithmetic of running sessions — an agenda designer that rescales a
  // template and checks the phase shares, the same preferences counted under five voting
  // rules, airtime per person against group size, a station-rotation planner, pre/post
  // measurement with effect sizes and their caveats, and critical path with PERT.
  | { t: 'facil-lab'; viz: 'agenda' | 'voting' | 'airtime' | 'rotation' | 'gain' | 'critical-path' }
  // Strudel live-coded music (see lib/strudel): a playable snippet, or with `with`, a
  // play-without / play-with pair so the difference one effect makes can be heard.
  | { t: 'strudel'; code: string; with?: string; title?: string; caption?: string }
  // An audio effect explained two ways (plain and technical), with what raising or lowering
  // it does and typical values.
  | { t: 'fx-card'; sig: string; aliases?: string; simple: string; technical: string; higher: string; lower: string; typical: string }

export type GuideSection ={ id: string; title: string; lead?: string; blocks: Block[] }

export type Guide = {
  // One or two sentences that open the page, under the title.
  intro: string
  // The key ideas in a few bullets, shown before the sections.
  nutshell?: string[]
  sections: GuideSection[]
  // Key works to read further, written as plain references.
  sources?: string[]
  // Other archive pages, as paths like "teaching/theories/cognitive-load".
  related?: string[]
}
