import { useState } from 'react'
import { citeToHtml, citeToPlain } from '../../lib/archive/cite'

// Copies a filled citation example; the rich version keeps italics when pasted into Word
// or Docs. With `plain`, src is copied as-is instead of being read as citation markup.
export function CopyButton({ src, label = 'Copy', plain: asPlain = false }: { src: string; label?: string; plain?: boolean }) {
  const [state, setState] = useState<'idle' | 'done' | 'failed'>('idle')

  async function copy() {
    const plain = asPlain ? src : citeToPlain(src)
    try {
      if (asPlain) {
        await navigator.clipboard.writeText(plain)
      } else if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/html': new Blob([citeToHtml(src)], { type: 'text/html' }),
            'text/plain': new Blob([plain], { type: 'text/plain' }),
          }),
        ])
      } else {
        await navigator.clipboard.writeText(plain)
      }
      setState('done')
    } catch {
      setState('failed')
    }
    window.setTimeout(() => setState('idle'), 1800)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="btn btn-ghost px-3 py-1.5 text-xs whitespace-nowrap pointer-coarse:min-h-10"
      aria-live="polite"
    >
      {state === 'done' ? 'Copied' : state === 'failed' ? 'Copy failed' : label}
    </button>
  )
}
