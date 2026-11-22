import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Guide } from '../../lib/archive/guide'
import { guideToCards } from '../../lib/archive/toCards'
import type { Word } from '../../lib/sign/words'
import type { Exercise } from '../../lib/fitness/moves'

// Turns a guide's key terms, signs and exercises into flashcards. Hypeman has no decks of its
// own, so the cards are exported: a tab-separated file that Anki (and most flashcard apps)
// import directly, a CSV, or plain text on the clipboard.
export function MakeCards({ guide, title, color }: { guide: Guide; title: string; color: string }) {
  const has = (t: string) => guide.sections.some((s) => s.blocks.some((b) => b.t === t))
  const hasSigns = has('signs')
  const hasExercises = has('exercises')
  const [signs, setSigns] = useState<Record<string, Word>>()
  const [exercises, setExercises] = useState<Record<string, Exercise>>()
  useEffect(() => {
    if (hasSigns) import('../../lib/sign/words').then((m) => setSigns(m.WORDS), () => {})
    if (hasExercises) import('../../lib/fitness/moves').then((m) => setExercises(m.EXERCISES), () => {})
  }, [hasSigns, hasExercises])
  const cards = useMemo(() => guideToCards(guide, signs, exercises), [guide, signs, exercises])
  const [copied, setCopied] = useState(false)

  if (!cards.length) return null
  const terms = cards.filter((c) => c.type === 'definition').length
  const questions = cards.length - terms
  const fileName = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'cards'

  function download(kind: 'tsv' | 'csv') {
    const clean = (s: string) => s.replace(/[\t\r\n]+/g, ' ').trim()
    const body =
      kind === 'tsv'
        ? cards.map((c) => `${clean(c.front)}\t${clean(c.back)}`).join('\n')
        : ['front,back', ...cards.map((c) => [c.front, c.back].map((v) => `"${clean(v).replace(/"/g, '""')}"`).join(','))].join('\n')
    const blob = new Blob([body], { type: kind === 'tsv' ? 'text/tab-separated-values' : 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${fileName}.${kind === 'tsv' ? 'txt' : 'csv'}`
    a.click()
    URL.revokeObjectURL(url)
  }

  async function copy() {
    const text = cards.map((c) => `${c.front}\n${c.back}`).join('\n\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked: the downloads still work */
    }
  }

  return (
    <div className="rounded-[var(--radius)] border p-4 sm:p-5" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-bold">Study this guide with flashcards</p>
          <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
            {cards.length} card{cards.length === 1 ? '' : 's'}
            {terms > 0 && ` · ${terms} key term${terms === 1 ? '' : 's'}`}
            {questions > 0 && ` · ${questions} question${questions === 1 ? '' : 's'}`}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => download('tsv')} className="btn btn-primary">
            Download for Anki
          </button>
          <button type="button" onClick={() => download('csv')} className="btn">
            CSV
          </button>
          <button type="button" onClick={copy} className="btn">
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
        The Anki file imports as front and back fields. Review a few every day; see{' '}
        <Link to="/personal/archive/memory/spaced-repetition" className="font-bold underline">
          spaced repetition
        </Link>
        .
      </p>

      <details className="mt-3">
        <summary className="cursor-pointer text-xs font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
          Preview the cards
        </summary>
        <ul className="mt-2 flex flex-col gap-1.5 text-sm">
          {cards.map((c, i) => (
            <li key={i} className="rounded-[var(--radius)] border px-3 py-2" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${color} 8%, var(--surface))` }}>
              <span className="mr-2 font-mono text-[10px] font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
                {c.type === 'definition' ? 'term' : 'quiz'}
              </span>
              <b>{c.front}</b>
              {c.type === 'definition' && (
                <span className="mt-0.5 block" style={{ color: 'var(--ink-soft)' }}>
                  {c.back}
                </span>
              )}
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}
