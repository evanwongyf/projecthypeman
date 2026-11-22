import { FOOD_PHOTOS } from '../../lib/food/photos'

// A credited food photo. Renders nothing when the key has no photo, so a recipe without a
// picture still reads cleanly.
export function FoodPhoto({ id, className, ratio = '4 / 3' }: { id?: string; className?: string; ratio?: string }) {
  const p = id ? FOOD_PHOTOS[id] : undefined
  if (!p) return null
  return (
    <figure className={className}>
      <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="w-full rounded-[var(--radius)] object-cover" style={{ aspectRatio: ratio, background: 'var(--paper-2)' }} />
      <figcaption className="mt-1 text-[10px] leading-snug" style={{ color: 'var(--ink-soft)' }}>
        Photo: {p.author || 'Unknown author'} ·{' '}
        <a href={p.page} target="_blank" rel="noreferrer" className="underline">
          {p.license || 'see source'}
        </a>
        , via Wikimedia Commons
      </figcaption>
    </figure>
  )
}
