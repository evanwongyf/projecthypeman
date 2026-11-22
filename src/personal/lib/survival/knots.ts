import { wrapPts } from './rope'
import type { Diagram, Pt, Strand } from './rope'

export type KnotStep = { title: string; text: string; diagram: Diagram }
export type KnotDef = { id: string; name: string; steps: KnotStep[] }

const ROPE = '#e07b2a'
const END = '#2b6cd9'

// An open trefoil (the shape of an overhand knot) with tails, centred on (cx, cy) and scaled by s.
// `cut` is where around the knot the rope is cut open, `slack` pulls it tighter or looser.
function trefoil(cx: number, cy: number, s: number, cut: number, tail: number): Pt[] {
  const pts: Pt[] = []
  const N = 24
  for (let i = 0; i <= N; i++) {
    const t = cut + (i / N) * 2 * Math.PI
    const x = Math.sin(t) + 2 * Math.sin(2 * t)
    const y = Math.cos(t) - 2 * Math.cos(2 * t)
    const z = -Math.sin(3 * t) * 3
    pts.push([cx + x * s, cy + y * s, z])
  }
  const ext = (a: Pt, b: Pt): Pt => {
    const dx = a[0] - b[0], dy = a[1] - b[1]
    const l = Math.hypot(dx, dy) || 1
    return [a[0] + (dx / l) * tail, a[1] + (dy / l) * tail, a[2]]
  }
  const first = ext(pts[0], pts[2])
  const last = ext(pts[N], pts[N - 2])
  return [ext(first, pts[0]), first, ...pts, last, ext(last, pts[N])]
}

const overhand: KnotDef = {
  id: 'overhand',
  name: 'Overhand knot',
  steps: [
    {
      title: 'Make a loop',
      text: 'Lay the working end (blue) across the standing part so the rope crosses itself and makes a loop.',
      diagram: {
        strands: [
          {
            pts: [[20, 165, 0], [95, 165, 0], [165, 152, 0], [225, 120, 0], [245, 70, 0], [212, 32, 0], [162, 38, 0], [140, 85, 0], [150, 128, 2], [158, 170, 2], [170, 210, 2], [176, 232, 2]],
            tail: { from: 8, color: END },
          },
        ],
        labels: [
          { x: 52, y: 150, text: 'standing part' },
          { x: 210, y: 228, text: 'working end' },
          { x: 195, y: 85, text: 'loop' },
        ],
      },
    },
    {
      title: 'Pass the end through',
      text: 'Bring the working end round behind the standing part and up through the loop, front to back.',
      diagram: {
        strands: [
          {
            pts: [[20, 165, 0], [95, 165, 0], [165, 152, 0], [225, 120, 0], [245, 70, 0], [212, 32, 0], [162, 38, 0], [140, 85, 0], [150, 128, 2], [158, 170, 2], [140, 205, -2], [105, 190, -2], [90, 130, -2], [130, 90, -2], [175, 80, 3]],
            tail: { from: 8, color: END },
          },
        ],
        arrows: [{ from: [175, 80], to: [200, 50], bend: -6 }],
        labels: [{ x: 70, y: 215, text: 'under, then up' }],
      },
    },
    {
      title: 'Pull it tight',
      text: 'Hold the standing part and the working end and pull them apart. The knot closes into a small, hard lump.',
      diagram: { strands: [{ pts: trefoil(180, 130, 24, Math.PI, 34), tail: { from: 24, color: END } }] },
    },
  ],
}


// ── clove hitch ───────────────────────────────────────────────────────────
// Drawn on a vertical pole centred on x = 180. Each pass is one half of a turn: the front pass
// goes left to right across the pole (nearest the viewer), the back pass returns behind it.
const CX = 180
const POLE: Strand = { kind: 'spar', pts: [[CX, 4], [CX, 236]], w: 44, z: 0 }
const pass = (a0: number, a1: number, y0: number, y1: number, r: number): Pt[] => wrapPts(CX, r, a0, a1, y0, y1, 45)
const join = (...parts: Pt[][]): Pt[] => parts.flatMap((p, i) => (i === 0 ? p : p.slice(1)))
const withTail = (body: Pt[], tail: Pt[], color = END): Strand => ({ pts: join(body, tail), tail: { from: body.length - 1, color }, w: 10 })

