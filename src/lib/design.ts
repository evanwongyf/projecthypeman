/**
 * The design catalogue.
 *
 * Every axis is independent and every value is just a `data-*` attribute on
 * <html>, so the whole UI re-skins without React re-rendering anything. CSS in
 * index.css reacts to these attributes; nothing here knows about colour values
 * except the swatches used to draw the pickers themselves.
 */

export type Mode = 'light' | 'dark' | 'system'

export type DesignSettings = {
  mode: Mode
  theme: string
  accent: string
  type: string
  density: string
  corners: string
  borders: string
  shadow: string
  texture: string
}

export const DEFAULT_DESIGN: DesignSettings = {
  mode: 'system',
  theme: 'graphite',
  accent: 'theme',
  type: 'grotesk',
  density: 'dense',
  corners: 'square',
  borders: 'hairline',
  shadow: 'none',
  texture: 'grid',
}

export type Option = {
  id: string
  label: string
  hint?: string
  /** [light, dark] preview swatch pairs for the picker. */
  swatch?: { light: string[]; dark: string[] }
  color?: string
}

/** Palette + personality. Each one defines a light and a dark face. */
export const THEMES: Option[] = [
  {
    id: 'graphite',
    label: 'Graphite',
    hint: 'Warm near-black, ember accent',
    swatch: { light: ['#faf7f2', '#1a1714', '#ff6a3d'], dark: ['#0b0a09', '#f0ece4', '#ff6a3d'] },
  },
  {
    id: 'studytubby',
    label: 'Studytubby',
    hint: 'Cream paper, arcade orange',
    swatch: { light: ['#fffbf5', '#1c1410', '#ff8a3d'], dark: ['#14121f', '#f3f1fa', '#ff8a3d'] },
  },
  {
    id: 'bone',
    label: 'Bone',
    hint: 'Swiss clinical, cobalt rule',
    swatch: { light: ['#fbfaf8', '#14161a', '#2f5cff'], dark: ['#101214', '#eceef1', '#5b82ff'] },
  },
  {
    id: 'blueprint',
    label: 'Blueprint',
    hint: 'Cool slate, cyan drafting',
    swatch: { light: ['#f4f7fa', '#0f1b24', '#0b8fa8'], dark: ['#0a1016', '#dbe7ef', '#2fd3e8'] },
  },
  {
    id: 'phosphor',
    label: 'Phosphor',
    hint: 'Terminal green on black',
    swatch: { light: ['#f3f6f0', '#11170f', '#1f7a3d'], dark: ['#060a06', '#c8f5cd', '#4ef08a'] },
  },
  {
    id: 'ink',
    label: 'Ink',
    hint: 'Editorial black and white',
    swatch: { light: ['#ffffff', '#0a0a0a', '#c8252d'], dark: ['#0a0a0a', '#f5f5f5', '#ff4d55'] },
  },
  {
    id: 'dusk',
    label: 'Dusk',
    hint: 'Muted plum, soft violet',
    swatch: { light: ['#f8f6fa', '#1e1726', '#7a4fd0'], dark: ['#120f18', '#e9e4f0', '#a98bff'] },
  },
  {
    id: 'sage',
    label: 'Sage',
    hint: 'Herbarium green, clay accent',
    swatch: { light: ['#f6f7f2', '#1b211a', '#b4552f'], dark: ['#0e120d', '#e4e9df', '#e07a4d'] },
  },
]

/** Accent override. 'theme' keeps whatever the palette shipped with. */
export const ACCENTS: Option[] = [
  { id: 'theme', label: 'Theme default' },
  { id: 'ember', label: 'Ember', color: '#ff6a3d' },
  { id: 'amber', label: 'Amber', color: '#e8a317' },
  { id: 'lime', label: 'Lime', color: '#8fd13f' },
  { id: 'sea', label: 'Sea', color: '#17a98a' },
  { id: 'cyan', label: 'Cyan', color: '#19afd0' },
  { id: 'cobalt', label: 'Cobalt', color: '#3a68ff' },
  { id: 'violet', label: 'Violet', color: '#8b5cf6' },
  { id: 'rose', label: 'Rose', color: '#e8486f' },
]

