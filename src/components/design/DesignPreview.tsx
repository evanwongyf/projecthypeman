/**
 * A miniature of the real UI, a header, two status chips and a button, so a
 * change is judged on the thing it affects rather than on a swatch.
 */
export function DesignPreview() {
  return (
    <div className="panel p-5">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <p className="label">p5 resilience · mathematics</p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">Fractions worksheet 7</h3>
        </div>
        <span className="mono text-xs" style={{ color: 'var(--ink-soft)' }}>
          2/4
        </span>
      </div>

      <div className="mt-4 space-y-2 border-t pt-4 hairline">
        {[
          { name: 'Nurul Aisyah', chip: 'chip chip-overdue', label: 'Overdue' },
          { name: 'Chloe Lim', chip: 'chip chip-assigned', label: 'Assigned' },
          { name: 'Tan Wei Ming', chip: 'chip chip-collected', label: 'Collected' },
        ].map((r) => (
          <div key={r.name} className="flex items-center gap-3">
            <span className="frame flex h-8 w-8 shrink-0 items-center justify-center">
              <span className="mono text-[10px] font-semibold" style={{ color: 'var(--ink-faint)' }}>
                {r.name
                  .split(' ')
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join('')}
              </span>
            </span>
            <span className="min-w-0 flex-1 truncate text-sm font-medium">{r.name}</span>
            <span className={`${r.chip} shrink-0`}>
              <span className="chip-dot" />
              {r.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t pt-4 hairline">
        <button type="button" className="btn btn-primary">
          Set homework
        </button>
        <button type="button" className="btn btn-collect">
          Collect
        </button>
        <button type="button" className="btn">
          Edit
        </button>
      </div>
    </div>
  )
}
