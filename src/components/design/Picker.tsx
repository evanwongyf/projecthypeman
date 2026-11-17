import type { Option } from '../../lib/design'

/** A row of pressable choice cards — the one control the Design tab is built from. */
export function Picker({
  legend,
  hint,
  options,
  value,
  onChange,
  columns = 'auto',
  renderPreview,
}: {
  legend: string
  hint?: string
  options: Option[]
  value: string
  onChange: (id: string) => void
  columns?: 'auto' | 'wide' | 'narrow'
  renderPreview?: (option: Option) => React.ReactNode
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="label mb-0.5">{legend}</legend>
      {hint && (
        <p className="mb-2.5 text-xs" style={{ color: 'var(--ink-faint)' }}>
          {hint}
        </p>
      )}
      <div
        className={
          columns === 'wide'
            ? 'grid gap-2 sm:grid-cols-2 lg:grid-cols-3'
            : columns === 'narrow'
              ? 'grid grid-cols-2 gap-2'
              : 'grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4'
        }
      >
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className="pick"
            aria-pressed={value === o.id}
            onClick={() => onChange(o.id)}
          >
            {renderPreview?.(o)}
            <span className="block text-sm leading-snug font-medium">{o.label}</span>
            {o.hint && (
              <span className="mono mt-0.5 block text-[10px] leading-snug" style={{ color: 'var(--ink-faint)' }}>
                {o.hint}
              </span>
            )}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

/** Page / ink / accent bars for both faces of a theme. */
export function ThemeSwatch({ option }: { option: Option }) {
  if (!option.swatch) return null
  return (
    <span className="mb-2 flex gap-1">
      {(['light', 'dark'] as const).map((face) => (
        <span
          key={face}
          className="flex h-9 flex-1 overflow-hidden"
          style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-sm, 0)' }}
          title={face}
        >
          {option.swatch![face].map((c, i) => (
            <span key={i} className="flex-1" style={{ background: c }} />
          ))}
        </span>
      ))}
    </span>
  )
}

export function AccentSwatch({ option }: { option: Option }) {
  return (
    <span
      className="mb-2 block h-6 w-full"
      style={{
        background: option.color ?? 'var(--accent)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-sm, 0)',
      }}
    />
  )
}
