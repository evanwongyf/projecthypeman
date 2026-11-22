import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'An F1 power unit is not just an engine. From 2014 to 2025 it was a 1.6-litre turbocharged V6 bolted to two electric machines, a battery and a control unit, all fed by a strictly rationed flow of fuel. Because the fuel is rationed, the whole game is efficiency: how much of the chemical energy in each kilogram of fuel ends up pushing the car forwards.',
  nutshell: [
    'As of the 2014–2025 rules the power unit has six parts: the **internal combustion engine (ICE)**, **turbocharger (TC)**, **MGU-K** (kinetic), **MGU-H** (heat), **energy store (ES)** and **control electronics (CE)**.',
    'Fuel *flow* is capped at 100 kg/h, so power can only rise by burning that fuel more efficiently. Leading units are reported to exceed **50% thermal efficiency**, against roughly 25–35% for a typical road petrol engine.',
    'The MGU-K recovers braking energy and gives back up to **120 kW**; the battery can release up to **4 MJ per lap** to it and take in up to **2 MJ per lap** from it.',
    String.raw`Power is force times speed, \(P = Fv\): the same power gives less push the faster the car goes, which is why top speed is so hard to raise.`,
    'The 2026 rules changed the formula: the MGU-H is gone, electrical power is far larger and the fuel is sustainable. Figures on this page are for the 2014–2025 era unless stated.',
  ],
  sections: [
    {
      id: 'parts',
      title: 'The six components',
      lead: 'Each part has its own season allocation and its own job in the energy chain.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'ICE', tag: 'combustion', body: 'A 1.6-litre, 90° V6 with direct injection, limited to 15,000 rpm. It makes most of the power. In practice cars rarely run near the rev limit, because the fuel-flow cap is reached at 10,500 rpm and higher revs add friction without adding fuel.' },
            { title: 'Turbocharger', tag: 'boost', body: 'A single turbo, spun by exhaust gas, compresses intake air so more fuel can be burned per stroke. Its shaft speed is capped at 125,000 rpm. Mercedes famously split compressor and turbine at either end of the engine, with the MGU-H between them.' },
            { title: 'MGU-H', tag: 'heat', body: 'An electric machine on the turbo shaft. It harvests energy from exhaust gas that would otherwise be wasted, and can spin the turbo up to kill turbo lag. Its energy flow was unlimited. Removed for 2026, partly because it was costly and of little use to road cars.' },
            { title: 'MGU-K', tag: 'kinetic', body: 'An electric motor-generator geared to the crankshaft. Under braking it acts as a generator (harvesting); on the throttle it acts as a motor, adding up to 120 kW (about 160 hp).' },
            { title: 'Energy store', tag: 'battery', body: 'A lithium-ion battery of roughly 20–25 kg (the rules set a minimum mass). It is a buffer, not a fuel tank: its usable state-of-charge window per lap is small, but it cycles very hard.' },
            { title: 'Control electronics', tag: 'brain', body: 'The power electronics and software that route energy between ICE, MGU-H, MGU-K and battery hundreds of times a lap. Deployment maps are a major area of performance.' },
          ],
        },
        {
          t: 'flow',
          title: 'Where the energy goes',
          nodes: [
            { label: 'Fuel', sub: 'up to 100 kg/h', tone: 'data' },
            { label: 'ICE + turbo', sub: 'combustion', tone: 'process' },
            { label: 'MGU-H', sub: 'exhaust energy', tone: 'model' },
            { label: 'Battery', sub: '4 MJ out, 2 MJ in from K per lap', tone: 'model' },
            { label: 'MGU-K', sub: '120 kW to the crank', tone: 'process' },
            { label: 'Rear wheels', tone: 'output' },
          ],
          caption: 'Braking energy also flows the other way: the rear wheels drive the MGU-K, which charges the battery. Energy from the MGU-H can go straight to the MGU-K without passing through the battery, which is how teams got round the 4 MJ battery limit.',
        },
        {
          t: 'table',
          head: ['Rule (2014–2025)', 'Value', 'Why it matters'],
          rows: [
            ['Fuel flow above 10,500 rpm', '100 kg/h', 'The hard cap on chemical power'],
            ['Fuel flow below 10,500 rpm', '0.009 × rpm + 5.5 kg/h', 'At 8,000 rpm: 0.009 × 8,000 + 5.5 = 77.5 kg/h'],
            ['Race fuel (from 2019)', '110 kg', 'Teams often start lighter and save fuel'],
            ['MGU-K power', '120 kW', 'About 160 hp of electric boost'],
            ['ES to MGU-K per lap', '4 MJ', 'About 33 s of full electric boost'],
            ['MGU-K to ES per lap', '2 MJ', 'The rest must come via the MGU-H'],
            ['ICE rev limit', '15,000 rpm', 'Rarely used in practice'],
          ],
          caption: 'Figures from the FIA Technical Regulations of the turbo-hybrid era; detail varied year to year, and the 2026 rules replaced most of them.',
        },
      ],
    },
    {
      id: 'efficiency',
      title: 'Thermal efficiency: the real performance number',
      blocks: [
        {
          t: 'p',
          text: 'With fuel flow capped, a team cannot make more power by burning more fuel. The only routes are to burn the permitted fuel more completely and to waste less of the heat. That ratio of useful power out to chemical power in is the **thermal efficiency**.',
        },
        {
          t: 'math',
          tex: String.raw`\eta = \frac{P_{\text{out}}}{\dot m_{\text{fuel}} \times \text{LHV}}`,
          caption: 'Thermal efficiency: output power divided by the rate at which chemical energy arrives.',
          where: [
            { sym: String.raw`\eta`, def: 'Thermal efficiency, a fraction between 0 and 1' },
            { sym: String.raw`P_{\text{out}}`, def: 'Useful mechanical power delivered, in watts' },
            { sym: String.raw`\dot m_{\text{fuel}}`, def: 'Fuel mass flow rate, in kg/s' },
            { sym: String.raw`\text{LHV}`, def: 'Lower heating value: chemical energy per kilogram of fuel, about 43 MJ/kg for petrol-type fuels' },
          ],
          syntax: [
            { sym: String.raw`\eta`, say: '“eta”, the Greek letter used for efficiency' },
            { sym: String.raw`\dot m`, say: '“m-dot”: the dot means “rate of change with time”, so mass per second' },
            { sym: String.raw`\frac{a}{b}`, say: '“a over b”: divide the top by the bottom' },
          ],
          worked: {
            title: 'How much power does 100 kg/h buy?',
            steps: [
              String.raw`Convert the flow to kg/s: \(100 \div 3{,}600 = 0.02778\) kg/s.`,
              String.raw`Chemical power in: \(0.02778 \times 43 \times 10^6 \approx 1.194 \times 10^6\) W, about 1.19 MW.`,
              String.raw`At \(\eta = 0.50\): \(P_{\text{out}} = 0.50 \times 1.194 \approx 0.597\) MW, about 597 kW.`,
              String.raw`Add the MGU-K's 120 kW while the battery is deploying: \(597 + 120 = 717\) kW.`,
              String.raw`In horsepower: \(717{,}000 \div 745.7 \approx 962\) hp.`,
            ],
            answer: 'Roughly 960 hp, which is why the era’s cars were often described as “around 1,000 hp”. At a road car’s 30% the same fuel would give only about 358 kW from the engine, so the efficiency gap is worth hundreds of horsepower.',
          },
        },
        {
          t: 'table',
          head: ['Engine', 'Typical peak thermal efficiency', 'Note'],
          rows: [
            ['Older road petrol engine', 'about 25–30%', 'Most fuel energy leaves as heat in exhaust and coolant'],
            ['Modern efficient road petrol', 'about 35–40%', 'Best hybrid-focused designs'],
            ['Large marine diesel', 'about 50%', 'Slow-turning, enormous'],
            ['F1 power unit (late 2010s onward)', 'reported above 50%', 'Manufacturer dyno claims; exact figures are secret'],
          ],
          caption: 'Ranges are approximate. F1 figures are manufacturer statements and include the energy the MGU-H recovers.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Where the gains came from',
          text: 'Very lean, fast-burning combustion (pre-chamber “turbulent jet ignition” concepts), very high compression, low friction and the MGU-H turning exhaust heat into electricity all pushed efficiency up. When the hybrid era began in 2014, power units were reported to be around 40% efficient; the jump to over 50% within a few seasons is one of the fastest efficiency gains any engine type has seen.',
        },
      ],
    },
    {
      id: 'power-force-speed',
      title: 'Power, force and speed',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P = F\,v \quad\Longrightarrow\quad F = \frac{P}{v}`,
          caption: 'Power equals force times speed. At constant power, the push the engine can give falls as speed rises.',
          where: [
            { sym: 'P', def: 'Power at the wheels, in watts' },
            { sym: 'F', def: 'Driving (tractive) force, in newtons' },
            { sym: 'v', def: 'Speed, in metres per second' },
          ],
          syntax: [
            { sym: String.raw`F\,v`, say: '“F times v”: two symbols side by side are multiplied' },
            { sym: String.raw`\Longrightarrow`, say: '“which gives” or “implies”: rearrange the left to get the right' },
          ],
          worked: {
            title: 'Force at top speed, and what the MGU-K adds',
            steps: [
              String.raw`Top speed 330 km/h is \(330 \div 3.6 = 91.67\) m/s.`,
              String.raw`With 717 kW available: \(F = 717{,}000 \div 91.67 \approx 7{,}820\) N. At top speed this force exactly balances drag (plus a little rolling resistance).`,
              String.raw`Now take the MGU-K alone at 250 km/h \(= 69.44\) m/s: \(F = 120{,}000 \div 69.44 \approx 1{,}728\) N.`,
              String.raw`On an 800 kg car: \(a = F/m = 1{,}728 \div 800 \approx 2.16\) m/s², about 0.22 g of extra acceleration.`,
            ],
            answer: 'Electric boost is a noticeable shove mid-straight, and losing it (a flat battery at the end of a straight) costs several km/h. The same arithmetic explains why defending drivers try to deploy where the attacker needs it most.',
          },
        },
        {
          t: 'p',
          text: String.raw`Because drag grows with \(v^2\), the power needed to overcome it grows with \(v^3\). Raising top speed by 1% needs about 3% more power, or 3% less drag, which is why low-drag set-ups at Monza matter as much as engine power. See [downforce and aerodynamics](@sports/f1/physics-theory/downforce-aerodynamics).`,
        },
      ],
    },
    {
      id: 'deployment',
      title: 'Harvesting and deployment over a lap',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Braking zone', body: 'The MGU-K resists the rear axle and charges the battery, adding to the braking force. The rear brake-by-wire system reduces hydraulic pressure to keep the total braking balance steady.' },
            { title: 'Corner exit', body: 'Deployment usually waits until the rear tyres can take it; too much torque at low speed only spins the wheels.' },
            { title: 'Straights', body: 'Electric power is spent where it gains most time: typically the longest straights and the ones leading into overtaking zones.' },
            { title: 'Lift-and-coast and super-clipping', body: 'If energy runs short, drivers lift before braking points to save fuel, or the system “clips”, harvesting at the end of a straight at full throttle, which costs top speed.' },
          ],
        },
        {
          t: 'example',
          title: 'How long does 4 MJ last?',
          lines: [
            { label: 'Energy', text: '4 MJ = 4,000,000 J may go from battery to MGU-K each lap.' },
            { label: 'Rate', text: 'At the full 120 kW (120,000 J/s): 4,000,000 ÷ 120,000 = 33.3 s.' },
            { label: 'Lap', text: 'On a lap of about 90 s, that is just over a third of the lap at full electric boost.' },
            { label: 'Harvest', text: 'The MGU-K may put back only 2 MJ per lap; the gap is filled by the MGU-H sending energy directly to the MGU-K or the battery.' },
          ],
        },
        {
          t: 'example',
          title: 'How little of the braking energy can be recovered',
          lines: [
            { label: 'Kinetic energy lost', text: 'Braking an 800 kg car from 320 to 80 km/h removes about 2.96 MJ (worked through on [brakes and suspension](@sports/f1/physics-theory/brakes-and-suspension)).' },
            { label: 'MGU-K limit', text: 'At 120 kW for a 2.5 s stop: 120,000 × 2.5 = 0.3 MJ.' },
            { label: 'Share', text: '0.3 ÷ 2.96 ≈ 10%. The carbon brakes and drag handle the rest.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: '2026 changes the balance',
          text: 'Under the 2026 regulations the MGU-H was removed and the MGU-K’s power was raised to 350 kW, so electrical power is close to half the total. Fuel is now limited by energy flow rather than mass flow, and is fully sustainable. Energy management became far more important, and the tactics described above changed with it. Check the current FIA regulations for exact figures.',
        },
      ],
    },
    {
      id: 'reliability',
      title: 'Allocations, penalties and reliability',
      blocks: [
        {
          t: 'p',
          text: 'Each driver has a small season allocation of each component. In 2023–2025 it was three each of ICE, turbo, MGU-H and MGU-K, and two energy stores and control electronics. Using one more than the allocation brings a grid penalty: 10 places for the first extra element of a type, 5 for each after that, with a back-of-the-grid start beyond 15 places. Teams sometimes take a “strategic” new unit at a circuit where overtaking is easy, such as Monza or Spa. See [penalties explained](@sports/f1/rules-penalties/penalties-explained).',
        },
        {
          t: 'dodont',
          do: [
            'Say “power unit” for the whole hybrid system and “engine” or “ICE” only for the combustion part.',
            'Remember the fuel-flow cap: more power means more efficiency, not more fuel.',
            'Use P = Fv to explain why boost helps more at low speed than at high speed.',
          ],
          dont: [
            'Assume the battery is like an EV battery: it holds very little energy and works as a fast buffer.',
            'Quote “1,000 hp” as exact; outputs are secret and vary by track, fuel and deployment map.',
            'Apply 2014–2025 numbers to 2026 cars without checking.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice',
      blocks: [
        {
          t: 'example',
          title: 'Questions with answers',
          lines: [
            { label: 'Q1', text: 'A power unit makes 560 kW from 100 kg/h of 43 MJ/kg fuel. What is its efficiency?' },
            { label: 'A1', text: 'Fuel power is 1.194 MW. 0.560 ÷ 1.194 ≈ 0.469, so about 47%.' },
            { label: 'Q2', text: 'At 9,000 rpm, what fuel flow is allowed (2014–2025 formula)?' },
            { label: 'A2', text: '0.009 × 9,000 + 5.5 = 86.5 kg/h. Below 10,500 rpm the cap scales with revs.' },
            { label: 'Q3', text: 'What driving force does 700 kW give at 300 km/h?' },
            { label: 'A3', text: '300 km/h = 83.33 m/s; 700,000 ÷ 83.33 ≈ 8,400 N.' },
            { label: 'Q4', text: 'Why can the car deploy more than the 2 MJ the MGU-K may harvest per lap?' },
            { label: 'A4', text: 'Because the MGU-H can supply energy too, and its flow was unlimited.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *Formula 1 Technical Regulations*, 2014–2025 editions (power unit articles) and 2026 edition.',
    'Heywood, J. B. (2018). *Internal Combustion Engine Fundamentals* (2nd ed.). McGraw-Hill.',
    'Mercedes-AMG High Performance Powertrains public statements on dyno thermal efficiency (2017 onward).',
  ],
  related: [
    'sports/f1/physics-theory/brakes-and-suspension',
    'sports/f1/physics-theory/downforce-aerodynamics',
    'sports/f1/racecraft/overtaking-and-defending',
    'sports/f1/rules-penalties/technical-and-financial-rules',
    'sports/physics/drag-fluid-dynamics',
  ],
}

export default guide
