import type { ReactNode } from 'react'

// Six core bandaging techniques, each as a sequence of animated schematic steps. These are
// original diagrams, not traced from photographs: no usable dataset of real bandaging-technique
// photography exists (checked), and a clean schematic, limbs as simple capsules, the bandage as
// a spiralling or folding ribbon, reads far more clearly step by step than a photo would anyway.
// The `fa-pop` class (defined in index.css) animates each new piece in as a step is reached.

export type BandageStep = { title: string; text: string; render: () => ReactNode }
export type BandageTechnique = { id: string; name: string; equipment: string; steps: BandageStep[] }

const INK = 'var(--ink)'
const SKIN = 'var(--surface)'
const WRAP = 'var(--mustard)'
const WRAP2 = 'var(--orange)'
const WOUND = '#d9534f'

// A simple straight capsule (rounded rectangle) between two points, axis-aligned helpers only,
// every technique below is built from horizontal/vertical segments, which keeps the geometry
// trivial and the result easy to read.
function HLimb({ x, y, w, h = 46 }: { x: number; y: number; w: number; h?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={SKIN} stroke={INK} strokeWidth={2} />
}
function VLimb({ x, y, h, w = 46 }: { x: number; y: number; h: number; w?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={w / 2} fill={SKIN} stroke={INK} strokeWidth={2} />
}

// Overlapping diagonal "turns" of a spiral roller-bandage wrap along a horizontal limb segment,
// `count` of them, each a parallelogram tilted to suggest the wrap's direction of travel.
function SpiralTurns({ x, y, h, count, dir = 1, color = WRAP }: { x: number; y: number; h: number; count: number; dir?: number; color?: string }) {
  const gap = 16
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => {
        const cx = x + i * gap
        const skew = dir * 10
        return (
          <polygon
            key={i}
            className="fa-pop"
            style={{ animationDelay: `${i * 70}ms` }}
            points={`${cx},${y} ${cx + 11},${y} ${cx + 11 + skew},${y + h} ${cx + skew},${y + h}`}
            fill={color}
            stroke={INK}
            strokeWidth={1}
            opacity={0.88}
          />
        )
      })}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const ang = Math.atan2(y2 - y1, x2 - x1)
  const ah = 7
  return (
    <g stroke={INK} strokeWidth={2} fill="none" strokeLinecap="round">
      <path d={`M${x1},${y1} L${x2},${y2}`} strokeDasharray="4 4" opacity={0.7} />
      <path d={`M${x2},${y2} L${x2 - ah * Math.cos(ang - 0.5)},${y2 - ah * Math.sin(ang - 0.5)} M${x2},${y2} L${x2 - ah * Math.cos(ang + 0.5)},${y2 - ah * Math.sin(ang + 0.5)}`} />
    </g>
  )
}

function Wound({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={9} ry={5} fill={WOUND} opacity={0.85} />
      <path d={`M${cx - 6},${cy - 2} l12,4 M${cx - 6},${cy + 2} l12,-4`} stroke="#7a1f16" strokeWidth={1.3} />
    </g>
  )
}

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 320 220" width="100%" style={{ maxWidth: 420 }} role="img" aria-label={label}>
      {children}
    </svg>
  )
}

