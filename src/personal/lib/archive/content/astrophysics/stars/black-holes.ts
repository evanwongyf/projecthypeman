import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A black hole is a region where gravity is so strong that not even light can escape. Predicted by Einstein’s general relativity in 1915–16, black holes were long thought too strange to be real. Now we have photographed the shadows of two of them, heard dozens collide through gravitational waves, and tracked stars racing around the four-million-solar-mass black hole at the centre of our galaxy.',
  nutshell: [
    'The **event horizon** is the point of no return, at the **Schwarzschild radius** \\(r_s = 2GM/c^2\\).',
    'Near a black hole, **time runs slow** relative to far away.',
    'Stellar black holes weigh a few to ~100 Suns; **supermassive** ones (millions to billions of Suns) sit in galaxy centres.',
    '**Gravitational waves** from merging black holes were first detected by LIGO in 2015 (Nobel Prize 2017).',
  ],
  sections: [
    {
      id: 'schwarzschild',
      title: 'The Schwarzschild radius',
      blocks: [
        {
          t: 'math',
          tex: String.raw`r_s = \frac{2GM}{c^2}`,
          caption: 'The radius of the event horizon of a non-spinning black hole of mass M.',
          plain: 'Recall escape velocity, √(2GM/r). Set it equal to the speed of light and solve for r: that is the radius inside which nothing, not even light, can get out. Any mass squeezed inside its own Schwarzschild radius becomes a black hole. The radius is proportional to mass: double the mass, double the size.',
          where: [
            { sym: String.raw`r_s`, def: 'Schwarzschild radius' },
            { sym: 'G', def: '6.674 × 10⁻¹¹ N m² kg⁻²' },
            { sym: 'M', def: 'mass' },
            { sym: 'c', def: '3.00 × 10⁸ m/s' },
          ],
          syntax: [{ sym: String.raw`r_s`, say: 'r with subscript s (for Schwarzschild), a label' }],
          worked: {
            title: 'Earth, the Sun and Sagittarius A*',
            steps: [
              String.raw`\(2G/c^2 = 2\times6.674\times10^{-11}/9.00\times10^{16} = 1.48\times10^{-27}\) m/kg.`,
              String.raw`Sun: \(1.48\times10^{-27}\times1.99\times10^{30} = 2{,}950\) m ≈ 3 km.`,
              String.raw`Earth: \(1.48\times10^{-27}\times5.97\times10^{24} = 8.8\times10^{-3}\) m ≈ 9 mm.`,
              String.raw`Sgr A*: \(4.3\times10^{6}\,M_\odot\): \(2.95\ \text{km}\times4.3\times10^{6} = 1.27\times10^{7}\) km ≈ 0.085 AU.`,
            ],
            why: [
              'compute the constant part once; then any r_s is this number times the mass',
              'multiply by the Sun’s mass',
              'Earth would have to be squashed to the size of a marble',
              'r_s scales with mass, so scale the Sun’s value; 1 AU is 1.5 × 10⁸ km',
            ],
            answer: String.raw`3 km for the Sun, 9 mm for Earth, and about 13 million km (a fifth of Mercury’s orbit) for the Milky Way’s central black hole.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`\frac{\Delta t_{\text{near}}}{\Delta t_{\text{far}}} = \sqrt{1 - \frac{r_s}{r}}`,
          caption: 'Gravitational time dilation for a clock held at rest at distance r from a black hole.',
          plain: 'Gravity slows time. A clock held near a heavy mass ticks slower than one far away, and the effect becomes extreme close to the event horizon, where the factor approaches zero. The same effect, far gentler, is measurable on Earth: clocks on mountains run faster than clocks at sea level, and GPS satellites must correct for it.',
          where: [
            { sym: String.raw`\Delta t_{\text{near}}`, def: 'time elapsed on the nearby clock' },
            { sym: String.raw`\Delta t_{\text{far}}`, def: 'time elapsed far away' },
            { sym: 'r', def: 'distance from the centre' },
          ],
          syntax: [{ sym: String.raw`\Delta t`, say: 'a time interval' }],
          worked: {
            title: 'One hour near a black hole',
            steps: [
              String.raw`At \(r = 2r_s\): \(\sqrt{1 - \tfrac12} = \sqrt{0.5} = 0.707\).`,
              String.raw`At \(r = 1.01r_s\): \(\sqrt{1 - 1/1.01} = \sqrt{0.0099} = 0.0995\).`,
              String.raw`An hour on the near clock at \(1.01r_s\) corresponds to \(1/0.0995 \approx 10\) hours far away.`,
            ],
            why: [
              'r_s/r = 1/2; take 1 minus that and the square root',
              'very close to the horizon the fraction under the root is almost 0',
              'invert the ratio to get far time per near hour',
            ],
            answer: String.raw`At twice the horizon radius, clocks run at 71% speed; just outside, at 10%. (In the film Interstellar, the planet’s 1 hour ≈ 7 years required a rapidly spinning black hole.)`,
          },
        },
      ],
    },
    {
      id: 'evidence',
      title: 'How we know black holes exist',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Stars orbiting Sgr A*', body: 'Genzel’s and Ghez’s teams tracked stars orbiting an invisible 4-million-solar-mass object over decades (Nobel Prize 2020). Kepler’s third law gives the mass; the orbits show it is tiny.' },
          { title: 'Event Horizon Telescope images', body: 'A planet-sized network of radio dishes imaged the shadow of M87* (2019) and Sgr A* (2022), matching general relativity’s predicted size.' },
          { title: 'Gravitational waves', body: 'LIGO and Virgo detect ripples in spacetime from merging black holes; the first (GW150914) involved 36 and 29 solar masses, releasing 3 solar masses as waves.' },
          { title: 'X-ray binaries', body: 'Gas falling from a companion star heats to millions of degrees and glows in X-rays; Cygnus X-1 was the first convincing stellar black hole.' },
        ] },
      ],
    },
  ],
  sources: ['Schwarzschild, K. (1916). On the gravitational field of a mass point according to Einstein’s theory.', 'Abbott, B. P. et al. (2016). Observation of gravitational waves from a binary black hole merger. PRL 116.', 'Event Horizon Telescope Collaboration (2019, 2022). ApJL 875 and 930.', 'GRAVITY Collaboration (2019). A geometric distance measurement to the Galactic Center black hole. A&A 625.'],
  related: ['astrophysics/foundations/gravity-and-orbits', 'astrophysics/practice/utility'],
}

export default guide
