import { useState } from 'react'
import { Select } from '../Select'
import { THEORY, type TheoryArticle } from '../../data/theory'
import { TheoryVisual } from './TheoryVisuals'

/** Article list → full article view (not a modal: articles carry charts and calculators). */
export function TheoryTab() {
  const [topic, setTopic] = useState('')
  const [openId, setOpenId] = useState<string | null>(null)
  const topics = [...new Set(THEORY.map((a) => a.topic))]
  const list = THEORY.filter((a) => !topic || a.topic === topic)
  const open = THEORY.find((a) => a.id === openId)

  if (open) {
    const i = THEORY.indexOf(open)
    return (
      <Article
        article={open}
        onBack={() => setOpenId(null)}
        prev={THEORY[i - 1]}
        next={THEORY[i + 1]}
        onGo={(id) => {
          setOpenId(id)
          window.scrollTo({ top: 0 })
        }}
      />
    )
  }

  return (
    <>
      <div className="mb-5 flex flex-wrap items-end gap-4">
        <div className="w-full max-w-xs">
          <span className="label block">topic</span>
          <Select
            className="mt-1.5"
            ariaLabel="Topic"
            value={topic}
            onChange={setTopic}
            options={[{ value: '', label: 'All topics' }, ...topics.map((t) => ({ value: t, label: t }))]}
          />
        </div>
        <p className="label pb-2.5">{list.length} articles</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((a) => (
          <button key={a.id} type="button" className="pick" onClick={() => setOpenId(a.id)}>
            <span className="label block">
              {a.topic}
              {a.visual ? ' · interactive' : ''}
            </span>
            <span className="mt-1.5 block text-base leading-snug font-semibold">{a.title}</span>
            <span className="mt-1.5 block text-sm" style={{ color: 'var(--ink-soft)' }}>
              {a.summary}
            </span>
            <span className="mono mt-3 block text-[10px]" style={{ color: 'var(--ink-faint)' }}>
              {a.sections.length} sections · {a.terms.length} terms · {a.references.length} references
            </span>
          </button>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-xs" style={{ color: 'var(--ink-faint)' }}>
        Plain-language summaries of mainstream coaching and sports-science consensus, with the studies they lean on. A
        starting point, not medical advice.
      </p>
    </>
  )
}

function Article({
  article: a,
  onBack,
  prev,
  next,
  onGo,
}: {
  article: TheoryArticle
  onBack: () => void
  prev?: TheoryArticle
  next?: TheoryArticle
  onGo: (id: string) => void
}) {
  return (
    <article className="max-w-3xl">
      <button type="button" className="label mb-4 hover:text-[var(--ink)]" onClick={onBack}>
        ← all articles
      </button>
      <p className="label">{a.topic}</p>
      <h2 className="mt-1.5 text-2xl font-semibold tracking-tight">{a.title}</h2>
      <p className="mt-2 text-base" style={{ color: 'var(--ink-soft)' }}>
        {a.summary}
      </p>

      <div className="mt-8 space-y-7">
        {a.sections.map((s) => (
          <section key={s.heading}>
            <h3 className="text-lg font-semibold tracking-tight">{s.heading}</h3>
            <div className="mt-2 space-y-3 text-sm leading-relaxed">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {a.maths && a.maths.length > 0 && (
        <section className="mt-8">
          <h3 className="text-lg font-semibold tracking-tight">The maths</h3>
          <div className="mt-3 space-y-3">
            {a.maths.map((m) => (
              <div key={m.title} className="panel p-4">
                <p className="label">{m.title}</p>
                {m.lines.map((l) => (
                  <p key={l} className="mono mt-2 overflow-x-auto text-sm whitespace-nowrap">
                    {l}
                  </p>
                ))}
                {m.note && (
                  <p className="mt-2 text-xs" style={{ color: 'var(--ink-soft)' }}>
                    {m.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {a.visual && (
        <section className="mt-8">
          <TheoryVisual id={a.visual} />
        </section>
      )}

      <section className="mt-8">
        <h3 className="text-lg font-semibold tracking-tight">Terms in this article</h3>
        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          {a.terms.map((t) => (
            <div key={t.term} className="panel p-3">
              <dt className="text-sm font-semibold">{t.term}</dt>
              <dd className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
                {t.def}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-2">
        <div className="panel p-4">
          <p className="label">key points</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {a.keyPoints.map((k) => (
              <li key={k} className="flex gap-2">
                <span style={{ color: 'var(--accent)' }}>—</span>
                {k}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-4" style={{ background: 'var(--accent-dim)', borderColor: 'var(--accent)' }}>
          <p className="label">try this</p>
          <p className="mt-2 text-sm">{a.tryThis}</p>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="label">references</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs" style={{ color: 'var(--ink-soft)' }}>
          {a.references.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ol>
      </section>

      <nav className="mt-10 flex flex-wrap justify-between gap-3 border-t pt-5 hairline">
        {prev ? (
          <button type="button" className="btn" onClick={() => onGo(prev.id)}>
            ← {prev.title}
          </button>
        ) : (
          <span />
        )}
        {next && (
          <button type="button" className="btn" onClick={() => onGo(next.id)}>
            {next.title} →
          </button>
        )}
      </nav>
    </article>
  )
}
