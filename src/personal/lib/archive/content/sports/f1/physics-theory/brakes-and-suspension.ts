import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'An F1 car can shed over 200 km/h in a couple of seconds and take a kerb at 250 km/h without wrecking its floor. Neither is down to the engine or the wings alone: it is the brakes turning kinetic energy into heat at a megawatt or more, and the suspension holding the car at exactly the ride height the aerodynamics need.',
  nutshell: [
    'Brakes turn **kinetic energy** into heat. Stopping an 800 kg car from 320 to 80 km/h removes about **3 MJ**; over 2.5 s that is more than **1 MW** of braking power.',
    'F1 discs are **carbon-carbon**, working at roughly 400–1,000 °C. Too cold and they barely grip; too hot and they wear fast.',
    'Since 2014 the rear brakes are **brake-by-wire**: a computer blends hydraulic braking with MGU-K energy harvesting so the driver feels the same pedal.',
    'Suspension on a ground-effect car is mainly about **platform control**: keeping the floor at a steady height so downforce does not swing about.',
    'Too stiff and the car cannot ride kerbs or bumps; too soft and the floor hits the ground or the car **porpoises**.',
  ],
  sections: [
    {
      id: 'energy',
      title: 'The energy of a stop',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Delta E_k = \tfrac{1}{2} m \left(v_1^2 - v_2^2\right) \qquad \bar P = \frac{\Delta E_k}{t}`,
          caption: 'Kinetic energy removed by a stop from speed v₁ to v₂, and the average braking power over time t.',
          where: [
            { sym: 'm', def: 'Mass of car and driver, in kg (the 2022–2025 minimum was 798 kg without fuel)' },
            { sym: 'v_1,\\ v_2', def: 'Speeds before and after braking, in m/s' },
            { sym: 't', def: 'Time spent braking, in seconds' },
            { sym: String.raw`\bar P`, def: 'Average power, in watts' },
          ],
          syntax: [
            { sym: String.raw`\Delta`, say: '“delta”, meaning “change in”' },
            { sym: String.raw`v_1^2`, say: '“v-one squared”: the subscript names which speed, the 2 means multiply it by itself' },
            { sym: String.raw`\bar P`, say: '“P-bar”: a bar over a symbol means its average' },
          ],
          worked: {
            title: 'A big stop: 320 to 80 km/h in 2.5 s',
            steps: [
              String.raw`Convert: \(v_1 = 320 \div 3.6 = 88.89\) m/s and \(v_2 = 80 \div 3.6 = 22.22\) m/s.`,
              String.raw`Square: \(88.89^2 = 7{,}901\) and \(22.22^2 = 494\); difference \(= 7{,}407\) m²/s².`,
              String.raw`Energy: \(\tfrac12 \times 800 \times 7{,}407 \approx 2.96 \times 10^6\) J, about 2.96 MJ.`,
              String.raw`Power: \(2.96 \text{ MJ} \div 2.5 \text{ s} \approx 1.19\) MW.`,
              String.raw`Average deceleration: \((88.89 - 22.22) \div 2.5 = 26.7\) m/s², which is \(26.7 \div 9.81 \approx 2.7\) g. The peak, at the start, is roughly twice that.`,
            ],
            answer: 'About 3 MJ removed at an average of 1.2 MW: more than the power unit produces at full throttle. That is enough energy to lift the car about 380 m straight up.',
          },
        },
        {
          t: 'example',
          title: 'Where does that 2.96 MJ go?',
          lines: [
            { label: 'Drag', text: 'If drag is 7,820 N at 330 km/h, its coefficient is 7,820 ÷ 91.67² ≈ 0.93 N per (m/s)². Over the roughly 139 m stop, with an average v² of about 4,200, drag absorbs 0.93 × 4,200 × 139 ≈ 0.54 MJ (18%).' },
            { label: 'MGU-K', text: '120 kW × 2.5 s = 0.30 MJ (10%) harvested into the battery.' },
            { label: 'Brakes', text: 'The remaining ≈ 2.1 MJ (about 72%) becomes heat in the four discs and pads, plus a little in the tyres.' },
            { label: 'Lesson', text: 'Drag does most of its work at the very start of the stop, when speed is highest; that is why the first metres of an F1 braking zone feel so violent.' },
          ],
        },
        {
          t: 'plot',
          title: 'Maximum braking deceleration rises with speed',
          x: [0, 330],
          y: [0, 7],
          xLabel: 'speed (km/h)',
          yLabel: 'deceleration (g)',
          curves: [
            { f: (x: number) => (1.4 * (9.81 + (2.5 * (x / 3.6) ** 2) / 800) + (0.93 * (x / 3.6) ** 2) / 800) / 9.81, label: 'grip + downforce + drag' },
            { f: () => 1.4, label: 'grip alone (no aero)', dashed: true },
          ],
          points: [
            { x: 100, y: 1.84, label: '1.8 g' },
            { x: 300, y: 5.32, label: '5.3 g' },
          ],
          caption: 'Illustrative model: grip coefficient 1.4, downforce 2.5v² N, drag 0.93v² N, 800 kg. Downforce adds grip and drag adds deceleration, both with v², so an F1 car brakes far harder at 300 km/h than at 100 km/h. Real peaks are reported around 5–6 g.',
        },
      ],
    },
    {
      id: 'brake-hardware',
      title: 'Carbon brakes and brake-by-wire',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Carbon-carbon discs', body: 'Carbon fibre in a carbon matrix: light, and keeps its strength at temperatures that would soften steel. As of the 2022–2025 rules front discs were about 330 mm across and 32 mm thick, drilled with well over a thousand tiny radial cooling holes.' },
            { title: 'Temperature window', body: 'Below roughly 400 °C the friction is poor; much above 1,000 °C wear and oxidation climb fast. On a street circuit a car following closely can overheat its brakes in dirty air.' },
            { title: 'Calipers', body: 'One caliper per wheel, with at most six pistons, made of aluminium alloy. Brake ducts are designed as carefully as wings, because they also steer air and heat into the wheel rim and tyre.' },
            { title: 'Brake balance', body: 'Typically set with more braking at the front, because weight shifts forward under braking. Drivers change it from the steering wheel, sometimes corner by corner, and the car can shift it through a stop (“brake migration”).' },
          ],
        },
        {
          t: 'p',
          text: 'The rear axle is braked by two things: the hydraulic brakes and the MGU-K harvesting energy. The MGU-K’s share changes from moment to moment (it harvests less when the battery is full, for example). If the driver’s pedal were connected straight to the rear calipers, the rear braking force would wander and the car would lock or snap. **Brake-by-wire**, mandatory since 2014, measures what the driver asks for and sets the rear hydraulic pressure so the total stays as requested. See [power units and energy recovery](@sports/f1/physics-theory/power-units-and-ers).',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Feet as strong as legs press',
          text: 'Because F1 brakes have no servo assistance, drivers press the pedal with forces commonly quoted at well over 100 kg, sometimes in the order of 150 kg in the hardest stops. Leg strength is part of driver fitness.',
        },
        {
          t: 'dodont',
          do: [
            'Warm the brakes on the out-lap or behind the safety car: cold carbon brakes lock easily.',
            'Move brake balance rearward if the fronts keep locking, and forward if the rear is stepping out on entry.',
            'Read a lock-up as too much brake force for the grip available: the [friction circle](@sports/f1/physics-theory/friction-circle-and-slip-angle) is already used up.',
          ],
          dont: [
            'Assume harder braking is always better: a locked tyre gives less grip than a rolling one and leaves a flat spot.',
            'Forget that the brakes also heat the tyres through the wheel rims; brake cooling is part of tyre management.',
          ],
        },
      ],
    },
    {
      id: 'weight-transfer',
      title: 'Weight transfer under braking',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Delta F_z = \frac{m\,a\,h}{L}`,
          caption: 'Longitudinal load transfer: how much vertical load moves from the rear axle to the front axle under braking.',
          where: [
            { sym: String.raw`\Delta F_z`, def: 'Load moved from rear to front, in newtons' },
            { sym: 'a', def: 'Deceleration, in m/s²' },
            { sym: 'h', def: 'Height of the centre of mass above the ground, in metres' },
            { sym: 'L', def: 'Wheelbase, in metres (as of the 2022–2025 rules up to 3.6 m)' },
          ],
          syntax: [
            { sym: 'F_z', say: '“F-z”: force in the z (vertical) direction' },
            { sym: String.raw`m\,a\,h`, say: '“m times a times h”, all multiplied together' },
          ],
          worked: {
            title: 'A 5 g stop',
            steps: [
              String.raw`Take \(m = 800\) kg, \(a = 5 \times 9.81 = 49.05\) m/s², \(h = 0.30\) m, \(L = 3.6\) m.`,
              String.raw`\(\Delta F_z = 800 \times 49.05 \times 0.30 \div 3.6 = 3{,}270\) N.`,
              String.raw`That is \(3{,}270 \div 9.81 \approx 333\) kg-force shifted to the front axle, about 167 kg-force onto each front tyre.`,
            ],
            answer: 'A substantial load moves forward, which is why front brakes do more of the work, why the nose dives, and why the front ride height must be controlled so the front wing and floor do not hit the track.',
          },
        },
      ],
    },
    {
      id: 'suspension',
      title: 'Suspension: holding the platform',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Double wishbone', def: 'Two A-shaped arms at each corner locate the wheel. Every F1 car uses this layout.' },
            { term: 'Pushrod / pullrod', def: 'A rod that transfers wheel movement to springs and dampers inside the bodywork. A pushrod is pushed upwards in compression, a pullrod is pulled. The choice is driven mainly by packaging and aerodynamics; teams have switched layouts in the ground-effect era.' },
            { term: 'Torsion bar', def: 'A twisting steel bar used as a spring; compact enough to fit inside the chassis.' },
            { term: 'Heave element', def: 'A third spring that acts when both wheels of an axle move up together (heave), controlling ride height under downforce without stiffening roll.' },
            { term: 'Anti-roll bar', def: 'Links the left and right wheels to resist body roll in corners; front and rear stiffness shift the car’s balance.' },
            { term: 'Ride height', def: 'The gap between floor and track. Ground-effect downforce rises sharply as it shrinks, until the floor stalls or touches.' },
            { term: 'Plank (skid block)', def: 'A 10 mm wooden-composite board under the floor; it may wear by only 1 mm. Excessive wear means disqualification, as happened to two cars at the 2023 United States Grand Prix.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`f_n = \frac{1}{2\pi}\sqrt{\frac{k}{m}}`,
          caption: 'Natural frequency of a mass on a spring: how many times a second the corner of the car would bounce if disturbed.',
          where: [
            { sym: 'f_n', def: 'Natural (ride) frequency, in hertz (bounces per second)' },
            { sym: 'k', def: 'Effective spring stiffness at the wheel, in N/m' },
            { sym: 'm', def: 'Mass carried by that corner, in kg' },
          ],
          syntax: [
            { sym: String.raw`\sqrt{\;}`, say: '“the square root of”' },
            { sym: String.raw`2\pi`, say: '“two pi”, about 6.283, turning radians per second into cycles per second' },
          ],
          worked: {
            title: 'Soft road car versus stiff racing car',
            steps: [
              String.raw`F1-like corner: \(k = 200{,}000\) N/m, \(m = 200\) kg. \(k/m = 1{,}000\), \(\sqrt{1{,}000} = 31.62\), divide by \(2\pi\): \(f_n \approx 5.0\) Hz.`,
              String.raw`Halve the stiffness to 100,000 N/m: \(\sqrt{500} = 22.36\), \(f_n \approx 3.6\) Hz.`,
              String.raw`A comfortable road car is typically around 1–1.5 Hz.`,
            ],
            answer: 'Racing cars run very stiff, because a soft car would let downforce squash the floor into the track. Halving stiffness only lowers the frequency by a factor of √2, so big comfort gains need big stiffness losses.',
          },
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Porpoising',
          text: 'In 2022 the new ground-effect cars bounced violently on straights. The cycle: the floor gets close to the track, downforce rises, the car is sucked lower, the airflow under the floor stalls, downforce collapses, the car springs up, and it starts again, several times a second. Fixes were stiffer suspension, higher ride heights and floor changes. The FIA introduced an oscillation limit mid-2022 and raised the floor edges by 15 mm for 2023, partly on driver-health grounds.',
        },
        {
          t: 'cycle',
          items: [
            { name: 'Floor near track', body: 'Air under the floor speeds up; pressure drops.' },
            { name: 'Downforce rises', body: 'The car is pulled lower, compressing the springs.' },
            { name: 'Flow stalls', body: 'Too close to the ground, the flow breaks down.' },
            { name: 'Downforce collapses', body: 'The springs push the car back up, and the loop repeats.' },
          ],
          caption: 'The porpoising loop of the 2022 ground-effect cars.',
        },
      ],
    },
    {
      id: 'kerbs-bumps',
      title: 'Kerbs, bumps and the compromise',
      blocks: [
        {
          t: 'table',
          head: ['Circuit type', 'Suspension demand', 'Typical approach'],
          rows: [
            ['Smooth, fast (Silverstone, Suzuka)', 'High aero load, few bumps', 'Stiff, low, maximum platform control'],
            ['Kerb-heavy (Monza chicanes, Austria)', 'Riding kerbs hard without unsettling the car', 'Softer bump settings, slightly higher ride'],
            ['Bumpy street circuit (Baku, Las Vegas, Singapore)', 'Bumps and manhole covers', 'Raised ride height, softer, accept downforce loss'],
            ['Monaco', 'Slow, bumpy, kerbs and crests', 'Softest set-up of the year for many teams'],
          ],
          caption: 'Generalisations; set-ups vary by car concept. See [street versus permanent circuits](@sports/f1/circuits/street-vs-permanent).',
        },
        {
          t: 'p',
          text: 'Since 2022 the tyres themselves give less help. The move from 13-inch to 18-inch wheels shrank the sidewall, and a sidewall is a spring. The suspension has to do more of the work the old tall tyres did. Interlinked hydraulic suspension systems, which let teams control pitch and roll separately, were banned for the 2022 rules; Mercedes’ earlier FRIC system had already been ruled out in 2014.',
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
            { label: 'Q1', text: 'How much energy is removed braking an 800 kg car from 300 to 100 km/h?' },
            { label: 'A1', text: 'v₁ = 83.33, v₂ = 27.78 m/s. ½ × 800 × (6,944 − 772) ≈ 2.47 MJ.' },
            { label: 'Q2', text: 'If that stop takes 2 s, what is the average braking power?' },
            { label: 'A2', text: '2.47 MJ ÷ 2 s ≈ 1.23 MW.' },
            { label: 'Q3', text: 'Doubling spring stiffness changes ride frequency by what factor?' },
            { label: 'A3', text: '√2 ≈ 1.41, because frequency goes with the square root of stiffness.' },
            { label: 'Q4', text: 'Why is brake-by-wire needed on the rear axle but not the front?' },
            { label: 'A4', text: 'Only the rear is braked by the MGU-K as well as the brakes, and the MGU-K’s share keeps changing.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *Formula 1 Technical Regulations*, 2022–2025 editions (brakes, suspension, floor and plank articles).',
    'Milliken, W. F. & Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.',
    'Brembo technical previews for individual grands prix (published annually).',
  ],
  related: [
    'sports/f1/physics-theory/friction-circle-and-slip-angle',
    'sports/f1/physics-theory/power-units-and-ers',
    'sports/f1/physics-theory/downforce-aerodynamics',
    'sports/f1/physics-theory/g-forces-safety',
    'sports/f1/rules-penalties/technical-and-financial-rules',
    'sports/physics/collisions-energy',
  ],
}

export default guide