const F1 = (): Pt[] => pass(-90, 90, 66, 98, 31)
const B1 = (): Pt[] => pass(90, 270, 98, 134, 34)
const F2 = (): Pt[] => pass(-90, 90, 134, 68, 38)
const B2 = (): Pt[] => pass(90, 270, 68, 110, 34)
const F3 = (): Pt[] => pass(-90, 90, 110, 146, 31)
const lead = (): Pt[] => [[10, 54, 40], [70, 60, 40], [130, 64, 22]]

const clove: KnotDef = {
  id: 'clove-hitch',
  name: 'Clove hitch',
  steps: [
    {
      title: 'Take one turn round the pole',
      text: 'Pass the rope in front of the pole, round the back and out the other side. The loose end comes out lower than where it went in.',
      diagram: {
        strands: [POLE, withTail(join(lead(), F1(), B1()), [[112, 142, 28], [70, 152, 30], [30, 150, 30]])],
        labels: [{ x: 60, y: 40, text: 'standing part' }, { x: 70, y: 178, text: 'working end' }],
      },
    },
    {
      title: 'Cross over the standing part',
      text: 'Bring the working end up and across the front, over the rope you have just laid. The two cross in an X.',
      diagram: {
        strands: [POLE, withTail(join(lead(), F1(), B1(), F2()), [[232, 62, 14], [262, 54, 4]])],
        arrows: [{ from: [96, 170], to: [168, 118], bend: 12 }],
        labels: [{ x: 60, y: 40, text: 'standing part' }, { x: 296, y: 40, text: 'working end' }],
      },
    },
    {
      title: 'Go round again and tuck under',
      text: 'Take the working end round the back a second time. Slide it under the diagonal rope on the front and let it come out the far side.',
      diagram: {
        strands: [POLE, withTail(join(lead(), F1(), B1(), F2(), B2(), F3()), [[236, 152, 26], [282, 164, 30], [340, 170, 30]])],
        arrows: [{ from: [96, 184], to: [160, 140], bend: 12 }],
        labels: [{ x: 60, y: 40, text: 'standing part' }, { x: 296, y: 154, text: 'working end' }],
      },
    },
    {
      title: 'Check it and pull tight',
      text: 'Two parallel ropes pinned down by one diagonal rope, with the ends leaving on opposite sides. Pull both ends to snug it onto the pole.',
      diagram: {
        strands: [POLE, withTail(join(lead(), F1(), B1(), F2(), B2(), F3()), [[236, 152, 26], [282, 164, 30], [340, 170, 30]])],
        arrows: [{ from: [100, 62], to: [30, 56] }, { from: [270, 162], to: [340, 172] }],
        labels: [{ x: 180, y: 22, text: 'one diagonal pins two parallels' }],
      },
    },
  ],
}

// ── reef knot ─────────────────────────────────────────────────────────────
// The finished knot is two bights, one in each rope, hooked through each other. Each rope's
// standing part and tail leave on the same side, which is what tells a reef from a granny.
const arcPts = (xc: number, yc: number, r: number, bendRight: boolean, z: number): Pt[] =>
  [90, 55, 20, -20, -55, -90].map((deg) => {
    const t = (deg * Math.PI) / 180
    const dx = r * Math.cos(t)
    return [bendRight ? xc + dx : xc - dx, yc + r * Math.sin(t), z] as Pt
  })

const hooked = (tight: boolean): Strand[] => {
  const r = tight ? 17 : 40
  const ya = tight ? 118 : 108 // A's centre line
  const yb = tight ? 142 : 150 // B's centre line
  const xa = tight ? 210 : 214 // A's bend
  const xb = tight ? 150 : 146 // B's bend
  return [
    {
      color: ROPE,
      pts: [[8, ya + r, 0], [60, ya + r, 0], [xa - 20, ya + r, 0], ...arcPts(xa, ya, r, true, 2), [xa - 20, ya - r, 0], [120, ya - r, 0], [70, ya - r - 6, 0], [38, ya - r - 20, 0]],
    },
    {
      color: END,
      pts: [[352, yb + r, 0], [300, yb + r, 0], [xb + 20, yb + r, 0], ...arcPts(xb, yb, r, false, 2), [xb + 20, yb - r, 0], [240, yb - r, 0], [290, yb - r - 4, 0], [322, yb - r - 16, 0]],
    },
  ]
}

