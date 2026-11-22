import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Galaxies are cities of stars, gas and dust, from dwarfs with a few million stars to giants with trillions. Our Milky Way is a barred spiral about 100,000 light-years across with 100–400 billion stars. When astronomers weighed galaxies by how fast they spin, they found far more mass than the stars and gas could account for. That missing mass, dark matter, makes up about 85% of all the matter in the universe, and nobody yet knows what it is.',
  nutshell: [
    'Orbital speed reveals the mass inside an orbit: \\(M = v^2 r / G\\).',
    'Galaxy **rotation curves are flat**: outer stars orbit as fast as inner ones, so mass keeps growing with radius where little light is seen.',
    'Other evidence: galaxy clusters, **gravitational lensing**, the Bullet Cluster and the cosmic microwave background.',
    'Candidates: unknown particles (WIMPs, axions); alternatives such as modified gravity (MOND) explain some but not all observations.',
  ],
  sections: [
    {
      id: 'weighing',
      title: 'Weighing a galaxy',
      blocks: [
        {
          t: 'math',
          tex: String.raw`M(<r) = \frac{v^2\, r}{G}`,
          caption: 'Mass enclosed within radius r, from the circular orbital speed v at that radius.',
          plain: 'For a star in a circular orbit, gravity from the mass inside its orbit supplies exactly the pull needed to keep it circling. Set the gravitational pull equal to the needed pull and solve for the mass. So measuring how fast stars or gas clouds move at some distance from the centre tells you how much mass lies inside that distance, whether you can see it or not.',
          where: [
            { sym: 'M(<r)', def: 'mass inside radius r' },
            { sym: 'v', def: 'orbital speed at radius r' },
            { sym: 'r', def: 'distance from the galaxy’s centre' },
            { sym: 'G', def: '6.674 × 10⁻¹¹ N m² kg⁻²' },
          ],
          syntax: [{ sym: 'M(<r)', say: '“M of less than r”: the mass within radius r' }, { sym: String.raw`v^2`, say: 'v squared' }],
          worked: {
            title: 'The Milky Way inside the Sun’s orbit, and further out',
            steps: [
              String.raw`Sun: \(v = 230\) km/s \(= 2.3\times10^5\) m/s; \(r = 26{,}000\) ly \(= 2.46\times10^{20}\) m.`,
              String.raw`\(v^2 = 5.29\times10^{10}\); \(v^2 r = 5.29\times10^{10}\times2.46\times10^{20} = 1.30\times10^{31}\).`,
              String.raw`\(M = 1.30\times10^{31}/6.674\times10^{-11} = 1.95\times10^{41}\) kg \(\approx 9.8\times10^{10}\,M_\odot\).`,
              String.raw`At twice the radius the speed is still about 230 km/s, so \(M(<2r) = 2\times M(<r)\).`,
              String.raw`If the visible stars were all the mass, the speed at \(2r\) would fall to about \(230/\sqrt2 \approx 163\) km/s.`,
            ],
            why: [
              'convert km/s to m/s and light-years to metres (× 9.46 × 10¹⁵)',
              'square the speed and multiply by the radius',
              'divide by G, then by the Sun’s mass 1.99 × 10³⁰ kg',
              'with v constant, M grows in proportion to r',
              'with no extra mass, v would fall as 1/√r like the planets do around the Sun',
            ],
            answer: String.raw`About 100 billion solar masses lie inside the Sun’s orbit, and the enclosed mass keeps climbing where starlight fades. Flat rotation curves (Vera Rubin, 1970s) are a key piece of evidence for dark matter.`,
          },
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence for dark matter',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Galaxy clusters (Zwicky, 1933)', body: 'Galaxies in the Coma cluster move too fast to be held by visible matter alone.' },
          { title: 'Rotation curves (Rubin and Ford, 1970s)', body: 'Spiral galaxies spin at constant speed far beyond their visible edges.' },
          { title: 'Gravitational lensing', body: 'Mass bends light; the amount of bending around clusters reveals far more mass than is visible.' },
          { title: 'The Bullet Cluster', body: 'In two colliding clusters the hot gas (most normal matter) lags behind while the lensing mass passed straight through, hard to explain without dark matter.' },
          { title: 'The cosmic microwave background', body: 'The pattern of hot and cold spots requires about five times more dark matter than normal matter.' },
          { title: 'Structure formation', body: 'Without dark matter’s extra gravity, galaxies would not have had time to form by today.' },
        ] },
      ],
    },
  ],
  sources: ['Rubin, V. C. & Ford, W. K. (1970). Rotation of the Andromeda Nebula from a spectroscopic survey of emission regions. ApJ 159.', 'Zwicky, F. (1933). Die Rotverschiebung von extragalaktischen Nebeln. Helvetica Physica Acta 6.', 'Clowe, D. et al. (2006). A direct empirical proof of the existence of dark matter. ApJL 648.'],
  related: ['astrophysics/cosmos/cosmology', 'astrophysics/foundations/gravity-and-orbits'],
}

export default guide
