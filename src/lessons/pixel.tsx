import { memo, type CSSProperties } from 'react'

/**
 * Pixel art drawn from text grids. Each character is one pixel; '.' is
 * transparent. Rows are padded to the widest row, so a short row never breaks
 * a sprite. Rendered as SVG with crisp edges, so it scales to any size.
 */
type Palette = Record<string, string>

const BASE: Palette = {
  O: '#1d2238', // outline
  K: '#111111',
  W: '#ffffff',
  G: '#4fc35a',
  g: '#2e8a3c',
  L: '#b9f28a',
  R: '#e8423f',
  r: '#9e1f22',
  P: '#ff8fb8',
  Y: '#ffd23f',
  y: '#e0a400',
  B: '#3d7be0',
  b: '#1f4fa8',
  N: '#24305e',
  S: '#f2c39b',
  H: '#4a2c1a',
  C: '#7ff3ff',
  D: '#14213d',
  A: '#9aa3b5',
  E: '#d7dbe5',
  F: '#ff9a2e',
  T: '#8a5a32',
  V: '#a565f0',
}

export type SpriteDef = { rows: string[]; pal?: Palette }

export const SPRITES = {
  pip: {
    rows: [
      '..OOOO....OOOO..',
      '.OWWWWO..OWWWWO.',
      '.OWWKKO..OWWKKO.',
      '.OWWKKOOOOWWKKO.',
      'OGOOOOGGGGOOOOGO',
      'OGGGGGGGGGGGGGGO',
      'OGPPGGGGGGGGPPGO',
      'OGGGRGGGGGGRGGGO',
      'OGGGGRRRRRRGGGGO',
      '.OGGGGGGGGGGGGO.',
      '.OGLLLLLLLLLLGO.',
      'OGOLLLLLLLLLLOGO',
      'OGGOOOOOOOOOOGGO',
      '.OO..........OO.',
    ],
  },
  bolt: {
    rows: [
      '.......Y......',
      '.......O......',
      '..OOOOOOOOOO..',
      '.OBBBBBBBBBBO.',
      '.OBDDDDDDDDBO.',
      '.OBDCCDDCCDBO.',
      '.OBDCCDDCCDBO.',
      '.OBDDDDDDDDBO.',
      '.OBDDCCCCDDBO.',
      '.OBBBBBBBBBBO.',
      '..OOOOOOOOOO..',
      '...OEEEEEEO...',
      '.OOEEYEEREEOO.',
      'OEOEEEEEEEEOEO',
      'OO.OEEEEEEO.OO',
      '...OEEOOEEO...',
      '...OOO..OOO...',
    ],
  },
  jessie: {
    rows: [
      '...HHHHHH...',
      '..HHHHHHHH..',
      '.HHSSSSSSHH.',
      '.HSSSSSSSSH.',
      '.HSKSSSSKSH.',
      '.HSSSSSSSSH.',
      '.HSPSRRSPSH.',
      '..SSSSSSSS..',
      '...BBWWBB...',
      '..BBBWWBBB..',
      '.SBBBBBBBBS.',
      '.SBBBBBBBBS.',
      '..BBBBBBBB..',
      '...NN..NN...',
      '...SS..SS...',
      '..KKK..KKK..',
    ],
  },
  ravi: {
    rows: [
      '...KKKKKK...',
      '..KKKKKKKK..',
      '.KKTTTTTTKK.',
      '.KTTTTTTTTK.',
      '.KTKTTTTKTK.',
      '..TTTTTTTT..',
      '..TTTRRTTT..',
      '...TTTTTT...',
      '...WWWWWW...',
      '..WWWWWWWW..',
      '.TWWWWWWWWT.',
      '.TWWWWWWWWT.',
      '..NNNNNNNN..',
      '...NN..NN...',
      '...TT..TT...',
      '..KKK..KKK..',
    ],
  },
  apple: {
    rows: ['....Og..', '...Ogg..', '.RRORRR.', 'RRRRRRWR', 'RRRRRRRR', 'RRRRRRRR', '.RRRRRR.', '..RR.RR.'],
  },
  duck: {
    rows: ['...YYY....', '..YYKYFF..', '..YYYYFF..', '...YY.....', 'YYYYYYYY..', 'YyYYYYYYY.', '.YyyyyyYY.', '..YYYYYY..'],
  },
  star: {
    rows: ['....Y....', '....Y....', '...YYY...', 'YYYYYYYYY', '.YYYYYYY.', '..YYYYY..', '..YY.YY..', '.YY...YY.'],
  },
  fish: {
    rows: ['..FFFF..F.', '.FFFFFF.FF', 'FFWKFFFFFF', 'FFFFFFFFFF', '.FFFFFF.FF', '..FFFF..F.'],
  },
  flower: {
    rows: ['..PP.PP..', '.PPPPPPP.', 'PPPYYYPPP', '.PPYYYPP.', 'PPPYYYPPP', '.PPPPPPP.', '..PP.PP..', '....g....', '..g.g....', '...gg....'],
  },
  ladybug: {
    rows: ['..KKKK..', '.RRKKRR.', 'RKRKKRKR', 'RRRKKRRR', 'RKRKKRKR', '.RRKKRR.', '..K..K..'],
  },
  carrot: {
    rows: ['..g.g.', '...gg.', '.FFFF.', '.FFFF.', 'FFFFF.', '.FFFF.', '.FFF..', '..FF..', '..F...'],
  },
  rabbit: {
    rows: [
      '.AA..AA...',
      '.AP..PA...',
      '.AP..PA...',
      'AWWWWWWA..',
      'AWKWWKWA..',
      'AWWPPWWA..',
      '.AWWWWA...',
      'AWWWWWWWA.',
      'AWWWWWWWWA',
      '.AWWAAWWA.',
    ],
    pal: { A: '#6f7890' },
  },
  butterfly: {
    rows: ['..K...K..', '...K.K...', '.VV.K.VV.', 'VPPVKVPPV', 'VPPVKVPPV', '.VVVKVVV.', '..VPKPV..', '.VPPKPPV.', '.VVV.VVV.'],
  },
  sun: {
    rows: ['....Y....', '.Y..Y..Y.', '..YYYYY..', '..YYYYY..', 'YYYYYYYYY', '..YYYYY..', '..YYYYY..', '.Y..Y..Y.', '....Y....'],
  },
  bus: {
    rows: [
      '.GGGGGGGGGGGG.',
      'GWWGWWGWWGWWGG',
      'GWWGWWGWWGWWCG',
      'GGGGGGGGGGGGCG',
      'GGGGGGGGGGGGYG',
      'gggggggggggggg',
      '.OO.......OO..',
    ],
  },
  block: {
    rows: ['EEEEEEEEEE', 'ECCECCECCE', 'EEEEEEEEEE', 'ECCECCECCE', 'EEEEEEEEEE', 'ECCECCECCE', 'EEEEEEEEEE', 'ECCECCECCE', 'EEEEEEEEEE', 'ECCETTECCE', 'EEEETTEEEE'],
    pal: { E: '#e9e3d0', C: '#6fb6e8', T: '#8a5a32' },
  },
  crayon: { rows: ['.R.', 'RRR', 'rRr', 'RRR', 'RRR', 'RRR', 'rRr', 'RRR'] },
  shirt: {
    rows: ['.BBB..BBB.', 'BBBBWWBBBB', 'BBBBBBBBBB', '.BBBBBBBB.', '..BBBBBB..', '..BBBBBB..', '..BBBBBB..', '..BBBBBB..'],
  },
  cupcake: {
    rows: ['....R....', '..PPPPP..', '.PPWPPPP.', 'PPPPPPWPP', '.TyTyTyT.', '.TyTyTyT.', '..TyTyT..'],
  },
  melon: {
    rows: ['...GGGG...', '.GGgGGgGG.', 'GGgGGgGGgG', 'GgGGgGGgGG', 'GGgGGgGGgG', '.GGgGGgGG.', '...GGGG...'],
  },
  cherry: { rows: ['...g.', '..g.g', '.g..g', 'RR.RR', 'RRrRR', '.R..R'] },
  choc: { rows: ['TTTTTTTT', 'TyTTyTTy', 'TTTTTTTT', 'TyTTyTTy', 'TTTTTTTT'], pal: { T: '#6b3e1f', y: '#8f5a32' } },
  lily: { rows: ['..GGGGGG..', '.GGGGGGGG.', 'GGGGGGGGGG', 'GGGG..GGGG', '.GGG..GGG.'], pal: { G: '#3fae55' } },
  tree: {
    rows: [
      '...gggg...',
      '.ggGGGGgg.',
      'gGGGGLGGGg',
      'gGLGGGGGGg',
      'gGGGGGGLGg',
      '.gGGGGGGg.',
      '..ggTTgg..',
      '....TT....',
      '....TT....',
      '...TTTT...',
    ],
  },
  heart: { rows: ['.RR.RR.', 'RRRRRRR', 'RWRRRRR', 'RRRRRRR', '.RRRRR.', '..RRR..', '...R...'] },
  trophy: { rows: ['YYYYYYYY', 'YWYYYYYY', '.YYYYYY.', '..YYYY..', '...YY...', '...YY...', '..yyyy..', '.yyyyyy.'] },
  counterRed: { rows: ['.RRRR.', 'RRWRRR', 'RRRRRR', 'RRRRRR', 'rRRRRr', '.rrrr.'] },
  cube: { rows: ['..RR..', 'OOOOOO', 'ORRRRO', 'ORWRRO', 'ORRRRO', 'OrrrrO', 'OOOOOO'] },
  tomato: { rows: ['..gGg...', '.RRgRR..', 'RRRRRRR.', 'RWRRRRR.', 'RRRRRRR.', '.rRRRr..', '..rrr...'] },
  shell: { rows: ['...FF...', '.FyFFyF.', 'FyFFyFFy', 'FyFFyFFy', '.FyFyFy.', '..FFFF..', '...FF...'], pal: { F: '#ffb38a', y: '#e07a4f' } },
  coin: { rows: ['.yyyy.', 'yYYYYy', 'yYWYYy', 'yYYYYy', 'yYYYYy', '.yyyy.'] },
  beanbag: { rows: ['.BBBB.', 'BBWBBB', 'BBBBBB', 'BbBBbB', '.bbbb.'] },
  bun: { rows: ['..TTTT..', '.TyyyyT.', 'TyWyyyyT', 'TyyyyyyT', 'TTTTTTTT'], pal: { T: '#a8622a', y: '#e8a85a' } },
  cap: { rows: ['..RRRR..', '.RRRRRR.', 'RRWRRRRR', 'RRRRRRRR', 'rrrrrrrrrr'] },
  balloon: { rows: ['.RRRR.', 'RRWRRR', 'RWRRRR', 'RRRRRR', 'RRRRRR', '.RRRR.', '..rr..', '...K..', '..K...', '...K..', '..K...'] },
  mango: { rows: ['....g.', '..YYF.', '.YYYFF', 'YYWYFF', 'YYYFFF', 'YYFFFF', '.YFFF.', '..FF..'] },
  counterYellow: { rows: ['.YYYY.', 'YYWYYY', 'YYYYYY', 'YYYYYY', 'yYYYYy', '.yyyy.'] },
} satisfies Record<string, SpriteDef>