const reef: KnotDef = {
  id: 'reef',
  name: 'Reef knot',
  steps: [
    {
      title: 'Right end over left end',
      text: 'Hold one end in each hand. Cross the right-hand end (blue) over the left-hand end (orange).',
      diagram: {
        strands: [
          { pts: [[8, 150, 0], [120, 150, 0], [190, 140, 0], [250, 90, 0]], color: ROPE },
          { pts: [[352, 150, 0], [240, 150, 0], [170, 140, 2], [110, 90, 0]], color: END },
        ],
        labels: [{ x: 60, y: 175, text: 'left rope' }, { x: 300, y: 175, text: 'right rope' }],
      },
    },
    {
      title: 'Wrap it under and up',
      text: 'Take the right-hand end down behind the left rope and bring it up in front again. This is the first half knot: the blue rope has made one full turn round the orange.',
      diagram: {
        strands: [
          { pts: [[8, 150, 0], [120, 150, 0], [200, 150, 0], [320, 150, 0]], color: ROPE },
          { pts: [[352, 100, 0], [282, 100, 0], [226, 116, 0], [196, 150, 3], [182, 186, 3], [152, 208, 3], [120, 190, 3], [116, 160, 3], [124, 144, -3], [140, 108, -3], [152, 84, -3]], color: END },
        ],
        labels: [{ x: 56, y: 175, text: 'left rope' }, { x: 300, y: 128, text: 'right rope' }],
      },
    },
    {
      title: 'Left over right, and under',
      text: 'Now do the same with the other rope, the other way round: left over right, then wrap it under and up. Each rope ends up as a bight hooked through the other, with its own tail beside its own standing part.',
      diagram: { strands: hooked(false), labels: [{ x: 56, y: 190, text: 'left rope' }, { x: 304, y: 190, text: 'right rope' }, { x: 70, y: 76, text: 'tail' }, { x: 308, y: 106, text: 'tail' }] },
    },
    {
      title: 'Pull tight and check',
      text: 'Pull both standing parts. Check that each tail leaves on the same side as its own standing part. If a tail and its standing part leave on opposite sides, you have a granny knot.',
      diagram: {
        strands: hooked(true),
        arrows: [{ from: [92, 138], to: [24, 138] }, { from: [270, 150], to: [338, 150] }],
        labels: [{ x: 70, y: 92, text: 'tail' }, { x: 304, y: 112, text: 'tail' }],
      },
    },
  ],
}

// ── bowline ───────────────────────────────────────────────────────────────
// The standing part comes down from the top; a small loop (the "hole") is made in it. The
// working end (the "rabbit") comes up through the hole, goes round the standing part (the "tree"),
// and back down the hole. The big loop on the left is the eye.
const bowSpine: Pt[] = [[235, 4, 0], [235, 45, 0], [235, 85, 0], [236, 112, 0], [240, 130, 0], [250, 152, 0], [272, 168, 0], [298, 160, 0], [310, 138, 0], [296, 115, 1], [268, 108, 1], [250, 112, 2], [232, 124, 2]]
const bowEye: Pt[] = [[212, 134, 1], [185, 150, 0], [166, 182, 0], [180, 214, 0], [228, 226, 0], [272, 214, -1]]
const bowUp: Pt[] = [[282, 190, -3], [280, 170, -3], [272, 150, -3], [266, 132, 0], [262, 114, 4], [250, 92, 4]]
const bowAround: Pt[] = [[236, 68, -4], [214, 56, -4], [198, 72, 0], [206, 90, 4], [226, 99, 4], [250, 110, 4]]
const bowDown: Pt[] = [[258, 130, 0], [260, 152, -3], [255, 168, -3], [236, 186, -3], [205, 196, -3], [188, 186, -3]]
const bowTail = (...parts: Pt[][]): Strand => {
  const body = [...bowSpine, ...bowEye]
  return { pts: [...body, ...parts.flat()], tail: { from: body.length - 1, color: END } }
}

