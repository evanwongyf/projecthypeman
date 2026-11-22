import type { Block } from '../../lib/archive/guide'
import { CardRow, TileRow, soft } from './shared'

type CardHandBlock = Extract<Block, { t: 'card-hand' }>
type TileHandBlock = Extract<Block, { t: 'tile-hand' }>

export function CardHand({ block }: { block: CardHandBlock }) {
  return (
    <figure className="flex max-w-3xl flex-col gap-2">
      {block.label && <figcaption className="text-xs font-bold">{block.label}</figcaption>}
      <CardRow cards={block.cards} size="lg" />
      {block.caption && (
        <p className="text-xs leading-relaxed" style={soft}>
          {block.caption}
        </p>
      )}
    </figure>
  )
}

export function TileHand({ block }: { block: TileHandBlock }) {
  return (
    <figure className="flex max-w-3xl flex-col gap-2">
      {block.label && <figcaption className="text-xs font-bold">{block.label}</figcaption>}
      <TileRow tiles={block.tiles} size="lg" />
      {block.caption && (
        <p className="text-xs leading-relaxed" style={soft}>
          {block.caption}
        </p>
      )}
    </figure>
  )
}
