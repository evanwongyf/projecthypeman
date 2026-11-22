import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A star’s mass decides its whole life. Sun-like stars swell into red giants and end as white dwarfs, while stars above about eight solar masses end in supernova explosions that leave neutron stars or black holes. Along the way stars forge the elements: the carbon in your cells, the oxygen you breathe and the iron in your blood were made inside stars that died before the Sun was born.',
  nutshell: [
    '**Low mass (< 0.5 M☉)**: red dwarfs, burn for trillions of years, end as white dwarfs.',
    '**Sun-like (0.5–8 M☉)**: red giant → planetary nebula → white dwarf.',
    '**Massive (> 8 M☉)**: supergiant → iron core collapse → supernova → neutron star or black hole.',
    'White dwarfs cannot exceed the **Chandrasekhar limit** of 1.4 M☉; neutron stars are only about 20 km across.',
  ],
  sections: [
    {
      id: 'density',
      title: 'How dense are dead stars?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\rho = \frac{M}{\tfrac{4}{3}\pi R^3}`,
          caption: 'Average density of a sphere of mass M and radius R.',
          plain: 'Density is mass divided by volume. A sphere’s volume is four-thirds pi times its radius cubed. When a star collapses, its mass stays roughly the same but its radius shrinks enormously, and because the radius is cubed, the density shoots up.',
          where: [
            { sym: String.raw`\rho`, def: 'rho: average density in kg/m³' },
            { sym: 'M', def: 'mass' },
            { sym: 'R', def: 'radius' },
          ],
          syntax: [{ sym: String.raw`\tfrac{4}{3}\pi R^3`, say: 'the volume of a sphere' }, { sym: String.raw`\rho`, say: 'the Greek letter rho' }],
          worked: {
            title: 'The Sun, a white dwarf and a neutron star',
            steps: [
              String.raw`Sun: \(V = \tfrac43\pi(6.96\times10^{8})^3 = 4.19\times3.37\times10^{26} = 1.41\times10^{27}\) m³. \(\rho = 1.99\times10^{30}/1.41\times10^{27} = 1{,}410\) kg/m³.`,
              String.raw`White dwarf: \(0.6\,M_\odot\) in Earth’s radius \(6.37\times10^{6}\) m. \(V = 4.19\times2.58\times10^{20} = 1.08\times10^{21}\) m³. \(\rho = 1.19\times10^{30}/1.08\times10^{21} = 1.1\times10^{9}\) kg/m³.`,
              String.raw`Neutron star: \(1.4\,M_\odot\) in radius 12 km. \(V = 4.19\times(1.2\times10^{4})^3 = 7.24\times10^{12}\) m³. \(\rho = 2.79\times10^{30}/7.24\times10^{12} = 3.9\times10^{17}\) kg/m³.`,
            ],
            why: [
              '4/3 × π ≈ 4.19; cube the radius (cube the coefficient, triple the exponent)',
              'same method with a smaller radius; 0.6 solar masses is typical',
              'the radius is a few hundred times smaller again, and cubing magnifies the difference',
            ],
            answer: String.raw`The Sun is only 1.4 times as dense as water; a teaspoon of white dwarf weighs about 5 tonnes; a teaspoon of neutron star weighs about 2 billion tonnes, like a mountain squeezed into a spoon.`,
          },
        },
      ],
    },
    {
      id: 'elements',
      title: 'Where the elements come from',
      blocks: [
        { t: 'table', head: ['Elements', 'Made in'], rows: [
          ['Hydrogen, most helium, a little lithium', 'The Big Bang'],
          ['Carbon, nitrogen, oxygen', 'Fusion in stars; spread by red giant winds and supernovae'],
          ['Up to iron', 'Fusion in massive stars before they explode'],
          ['Heavier than iron (gold, platinum, uranium)', 'Neutron star mergers (seen in 2017) and some supernovae'],
        ] },
        { t: 'callout', tone: 'fact', title: '“We are made of star stuff”', text: 'About 93% of the atoms in your body by mass (all the oxygen and carbon, most of the rest) were forged in stars. The hydrogen in your water is the exception: it dates from the Big Bang.' },
      ],
    },
  ],
  sources: ['Burbidge, E. M. et al. (1957). Synthesis of the elements in stars. Reviews of Modern Physics 29.', 'Abbott, B. P. et al. (2017). GW170817: observation of gravitational waves from a binary neutron star inspiral. PRL 119.', 'Chandrasekhar, S. (1931). The maximum mass of ideal white dwarfs. ApJ 74.'],
  related: ['astrophysics/stars/black-holes', 'astrophysics/stars/how-stars-shine'],
}

export default guide
