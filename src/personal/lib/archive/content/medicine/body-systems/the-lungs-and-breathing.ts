import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Breathing looks like one simple motion, but it is really solving a pressure problem: air always moves from high pressure to low pressure, and the entire breathing cycle is the body deliberately changing the pressure inside the chest to make that happen on demand.',
  nutshell: [
    'The **diaphragm**, not the lungs themselves, does most of the work, the lungs have no muscle of their own and simply expand or recoil as chest pressure changes.',
    'Air moves because of a **pressure difference**: the diaphragm and ribcage change chest volume, which changes pressure, and air flows to equalise it.',
    'Actual gas exchange happens at the **alveoli**, around 480 million tiny air sacs per pair of lungs, giving an enormous surface area (roughly the size of a tennis court) for oxygen and carbon dioxide to diffuse across.',
    '**Breathing rate** is a genuinely useful vital sign, both too fast and too slow, outside the normal resting range, can signal real problems.',
  ],
  sections: [
    {
      id: 'the-mechanics',
      title: 'The mechanics of one breath',
      blocks: [
        { t: 'med-viz', viz: 'lung-airflow' },
        {
          t: 'flow',
          title: 'Why air moves at all',
          nodes: [
            { label: 'Diaphragm contracts, flattens downward', sub: 'ribcage muscles expand the chest outward', tone: 'process' },
            { label: 'Chest cavity volume increases', tone: 'process' },
            { label: 'Air pressure inside the lungs drops below atmospheric pressure', tone: 'process' },
            { label: 'Air flows in to equalise the pressure difference', sub: 'carrying oxygen down to the alveoli', tone: 'output' },
          ],
          loop: 'reverses on the out-breath: diaphragm relaxes, chest volume shrinks, pressure rises, air flows out',
        },
      ],
    },
    {
      id: 'gas-exchange',
      title: 'Gas exchange at the alveoli',
      blocks: [
        { t: 'p', text: 'Each alveolus is wrapped in a dense mesh of tiny capillaries, with a wall just one cell thick separating air from blood, close enough that oxygen and carbon dioxide simply diffuse across, each moving from wherever it is more concentrated to wherever it is less concentrated, with no pump or active transport required for the exchange itself.' },
        {
          t: 'table',
          head: ['Gas', 'Direction of diffusion at the alveoli', 'Why'],
          rows: [
            ['Oxygen (O₂)', 'From air into blood', 'Freshly inhaled air has more oxygen than the oxygen-depleted blood arriving from the body'],
            ['Carbon dioxide (CO₂)', 'From blood into air', 'Blood arriving from the body carries CO₂ picked up from cells’ metabolism, more concentrated than in the fresh air just inhaled'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A tennis court folded into your chest', text: 'The roughly 480 million alveoli in a typical adult’s lungs give a combined surface area commonly estimated between 50 and 75 square metres, often compared to half a tennis court, all folded into a chest cavity you can wrap your arms around. That enormous surface area is precisely what makes fast, efficient gas exchange possible; diseases that destroy alveolar surface area (like emphysema) directly reduce how much oxygen can get into the blood per breath, regardless of how hard or fast someone breathes.' },
      ],
    },
    {
      id: 'breathing-rate',
      title: 'Reading a breathing rate',
      blocks: [
        {
          t: 'metric',
          name: 'respiratory rate',
          shows: 'How many breaths someone takes per minute, one of the four classic vital signs (alongside heart rate, blood pressure and temperature) used to quickly gauge overall physiological status.',
          eli5: 'Count how many times someone’s chest rises in 60 seconds, nothing more complicated than that, though in a clinical setting it’s usually measured without the person knowing, since being watched tends to change how people breathe.',
          higher: 'A breathing rate well above the normal resting range (tachypnea) can signal exertion, anxiety, fever, pain, or a genuine respiratory or metabolic problem, the body trying to take in more oxygen or expel more CO₂ than usual.',
          lower: 'A breathing rate well below normal (bradypnea) can indicate certain drugs (notably opioids, which suppress the brain’s breathing-control centre), some neurological conditions, or simply a very relaxed, well-conditioned resting state in a fit individual.',
          typical: 'A healthy resting adult breathes roughly 12–20 times per minute; infants breathe considerably faster at rest (around 30–60/min), reflecting their much higher metabolic rate relative to body size.',
        },
      ],
    },
  ],
  sources: [
    'Hall, J. E., & Hall, M. E. (2020). *Guyton and Hall Textbook of Medical Physiology* (14th ed.). Elsevier.',
    'West, J. B., & Luks, A. M. (2020). *West’s Respiratory Physiology* (11th ed.). Wolters Kluwer.',
  ],
  related: ['medicine/body-systems/the-heart-and-circulation', 'medicine/body-systems/organ-systems-overview', 'medicine/basics/routes-and-forms'],
}

export default guide
