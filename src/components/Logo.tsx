export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className ?? ''}`}>
      <svg viewBox="0 0 32 32" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path d="M9 7v18M9 16h8M17 7v18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" />
        <circle cx="24.5" cy="9" r="2.6" fill="var(--accent)" />
      </svg>
      <span className="font-mono text-sm font-semibold tracking-[0.18em] uppercase">Hypeman</span>
    </span>
  )
}
