import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { DocPages } from './DocPages'
import type { DocLayout } from '../../lib/documents/layout'

/**
 * Prints the A4 pages on their own.
 *
 * The pages go into #print-root, which the print stylesheet shows while hiding
 * the app, so what comes out of the printer is the document and nothing else.
 * One print per non-zero token, so asking twice prints twice and a re-render
 * does not.
 */
export function DocPrintPortal({ layout, token, title }: { layout: DocLayout; token: number; title: string }) {
  const done = useRef(0)
  const host = typeof document === 'undefined' ? null : document.getElementById('print-root')

  useEffect(() => {
    // The browser puts the document title in the page header and in the
    // suggested filename, so it is worth borrowing for the duration.
    const previous = document.title
    const restore = () => {
      document.title = previous
    }
    window.addEventListener('afterprint', restore)
    return () => {
      window.removeEventListener('afterprint', restore)
      restore()
    }
  }, [])

  useEffect(() => {
    if (token === 0 || done.current === token) return
    done.current = token
    document.title = title.replace(/[^\w .-]+/g, '').trim() || 'document'
    const timer = setTimeout(() => window.print(), 120)
    return () => clearTimeout(timer)
  }, [token, title])

  if (!host || token === 0) return null
  return createPortal(<DocPages layout={layout} />, host)
}
