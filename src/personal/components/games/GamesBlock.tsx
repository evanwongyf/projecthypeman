import type { Block } from '../../lib/archive/guide'
import { StrategyChart, CountSimulator } from './Blackjack'
import { HandRanks, OddsCalculator, BluffFrequency } from './Poker'
import { TileExplorer, HandBuilder, GameplayWalkthrough } from './Mahjong'

type GamesVizBlock = Extract<Block, { t: 'games-viz' }>

export default function GamesBlock({ block, color }: { block: GamesVizBlock; color: string }) {
  switch (block.viz) {
    case 'blackjack-strategy':
      return <StrategyChart color={color} />
    case 'blackjack-count':
      return <CountSimulator color={color} />
    case 'poker-hand-ranks':
      return <HandRanks color={color} />
    case 'poker-odds':
      return <OddsCalculator color={color} />
    case 'poker-bluff':
      return <BluffFrequency color={color} />
    case 'mahjong-tiles':
      return <TileExplorer color={color} />
    case 'mahjong-hand':
      return <HandBuilder color={color} />
    case 'mahjong-gameplay':
      return <GameplayWalkthrough color={color} />
    default:
      return null
  }
}
