import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Astrophysics is physics applied to the sky: the same laws of gravity, light and atoms that work in a school lab explain stars, black holes and the history of the universe. The first hurdle is size. The numbers are so large that astronomers write them in scientific notation and invent new units. Once those feel natural, the rest of the subject opens up.',
  nutshell: [
    '**Scientific notation**: \\(1.5 \\times 10^{11}\\) means 1.5 followed by moving the decimal point 11 places right.',
    '**Astronomical unit (AU)**: the Earth–Sun distance, about 150 million km. **Light-year (ly)**: the distance light travels in a year, about 9.46 trillion km. **Parsec (pc)**: 3.26 light-years.',
    'Looking far away means looking back in time: we see the Sun as it was 8 minutes ago and the Andromeda galaxy as it was 2.5 million years ago.',
    'Almost everything we know about the universe comes from light (and now gravitational waves and neutrinos).',
  ],
  sections: [
    {
      id: 'notation',
      title: 'Scientific notation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`(a \times 10^{m})(b \times 10^{n}) = (a\,b) \times 10^{m+n}, \qquad \frac{a \times 10^{m}}{b \times 10^{n}} = \frac{a}{b} \times 10^{m-n}`,
          caption: 'Multiplying and dividing numbers in scientific notation.',
          plain: 'A number like 6 × 10²⁴ is a short way of writing 6 with 24 zeros after it. To multiply two such numbers, multiply the front parts and add the powers of ten. To divide, divide the front parts and subtract the powers. If the front part ends up 10 or more (or below 1), shift it back into range and adjust the power.',
          where: [
            { sym: 'a, b', def: 'the front numbers (coefficients), usually between 1 and 10' },
            { sym: 'm, n', def: 'the powers of ten (exponents)' },
          ],
          syntax: [
            { sym: String.raw`10^{m}`, say: 'ten to the power m: 1 followed by m zeros (or, for negative m, a decimal with the 1 in the m-th place)' },
            { sym: String.raw`\times`, say: 'times' },
          ],
          worked: {
            title: 'How long does sunlight take to reach Earth?',
            steps: [
              String.raw`Distance \(d = 1.5\times10^{11}\) m; speed of light \(c = 3.0\times10^{8}\) m/s.`,
              String.raw`Time \(t = d/c = \dfrac{1.5\times10^{11}}{3.0\times10^{8}}\).`,
              String.raw`Front parts: \(1.5/3.0 = 0.5\). Powers: \(10^{11-8} = 10^{3}\).`,
              String.raw`\(t = 0.5\times10^{3} = 5.0\times10^{2} = 500\) s.`,
              String.raw`\(500/60 \approx 8.3\) minutes.`,
            ],
            why: [
              'write the given values in scientific notation with SI units (metres and seconds)',
              'time equals distance divided by speed',
              'divide the coefficients and subtract the exponents',
              'move the decimal one place right and take one off the exponent to bring 0.5 into the range 1–10',
              'there are 60 seconds in a minute',
            ],
            answer: String.raw`About 8 minutes 20 seconds: if the Sun vanished, we would not know for 8 minutes.`,
          },
        },
      ],
    },
    {
      id: 'units',
      title: 'Astronomical units, light-years and parsecs',
      blocks: [
        {
          t: 'math',
          tex: String.raw`1\ \text{ly} = c \times 1\ \text{year} \approx 9.46 \times 10^{15}\ \text{m}, \qquad 1\ \text{pc} \approx 3.26\ \text{ly} \approx 206{,}265\ \text{AU}`,
          caption: 'The light-year and the parsec.',
          plain: 'A light-year is a distance, not a time: how far light goes in one year. Multiply the speed of light by the number of seconds in a year. The parsec comes from parallax (see the distance guide): it is the distance at which the Earth’s orbit would appear to shift a star by one arcsecond.',
          where: [
            { sym: 'c', def: 'speed of light, 3.00 × 10⁸ m/s' },
            { sym: 'ly', def: 'light-year' },
            { sym: 'pc', def: 'parsec' },
            { sym: 'AU', def: 'astronomical unit, 1.496 × 10¹¹ m' },
          ],
          syntax: [{ sym: String.raw`\approx`, say: 'approximately equal to' }, { sym: '206{,}265', say: 'the braces only control spacing: it is 206,265' }],
          worked: {
            title: 'Light-years in metres, and the nearest star',
            steps: [
              String.raw`Seconds in a year: \(365.25\times24\times3600 = 3.156\times10^{7}\) s.`,
              String.raw`\(1\ \text{ly} = 3.00\times10^{8}\times3.156\times10^{7} = 9.47\times10^{15}\) m.`,
              String.raw`Proxima Centauri is 4.24 ly: \(4.24\times9.47\times10^{15} = 4.0\times10^{16}\) m.`,
              String.raw`Voyager 1 travels at about \(1.7\times10^{4}\) m/s: \(4.0\times10^{16}/1.7\times10^{4} = 2.4\times10^{12}\) s.`,
              String.raw`\(2.4\times10^{12}/3.156\times10^{7} \approx 75{,}000\) years.`,
            ],
            why: [
              'days per year × hours per day × seconds per hour',
              'speed × time = distance; multiply coefficients (3.00 × 3.156 = 9.47) and add exponents (8 + 7)',
              'scale by the number of light-years',
              'time = distance ÷ speed; subtract exponents (16 − 4)',
              'convert seconds back to years',
            ],
            answer: String.raw`At Voyager’s speed, reaching the nearest star would take about 75,000 years. Interstellar distances dwarf anything humans have travelled.`,
          },
        },
        { t: 'table', head: ['Object', 'Distance', 'Light travel time'], rows: [
          ['Moon', '384,400 km', '1.3 seconds'],
          ['Sun', '1 AU (150 million km)', '8.3 minutes'],
          ['Neptune', '30 AU', '4 hours'],
          ['Proxima Centauri (nearest star)', '4.24 ly (1.30 pc)', '4.24 years'],
          ['Centre of the Milky Way', '26,000 ly', '26,000 years'],
          ['Andromeda galaxy', '2.5 million ly', '2.5 million years'],
          ['Edge of the observable universe', 'about 46 billion ly (today’s distance)', 'light emitted 13.8 billion years ago'],
        ] },
      ],
    },
  ],
  sources: ['IAU (2012). Resolution B2 on the re-definition of the astronomical unit.', 'Carroll, B. W. & Ostlie, D. A. (2017). An Introduction to Modern Astrophysics (2nd ed.). Cambridge University Press.'],
  related: ['astrophysics/foundations/distance-and-parallax', 'astrophysics/foundations/light-and-spectra'],
}

export default guide
