import { useMemo, useRef, useState } from 'react'
import type { Guide } from '../../lib/archive/guide'
import { guideSpeech } from '../../lib/speech/guideSpeech'
import { pickVoice, speakQueue, speechSupported, stopSpeaking, useVoices } from '../../lib/speech/tts'
import { NativeSelect } from '../../../components/NativeSelect'

// Reads a guide aloud with the device's own voices. Nothing is recorded or uploaded; if the
// device has no speech synthesis, the control is not shown at all. GuideView gives this a key
// per guide, so moving to another guide remounts it and stops any speech.

export function ReadAloud({ guide, title, color }: { guide: Guide; title: string; color: string }) {
  const voices = useVoices()
  const [manual, setManual] = useState('auto')
  const [rate, setRate] = useState(1)
  const [at, setAt] = useState<number | null>(null)
  const stop = useRef<(() => void) | null>(null)
  const parts = useMemo(() => guideSpeech(guide, title), [guide, title])
  const auto = useMemo(() => pickVoice(voices, 'en'), [voices])
  const voice = manual === 'auto' ? auto.voice : voices.find((v) => v.voiceURI === manual)

  if (!speechSupported()) return null

  const play = (from = 0) => {
    stop.current?.()
    stop.current = speakQueue(parts.slice(from), {
      voice,
      rate,
      onIndex: (i) => setAt(i + from),
      onEnd: () => setAt(null),
    })
  }
  const halt = () => {
    stop.current?.()
    stopSpeaking()
    setAt(null)
  }

  return (
    <details className="max-w-3xl rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <summary className="cursor-pointer text-sm font-bold">🔊 Read this guide aloud</summary>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {at === null ? (
          <button type="button" onClick={() => play(0)} className="rounded-full border px-3 py-1 text-xs font-bold" style={{ borderColor: 'var(--line)', background: color }}>
            ▶ Play
          </button>
        ) : (
          <button type="button" onClick={halt} className="rounded-full border px-3 py-1 text-xs font-bold" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
            ■ Stop
          </button>
        )}
        <label className="flex items-center gap-1 text-xs font-bold" style={{ color: 'var(--ink-soft)' }}>
          Voice
          <NativeSelect
            value={manual}
            onChange={(e) => setManual(e.target.value)}
            className="max-w-52 rounded-[var(--radius)] border px-2 py-1 text-xs font-normal"
            style={{ borderColor: 'var(--line)', background: 'var(--paper)', color: 'var(--ink)' }}
          >
            <option value="auto">Device default</option>
            {voices.map((v) => (
              <option key={v.voiceURI} value={v.voiceURI}>
                {v.name} ({v.lang})
              </option>
            ))}
          </NativeSelect>
        </label>
        <label className="flex items-center gap-1 text-xs font-bold" style={{ color: 'var(--ink-soft)' }}>
          Speed
          <input type="range" min={0.6} max={1.6} step={0.05} value={rate} onChange={(e) => setRate(Number(e.target.value))} aria-label="Speaking speed" />
          <span className="font-mono">{rate.toFixed(2)}×</span>
        </label>
        <span className="text-xs" style={{ color: 'var(--ink-soft)' }}>
          {at === null ? `${parts.length} passages` : `passage ${at + 1} of ${parts.length}`}
        </span>
      </div>
      {at !== null && (
        <p className="mt-2 rounded-[var(--radius)] border px-2 py-1 text-sm leading-relaxed" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }} aria-live="polite">
          {parts[at]}
        </p>
      )}
      <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
        Uses the voices installed on this device. Tables, charts and the interactive labs are skipped. Changing the voice or speed takes effect the next time you press play.
      </p>
    </details>
  )
}
