/**
 * The English verb group, assembled from its choices.
 *
 * The order is fixed: modal, perfect *have*, progressive *be*, passive *be*,
 * lexical verb. Every element is optional, but those that appear must appear
 * in that sequence.
 *
 * The mechanism is that each element dictates the **form of the next one**,
 * and only the first element is finite, which is why only the first one can
 * show tense. Rather than special-casing each combination, the builder carries
 * one piece of state, `next`, saying what form the following word must take.
 * Every rule in the system then falls out of five small tables.
 *
 * Kept out of the component so it can be checked on its own.
 */
import type { TAM_VERBS } from './data'

export type Verb = (typeof TAM_VERBS)[number]
export type Aspect = 'simple' | 'progressive' | 'perfect' | 'perfect-progressive'
export type Person = 'she' | 'they'

/** The form the next word in the group has to take. */
type Form = 'finite' | 'bare' | 'participle' | 'ing'

export type VerbGroup = { words: string[]; parts: { word: string; role: string }[] }

const haveForm = (form: Form, tense: 'past' | 'present', third: boolean) => {
  if (form === 'bare') return 'have'
  if (form === 'participle') return 'had'
  if (form === 'ing') return 'having'
  return tense === 'past' ? 'had' : third ? 'has' : 'have'
}

const beForm = (form: Form, tense: 'past' | 'present', third: boolean) => {
  if (form === 'bare') return 'be'
  if (form === 'participle') return 'been'
  if (form === 'ing') return 'being'
  return tense === 'past' ? (third ? 'was' : 'were') : third ? 'is' : 'are'
}

const mainForm = (form: Form, verb: Verb, tense: 'past' | 'present', third: boolean) => {
  if (form === 'bare') return verb.base
  if (form === 'participle') return verb.participle
  if (form === 'ing') return verb.ing
  return tense === 'past' ? verb.past : third ? verb.third : verb.base
}

export function buildVerbGroup(opts: {
  verb: Verb
  tense: 'past' | 'present'
  aspect: Aspect
  modal: string
  voice: 'active' | 'passive'
  person: Person
}): VerbGroup {
  const { verb, tense, aspect, modal, voice, person } = opts
  const third = person === 'she'
  const perfect = aspect === 'perfect' || aspect === 'perfect-progressive'
  const progressive = aspect === 'progressive' || aspect === 'perfect-progressive'
  const parts: { word: string; role: string }[] = []

  // Nothing has been placed yet, so the first element is the finite one.
  let next: Form = 'finite'

  if (modal !== 'none') {
    // Modals do not inflect for person, and they take a bare infinitive after
    // them. A past modal is a different word, not a past form.
    parts.push({ word: modal, role: 'modal, finite: takes a bare infinitive after it' })
    next = 'bare'
  }
  if (perfect) {
    parts.push({
      word: haveForm(next, tense, third),
      role: next === 'finite' ? 'perfect have, finite: takes a past participle after it' : 'perfect have: takes a past participle after it',
    })
    next = 'participle'
  }
  if (progressive) {
    parts.push({
      word: beForm(next, tense, third),
      role: next === 'finite' ? 'progressive be, finite: takes an -ing form after it' : 'progressive be: takes an -ing form after it',
    })
    next = 'ing'
  }
  if (voice === 'passive') {
    parts.push({
      word: beForm(next, tense, third),
      role: next === 'finite' ? 'passive be, finite: takes a past participle after it' : 'passive be: takes a past participle after it',
    })
    next = 'participle'
  }

  const ROLE: Record<Form, string> = {
    finite: tense === 'past' ? 'the verb itself, past tense' : 'the verb itself, present tense',
    bare: 'bare infinitive, required by the modal',
    participle: 'past participle, required by the word before it',
    ing: '-ing form, required by progressive be',
  }
  parts.push({ word: mainForm(next, verb, tense, third), role: ROLE[next] })

  return { words: parts.map((p) => p.word), parts }
}
