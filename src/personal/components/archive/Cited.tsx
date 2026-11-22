import { FIELD_META, parseCite } from '../../lib/archive/cite'
import type { FieldKey } from '../../lib/archive/cite'

// Renders citation markup either as a skeleton (placeholders you fill in) or as a worked
// example. Every piece is colour coded; passing `focus` dims everything except that piece.
export function Cited({
  src,
  mode = 'example',
  focus = null,
  className = '',
}: {
  src: string
  mode?: 'skeleton' | 'example'
  focus?: FieldKey | null
  className?: string
}) {
  const tokens = parseCite(src)
  return (
    <span className={`leading-relaxed break-words ${className}`}>
      {tokens.map((t, i) => {
        if (t.kind === 'text') {
          return (
            <span key={i} className={t.italic ? 'italic' : ''} style={{ opacity: focus ? 0.35 : 1 }}>
              {t.text}
            </span>
          )
        }
        const meta = FIELD_META[t.key]
        const dim = focus !== null && focus !== t.key
        const skeleton = mode === 'skeleton'
        return (
          <span
            key={i}
            title={meta.label}
            className={`rounded px-1 py-0.5 ${t.italic ? 'italic' : ''} ${skeleton ? 'font-bold' : ''}`}
            style={{
              color: 'var(--ink)',
              background: `color-mix(in srgb, ${meta.color} ${skeleton ? 20 : 16}%, transparent)`,
              boxShadow: `inset 0 -2px 0 ${meta.color}`,
              opacity: dim ? 0.3 : 1,
              transition: 'opacity 0.15s',
            }}
          >
            {skeleton ? t.placeholder : t.example}
          </span>
        )
      })}
    </span>
  )
}

// The legend: one chip per field kind that appears in the given strings.
export function FieldLegend({
  fields,
  focus,
  onFocus,
}: {
  fields: FieldKey[]
  focus: FieldKey | null
  onFocus: (k: FieldKey | null) => void
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Pieces of a reference. Tap one to highlight it.">
      {fields.map((k) => {
        const meta = FIELD_META[k]
        const active = focus === k
        return (
          <button
            key={k}
            type="button"
            aria-pressed={active}
            onClick={() => onFocus(active ? null : k)}
            className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold pointer-coarse:min-h-10"
            style={{
              borderColor: 'var(--line)',
              background: active ? meta.color : 'var(--surface)',
              color: active ? '#fff' : 'var(--ink)',
            }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: active ? '#fff' : meta.color }} />
            {meta.label}
          </button>
        )
      })}
    </div>
  )
}
