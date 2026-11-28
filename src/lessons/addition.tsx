import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import './addition.css'
import { Sprite, thing, type SpriteName } from './pixel'
import { Act, BondDiagram, Btn, Bubble, Confetti, DotCard, Draggable, Feedback, NumCard, NumberPad, Zone, rand, shuffle, useCheck, useFlash, useSlide } from './kit'
import { sfx } from './sfx'

const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

/** A second colour for the "other" group, so two parts read as two sets. */
const TINT: CSSProperties = { filter: 'hue-rotate(115deg) saturate(1.1)' }

// ---------------------------------------------------------------------------
// Number bond builder: split a whole into two parts, find every way.
// ---------------------------------------------------------------------------

type Side = 'tray' | 'a' | 'b'

export function NumberBond({ wholes = [6, 7, 8, 9, 10], start }: { wholes?: number[]; start?: number }) {
  const { student, report } = useSlide()
  const [whole, setWhole] = useState(start ?? wholes[0])
  const [side, setSide] = useState<Side[]>(() => Array(start ?? wholes[0]).fill('tray'))
  const [found, setFound] = useState<string[]>([])
  const a = side.filter((s) => s === 'a').length
  const b = side.filter((s) => s === 'b').length
  const ready = a + b === whole
  const allPairs = Math.floor(whole / 2)
  const done = found.length >= allPairs

  function pick(n: number) {
    setWhole(n)
    setSide(Array(n).fill('tray'))
    setFound([])
  }

  function move(i: number, to: Side) {
    setSide((s) => s.map((v, k) => (k === i ? to : v)))
    sfx.drop()
  }

  function onDrop(id: string, zone: string | null) {
    const i = Number(id.slice(1))
    if (zone === 'pa') move(i, 'a')
    else if (zone === 'pb') move(i, 'b')
    else if (zone === 'tray') move(i, 'tray')
  }

  function record() {
    if (!ready) return
    if (a === 0 || b === 0) {
      sfx.no()
      return
    }
    const key = `${Math.min(a, b)}-${Math.max(a, b)}`
    if (found.includes(key)) {
      sfx.no()
      return
    }
    const next = [...found, key].sort((x, y) => Number(x.split('-')[0]) - Number(y.split('-')[0]))
    setFound(next)
    sfx.yes()
    if (next.length >= allPairs) {
      sfx.win()
      if (student) report(1)
    }
  }

  const counter = (i: number) => (
    <Draggable key={i} id={`c${i}`} onDrop={onDrop} onTap={() => move(i, side[i] === 'a' ? 'b' : 'a')}>
      <Sprite name={side[i] === 'b' ? 'counterYellow' : 'counterRed'} size={2.6} />
    </Draggable>
  )

  return (
    <Act
      tag="number bonds"
      scene="beach"
      prompt={
        <>
          Split <b>{whole}</b> into two parts. Tap or drag each counter. Find <b>all the ways</b>!
        </>
      }
      status={
        ready && a > 0 && b > 0 ? (
          <span className="lx-say">
            <b>{a}</b> and <b>{b}</b> make <b>{whole}</b>
          </span>
        ) : (
          <span className="lx-dim">{side.filter((s) => s === 'tray').length} left to place</span>
        )
      }
      tools={
        <>
          {wholes.map((n) => (
            <Btn key={n} tone={n === whole ? 'blue' : 'plain'} onClick={() => pick(n)}>
              {n}
            </Btn>
          ))}
          <Btn
            onClick={() => {
              const k = rand(1, whole - 1)
              setSide(Array(whole).fill('a').map((_, i) => (i < k ? 'a' : 'b')))
            }}
          >
            random split
          </Btn>
          <Btn tone="warn" onClick={() => setSide(Array(whole).fill('tray'))}>
            clear
          </Btn>
          <Btn tone="go" onClick={record} disabled={!ready}>
            record
          </Btn>
        </>
      }
    >
      <div className="lx-nb">
        <div className="lx-nb-left">
          <Zone id="tray" className="lx-nb-tray">
            <span className="lx-pile-label">whole: {whole} counters</span>
            <div className="lx-nb-row">{side.map((s, i) => (s === 'tray' ? counter(i) : null))}</div>
          </Zone>
          <div className="lx-nb-parts">
            {(['a', 'b'] as const).map((p) => (
              <Zone key={p} id={`p${p}`} className={`lx-nb-part lx-nb-part-${p}`}>
                <span className="lx-pile-label">part</span>
                <div className="lx-nb-row">{side.map((s, i) => (s === p ? counter(i) : null))}</div>
                <span className="lx-nb-count">{p === 'a' ? a : b}</span>
              </Zone>
            ))}
          </div>
        </div>
        <div className="lx-nb-right">
          <BondDiagram a={a || '?'} b={b || '?'} whole={whole} size={1.3} />
          <div className="lx-nb-found">
            <span className="lx-pile-label">
              found {found.length} of {allPairs}
            </span>
            {found.map((f) => {
              const [x, y] = f.split('-')
              return (
                <span key={f} className="lx-nb-chip">
                  {x} and {y} make {whole}
                </span>
              )
            })}
          </div>
        </div>
        {done && (
          <div className="lx-result" key={whole}>
            <Confetti />
            <span>All the ways to make {whole}!</span>
            <small>Add 1 to one part and take 1 from the other to find the next way.</small>
          </div>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Hidden cubes: some are under the cup. How many are hiding?
// ---------------------------------------------------------------------------

function newHide(max = 10) {
  const n = rand(3, max)
  return { n, show: rand(0, n - 1) }
}

export function HiddenCubes({ max = 10 }: { max?: number }) {
  const { student } = useSlide()
  const [g, setG] = useState(() => newHide(max))
  const [phase, setPhase] = useState<'count' | 'hidden' | 'shown'>('count')
  const [ans, setAns] = useState<number | null>(null)
  const chk = useCheck()
  const hid = g.n - g.show

  return (
    <Act
      tag="hidden cubes"
      scene="class"
      prompt={
        phase === 'count' ? (
          <>
            Bolt has some cubes. <b>How many</b> are there?
          </>
        ) : (
          <>
            Bolt hid some cubes under the cup. <b>How many are hiding?</b>
          </>
        )
      }
      status={
        phase === 'shown' ? (
          <span className="lx-say">
            <b>{g.show}</b> and <b>{hid}</b> make <b>{g.n}</b>
          </span>
        ) : student && phase === 'hidden' ? (
          <Feedback state={chk.v} wrong={`Count on from ${g.show} to ${g.n}.`} />
        ) : null
      }
      tools={
        <>
          {phase === 'count' && (
            <Btn tone="pink" onClick={() => (setPhase('hidden'), sfx.whoosh())}>
              hide some!
            </Btn>
          )}
          {phase === 'hidden' && !student && (
            <Btn tone="go" onClick={() => (setPhase('shown'), sfx.flip())}>
              lift the cup
            </Btn>
          )}
          <Btn
            onClick={() => {
              setG(newHide(max))
              setPhase('count')
              setAns(null)
              chk.reset()
            }}
          >
            new round
          </Btn>
        </>
      }
    >
      <div className="lx-hide">
        {phase === 'count' ? (
          <div className="lx-hide-all">
            {[...Array(g.n)].map((_, i) => (
              <Sprite key={i} name="cube" size={3} />
            ))}
          </div>
        ) : (
          <>
            <div className="lx-hide-stage">
              <div className="lx-hide-shown">
                {[...Array(g.show)].map((_, i) => (
                  <Sprite key={i} name="cube" size={3} />
                ))}
                {g.show === 0 && <span className="lx-dim">none here!</span>}
              </div>
              <div className={`lx-hide-cupwrap ${phase === 'shown' ? 'is-up' : ''}`}>
                <div className="lx-hide-under">
                  {[...Array(hid)].map((_, i) => (
                    <Sprite key={i} name="cube" size={3} style={TINT} />
                  ))}
                </div>
                <div className="lx-hide-cup">?</div>
              </div>
            </div>
            <BondDiagram a={g.show} b={phase === 'shown' ? hid : '?'} whole={g.n} size={1.1} />
            {student && phase === 'hidden' && (
              <div className="lx-answer-col">
                <NumberPad value={ans} onChange={setAns} />
                <Btn
                  tone="go"
                  big
                  disabled={ans === null}
                  onClick={() => {
                    if (chk.check(ans === hid)) setPhase('shown')
                  }}
                >
                  check
                </Btn>
              </div>
            )}
          </>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Put two sets together: count all, count on, swap the plates.
// ---------------------------------------------------------------------------

function newSets(maxTotal = 10) {
  const a = rand(1, maxTotal - 1)
  const b = rand(1, Math.min(5, maxTotal - a))
  return { a, b }
}

export function PutTogether({ sprite: sprite0 = 'apple', a: a0, b: b0, card, random = false }: { sprite?: SpriteName; a?: number; b?: number; card?: boolean; random?: boolean }) {
  const { student } = useSlide()
  const [sets, setSets] = useState(() => (a0 && b0 && !random ? { a: a0, b: b0 } : newSets()))
  const [sprite, setSprite] = useState<SpriteName>(sprite0)
  const [swapped, setSwapped] = useState(false)
  const [mode, setMode] = useState<'none' | 'all' | 'on'>('none')
  const [k, setK] = useState(0)
  const [ans, setAns] = useState<number | null>(null)
  const timer = useRef<number | undefined>(undefined)
  const chk = useCheck()
  useEffect(() => () => window.clearInterval(timer.current), [])

  const [L, R] = swapped ? [sets.b, sets.a] : [sets.a, sets.b]
  const total = L + R
  const t = thing(sprite)
  const done = mode !== 'none' && k >= total

  function run(m: 'all' | 'on') {
    window.clearInterval(timer.current)
    setMode(m)
    let n = m === 'on' ? L : 0
    setK(n)
    if (m === 'on') sfx.tap(L)
    timer.current = window.setInterval(() => {
      n++
      setK(n)
      sfx.tap(n)
      if (n >= total) {
        window.clearInterval(timer.current)
        window.setTimeout(sfx.yes, 150)
      }
    }, 700)
  }

  function reset() {
    window.clearInterval(timer.current)
    setMode('none')
    setK(0)
    setAns(null)
    chk.reset()
  }

  // The number shown on an item once the count reaches it.
  const label = (i: number) => (k > i ? i + 1 : null)

  const plate = (n: number, offset: number, tint: boolean, asCard: boolean) => (
    <div className="lx-plate-wrap">
      {asCard ? (
        <NumCard n={n} size={8} />
      ) : (
        <div className={`lx-plate-dish ${mode === 'on' && offset === 0 ? 'is-known' : ''}`}>
          {[...Array(n)].map((_, i) => (
            <span key={i} className="lx-set-thing">
              <Sprite name={sprite} size={2.8} style={tint ? TINT : undefined} />
              {mode === 'all' && label(offset + i) && <span className="lx-badge">{offset + i + 1}</span>}
            </span>
          ))}
          {mode === 'on' && offset === 0 && <span className="lx-plate-known">{n}</span>}
        </div>
      )}
      {!asCard && <span className="lx-plate-count">{n}</span>}
    </div>
  )

  const right = (
    <div className="lx-plate-wrap">
      <div className="lx-plate-dish">
        {[...Array(R)].map((_, i) => (
          <button
            type="button"
            key={i}
            className="lx-set-thing lx-tapthing"
            onClick={(e) => {
              e.stopPropagation()
              if (mode !== 'on' || k !== L + i) return
              setK(k + 1)
              sfx.tap(k + 1)
              if (k + 1 >= total) window.setTimeout(sfx.yes, 150)
            }}
          >
            {card ? <span className="lx-dot" /> : <Sprite name={sprite} size={2.8} style={swapped ? undefined : TINT} />}
            {mode !== 'none' && label(L + i) && <span className="lx-badge">{L + i + 1}</span>}
          </button>
        ))}
      </div>
      {!card && <span className="lx-plate-count">{R}</span>}
    </div>
  )

  return (
    <Act
      tag={card ? 'count on' : 'put together'}
      scene="market"
      prompt={
        card ? (
          <>
            Start at <b>{L}</b> and <b>count on</b>. How many altogether?
          </>
        ) : (
          <>
            How many {t.many} are there <b>altogether</b>?
          </>
        )
      }
      status={
        done ? (
          <span className="lx-say">
            <b>{L}</b> and <b>{R}</b> make <b>{total}</b>. There are {total} {card ? '' : t.many} altogether.
          </span>
        ) : mode === 'on' ? (
          <span className="lx-say">
            Say <b>{L}</b>… then count on: {[...Array(R)].map((_, i) => L + i + 1).join(', ')}
          </span>
        ) : (
          <Feedback state={chk.v} right={`Yes! ${total} altogether.`} wrong="Try counting on from the bigger number." />
        )
      }
      tools={
        <>
          {!student && !card && <Btn onClick={() => run('all')}>count all</Btn>}
          {!student && <Btn tone="blue" onClick={() => run('on')}>count on</Btn>}
          {card && <Btn onClick={() => (reset(), setMode('on'), setK(L))}>tap to count on</Btn>}
          {!card && (
            <Btn
              onClick={() => {
                reset()
                setSwapped((s) => !s)
                sfx.whoosh()
              }}
            >
              swap ⇄
            </Btn>
          )}
          <Btn
            tone="pink"
            onClick={() => {
              reset()
              setSets(newSets())
              setSwapped(false)
              if (!card) setSprite((['apple', 'tomato', 'cupcake', 'fish', 'duck', 'star', 'bun', 'shell'] as SpriteName[])[rand(0, 7)])
            }}
          >
            new
          </Btn>
        </>
      }
    >
      <div className="lx-put">
        <div className="lx-put-row">
          {plate(L, 0, swapped, !!card)}
          <span className="lx-put-and">and</span>
          {right}
          <span className="lx-put-and">make</span>
          <span className={`lx-put-total ${done ? 'is-done' : ''}`}>{done ? total : '?'}</span>
        </div>
        {(done || chk.v === 'right') && <BondDiagram a={L} b={R} whole={total} size={1} />}
        {student && !done && chk.v !== 'right' && (
          <div className="lx-answer-col">
            <NumberPad value={ans} onChange={setAns} />
            <Btn tone="go" big disabled={ans === null} onClick={() => chk.check(ans === total)}>
              check
            </Btn>
          </div>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// One more: add 1 to a set.
// ---------------------------------------------------------------------------

export function OneMore() {
  const [n, setN] = useState(3)
  const [added, setAdded] = useState(false)
  return (
    <Act
      tag="1 more"
      scene="sky"
      prompt={
        <>
          There are <b>{n}</b> counters. What if we add <b>1 more</b>?
        </>
      }
      status={
        added ? (
          <span className="lx-say">
            1 more than <b>{n}</b> is <b>{n + 1}</b>. &nbsp; {n} + 1 = {n + 1}
          </span>
        ) : null
      }
      tools={
        <>
          <Btn tone="go" disabled={added} onClick={() => (setAdded(true), sfx.drop())}>
            add 1 more
          </Btn>
          <Btn
            tone="pink"
            onClick={() => {
              setN(rand(0, 9))
              setAdded(false)
            }}
          >
            new number
          </Btn>
        </>
      }
    >
      <div className="lx-onemore">
        <div className="lx-onemore-row">
          {[...Array(n)].map((_, i) => (
            <Sprite key={i} name="counterYellow" size={3.4} pal={{ Y: '#3d7be0', y: '#1f4fa8' }} />
          ))}
          {added ? <Sprite name="counterRed" size={3.4} className="lx-drop-in" /> : <span className="lx-onemore-slot">+1</span>}
        </div>
        <div className="lx-onemore-eq">
          <NumCard n={n} size={6} />
          <span>+</span>
          <NumCard n={1} size={6} />
          <span>=</span>
          {added ? <NumCard n={n + 1} size={6} /> : <div className="lx-card lx-numcard" style={{ width: '4.3em', height: '6em' }}><span style={{ fontSize: '2em' }}>?</span></div>}
        </div>
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// The adding machine: drop a number in, it comes out k more.
// ---------------------------------------------------------------------------

export function AddMachine({ k: k0 = 3 }: { k?: number }) {
  const { student, report } = useSlide()
  const [k, setK] = useState(k0)
  const [inside, setInside] = useState<number | null>(null)
  const [out, setOut] = useState<number | null>(null)
  const [log, setLog] = useState<[number, number][]>([])
  const [guess, setGuess] = useState<number | null>(null)
  const [right, setRight] = useState(0)
  const [flash, setFlash] = useFlash()
  const chk = useCheck()
  const inputs = [...Array(11 - k).keys()]

  function onDrop(id: string, zone: string | null) {
    if (zone !== 'hopper' || inside !== null) return
    const v = Number(id.slice(1))
    setInside(v)
    setOut(null)
    setGuess(null)
    chk.reset()
    sfx.drop()
    if (!student) window.setTimeout(() => finish(v), 900)
  }

  function finish(v: number) {
    setOut(v + k)
    setLog((l) => [[v, v + k] as [number, number], ...l].slice(0, 6))
    setInside(null)
    sfx.yes()
  }

  return (
    <Act
      tag={`add ${k} machine`}
      scene="space"
      prompt={
        <>
          Drop a number into the machine. It <b>adds {k}</b>! {student && 'What comes out?'}
        </>
      }
      status={
        <div className="lx-log">
          {log.map(([a, b], i) => (
            <span key={i}>
              {a} + {k} = <b>{b}</b>
            </span>
          ))}
        </div>
      }
      tools={
        !student && (
          <>
            {[1, 2, 3, 4].map((v) => (
              <Btn
                key={v}
                tone={v === k ? 'blue' : 'plain'}
                onClick={() => {
                  setK(v)
                  setLog([])
                  setOut(null)
                }}
              >
                add {v}
              </Btn>
            ))}
          </>
        )
      }
    >
      <div className="lx-machine-wrap">
        <div className="lx-machine-in">
          {inputs.map((v) => (
            <Draggable key={v} id={`v${v}`} onDrop={onDrop}>
              <div className="lx-tile">{v}</div>
            </Draggable>
          ))}
        </div>
        <div className={`lx-machine ${inside !== null && !student ? 'is-busy' : ''} ${flash ? 'is-wrong' : ''}`}>
          <Zone id="hopper" className="lx-hopper">
            {inside !== null ? <span className="lx-tile">{inside}</span> : <span className="lx-dim">drop here</span>}
          </Zone>
          <div className="lx-machine-body">
            <span className="lx-machine-sign">+{k}</span>
            <span className="lx-machine-lights">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="lx-chute">{out !== null ? <span className="lx-tile lx-tile-out" key={`${out}-${log.length}`}>{out}</span> : <span className="lx-dim">out</span>}</div>
        </div>
        {student && inside !== null && (
          <div className="lx-answer-col">
            <NumberPad value={guess} onChange={setGuess} />
            <Btn
              tone="go"
              big
              disabled={guess === null}
              onClick={() => {
                const ok = guess === inside + k
                if (ok) {
                  const r = right + 1
                  setRight(r)
                  finish(inside)
                  if (r >= 3) report(1)
                } else {
                  setFlash('m')
                  chk.check(false)
                }
              }}
            >
              check
            </Btn>
            <Feedback state={chk.v} wrong={`Count on ${k} from ${inside}.`} />
          </div>
        )}
        {student && right >= 3 && <Bubble who="bolt">3 right! Machine master!</Bubble>}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Equation builder: picture → "_ and _ make _" → "_ + _ = _".
// ---------------------------------------------------------------------------

function newEq() {
  const a = rand(0, 7)
  const b = rand(a === 0 ? 1 : 0, Math.min(5, 10 - a))
  const sprite = (['apple', 'duck', 'fish', 'star', 'flower', 'cupcake', 'tomato', 'shell'] as SpriteName[])[rand(0, 7)]
  return { a, b, sprite }
}

export function EquationBuilder({ a: a0, b: b0, sprite: s0 }: { a?: number; b?: number; sprite?: SpriteName }) {
  const [q, setQ] = useState(() => (a0 !== undefined && b0 !== undefined && s0 ? { a: a0, b: b0, sprite: s0 } : newEq()))
  const [slots, setSlots] = useState<(number | null)[]>([null, null, null])
  const [flash, setFlash] = useFlash()
  const chk = useCheck()
  const c = q.a + q.b
  const t = thing(q.sprite)
  const tiles = useMemo(() => {
    const extra = [c + 1 <= 10 ? c + 1 : c - 2, Math.max(0, c - 1)].filter((v) => v !== q.a && v !== q.b && v !== c)
    return shuffle([q.a, q.b, c, ...extra]).map((v, i) => ({ id: `t${i}`, v }))
  }, [q, c])

  function onDrop(id: string, zone: string | null) {
    if (!zone?.startsWith('e')) return
    const i = Number(zone.slice(1))
    const tile = tiles.find((x) => x.id === id)!
    setSlots((s) => s.map((v, k) => (k === i ? tile.v : v)))
    sfx.drop()
  }

  function check() {
    const [x, y, z] = slots
    const ok = z === c && ((x === q.a && y === q.b) || (x === q.b && y === q.a))
    chk.check(ok)
    if (!ok) setFlash('eq')
  }

  return (
    <Act
      tag="+ and ="
      scene="paper"
      prompt={
        <>
          Tell the number story. Then write the <b>addition equation</b>.
        </>
      }
      status={
        chk.v === 'right' ? (
          <span className="lx-say">
            “{WORD[slots[0] ?? 0]} <b>plus</b> {WORD[slots[1] ?? 0]} <b>equals</b> {WORD[c]}.” Another fact: {slots[1]} + {slots[0]} = {c}
          </span>
        ) : (
          <Feedback state={chk.v} wrong="Look at the two parts and the whole again." />
        )
      }
      tools={
        <>
          <Btn tone="warn" onClick={() => (setSlots([null, null, null]), chk.reset())}>
            clear
          </Btn>
          <Btn tone="go" disabled={slots.includes(null)} onClick={check}>
            check
          </Btn>
          <Btn
            tone="pink"
            onClick={() => {
              setQ(newEq())
              setSlots([null, null, null])
              chk.reset()
            }}
          >
            new story
          </Btn>
        </>
      }
    >
      <div className="lx-eqb">
        <div className="lx-eqb-story">
          <div className="lx-eqb-group">
            {[...Array(q.a)].map((_, i) => (
              <Sprite key={i} name={q.sprite} size={2.8} />
            ))}
            {q.a === 0 && <span className="lx-dim">none</span>}
          </div>
          <div className="lx-eqb-group">
            {[...Array(q.b)].map((_, i) => (
              <Sprite key={i} name={q.sprite} size={2.8} style={TINT} />
            ))}
            {q.b === 0 && <span className="lx-dim">none</span>}
          </div>
        </div>
        <p className="lx-eqb-text">
          There {q.a === 1 ? 'is' : 'are'} {q.a} {q.a === 1 ? t.one : t.many} here and {q.b} there. How many altogether?
        </p>
        <div className={`lx-eq ${flash === 'eq' ? 'is-wrong' : ''}`}>
          <Zone id="e0" className="lx-slot">{slots[0] ?? ''}</Zone>
          <span>+</span>
          <Zone id="e1" className="lx-slot">{slots[1] ?? ''}</Zone>
          <span>=</span>
          <Zone id="e2" className="lx-slot">{slots[2] ?? ''}</Zone>
        </div>
        <div className="lx-tiles">
          {tiles.map((x) => (
            <Draggable key={x.id} id={x.id} onDrop={onDrop}>
              <div className="lx-tile">{x.v}</div>
            </Draggable>
          ))}
        </div>
        {chk.v === 'right' && <Confetti />}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Fact hunt: find every card with the same value as the target.
// ---------------------------------------------------------------------------

function dealFacts() {
  const t = rand(4, 10)
  const same = shuffle([...Array(t + 1).keys()].map((a) => [a, t - a] as [number, number])).slice(0, rand(4, 6))
  const others: [number, number][] = []
  while (others.length < 12 - same.length) {
    const a = rand(0, 6)
    const b = rand(0, 10 - a)
    if (a + b !== t && !others.some(([x, y]) => x === a && y === b)) others.push([a, b])
  }
  const target = same[0]
  return { t, target, cards: shuffle([...same.slice(1), ...others]).map(([a, b], i) => ({ i, a, b })) }
}

export function FactHunt() {
  const { report } = useSlide()
  const [d, setD] = useState(dealFacts)
  const [picked, setPicked] = useState<Set<number>>(new Set())
  const [flash, setFlash] = useFlash()
  const misses = useRef(0)
  const need = d.cards.filter((c) => c.a + c.b === d.t).length
  const got = [...picked].filter((i) => d.cards[i].a + d.cards[i].b === d.t).length
  const done = got === need

  function tap(i: number) {
    if (picked.has(i) || done) return
    const c = d.cards[i]
    if (c.a + c.b === d.t) {
      const p = new Set(picked)
      p.add(i)
      setPicked(p)
      sfx.yes()
      if (got + 1 === need) {
        sfx.win()
        report(Math.max(0.3, 1 - misses.current * 0.2))
      }
    } else {
      misses.current++
      setFlash(`c${i}`)
      sfx.no()
    }
  }

  return (
    <Act
      tag="fact hunt"
      scene="night"
      prompt={
        <>
          Find every card that has the <b>same value</b> as{' '}
          <b>
            {d.target[0]} + {d.target[1]}
          </b>
          !
        </>
      }
      status={<span className="lx-tally">found {got} of {need}</span>}
      tools={
        <Btn
          tone="pink"
          onClick={() => {
            setD(dealFacts())
            setPicked(new Set())
            misses.current = 0
          }}
        >
          new round
        </Btn>
      }
    >
      <div className="lx-facts">
        <div className="lx-fact lx-fact-target">
          {d.target[0]} + {d.target[1]}
        </div>
        <div className="lx-facts-grid">
          {d.cards.map((c) => (
            <button type="button" key={c.i} className={`lx-fact ${picked.has(c.i) ? 'is-right' : ''} ${flash === `c${c.i}` ? 'is-wrong' : ''}`} onClick={(e) => (e.stopPropagation(), tap(c.i))}>
              {c.a} + {c.b}
              {picked.has(c.i) && <small>= {d.t}</small>}
            </button>
          ))}
        </div>
        {done && (
          <div className="lx-result">
            <Confetti />
            <span>They all make {d.t}!</span>
          </div>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Story maker: build an addition story with pictures, then the equation.
// ---------------------------------------------------------------------------

const STORY_THINGS: SpriteName[] = ['duck', 'apple', 'fish', 'butterfly', 'cupcake', 'star', 'rabbit', 'shell']

export function StoryMaker() {
  const [sprite, setSprite] = useState<SpriteName>('duck')
  const [kind, setKind] = useState<'together' | 'more'>('more')
  const [n1, setN1] = useState(4)
  const [n2, setN2] = useState(2)
  const [show, setShow] = useState(false)
  const t = thing(sprite)
  const total = n1 + n2
  const nm = (n: number) => (n === 1 ? t.one : t.many)

  const step = (v: number, set: (n: number) => void, other: number) => (
    <span className="lx-stepper">
      <button type="button" onClick={(e) => (e.stopPropagation(), set(Math.max(0, v - 1)), setShow(false), sfx.blip())}>
        −
      </button>
      <b>{v}</b>
      <button type="button" onClick={(e) => (e.stopPropagation(), set(Math.min(10 - other, v + 1)), setShow(false), sfx.blip())}>
        +
      </button>
    </span>
  )

  return (
    <Act
      tag="story maker"
      scene="pond"
      prompt={<>Make an addition story. Tell it aloud, then write the equation.</>}
      tools={
        <>
          {STORY_THINGS.map((s) => (
            <Btn key={s} tone={s === sprite ? 'blue' : 'plain'} onClick={() => (setSprite(s), setShow(false))}>
              <Sprite name={s} size={1.2} />
            </Btn>
          ))}
          <Btn tone={kind === 'together' ? 'blue' : 'plain'} onClick={() => (setKind('together'), setShow(false))}>
            put together
          </Btn>
          <Btn tone={kind === 'more' ? 'blue' : 'plain'} onClick={() => (setKind('more'), setShow(false))}>
            more come
          </Btn>
          <Btn tone="go" onClick={() => (setShow(true), sfx.yes())}>
            show equation
          </Btn>
        </>
      }
    >
      <div className="lx-sm">
        <div className="lx-sm-scene">
          <div className="lx-eqb-group">
            {[...Array(n1)].map((_, i) => (
              <Sprite key={i} name={sprite} size={3} />
            ))}
          </div>
          <div className={`lx-eqb-group ${kind === 'more' ? 'lx-sm-coming' : ''}`} key={`${kind}${n2}`}>
            {[...Array(n2)].map((_, i) => (
              <Sprite key={i} name={sprite} size={3} style={kind === 'together' ? TINT : undefined} />
            ))}
          </div>
        </div>
        <div className="lx-sm-story">
          <p>
            There {n1 === 1 ? 'is' : 'are'} {step(n1, setN1, n2)} {kind === 'together' ? 'yellow ' : ''}
            {nm(n1)}.
          </p>
          {kind === 'together' ? (
            <p>
              There {n2 === 1 ? 'is' : 'are'} {step(n2, setN2, n1)} other {nm(n2)}.
            </p>
          ) : (
            <p>
              {step(n2, setN2, n1)} more {nm(n2)} {n2 === 1 ? 'comes' : 'come'} along.
            </p>
          )}
          <p>
            There {total === 1 ? 'is' : 'are'} <b>{show ? total : '?'}</b> {nm(total)} {kind === 'together' ? 'altogether' : 'now'}.
          </p>
          <div className="lx-eq lx-eq-small">
            <span className="lx-slot">{n1}</span>
            <span>+</span>
            <span className="lx-slot">{n2}</span>
            <span>=</span>
            <span className="lx-slot">{show ? total : '?'}</span>
          </div>
        </div>
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Thinking aloud: what does "=" mean? (3 + 5 = 4 + 4)
// ---------------------------------------------------------------------------

export function EqualsThink() {
  const claims = [
    { who: 'ravi' as const, eq: '3 + 5 = 8' },
    { who: 'jessie' as const, eq: '4 + 4 = 8' },
    { who: 'pip' as const, eq: '3 + 5 = 4 + 4' },
  ]
  const [votes, setVotes] = useState<Record<string, boolean>>({})
  const [shown, setShown] = useState(false)

  return (
    <Act
      tag="thinking aloud"
      scene="class"
      prompt={
        <>
          Are all three equations <b>correct</b>? Vote for each one.
        </>
      }
      status={shown ? <span className="lx-say">All three are correct! <b>=</b> means <b>both sides have the same value</b>.</span> : null}
      tools={
        <>
          <Btn tone="go" onClick={() => (setShown(true), sfx.yes())}>
            show the balance
          </Btn>
          <Btn tone="warn" onClick={() => (setVotes({}), setShown(false))}>
            reset
          </Btn>
        </>
      }
    >
      <div className="lx-eqt">
        <div className="lx-eqt-claims">
          {claims.map((c) => (
            <div key={c.eq} className="lx-eqt-claim">
              <Sprite name={c.who} size={4.4} />
              <div className="lx-eqt-card">{c.eq}</div>
              <div className="lx-eqt-vote">
                {[true, false].map((v) => (
                  <button
                    type="button"
                    key={String(v)}
                    className={`lx-option ${votes[c.eq] === v ? (shown ? (v ? 'is-right' : 'is-wrong') : 'is-picked') : ''}`}
                    onClick={(e) => (e.stopPropagation(), setVotes({ ...votes, [c.eq]: v }), sfx.blip())}
                  >
                    {v ? '✓' : '✗'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {shown && (
          <div className="lx-balance">
            <div className="lx-balance-beam">
              <div className="lx-balance-pan">
                {[...Array(3)].map((_, i) => <Sprite key={i} name="cube" size={2} />)}
                {[...Array(5)].map((_, i) => <Sprite key={`b${i}`} name="cube" size={2} style={TINT} />)}
                <small>3 + 5</small>
              </div>
              <div className="lx-balance-pan">
                {[...Array(4)].map((_, i) => <Sprite key={i} name="cube" size={2} />)}
                {[...Array(4)].map((_, i) => <Sprite key={`b${i}`} name="cube" size={2} style={TINT} />)}
                <small>4 + 4</small>
              </div>
            </div>
            <div className="lx-balance-stand" />
          </div>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Thinking aloud: take 7 bean bags from 5 blue and 5 green. Find every way.
// ---------------------------------------------------------------------------

export function BeanBags({ take = 7 }: { take?: number }) {
  const { report } = useSlide()
  const [out, setOut] = useState<Record<string, boolean>>({})
  const [found, setFound] = useState<string[]>([])
  const blue = Object.keys(out).filter((k) => out[k] && k[0] === 'b').length
  const green = Object.keys(out).filter((k) => out[k] && k[0] === 'g').length
  const n = blue + green
  const ways = [...Array(6).keys()].filter((b) => take - b >= 0 && take - b <= 5).map((b) => `${b}-${take - b}`)

  function tap(id: string) {
    if (!out[id] && n >= take) {
      sfx.no()
      return
    }
    setOut({ ...out, [id]: !out[id] })
    sfx.blip()
  }

  function record() {
    const key = `${blue}-${green}`
    if (n !== take || found.includes(key)) {
      sfx.no()
      return
    }
    const next = [...found, key]
    setFound(next)
    sfx.yes()
    if (next.length === ways.length) {
      sfx.win()
      report(1)
    }
  }

  const bag = (id: string, colour: 'b' | 'g') => (
    <button type="button" key={id} className="lx-bag" onClick={(e) => (e.stopPropagation(), tap(id))}>
      <Sprite name="beanbag" size={2.6} pal={colour === 'g' ? { B: '#4fc35a', b: '#2e8a3c' } : undefined} />
    </button>
  )

  return (
    <Act
      tag="thinking aloud"
      scene="class"
      prompt={
        <>
          5 blue and 5 green bean bags. Ravi takes out <b>{take}</b>. How many are blue and how many are green? <b>Find every way!</b>
        </>
      }
      status={
        <span className="lx-say">
          taken: <b>{blue}</b> blue and <b>{green}</b> green = <b>{n}</b>
        </span>
      }
      tools={
        <>
          <Btn tone="warn" onClick={() => setOut({})}>
            put back
          </Btn>
          <Btn tone="go" disabled={n !== take} onClick={record}>
            record
          </Btn>
        </>
      }
    >
      <div className="lx-bags">
        <div className="lx-bags-basket">
          <span className="lx-pile-label">basket</span>
          <div className="lx-nb-row">{['b0', 'b1', 'b2', 'b3', 'b4'].filter((id) => !out[id]).map((id) => bag(id, 'b'))}</div>
          <div className="lx-nb-row">{['g0', 'g1', 'g2', 'g3', 'g4'].filter((id) => !out[id]).map((id) => bag(id, 'g'))}</div>
        </div>
        <div className="lx-bags-hands">
          <span className="lx-pile-label">Ravi’s {take}</span>
          <div className="lx-nb-row">{['b0', 'b1', 'b2', 'b3', 'b4'].filter((id) => out[id]).map((id) => bag(id, 'b'))}</div>
          <div className="lx-nb-row">{['g0', 'g1', 'g2', 'g3', 'g4'].filter((id) => out[id]).map((id) => bag(id, 'g'))}</div>
        </div>
        <div className="lx-nb-found">
          <span className="lx-pile-label">
            ways found: {found.length} of {ways.length}
          </span>
          {found.map((f) => {
            const [b, g] = f.split('-')
            return (
              <span key={f} className="lx-nb-chip">
                {b} blue + {g} green = {take}
              </span>
            )
          })}
        </div>
        {found.length === ways.length && (
          <div className="lx-result">
            <Confetti />
            <span>Every way to make {take}!</span>
            <small>6 + 1 can’t work: there are only 5 of each colour.</small>
          </div>
        )}
      </div>
    </Act>
  )
}

/** A dot card used beside a numeral card in count-on warm-ups. */
export function CountOnCards({ a, b }: { a: number; b: number }) {
  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <NumCard n={a} size={8} />
      <DotCard n={b} size={8} />
    </div>
  )
}
