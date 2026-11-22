import { BreadcrumbProvider, useBreadcrumbItems } from '../personal/lib/breadcrumbContext'
import { ArchivePage } from '../personal/pages/ArchivePage'

/**
 * Personal → Archive: the full Studytubby archive, mounted under /personal/archive.
 * The archive publishes its trail through a breadcrumb context; this page owns that
 * context and draws the trail itself. `.st-archive` maps the archive's own design
 * tokens onto Hypeman's theme (see index.css).
 */
export function PersonalArchivePage() {
  return (
    <BreadcrumbProvider>
      <div className="st-archive px-5 py-6 sm:px-8 sm:py-8">
        <Crumbs />
        <ArchivePage />
      </div>
    </BreadcrumbProvider>
  )
}

function Crumbs() {
  const items = useBreadcrumbItems()
  if (!items.length) return null
  return (
    <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-x-1.5 gap-y-1">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <span className="label" aria-hidden="true">
              /
            </span>
          )}
          {it.onClick ? (
            <button type="button" className="label cursor-pointer hover:text-[var(--ink)]" onClick={it.onClick}>
              {it.label}
            </button>
          ) : (
            <span className="label" style={{ color: 'var(--ink)' }} aria-current="page">
              {it.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
