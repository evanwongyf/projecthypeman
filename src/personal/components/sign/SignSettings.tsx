import { TONES } from '../../lib/sign/render'
import { setSignPrefs, useSignPrefs } from '../../lib/sign/prefs'

// Skin tone, left-handed mirroring and speed for every sign on the page.
export function SignSettings() {
  const { tone, lefty, speed } = useSignPrefs()
  return (
    <div className="card-surface flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-3 rounded-[var(--radius)] p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">Hands</span>
        <div className="flex gap-1.5" role="radiogroup" aria-label="Skin tone of the hands">
          {TONES.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="radio"
              aria-checked={tone === i}
              aria-label={t.name}
              title={t.name}
              onClick={() => setSignPrefs({ tone: i })}
              className="h-7 w-7 rounded-full border pointer-coarse:h-10 pointer-coarse:w-10"
              style={{ background: t.skin, borderColor: 'var(--line)', outline: tone === i ? '3px solid var(--ink)' : 'none', outlineOffset: 2 }}
            />
          ))}
        </div>
      </div>
      <label className="flex cursor-pointer items-center gap-2 text-sm font-bold pointer-coarse:min-h-11">
        <input type="checkbox" checked={lefty} onChange={(e) => setSignPrefs({ lefty: e.target.checked })} className="h-4 w-4" style={{ accentColor: 'var(--ink)' }} />
        I sign left-handed
      </label>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">Speed</span>
        <div className="flex gap-1" role="radiogroup" aria-label="Playback speed">
          {[0.5, 0.75, 1].map((s) => (
            <button
              key={s}
              type="button"
              role="radio"
              aria-checked={speed === s}
              onClick={() => setSignPrefs({ speed: s })}
              className="rounded-full border px-2.5 py-1 font-mono text-xs font-bold pointer-coarse:min-h-10"
              style={{ borderColor: 'var(--line)', background: speed === s ? 'var(--ink)' : 'var(--surface)', color: speed === s ? 'var(--surface)' : 'var(--ink)' }}
            >
              {s === 1 ? '1×' : s === 0.5 ? '½×' : '¾×'}
            </button>
          ))}
        </div>
      </div>
      <p className="w-full text-xs" style={{ color: 'var(--ink-soft)' }}>
        Signs are drawn as you would see them on someone facing you. Tap any picture to play it, and tap again to replay.
        {lefty ? ' Mirrored for a left-handed signer: use your left hand as the main hand.' : ''}
      </p>
    </div>
  )
}
