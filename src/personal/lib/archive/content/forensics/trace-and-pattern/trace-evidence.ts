import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Trace evidence is the small stuff that moves between people, places and objects: fibres from a jumper, fragments of a broken window, flakes of car paint, a smear of soil. It is Locard’s principle in its purest form. It rarely identifies a single source, but it can link or fail to link, and its value depends heavily on how common the material is and how long it stays put.',
  nutshell: [
    'Trace examination asks two questions: **could these share a source?** (comparison) and **how significant is that?** (rarity, transfer and persistence).',
    '**Fibres**: compared by microscopy, colour (microspectrophotometry) and polymer type (infrared spectroscopy).',
    '**Glass**: compared by **refractive index** and elemental composition; fracture patterns can show which side was struck.',
    '**Paint**: the *sequence* of layers in a chip can be very distinctive, and databases link automotive paint to makes and years.',
    '**Soil**: minerals, organic matter and pollen can tie an item to a type of place, rarely a specific spot.',
  ],
  sections: [
    {
      id: 'materials',
      title: 'Material by material',
      blocks: [
        {
          t: 'table',
          head: ['Material', 'Main lab techniques', 'What can be said'],
          rows: [
            ['Fibres', 'Comparison microscopy, polarised light microscopy, microspectrophotometry, FTIR', 'Fibre type and dye match; common fibres (blue denim cotton) carry little weight, unusual ones more'],
            ['Glass', 'Refractive index by immersion (e.g. GRIM), elemental analysis (LA-ICP-MS, µXRF)', 'Fragments indistinguishable from a broken pane; elemental data greatly improves discrimination'],
            ['Paint', 'Microscopy of layer sequence, FTIR, pyrolysis GC-MS; automotive databases such as PDQ', 'Possible make, model and year range of a vehicle; layer sequence can be close to unique for repainted surfaces'],
            ['Soil', 'Mineralogy, colour, particle size, palynology (pollen and spores)', 'Consistent with a type of environment; strong only with unusual components'],
            ['Hair', 'Microscopy for species and body area; mitochondrial or nuclear DNA if a root is present', 'Microscopic comparison alone cannot individualise, see the hair review in [wrongful convictions](@forensics/reliability/wrongful-convictions)'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Reading a glass fracture', text: 'When glass is struck, radial cracks spread out from the point of impact and concentric cracks form circles around it. Along the edge of a radial crack, curved stress lines meet the side opposite the impact at right angles, remembered as the **3R rule**: Radial cracks, Right angles, Reverse side. That can show whether a window was broken from inside or out.' },
      ],
    },
    {
      id: 'transfer',
      title: 'Transfer and persistence',
      blocks: [
        { t: 'p', text: 'A matching fibre on a suspect means more if it would be surprising to find there innocently. That depends on how readily the material transfers, how quickly it is lost, and how often it is found by chance on people in general (background surveys).' },
        {
          t: 'cycle',
          caption: 'Trace evidence keeps moving after the event, which shortens the window in which it means anything.',
          items: [
            { name: 'Primary transfer', body: 'Direct contact moves fibres or particles from source to recipient.' },
            { name: 'Loss', body: 'Most transferred fibres fall off clothing within hours of normal wear.' },
            { name: 'Secondary transfer', body: 'Shed material lands on a chair, car seat or another person.' },
            { name: 'Redistribution', body: 'Laundering, brushing and movement relocate what remains, and can pick up new traces.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Recovery order matters', text: 'Taping (pressing adhesive tape on a surface) and careful collection at the scene, followed by searching under a microscope, are done before items are shaken, washed or handled further. Packaging the suspect’s and victim’s items separately, by different people, avoids creating the very link being tested.' },
      ],
    },
    {
      id: 'language',
      title: 'What “consistent with” means',
      blocks: [
        {
          t: 'levels',
          caption: 'Typical reporting language, weakest to strongest, with no shared numerical meaning across labs.',
          items: [
            { name: 'Could not be excluded', body: 'No differences found; the comparison has little discriminating power or the material is common.' },
            { name: 'Consistent with', body: 'The items share all measured properties. Says nothing yet about how many other sources would too.' },
            { name: 'Strong support', body: 'Reserved for rare materials or multiple independent types of trace pointing the same way, ideally expressed as a likelihood ratio.' },
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: no trace means no contact', text: 'Finding nothing is weak evidence either way: material may never have transferred, may have been lost, or may have been missed. Equally, finding trace does not show contact happened *at the time of the offence*.' },
        { t: 'p', text: 'Many experts now argue that trace conclusions should be framed as likelihood ratios that weigh the observations under the prosecution’s and defence’s versions of events, rather than as “match” or “consistent” language that juries tend to overread. See [likelihood ratios](@forensics/reliability/evidence-statistics).' },
      ],
    },
  ],
  sources: [
    'Robertson, J., Roux, C., & Wiggins, K. (Eds.) (2017). *Forensic Examination of Fibres* (3rd ed.). CRC Press.',
    'Curran, J. M., Hicks, T. N., & Buckleton, J. S. (2000). *Forensic Interpretation of Glass Evidence*. CRC Press.',
    'Houck, M. M. (Ed.) (2001). *Mute Witnesses: Trace Evidence Analysis*. Academic Press.',
  ],
  related: ['forensics/start-here', 'forensics/crime-scene/scene-and-evidence', 'forensics/reliability/evidence-statistics'],
}

export default guide
