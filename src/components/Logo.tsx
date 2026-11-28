/** The Hypeman wordmark, at the top of the rail and on the sign-in pages. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
        <path d="M9 7v18M9 16h8M17 7v18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" />
        <circle cx="24.5" cy="9" r="2.6" fill="var(--accent)" />
      </svg>
      <span className="font-mono text-lg leading-none font-semibold tracking-[0.18em] uppercase">Hypeman</span>
    </span>
  )
}
