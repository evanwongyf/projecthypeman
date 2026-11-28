/** The wordmark, lit on a tiny amber screen. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`crt crt-amber inline-flex items-center gap-2 px-2.5 py-1 ${className ?? ''}`}>
      <svg viewBox="0 0 32 32" className="h-4 w-4 shrink-0" aria-hidden="true">
        <path d="M9 7v18M9 16h8M17 7v18" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        <rect x="22" y="6.5" width="5" height="5" fill="currentColor" />
      </svg>
      <span className="crt-type text-xl leading-none tracking-[0.14em] uppercase">Hypeman</span>
    </span>
  )
}