const bowline: KnotDef = {
  id: 'bowline',
  name: 'Bowline',
  steps: [
    {
      title: 'Make the rabbit hole',
      text: 'Leave a long tail, and twist a small loop into the standing part with the rope crossing over itself. This small loop is the hole.',
      diagram: {
        strands: [{ pts: [...bowSpine, [212, 134, 1], [165, 160, 1], [110, 186, 1], [50, 206, 1]], tail: { from: bowSpine.length - 1, color: END } }],
        labels: [{ x: 290, y: 76, text: 'standing part' }, { x: 292, y: 190, text: 'hole' }, { x: 80, y: 224, text: 'tail (the rabbit)' }],
      },
    },
    {
      title: 'Up through the hole',
      text: 'Make the eye as big as you need, then bring the tail up through the hole from underneath.',
      diagram: {
        strands: [bowTail(bowUp)],
        arrows: [{ from: [250, 90], to: [236, 74], bend: -6 }],
        labels: [{ x: 290, y: 76, text: 'standing part' }, { x: 120, y: 120, text: 'eye' }, { x: 296, y: 190, text: 'hole' }],
      },
    },
    {
      title: 'Round the tree and back down',
      text: 'Take the tail round behind the standing part (the tree), then back down through the hole.',
      diagram: {
        strands: [bowTail(bowUp, bowAround, bowDown)],
        labels: [{ x: 290, y: 60, text: 'standing part' }, { x: 120, y: 120, text: 'eye' }, { x: 150, y: 170, text: 'tail' }],
      },
    },
    {
      title: 'Hold the tail and pull tight',
      text: 'Hold the eye and the tail together, and pull the standing part. The tail should finish inside the eye, running alongside it.',
      diagram: {
        strands: [bowTail(bowUp, bowAround, bowDown)],
        arrows: [{ from: [235, 36], to: [235, 6] }],
        labels: [{ x: 130, y: 120, text: 'eye' }, { x: 150, y: 170, text: 'tail inside' }],
      },
    },
  ],
}

// ── figure of eight ───────────────────────────────────────────────────────
const loopBody: Pt[] = [[20, 165, 0], [95, 165, 0], [165, 152, 0], [225, 120, 0], [245, 70, 0], [212, 32, 0], [162, 38, 0], [140, 85, 0], [150, 128, 2], [158, 170, 2]]

const figure8: KnotDef = {
  id: 'figure8',
  name: 'Figure of eight',
  steps: [
    {
      title: 'Make a loop',
      text: 'Make a loop with the working end crossing over the standing part, with a good length of tail left over.',
      diagram: {
        strands: [{ pts: [...loopBody, [170, 210, 2], [176, 234, 2]], tail: { from: 8, color: END } }],
        labels: [{ x: 52, y: 150, text: 'standing part' }, { x: 220, y: 226, text: 'working end' }, { x: 195, y: 85, text: 'loop' }],
      },
    },
    {
      title: 'Round the standing part',
      text: 'Take the working end round behind the standing part and up the other side. This extra half turn is what makes it a figure of eight and not an overhand knot.',
      diagram: {
        strands: [{ pts: [...loopBody, [140, 205, 2], [96, 200, -2], [82, 168, -2], [88, 134, -2], [112, 114, -2]], tail: { from: 8, color: END } }],
        arrows: [{ from: [118, 112], to: [150, 98], bend: -8 }],
        labels: [{ x: 56, y: 150, text: 'standing part' }],
      },
    },
    {
      title: 'Down through the loop',
      text: 'Pass the working end down through the loop, from the front to the back.',
      diagram: {
        strands: [{ pts: [...loopBody, [140, 205, 2], [96, 200, -2], [82, 168, -2], [88, 134, -2], [112, 114, -2], [145, 98, 3], [190, 96, 3], [236, 108, -3], [272, 130, -3]], tail: { from: 8, color: END } }],
        labels: [{ x: 56, y: 150, text: 'standing part' }],
      },
    },
    {
      title: 'Dress and pull tight',
      text: 'Pull the standing part and the working end apart until the knot closes. A good figure of eight is neat: two parallel ropes on each side of the knot, with nothing crossed over.',
      diagram: {
        strands: [{ pts: [...loopBody, [140, 205, 2], [96, 200, -2], [82, 168, -2], [88, 134, -2], [112, 114, -2], [145, 98, 3], [190, 96, 3], [236, 108, -3], [272, 130, -3]], tail: { from: 8, color: END } }],
        arrows: [{ from: [60, 175], to: [14, 178] }, { from: [250, 125], to: [310, 150] }],
        labels: [{ x: 56, y: 200, text: 'standing part' }, { x: 300, y: 124, text: 'working end' }],
      },
    },
  ],
}

// ── lashings ──────────────────────────────────────────────────────────────
const WOOD = '#b9854f'
const upright = (x: number): Strand => ({ kind: 'spar', pts: [[x, 4], [x, 236]], w: 40, z: 0, color: WOOD })
const LW = 7

