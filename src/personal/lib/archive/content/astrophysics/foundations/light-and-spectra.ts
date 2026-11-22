import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Light is almost all we receive from space, and it carries a remarkable amount of information. Its colour reveals temperature, its brightness reveals size, dark and bright lines in its spectrum reveal which elements are present, and shifts in those lines reveal motion towards or away from us.',
  nutshell: [
    '**Wave equation**: \\(c = \\lambda f\\): shorter wavelength means higher frequency and more energy per photon.',
    '**Wien’s law**: hotter objects glow bluer; the peak wavelength is \\(2.898\\times10^{-3}/T\\) metres.',
    '**Stefan–Boltzmann**: luminosity grows with radius squared and temperature to the fourth power.',
    '**Doppler shift**: lines shift red when a source recedes and blue when it approaches.',
  ],
  sections: [
    {
      id: 'waves',
      title: 'Wavelength, frequency and photon energy',
      blocks: [
        {
          t: 'math',
          tex: String.raw`c = \lambda f, \qquad E = h f = \frac{h c}{\lambda}`,
          caption: 'Light’s speed, wavelength and frequency, and the energy of one photon.',
          plain: 'Light is a wave moving at a fixed speed. If the crests are close together (short wavelength), more of them pass each second (high frequency). Light also comes in packets, photons, whose energy is proportional to frequency: blue and ultraviolet photons carry more energy than red or radio ones, which is why UV causes sunburn and radio does not.',
          where: [
            { sym: 'c', def: 'speed of light, 3.00 × 10⁸ m/s' },
            { sym: String.raw`\lambda`, def: 'lambda, wavelength in metres' },
            { sym: 'f', def: 'frequency in hertz (waves per second)' },
            { sym: 'E', def: 'photon energy in joules' },
            { sym: 'h', def: 'Planck’s constant, 6.63 × 10⁻³⁴ J·s' },
          ],
          syntax: [{ sym: String.raw`\lambda f`, say: 'lambda times f' }, { sym: 'nm', say: 'nanometre, 10⁻⁹ m' }],
          worked: {
            title: 'Green light at 500 nm',
            steps: [
              String.raw`\(\lambda = 500\ \text{nm} = 5.00\times10^{-7}\) m.`,
              String.raw`\(f = c/\lambda = 3.00\times10^{8}/5.00\times10^{-7} = 6.00\times10^{14}\) Hz.`,
              String.raw`\(E = hf = 6.63\times10^{-34}\times6.00\times10^{14} = 3.98\times10^{-19}\) J.`,
              String.raw`In electronvolts: \(3.98\times10^{-19}/1.60\times10^{-19} = 2.5\) eV.`,
            ],
            why: [
              'convert nanometres to metres so units match c',
              'rearrange c = λf to get f; subtracting a negative exponent adds (8 − (−7) = 15, then adjust 0.6 × 10¹⁵)',
              'multiply by Planck’s constant; exponents add (−34 + 14 = −20, then 39.8 × 10⁻²⁰ = 3.98 × 10⁻¹⁹)',
              'one electronvolt is 1.60 × 10⁻¹⁹ J, a handier unit for single photons',
            ],
            answer: String.raw`600 trillion waves per second, each photon carrying 2.5 eV, about the energy needed to trigger a molecule in your retina.`,
          },
        },
      ],
    },
    {
      id: 'blackbody',
      title: 'Temperature from colour: Wien and Stefan–Boltzmann',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\lambda_{\max} = \frac{b}{T}, \qquad b = 2.898\times10^{-3}\ \text{m·K}`,
          caption: 'Wien’s displacement law: the wavelength at which a hot body glows brightest.',
          plain: 'Any hot object glows, and the hotter it is the bluer the peak of its glow. A stove ring glows red; a welding arc glows blue-white. Wien’s law makes this exact: the peak wavelength is a constant divided by the temperature in kelvin. So measuring a star’s colour gives its surface temperature.',
          where: [
            { sym: String.raw`\lambda_{\max}`, def: 'wavelength of peak emission, in metres' },
            { sym: 'T', def: 'temperature in kelvin (°C + 273)' },
            { sym: 'b', def: 'Wien’s constant' },
          ],
          syntax: [{ sym: 'K', say: 'kelvin: degrees above absolute zero' }, { sym: 'm·K', say: 'metre-kelvins; the dot means multiply units' }],
          worked: {
            title: 'The Sun, Betelgeuse and you',
            steps: [
              String.raw`Sun: \(T = 5{,}772\) K. \(\lambda_{\max} = 2.898\times10^{-3}/5772 = 5.02\times10^{-7}\) m = 502 nm (green-blue).`,
              String.raw`Betelgeuse: \(T \approx 3{,}600\) K. \(\lambda_{\max} = 2.898\times10^{-3}/3600 = 805\) nm (near infrared, so it looks red).`,
              String.raw`A human: \(T = 310\) K. \(\lambda_{\max} = 2.898\times10^{-3}/310 = 9.3\times10^{-6}\) m = 9.3 µm.`,
            ],
            why: [
              'divide Wien’s constant by the temperature; the Sun peaks in green but mixes all colours, so it looks white',
              'cooler star, longer peak wavelength',
              '37 °C is 310 K; the peak is in the infrared, which is what thermal cameras detect',
            ],
            answer: String.raw`Peak wavelengths of about 500 nm, 800 nm and 9 µm: colour is a thermometer.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`L = 4\pi R^2\,\sigma T^4`,
          caption: 'The Stefan–Boltzmann law for a star of radius R and surface temperature T.',
          plain: 'Every square metre of a star’s surface radiates σT⁴ watts, so doubling the temperature multiplies the output per square metre by 16. Multiply by the star’s surface area, 4πR², for its total luminosity. This explains the giant stars that are cool but enormously bright: their surface area is vast.',
          where: [
            { sym: 'L', def: 'luminosity in watts' },
            { sym: 'R', def: 'radius in metres' },
            { sym: String.raw`\sigma`, def: 'sigma, the Stefan–Boltzmann constant, 5.67 × 10⁻⁸ W m⁻² K⁻⁴' },
            { sym: 'T', def: 'surface temperature in kelvin' },
          ],
          syntax: [{ sym: String.raw`T^4`, say: 'T to the fourth power: T × T × T × T' }, { sym: String.raw`\sigma`, say: 'the Greek letter sigma' }],
          worked: {
            title: 'How big is Betelgeuse?',
            steps: [
              String.raw`Write ratios to the Sun: \(\dfrac{L}{L_\odot} = \left(\dfrac{R}{R_\odot}\right)^2\left(\dfrac{T}{T_\odot}\right)^4\).`,
              String.raw`Betelgeuse: \(L \approx 100{,}000\,L_\odot\), \(T = 3600\) K, so \(T/T_\odot = 3600/5772 = 0.624\).`,
              String.raw`\(0.624^4 = 0.152\).`,
              String.raw`\((R/R_\odot)^2 = 100{,}000/0.152 = 658{,}000\), so \(R/R_\odot = \sqrt{658{,}000} \approx 810\).`,
              String.raw`\(810\times696{,}000\ \text{km} \approx 5.6\times10^{8}\) km \(\approx 3.8\) AU.`,
            ],
            why: [
              'dividing the formula for the star by the same formula for the Sun cancels 4π and σ',
              'use measured luminosity and temperature',
              'square twice: 0.624² = 0.389, 0.389² = 0.152',
              'rearrange for the radius ratio and take the square root',
              'the Sun’s radius is 696,000 km; 1 AU is 1.5 × 10⁸ km',
            ],
            answer: String.raw`Roughly 800 times the Sun’s radius: placed where the Sun is, Betelgeuse would swallow Mars’s orbit and reach towards Jupiter.`,
          },
        },
      ],
    },
    {
      id: 'doppler',
      title: 'Spectral lines and the Doppler shift',
      blocks: [
        {
          t: 'math',
          tex: String.raw`z = \frac{\lambda_{\text{obs}} - \lambda_{\text{rest}}}{\lambda_{\text{rest}}} \approx \frac{v}{c} \quad (v \ll c)`,
          caption: 'Redshift z and radial velocity v from the shift of a spectral line.',
          plain: 'Each element absorbs and emits light at its own set of wavelengths, like a barcode. If the source moves away from us, the whole barcode is stretched to longer (redder) wavelengths; if it approaches, it is squeezed bluer. The fractional shift, z, equals speed divided by the speed of light for everyday astronomical speeds.',
          where: [
            { sym: 'z', def: 'redshift (negative z is a blueshift)' },
            { sym: String.raw`\lambda_{\text{obs}}`, def: 'the wavelength we observe' },
            { sym: String.raw`\lambda_{\text{rest}}`, def: 'the wavelength measured in a lab' },
            { sym: 'v', def: 'speed along the line of sight' },
          ],
          syntax: [{ sym: String.raw`v \ll c`, say: '“v much less than c”: the approximation holds only for speeds well below light speed' }],
          worked: {
            title: 'A galaxy’s hydrogen-alpha line',
            steps: [
              String.raw`Lab wavelength of H-alpha: 656.3 nm. Observed: 669.4 nm.`,
              String.raw`\(z = (669.4 - 656.3)/656.3 = 13.1/656.3 = 0.0200\).`,
              String.raw`\(v = zc = 0.0200\times300{,}000 = 6{,}000\) km/s, away from us.`,
            ],
            why: [
              'hydrogen’s red line, the brightest line in many nebulae and galaxies',
              'subtract, then divide by the rest wavelength',
              'multiply by c in km/s; positive z means receding',
            ],
            answer: String.raw`The galaxy recedes at 6,000 km/s. In the cosmology guide this speed becomes a distance through Hubble’s law: about 85 Mpc.`,
          },
        },
      ],
    },
  ],
  sources: ['Carroll & Ostlie (2017), chapters 3 and 5.', 'Prša, A. et al. (2016). Nominal values for selected solar and planetary quantities: IAU 2015 Resolution B3. AJ 152.'],
  related: ['astrophysics/stars/how-stars-shine', 'astrophysics/cosmos/cosmology'],
}

export default guide
