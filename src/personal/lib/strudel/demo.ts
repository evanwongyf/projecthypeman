import type { Block, GuideSection } from '../archive/guide'

// One effect, explained the same way every time: what it is in plain words and technically,
// what turning it up or down does, typical values, optional maths, a with/without demo (with
// rendered waveforms and spectra), more examples and a tip.
export type EffectSpec = {
  id: string
  title: string
  // How it is written, e.g. '.lpf(frequency)'.
  sig: string
  aliases?: string
  lead: string
  simple: string
  technical: string
  higher: string
  lower: string
  typical: string
  params?: { term: string; def: string }[]
  math?: { tex: string; caption?: string; where?: { sym: string; def: string }[]; plain?: string }
  demo: Block
  more?: Block[]
  tip?: string
  listen?: string
}

export function effect(e: EffectSpec): GuideSection {
  const blocks: Block[] = [
    { t: 'fx-card', sig: e.sig, aliases: e.aliases, simple: e.simple, technical: e.technical, higher: e.higher, lower: e.lower, typical: e.typical },
  ]
  if (e.params) blocks.push({ t: 'terms', items: e.params })
  if (e.math) blocks.push({ t: 'math', tex: e.math.tex, caption: e.math.caption, where: e.math.where, plain: e.math.plain })
  if (e.listen) blocks.push({ t: 'callout', tone: 'note', title: 'What to listen and look for', text: e.listen })
  blocks.push(e.demo)
  if (e.more?.length) blocks.push(...e.more)
  if (e.tip) blocks.push({ t: 'callout', tone: 'tip', title: 'Tip', text: e.tip })
  return { id: e.id, title: e.title, lead: e.lead, blocks }
}

// A with/without demo: `effect` is appended to `code`, so the guide can play the same phrase
// both ways and highlight exactly what was added.
export function ab(title: string, code: string, effect: string, caption?: string): Block {
  return { t: 'strudel', title, code, with: code + effect, caption }
}

// A with/without demo where the "with" version is written out in full.
export function pair(title: string, code: string, withCode: string, caption?: string): Block {
  return { t: 'strudel', title, code, with: withCode, caption }
}

export function play(code: string, title?: string, caption?: string): Block {
  return { t: 'strudel', code, title, caption }
}

// Reusable source phrases, kept short so the difference an effect makes is easy to hear.
export const DRUMS = 's("bd sd [~ bd] sd, hh*8").bank("RolandTR909")'
export const BASS = 'note("c2 c2 eb2 [g1 bb1]").s("sawtooth")'
export const CHORDS = 'chord("<Cm7 Fm7 Ab^7 G7>").voicing().s("sawtooth")'
export const MELODY = 'n("0 2 4 <7 6> 4 2").scale("C4:minor").s("triangle")'
export const PLUCK = 'n("0 4 7 9 7 4").scale("D4:major").s("square").decay(.15).sustain(0)'
