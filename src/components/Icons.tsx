type Props = { className?: string }

const base = 'h-4 w-4'

function Svg({ className, children }: Props & { children: React.ReactNode }) {
  return (
    <svg
      className={className ?? base}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const IconRoster = (p: Props) => (
  <Svg {...p}>
    <circle cx="7.5" cy="6.5" r="2.5" />
    <path d="M3 16c0-2.5 2-4 4.5-4S12 13.5 12 16" />
    <path d="M13.5 5.5h4M13.5 9h4M13.5 12.5h4" />
  </Svg>
)

export const IconClass = (p: Props) => (
  <Svg {...p}>
    <rect x="2.5" y="4" width="15" height="11" />
    <path d="M6 7.5h5M6 10.5h8" />
  </Svg>
)

export const IconHomework = (p: Props) => (
  <Svg {...p}>
    <path d="M5 2.5h10v15H5z" />
    <path d="M7.5 6.5h5M7.5 9.5h5M7.5 12.5h3" />
  </Svg>
)

export const IconPlus = (p: Props) => (
  <Svg {...p}>
    <path d="M10 4v12M4 10h12" />
  </Svg>
)

export const IconBack = (p: Props) => (
  <Svg {...p}>
    <path d="M9 5l-5 5 5 5M4 10h12" />
  </Svg>
)

export const IconTrash = (p: Props) => (
  <Svg {...p}>
    <path d="M3.5 6h13M8 3.5h4M5.5 6l.7 10.5h7.6L14.5 6" />
    <path d="M8.5 9v5M11.5 9v5" />
  </Svg>
)

export const IconEdit = (p: Props) => (
  <Svg {...p}>
    <path d="M13.5 3.5l3 3-9 9H4.5v-3z" />
  </Svg>
)

export const IconClose = (p: Props) => (
  <Svg {...p}>
    <path d="M5 5l10 10M15 5L5 15" />
  </Svg>
)

export const IconCheck = (p: Props) => (
  <Svg {...p}>
    <path d="M4 10.5l4 4 8-9" />
  </Svg>
)

export const IconUndo = (p: Props) => (
  <Svg {...p}>
    <path d="M4 7h8.5a3.5 3.5 0 110 7H8" />
    <path d="M7 4L4 7l3 3" />
  </Svg>
)

export const IconLogout = (p: Props) => (
  <Svg {...p}>
    <path d="M8 3.5H4.5v13H8" />
    <path d="M11 7l3 3-3 3M14 10H7" />
  </Svg>
)

export const IconCamera = (p: Props) => (
  <Svg {...p}>
    <path d="M2.5 6.5h3L7 4.5h6l1.5 2h3v9h-15z" />
    <circle cx="10" cy="11" r="2.75" />
  </Svg>
)

export const IconNote = (p: Props) => (
  <Svg {...p}>
    <path d="M4 3.5h12v13H4z" />
    <path d="M6.5 7h7M6.5 10h7M6.5 13h4" />
  </Svg>
)

export const IconIncident = (p: Props) => (
  <Svg {...p}>
    <path d="M10 3l7 13H3z" />
    <path d="M10 8v3.5M10 13.5v.5" />
  </Svg>
)

export const IconSettings = (p: Props) => (
  <Svg {...p}>
    <circle cx="10" cy="10" r="2.6" />
    <path d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M4.7 4.7l1.4 1.4M13.9 13.9l1.4 1.4M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4" />
  </Svg>
)

export const IconMinus = (p: Props) => (
  <Svg {...p}>
    <path d="M4 10h12" />
  </Svg>
)

export const IconStar = (p: Props) => (
  <Svg {...p}>
    <path d="M10 2.8l2.3 4.7 5.2.75-3.75 3.65.9 5.15L10 14.6l-4.65 2.45.9-5.15L2.5 8.25l5.2-.75z" />
  </Svg>
)

export const IconUndoArrow = (p: Props) => (
  <Svg {...p}>
    <path d="M4 7h8.5a3.5 3.5 0 110 7H8" />
    <path d="M7 4L4 7l3 3" />
  </Svg>
)

export const IconSeating = (p: Props) => (
  <Svg {...p}>
    <rect x="2.5" y="3" width="5" height="5" />
    <rect x="12.5" y="3" width="5" height="5" />
    <rect x="2.5" y="12" width="5" height="5" />
    <rect x="12.5" y="12" width="5" height="5" />
  </Svg>
)

export const IconRun = (p: Props) => (
  <Svg {...p}>
    <circle cx="12.5" cy="3.8" r="1.6" />
    <path d="M6 9l3-3 3 2 2 3h3M9 6l-1.5 5 3.5 2-1 4.5M7.5 11L4 14.5" />
  </Svg>
)

export const IconLab = (p: Props) => (
  <Svg {...p}>
    <path d="M7.5 2.5h5M8.5 2.5v5L4 16.5h12l-4.5-9v-5" />
    <path d="M6 12.5h8" />
  </Svg>
)

export const IconArchive = (p: Props) => (
  <Svg {...p}>
    <path d="M3 4h14v3H3zM4 7v9h12V7M8 10.5h4" />
  </Svg>
)

export const IconBook = (p: Props) => (
  <Svg {...p}>
    <path d="M4 3.5h8.5a2 2 0 0 1 2 2V17H6a2 2 0 0 1-2-2zM4 15a2 2 0 0 1 2-2h8.5" />
  </Svg>
)

export const IconNetwork = (p: Props) => (
  <Svg {...p}>
    <circle cx="5" cy="5" r="2" />
    <circle cx="15" cy="6" r="2" />
    <circle cx="10" cy="15" r="2" />
    <path d="M7 5.3 13 5.8M6 6.8l3 6.4M14 7.8l-3 5.4" />
  </Svg>
)

export const IconDocument = (p: Props) => (
  <Svg {...p}>
    <path d="M5 2.5h6l4 4v11H5z" />
    <path d="M11 2.5v4h4" />
    <path d="M7.5 10.5h5M7.5 13.5h5" />
  </Svg>
)

export const IconDownload = (p: Props) => (
  <Svg {...p}>
    <path d="M10 3v9" />
    <path d="M6.5 8.5 10 12l3.5-3.5" />
    <path d="M4 15.5h12" />
  </Svg>
)

export const IconPrint = (p: Props) => (
  <Svg {...p}>
    <path d="M6 7.5V3h8v4.5" />
    <path d="M3.5 7.5h13v6H14v3.5H6V13.5H3.5z" />
    <path d="M7.5 11h5" />
  </Svg>
)

export const IconLessons = (p: Props) => (
  <Svg {...p}>
    <rect x="2.5" y="3.5" width="15" height="10" />
    <path d="M8.5 6.5v4l3.5-2z" />
    <path d="M7 17h6M10 13.5V17" />
  </Svg>
)
