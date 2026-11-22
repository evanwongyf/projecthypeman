import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Stars shine because their cores are hot and dense enough for nuclear fusion: hydrogen nuclei are squeezed together into helium, and a tiny fraction of their mass becomes energy. This was only understood in the 1920s–30s, after Einstein’s E = mc² and quantum tunnelling. Before that, nobody could explain how the Sun had kept shining for billions of years.',
  nutshell: [
    'Four hydrogen nuclei fuse into one helium nucleus; **0.7% of the mass** disappears and becomes energy.',
    'The Sun converts about **4 million tonnes of mass into energy every second**, yet will last about 10 billion years in total.',
    'Stars balance gravity pulling in against pressure pushing out (**hydrostatic equilibrium**).',
    'The **Hertzsprung–Russell diagram** plots luminosity against temperature; most stars lie on the main sequence while they fuse hydrogen.',
  ],
  sections: [
    {
      id: 'emc2',
      title: 'Mass into energy',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E = \Delta m\,c^2, \qquad \Delta m = 4m_{\text{H}} - m_{\text{He}}`,
          caption: 'Energy released when four hydrogen nuclei become one helium nucleus.',
          plain: 'A helium nucleus weighs slightly less than the four hydrogen nuclei that made it. The missing mass, Δm, has not vanished: it has become energy, and Einstein’s formula says how much. Because c² is a huge number (9 × 10¹⁶), even a tiny mass makes a lot of energy.',
          where: [
            { sym: 'E', def: 'energy released, in joules' },
            { sym: String.raw`\Delta m`, def: 'delta m: the mass lost' },
            { sym: 'c', def: 'speed of light, 3.00 × 10⁸ m/s' },
            { sym: String.raw`m_{\text{H}},\ m_{\text{He}}`, def: 'masses of a hydrogen atom (1.00783 u) and helium-4 atom (4.00260 u)' },
          ],
          syntax: [{ sym: String.raw`\Delta`, say: 'delta, the Greek D: “change in” or “difference in”' }, { sym: 'u', say: 'atomic mass unit, 1.661 × 10⁻²⁷ kg' }],
          worked: {
            title: 'Energy per helium nucleus, and the Sun’s mass loss',
            steps: [
              String.raw`\(4m_{\text{H}} = 4\times1.00783 = 4.03132\) u.`,
              String.raw`\(\Delta m = 4.03132 - 4.00260 = 0.02872\) u, which is \(0.02872/4.03132 = 0.71\%\).`,
              String.raw`In kg: \(0.02872\times1.661\times10^{-27} = 4.77\times10^{-29}\) kg. \(E = 4.77\times10^{-29}\times9.00\times10^{16} = 4.29\times10^{-12}\) J.`,
              String.raw`Sun’s luminosity \(3.83\times10^{26}\) W, so mass lost per second \(= L/c^2 = 3.83\times10^{26}/9.00\times10^{16} = 4.26\times10^{9}\) kg/s.`,
            ],
            why: [
              'four hydrogen atoms go in (using atomic masses keeps the electron bookkeeping simple)',
              'subtract the helium mass; divide by the starting mass for the fraction',
              'convert to kilograms, then multiply by c² = 9.00 × 10¹⁶',
              'rearranging E = mc² per second: mass per second = power ÷ c²',
            ],
            answer: String.raw`Each helium nucleus releases about 26.7 MeV (\(4.3\times10^{-12}\) J); the Sun turns about 4.3 million tonnes of matter into light every second.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`t_{\text{life}} \approx 10^{10}\ \text{yr}\times\left(\frac{M}{M_\odot}\right)^{-2.5}`,
          caption: 'Approximate main-sequence lifetime of a star of mass M.',
          plain: 'A star’s lifetime is its fuel divided by how fast it burns it. A star twice the Sun’s mass has twice the fuel, but it is about ten times as luminous (luminosity rises roughly as mass to the power 3.5), so it runs out much sooner. Massive stars live fast and die young; small red dwarfs will outlive the current age of the universe many times over.',
          where: [
            { sym: 'M', def: 'star’s mass' },
            { sym: String.raw`M_\odot`, def: 'the Sun’s mass, 1.99 × 10³⁰ kg' },
          ],
          syntax: [{ sym: String.raw`(\cdot)^{-2.5}`, say: 'a negative power means “one over”; −2.5 means one over the 2.5th power' }],
          worked: {
            title: 'Lifetimes of different stars',
            steps: [
              String.raw`1 solar mass: \(1^{-2.5} = 1\), so \(10^{10}\) years.`,
              String.raw`10 solar masses: \(10^{-2.5} = 1/316 = 0.00316\), so \(3.2\times10^{7}\) years.`,
              String.raw`0.2 solar masses: \(0.2^{-2.5} = 1/0.2^{2.5} = 1/0.0179 = 55.9\), so \(5.6\times10^{11}\) years.`,
            ],
            why: [
              'the formula is calibrated on the Sun',
              '10^2.5 = 10² × √10 ≈ 316; massive stars burn out in tens of millions of years',
              '0.2² = 0.04, √0.2 = 0.447, so 0.2^2.5 = 0.0179; small stars burn slowly',
            ],
            answer: String.raw`10 billion years for the Sun, 32 million for a 10-solar-mass star, over 500 billion for a red dwarf, roughly 40 times the universe’s current age (real red dwarfs, being fully mixed, last even longer).`,
          },
        },
      ],
    },
    {
      id: 'hr',
      title: 'The Hertzsprung–Russell diagram',
      blocks: [
        { t: 'table', head: ['Region', 'Stars', 'What they are doing'], rows: [
          ['Main sequence (diagonal band)', '~90% of stars, including the Sun', 'Fusing hydrogen in the core'],
          ['Red giants (top right)', 'Arcturus, Aldebaran', 'Core hydrogen exhausted; envelope swollen'],
          ['Supergiants (top)', 'Betelgeuse, Rigel', 'Massive stars late in life'],
          ['White dwarfs (bottom left)', 'Sirius B', 'Dead, Earth-sized stellar cores cooling slowly'],
        ] },
      ],
    },
  ],
  sources: ['Bethe, H. A. (1939). Energy production in stars. Physical Review 55.', 'Eddington, A. S. (1920). The internal constitution of the stars. Nature 106.', 'Carroll & Ostlie (2017), chapters 8–10.'],
  related: ['astrophysics/stars/lives-of-stars', 'astrophysics/foundations/light-and-spectra'],
}

export default guide
