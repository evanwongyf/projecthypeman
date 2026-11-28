import { useState } from 'react'
import { useAuth } from '../lib/auth-context'
import { useData } from '../lib/data-context'
import { useDesign } from '../lib/design-context'
import {
  ACCENTS,
  BORDERS,
  CORNERS,
  DENSITIES,
  MODES,
  PRESETS,
  SHADOWS,
  TEXTURES,
  THEMES,
  TYPEFACES,
  matchingPreset,
} from '../lib/design'
import { AccentSwatch, Picker, ThemeSwatch } from '../components/design/Picker'
import { DesignPreview } from '../components/design/DesignPreview'
import { PageHeader } from '../components/PageHeader'
import { EffectsEditor } from '../components/points/EffectsEditor'

type Tab = 'design' | 'effects' | 'account'

const TABS: { id: Tab; label: string }[] = [
  { id: 'design', label: 'Design' },
  { id: 'effects', label: 'Effects' },
  { id: 'account', label: 'Account' },
]

export function SettingsPage() {
  const [tab, setTab] = useState<Tab>('design')

  return (
    <>
      <PageHeader eyebrow="Settings" title="Settings" />

      <div className="border-b px-5 sm:px-8 hairline">
        <div role="tablist" className="-mb-px flex gap-1 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className="border-b-2 px-3 py-3 font-mono text-[11px] font-medium tracking-[0.1em] uppercase whitespace-nowrap transition-colors"
              style={{
                borderColor: tab === t.id ? 'var(--accent)' : 'transparent',
                color: tab === t.id ? 'var(--ink)' : 'var(--ink-soft)',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'design' ? <DesignTab /> : tab === 'effects' ? <EffectsEditor /> : <AccountTab />}
    </>
  )
}

function DesignTab() {
  const { design, set, reset, saving, error } = useDesign()
  const activePreset = matchingPreset(design)

  return (
    <div className="grid gap-8 p-5 sm:p-8 xl:grid-cols-[1fr_22rem]">
      <div className="min-w-0 space-y-9">
        {error && (
          <p
            className="panel px-4 py-3 font-mono text-xs"
            style={{ color: 'var(--overdue)', borderColor: 'var(--overdue)' }}
          >
            {error} Your choice is still applied on this device.
          </p>
        )}

        {/* Presets set every axis at once; the pickers below then tune any of them. */}
        <Picker
          legend="Presets"
          hint="A whole look in one click. Everything below stays editable afterwards."
          options={PRESETS.map((p) => ({ id: p.id, label: p.label, hint: p.hint }))}
          value={activePreset ?? ''}
          onChange={(id) => {
            const preset = PRESETS.find((p) => p.id === id)
            if (preset) set(preset.design)
          }}
          columns="wide"
        />

        <Picker
          legend="Mode"
          options={MODES}
          value={design.mode}
          onChange={(mode) => set({ mode: mode as typeof design.mode })}
        />

        <Picker
          legend="Palette"
          hint="Each palette ships a light and a dark face, the left half of every swatch is light, the right is dark."
          options={THEMES}
          value={design.theme}
          onChange={(theme) => set({ theme })}
          columns="wide"
          renderPreview={(o) => <ThemeSwatch option={o} />}
        />

        <Picker
          legend="Accent"
          hint="Overrides the palette's own accent. Used for the primary action on each page."
          options={ACCENTS}
          value={design.accent}
          onChange={(accent) => set({ accent })}
          renderPreview={(o) => <AccentSwatch option={o} />}
        />

        <Picker
          legend="Typeface"
          options={TYPEFACES}
          value={design.type}
          onChange={(type) => set({ type })}
          columns="wide"
        />

        <div className="grid gap-8 sm:grid-cols-2">
          <Picker legend="Density" options={DENSITIES} value={design.density} onChange={(density) => set({ density })} columns="narrow" />
          <Picker legend="Corners" options={CORNERS} value={design.corners} onChange={(corners) => set({ corners })} columns="narrow" />
          <Picker legend="Borders" options={BORDERS} value={design.borders} onChange={(borders) => set({ borders })} columns="narrow" />
          <Picker legend="Shadow" options={SHADOWS} value={design.shadow} onChange={(shadow) => set({ shadow })} columns="narrow" />
        </div>

        <Picker
          legend="Background texture"
          options={TEXTURES}
          value={design.texture}
          onChange={(texture) => set({ texture })}
        />

        <div className="flex flex-wrap items-center gap-3 border-t pt-6 hairline">
          <button type="button" className="btn" onClick={reset}>
            Reset to default
          </button>
          <span className="label">{saving ? 'saving…' : 'saved to your account'}</span>
        </div>
      </div>

      {/* Sticky so the effect of a change is visible without scrolling back. */}
      <aside className="min-w-0">
        <div className="xl:sticky xl:top-8">
          <p className="label mb-2.5">Preview</p>
          <DesignPreview />
          <dl className="panel mt-4 divide-y" style={{ borderColor: 'var(--line-soft)' }}>
            {(
              [
                ['palette', THEMES.find((t) => t.id === design.theme)?.label],
                ['mode', MODES.find((m) => m.id === design.mode)?.label],
                ['accent', ACCENTS.find((a) => a.id === design.accent)?.label],
                ['typeface', TYPEFACES.find((t) => t.id === design.type)?.label],
              ] as const
            ).map(([k, v]) => (
              <div key={k} className="px-4 py-2.5">
                <dt className="label">{k}</dt>
                <dd className="mt-1 truncate text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </div>
  )
}

function AccountTab() {
  const { user } = useAuth()
  const { data } = useData()

  return (
    <div className="p-5 sm:p-8">
      <dl className="panel max-w-lg divide-y" style={{ borderColor: 'var(--line-soft)' }}>
        {(
          [
            ['name', user?.name ?? '-'],
            ['email', user?.email ?? '-'],
            ['username', user?.username ?? '-'],
            ['role', user?.role ?? '-'],
            ['classes', String(data.classes.length)],
            ['students', String(data.students.length)],
            ['homework set', String(data.homework.length)],
          ] as const
        ).map(([k, v]) => (
          <div key={k} className="px-5 py-3">
            <dt className="label">{k}</dt>
            <dd className="mt-1 truncate text-sm">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 max-w-lg text-xs" style={{ color: 'var(--ink-faint)' }}>
        Your design choices are saved to your account, so they follow you to another device.
      </p>
    </div>
  )
}
