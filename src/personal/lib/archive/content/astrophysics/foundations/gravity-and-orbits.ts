import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Gravity shapes everything in astrophysics, from the Moon’s orbit to the clustering of galaxies. Newton’s law of gravitation, combined with the idea that an orbit is a fall that keeps missing the ground, explains satellites, planets and binary stars, and lets astronomers weigh things they can never touch.',
  nutshell: [
    '**Newton**: \\(F = GMm/r^2\\): gravity grows with mass and weakens with the square of distance.',
    '**Circular orbit speed** \\(v = \\sqrt{GM/r}\\): closer orbits are faster.',
    '**Kepler’s third law** \\(T^2 \\propto a^3\\): measure an orbit’s period and size and you can weigh the central body.',
    '**Escape velocity** \\(\\sqrt{2GM/r}\\): 11.2 km/s from Earth’s surface.',
  ],
  sections: [
    {
      id: 'newton',
      title: 'Newton’s law of gravitation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F = \frac{G M m}{r^2}`,
          caption: 'The gravitational force between masses M and m whose centres are r apart.',
          plain: 'Every mass pulls on every other mass. The pull is stronger for bigger masses (it is proportional to both) and weaker with distance, falling with the square of the distance: twice as far, a quarter of the pull. G is a tiny constant, which is why you do not feel the pull of the person next to you but do feel the pull of the whole Earth.',
          where: [
            { sym: 'F', def: 'force in newtons' },
            { sym: 'G', def: 'gravitational constant, 6.674 × 10⁻¹¹ N m² kg⁻²' },
            { sym: 'M, m', def: 'the two masses in kilograms' },
            { sym: 'r', def: 'distance between centres in metres' },
          ],
          syntax: [{ sym: 'GMm', say: 'G times M times m' }, { sym: String.raw`r^2`, say: 'r squared' }],
          worked: {
            title: 'Your weight, from Newton’s law',
            steps: [
              String.raw`Earth: \(M = 5.97\times10^{24}\) kg, \(r = 6.37\times10^{6}\) m. You: \(m = 60\) kg.`,
              String.raw`Numerator: \(GMm = 6.674\times10^{-11}\times5.97\times10^{24}\times60 = 2.39\times10^{16}\).`,
              String.raw`\(r^2 = (6.37\times10^{6})^2 = 4.06\times10^{13}\).`,
              String.raw`\(F = 2.39\times10^{16}/4.06\times10^{13} = 589\) N.`,
              String.raw`Divide by your mass: \(589/60 = 9.81\) m/s².`,
            ],
            why: [
              'r is Earth’s radius because you stand on the surface, one radius from its centre',
              'multiply coefficients (6.674 × 5.97 × 60 = 2390) and add exponents (−11 + 24 = 13, then 2390 × 10¹³ = 2.39 × 10¹⁶)',
              'square the coefficient and double the exponent',
              'divide; this force is your weight',
              'force per kilogram is the acceleration of anything falling at Earth’s surface',
            ],
            answer: String.raw`A 60 kg person weighs 589 N, and Newton’s law reproduces g = 9.81 m/s², the same number you measure by dropping things.`,
          },
        },
      ],
    },
    {
      id: 'orbits',
      title: 'Orbits and Kepler’s third law',
      blocks: [
        {
          t: 'math',
          tex: String.raw`v = \sqrt{\frac{GM}{r}}, \qquad T^2 = \frac{4\pi^2}{GM}\,a^3`,
          caption: 'Speed of a circular orbit of radius r, and Kepler’s third law for an orbit of semi-major axis a and period T.',
          plain: 'A satellite is falling all the time but moving sideways fast enough that the ground curves away beneath it. The required speed comes from balancing gravity against the force needed to go in a circle. Kepler found that the time to go round (squared) is proportional to the orbit’s size (cubed). Turning this around, timing an orbit tells you the mass M doing the pulling.',
          where: [
            { sym: 'v', def: 'orbital speed' },
            { sym: 'r, a', def: 'orbit radius (or semi-major axis for an ellipse)' },
            { sym: 'T', def: 'orbital period' },
            { sym: 'M', def: 'mass of the central body' },
          ],
          syntax: [{ sym: String.raw`\sqrt{\;}`, say: 'square root of everything under the bar' }, { sym: String.raw`a^3`, say: 'a cubed, a × a × a' }],
          worked: {
            title: 'The ISS, and weighing the Sun',
            steps: [
              String.raw`ISS orbit: 420 km above the surface, so \(r = 6.37\times10^6 + 4.2\times10^5 = 6.79\times10^6\) m.`,
              String.raw`\(GM_\oplus = 6.674\times10^{-11}\times5.97\times10^{24} = 3.98\times10^{14}\). \(v = \sqrt{3.98\times10^{14}/6.79\times10^{6}} = \sqrt{5.86\times10^{7}} = 7{,}660\) m/s.`,
              String.raw`Period: \(T = 2\pi r/v = 2\pi\times6.79\times10^6/7660 = 5{,}570\) s \(\approx 93\) minutes.`,
              String.raw`Earth round the Sun: \(T = 3.156\times10^7\) s, \(a = 1.496\times10^{11}\) m. Rearranged: \(M = 4\pi^2a^3/(GT^2)\).`,
              String.raw`\(a^3 = 3.35\times10^{33}\); \(T^2 = 9.96\times10^{14}\). \(M = 39.48\times3.35\times10^{33}/(6.674\times10^{-11}\times9.96\times10^{14}) = 1.99\times10^{30}\) kg.`,
            ],
            why: [
              'orbit radius is measured from Earth’s centre, so add the altitude to Earth’s radius',
              'compute GM first, divide by r, then square root',
              'one orbit is the circumference 2πr travelled at speed v',
              'make M the subject of Kepler’s law by multiplying both sides by GM and dividing by T²',
              'cube a, square T, and 4π² = 39.48; then divide',
            ],
            answer: String.raw`The ISS moves at 7.7 km/s and circles Earth every 93 minutes (16 sunrises a day). Earth’s year reveals the Sun’s mass: \(2.0\times10^{30}\) kg, about 333,000 Earths.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`v_{\text{esc}} = \sqrt{\frac{2GM}{r}}`,
          caption: 'Escape velocity from distance r of a mass M.',
          plain: 'Throw a ball up and it comes back. Throw it faster and it goes higher. Escape velocity is the launch speed at which its kinetic energy exactly pays the full cost of climbing out of the gravity well, so it never comes back. It is √2 (about 1.41) times the circular orbit speed at the same distance.',
          where: [{ sym: String.raw`v_{\text{esc}}`, def: 'escape velocity' }, { sym: 'M, r', def: 'mass of the body and distance from its centre' }],
          syntax: [{ sym: 'esc', say: 'a label meaning “escape”, not a calculation' }],
          worked: {
            title: 'Earth and the Moon',
            steps: [
              String.raw`Earth: \(2GM/r = 2\times3.98\times10^{14}/6.37\times10^{6} = 1.25\times10^{8}\). \(v = \sqrt{1.25\times10^{8}} = 11{,}200\) m/s.`,
              String.raw`Moon: \(M = 7.35\times10^{22}\) kg, \(r = 1.74\times10^{6}\) m. \(2GM/r = 2\times6.674\times10^{-11}\times7.35\times10^{22}/1.74\times10^{6} = 5.64\times10^{6}\).`,
              String.raw`\(v = \sqrt{5.64\times10^{6}} = 2{,}380\) m/s.`,
            ],
            why: [
              'reuse GM for Earth from the previous example',
              'the Moon has about 1/81 of Earth’s mass and 27% of its radius',
              'square root of the result',
            ],
            answer: String.raw`11.2 km/s from Earth but only 2.4 km/s from the Moon, which is why the Apollo lunar module could lift off with a small engine.`,
          },
        },
      ],
    },
  ],
  sources: ['Newton, I. (1687). Philosophiæ Naturalis Principia Mathematica.', 'Kepler, J. (1619). Harmonices Mundi.', 'NASA Space Science Data Coordinated Archive: planetary fact sheets.'],
  related: ['astrophysics/stars/black-holes', 'astrophysics/cosmos/exoplanets'],
}

export default guide
