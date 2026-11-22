import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Topical medicine has one big advantage over a tablet: it can be delivered exactly where it is needed, with very little reaching the rest of the body. That is why a steroid cream, an eye drop or an antifungal lotion can use the same active ingredients as a much higher-risk oral drug, at a fraction of the systemic risk, provided it stays local and is not overused on broken skin or large areas.',
  nutshell: [
    'Topical corticosteroids are graded by strength; using the mildest one that works, and avoiding the face and skin folds with stronger ones, prevents skin thinning.',
    '**Retinoids** (tretinoin) speed up skin cell turnover for acne and sun damage, and sharply increase sun sensitivity, always paired with daily sunscreen.',
    '**Glaucoma drops** lower eye pressure through different mechanisms (prostaglandins, beta blockers); even eye drops can be absorbed enough to affect the heart or lungs in sensitive people.',
    'Topical antifungals and antiparasitics (permethrin) work with very little systemic absorption, which is why they are some of the safest drugs on this whole reference.',
    'Itching from scabies can continue for 1-2 weeks after successful treatment as dead mites clear, that is not treatment failure.',
  ],
  sections: [
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Skin, eyes and ears' }] },
  ],
}

export default guide