// One round of a square lashing: up the right in front of the crosspiece, left behind the upright,
// down the left in front of the crosspiece, right behind the upright. `k` moves each round outwards.
const squareTurn = (k: number): Pt[] => {
  const xr = 207 + k * 8, xl = 153 - k * 8, yt = 91 - k * 8, yb = 145 + k * 8
  return [
    [xr, yb - 4, 2], [xr, yb - 24, 2], [xr, yt + 24, 2], [xr - 1, yt + 6, 0.5], [xr - 12, yt, -1], [180, yt, -1], [xl + 12, yt, -1], [xl + 1, yt + 6, 0.5],
    [xl, yt + 24, 2], [xl, yb - 24, 2], [xl, yb - 4, 2], [xl + 1, yb, 0.5], [xl + 12, yb, -1], [180, yb, -1], [xr - 12, yb, -1],
  ]
}
const squareSpars = (): Strand[] => [upright(180), { kind: 'spar', pts: [[24, 118], [336, 118]], w: 40, z: 1, color: WOOD }]
const hitchBelow = (): Pt[] =>
  join(
    [[96, 196, 40], [140, 190, 30]],
    wrapPts(180, 26, -90, 90, 172, 180, 45),
    wrapPts(180, 28, 90, 270, 180, 190, 45),
    wrapPts(180, 30, -90, 90, 190, 176, 45),
    wrapPts(180, 28, 90, 270, 176, 186, 45),
    wrapPts(180, 26, -90, 90, 186, 196, 45),
  )
const lashStart: Pt[] = [[214, 190, 20], [214, 172, 10], [211, 156, 4]]

const squareLashing: KnotDef = {
  id: 'square-lashing',
  name: 'Square lashing',
  steps: [
    {
      title: 'Clove hitch on the upright',
      text: 'Put the crosspiece in front of the upright. Tie a clove hitch round the upright, just below the crosspiece, and lay the short tail along the standing part.',
      diagram: {
        strands: [...squareSpars(), { pts: [...hitchBelow(), ...lashStart], tail: { from: 0, color: END }, w: LW }],
        labels: [{ x: 70, y: 96, text: 'crosspiece' }, { x: 268, y: 222, text: 'upright' }, { x: 88, y: 222, text: 'clove hitch' }],
      },
    },
    {
      title: 'Three or four tight turns',
      text: 'Take the rope up over the front of the crosspiece, behind the upright, down over the front of the crosspiece and behind the upright again. Keep the turns side by side and pull each one tight.',
      diagram: {
        strands: [...squareSpars(), { pts: [...hitchBelow(), ...lashStart, ...squareTurn(0), ...squareTurn(1), ...squareTurn(2)], color: ROPE, w: LW }],
        labels: [{ x: 280, y: 62, text: 'over the crosspiece,' }, { x: 280, y: 78, text: 'behind the upright' }],
      },
    },
    {
      title: 'Frap and finish',
      text: 'Pull the turns tight, then wrap two or three frapping turns between the poles, round the lashing turns, and finish with a clove hitch on the crosspiece.',
      diagram: {
        strands: [...squareSpars(), { pts: [...hitchBelow(), ...lashStart, ...squareTurn(0), ...squareTurn(1), ...squareTurn(2), [212, 148, 3], [244, 150, 1], [296, 146, 1]], color: ROPE, tail: { from: 12 + 3 + 45, color: END }, w: LW }],
        labels: [{ x: 180, y: 28, text: 'frapping turns lie between the poles, out of sight' }],
      },
    },
  ],
}

// A belt of rope round two poles: across the front, round the right end and back behind them.
const belt = (x0: number, y0: number, x1: number, y1: number, dy = 14, round = 14): Pt[] => [
  [x0, y0, 2], [(x0 * 2 + x1) / 3, y0 + (y1 - y0) / 3, 2], [(x0 + x1 * 2) / 3, y0 + ((y1 - y0) * 2) / 3, 2], [x1, y1, 2],
  [x1 + round, y1 + dy / 3, 0.5], [x1 + 2, y1 + dy * 0.7, -1], [(x0 + x1 * 2) / 3, y0 + ((y1 - y0) * 2) / 3 + dy, -1], [(x0 * 2 + x1) / 3, y0 + (y1 - y0) / 3 + dy, -1], [x0, y0 + dy, -1],
  [x0 - round, y0 + dy + 4, 0.5],
]

const shearPoles = (): Strand[] => [
  { kind: 'spar', pts: [[132, 4], [132, 236]], w: 34, z: 0, color: WOOD },
  { kind: 'spar', pts: [[228, 4], [228, 236]], w: 34, z: 0, color: WOOD },
]
const shearBelts = (n: number): Pt[] => Array.from({ length: n }, (_, k) => belt(104, 70 + k * 18, 256, 72 + k * 18)).flat()

