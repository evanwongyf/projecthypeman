import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cosmology studies the universe as a whole: its origin, contents and fate. In 1929 Edwin Hubble found that distant galaxies recede faster the further away they are, meaning space itself is expanding. Run the film backwards and everything was once hot and dense: the Big Bang, about 13.8 billion years ago. The leftover glow, the cosmic microwave background, was discovered in 1965 and is now mapped in exquisite detail.',
  nutshell: [
    '**Hubble’s law**: \\(v = H_0 d\\), with \\(H_0 \\approx 70\\) km/s per megaparsec.',
    '**Age estimate**: roughly \\(1/H_0 \\approx 14\\) billion years.',
    '**Cosmological redshift**: light’s wavelength stretches with space; \\(1 + z\\) is how much the universe has expanded since the light left.',
    'Energy budget today: about **5% normal matter, 27% dark matter, 68% dark energy**, which is accelerating the expansion.',
  ],
  sections: [
    {
      id: 'hubble',
      title: 'Hubble’s law and the age of the universe',
      blocks: [
        {
          t: 'math',
          tex: String.raw`v = H_0\,d, \qquad t_0 \approx \frac{1}{H_0}`,
          caption: 'Recession velocity is proportional to distance; the inverse of the Hubble constant estimates the age.',
          plain: 'Picture raisins in rising bread: every raisin moves away from every other, and raisins twice as far apart separate twice as fast. Galaxies behave the same way because space between them is stretching. The Hubble constant H₀ says how fast: every megaparsec of distance adds about 70 km/s of recession speed. If galaxies have always moved at today’s speeds, they were all together a time d/v = 1/H₀ ago.',
          where: [
            { sym: 'v', def: 'recession velocity, km/s' },
            { sym: String.raw`H_0`, def: 'Hubble constant, ~70 km/s/Mpc (“H nought”: its value today)' },
            { sym: 'd', def: 'distance, Mpc' },
            { sym: String.raw`t_0`, def: 'age of the universe' },
          ],
          syntax: [{ sym: 'km/s/Mpc', say: 'kilometres per second for every megaparsec of distance' }, { sym: String.raw`H_0`, say: '“H nought”; the 0 means “now”' }],
          worked: {
            title: 'Distance to a galaxy, and the age of the universe',
            steps: [
              String.raw`Galaxy receding at \(v = 6{,}000\) km/s: \(d = v/H_0 = 6000/70 = 85.7\) Mpc \(\approx 280\) million ly.`,
              String.raw`Units of \(1/H_0\): \(1\) Mpc \(= 3.086\times10^{19}\) km, so \(H_0 = 70/3.086\times10^{19} = 2.27\times10^{-18}\) s⁻¹.`,
              String.raw`\(1/H_0 = 4.41\times10^{17}\) s.`,
              String.raw`\(4.41\times10^{17}/3.156\times10^{7} = 1.40\times10^{10}\) years.`,
            ],
            why: [
              'rearrange Hubble’s law for distance; 1 Mpc = 3.26 million ly',
              'cancel kilometres: km/s divided by km leaves 1/s',
              'one over H₀ is a time',
              'divide by seconds per year',
            ],
            answer: String.raw`Hubble time ≈ 14.0 billion years, close to the detailed answer of 13.8 billion years (the expansion has slowed then sped up, and these nearly cancel). Note the “Hubble tension”: local measurements give ~73 and the CMB ~67.4 km/s/Mpc, a puzzle still unresolved.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`1 + z = \frac{\lambda_{\text{obs}}}{\lambda_{\text{emit}}} = \frac{a_{\text{now}}}{a_{\text{then}}}`,
          caption: 'Cosmological redshift equals the factor by which the universe has stretched since the light was emitted.',
          plain: 'As light crosses expanding space, its waves are stretched along with it. If the universe has doubled in size since the light left, every wavelength has doubled too, so 1 + z = 2. The scale factor a measures the size of the universe relative to today (a = 1 now).',
          where: [
            { sym: 'z', def: 'redshift' },
            { sym: 'a', def: 'cosmic scale factor (relative size of the universe)' },
          ],
          syntax: [{ sym: String.raw`a_{\text{now}}`, say: 'scale factor today, defined as 1' }],
          worked: {
            title: 'The cosmic microwave background and a JWST galaxy',
            steps: [
              String.raw`The CMB was released at \(T \approx 3{,}000\) K; today it measures \(2.725\) K.`,
              String.raw`Temperature falls with stretching: \(1 + z = 3000/2.725 = 1{,}100\), so \(z \approx 1{,}100\).`,
              String.raw`A JWST galaxy at \(z = 13\): \(1 + z = 14\), so the universe was \(1/14 \approx 7\%\) of its current size.`,
              String.raw`Its hydrogen Lyman-alpha line (121.6 nm, ultraviolet) arrives at \(121.6\times14 = 1{,}702\) nm, in the infrared.`,
            ],
            why: [
              'hydrogen became transparent to light at about this temperature, 380,000 years after the Big Bang',
              'a blackbody’s temperature drops in proportion to the stretch, so the temperature ratio gives 1 + z',
              'invert 1 + z to get the size then compared with now',
              'multiply wavelengths by 1 + z; this is why JWST observes in the infrared',
            ],
            answer: String.raw`The CMB has been stretched about 1,100-fold, and the most distant galaxies are seen when the universe was a fourteenth of its present size and only about 300 million years old.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`\rho_c = \frac{3H_0^2}{8\pi G}`,
          caption: 'The critical density: the density that makes the universe spatially flat.',
          plain: 'Whether space is curved depends on how much stuff it contains compared with how fast it expands. The critical density is the dividing line, and measurements show the universe is very close to it, so space is flat on large scales. Astronomers express each ingredient as a fraction of the critical density, called Ω (omega).',
          where: [
            { sym: String.raw`\rho_c`, def: 'critical density, kg/m³' },
            { sym: String.raw`H_0`, def: 'Hubble constant in s⁻¹' },
            { sym: 'G', def: 'gravitational constant' },
          ],
          syntax: [{ sym: String.raw`H_0^2`, say: 'the Hubble constant squared' }],
          worked: {
            title: 'How empty is the universe?',
            steps: [
              String.raw`\(H_0 = 2.27\times10^{-18}\) s⁻¹, so \(H_0^2 = 5.15\times10^{-36}\).`,
              String.raw`\(3H_0^2 = 1.55\times10^{-35}\); \(8\pi G = 8\times3.1416\times6.674\times10^{-11} = 1.68\times10^{-9}\).`,
              String.raw`\(\rho_c = 1.55\times10^{-35}/1.68\times10^{-9} = 9.2\times10^{-27}\) kg/m³.`,
              String.raw`A hydrogen atom has mass \(1.67\times10^{-27}\) kg: \(9.2/1.67 \approx 5.5\) atoms per m³.`,
              String.raw`Normal matter is only 5% of this: about 0.25 atoms per cubic metre on average.`,
            ],
            why: [
              'from the previous example; square it',
              'compute the top and bottom separately',
              'divide',
              'express the density as an equivalent number of hydrogen atoms',
              'Ω for normal matter is about 0.05; the rest is dark matter and dark energy',
            ],
            answer: String.raw`The critical density equals about 5 hydrogen atoms per cubic metre; on average the universe is emptier than the best laboratory vacuum by an enormous factor.`,
          },
        },
      ],
    },
  ],
  sources: ['Hubble, E. (1929). A relation between distance and radial velocity among extra-galactic nebulae. PNAS 15.', 'Penzias, A. A. & Wilson, R. W. (1965). A measurement of excess antenna temperature at 4080 Mc/s. ApJ 142.', 'Planck Collaboration (2020). Planck 2018 results VI. Cosmological parameters. A&A 641.', 'Riess, A. G. et al. (1998); Perlmutter, S. et al. (1999). Discovery of the accelerating universe.'],
  related: ['astrophysics/cosmos/galaxies-and-dark-matter', 'astrophysics/foundations/light-and-spectra'],
}

export default guide