export type SpriteName = keyof typeof SPRITES

/** Every object a counting activity can use, with its plural label. */
export const THINGS: { sprite: SpriteName; one: string; many: string }[] = [
  { sprite: 'duck', one: 'duck', many: 'ducks' },
  { sprite: 'fish', one: 'fish', many: 'fish' },
  { sprite: 'flower', one: 'flower', many: 'flowers' },
  { sprite: 'ladybug', one: 'ladybird', many: 'ladybirds' },
  { sprite: 'apple', one: 'apple', many: 'apples' },
  { sprite: 'star', one: 'star', many: 'stars' },
  { sprite: 'butterfly', one: 'butterfly', many: 'butterflies' },
  { sprite: 'cupcake', one: 'cupcake', many: 'cupcakes' },
  { sprite: 'carrot', one: 'carrot', many: 'carrots' },
  { sprite: 'rabbit', one: 'rabbit', many: 'rabbits' },
  { sprite: 'tomato', one: 'tomato', many: 'tomatoes' },
  { sprite: 'shell', one: 'shell', many: 'shells' },
  { sprite: 'bun', one: 'bun', many: 'buns' },
  { sprite: 'cube', one: 'cube', many: 'cubes' },
  { sprite: 'cherry', one: 'strawberry', many: 'strawberries' },
  { sprite: 'coin', one: 'coin', many: 'coins' },
  { sprite: 'balloon', one: 'balloon', many: 'balloons' },
  { sprite: 'mango', one: 'mango', many: 'mangoes' },
]