/** Display + mono pairings. Families load on demand. */
export const TYPEFACES: Option[] = [
  { id: 'grotesk', label: 'Grotesk', hint: 'Space Grotesk · JetBrains Mono' },
  { id: 'arcade', label: 'Arcade', hint: 'Karla · Space Mono' },
  { id: 'neue', label: 'Neue', hint: 'Inter · IBM Plex Mono' },
  { id: 'editorial', label: 'Editorial', hint: 'Fraunces · IBM Plex Mono' },
  { id: 'humanist', label: 'Humanist', hint: 'Figtree · Space Mono' },
  { id: 'terminal', label: 'Terminal', hint: 'JetBrains Mono throughout' },
]

export const DENSITIES: Option[] = [
  { id: 'dense', label: 'Dense', hint: 'Smallest, most on screen' },
  { id: 'compact', label: 'Compact', hint: 'More on screen' },
  { id: 'normal', label: 'Normal' },
  { id: 'roomy', label: 'Roomy', hint: 'Easier to scan' },
]

export const CORNERS: Option[] = [
  { id: 'square', label: 'Square' },
  { id: 'soft', label: 'Soft' },
  { id: 'round', label: 'Round' },
  { id: 'pill', label: 'Pill' },
]

export const BORDERS: Option[] = [
  { id: 'hairline', label: 'Hairline' },
  { id: 'medium', label: 'Medium' },
  { id: 'bold', label: 'Bold', hint: '2px ink' },
]

export const SHADOWS: Option[] = [
  { id: 'none', label: 'Flat' },
  { id: 'soft', label: 'Soft' },
  { id: 'hard', label: 'Hard offset', hint: 'Arcade style' },
]

export const TEXTURES: Option[] = [
  { id: 'none', label: 'None' },
  { id: 'grid', label: 'Grid' },
  { id: 'dots', label: 'Dots' },
  { id: 'lines', label: 'Rule lines' },
]

export const MODES: Option[] = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
  { id: 'system', label: 'System', hint: 'Follows your device' },
]

/** Ready-made combinations, so a whole look is one click. */
export const PRESETS: { id: string; label: string; hint: string; design: Partial<DesignSettings> }[] = [
  {
    id: 'terminal-dark',
    label: 'Teaching terminal',
    hint: 'The house look, graphite, mono labels, hairlines',
    design: { theme: 'graphite', mode: 'dark', accent: 'theme', type: 'grotesk', density: 'normal', corners: 'square', borders: 'hairline', shadow: 'none', texture: 'grid' },
  },
  {
    id: 'studytubby',
    label: 'Studytubby',
    hint: 'Cream paper, fat ink borders, hard shadows',
    design: { theme: 'studytubby', mode: 'light', accent: 'theme', type: 'arcade', density: 'roomy', corners: 'round', borders: 'bold', shadow: 'hard', texture: 'dots' },
  },
  {
    id: 'swiss',
    label: 'Swiss lab',
    hint: 'Bone paper, cobalt rule, tight grid',
    design: { theme: 'bone', mode: 'light', accent: 'cobalt', type: 'neue', density: 'compact', corners: 'square', borders: 'hairline', shadow: 'none', texture: 'none' },
  },
  {
    id: 'drafting',
    label: 'Drafting table',
    hint: 'Blueprint slate and cyan',
    design: { theme: 'blueprint', mode: 'dark', accent: 'cyan', type: 'grotesk', density: 'normal', corners: 'soft', borders: 'hairline', shadow: 'soft', texture: 'grid' },
  },
  {
    id: 'crt',
    label: 'Green screen',
    hint: 'Phosphor terminal, mono throughout',
    design: { theme: 'phosphor', mode: 'dark', accent: 'theme', type: 'terminal', density: 'compact', corners: 'square', borders: 'hairline', shadow: 'none', texture: 'lines' },
  },
  {
    id: 'broadsheet',
    label: 'Broadsheet',
    hint: 'Editorial serif on white',
    design: { theme: 'ink', mode: 'light', accent: 'theme', type: 'editorial', density: 'roomy', corners: 'square', borders: 'medium', shadow: 'none', texture: 'lines' },
  },
  {
    id: 'evening',
    label: 'Evening',
    hint: 'Plum dusk, soft violet, rounded',
    design: { theme: 'dusk', mode: 'dark', accent: 'violet', type: 'humanist', density: 'roomy', corners: 'round', borders: 'hairline', shadow: 'soft', texture: 'none' },
  },
  {
    id: 'herbarium',
    label: 'Herbarium',
    hint: 'Sage paper, clay accent, calm',
    design: { theme: 'sage', mode: 'light', accent: 'theme', type: 'humanist', density: 'roomy', corners: 'soft', borders: 'hairline', shadow: 'soft', texture: 'dots' },
  },
]

