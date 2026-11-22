/** The account's profile picture: a cartoon lemon. */
export function LemonAvatar({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#fff4c2" />
      {/* leaf */}
      <path d="M33 14c3-7 10-9 15-8-1 6-6 11-14 10z" fill="#5fb54a" stroke="#2f6b25" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M35 14c3-3 7-5 11-6" fill="none" stroke="#2f6b25" strokeWidth="1.2" strokeLinecap="round" />
      {/* lemon body, pointed at both ends */}
      <path
        d="M8 35c0-11 10-20 24-20s24 9 24 20c3 1 4 3 3 5-3 0-4-1-5-2-3 9-12 14-22 14S13 47 10 38c-1 1-2 2-5 2-1-2 0-4 3-5z"
        fill="#ffd93b"
        stroke="#9a7400"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* shine */}
      <path d="M17 27c3-4 7-6 11-6" fill="none" stroke="#fff6bf" strokeWidth="2.6" strokeLinecap="round" />
      {/* face */}
      <circle cx="25" cy="35" r="2.6" fill="#3a2a00" />
      <circle cx="39" cy="35" r="2.6" fill="#3a2a00" />
      <circle cx="25.9" cy="34.1" r="0.8" fill="#fff" />
      <circle cx="39.9" cy="34.1" r="0.8" fill="#fff" />
      <ellipse cx="20" cy="40" rx="2.8" ry="1.6" fill="#ff9a7a" opacity="0.8" />
      <ellipse cx="44" cy="40" rx="2.8" ry="1.6" fill="#ff9a7a" opacity="0.8" />
      <path d="M28 40.5c2 2.4 6 2.4 8 0" fill="none" stroke="#3a2a00" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
