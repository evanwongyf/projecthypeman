import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'These drugs either turn the immune system down, to stop it attacking the body’s own tissue in autoimmune disease, or turn specific cancer cell processes off. Because they interfere with systems the body relies on for infection defence and healthy cell division, this group carries some of the most structured monitoring of any medicines in regular use, screening blood tests, checks for dormant infections, and in some cases, regular eye exams.',
  nutshell: [
    '**Methotrexate** for arthritis is dosed weekly, not daily, mixing this up with the much higher daily doses used in cancer treatment has caused fatal errors.',
    '**Biologics** (adalimumab) block a specific inflammatory protein (TNF) and require screening for latent tuberculosis and hepatitis B before starting, since suppressing that protein can let a dormant infection reactivate.',
    '**Corticosteroids** used long-term for autoimmune disease carry the same adrenal-suppression and infection risks described on the Thyroid and hormones page.',
    '**Hydroxychloroquine** needs regular eye exams during long-term use to catch early retinal changes before vision is affected.',
    '**Tamoxifen** blocks oestrogen in breast tissue while acting like oestrogen elsewhere in the body, unusual vaginal bleeding on it should always be reported promptly.',
  ],
  sections: [
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Immune system and cancer care' }] },
  ],
}

export default guide
