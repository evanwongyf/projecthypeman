import { setGuideRead, useReadGuides } from '../../lib/archive/progress'

// The end-of-guide toggle for marking a guide as read on this device.
export function MarkRead({ path, color }: { path: string; color: string }) {
  const read = useReadGuides().has(path)
  return (
    <div
      className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius)] border p-4 sm:p-5"
      style={{ borderColor: 'var(--line)', background: read ? `color-mix(in srgb, ${color} 22%, var(--surface))` : 'var(--surface)' }}
    >
      <div className="min-w-0">
        <p className="font-bold">{read ? 'Marked as read' : 'Finished this guide?'}</p>
        <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
          {read ? 'It shows a tick on the shelf. Come back any time to review it.' : 'Mark it as read to track your progress through the archive.'}
        </p>
      </div>
      <button
        type="button"
        onClick={() => setGuideRead(path, !read)}
        aria-pressed={read}
        className={`btn ${read ? 'btn-ghost' : 'btn-primary'} px-4 py-2.5 text-sm pointer-coarse:min-h-11`}
      >
        {read ? 'Mark as unread' : '✓ Mark as read'}
      </button>
    </div>
  )
}

export function ReadTick() {
  return (
    <span
      className="rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase"
      style={{ borderColor: 'var(--line)', background: 'var(--mint)', color: '#1c1410' }}
    >
      ✓ read
    </span>
  )
}