// ---- font loading ----

const FONT_HREFS: Record<string, string> = {
  grotesk:
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
  arcade:
    'https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap',
  neue: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
  editorial:
    'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
  humanist:
    'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap',
  terminal: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap',
}

/** Idempotently add the stylesheet a typeface needs. */
export function loadTypeface(id: string) {
  const href = FONT_HREFS[id]
  if (!href || typeof document === 'undefined') return
  const existing = document.querySelector(`link[data-typeface="${id}"]`)
  if (existing) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  link.dataset.typeface = id
  document.head.appendChild(link)
}

// ---- applying ----

export const DESIGN_STORAGE_KEY = 'hypeman.design'

function valid<T extends { id: string }>(list: T[], value: unknown, fallback: string): string {
  return typeof value === 'string' && list.some((o) => o.id === value) ? value : fallback
}

/** Coerce anything (old saved blob, hand-edited JSON) into a usable settings object. */
export function normalizeDesign(raw: unknown): DesignSettings {
  const r = (raw ?? {}) as Partial<DesignSettings>
  return {
    mode: valid(MODES, r.mode, DEFAULT_DESIGN.mode) as Mode,
    theme: valid(THEMES, r.theme, DEFAULT_DESIGN.theme),
    accent: valid(ACCENTS, r.accent, DEFAULT_DESIGN.accent),
    type: valid(TYPEFACES, r.type, DEFAULT_DESIGN.type),
    density: valid(DENSITIES, r.density, DEFAULT_DESIGN.density),
    corners: valid(CORNERS, r.corners, DEFAULT_DESIGN.corners),
    borders: valid(BORDERS, r.borders, DEFAULT_DESIGN.borders),
    shadow: valid(SHADOWS, r.shadow, DEFAULT_DESIGN.shadow),
    texture: valid(TEXTURES, r.texture, DEFAULT_DESIGN.texture),
  }
}

export function systemPrefersDark(): boolean {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches
}

export function resolveMode(mode: Mode): 'light' | 'dark' {
  return mode === 'system' ? (systemPrefersDark() ? 'dark' : 'light') : mode
}

/** Write the settings onto <html> and make sure the fonts are on their way. */
export function applyDesign(design: DesignSettings, root: HTMLElement = document.documentElement) {
  const resolved = resolveMode(design.mode)
  root.dataset.theme = design.theme
  root.dataset.mode = resolved
  root.dataset.accent = design.accent
  root.dataset.type = design.type
  root.dataset.density = design.density
  root.dataset.corners = design.corners
  root.dataset.borders = design.borders
  root.dataset.shadow = design.shadow
  root.dataset.texture = design.texture
  // Lets form controls, scrollbars and the like match.
  root.style.colorScheme = resolved
  loadTypeface(design.type)
}

export function readStoredDesign(): DesignSettings {
  try {
    const raw = localStorage.getItem(DESIGN_STORAGE_KEY)
    return normalizeDesign(raw ? JSON.parse(raw) : null)
  } catch {
    return { ...DEFAULT_DESIGN }
  }
}

export function storeDesign(design: DesignSettings) {
  try {
    localStorage.setItem(DESIGN_STORAGE_KEY, JSON.stringify(design))
  } catch {
    /* private mode, blocked storage, the server copy still holds */
  }
}

/** Does this settings object match a preset exactly? */
export function matchingPreset(design: DesignSettings): string | null {
  for (const p of PRESETS) {
    if (Object.entries(p.design).every(([k, v]) => design[k as keyof DesignSettings] === v)) return p.id
  }
  return null
}