export function thing(sprite: SpriteName) {
  return THINGS.find((t) => t.sprite === sprite) ?? { sprite, one: sprite, many: `${sprite}s` }
}

function build(def: SpriteDef, pal?: Palette) {
  const p = { ...BASE, ...def.pal, ...pal }
  const w = Math.max(...def.rows.map((r) => r.length))
  const rects: { x: number; y: number; w: number; c: string }[] = []
  def.rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const ch = row[x]
      const c = p[ch]
      if (!c) {
        x++
        continue
      }
      let run = 1
      while (row[x + run] === ch) run++
      rects.push({ x, y, w: run, c })
      x += run
    }
  })
  return { w, h: def.rows.length, rects }
}

const cache = new Map<string, ReturnType<typeof build>>()

export const Sprite = memo(function Sprite({
  name,
  size = 3,
  pal,
  flip,
  className,
  style,
  title,
}: {
  name: SpriteName
  /** Height in em. */
  size?: number
  pal?: Palette
  flip?: boolean
  className?: string
  style?: CSSProperties
  title?: string
}) {
  const key = pal ? `${name}:${JSON.stringify(pal)}` : name
  let art = cache.get(key)
  if (!art) {
    art = build(SPRITES[name], pal)
    cache.set(key, art)
  }
  return (
    <svg
      viewBox={`0 0 ${art.w} ${art.h}`}
      shapeRendering="crispEdges"
      className={className}
      style={{ height: `${size}em`, width: `${(size * art.w) / art.h}em`, transform: flip ? 'scaleX(-1)' : undefined, display: 'block', ...style }}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {art.rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={1} fill={r.c} />
      ))}
    </svg>
  )
})

export const CAST = {
  pip: { name: 'Pip', sprite: 'pip' as SpriteName, colour: '#4fc35a' },
  bolt: { name: 'Bolt', sprite: 'bolt' as SpriteName, colour: '#3d7be0' },
  jessie: { name: 'Jessie', sprite: 'jessie' as SpriteName, colour: '#ff8fb8' },
  ravi: { name: 'Ravi', sprite: 'ravi' as SpriteName, colour: '#ffb03f' },
}
export type CastId = keyof typeof CAST
