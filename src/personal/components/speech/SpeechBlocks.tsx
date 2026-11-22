import { useMemo, useRef, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { DIALECTS, pickVoice, speak, speakQueue, speechSupported, stopSpeaking, useVoices } from '../../lib/speech/tts'
import type { Dialect } from '../../lib/speech/tts'
import { TONE_SETS } from '../../lib/speech/tones'
import { Btn, Card, soft } from '../sports/shared'
import { NativeSelect } from '../../../components/NativeSelect'

type SpeakT = Extract<Block, { t: 'speak' }>
type TonesT = Extract<Block, { t: 'tones' }>

/** Voice, speed and the honest note about what the device can really say. */
function useSpeechSetup(dialect: Dialect) {
  const voices = useVoices()
  const [manual, setManual] = useState<string>('auto')
  const [rate, setRate] = useState(0.85)
  const auto = useMemo(() => pickVoice(voices, dialect), [voices, dialect])
  const chosen = manual === 'auto' ? auto.voice : voices.find((v) => v.voiceURI === manual)
  const exact = manual === 'auto' ? auto.exact : true
  const en = useMemo(() => pickVoice(voices, 'en'), [voices])
  return { voices, manual, setManual, rate, setRate, voice: chosen, exact, enVoice: en.voice }
}

function VoiceBar({
  dialect,
  voices,
  manual,
  setManual,
  rate,
  setRate,
}: {
  dialect: Dialect
  voices: SpeechSynthesisVoice[]
  manual: string
  setManual: (v: string) => void
  rate: number
  setRate: (n: number) => void
}) {
  const zh = voices.filter((v) => /^(zh|yue|nan|hak)/i.test(v.lang))
  const rest = voices.filter((v) => !zh.includes(v))
  return (
    <div className="flex flex-wrap items-center gap-2">
      <label className="flex items-center gap-1 text-xs font-bold" style={soft}>
        Voice
        <NativeSelect
          value={manual}
          onChange={(e) => setManual(e.target.value)}
          className="max-w-56 rounded-[var(--radius)] border px-2 py-1 text-xs font-normal"
          style={{ borderColor: 'var(--line)', background: 'var(--paper)', color: 'var(--ink)' }}
        >
          <option value="auto">Best for {DIALECTS[dialect].name} on this device</option>
          {zh.length > 0 && (
            <optgroup label="Chinese voices">
              {zh.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </optgroup>
          )}
          <optgroup label="Other voices">
            {rest.map((v) => (
              <option key={v.voiceURI} value={v.voiceURI}>
                {v.name} ({v.lang})
              </option>
            ))}
          </optgroup>
        </NativeSelect>
      </label>
      <label className="flex items-center gap-1 text-xs font-bold" style={soft}>
        Speed
        <input type="range" min={0.5} max={1.3} step={0.05} value={rate} onChange={(e) => setRate(Number(e.target.value))} aria-label="Speaking speed" />
        <span className="font-mono">{rate.toFixed(2)}×</span>
      </label>
      <Btn onClick={stopSpeaking}>■ Stop</Btn>
    </div>
  )
}

export function SpeakBlock({ block, color }: { block: SpeakT; color: string }) {
  const d = DIALECTS[block.lang]
  const { voices, manual, setManual, rate, setRate, voice, exact, enVoice } = useSpeechSetup(block.lang)
  const [playing, setPlaying] = useState<number | null>(null)
  const stopAll = useRef<(() => void) | null>(null)

  if (!speechSupported()) {
    return (
      <Card title={block.title ?? `${d.name} words and phrases`} color={color} note="This browser has no speech synthesis, so the rows below are text only.">
        <PhraseTable block={block} />
      </Card>
    )
  }

  const sayRow = (i: number) => {
    const item = block.items[i]
    const text = item.say ?? item.hz ?? item.rom
    setPlaying(i)
    speak(text, { voice, rate, onEnd: () => setPlaying(null) })
  }
  const sayEnglish = (i: number) => {
    setPlaying(i)
    speak(block.items[i].en, { voice: enVoice, lang: 'en-GB', rate: Math.min(1, rate + 0.1), onEnd: () => setPlaying(null) })
  }
  const playAll = () => {
    stopAll.current?.()
    const parts = block.items.map((x) => x.say ?? x.hz ?? x.rom)
    stopAll.current = speakQueue(parts, { voice, rate, onIndex: setPlaying, onEnd: () => setPlaying(null) })
  }

  return (
    <Card
      title={block.title ?? `${d.name} words and phrases`}
      color={color}
      note={
        <>
          {block.note ? `${block.note} ` : ''}
          Speech comes from the voices installed on your device; nothing is recorded or sent anywhere.
        </>
      }
    >
      <VoiceBar dialect={block.lang} voices={voices} manual={manual} setManual={setManual} rate={rate} setRate={setRate} />
      {!exact && (
        <p className="rounded-[var(--radius)] border px-2 py-1 text-xs leading-relaxed" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--mustard) 35%, var(--surface))' }}>
          <strong>No {d.name} voice on this device.</strong> {d.note} The “Say it” button will read the characters with whatever Chinese voice you have, which is a <em>different</em> language, so use it only to hear the characters, and learn the dialect from the romanisation, the tone chart and a speaker.
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        <Btn onClick={playAll}>▶ Play all</Btn>
        <span className="text-xs" style={soft}>
          {block.items.length} items · romanisation: {d.romanisation}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-sm">
          <thead>
            <tr style={{ background: 'var(--paper-2)' }}>
              <th className="border px-2 py-1 text-left" style={{ borderColor: 'var(--line)' }}>
                Characters
              </th>
              <th className="border px-2 py-1 text-left" style={{ borderColor: 'var(--line)' }}>
                {d.romanisation || 'Romanisation'}
              </th>
              <th className="border px-2 py-1 text-left" style={{ borderColor: 'var(--line)' }}>
                Meaning
              </th>
              <th className="border px-2 py-1 text-left" style={{ borderColor: 'var(--line)' }}>
                Listen
              </th>
            </tr>
          </thead>
          <tbody>
            {block.items.map((x, i) => (
              <tr key={i} style={{ background: playing === i ? 'color-mix(in srgb, var(--mint) 40%, var(--surface))' : undefined }}>
                <td className="border px-2 py-1 text-lg" style={{ borderColor: 'var(--line)' }} lang="zh">
                  {x.hz ?? '-'}
                </td>
                <td className="border px-2 py-1 font-mono text-xs" style={{ borderColor: 'var(--line)' }}>
                  {x.rom}
                  {x.note && (
                    <span className="block font-sans" style={soft}>
                      {x.note}
                    </span>
                  )}
                </td>
                <td className="border px-2 py-1" style={{ borderColor: 'var(--line)' }}>
                  {x.en}
                </td>
                <td className="border px-2 py-1" style={{ borderColor: 'var(--line)' }}>
                  <span className="flex flex-wrap gap-1">
                    <Btn onClick={() => sayRow(i)} active={playing === i}>
                      {exact ? '▶ Say it' : '▶ Characters'}
                    </Btn>
                    <Btn onClick={() => sayEnglish(i)}>▶ English</Btn>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

function PhraseTable({ block }: { block: SpeakT }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[26rem] border-collapse text-sm">
        <tbody>
          {block.items.map((x, i) => (
            <tr key={i}>
              <td className="border px-2 py-1 text-lg" style={{ borderColor: 'var(--line)' }} lang="zh">
                {x.hz ?? '-'}
              </td>
              <td className="border px-2 py-1 font-mono text-xs" style={{ borderColor: 'var(--line)' }}>
                {x.rom}
              </td>
              <td className="border px-2 py-1" style={{ borderColor: 'var(--line)' }}>
                {x.en}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Chao tone letters drawn as pitch lines, with an example per tone. */
export function ToneChart({ block, color }: { block: TonesT; color: string }) {
  const set = TONE_SETS[block.dialect]
  const { voices, manual, setManual, rate, setRate, voice, exact } = useSpeechSetup(set.dialect)
  if (!set) return null
  const W = 56
  const H = 64
  const y = (p: number) => H - 6 - ((p - 1) / 4) * (H - 12)
  return (
    <Card title={set.title} color={color} note={`Pitch is drawn on Chao’s 1-5 scale, where 5 is the top of your speaking range. Based on ${set.basis}.`}>
      <p className="text-sm leading-relaxed">{set.count}</p>
      {speechSupported() && <VoiceBar dialect={set.dialect} voices={voices} manual={manual} setManual={setManual} rate={rate} setRate={setRate} />}
      <div className="flex flex-wrap gap-2">
        {set.tones.map((t, i) => (
          <div key={i} className="flex w-[8.5rem] flex-col items-center gap-1 rounded-[var(--radius)] border p-2" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
            <p className="text-xs font-bold">
              Tone {t.n} · {t.name}
            </p>
            <svg width={W} height={H} role="img" aria-label={`Tone ${t.n}, contour ${t.contour}`}>
              {[1, 2, 3, 4, 5].map((p) => (
                <line key={p} x1={4} y1={y(p)} x2={W - 4} y2={y(p)} stroke="var(--line)" strokeWidth={p === 3 ? 1.5 : 0.8} strokeDasharray={p === 3 ? undefined : '3 3'} />
              ))}
              <polyline
                points={t.shape.map((p, k) => `${6 + (k * (W - 16)) / Math.max(1, t.shape.length - 1)},${y(p)}`).join(' ')}
                fill="none"
                stroke={color}
                strokeWidth={t.checked ? 6 : 3}
                strokeLinecap="round"
              />
            </svg>
            <p className="font-mono text-[11px]">{t.contour}</p>
            {t.hz && (
              <p className="text-center text-xs">
                <span className="text-base" lang="zh">
                  {t.hz}
                </span>{' '}
                <span className="font-mono">{t.rom}</span>
                <span className="block" style={soft}>
                  {t.gloss}
                </span>
              </p>
            )}
            {t.hz && speechSupported() && (
              <Btn onClick={() => speak(t.hz!, { voice, rate })}>{exact ? '▶ Hear it' : '▶ Characters'}</Btn>
            )}
          </div>
        ))}
      </div>
      <ul className="flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed">
        {set.notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      {!exact && (
        <p className="text-xs leading-relaxed" style={soft}>
          This device has no {DIALECTS[set.dialect].name} voice, so “Hear it” reads the character in another Chinese language. The pitch you hear is not this tone; the drawing is the reliable part.
        </p>
      )}
    </Card>
  )
}

export default function SpeechBlock({ block, color }: { block: SpeakT | TonesT; color: string }) {
  return block.t === 'speak' ? <SpeakBlock block={block} color={color} /> : <ToneChart block={block} color={color} />
}