const BANDAGES: Record<string, BandageTechnique> = {
  'spiral-wrap': {
    id: 'spiral-wrap',
    name: 'Roller bandage: spiral wrap (forearm)',
    equipment: 'Roller (conforming) gauze bandage, tape or a clip',
    steps: [
      {
        title: 'Start at the far end',
        text: 'Hold the bandage roll so it unwinds from underneath, and anchor it with two straight turns around the wrist, the end furthest from the heart. Wrapping from far to near keeps swelling from pooling below the bandage.',
        render: () => (
          <Frame label="A forearm with a bandage anchored at the wrist with two straight turns">
            <HLimb x={40} y={80} w={220} h={46} />
            <SpiralTurns x={48} y={78} h={50} count={2} dir={0} />
            <text x={60} y={150} fontSize={12} fill={INK}>wrist end</text>
            <text x={220} y={150} fontSize={12} fill={INK}>toward elbow</text>
          </Frame>
        ),
      },
      {
        title: 'Spiral upward, half overlap',
        text: 'Angle each turn slightly and move steadily toward the elbow, with each new turn covering about half of the one before. This even overlap is what gives the dressing beneath it steady, gentle pressure.',
        render: () => (
          <Frame label="The bandage spiralling up the forearm with overlapping turns">
            <HLimb x={40} y={80} w={220} h={46} />
            <SpiralTurns x={48} y={78} h={50} count={6} dir={1} />
            <Arrow x1={90} y1={60} x2={170} y2={60} />
          </Frame>
        ),
      },
      {
        title: 'Keep it snug, not tight',
        text: 'Pull each turn firm enough that it will not slip, but you should still be able to slide two fingers under the bandage. Check the fingertips beyond it stay warm and a normal colour.',
        render: () => (
          <Frame label="The forearm fully wrapped, with a hand check for circulation beyond it">
            <HLimb x={40} y={80} w={220} h={46} />
            <SpiralTurns x={48} y={78} h={50} count={10} dir={1} />
            <circle cx={276} cy={103} r={14} fill={SKIN} stroke={INK} strokeWidth={2} />
            <text x={262} y={146} fontSize={11} fill={INK}>fingers: warm, pink?</text>
          </Frame>
        ),
      },
      {
        title: 'Secure the end',
        text: 'Finish with a straight turn or two, then fasten with tape, a clip, or by splitting the bandage end and tying it, never with a pin pushed through skin-adjacent fabric where it could be missed later.',
        render: () => (
          <Frame label="The finished spiral wrap secured with tape near the elbow">
            <HLimb x={40} y={80} w={220} h={46} />
            <SpiralTurns x={48} y={78} h={50} count={10} dir={1} />
            <rect className="fa-pop" x={248} y={76} width={18} height={54} rx={3} fill={WRAP2} stroke={INK} strokeWidth={1.5} />
          </Frame>
        ),
      },
    ],
  },
  'figure-eight-ankle': {
    id: 'figure-eight-ankle',
    name: 'Figure-eight wrap (ankle)',
    equipment: 'Roller (conforming) gauze bandage or elastic bandage',
    steps: [
      {
        title: 'Anchor around the foot',
        text: 'Start with two turns around the middle of the foot, holding the end in place so it will not unravel as you move up toward the ankle.',
        render: () => (
          <Frame label="Two anchor turns around the middle of the foot">
            <HLimb x={30} y={150} w={100} h={38} />
            <VLimb x={140} y={40} h={120} />
            <SpiralTurns x={55} y={148} h={42} count={2} dir={0} />
          </Frame>
        ),
      },
      {
        title: 'Up and across the front of the ankle',
        text: 'Carry the bandage diagonally up and across the front of the ankle joint, from the outside of the foot toward the inside of the leg.',
        render: () => (
          <Frame label="The bandage crossing diagonally up over the front of the ankle">
            <HLimb x={30} y={150} w={100} h={38} />
            <VLimb x={140} y={40} h={120} />
            <SpiralTurns x={55} y={148} h={42} count={2} dir={0} />
            <polygon className="fa-pop" points="118,150 140,150 170,100 150,92" fill={WRAP} stroke={INK} strokeWidth={1} />
          </Frame>
        ),
      },
      {
        title: 'Around the leg',
        text: 'Take one full turn around the lower leg, just above the ankle bones, to anchor that diagonal before crossing back down.',
        render: () => (
          <Frame label="One full turn around the lower leg above the ankle">
            <HLimb x={30} y={150} w={100} h={38} />
            <VLimb x={140} y={40} h={120} />
            <SpiralTurns x={55} y={148} h={42} count={2} dir={0} />
            <polygon points="118,150 140,150 170,100 150,92" fill={WRAP} stroke={INK} strokeWidth={1} />
            <rect className="fa-pop" x={140} y={94} width={46} height={16} rx={6} fill={WRAP} stroke={INK} strokeWidth={1} />
          </Frame>
        ),
      },
      {
        title: 'Cross back down, forming the figure-eight',
        text: 'Carry the bandage diagonally back down across the ankle in the opposite direction, under the arch, and back up the other side, the crossing pattern gives the joint support without restricting movement entirely.',
        render: () => (
          <Frame label="The bandage crossing back down to complete a figure-eight over the ankle">
            <HLimb x={30} y={150} w={100} h={38} />
            <VLimb x={140} y={40} h={120} />
            <SpiralTurns x={55} y={148} h={42} count={2} dir={0} />
            <polygon points="118,150 140,150 170,100 150,92" fill={WRAP} stroke={INK} strokeWidth={1} />
            <rect x={140} y={94} width={46} height={16} rx={6} fill={WRAP} stroke={INK} strokeWidth={1} />
            <polygon className="fa-pop" points="150,108 170,116 140,150 115,142" fill={WRAP2} stroke={INK} strokeWidth={1} />
          </Frame>
        ),
      },
      {
        title: 'Repeat and secure',
        text: 'Repeat the figure-eight once or twice more for even coverage, then secure the end over the front of the ankle, away from a bony point where it could press uncomfortably.',
        render: () => (
          <Frame label="The completed figure-eight ankle wrap, secured at the front">
            <HLimb x={30} y={150} w={100} h={38} />
            <VLimb x={140} y={40} h={120} />
            <SpiralTurns x={55} y={148} h={42} count={2} dir={0} />
            <polygon points="118,150 140,150 170,100 150,92" fill={WRAP} stroke={INK} strokeWidth={1} />
            <rect x={140} y={94} width={46} height={16} rx={6} fill={WRAP} stroke={INK} strokeWidth={1} />
            <polygon points="150,108 170,116 140,150 115,142" fill={WRAP2} stroke={INK} strokeWidth={1} />
            <polygon className="fa-pop" points="118,150 140,150 170,100 150,92" fill={WRAP} opacity={0.7} stroke={INK} strokeWidth={1} />
            <rect className="fa-pop" x={150} y={88} width={16} height={14} rx={2} fill={WRAP2} stroke={INK} strokeWidth={1.3} />
          </Frame>
        ),
      },
    ],
  },
  sling: {
    id: 'sling',
    name: 'Triangular bandage arm sling',
    equipment: 'A triangular bandage (or an improvised square of cloth folded diagonally)',
    steps: [
      {
        title: 'Position the arm',
        text: 'Support the injured arm bent at roughly a right angle, hand slightly higher than the elbow, across the chest. Slide the open triangular bandage underneath it, one point reaching past the elbow, the long edge running down the body.',
        render: () => (
          <Frame label="A person with the injured forearm bent across the chest, bandage positioned underneath">
            <circle cx={160} cy={40} r={22} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect x={120} y={60} width={80} height={90} rx={16} fill={SKIN} stroke={INK} strokeWidth={2} />
            <polygon className="fa-pop" points="118,150 210,150 210,90" fill="var(--pink)" opacity={0.3} stroke={INK} strokeWidth={1.5} />
            <rect x={150} y={95} width={55} height={22} rx={10} fill={SKIN} stroke={INK} strokeWidth={2} transform="rotate(-18 150 95)" />
          </Frame>
        ),
      },
      {
        title: 'Bring the lower point up',
        text: 'Take the bottom point of the bandage and fold it up and over the forearm, so it tucks between the arm and the body and the whole forearm and hand are cradled.',
        render: () => (
          <Frame label="The lower point of the bandage folded up over the forearm">
            <circle cx={160} cy={40} r={22} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect x={120} y={60} width={80} height={90} rx={16} fill={SKIN} stroke={INK} strokeWidth={2} />
            <polygon points="118,150 210,150 210,90" fill="var(--pink)" opacity={0.3} stroke={INK} strokeWidth={1.5} />
            <polygon className="fa-pop" points="118,150 95,90 150,80" fill="var(--pink)" opacity={0.55} stroke={INK} strokeWidth={1.5} />
            <rect x={150} y={95} width={55} height={22} rx={10} fill={SKIN} stroke={INK} strokeWidth={2} transform="rotate(-18 150 95)" />
          </Frame>
        ),
      },
      {
        title: 'Tie at the shoulder',
        text: 'Carry that point up and over the shoulder on the injured side, and tie the two ends together in a knot that sits at the side of the neck, not directly on the spine, for comfort.',
        render: () => (
          <Frame label="The two ends of the bandage tied in a knot at the side of the neck">
            <circle cx={160} cy={40} r={22} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect x={120} y={60} width={80} height={90} rx={16} fill={SKIN} stroke={INK} strokeWidth={2} />
            <polygon points="118,150 210,150 210,90" fill="var(--pink)" opacity={0.3} stroke={INK} strokeWidth={1.5} />
            <polygon points="118,150 95,90 150,80" fill="var(--pink)" opacity={0.55} stroke={INK} strokeWidth={1.5} />
            <path d="M95,90 Q130,30 150,30" stroke="var(--pink)" strokeWidth={5} fill="none" opacity={0.8} />
            <circle className="fa-pop" cx={150} cy={30} r={7} fill={WRAP2} stroke={INK} strokeWidth={1.5} />
            <rect x={150} y={95} width={55} height={22} rx={10} fill={SKIN} stroke={INK} strokeWidth={2} transform="rotate(-18 150 95)" />
          </Frame>
        ),
      },
      {
        title: 'Twist and tuck the elbow point',
        text: 'At the elbow, twist the small point of fabric until it is snug, then tuck it into the fold or secure it with a safety pin, so the elbow end of the sling stays closed.',
        render: () => (
          <Frame label="The elbow end of the sling twisted and pinned">
            <circle cx={160} cy={40} r={22} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect x={120} y={60} width={80} height={90} rx={16} fill={SKIN} stroke={INK} strokeWidth={2} />
            <polygon points="118,150 210,150 210,90" fill="var(--pink)" opacity={0.3} stroke={INK} strokeWidth={1.5} />
            <polygon points="118,150 95,90 150,80" fill="var(--pink)" opacity={0.55} stroke={INK} strokeWidth={1.5} />
            <path d="M95,90 Q130,30 150,30" stroke="var(--pink)" strokeWidth={5} fill="none" opacity={0.8} />
            <circle cx={150} cy={30} r={7} fill={WRAP2} stroke={INK} strokeWidth={1.5} />
            <rect x={150} y={95} width={55} height={22} rx={10} fill={SKIN} stroke={INK} strokeWidth={2} transform="rotate(-18 150 95)" />
            <circle className="fa-pop" cx={210} cy={92} r={5} fill={INK} />
          </Frame>
        ),
      },
      {
        title: 'Check the fingers',
        text: 'The hand should sit a little higher than the elbow and the fingertips should stay visible, warm and a normal colour. If they turn pale, blue or cold, the sling is too tight and needs loosening immediately.',
        render: () => (
          <Frame label="The completed sling with the fingertips visible for a circulation check">
            <circle cx={160} cy={40} r={22} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect x={120} y={60} width={80} height={90} rx={16} fill={SKIN} stroke={INK} strokeWidth={2} />
            <polygon points="118,150 210,150 210,90" fill="var(--pink)" opacity={0.3} stroke={INK} strokeWidth={1.5} />
            <polygon points="118,150 95,90 150,80" fill="var(--pink)" opacity={0.55} stroke={INK} strokeWidth={1.5} />
            <path d="M95,90 Q130,30 150,30" stroke="var(--pink)" strokeWidth={5} fill="none" opacity={0.8} />
            <circle cx={150} cy={30} r={7} fill={WRAP2} stroke={INK} strokeWidth={1.5} />
            <rect x={150} y={95} width={55} height={22} rx={10} fill={SKIN} stroke={INK} strokeWidth={2} transform="rotate(-18 150 95)" />
            <circle cx={210} cy={92} r={5} fill={INK} />
            <g className="fa-pop">
              <circle cx={215} cy={88} r={3} fill={SKIN} stroke={INK} strokeWidth={1} />
              <circle cx={221} cy={90} r={3} fill={SKIN} stroke={INK} strokeWidth={1} />
            </g>
            <text x={230} y={92} fontSize={11} fill={INK}>fingers visible</text>
          </Frame>
        ),
      },
    ],
  },
  'pressure-dressing': {
    id: 'pressure-dressing',
    name: 'Pressure dressing for a bleeding wound',
    equipment: 'Sterile gauze pad, roller bandage, disposable gloves if available',
    steps: [
      {
        title: 'Expose and assess the wound',
        text: 'Put on gloves if you have them, and expose the wound enough to see it clearly without removing anything already embedded in it, an embedded object is padded around, never pulled out.',
        render: () => (
          <Frame label="A wound on the forearm, exposed for assessment">
            <HLimb x={40} y={80} w={220} h={46} />
            <Wound cx={150} cy={103} />
          </Frame>
        ),
      },
      {
        title: 'Cover with a sterile pad',
        text: 'Place a sterile gauze pad directly over the wound without wiping or pressing into it first, touching only the edges of the pad that will not contact the wound.',
        render: () => (
          <Frame label="A sterile gauze pad placed directly over the wound">
            <HLimb x={40} y={80} w={220} h={46} />
            <Wound cx={150} cy={103} />
            <rect className="fa-pop" x={126} y={86} width={48} height={34} rx={3} fill={SKIN} stroke={INK} strokeWidth={2} />
            <path d="M134 94h32M134 102h32M134 110h32" stroke={INK} strokeWidth={1} opacity={0.4} />
          </Frame>
        ),
      },
      {
        title: 'Apply firm, direct pressure',
        text: 'Press down firmly on the pad with the flat of your hand and hold steady, continuous pressure. Most bleeding slows and stops within several minutes of unbroken direct pressure, do not lift the pad to check.',
        render: () => (
          <Frame label="A hand pressing firmly down on the dressing">
            <HLimb x={40} y={80} w={220} h={46} />
            <rect x={126} y={86} width={48} height={34} rx={3} fill={SKIN} stroke={INK} strokeWidth={2} />
            <g className="fa-pop">
              <ellipse cx={150} cy={70} rx={26} ry={16} fill={SKIN} stroke={INK} strokeWidth={2} />
              <path d="M150,70 L150,96" stroke={INK} strokeWidth={2} />
            </g>
          </Frame>
        ),
      },
      {
        title: 'Wrap to hold it in place',
        text: 'Once bleeding is controlled, wrap a roller bandage firmly over the pad in overlapping turns, firm enough to maintain pressure but not so tight it cuts off circulation beyond the wound.',
        render: () => (
          <Frame label="A roller bandage wrapped firmly over the dressing">
            <HLimb x={40} y={80} w={220} h={46} />
            <rect x={126} y={86} width={48} height={34} rx={3} fill={SKIN} stroke={INK} strokeWidth={2} />
            <SpiralTurns x={110} y={78} h={50} count={6} dir={1} color={WRAP2} />
          </Frame>
        ),
      },
      {
        title: 'Check beyond the dressing, and get help',
        text: 'Check the fingers or toes beyond the bandage stay warm and a normal colour. Keep the injured part raised above heart level if possible, and seek medical care, a wound serious enough for a pressure dressing usually needs assessment.',
        render: () => (
          <Frame label="The completed pressure dressing with a circulation check beyond it">
            <HLimb x={40} y={80} w={220} h={46} />
            <rect x={126} y={86} width={48} height={34} rx={3} fill={SKIN} stroke={INK} strokeWidth={2} />
            <SpiralTurns x={110} y={78} h={50} count={6} dir={1} color={WRAP2} />
            <circle className="fa-pop" cx={276} cy={103} r={14} fill={SKIN} stroke={INK} strokeWidth={2} />
            <text x={255} y={146} fontSize={11} fill={INK}>check circulation</text>
          </Frame>
        ),
      },
    ],
  },
  'head-wrap': {
    id: 'head-wrap',
    name: 'Circular (recoil) head bandage',
    equipment: 'Roller (conforming) gauze bandage',
    steps: [
      {
        title: 'Anchor around the head',
        text: 'Start with two straight turns running horizontally around the head, just above the eyebrows and ears, holding a dressing in place if there is one.',
        render: () => (
          <Frame label="Two anchor turns of bandage around the head above the eyebrows">
            <ellipse cx={160} cy={110} rx={70} ry={78} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect className="fa-pop" x={90} y={95} width={140} height={18} rx={9} fill={WRAP} stroke={INK} strokeWidth={1.3} opacity={0.9} />
          </Frame>
        ),
      },
      {
        title: 'Angle up and over the crown',
        text: 'From the anchor at the back of the head, angle the bandage up and over the crown to the forehead, then back down to the anchor level at the back, a “recoil” turn that folds back on itself at each pass.',
        render: () => (
          <Frame label="A bandage turn angling up and over the crown of the head">
            <ellipse cx={160} cy={110} rx={70} ry={78} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect x={90} y={95} width={140} height={18} rx={9} fill={WRAP} stroke={INK} strokeWidth={1.3} opacity={0.9} />
            <path className="fa-pop" d="M100,100 Q160,20 220,100" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.85} />
          </Frame>
        ),
      },
      {
        title: 'Repeat, shifting slightly each time',
        text: 'Repeat the over-the-crown turn several times, shifting the fold slightly forward or back each pass, locking each one in place with a horizontal turn around the head before the next.',
        render: () => (
          <Frame label="Several overlapping turns covering the crown of the head">
            <ellipse cx={160} cy={110} rx={70} ry={78} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect x={90} y={95} width={140} height={18} rx={9} fill={WRAP} stroke={INK} strokeWidth={1.3} opacity={0.9} />
            <path d="M100,100 Q160,20 220,100" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.75} />
            <path className="fa-pop" d="M95,105 Q160,32 225,105" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.7} style={{ animationDelay: '0ms' }} />
            <path className="fa-pop" d="M92,112 Q160,46 228,112" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.65} style={{ animationDelay: '150ms' }} />
          </Frame>
        ),
      },
      {
        title: 'Lock with a final circular turn',
        text: 'Once the crown is covered, finish with one or two more full horizontal turns around the head to lock all the recoil folds in place.',
        render: () => (
          <Frame label="A final horizontal turn locking the recoil folds in place">
            <ellipse cx={160} cy={110} rx={70} ry={78} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect x={90} y={95} width={140} height={18} rx={9} fill={WRAP} stroke={INK} strokeWidth={1.3} opacity={0.9} />
            <path d="M100,100 Q160,20 220,100" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.6} />
            <path d="M95,105 Q160,32 225,105" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.6} />
            <path d="M92,112 Q160,46 228,112" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.6} />
            <rect className="fa-pop" x={86} y={100} width={148} height={16} rx={8} fill={WRAP} stroke={INK} strokeWidth={1.3} />
          </Frame>
        ),
      },
      {
        title: 'Secure and check often',
        text: 'Tape or pin the end at a point that will not press on the injury. Check level of alertness and both pupils regularly afterward, a head injury serious enough to bandage needs prompt medical assessment regardless of how neat the bandage is.',
        render: () => (
          <Frame label="The completed head bandage, taped at the side">
            <ellipse cx={160} cy={110} rx={70} ry={78} fill={SKIN} stroke={INK} strokeWidth={2} />
            <rect x={90} y={95} width={140} height={18} rx={9} fill={WRAP} stroke={INK} strokeWidth={1.3} opacity={0.9} />
            <path d="M100,100 Q160,20 220,100" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.6} />
            <path d="M95,105 Q160,32 225,105" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.6} />
            <path d="M92,112 Q160,46 228,112" stroke={WRAP2} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.6} />
            <rect x={86} y={100} width={148} height={16} rx={8} fill={WRAP} stroke={INK} strokeWidth={1.3} />
            <rect className="fa-pop" x={214} y={98} width={16} height={18} rx={2} fill="var(--teal)" stroke={INK} strokeWidth={1.3} />
          </Frame>
        ),
      },
    ],
  },
  'joint-spica': {
    id: 'joint-spica',
    name: 'Joint figure-eight (spica) wrap, elbow or knee',
    equipment: 'Elastic (crepe) bandage',
    steps: [
      {
        title: 'Anchor below the joint',
        text: 'Start with two turns on the lower part of the limb, just below the bent joint, holding the free end in place.',
        render: () => (
          <Frame label="Two anchor turns on the forearm just below a bent elbow">
            <g transform="rotate(25 160 150)">
              <HLimb x={170} y={128} w={110} h={42} />
            </g>
            <VLimb x={120} y={40} h={110} />
            <SpiralTurns x={126} y={124} h={34} count={2} dir={0} />
          </Frame>
        ),
      },
      {
        title: 'Angle up and across the joint',
        text: 'Carry the bandage diagonally up and across the front of the bent joint to the limb above it.',
        render: () => (
          <Frame label="The bandage crossing diagonally up over the bent joint">
            <g transform="rotate(25 160 150)">
              <HLimb x={170} y={128} w={110} h={42} />
            </g>
            <VLimb x={120} y={40} h={110} />
            <SpiralTurns x={126} y={124} h={34} count={2} dir={0} />
            <polygon className="fa-pop" points="160,145 190,135 170,85 145,100" fill={WRAP} stroke={INK} strokeWidth={1} />
          </Frame>
        ),
      },
      {
        title: 'One turn above the joint',
        text: 'Take a full turn around the limb above the joint to anchor that diagonal before crossing back.',
        render: () => (
          <Frame label="One full turn of bandage above the bent joint">
            <g transform="rotate(25 160 150)">
              <HLimb x={170} y={128} w={110} h={42} />
            </g>
            <VLimb x={120} y={40} h={110} />
            <SpiralTurns x={126} y={124} h={34} count={2} dir={0} />
            <polygon points="160,145 190,135 170,85 145,100" fill={WRAP} stroke={INK} strokeWidth={1} />
            <rect className="fa-pop" x={122} y={70} width={44} height={16} rx={6} fill={WRAP} stroke={INK} strokeWidth={1} transform="rotate(0 144 78)" />
          </Frame>
        ),
      },
      {
        title: 'Cross back down, completing the figure-eight',
        text: 'Carry the bandage diagonally back down across the joint in the opposite direction, forming the crossing “X” pattern of a spica wrap, which supports the joint while still allowing some bend.',
        render: () => (
          <Frame label="The bandage crossing back down to complete the figure-eight over the joint">
            <g transform="rotate(25 160 150)">
              <HLimb x={170} y={128} w={110} h={42} />
            </g>
            <VLimb x={120} y={40} h={110} />
            <SpiralTurns x={126} y={124} h={34} count={2} dir={0} />
            <polygon points="160,145 190,135 170,85 145,100" fill={WRAP} stroke={INK} strokeWidth={1} />
            <rect x={122} y={70} width={44} height={16} rx={6} fill={WRAP} stroke={INK} strokeWidth={1} />
            <polygon className="fa-pop" points="145,100 170,85 200,125 175,140" fill={WRAP2} stroke={INK} strokeWidth={1} />
          </Frame>
        ),
      },
      {
        title: 'Repeat and secure, leaving some bend possible',
        text: 'Repeat the crossing pattern once or twice more for even support, then secure the end. A spica wrap should support the joint without locking it completely straight unless that is specifically what has been advised.',
        render: () => (
          <Frame label="The completed figure-eight wrap supporting the joint, secured at the end">
            <g transform="rotate(25 160 150)">
              <HLimb x={170} y={128} w={110} h={42} />
            </g>
            <VLimb x={120} y={40} h={110} />
            <SpiralTurns x={126} y={124} h={34} count={2} dir={0} />
            <polygon points="160,145 190,135 170,85 145,100" fill={WRAP} opacity={0.75} stroke={INK} strokeWidth={1} />
            <rect x={122} y={70} width={44} height={16} rx={6} fill={WRAP} stroke={INK} strokeWidth={1} />
            <polygon points="145,100 170,85 200,125 175,140" fill={WRAP2} opacity={0.8} stroke={INK} strokeWidth={1} />
            <rect className="fa-pop" x={124} y={90} width={16} height={14} rx={2} fill={WRAP2} stroke={INK} strokeWidth={1.3} />
          </Frame>
        ),
      },
    ],
  },
}

export function bandage(id: string): BandageTechnique {
  return BANDAGES[id]
}
