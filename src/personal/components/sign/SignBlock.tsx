import type { Block } from '../../lib/archive/guide'
import { ChartPdf } from './ChartPdf'
import { Fingerspeller } from './Fingerspeller'
import { HandshapeGallery } from './HandshapeGallery'
import { Phrases } from './Phrases'
import { SignSettings } from './SignSettings'
import { WordCards } from './WordCards'

export type SignBlockType = Extract<Block, { t: 'handshapes' } | { t: 'signs' } | { t: 'sign-tool' }>

// The sign-language blocks, kept in their own chunk so the rest of the archive does not
// download the hand drawing code.
export default function SignBlock({ block, color }: { block: SignBlockType; color: string }) {
  switch (block.t) {
    case 'handshapes':
      return <HandshapeGallery set={block.set} only={block.only} color={color} />
    case 'signs':
      return <WordCards words={block.words} color={color} />
    case 'sign-tool':
      switch (block.tool) {
        case 'settings':
          return <SignSettings />
        case 'fingerspeller':
          return <Fingerspeller color={color} />
        case 'phrases':
          return <Phrases color={color} />
        case 'chart':
          return <ChartPdf />
      }
  }
}
