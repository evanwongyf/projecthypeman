import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'You cannot run a tape measure to a star. Astronomers build a “distance ladder”: parallax for nearby stars, then objects of known brightness (standard candles) calibrated by parallax, then the expansion of the universe for the farthest galaxies. Each rung depends on the one below.',
  nutshell: [
    '**Parallax**: as Earth orbits, nearby stars shift against distant ones. Distance in parsecs = 1 ÷ parallax in arcseconds.',
    '**Inverse-square law**: light spreads over a sphere, so brightness falls with the square of distance.',
    '**Standard candles** (Cepheid variables, Type Ia supernovae) have known luminosities, so their apparent brightness gives their distance.',
    'The **magnitude** scale runs backwards and is logarithmic: 5 magnitudes is a factor of 100 in brightness.',
  ],
  sections: [
    {
      id: 'parallax',
      title: 'Parallax',
      blocks: [
        {
          t: 'math',
          tex: String.raw`d\,[\text{pc}] = \frac{1}{p\,[\text{arcsec}]}`,
          caption: 'Distance in parsecs from parallax angle in arcseconds.',
          plain: 'Hold a finger in front of your face and blink each eye in turn: it jumps against the background. The closer the finger, the bigger the jump. Astronomers do the same with Earth’s orbit as the two “eyes”, observing a star six months apart. The parallax angle is half the jump. Because the parsec was defined to make it so, the distance in parsecs is simply one over the angle in arcseconds.',
          where: [
            { sym: 'd', def: 'distance in parsecs' },
            { sym: 'p', def: 'parallax angle in arcseconds (1 arcsecond = 1/3600 of a degree)' },
          ],
          syntax: [{ sym: String.raw`[\text{pc}]`, say: 'square brackets after a symbol give its unit' }],
          worked: {
            title: 'Proxima Centauri',
            steps: [
              String.raw`Measured parallax \(p = 0.768\) arcsec.`,
              String.raw`\(d = 1/0.768 = 1.30\) pc.`,
              String.raw`\(1.30 \times 3.26 = 4.24\) ly.`,
              String.raw`The ESA Gaia mission measures parallaxes to about \(2\times10^{-5}\) arcsec, so for 10% accuracy it reaches \(p \approx 2\times10^{-4}\), \(d \approx 5{,}000\) pc.`,
            ],
            why: [
              'the largest parallax of any star, and still smaller than a coin seen from 3 km',
              'one over the angle',
              'multiply by 3.26 light-years per parsec',
              'a measurement is useful when the angle is about ten times its uncertainty; one over that angle gives the reach',
            ],
            answer: String.raw`Proxima is 1.30 pc (4.24 ly) away. Gaia has measured parallaxes for nearly two billion stars, mapping our galaxy in 3D.`,
          },
        },
      ],
    },
    {
      id: 'inverse-square',
      title: 'Brightness and the inverse-square law',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F = \frac{L}{4\pi d^2}`,
          caption: 'The flux F (power per square metre received) from a source of luminosity L at distance d.',
          plain: 'A star sends its power, L, out equally in all directions. At distance d that power is spread over a sphere of area 4πd². The amount landing on each square metre of your telescope is L divided by that area. Double the distance and the same light covers four times the area, so each square metre gets a quarter.',
          where: [
            { sym: 'F', def: 'flux: watts per square metre arriving' },
            { sym: 'L', def: 'luminosity: total power emitted, in watts' },
            { sym: 'd', def: 'distance, in metres' },
            { sym: String.raw`4\pi d^2`, def: 'the surface area of a sphere of radius d' },
          ],
          syntax: [{ sym: String.raw`d^2`, say: 'd squared, d × d' }, { sym: String.raw`\pi`, say: 'pi, about 3.1416' }],
          worked: {
            title: 'The solar constant, and the Sun seen from Mars',
            steps: [
              String.raw`\(L_\odot = 3.83\times10^{26}\) W; \(d = 1.496\times10^{11}\) m.`,
              String.raw`\(4\pi d^2 = 4\times3.1416\times(1.496\times10^{11})^2 = 12.566\times2.238\times10^{22} = 2.81\times10^{23}\) m².`,
              String.raw`\(F = 3.83\times10^{26}/2.81\times10^{23} = 1.36\times10^{3}\) W/m².`,
              String.raw`Mars is at 1.52 AU: \(F_{\text{Mars}} = 1361/1.52^2 = 1361/2.31 \approx 589\) W/m².`,
            ],
            why: [
              'the Sun’s luminosity (⊙ is the Sun’s symbol) and Earth’s distance',
              'square the distance (square 1.496 and double the exponent), then multiply by 4π',
              'divide power by area',
              'only the ratio of distances matters, so divide by the distance ratio squared',
            ],
            answer: String.raw`About 1,361 W/m² at Earth (the “solar constant”) and only 43% of that at Mars, which matters for solar-powered rovers.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`m - M = 5\log_{10}\!\left(\frac{d}{10\ \text{pc}}\right)`,
          caption: 'The distance modulus links apparent magnitude m, absolute magnitude M and distance d.',
          plain: 'Astronomers measure brightness in magnitudes, an ancient scale where bigger numbers mean fainter and every 5 magnitudes is a factor of 100. Apparent magnitude m is how bright a star looks; absolute magnitude M is how bright it would look from 10 parsecs. Their difference grows with distance. If you know M (a standard candle) and measure m, solve for d.',
          where: [
            { sym: 'm', def: 'apparent magnitude' },
            { sym: 'M', def: 'absolute magnitude (brightness at 10 pc)' },
            { sym: 'd', def: 'distance in parsecs' },
          ],
          syntax: [{ sym: String.raw`\log_{10}`, say: 'the power you raise 10 to in order to get the number: log₁₀ 1000 = 3' }],
          worked: {
            title: 'A Cepheid in another galaxy',
            steps: [
              String.raw`Its pulsation period says \(M = -5.0\); it appears at \(m = 19.5\).`,
              String.raw`\(m - M = 19.5 - (-5.0) = 24.5\).`,
              String.raw`\(\log_{10}(d/10) = 24.5/5 = 4.9\).`,
              String.raw`\(d/10 = 10^{4.9} = 79{,}400\), so \(d = 794{,}000\) pc \(\approx 2.6\) million ly.`,
            ],
            why: [
              'Henrietta Leavitt (1912) found that Cepheids that pulse more slowly are more luminous, so the period gives M',
              'subtracting a negative adds',
              'divide both sides by 5',
              'undo the log by raising 10 to that power, then multiply by 10 pc and convert with 3.26',
            ],
            answer: String.raw`About 0.8 Mpc, roughly the distance of Andromeda. Edwin Hubble used exactly this method in 1924 to prove Andromeda is a separate galaxy.`,
          },
        },
      ],
    },
  ],
  sources: ['Gaia Collaboration (2023). Gaia Data Release 3. Astronomy & Astrophysics 674.', 'Leavitt, H. S. & Pickering, E. C. (1912). Periods of 25 variable stars in the Small Magellanic Cloud. Harvard College Observatory Circular 173.', 'Riess, A. G. et al. (2022). A comprehensive measurement of the local value of the Hubble constant. ApJL 934.'],
  related: ['astrophysics/foundations/light-and-spectra', 'astrophysics/cosmos/cosmology'],
}

export default guide
