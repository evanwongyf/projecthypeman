import { useMemo, useRef, useState, type ReactNode } from 'react'
import { CAST, Sprite, THINGS, thing, type CastId, type SpriteName } from './pixel'
import { Act, Btn, Bubble, Confetti, DotCard, Draggable, Feedback, NumCard, Zone, rand, seeded, shuffle, useFlash, useSlide } from './kit'
import { sfx } from './sfx'

type Verdict = 'idle' | 'right' | 'wrong'

function useCheck() {
  const { report } = useSlide()
  const tries = useRef(0)
  const [v, setV] = useState<Verdict>('idle')
  return {
    v,
    reset: () => {
      tries.current = 0
      setV('idle')
    },
    check(ok: boolean) {
      tries.current++
      setV(ok ? 'right' : 'wrong')
      if (ok) {
        sfx.yes()
        report(tries.current === 1 ? 1 : tries.current === 2 ? 0.6 : 0.3)
      } else sfx.no()
    },
  }
}

type Rel = 'a' | 'b' | 'same'

// ---------------------------------------------------------------------------
// Spill the cup: red and yellow counters, line up, match one-to-one.
// ---------------------------------------------------------------------------

export function SpillCompare({ total = 10 }: { total?: number }) {
  const [red, setRed] = useState(4)
  const [seed, setSeed] = useState(3)
  const [phase, setPhase] = useState<'cup' | 'spill' | 'rows' | 'match'>('cup')
  const chk = useCheck()
  const yellow = total - red
  const scatter = useMemo(() => {
    const r = seeded(seed)
    return [...Array(total)].map(() => ({ x: 25 + r() * 50, y: 18 + r() * 52 }))
  }, [seed, total])

  function shake() {
    setRed(rand(1, total - 1))
    setSeed((s) => s + 7)
    setPhase('spill')
    chk.reset()
    sfx.whoosh()
  }

  const counters = [...Array(total)].map((_, i) => {
    const isRed = i < red
    const k = isRed ? i : i - red
    let x = scatter[i].x
    let y = scatter[i].y
    if (phase === 'cup') {
      x = 5 + (i % 3) * 1.2
      y = 42 + (i % 2) * 2
    } else if (phase === 'rows' || phase === 'match') {
      x = 14 + k * 8
      y = isRed ? 58 : 18
    }
    const unmatched = phase === 'match' && k >= Math.min(red, yellow)
    return { i, isRed, x, y, unmatched, k }
  })
  const answer: Rel = red > yellow ? 'a' : red < yellow ? 'b' : 'same'

  return (
    <Act
      tag="one-to-one"
      scene="class"
      prompt={
        <>
          Are there <b>more red</b>, <b>more yellow</b>, or <b>the same number</b>?
        </>
      }
      status={<Feedback state={chk.v} right={answer === 'same' ? 'Yes! The same number. Every counter has a partner.' : `Yes! There are more ${answer === 'a' ? 'red' : 'yellow'} counters.`} wrong="Line them up and match them to check!" />}
      tools={
        <>
          <Btn tone="pink" onClick={shake}>
            shake the cup
          </Btn>
          <Btn onClick={() => setPhase('rows')} disabled={phase === 'cup'}>
            line up
          </Btn>
          <Btn onClick={() => setPhase('match')} disabled={phase === 'cup'}>
            match 1 to 1
          </Btn>
          <span className="lx-sep" />
          <Btn tone="warn" onClick={() => chk.check(answer === 'a')} disabled={phase === 'cup'}>
            more red
          </Btn>
          <Btn tone="go" onClick={() => chk.check(answer === 'b')} disabled={phase === 'cup'}>
            more yellow
          </Btn>
          <Btn tone="blue" onClick={() => chk.check(answer === 'same')} disabled={phase === 'cup'}>
            the same
          </Btn>
        </>
      }
    >
      <div className="lx-spill">
        <div className={`lx-cup ${phase === 'cup' ? '' : phase === 'spill' ? 'is-tipped' : 'is-tipped is-gone'}`} onClick={(e) => (e.stopPropagation(), phase === 'cup' && shake())}>
          <span>{phase === 'cup' ? 'tap me!' : ''}</span>
        </div>
        {phase === 'match' &&
          counters
            .filter((c) => !c.isRed && c.k < Math.min(red, yellow))
            .map((c) => <span key={`l${c.k}`} className="lx-pairline" style={{ left: `calc(${c.x}% + 1.5em)`, top: `calc(${c.y}% + 3em)`, height: '40%' }} />)}
        {counters.map((c) => (
          <span key={c.i} className={`lx-chip ${c.unmatched ? 'is-odd' : ''}`} style={{ left: `${c.x}%`, top: `${c.y}%`, transitionDelay: `${c.i * 30}ms` }}>
            <Sprite name={c.isRed ? 'counterRed' : 'counterYellow'} size={3} />
          </span>
        ))}
        {(phase === 'rows' || phase === 'match') && (
          <>
            <span className="lx-rowlabel" style={{ top: '22%' }}>
              yellow
            </span>
            <span className="lx-rowlabel" style={{ top: '62%' }}>
              red
            </span>
          </>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Match pictures one-to-one: drag each bottom thing under a top thing.
// ---------------------------------------------------------------------------

function pickPair() {
  const pairs: [SpriteName, SpriteName][] = [
    ['rabbit', 'carrot'],
    ['duck', 'fish'],
    ['cupcake', 'cherry'],
    ['flower', 'ladybug'],
  ]
  const [a, b] = pairs[rand(0, pairs.length - 1)]
  const na = rand(3, 7)
  let nb = rand(2, 8)
  if (Math.random() < 0.2) nb = na
  return { a: { sprite: a, n: na }, b: { sprite: b, n: nb } }
}

export function MatchPairs({ a: a0, b: b0 }: { a?: { sprite: SpriteName; n: number }; b?: { sprite: SpriteName; n: number } }) {
  const [sets, setSets] = useState(() => (a0 && b0 ? { a: a0, b: b0 } : pickPair()))
  const [slots, setSlots] = useState<number>(0)
  const chk = useCheck()
  const { a, b } = sets
  const ta = thing(a.sprite)
  const tb = thing(b.sprite)
  const left = b.n - slots
  const finished = slots === Math.min(a.n, b.n)
  const answer: Rel = b.n > a.n ? 'b' : b.n < a.n ? 'a' : 'same'

  function onDrop(_id: string, zone: string | null) {
    if (zone === `s${slots}` || (zone?.startsWith('s') && Number(zone.slice(1)) >= slots && Number(zone.slice(1)) < a.n)) {
      if (slots < a.n) {
        setSlots(slots + 1)
        sfx.drop()
      }
    }
  }

  return (
    <Act
      tag="match and compare"
      scene="pond"
      prompt={
        <>
          Give each {ta.one} one {tb.one}. Then: which group has <b>more</b>?
        </>
      }
      status={<Feedback state={chk.v} right={answer === 'same' ? 'Yes! They have the same number.' : `Yes! There are more ${answer === 'a' ? ta.many : tb.many}.`} wrong="Look for the ones with no partner." />}
      tools={
        <>
          <Btn onClick={() => setSlots(Math.min(a.n, b.n))}>match all</Btn>
          <span className="lx-sep" />
          <Btn tone="blue" disabled={!finished} onClick={() => chk.check(answer === 'a')}>
            more {ta.many}
          </Btn>
          <Btn tone="blue" disabled={!finished} onClick={() => chk.check(answer === 'b')}>
            more {tb.many}
          </Btn>
          <Btn tone="blue" disabled={!finished} onClick={() => chk.check(answer === 'same')}>
            same number
          </Btn>
          <Btn
            tone="pink"
            onClick={() => {
              setSets(pickPair())
              setSlots(0)
              chk.reset()
            }}
          >
            new sets
          </Btn>
        </>
      }
    >
      <div className="lx-pairs">
        <div className="lx-pairs-row">
          {[...Array(a.n)].map((_, i) => (
            <div key={i} className={`lx-pairs-col ${finished && i >= b.n ? 'is-odd' : ''}`}>
              <Sprite name={a.sprite} size={3.4} />
              <span className="lx-pairs-link" style={{ opacity: i < slots ? 1 : 0 }} />
              <Zone id={`s${i}`} className="lx-pairs-slot">
                {i < slots && <Sprite name={b.sprite} size={3} />}
              </Zone>
            </div>
          ))}
        </div>
        <div className={`lx-pairs-tray ${finished && left > 0 ? 'is-odd' : ''}`}>
          {[...Array(left)].map((_, i) => (
            <Draggable key={`${i}-${slots}`} id={`b${i}`} onDrop={onDrop} disabled={slots >= a.n}>
              <Sprite name={b.sprite} size={3} />
            </Draggable>
          ))}
          {left === 0 && <span className="lx-dim">every {tb.one} has a partner</span>}
        </div>
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Which set has more / fewer? Bigger pictures do not mean more.
// ---------------------------------------------------------------------------

function newSets() {
  const [p, q] = shuffle(THINGS.slice(0, 8)).slice(0, 2)
  let na = rand(2, 9)
  let nb = rand(2, 9)
  while (na === nb) nb = rand(2, 9)
  // Give the smaller set bigger pictures half the time: size is not number.
  const trick = Math.random() < 0.5
  const big = na < nb ? 'a' : 'b'
  if (Math.random() < 0.1) [na, nb] = [nb, na]
  return { a: { sprite: p.sprite, n: na, size: trick && big === 'a' ? 4.4 : 2.6 }, b: { sprite: q.sprite, n: nb, size: trick && big === 'b' ? 4.4 : 2.6 }, ask: Math.random() < 0.5 ? ('more' as const) : ('fewer' as const) }
}

export function WhichSet() {
  const [s, setS] = useState(newSets)
  const [counted, setCounted] = useState(false)
  const chk = useCheck()
  const right: 'a' | 'b' = s.ask === 'more' ? (s.a.n > s.b.n ? 'a' : 'b') : s.a.n < s.b.n ? 'a' : 'b'
  const hi = Math.max(s.a.n, s.b.n)
  const lo = Math.min(s.a.n, s.b.n)

  return (
    <Act
      tag={s.ask === 'more' ? 'more' : 'fewer'}
      scene="market"
      prompt={
        <>
          Which set has <b>{s.ask}</b>? Tap the set.
        </>
      }
      status={
        chk.v === 'right' ? (
          <div className="lx-sentence-done">
            <b>{hi}</b> is greater than <b>{lo}</b>. <b>{lo}</b> is smaller than <b>{hi}</b>.
          </div>
        ) : (
          <Feedback state={chk.v} wrong="Big pictures don’t always mean more. Count to check!" />
        )
      }
      tools={
        <>
          <Btn onClick={() => setCounted(true)}>count to check</Btn>
          <Btn
            tone="pink"
            onClick={() => {
              setS(newSets())
              setCounted(false)
              chk.reset()
            }}
          >
            new sets
          </Btn>
        </>
      }
    >
      <div className="lx-sets">
        {(['a', 'b'] as const).map((k) => {
          const set = s[k]
          return (
            <button type="button" key={k} className={`lx-set ${chk.v !== 'idle' && k === right ? 'is-right' : ''}`} onClick={(e) => (e.stopPropagation(), chk.check(k === right))}>
              <span className="lx-set-name">set {k.toUpperCase()}</span>
              <div className="lx-set-things">
                {[...Array(set.n)].map((_, i) => (
                  <span key={i} className="lx-set-thing">
                    <Sprite name={set.sprite} size={set.size} />
                    {counted && <span className="lx-badge">{i + 1}</span>}
                  </span>
                ))}
              </div>
              {counted && <span className="lx-set-count">{set.n}</span>}
            </button>
          )
        })}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Flip two cards and build "__ is greater/smaller than __".
// ---------------------------------------------------------------------------

function deal2() {
  const a = rand(0, 10)
  let b = rand(0, 10)
  while (b === a) b = rand(0, 10)
  return { a, b, fa: Math.random() < 0.5, fb: Math.random() < 0.5, rel: Math.random() < 0.5 ? ('greater' as const) : ('smaller' as const) }
}

export function CardCompare() {
  const [d, setD] = useState(deal2)
  const [open, setOpen] = useState(false)
  const [slots, setSlots] = useState<(number | null)[]>([null, null])
  const [flash, setFlash] = useFlash()
  const chk = useCheck()

  function onDrop(id: string, zone: string | null) {
    if (zone !== 'x0' && zone !== 'x1') return
    const v = Number(id.slice(1))
    const i = Number(zone.slice(1))
    const next = [...slots]
    const other = next.indexOf(v)
    if (other >= 0) next[other] = null
    next[i] = v
    setSlots(next)
    sfx.drop()
  }

  function check() {
    const [x, y] = slots
    if (x === null || y === null) return
    const ok = d.rel === 'greater' ? x > y : x < y
    chk.check(ok)
    if (!ok) setFlash('s')
  }

  return (
    <Act
      tag="greater / smaller"
      scene="class"
      prompt={
        <>
          Flip the cards. Drag the numbers to finish the sentence.
        </>
      }
      status={<Feedback state={chk.v} right="Yes! Read it aloud together." wrong="Hmm. Which number comes later when we count?" />}
      tools={
        <>
          <Btn
            tone="go"
            onClick={() => {
              setOpen(true)
              sfx.flip()
            }}
            disabled={open}
          >
            flip!
          </Btn>
          <Btn onClick={() => setD({ ...d, rel: d.rel === 'greater' ? 'smaller' : 'greater' })}>switch sentence</Btn>
          <Btn tone="go" disabled={slots.includes(null)} onClick={check}>
            check
          </Btn>
          <Btn
            tone="pink"
            onClick={() => {
              setD(deal2())
              setOpen(false)
              setSlots([null, null])
              chk.reset()
            }}
          >
            new cards
          </Btn>
        </>
      }
    >
      <div className="lx-cc">
        <div className="lx-cc-cards">
          {[
            { n: d.a, dots: d.fa },
            { n: d.b, dots: d.fb },
          ].map((c, i) => (
            <div key={i} className={`lx-flipcard ${open ? 'is-open' : ''}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="lx-flipcard-back">?</div>
              <div className="lx-flipcard-front">{c.dots ? <DotCard n={c.n} size={10} /> : <NumCard n={c.n} size={10} />}</div>
            </div>
          ))}
        </div>
        {open && (
          <>
            <div className={`lx-sentence ${flash === 's' ? 'is-wrong' : ''}`}>
              <Zone id="x0" className="lx-slot">
                {slots[0] ?? ''}
              </Zone>
              <span>
                is <b className={d.rel === 'greater' ? 'lx-hl-go' : 'lx-hl-warn'}>{d.rel}</b> than
              </span>
              <Zone id="x1" className="lx-slot">
                {slots[1] ?? ''}
              </Zone>
            </div>
            <div className="lx-tiles">
              {[d.a, d.b].map((v) => (
                <Draggable key={v} id={`v${v}`} onDrop={onDrop}>
                  <div className={`lx-tile ${slots.includes(v) ? 'is-used' : ''}`}>{v}</div>
                </Draggable>
              ))}
            </div>
          </>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Thinking aloud: spread out or bigger does not mean more.
// ---------------------------------------------------------------------------

type Claim = { who: CastId; text: string; right: boolean }

export function Conservation({ variant = 'spread' }: { variant?: 'spread' | 'size' }) {
  const [squeezed, setSqueezed] = useState(false)
  const [counted, setCounted] = useState(false)
  const [vote, setVote] = useState<CastId | null>(null)
  const chk = useCheck()

  const cfg =
    variant === 'spread'
      ? {
          prompt: (
            <>
              Ravi’s bars are close together. Mei’s bars are spread out. <b>Who is correct?</b>
            </>
          ),
          rows: [
            { label: 'Ravi’s chocolate bars', sprite: 'choc' as SpriteName, n: 4, size: 2.6, gap: squeezed ? 0.3 : 0.3 },
            { label: 'Mei’s chocolate bars', sprite: 'choc' as SpriteName, n: 4, size: 2.6, gap: squeezed ? 0.3 : 4.5 },
          ],
          claims: [
            { who: 'pip', text: 'Ravi has fewer chocolate bars.', right: false },
            { who: 'mei', text: 'I have more chocolate bars!', right: false },
            { who: 'bolt', text: 'They have the same number of bars.', right: true },
          ] as Claim[],
          why: 'Spreading things out does not change how many there are.',
        }
      : {
          prompt: (
            <>
              Look at the melons and the cherries. <b>Who is correct?</b>
            </>
          ),
          rows: [
            { label: 'melons', sprite: 'melon' as SpriteName, n: 5, size: 4.4, gap: 0.4 },
            { label: 'cherries', sprite: 'cherry' as SpriteName, n: 8, size: 2.2, gap: 0.5 },
          ],
          claims: [
            { who: 'ravi', text: 'There are more melons. They are bigger!', right: false },
            { who: 'mei', text: 'There are more cherries.', right: true },
            { who: 'pip', text: 'There are the same number.', right: false },
          ] as Claim[],
          why: 'Bigger things do not mean more things. Count to check!',
        }

  return (
    <Act
      tag="thinking aloud"
      scene="class"
      prompt={cfg.prompt}
      status={<Feedback state={chk.v} right={cfg.why} wrong="Explain your thinking. How can we check?" />}
      tools={
        <>
          {variant === 'spread' && <Btn onClick={() => setSqueezed((v) => !v)}>{squeezed ? 'spread out' : 'push together'}</Btn>}
          <Btn onClick={() => setCounted((v) => !v)}>{counted ? 'hide count' : 'count'}</Btn>
          <Btn
            tone="warn"
            onClick={() => {
              setVote(null)
              setCounted(false)
              setSqueezed(false)
              chk.reset()
            }}
          >
            reset
          </Btn>
        </>
      }
    >
      <div className="lx-cons">
        <div className="lx-cons-rows">
          {cfg.rows.map((r, ri) => (
            <div key={ri} className="lx-cons-row">
              <span className="lx-cons-label">{r.label}</span>
              <div className="lx-cons-things" style={{ gap: `${r.gap}em` }}>
                {[...Array(r.n)].map((_, i) => (
                  <span key={i} className="lx-set-thing">
                    <Sprite name={r.sprite} size={r.size} />
                    {counted && <span className="lx-badge">{i + 1}</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="lx-claims">
          {cfg.claims.map((c) => (
            <button
              type="button"
              key={c.who}
              className={`lx-claim ${vote === c.who ? (c.right ? 'is-right' : 'is-wrong') : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setVote(c.who)
                chk.check(c.right)
              }}
            >
              <Sprite name={CAST[c.who].sprite} size={4} />
              <Bubble who={c.who}>{c.text}</Bubble>
            </button>
          ))}
        </div>
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Numbers around us: counting numbers vs numbers used as names.
// ---------------------------------------------------------------------------

type SortItem = { id: string; label: string; kind: 'count' | 'label'; art: ReactNode }

const plate = (n: number) => <span className="lx-plate">{n}</span>

export const AROUND_US: SortItem[] = [
  { id: 'bus', label: 'Bus 2', kind: 'label', art: <span className="lx-art"><Sprite name="bus" size={2.6} />{plate(2)}</span> },
  { id: 'block', label: 'Block 5', kind: 'label', art: <span className="lx-art"><Sprite name="block" size={3.2} />{plate(5)}</span> },
  { id: 'shirt', label: 'Jersey 7', kind: 'label', art: <span className="lx-art"><Sprite name="shirt" size={2.8} />{plate(7)}</span> },
  { id: 'people', label: '4 people', kind: 'count', art: <span className="lx-art">{['mei', 'ravi', 'mei', 'ravi'].map((w, i) => <Sprite key={i} name={w as SpriteName} size={2.4} />)}</span> },
  { id: 'crayons', label: '6 crayons', kind: 'count', art: <span className="lx-art">{['#e8423f', '#ffd23f', '#4fc35a', '#3d7be0', '#a565f0', '#ff9a2e'].map((c) => <Sprite key={c} name="crayon" size={2.4} pal={{ R: c, r: '#1d2238' }} />)}</span> },
  { id: 'apples', label: '3 apples', kind: 'count', art: <span className="lx-art">{[0, 1, 2].map((i) => <Sprite key={i} name="apple" size={2.2} />)}</span> },
]

export function SortBins({ items = AROUND_US }: { items?: SortItem[] }) {
  const [where, setWhere] = useState<Record<string, 'count' | 'label'>>({})
  const [flash, setFlash] = useFlash()
  const misses = useRef(0)
  const { report } = useSlide()
  const done = items.every((it) => where[it.id])

  function onDrop(id: string, zone: string | null) {
    if (zone !== 'count' && zone !== 'label') return
    const it = items.find((x) => x.id === id)!
    if (it.kind === zone) {
      const next: Record<string, 'count' | 'label'> = { ...where, [id]: zone }
      setWhere(next)
      sfx.yes()
      if (items.every((x) => next[x.id])) report(Math.max(0.3, 1 - misses.current * 0.15))
    } else {
      misses.current++
      setFlash(zone)
      sfx.no()
    }
  }

  const card = (it: SortItem) => (
    <div className="lx-sortcard">
      {it.art}
      <span>{it.label}</span>
    </div>
  )

  return (
    <Act
      tag="numbers around us"
      scene="market"
      prompt={
        <>
          Does the number tell us <b>how many</b>, or is it a <b>name</b>?
        </>
      }
      status={done ? <Bubble who="ravi">Can you find more numbers around the classroom?</Bubble> : null}
      tools={
        <Btn
          tone="warn"
          onClick={() => {
            setWhere({})
            misses.current = 0
          }}
        >
          reset
        </Btn>
      }
    >
      <div className="lx-sort">
        <div className="lx-tiles lx-sort-pool">
          {items
            .filter((it) => !where[it.id])
            .map((it) => (
              <Draggable key={it.id} id={it.id} onDrop={onDrop}>
                {card(it)}
              </Draggable>
            ))}
        </div>
        <div className="lx-bins">
          {(['count', 'label'] as const).map((b) => (
            <Zone key={b} id={b} className={`lx-bin ${flash === b ? 'is-wrong' : ''}`}>
              <span className="lx-bin-title">{b === 'count' ? 'tells how many' : 'is a name or label'}</span>
              <div className="lx-bin-items">
                {items
                  .filter((it) => where[it.id] === b)
                  .map((it) => (
                    <div key={it.id}>{card(it)}</div>
                  ))}
              </div>
            </Zone>
          ))}
        </div>
        {done && <Confetti />}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Quick quiz: one question at a time, big buttons.
// ---------------------------------------------------------------------------

export type QuizQ = { prompt: ReactNode; visual: ReactNode; options: (string | number)[]; answer: string | number }

export function Quiz({ title = 'Quick check', qs }: { title?: string; qs: QuizQ[] }) {
  const { report } = useSlide()
  const [i, setI] = useState(0)
  const [first, setFirst] = useState<boolean[]>([])
  const [pick, setPick] = useState<string | number | null>(null)
  const [done, setDone] = useState(false)
  const q = qs[i]
  const right = pick === q?.answer

  function choose(o: string | number) {
    if (right) return
    setPick(o)
    if (first.length === i) setFirst([...first, o === q.answer])
    if (o === q.answer) sfx.yes()
    else sfx.no()
  }

  function next() {
    if (i < qs.length - 1) {
      setI(i + 1)
      setPick(null)
    } else {
      setDone(true)
      sfx.win()
      report(first.filter(Boolean).length / qs.length)
    }
  }

  const score = first.filter(Boolean).length

  return (
    <Act
      tag={title}
      scene="space"
      prompt={done ? <>All done!</> : q.prompt}
      status={
        <div className="lx-quiz-dots">
          {qs.map((_, k) => (
            <span key={k} className={k < first.length ? (first[k] ? 'is-right' : 'is-wrong') : k === i ? 'is-now' : ''} />
          ))}
        </div>
      }
      tools={
        done ? (
          <Btn
            onClick={() => {
              setI(0)
              setFirst([])
              setPick(null)
              setDone(false)
            }}
          >
            play again
          </Btn>
        ) : (
          <Btn tone="go" disabled={!right} onClick={next}>
            {i < qs.length - 1 ? 'next question' : 'finish'}
          </Btn>
        )
      }
    >
      {done ? (
        <div className="lx-result lx-result-static">
          <Confetti />
          <div className="lx-stars-row">
            {[0, 1, 2].map((k) => (
              <Sprite key={k} name="star" size={5} style={{ opacity: score / qs.length > k / 3 ? 1 : 0.2 }} />
            ))}
          </div>
          <span>
            {score} out of {qs.length} on the first try!
          </span>
        </div>
      ) : (
        <div className="lx-quiz" key={i}>
          <div className="lx-quiz-visual">{q.visual}</div>
          <div className="lx-quiz-options">
            {q.options.map((o) => (
              <button type="button" key={String(o)} className={`lx-option ${pick === o ? (o === q.answer ? 'is-right' : 'is-wrong') : ''}`} onClick={(e) => (e.stopPropagation(), choose(o))}>
                {o}
              </button>
            ))}
          </div>
        </div>
      )}
    </Act>
  )
}
