import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'This group shares one theme: replacing or adjusting a hormone system rather than attacking a disease directly. Thyroid hormone, cortisol-like steroids, sex hormones in contraceptives, and the bone-remodelling signals bisphosphonates interrupt are all part of the body’s own long-running chemical messaging, which is why getting the dose and timing right matters more here than with most other drug classes.',
  nutshell: [
    '**Levothyroxine** replaces thyroid hormone exactly; too little leaves symptoms, too much causes its own problems (palpitations, bone loss), it needs regular blood testing to dial in.',
    '**Corticosteroids** (prednisone, hydrocortisone) broadly damp down inflammation and the immune system; long courses should never be stopped abruptly.',
    '**Combined contraceptives** suppress ovulation with oestrogen and progestin together; a small clot risk rises further with smoking after 35 or migraine with aura.',
    '**Bisphosphonates** (alendronate) slow bone breakdown and must be taken with a full glass of water, staying upright for 30 minutes, to avoid oesophageal irritation.',
    'Several drugs on this page (thyroid, contraceptives) interact with calcium, iron and certain antibiotics simply through gut absorption, timing doses apart often fixes it.',
  ],
  sections: [
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Thyroid and hormones' }] },
  ],
}

export default guide
