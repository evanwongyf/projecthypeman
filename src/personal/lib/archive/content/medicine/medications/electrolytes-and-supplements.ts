import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A few everyday nutrients become prescription medicines at a high enough dose or in a specific clinical situation: potassium lost to a diuretic, iron lost to bleeding, vitamin D too low to maintain bone health, folate needed before conception. The idea that “it is just a vitamin, so more must be safer” is one of the more dangerous assumptions in this whole reference, several of these have narrow safety margins once intake moves beyond a normal diet.',
  nutshell: [
    '**Potassium chloride** overdose can stop the heart; extended-release tablets must be swallowed whole, never crushed, to avoid releasing too much at once.',
    '**Iron tablets are a leading cause of fatal poisoning in young children**, even a modest handful of adult-strength tablets can be lethal to a toddler, and they must be stored locked away.',
    '**Folic acid** is specifically recommended before and during early pregnancy to prevent neural tube defects like spina bifida.',
    'High-dose vitamin D courses are time-limited and then stepped down to a maintenance dose, more is not a faster fix once a deficiency is corrected.',
    'These are electrolytes, not harmless extras: correcting a genuine deficiency is valuable, but dosing still matters.',
  ],
  sections: [
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Electrolytes and supplements (prescription strength)' }] },
  ],
}

export default guide
