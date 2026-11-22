import katex from 'katex'
import 'katex/dist/katex.min.css'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { splitFormulas } from './texSplit'

// Typeset maths with KaTeX. Kept in its own chunk: pages without formulas never load it.

function render(tex: string, display: boolean) {
  return katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: 'ignore', output: 'htmlAndMathml' })
}

export function InlineTex({ tex }: { tex: string }) {
  const html = useMemo(() => render(tex, false), [tex])
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

// One displayed line that shrinks its type (down to 60%) when it is wider than the
// screen, so long formulas fit without sideways scrolling.
function FitLine({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const fit = () => {
      el.style.fontSize = ''
      const ratio = el.clientWidth / el.scrollWidth
      if (ratio < 1) el.style.fontSize = `${Math.max(0.6, ratio * 0.97)}em`
    }
    fit()
    // KaTeX's fonts can arrive after the first layout and widen the formula, so measure
    // again once they have loaded, and whenever the line or the formula changes size.
    void document.fonts?.ready.then(fit)
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    if (el.firstElementChild) ro.observe(el.firstElementChild)
    return () => ro.disconnect()
  }, [html])
  return <div ref={ref} className="overflow-x-auto [&_.katex-display]:my-0" dangerouslySetInnerHTML={{ __html: html }} />
}

// Captions may use *italic* and **bold**; this chunk cannot import the guide's Rich renderer.
function Emph({ text }: { text: string }) {
  const parts = text.split(/(\*\*.+?\*\*|\*[^*]+?\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') && p.length > 4 ? <b key={i}>{p.slice(2, -2)}</b> : p.startsWith('*') && p.endsWith('*') && p.length > 2 ? <i key={i}>{p.slice(1, -1)}</i> : p,
      )}
    </>
  )
}

export default function TexBlock({ tex, caption, where, color }: { tex: string; caption?: string; where?: { sym: string; def: string }[]; color: string }) {
  const lines = useMemo(() => splitFormulas(tex).map((t) => render(t, true)), [tex])
  return (
    <figure className="max-w-3xl overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <div className="flex flex-col gap-2.5 px-3 py-3 text-base sm:px-4 sm:text-lg" style={{ background: `color-mix(in srgb, ${color} 10%, var(--surface))` }}>
        {lines.map((html, i) => (
          <FitLine key={i} html={html} />
        ))}
      </div>
      {(where?.length || caption) && (
        <figcaption className="flex flex-col gap-1.5 border-t-2 px-4 py-2.5 text-sm" style={{ borderColor: 'var(--line)' }}>
          {where && where.length > 0 && (
            <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-3 gap-y-1">
              {where.map((w) => (
                <div key={w.sym} className="contents">
                  <dt>
                    <InlineTex tex={w.sym} />
                  </dt>
                  <dd style={{ color: 'var(--ink-soft)' }}>{w.def}</dd>
                </div>
              ))}
            </dl>
          )}
          {caption && (
            <p style={{ color: 'var(--ink-soft)' }}>
              <Emph text={caption} />
            </p>
          )}
        </figcaption>
      )}
    </figure>
  )
}
