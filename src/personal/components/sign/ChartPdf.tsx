import { useState } from 'react'
import { useSignPrefs } from '../../lib/sign/prefs'

// Downloads a printable chart of the alphabet and numbers (see lib/sign/chartPdf), in the
// viewer's skin tone, mirrored if they sign left-handed.

export function ChartPdf() {
  const { tone, lefty } = useSignPrefs()
  const [state, setState] = useState<'idle' | 'busy' | 'failed'>('idle')

  async function download() {
    setState('busy')
    try {
      const { buildChart } = await import('../../lib/sign/chartPdf')
      const bytes = await buildChart(tone, lefty)
      const url = URL.createObjectURL(new Blob([bytes as BlobPart], { type: 'application/pdf' }))
      const a = document.createElement('a')
      a.href = url
      a.download = 'asl-alphabet-and-numbers.pdf'
      a.click()
      window.setTimeout(() => URL.revokeObjectURL(url), 2000)
      setState('idle')
    } catch {
      setState('failed')
    }
  }

  return (
    <div className="card-surface flex max-w-2xl flex-wrap items-center gap-3 rounded-[var(--radius)] p-4">
      <div className="min-w-0 flex-1">
        <p className="font-bold">Printable chart (PDF)</p>
        <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
          The alphabet and numbers 0 to 10 on two A4 pages, in the hand colour and handedness you picked above.
        </p>
      </div>
      <button type="button" onClick={download} disabled={state === 'busy'} className="btn btn-primary px-4 py-2 text-sm">
        {state === 'busy' ? 'Making the PDF…' : state === 'failed' ? 'Try again' : '↓ Download PDF'}
      </button>
      {state === 'failed' && (
        <p className="w-full text-xs" role="alert">
          The chart could not be made in this browser. Try another browser, or print this page instead.
        </p>
      )}
    </div>
  )
}
