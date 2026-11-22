import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'An F1 car is designed to the limit of a rulebook. The FIA Technical Regulations fix its dimensions, weight and safety structures; the Financial Regulations cap what a team may spend; and scrutineering checks that each car on the grid actually complies. This guide covers the rules that most often decide results: minimum weight, the plank, fuel, parts allocation, deflection tests, scrutineering and the cost cap, as generally understood for 2022-2025. **The regulations change every year, and 2026 brings a major new rule set**, so check the current FIA regulations for exact figures.',
  nutshell: [
    'The car with driver must not fall below the **minimum weight**: 798 kg for most of 2022-2024 and 800 kg in 2025.',
    'A **plank** (skid block) under the floor must not wear below a minimum thickness, which stops teams running the car too low.',
    'Cars are checked at **scrutineering** before, during and after the event; a breach found after the race usually means **disqualification**.',
    'The **cost cap** limits most team spending: about **US$135m** for 2023, with adjustments for inflation and extra races since.',
    'Aerodynamic testing is rationed on a sliding scale: the better a team finished, the less wind-tunnel and CFD time it gets.',
  ],
  sections: [
    {
      id: 'weight',
      title: 'Minimum weight',
      blocks: [
        { t: 'p', text: 'Lighter cars are faster, so every team designs to the minimum and adds ballast to bring the car up to it, placing the ballast where it helps balance. The minimum includes the driver. To stop lighter drivers having an advantage, the driver plus seat is treated as at least 80 kg: anyone lighter carries ballast in the cockpit area.' },
        {
          t: 'table',
          head: ['Season', 'Minimum mass (car + driver, no fuel)', 'Note'],
          rows: [
            ['2022', '798 kg', 'Raised from an initial 795 kg early in the season'],
            ['2023', '798 kg', ''],
            ['2024', '798 kg', ''],
            ['2025', '800 kg', 'Raised to allow for driver mass'],
          ],
          caption: 'Check the current Technical Regulations; the figure is reviewed regularly.',
        },
        {
          t: 'example',
          title: 'Worked example: why weight matters',
          lines: [
            { label: 'Rule of thumb', text: 'Around 10 kg is often quoted as worth roughly 0.3 s a lap, varying by circuit.' },
            { label: 'Fuel', text: 'A car starts with up to 110 kg of fuel, so it gets several seconds a lap faster as fuel burns off over the race.' },
            { label: 'After the race', text: 'The car is weighed after the flag. Tyre rubber, fluids and the driver’s weight loss through sweat all count.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Underweight after the race', text: 'At the 2024 Belgian Grand Prix George Russell finished first on the road but was disqualified when his car was found to be 1.5 kg under the minimum after a one-stop strategy. Lewis Hamilton was classified as the winner.' },
      ],
    },
    {
      id: 'plank-and-floor',
      title: 'The plank and the floor',
      blocks: [
        { t: 'p', text: 'Ground-effect cars make much of their downforce under the floor, and the lower they run, the more they make (see [downforce and aerodynamics](@sports/f1/physics-theory/downforce-aerodynamics)). The plank is a strip of wood-composite material fitted under the floor. It is generally 10 mm thick and may not wear below 9 mm at set measuring holes. If a car runs too low and the plank grinds away, it is illegal.' },
        {
          t: 'flow',
          title: 'Why plank wear leads to disqualification',
          nodes: [
            { label: 'Low ride height', sub: 'more downforce', tone: 'model' },
            { label: 'Floor touches the track', sub: 'bumps, kerbs, heavy fuel', tone: 'process' },
            { label: 'Plank wears', tone: 'process' },
            { label: 'Measured after the race', sub: 'below 9 mm at a hole', tone: 'human' },
            { label: 'Disqualification', tone: 'output' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Austin 2023', text: 'At the 2023 United States Grand Prix both Lewis Hamilton and Charles Leclerc were disqualified for excessive plank wear. A sprint weekend gave teams little practice time to judge ride heights on a bumpy track, and only some cars were checked.' },
        {
          t: 'terms',
          items: [
            { term: 'Porpoising', def: 'Aerodynamic bouncing as the floor stalls and recovers. In 2022 the FIA issued a technical directive to measure and limit it on safety grounds. See [brakes and suspension](@sports/f1/physics-theory/brakes-and-suspension).' },
            { term: 'Deflection tests', def: 'Static load tests on wings and floor to stop parts bending more than allowed at speed. The FIA tightened front-wing tests during 2025.' },
            { term: 'Technical directive', def: 'An FIA note clarifying how a rule will be checked or interpreted; often issued mid-season.' },
          ],
        },
      ],
    },
    {
      id: 'scrutineering',
      title: 'Scrutineering and disqualification',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Initial scrutineering', body: 'Before the first session cars are checked for safety and compliance, including the survival cell, halo and dimensions.' },
            { title: 'Weighbridge calls', body: 'During practice and qualifying, cars are called at random to the FIA garage to be weighed. Drivers are weighed too.' },
            { title: 'Parc fermé checks', body: 'Between qualifying and the race the FIA watches for unauthorised changes.' },
            { title: 'Post-race checks', body: 'Weight, plank, fuel sample, dimensions and sometimes detailed checks of particular parts on selected cars.' },
            { title: 'Report to the stewards', body: 'The technical delegate reports any breach; the stewards decide, usually with disqualification for a technical breach.' },
          ],
        },
        {
          t: 'table',
          head: ['Check', 'Rule (generally)', 'Typical consequence if failed'],
          rows: [
            ['Minimum weight', '798-800 kg with driver', 'Disqualification'],
            ['Plank thickness', 'Not below 9 mm at measuring holes', 'Disqualification'],
            ['Fuel sample', 'At least 1 litre must remain to be tested', 'Disqualification (e.g. Sebastian Vettel, Hungary 2021)'],
            ['Fuel flow', 'Maximum 100 kg/h above 10,500 rpm', 'Disqualification'],
            ['Wing and floor flex', 'Within deflection test limits', 'Disqualification or required change'],
            ['Tyre pressures and temperatures', 'Pirelli minimum starting values', 'Investigation, potential penalty'],
            ['Dimensions and bodywork', 'Within legal volumes', 'Disqualification'],
          ],
          caption: 'Technical breaches are generally strict liability: no advantage needs to be shown.',
        },
        { t: 'callout', tone: 'note', title: 'Strict liability', text: 'In technical cases the stewards do not need to show the team gained time or meant to break the rule. A car that fails a check is outside the regulations, so it is usually excluded from the session’s results.' },
      ],
    },
    {
      id: 'allocations',
      title: 'Parts allocation and testing limits',
      blocks: [
        {
          t: 'table',
          head: ['Item', 'Limit (2022-2025, generally)', 'Penalty for exceeding'],
          rows: [
            ['ICE, turbo, MGU-H, MGU-K', 'Three or four of each per driver per season, depending on year', 'Grid drop (10 places first, 5 after)'],
            ['Energy store, control electronics', 'Two or three per season', 'Grid drop'],
            ['Gearbox and drivetrain parts', 'Limited per season', 'Grid drop'],
            ['Dry tyres', 'A set number of sets per weekend', 'Not applicable: teams plan around it'],
            ['Wind tunnel and CFD time', 'Sliding scale by championship position', 'Treated as a breach of the regulations'],
          ],
          caption: 'Grid drops for parts are covered in [penalties explained](@sports/f1/rules-penalties/penalties-explained).',
        },
        {
          t: 'p',
          text: 'The **aerodynamic testing restrictions** give each team a share of a baseline allowance. The Constructors’ champion gets the smallest share and the last-placed team the largest; roughly 70% for first rising to about 115% for tenth in recent seasons. Allowances are reset during the year based on standings. See [wind tunnels and CFD](@sports/f1/physics-theory/wind-tunnels-and-cfd).',
        },
      ],
    },
    {
      id: 'cost-cap',
      title: 'The cost cap',
      blocks: [
        { t: 'p', text: 'From 2021 the Financial Regulations capped how much a team may spend on car performance in a year. The cap is policed by the FIA’s Cost Cap Administration, which reviews each team’s accounts after the season.' },
        {
          t: 'table',
          head: ['Season', 'Headline cap', 'Note'],
          rows: [
            ['2021', 'US$145m', 'First year'],
            ['2022', 'US$140m', 'Plus an inflation adjustment'],
            ['2023', 'About US$135m', 'Baseline; later years adjusted for inflation and the number of races'],
            ['2024-2025', 'Higher than US$135m in practice', 'Indexed for inflation and extra races; check the FIA figure'],
          ],
          caption: 'Exact figures depend on adjustments; treat these as approximate.',
        },
        {
          t: 'dodont',
          do: [
            'Count car design, parts, most staff, testing and operations',
            'Remember the cap covers a full calendar year, audited after the season',
          ],
          dont: [
            'Include driver salaries, which are excluded',
            'Include the salaries of the three highest-paid staff, marketing costs or some heritage activities, which are excluded',
            'Assume the power unit falls under the chassis cap; engine makers have their own rules',
          ],
        },
        {
          t: 'table',
          head: ['Breach category', 'Meaning', 'Possible penalties'],
          rows: [
            ['Procedural', 'Paperwork or reporting failures', 'Fines, reprimands'],
            ['Minor overspend', 'Less than 5% over the cap', 'Fines, testing reductions, possibly points deductions'],
            ['Material overspend', '5% or more over the cap', 'Heavier penalties, including points deductions and potentially exclusion'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The first cases', text: 'For 2021 the FIA found Red Bull Racing had made a minor overspend and procedural breach, settled with a US$7m fine and a 10% reduction in aerodynamic testing. Aston Martin was found to have committed a procedural breach and was fined.' },
      ],
    },
    {
      id: 'practice',
      title: 'Check yourself',
      blocks: [
        {
          t: 'example',
          title: 'Questions and answers',
          lines: [
            { label: 'Q1', text: 'A driver weighs 72 kg. What does the team do? **A:** Adds ballast so driver plus seat counts as at least 80 kg.' },
            { label: 'Q2', text: 'The plank measures 8.8 mm at a hole after the race. Result? **A:** Disqualification.' },
            { label: 'Q3', text: 'A team overspends the cap by 3%. Category? **A:** Minor overspend (under 5%).' },
            { label: 'Q4', text: 'Who gets the most wind-tunnel time? **A:** The team that finished last in the Constructors’ Championship.' },
            { label: 'Q5', text: 'Can a team avoid disqualification by proving an underweight car was slower? **A:** No; technical breaches are strict liability.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/physics-theory/power-units-and-ers', note: 'What the power-unit elements do' },
            { path: 'sports/f1/physics-theory/downforce-aerodynamics', note: 'Why teams want to run the floor low' },
            { path: 'sports/f1/rules-penalties/stewards-and-protests', note: 'How technical reports become decisions' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *Formula 1 Technical Regulations* 2022-2025.',
    'FIA. *Formula 1 Financial Regulations* 2021-2025.',
    'FIA. Cost Cap Administration statements on 2021 compliance (2022).',
    'FIA. Stewards’ decisions, Belgian Grand Prix 2024 and United States Grand Prix 2023.',
  ],
  related: [
    'sports/f1/rules-penalties/penalties-explained',
    'sports/f1/rules-penalties/stewards-and-protests',
    'sports/f1/physics-theory/downforce-aerodynamics',
    'sports/f1/physics-theory/power-units-and-ers',
    'sports/f1/physics-theory/wind-tunnels-and-cfd',
    'sports/f1/physics-theory/brakes-and-suspension',
  ],
}

export default guide
