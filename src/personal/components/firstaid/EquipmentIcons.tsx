// Original schematic icons for first aid kit contents. No usable public-domain photo dataset
// of first aid equipment could be found, so these are drawn, not photographed, simple,
// consistent line icons in the same style as the rest of the site.

const stroke = { fill: 'none', stroke: 'var(--ink)', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export function EquipmentIcon({ id, className = 'h-10 w-10' }: { id: string; className?: string }) {
  const body = ICONS[id] ?? ICONS.default
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      {body}
    </svg>
  )
}

const ICONS: Record<string, React.ReactNode> = {
  'adhesive-bandage': (
    <g {...stroke}>
      <rect x={6} y={18} width={36} height={12} rx={6} transform="rotate(-20 24 24)" fill="var(--mustard)" />
      <rect x={18} y={20} width={12} height={8} rx={2} transform="rotate(-20 24 24)" fill="var(--surface)" />
    </g>
  ),
  'gauze-pad': (
    <g {...stroke}>
      <rect x={9} y={9} width={30} height={30} rx={3} fill="var(--surface)" />
      <path d="M9 17h30M9 25h30M9 33h30M17 9v30M25 9v30M33 9v30" strokeWidth={1} opacity={0.5} />
    </g>
  ),
  'non-stick-dressing': (
    <g {...stroke}>
      <rect x={7} y={13} width={34} height={22} rx={4} fill="var(--teal)" opacity={0.5} />
      <rect x={14} y={19} width={20} height={10} rx={2} fill="var(--surface)" />
    </g>
  ),
  'antiseptic-wipe': (
    <g {...stroke}>
      <rect x={10} y={8} width={28} height={32} rx={3} fill="var(--mint)" opacity={0.4} />
      <path d="M16 16l16 16M32 16l-16 16" strokeWidth={1.4} opacity={0.6} />
      <circle cx={24} cy={24} r={5} fill="var(--surface)" />
    </g>
  ),
  'triangular-bandage': (
    <g {...stroke}>
      <path d="M8 36 L24 10 L40 36 Z" fill="var(--pink)" opacity={0.35} />
    </g>
  ),
  'roller-gauze': (
    <g {...stroke}>
      <circle cx={24} cy={24} r={16} fill="var(--surface)" />
      <circle cx={24} cy={24} r={16} />
      <circle cx={24} cy={24} r={5} fill="var(--paper-2)" />
      <path d="M24 24 L40 18" strokeWidth={1.4} opacity={0.6} />
    </g>
  ),
  'elastic-bandage': (
    <g {...stroke}>
      <circle cx={24} cy={24} r={15} fill="var(--lavender)" opacity={0.3} />
      <path d="M24 24 m-15 0 a15 15 0 0 1 26 -9" strokeWidth={3} />
      <path d="M34 7 l3 6 l-7 1" fill="var(--ink)" stroke="none" />
    </g>
  ),
  'adhesive-tape': (
    <g {...stroke}>
      <circle cx={24} cy={24} r={16} fill="var(--mustard)" opacity={0.4} />
      <circle cx={24} cy={24} r={16} />
      <circle cx={24} cy={24} r={6} fill="var(--paper-2)" />
    </g>
  ),
  scissors: (
    <g {...stroke}>
      <circle cx={12} cy={34} r={5} />
      <circle cx={12} cy={14} r={5} />
      <path d="M16 18 L40 40 M16 30 L40 8" />
    </g>
  ),
  tweezers: (
    <g {...stroke}>
      <path d="M18 8 L14 40 M30 8 L34 40" />
      <path d="M18 8 Q24 2 30 8" />
      <path d="M15 36 L18 40 M33 36 L30 40" />
    </g>
  ),
  thermometer: (
    <g {...stroke}>
      <rect x={20} y={6} width={8} height={26} rx={4} fill="var(--surface)" />
      <circle cx={24} cy={36} r={7} fill="var(--pink)" opacity={0.6} />
      <path d="M24 14v16" strokeWidth={3} stroke="var(--pink)" />
    </g>
  ),
  'cold-pack': (
    <g {...stroke}>
      <rect x={9} y={9} width={30} height={30} rx={5} fill="var(--teal)" opacity={0.35} />
      <path d="M24 14v20M14 24h20M18 18l12 12M30 18L18 30" strokeWidth={1.3} opacity={0.6} />
    </g>
  ),
  gloves: (
    <g {...stroke}>
      <path d="M14 40V20a3 3 0 0 1 6 0v6M20 20v-8a3 3 0 0 1 6 0v8M26 20v-9a3 3 0 0 1 6 0v9M32 20v-5a3 3 0 0 1 6 0v17c0 8-5 13-12 13h-2c-6 0-10-4-10-9" fill="var(--surface)" />
    </g>
  ),
  'cpr-mask': (
    <g {...stroke}>
      <path d="M10 26c0-9 7-16 14-16s14 7 14 16-7 10-14 10-14-1-14-10Z" fill="var(--mint)" opacity={0.4} />
      <circle cx={34} cy={22} r={4} fill="var(--surface)" />
    </g>
  ),
  'eye-wash': (
    <g {...stroke}>
      <path d="M8 24s7-10 16-10 16 10 16 10-7 10-16 10S8 24 8 24Z" fill="var(--surface)" />
      <circle cx={24} cy={24} r={5} fill="var(--teal)" opacity={0.6} />
    </g>
  ),
  'pain-reliever': (
    <g {...stroke}>
      <rect x={10} y={16} width={28} height={16} rx={8} fill="var(--surface)" />
      <path d="M24 16v16" />
    </g>
  ),
  antihistamine: (
    <g {...stroke}>
      <ellipse cx={24} cy={24} rx={16} ry={9} fill="var(--mustard)" opacity={0.4} />
      <path d="M8 24a16 9 0 0 0 32 0" strokeWidth={1.4} opacity={0.6} />
    </g>
  ),
  epipen: (
    <g {...stroke}>
      <rect x={20} y={6} width={8} height={32} rx={3} fill="var(--pink)" opacity={0.5} />
      <path d="M24 38v4" strokeWidth={3} />
      <path d="M18 14h12" strokeWidth={1.2} opacity={0.6} />
    </g>
  ),
  'sam-splint': (
    <g {...stroke}>
      <path d="M8 34 Q16 18 24 34 Q32 18 40 34" strokeWidth={5} stroke="var(--mustard)" fill="none" />
    </g>
  ),
  'arm-sling': (
    <g {...stroke}>
      <path d="M10 14l20 6-6 20z" fill="var(--pink)" opacity={0.35} />
      <path d="M16 20c6-4 14-2 18 6" strokeWidth={1.4} opacity={0.5} />
    </g>
  ),
  'rigid-collar': (
    <g {...stroke}>
      <path d="M10 28a14 10 0 0 1 28 0" fill="var(--teal)" opacity={0.35} />
      <path d="M10 28a14 10 0 0 0 28 0" fill="var(--teal)" opacity={0.2} />
    </g>
  ),
  'emergency-blanket': (
    <g {...stroke}>
      <rect x={8} y={14} width={32} height={22} rx={3} fill="var(--lavender)" opacity={0.3} />
      <path d="M8 14l32 22M40 14L8 36" strokeWidth={1} opacity={0.5} />
    </g>
  ),
  tourniquet: (
    <g {...stroke}>
      <rect x={8} y={20} width={32} height={8} rx={4} fill="var(--pink)" opacity={0.45} />
      <rect x={20} y={12} width={8} height={24} rx={2} fill="var(--ink)" opacity={0.7} />
    </g>
  ),
  'first-aid-kit-box': (
    <g {...stroke}>
      <rect x={8} y={16} width={32} height={22} rx={3} fill="var(--mint)" opacity={0.4} />
      <rect x={17} y={11} width={14} height={8} rx={2} fill="var(--surface)" />
      <path d="M24 22v10M19 27h10" stroke="var(--pink)" strokeWidth={3} />
    </g>
  ),
  default: (
    <g {...stroke}>
      <circle cx={24} cy={24} r={16} />
    </g>
  ),
}
