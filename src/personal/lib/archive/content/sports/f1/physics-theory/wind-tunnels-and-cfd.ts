import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Most of an F1 car’s lap time is found before it turns a wheel: in a wind tunnel with a 60% scale model, on supercomputers solving the equations of fluid flow, and in a simulator where the race driver tries the result. The skill is not only finding downforce but making sure the factory’s numbers match what the real car does on track. Engineers call that **correlation**.',
  nutshell: [
    '**CFD** (computational fluid dynamics) solves the equations of airflow on a computer; the **wind tunnel** measures real forces on a scale model; the **track** is the final judge.',
    'As of the 2022–2025 rules, tunnel models were limited to **60% scale** and **50 m/s** wind speed, and both tunnel time and CFD computing were rationed.',
    'The ration is a **sliding scale**: from 2023 the champion team got about 70% of the baseline allowance and the last-placed team about 115%.',
    'A scale model at lower speed cannot match the real car’s **Reynolds number**, so results must be corrected and checked on track.',
    'With a budget cap (about $135 million baseline in 2023–2025), every upgrade is a choice between this year’s car and next year’s.',
  ],
  sections: [
    {
      id: 'tools',
      title: 'The three tools',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'CFD', tag: 'virtual', body: 'The car is split into a mesh of many millions of small cells and the flow equations are solved in each. Cheap per idea and shows the whole flow field, including places no sensor could reach. But it relies on turbulence models, which are approximations.' },
            { title: 'Wind tunnel', tag: 'physical', body: 'A precisely made scale model sits on a moving belt (rolling road) with spinning wheels, hung from a strut that measures forces. It measures real air, with real turbulence, but at reduced scale and speed.' },
            { title: 'Track and simulator', tag: 'reality', body: 'Sensor rakes, pressure taps and flow-visualisation paint check the aero on the real car. The driver-in-the-loop simulator tests how a change feels before parts are made.' },
          ],
        },
        {
          t: 'flow',
          title: 'An upgrade’s path',
          nodes: [
            { label: 'Idea', sub: 'aerodynamicist', tone: 'human' },
            { label: 'CFD', sub: 'hundreds of variants', tone: 'model' },
            { label: 'Wind tunnel', sub: 'best few, at 60%', tone: 'process' },
            { label: 'Manufacture', sub: 'carbon parts', tone: 'process' },
            { label: 'Track', sub: 'rakes, flo-vis, lap time', tone: 'output' },
            { label: 'Correlation', sub: 'did it match?', tone: 'data' },
          ],
          loop: 'correct the models and go again',
          caption: 'Teams run this loop continuously through a season; a single new floor may take many weeks from idea to race.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Correlation', def: 'How well CFD, tunnel and track agree. Good correlation means the team can trust its factory numbers; bad correlation means upgrades that look good at base and do nothing, or worse, on track.' },
            { term: 'Aero map', def: 'Downforce, drag and balance measured across ride heights, pitch, roll, yaw and steering. The car’s aero changes as it moves, so one number is never enough.' },
            { term: 'Flo-vis', def: 'Fluorescent paint brushed on the car before a run; the airflow drags it into streaks that show the flow direction on the surface.' },
            { term: 'Aero rake', def: 'A frame of small pressure probes fitted to the car in practice to map the airflow behind a part; the large grids seen in Friday sessions.' },
            { term: 'Turbulence model', def: 'The approximation CFD uses for small-scale eddies it cannot afford to resolve. Its choice can change the answer.' },
          ],
        },
      ],
    },
    {
      id: 'similarity',
      title: 'Why a scale model is not the real car',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathrm{Re} = \frac{\rho\, v\, L}{\mu}`,
          caption: 'The Reynolds number compares inertia with viscosity. Two flows behave alike only if their Reynolds numbers are similar.',
          where: [
            { sym: String.raw`\rho`, def: 'Air density, about 1.225 kg/m³ at sea level' },
            { sym: 'v', def: 'Air speed, in m/s' },
            { sym: 'L', def: 'A characteristic length, here the car’s length (about 5 m full size)' },
            { sym: String.raw`\mu`, def: 'Dynamic viscosity of air, about 1.81 × 10⁻⁵ Pa·s (not friction here)' },
          ],
          syntax: [
            { sym: String.raw`\mathrm{Re}`, say: '“Reynolds number”, written as two letters, not R times e' },
            { sym: String.raw`\rho`, say: '“rho”, the Greek letter for density' },
            { sym: String.raw`\mu`, say: '“mu”, but in fluids it means viscosity, not friction' },
          ],
          worked: {
            title: 'Full-size car against a 60% model',
            steps: [
              String.raw`Full size at 70 m/s (252 km/h): \(\mathrm{Re} = 1.225 \times 70 \times 5 \div 1.81\times10^{-5} \approx 2.37 \times 10^7\).`,
              String.raw`Model at 60% scale (\(L = 3\) m) and 50 m/s: \(\mathrm{Re} = 1.225 \times 50 \times 3 \div 1.81\times10^{-5} \approx 1.02 \times 10^7\).`,
              String.raw`Ratio: \(2.37 \div 1.02 \approx 2.3\).`,
            ],
            answer: 'The model runs at under half the real car’s Reynolds number, so boundary layers, flow separation and vortices can behave differently. Teams correct for this with experience, CFD at both scales and track data: a big reason correlation is hard.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\frac{F_{\text{model}}}{F_{\text{full}}} = \left(\frac{L_{\text{model}}}{L_{\text{full}}}\right)^{2} \left(\frac{v_{\text{model}}}{v_{\text{full}}}\right)^{2}`,
          caption: 'With the same air and the same coefficients, force scales with area (length squared) times speed squared.',
          where: [
            { sym: 'F', def: 'Aerodynamic force (downforce or drag)' },
            { sym: 'L', def: 'Length scale' },
            { sym: 'v', def: 'Air speed' },
          ],
          syntax: [
            { sym: String.raw`\left(\frac{a}{b}\right)^2`, say: '“a over b, all squared”: work out the fraction, then square it' },
          ],
          worked: {
            title: 'How big are the forces on the model?',
            steps: [
              String.raw`Scale factor 0.6, squared: \(0.36\).`,
              String.raw`Speed ratio \(50/70 = 0.714\), squared: \(0.510\).`,
              String.raw`Multiply: \(0.36 \times 0.510 \approx 0.184\).`,
            ],
            answer: 'The model feels only about 18% of the full car’s force at 252 km/h. Balances must resolve small forces very precisely, and tiny model errors (a 0.1 mm gap, a slightly wrong tyre shape) can matter.',
          },
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Why 50 m/s is enough for one thing',
          text: 'Air can be treated as incompressible below roughly a third of the speed of sound. At 50 m/s the Mach number is about 50 ÷ 343 ≈ 0.15, and even a real car at 92 m/s (330 km/h) is at about 0.27. So the tunnel does not need to match Mach number; the main mismatch is Reynolds number.',
        },
      ],
    },
    {
      id: 'restrictions',
      title: 'Rationed testing',
      blocks: [
        {
          t: 'p',
          text: 'Unlimited testing would let the richest team out-develop everyone. Since 2021 the FIA’s Aerodynamic Testing Restrictions have given each team an allowance of wind-tunnel runs and CFD computing per period, scaled by championship position. The order is reset part-way through each year. See [technical and financial regulations](@sports/f1/rules-penalties/technical-and-financial-rules).',
        },
        {
          t: 'table',
          head: ['Constructors’ position', 'Share of baseline (2023–2025 scale)'],
          rows: [
            ['1st', '70%'],
            ['2nd', '75%'],
            ['3rd', '80%'],
            ['4th', '85%'],
            ['5th', '90%'],
            ['6th', '95%'],
            ['7th', '100%'],
            ['8th', '105%'],
            ['9th', '110%'],
            ['10th', '115%'],
          ],
          caption: 'Steps of 5 percentage points. 2021–2022 used a narrower scale. The last-placed team gets about 115 ÷ 70 ≈ 1.64 times the champion’s allowance.',
        },
        {
          t: 'example',
          title: 'A penalty in aero time',
          lines: [
            { label: 'Case', text: 'After Red Bull were found to have exceeded the 2021 cost cap, the FIA in October 2022 fined them $7 million and cut their aerodynamic testing allowance by 10% for the following twelve months.' },
            { label: 'Maths', text: 'As champions they were already on 70%; a 10% cut takes that to 70 × 0.9 = 63% of baseline.' },
            { label: 'Lesson', text: 'Aero testing is treated as so valuable that taking it away is a punishment in its own right.' },
          ],
        },
      ],
    },
    {
      id: 'value-of-gains',
      title: 'What a gain is worth',
      blocks: [
        {
          t: 'math',
          tex: String.raw`v_{\max} \propto \left(\frac{P}{C_D A}\right)^{1/3}`,
          caption: 'At top speed, power equals drag force times speed, and drag grows with v², so power grows with v³. Top speed therefore grows with the cube root of power per unit drag.',
          where: [
            { sym: String.raw`v_{\max}`, def: 'Top speed' },
            { sym: 'P', def: 'Power at the wheels' },
            { sym: String.raw`C_D A`, def: 'Drag coefficient times frontal area (the “drag area”)' },
          ],
          syntax: [
            { sym: String.raw`\propto`, say: '“is proportional to”' },
            { sym: String.raw`(\;)^{1/3}`, say: '“to the power one third”: the cube root' },
          ],
          worked: {
            title: 'Cutting drag by 3%',
            steps: [
              String.raw`New drag area is \(0.97\) of the old one, so \(v_{\max}\) rises by \((1/0.97)^{1/3}\).`,
              String.raw`\(1/0.97 = 1.0309\); its cube root is \(\approx 1.0102\).`,
              String.raw`From 330 km/h: \(330 \times 1.0102 \approx 333.4\) km/h.`,
            ],
            answer: 'A 3% drag cut is worth only about 3 km/h at the top of the straight. That is why teams weigh every drag reduction against the downforce it costs, and why the trade-off differs at Monza and Monaco.',
          },
        },
        {
          t: 'p',
          text: 'Downforce gains are judged by **efficiency** (downforce added per unit of drag added) and by **consistency**: a car whose downforce holds steady across ride heights and yaw is easier to drive and kinder to its tyres than one with a higher peak that comes and goes. Engineers usually talk in “points” of downforce, where one point is commonly used to mean one per cent of a reference level; the exact definition varies by team.',
        },
      ],
    },
    {
      id: 'season',
      title: 'The development race over a season',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Winter: launch spec', body: 'The car first seen in testing. In a new rule set, concepts differ widely between teams.' },
            { title: 'Early season: learning', body: 'Real data shows which concepts work. Teams with a poor concept face a choice: develop it or switch.' },
            { title: 'Mid-season: big upgrades', body: 'Major packages (floors, sidepods) arrive. A team that correlates well can gain several tenths in one step.' },
            { title: 'Mid-year: the switch', body: 'Under a cost cap and limited tunnel time, teams decide when to stop developing this year’s car and focus on next year’s. In a final year of a rule set, carry-over value is low.' },
          ],
        },
        {
          t: 'table',
          head: ['Season', 'What happened', 'Lesson'],
          rows: [
            ['2022', 'Several teams, Mercedes most visibly, suffered severe porpoising that their simulation tools had not fully predicted', 'New rules expose the limits of correlation'],
            ['2023', 'McLaren began the year off the pace, then brought major upgrades from around the Austrian Grand Prix and became front-runners', 'One correlated upgrade can transform a season'],
            ['2022–2023', 'Red Bull’s ground-effect cars were dominant despite a reduced aero allowance', 'A strong concept beats extra testing time'],
          ],
          caption: 'Summaries of widely reported events; the full internal reasons are known only to the teams.',
        },
        {
          t: 'dodont',
          do: [
            'Judge an upgrade by the gap to rivals over several weekends, not one session.',
            'Expect upgrades to need set-up work before they show their worth.',
            'Remember that a team at the front gets less tunnel time than one at the back.',
          ],
          dont: [
            'Assume more CFD always means a faster car: the models still need checking against reality.',
            'Treat a raw speed-trap number as aero efficiency: wing level, tow and engine mode all change it.',
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
            { label: 'Q1', text: 'A 50% model in a 50 m/s tunnel. What fraction of the full car’s force at 70 m/s does it feel?' },
            { label: 'A1', text: '0.5² × (50/70)² = 0.25 × 0.510 ≈ 0.128, about 13%.' },
            { label: 'Q2', text: 'What would the tunnel speed need to be for a 60% model to match the full car’s Reynolds number at 70 m/s?' },
            { label: 'A2', text: '70 ÷ 0.6 ≈ 117 m/s, well over twice the allowed 50 m/s, and the forces would be enormous.' },
            { label: 'Q3', text: 'If power rises 3% and drag is unchanged, how much faster is a 330 km/h car?' },
            { label: 'A3', text: '1.03^(1/3) ≈ 1.0099, so about 333.3 km/h: the same as a 3% drag cut, to within rounding.' },
            { label: 'Q4', text: 'Ninth in the championship: what share of the baseline aero allowance (2023–2025 scale)?' },
            { label: 'A4', text: '110%.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *Formula 1 Sporting Regulations*, Appendix on Aerodynamic Testing Restrictions, 2021–2025 editions.',
    'FIA. *Formula 1 Financial Regulations*, 2021–2025, and the FIA statement on the 2021 cost cap breach (October 2022).',
    'Katz, J. (2006). *Race Car Aerodynamics: Designing for Speed* (2nd ed.). Bentley Publishers.',
    'Anderson, J. D. (1995). *Computational Fluid Dynamics: The Basics with Applications*. McGraw-Hill.',
  ],
  related: [
    'sports/f1/physics-theory/downforce-aerodynamics',
    'sports/f1/physics-theory/drs-overtaking',
    'sports/f1/physics-theory/brakes-and-suspension',
    'sports/f1/rules-penalties/technical-and-financial-rules',
    'sports/physics/drag-fluid-dynamics',
  ],
}

export default guide
