import { useState } from 'react'
import { photoUrl } from '../lib/api'
import { initials } from '../lib/format'

const SIZES = { sm: 'h-8 w-8 text-[10px]', md: 'h-11 w-11 text-xs', lg2: 'h-16 w-16 text-base', lg: 'h-28 w-28 text-2xl' }

export function Avatar({
  studentId,
  fullName,
  hasPhoto,
  version,
  size = 'md',
}: {
  studentId: string
  fullName: string
  hasPhoto?: boolean
  version?: number
  size?: keyof typeof SIZES
}) {
  const [failed, setFailed] = useState(false)
  const showPhoto = hasPhoto && !failed

  return (
    <div
      className={`${SIZES[size]} frame shrink-0 overflow-hidden flex items-center justify-center font-mono font-semibold tracking-widest`}
      style={{ color: 'var(--ink-faint)' }}
    >
      {showPhoto ? (
        <img
          src={photoUrl(studentId, version)}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        initials(fullName)
      )}
    </div>
  )
}
