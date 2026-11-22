import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A telescope’s most important job is not magnifying but collecting light: a bigger mirror catches more photons, revealing fainter objects, and resolves finer detail. Magnification is set by the eyepiece and matters least. This guide explains the three numbers that matter, and how to start observing from a bright city like Singapore.',
  nutshell: [
    '**Light-gathering** grows with the area of the aperture: \\(\\propto D^2\\).',
    '**Resolution** (finest detail) improves with aperture: \\(\\theta \\approx 1.22\\lambda/D\\).',
    '**Magnification** = focal length of telescope ÷ focal length of eyepiece; beyond about 2× the aperture in mm the image just gets blurrier.',
    'From cities, the Moon, planets, double stars and bright clusters are excellent targets; binoculars are a great first instrument.',
  ],
  sections: [
    {
      id: 'aperture',
      title: 'Aperture: light and detail',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{\text{light}_1}{\text{light}_2} = \left(\frac{D_1}{D_2}\right)^2, \qquad \theta \approx 1.22\,\frac{\lambda}{D}\ \text{radians}`,
          caption: 'Light-gathering ratio of two apertures, and the diffraction limit to resolution.',
          plain: 'A mirror is a bucket for light; doubling its width gives four times the collecting area. Separately, light passing through any opening spreads out slightly (diffraction), blurring a point of light into a tiny disc. The bigger the opening compared with the light’s wavelength, the smaller the blur, so larger telescopes see finer detail.',
          where: [
            { sym: 'D', def: 'aperture diameter (mirror or lens)' },
            { sym: String.raw`\theta`, def: 'smallest resolvable angle' },
            { sym: String.raw`\lambda`, def: 'wavelength of light' },
          ],
          syntax: [{ sym: 'radians', say: 'an angle unit; multiply by 206,265 to get arcseconds' }],
          worked: {
            title: 'Your eye, a 100 mm telescope, and JWST',
            steps: [
              String.raw`Eye pupil at night 7 mm; telescope 100 mm: \((100/7)^2 = 204\) times the light.`,
              String.raw`Resolution at \(\lambda = 550\) nm: \(1.22\times5.5\times10^{-7}/0.1 = 6.7\times10^{-6}\) rad.`,
              String.raw`\(6.7\times10^{-6}\times206{,}265 = 1.4\) arcseconds.`,
              String.raw`JWST: \(D = 6.5\) m at 2 µm: \(1.22\times2\times10^{-6}/6.5 = 3.75\times10^{-7}\) rad \(= 0.077\) arcsec.`,
            ],
            why: [
              'ratio of diameters squared; a modest telescope shows stars over 200 times fainter than the eye can',
              'put the wavelength and diameter in metres',
              'convert radians to arcseconds',
              'JWST works in the infrared, so its larger mirror is partly offset by the longer wavelength',
            ],
            answer: String.raw`A 100 mm telescope resolves about 1.4″ (in practice limited to ~1–2″ by the atmosphere’s turbulence, “seeing”); JWST achieves under 0.1″ above the atmosphere.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`\text{magnification} = \frac{f_{\text{telescope}}}{f_{\text{eyepiece}}}`,
          caption: 'Magnification from focal lengths.',
          plain: 'The telescope forms an image; the eyepiece is a magnifying glass for that image. Swapping eyepieces changes magnification. A useful maximum is about twice the aperture in millimetres; beyond that you enlarge blur, not detail.',
          where: [{ sym: 'f', def: 'focal length in mm' }],
          syntax: [{ sym: String.raw`f_{\text{eyepiece}}`, say: 'focal length of the eyepiece (printed on it, e.g. 25 mm)' }],
          worked: {
            title: 'A 100 mm, f = 900 mm telescope',
            steps: [
              String.raw`25 mm eyepiece: \(900/25 = 36\times\).`,
              String.raw`10 mm eyepiece: \(900/10 = 90\times\).`,
              String.raw`Useful maximum: \(2\times100 = 200\times\), i.e. a 4.5 mm eyepiece.`,
            ],
            why: [
              'low power gives a wide field for clusters and the Moon',
              'higher power for planets',
              'the rule of thumb from diffraction; the atmosphere often limits you to less',
            ],
            answer: String.raw`36× to 90× covers most targets; boxes promising “600×” on small telescopes are marketing.`,
          },
        },
      ],
    },
    {
      id: 'singapore',
      title: 'Observing from Singapore',
      blocks: [
        { t: 'checklist', items: [
          'Bright skies (Bortle 8–9): stick to the Moon, planets, bright stars and double stars.',
          'Near the equator, you can see both northern and southern sky objects, including the Southern Cross and Omega Centauri.',
          'The Singapore Science Centre Observatory holds free public stargazing on Friday nights (check current schedule).',
          'Haze and clouds are common; dry months (around February–March) are often clearest.',
          'Apps such as Stellarium (free) show what is up tonight.',
        ] },
      ],
    },
  ],
  sources: ['Rayleigh, Lord (1879). Investigations in optics. Philosophical Magazine 8.', 'NASA JWST User Documentation.'],
  related: ['astrophysics/practice/utility', 'astrophysics/cosmos/exoplanets'],
}

export default guide
