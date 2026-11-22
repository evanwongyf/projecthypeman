// Read-aloud built on the browser's own speech synthesis (SpeechSynthesis). No audio is
// recorded, uploaded or stored: the voices come from the device, so what you hear depends on
// the voices installed there.
//
// What this does and does not give you, honestly:
// - Mandarin (zh-CN) and Cantonese (zh-HK) voices are common on phones and desktops.
// - There is no standard browser voice for Hokkien, Teochew, Hakka or Hainanese. Asking a
//   Mandarin voice to read Chinese characters gives the MANDARIN reading, which is not the
//   dialect. The player says so, and lets you hear the English meaning instead.

import { useEffect, useState } from 'react'

export type Dialect = 'mandarin' | 'cantonese' | 'hokkien' | 'teochew' | 'hakka' | 'hainanese' | 'en'

export type DialectInfo = {
  id: Dialect
  name: string
  chinese: string
  /** BCP-47 tags to look for, best first. */
  langs: string[]
  /** True when browsers normally ship a voice that really speaks this. */
  hasVoice: boolean
  romanisation: string
  note: string
}

export const DIALECTS: Record<Dialect, DialectInfo> = {
  mandarin: {
    id: 'mandarin',
    name: 'Mandarin',
    chinese: '華語 / 普通话',
    langs: ['zh-CN', 'zh-TW', 'zh'],
    hasVoice: true,
    romanisation: 'Hanyu Pinyin',
    note: 'Widely supported. Useful as a reference reading of the characters.',
  },
  cantonese: {
    id: 'cantonese',
    name: 'Cantonese',
    chinese: '廣東話 / 粵語',
    langs: ['zh-HK', 'yue', 'zh-Hant-HK'],
    hasVoice: true,
    romanisation: 'Jyutping',
    note: 'Most devices have a Cantonese voice (zh-HK). If yours does not, the player falls back to Mandarin and says so.',
  },
  hokkien: {
    id: 'hokkien',
    name: 'Hokkien',
    chinese: '福建話 / 閩南語',
    langs: ['nan', 'nan-TW', 'zh-TW'],
    hasVoice: false,
    romanisation: 'Tâi-lô (and POJ)',
    note: 'Browsers do not ship a Hokkien voice. Characters would be read in Mandarin, which is a different language, so use the romanisation and the tone chart instead.',
  },
  teochew: {
    id: 'teochew',
    name: 'Teochew',
    chinese: '潮州話',
    langs: ['nan'],
    hasVoice: false,
    romanisation: 'Peng’im',
    note: 'No browser voice. Same caution as Hokkien.',
  },
  hakka: {
    id: 'hakka',
    name: 'Hakka',
    chinese: '客家話',
    langs: ['hak', 'hak-TW'],
    hasVoice: false,
    romanisation: 'Pha̍k-fa-sṳ',
    note: 'No browser voice. Taiwan’s Hakka Affairs Council publishes recordings if you want real audio.',
  },
  hainanese: {
    id: 'hainanese',
    name: 'Hainanese',
    chinese: '海南話',
    langs: ['nan'],
    hasVoice: false,
    romanisation: 'no single standard',
    note: 'No browser voice, and no one agreed spelling either. Treat the spellings here as a guide to the sound, not an official system.',
  },
  en: { id: 'en', name: 'English', chinese: '', langs: ['en-GB', 'en-US', 'en'], hasVoice: true, romanisation: '', note: '' },
}

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window
}

/** The device's voices. They can arrive late, so this re-renders when they do. */
export function useVoices(): SpeechSynthesisVoice[] {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  useEffect(() => {
    if (!speechSupported()) return
    const read = () => setVoices(window.speechSynthesis.getVoices())
    read()
    window.speechSynthesis.addEventListener('voiceschanged', read)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', read)
  }, [])
  return voices
}

/** The best voice on this device for a dialect, and whether it really speaks it. */
export function pickVoice(voices: SpeechSynthesisVoice[], dialect: Dialect): { voice?: SpeechSynthesisVoice; exact: boolean } {
  const want = DIALECTS[dialect].langs
  for (const tag of want) {
    const hit = voices.find((v) => v.lang.toLowerCase().replace('_', '-') === tag.toLowerCase())
    if (hit) return { voice: hit, exact: true }
  }
  for (const tag of want) {
    const base = tag.split('-')[0].toLowerCase()
    const hit = voices.find((v) => v.lang.toLowerCase().startsWith(base))
    if (hit) return { voice: hit, exact: tag === 'zh-CN' || tag === 'zh-HK' }
  }
  // Last resort: any Chinese voice, which will read the characters in Mandarin.
  const zh = voices.find((v) => v.lang.toLowerCase().startsWith('zh'))
  if (zh) return { voice: zh, exact: false }
  return { voice: undefined, exact: false }
}

export type SpeakOptions = { voice?: SpeechSynthesisVoice; lang?: string; rate?: number; pitch?: number; onEnd?: () => void; onStart?: () => void }

export function stopSpeaking() {
  if (speechSupported()) window.speechSynthesis.cancel()
}

/** Say one piece of text. Any speech already playing is cancelled first. */
export function speak(text: string, opts: SpeakOptions = {}): SpeechSynthesisUtterance | null {
  if (!speechSupported() || !text.trim()) return null
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  if (opts.voice) u.voice = opts.voice
  u.lang = opts.lang ?? opts.voice?.lang ?? 'en-GB'
  u.rate = opts.rate ?? 1
  u.pitch = opts.pitch ?? 1
  if (opts.onEnd) u.onend = () => opts.onEnd?.()
  if (opts.onStart) u.onstart = () => opts.onStart?.()
  u.onerror = () => opts.onEnd?.()
  window.speechSynthesis.speak(u)
  return u
}

/** Say several pieces in order, calling back as each one starts. Returns a stop function. */
export function speakQueue(parts: string[], opts: SpeakOptions & { onIndex?: (i: number) => void } = {}): () => void {
  if (!speechSupported()) return () => {}
  window.speechSynthesis.cancel()
  let stopped = false
  const run = (i: number) => {
    if (stopped || i >= parts.length) {
      if (!stopped) opts.onEnd?.()
      return
    }
    const u = new SpeechSynthesisUtterance(parts[i])
    if (opts.voice) u.voice = opts.voice
    u.lang = opts.lang ?? opts.voice?.lang ?? 'en-GB'
    u.rate = opts.rate ?? 1
    u.pitch = opts.pitch ?? 1
    u.onstart = () => opts.onIndex?.(i)
    u.onend = () => run(i + 1)
    u.onerror = () => run(i + 1)
    window.speechSynthesis.speak(u)
  }
  run(0)
  return () => {
    stopped = true
    window.speechSynthesis.cancel()
  }
}