const shearLashing: KnotDef = {
  id: 'shear-lashing',
  name: 'Shear lashing',
  steps: [
    {
      title: 'Lay the poles side by side',
      text: 'Lay the two poles together, with the butts level. Tie a clove hitch round one pole, with the tail along the standing part.',
      diagram: {
        strands: [...shearPoles(), { pts: [[60, 70, 20], [104, 70, 2], [132, 71, 2], [228, 73, 2], [256, 74, 2], [270, 78, 0.5], [258, 84, -1]], tail: { from: 0, color: END }, w: LW }],
        labels: [{ x: 60, y: 54, text: 'clove hitch, then lash' }],
      },
    },
    {
      title: 'Wind the lashing turns',
      text: 'Wind the rope round both poles, six to eight tight turns, each lying beside the last. Keep the rope tight enough to feel the poles pulled together.',
      diagram: {
        strands: [...shearPoles(), { pts: [[60, 70, 20], ...shearBelts(5), [104, 164, 2]], tail: { from: 0, color: ROPE }, color: ROPE, w: LW }],
        labels: [{ x: 180, y: 28, text: 'turns round both poles' }],
      },
    },
    {
      title: 'Frap between the poles',
      text: 'Finish with two or three frapping turns between the poles, wound round the lashing turns to bind them tight, and end with a clove hitch on the second pole.',
      diagram: {
        strands: [
          ...shearPoles(),
          { pts: [[60, 70, 20], ...shearBelts(5), [104, 164, 2]], color: ROPE, w: LW },
          { pts: [[166, 56, 3], [166, 160, 3], [172, 172, 0.5], [178, 176, -2], [178, 52, -2], [182, 46, 0.5], [186, 52, 3], [186, 160, 3], [192, 172, 0.5], [198, 176, -2], [198, 52, -2], [202, 46, 0.5], [206, 52, 3], [206, 160, 3]], color: END, w: LW },
        ],
        labels: [{ x: 180, y: 28, text: 'frapping turns' }],
      },
    },
  ],
}

const diagPoles = (): Strand[] => [
  { kind: 'spar', pts: [[60, 214], [300, 26]], w: 30, z: 0, color: WOOD },
  { kind: 'spar', pts: [[60, 26], [300, 214]], w: 30, z: 1, color: WOOD },
]
const turnAbout = (pts: Pt[], deg: number, cx = 180, cy = 120): Pt[] => {
  const t = (deg * Math.PI) / 180
  return pts.map(([x, y, z]) => [cx + (x - cx) * Math.cos(t) - (y - cy) * Math.sin(t), cy + (x - cx) * Math.sin(t) + (y - cy) * Math.cos(t), z] as Pt)
}
const diagTurns = (set: 1 | 2, n: number): Pt[] => {
  const hor = Array.from({ length: n }, (_, k) => belt(122, 96 + k * 13, 238, 96 + k * 13, 9, 11)).flat()
  return set === 1 ? hor : turnAbout(hor, 90)
}

const diagonalLashing: KnotDef = {
  id: 'diagonal-lashing',
  name: 'Diagonal lashing',
  steps: [
    {
      title: 'Start with a timber hitch',
      text: 'Cross the poles where they will meet. Tie a timber hitch round both poles at the crossing, then wind the end round the standing part.',
      diagram: { strands: [...diagPoles()], labels: [{ x: 180, y: 232, text: 'two poles, crossing where they will be joined' }] },
    },
    {
      title: 'Three turns one way',
      text: 'Take three or four tight turns round both poles, running across the crossing one way. Keep them side by side.',
      diagram: { strands: [...diagPoles(), { pts: diagTurns(1, 3), color: ROPE, w: LW }], labels: [{ x: 180, y: 26, text: 'first set of turns' }] },
    },
    {
      title: 'Three turns the other way, then frap',
      text: 'Now take three or four turns across the crossing the other way, so the two sets make an X. Then frap between the poles and finish with a clove hitch.',
      diagram: { strands: [...diagPoles(), { pts: diagTurns(1, 3), color: ROPE, w: LW }, { pts: diagTurns(2, 3), color: END, w: LW }], labels: [{ x: 180, y: 26, text: 'two sets cross in an X' }] },
    },
  ],
}

export const KNOTS: Record<string, KnotDef> = { overhand, 'clove-hitch': clove, reef, bowline, figure8, 'square-lashing': squareLashing, 'shear-lashing': shearLashing, 'diagonal-lashing': diagonalLashing }
export type { Strand }
