import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 1995 Michel Mayor and Didier Queloz found the first planet orbiting a Sun-like star (51 Pegasi b), winning the 2019 Nobel Prize. Today more than 6,000 exoplanets are confirmed, and statistics suggest most stars have planets. Most are found indirectly, from the tiny dip in starlight as a planet crosses its star or the tiny wobble a planet’s gravity gives its star.',
  nutshell: [
    '**Transit method**: depth of the dip \\(\\approx (R_p/R_\\star)^2\\) gives the planet’s size.',
    '**Radial velocity**: the star’s wobble gives the planet’s (minimum) mass.',
    'Size + mass → density → rocky or gassy.',
    'The **habitable zone** is where a planet could have liquid water; JWST is now studying exoplanet atmospheres.',
  ],
  sections: [
    {
      id: 'transit',
      title: 'The transit method',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\delta = \frac{\Delta F}{F} \approx \left(\frac{R_p}{R_\star}\right)^2`,
          caption: 'Transit depth: the fraction of starlight blocked when a planet crosses its star.',
          plain: 'When a planet passes in front of its star, it blocks a small disc of the star’s light. The fraction blocked is the planet’s disc area divided by the star’s disc area, and since both areas are π times a radius squared, the π cancels, leaving the ratio of radii squared. Measure the dip, know the star’s size, and you get the planet’s size.',
          where: [
            { sym: String.raw`\delta`, def: 'delta: transit depth (fractional dimming)' },
            { sym: String.raw`R_p`, def: 'planet radius' },
            { sym: String.raw`R_\star`, def: 'star radius' },
          ],
          syntax: [{ sym: String.raw`\Delta F / F`, say: 'change in brightness divided by normal brightness' }, { sym: String.raw`R_\star`, say: 'R with a star subscript: the star’s radius' }],
          worked: {
            title: 'Jupiter and Earth seen transiting the Sun from afar',
            steps: [
              String.raw`Jupiter: \(R_p/R_\odot = 71{,}500/696{,}000 = 0.103\). \(\delta = 0.103^2 = 0.0106 = 1.06\%\).`,
              String.raw`Earth: \(6{,}371/696{,}000 = 0.00915\). \(\delta = 0.00915^2 = 8.4\times10^{-5} = 84\) parts per million.`,
              String.raw`Observed dip of 0.40% around a star of 0.8 \(R_\odot\): \(R_p = \sqrt{0.0040}\times0.8\times696{,}000 = 0.0632\times556{,}800 = 35{,}200\) km.`,
            ],
            why: [
              'divide the radii, then square',
              'Earth is ten times smaller in radius, so its dip is a hundred times shallower; that is why Earth-like transits need space telescopes',
              'undo the square with a square root, then multiply by the star’s radius in km',
            ],
            answer: String.raw`A Jupiter dims a Sun-like star by about 1%, an Earth by 0.008%; the 0.40% example is a planet about half Jupiter’s radius (a Saturn-sized world).`,
          },
        },
      ],
    },
    {
      id: 'hz',
      title: 'The habitable zone',
      blocks: [
        {
          t: 'math',
          tex: String.raw`d_{\text{HZ}} \approx 1\ \text{AU}\times\sqrt{\frac{L}{L_\odot}}`,
          caption: 'Rough centre of the habitable zone for a star of luminosity L.',
          plain: 'A planet’s temperature depends on how much starlight it receives, which falls with the square of distance. To receive the same light Earth gets from the Sun, a planet around a star with L times the Sun’s luminosity must be √L times as far away. Brighter stars push the habitable zone outward; dim red dwarfs pull it in very close.',
          where: [{ sym: String.raw`d_{\text{HZ}}`, def: 'distance of Earth-like illumination' }, { sym: String.raw`L/L_\odot`, def: 'luminosity relative to the Sun' }],
          syntax: [{ sym: 'HZ', say: 'habitable zone' }],
          worked: {
            title: 'TRAPPIST-1 and Sirius',
            steps: [
              String.raw`TRAPPIST-1: \(L = 0.00055\,L_\odot\). \(\sqrt{0.00055} = 0.0235\) AU.`,
              String.raw`In km: \(0.0235\times1.5\times10^{8} = 3.5\times10^{6}\) km (Mercury orbits at 58 million km).`,
              String.raw`Sirius A: \(L = 25\,L_\odot\). \(\sqrt{25} = 5\) AU, near Jupiter’s orbit.`,
            ],
            why: [
              'apply the square-root rule',
              'convert AU to km to compare with the Solar System',
              'a brighter star needs a much more distant planet for the same warmth',
            ],
            answer: String.raw`TRAPPIST-1’s habitable-zone planets (e, f, g) orbit in days, far closer than Mercury is to the Sun; Sirius’s habitable zone would be out near Jupiter. Being in the zone does not guarantee water or life: atmosphere, magnetic field and stellar flares matter.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`N = R_\ast\cdot f_p\cdot n_e\cdot f_l\cdot f_i\cdot f_c\cdot L`,
          caption: 'The Drake equation: an estimate of the number of communicating civilisations in our galaxy.',
          plain: 'Frank Drake (1961) broke an impossible question into a chain of smaller ones: how fast stars form, what fraction have planets, how many of those are habitable, and what fractions develop life, intelligence and detectable technology, times how long such civilisations last. The first three factors are now measured; the last four are guesses spanning many orders of magnitude, so the equation organises our ignorance rather than giving an answer.',
          where: [
            { sym: String.raw`R_\ast`, def: 'star formation rate in the galaxy (~1.5–3 per year)' },
            { sym: String.raw`f_p`, def: 'fraction of stars with planets (~1)' },
            { sym: String.raw`n_e`, def: 'habitable planets per system (~0.1–0.4)' },
            { sym: String.raw`f_l, f_i, f_c`, def: 'fractions developing life, intelligence, communication (unknown)' },
            { sym: 'L', def: 'lifetime of a communicating civilisation, years (unknown)' },
          ],
          syntax: [{ sym: String.raw`\cdot`, say: 'a raised dot means multiply' }],
          worked: {
            title: 'An optimistic and a pessimistic run',
            steps: [
              String.raw`Shared: \(R_\ast f_p n_e = 2\times1\times0.2 = 0.4\) habitable planets formed per year.`,
              String.raw`Optimistic: \(f_l = 1\), \(f_i = 0.5\), \(f_c = 0.5\), \(L = 10{,}000\): \(N = 0.4\times0.25\times10^4 = 1{,}000\).`,
              String.raw`Pessimistic: \(f_l = 0.01\), \(f_i = 0.01\), \(f_c = 0.1\), \(L = 1{,}000\): \(N = 0.4\times10^{-5}\times10^3 = 0.004\).`,
            ],
            why: [
              'the measured part of the chain',
              'multiply all factors: 1 × 0.5 × 0.5 = 0.25',
              'small fractions multiply into a tiny number; below 1 means we are probably alone in the galaxy',
            ],
            answer: String.raw`Plausible inputs give anything from thousands to far less than one. The equation’s value is in showing which unknowns matter most.`,
          },
        },
      ],
    },
  ],
  sources: ['Mayor, M. & Queloz, D. (1995). A Jupiter-mass companion to a solar-type star. Nature 378.', 'Kopparapu, R. K. et al. (2013). Habitable zones around main-sequence stars. ApJ 765.', 'Gillon, M. et al. (2017). Seven temperate terrestrial planets around the nearby ultracool dwarf star TRAPPIST-1. Nature 542.', 'NASA Exoplanet Archive.'],
  related: ['astrophysics/foundations/gravity-and-orbits', 'astrophysics/practice/telescopes'],
}

export default guide
