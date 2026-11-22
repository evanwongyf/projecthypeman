import type { Block } from '../../lib/archive/guide'
import { FOOD_PHOTOS } from '../../lib/food/photos'
import { FoodPhoto } from './Photo'

type FoodPhotosT = Extract<Block, { t: 'food-photos' }>

export default function FoodPhotos({ block, color }: { block: FoodPhotosT; color: string }) {
  return (
    <div className="grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {block.items.map((it) => (
        <div key={it.title} className="card-surface flex flex-col gap-1.5 rounded-[var(--radius)] p-2" style={{ borderTop: `4px solid ${color}` }}>
          {FOOD_PHOTOS[it.photo] ? <FoodPhoto id={it.photo} ratio="1 / 1" /> : <div className="rounded-[var(--radius)]" style={{ aspectRatio: '1 / 1', background: 'var(--paper-2)' }} />}
          <p className="text-sm font-bold leading-tight">{it.title}</p>
          <p className="text-xs leading-snug" style={{ color: 'var(--ink-soft)' }}>{it.body}</p>
        </div>
      ))}
    </div>
  )
}
