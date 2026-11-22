import type { CardDraft } from '../types'
import type { Guide } from './guide'
import type { Exercise } from '../fitness/moves'
import type { Word } from '../sign/words'

// Guide text uses a little inline markup (see GuideBlocks). Cards are plain text.
export function plainText(text: string) {
  return text
    // A sentence that is only a pointer to another guide means nothing on a card.
    .replace(/\.\s*\[[^\]]+\]\(@[^)]+\)\.?$/, '.')
    .replace(/\\\((.+?)\\\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .trim()
}

// Flashcards a guide can offer: its key terms as definition cards, and any signs and
// exercises it teaches as "how do you…" cards (given the sign and exercise lists, which
// are loaded only for guides that need them).
export function guideToCards(guide: Guide, signs?: Record<string, Word>, exercises?: Record<string, Exercise>): CardDraft[] {
  const cards: CardDraft[] = []
  for (const section of guide.sections) {
    for (const block of section.blocks) {
      if (block.t === 'terms') {
        for (const { term, def } of block.items) cards.push({ type: 'definition', front: plainText(term), back: plainText(def) })
      } else if (block.t === 'signs') {
        for (const id of block.words) {
          const w = signs?.[id]
          if (w) cards.push({ type: 'definition', front: `How do you sign "${w.word}" in ASL?`, back: `${w.shape}. ${w.where}. ${w.move}.${w.hint ? ` (${plainText(w.hint)})` : ''}` })
        }
      } else if (block.t === 'exercises') {
        for (const id of block.ids) {
          const x = exercises?.[id]
          if (x?.steps.length) cards.push({ type: 'definition', front: `How do you do a ${x.name.toLowerCase()}?`, back: `${x.steps.join(' ')}${x.cues.length ? ` Think: ${x.cues.join('; ')}.` : ''}` })
        }
      }
    }
  }
  return cards
}
