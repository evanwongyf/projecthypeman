import { useState, type CSSProperties } from 'react'
import './addition.css'
import './subtraction.css'
import { CAST, Sprite, thing, type CastId, type SpriteName } from './pixel'
import { Act, BondDiagram, Btn, Bubble, Confetti, Feedback, NumCard, NumberPad, rand, seeded, shuffle, useCheck, useSlide } from './kit'
import { sfx } from './sfx'

const TINT: CSSProperties = { filter: 'hue-rotate(115deg) saturate(1.1)' }

// ---------------------------------------------------------------------------
// Toss 10 counters: record how many land red and yellow. (M3)
// ---------------------------------------------------------------------------

export function TossTen() {
  const { report } = useSlide()
  const [red, setRed] = useState<number | null>(null)
  const [seed, setSeed] = useState(1)
  const [found, setFound] = useState<number[]>([])
  const pos = (() => {
    const r = seeded(seed * 7 + 3)
    return [...Array(10)].map(() => ({ x: 8 + r() * 80, y: 8 + r() * 70, rot: r() * 40 - 20 }))
  })()

  function toss() {
    // Each counter lands red or yellow: a fair coin per counter.
    let r = 0
    for (let i = 0; i < 10; i++) if (Math.random() < 0.5) r++
    setRed(r)
    setSeed((s) => s + 1)
    sfx.whoosh()
  }

  function record() {
    if (red === null || found.includes(red)) {
      sfx.no()
      return
    }
    const next = [...found, red].sort((a, b) => a - b)
    setFound(next)
    sfx.yes()
    if (next.length >= 6) report(1)
  }

  return (
    <Act
      tag="toss 10"
      scene="class"
      prompt={
        <>
          Toss 10 counters. How many are <b>red</b>? How many are <b>yellow</b>? Record the bond!
        </>
      }
      status={
        red !== null ? (
          <span className="lx-say">
            <b>{red}</b> and <b>{10 - red}</b> make <b>10</b>
          </span>
        ) : (
          <span className="lx-dim">tap “toss” to start</span>
        )
      }
      tools={
        <>
          <Btn tone="pink" onClick={toss}>
            toss!
          </Btn>
          <Btn tone="go" disabled={red === null} onClick={record}>
            record
          </Btn>
          <Btn tone="warn" onClick={() => (setFound([]), setRed(null))}>
            clear
          </Btn>
        </>
      }
    >
      <div className="lx-toss">
        <div className="lx-toss-desk">
          {red !== null &&
            pos.map((p, i) => (
              <span key={`${seed}-${i}`} className="lx-toss-chip" style={{ left: `${p.x}%`, top: `${p.y}%`, transform: `rotate(${p.rot}deg)`, animationDelay: `${i * 40}ms` }}>
                <Sprite name={i < red ? 'counterRed' : 'counterYellow'} size={3} />
              </span>
            ))}
        </div>
        <div className="lx-nb-right">
          <BondDiagram a={red ?? '?'} b={red === null ? '?' : 10 - red} whole={10} size={1.2} />
          <div className="lx-nb-found">
            <span className="lx-pile-label">recorded</span>
            {found.map((r) => (
              <span key={r} className="lx-nb-chip">
                {r} red and {10 - r} yellow
              </span>
            ))}
          </div>
        </div>
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Take away: tap things to take them away, counting back. (E4, E5)
// ---------------------------------------------------------------------------

const AWAY_THINGS: SpriteName[] = ['balloon', 'cupcake', 'apple', 'fish', 'cherry', 'star', 'duck', 'bun']

export function TakeAway({ n: n0, k: k0, sprite: s0, random = false }: { n?: number; k?: number; sprite?: SpriteName; random?: boolean }) {
  const { student } = useSlide()
  const fresh = () => {
    const n = rand(4, 10)
    return { n, k: rand(1, n - 1), sprite: AWAY_THINGS[rand(0, AWAY_THINGS.length - 1)] }
  }
  const [q, setQ] = useState(() => (n0 && k0 && s0 && !random ? { n: n0, k: k0, sprite: s0 } : fresh()))
  const [gone, setGone] = useState<number[]>([])
  const [ans, setAns] = useState<number | null>(null)
  const chk = useCheck()
  const t = thing(q.sprite)
  const left = q.n - gone.length
  const done = gone.length === q.k

  function take(i: number) {
    if (gone.includes(i) || done) return
    setGone([...gone, i])
    sfx.tap(q.n - gone.length - 1)
    if (gone.length + 1 === q.k) window.setTimeout(sfx.yes, 200)
  }

  function auto() {
    setGone([])
    let k = 0
    const id = window.setInterval(() => {
      k++
      setGone([...Array(k)].map((_, j) => q.n - 1 - j))
      sfx.tap(q.n - k)
      if (k >= q.k) {
        window.clearInterval(id)
        window.setTimeout(sfx.yes, 200)
      }
    }, 700)
  }

  return (
    <Act
      tag="take away"
      scene="market"
      prompt={
        <>
          There are <b>{q.n}</b> {t.many}. Take away <b>{q.k}</b>. Tap them and <b>count back</b>! How many are <b>left</b>?
        </>
      }
      status={
        done ? (
          <span className="lx-say">
            {q.n} take away {q.k}: <b>{left}</b> {left === 1 ? t.one : t.many} left. &nbsp; {q.n} − {q.k} = {left}
          </span>
        ) : gone.length ? (
          <span className="lx-say">
            Count back: {q.n}… {gone.map((_, j) => q.n - j - 1).join(', ')}
          </span>
        ) : (
          <Feedback state={chk.v} wrong="Count back one for each thing you take away." />
        )
      }
      tools={
        <>
          {!student && <Btn onClick={auto}>count back for me</Btn>}
          <Btn tone="warn" onClick={() => (setGone([]), setAns(null), chk.reset())}>
            reset
          </Btn>
          <Btn
            tone="pink"
            onClick={() => {
              setQ(fresh())
              setGone([])
              setAns(null)
              chk.reset()
            }}
          >
            new
          </Btn>
        </>
      }
    >
      <div className="lx-take">
        <div className="lx-take-row">
          {[...Array(q.n)].map((_, i) => {
            const g = gone.indexOf(i)
            return (
              <button type="button" key={i} className={`lx-set-thing lx-tapthing ${g >= 0 ? 'lx-gone' : ''}`} onClick={(e) => (e.stopPropagation(), take(i))}>
                <Sprite name={q.sprite} size={3.4} />
                {g >= 0 && <span className="lx-badge lx-badge-back">{q.n - g - 1}</span>}
              </button>
            )
          })}
        </div>
        {done && <BondDiagram a={q.k} b={left} whole={q.n} size={1} />}
        {student && done && chk.v !== 'right' && (
          <div className="lx-answer-col">
            <span className="lx-say">How many are left?</span>
            <NumberPad value={ans} onChange={setAns} />
            <Btn tone="go" big disabled={ans === null} onClick={() => chk.check(ans === left)}>
              check
            </Btn>
          </div>
        )}
        {chk.v === 'right' && <Feedback state="right" right={`Yes! ${left} left.`} />}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// One less: butterflies fly away one at a time. (E6)
// ---------------------------------------------------------------------------

export function FlyAway({ start = 5 }: { start?: number }) {
  const [n, setN] = useState(start)
  const [k, setK] = useState(1)
  const [flying, setFlying] = useState<number[]>([])
  const [said, setSaid] = useState(`There are ${start} butterflies in the garden.`)

  function fly() {
    if (n - k < 0) {
      sfx.no()
      return
    }
    const ids = [...Array(k)].map((_, j) => n - 1 - j)
    setFlying(ids)
    sfx.whoosh()
    window.setTimeout(() => {
      const m = n - k
      setN(m)
      setFlying([])
      const less = k === 1 ? 'one less' : k === 2 ? 'two less' : 'three less'
      setSaid(`Now there ${k === 1 ? 'is' : 'are'} ${less}. There ${m === 1 ? 'is' : 'are'} ${m} ${m === 1 ? 'butterfly' : 'butterflies'} left.`)
    }, 900)
  }

  return (
    <Act
      tag="1 less"
      scene="pond"
      prompt={
        <>
          {k === 1 ? '1 butterfly flies' : `${k} butterflies fly`} away. How many are <b>left</b>?
        </>
      }
      status={<Bubble who="jessie">{said}</Bubble>}
      tools={
        <>
          {[1, 2, 3].map((v) => (
            <Btn key={v} tone={k === v ? 'blue' : 'plain'} onClick={() => setK(v)}>
              {v} less
            </Btn>
          ))}
          <Btn tone="go" disabled={n - k < 0} onClick={fly}>
            fly away!
          </Btn>
          <Btn
            tone="pink"
            onClick={() => {
              const m = rand(4, 10)
              setN(m)
              setSaid(`There are ${m} butterflies in the garden.`)
            }}
          >
            new garden
          </Btn>
        </>
      }
    >
      <div className="lx-garden">
        {[...Array(n)].map((_, i) => (
          <span key={i} className={`lx-bfly ${flying.includes(i) ? 'is-flying' : ''}`} style={{ left: `${10 + (i % 5) * 18}%`, top: `${i < 5 ? 18 : 52}%`, animationDelay: `${(i % 4) * 0.3}s` }}>
            <Sprite name="butterfly" size={3.6} />
          </span>
        ))}
        <div className="lx-garden-count">
          <NumCard n={n} size={7} />
        </div>
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Cup count back: some counters hide in the cup. Take away the rest,
// counting back from 10, to find how many are hiding. (E5)
// ---------------------------------------------------------------------------

export function CupCountBack({ total = 10 }: { total?: number }) {
  const { student } = useSlide()
  const [hidden, setHidden] = useState(() => rand(2, total - 2))
  const [taken, setTaken] = useState(0)
  const [ans, setAns] = useState<number | null>(null)
  const chk = useCheck()
  const out = total - hidden
  const done = taken === out

  return (
    <Act
      tag="count back"
      scene="class"
      prompt={
        <>
          There are <b>{total}</b> counters. Some are under the cup. Take away the others one by one and <b>count back</b>!
        </>
      }
      status={
        done ? (
          <span className="lx-say">
            {total}… {[...Array(out)].map((_, j) => total - j - 1).join(', ')}. <b>{hidden}</b> are hiding in the cup!
          </span>
        ) : taken ? (
          <span className="lx-say">
            {total}… {[...Array(taken)].map((_, j) => total - j - 1).join(', ')}
          </span>
        ) : (
          <span className="lx-dim">tap a counter to take it away</span>
        )
      }
      tools={
        <>
          <Btn
            tone="pink"
            onClick={() => {
              setHidden(rand(2, total - 2))
              setTaken(0)
              setAns(null)
              chk.reset()
            }}
          >
            new round
          </Btn>
        </>
      }
    >
      <div className="lx-cupback">
        <div className={`lx-hide-cupwrap ${done && (!student || chk.v === 'right') ? 'is-up' : ''}`}>
          <div className="lx-hide-under">
            {[...Array(hidden)].map((_, i) => (
              <Sprite key={i} name="counterRed" size={2.4} />
            ))}
          </div>
          <div className="lx-hide-cup">?</div>
        </div>
        <div className="lx-cupback-table">
          {[...Array(out)].map((_, i) =>
            i < taken ? (
              <span key={i} className="lx-cupback-said">
                {total - i - 1}
              </span>
            ) : (
              <button
                type="button"
                key={i}
                className="lx-tapthing"
                onClick={(e) => {
                  e.stopPropagation()
                  if (i !== taken) return
                  setTaken(taken + 1)
                  sfx.tap(total - taken - 1)
                }}
              >
                <Sprite name="counterRed" size={3} />
              </button>
            ),
          )}
        </div>
        {student && done && chk.v !== 'right' && (
          <div className="lx-answer-col">
            <span className="lx-say">How many are in the cup?</span>
            <NumberPad value={ans} onChange={setAns} />
            <Btn tone="go" big disabled={ans === null} onClick={() => chk.check(ans === hidden)}>
              check
            </Btn>
          </div>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Family of facts: one bond, two addition and two subtraction facts. (E10, M11)
// ---------------------------------------------------------------------------

function newFamily() {
  // Two numbers from 1 to 10; at most one may be more than 5, and the whole stays within 10.
  for (;;) {
    const a = rand(1, 9)
    const b = rand(1, 9)
    if (a + b <= 10 && !(a > 5 && b > 5) && a !== b) return { a, b }
  }
}

export function FactFamily({ a: a0, b: b0, sprite = 'apple' }: { a?: number; b?: number; sprite?: SpriteName }) {
  const { student, report } = useSlide()
  const [q, setQ] = useState(() => (a0 && b0 ? { a: a0, b: b0 } : newFamily()))
  const [open, setOpen] = useState<boolean[]>([false, false, false, false])
  const [picks, setPicks] = useState<(number | null)[]>([null, null, null, null])
  const w = q.a + q.b
  const facts = [
    { l: `${q.a} + ${q.b}`, r: w },
    { l: `${q.b} + ${q.a}`, r: w },
    { l: `${w} − ${q.a}`, r: q.b },
    { l: `${w} − ${q.b}`, r: q.a },
  ]
  const allRight = picks.every((p, i) => p === facts[i].r)

  function choose(i: number, v: number) {
    const next = picks.map((p, k) => (k === i ? v : p))
    setPicks(next)
    if (v === facts[i].r) sfx.yes()
    else sfx.no()
    if (next.every((p, k) => p === facts[k].r)) {
      sfx.win()
      report(1)
    }
  }

  return (
    <Act
      tag="family of facts"
      scene="sky"
      prompt={
        <>
          One number bond, <b>four facts</b>: two addition and two subtraction.
        </>
      }
      status={
        <span className="lx-say">
          <b>{q.a}</b> and <b>{q.b}</b> make <b>{w}</b>
        </span>
      }
      tools={
        <>
          {!student && (
            <Btn onClick={() => (setOpen([true, true, true, true]), sfx.flip())}>show all</Btn>
          )}
          <Btn
            tone="pink"
            onClick={() => {
              setQ(newFamily())
              setOpen([false, false, false, false])
              setPicks([null, null, null, null])
            }}
          >
            new family
          </Btn>
        </>
      }
    >
      <div className="lx-family">
        <div className="lx-family-pic">
          <div className="lx-eqb-group">
            {[...Array(q.a)].map((_, i) => (
              <Sprite key={i} name={sprite} size={2.4} />
            ))}
            {[...Array(q.b)].map((_, i) => (
              <Sprite key={`b${i}`} name={sprite} size={2.4} style={TINT} />
            ))}
          </div>
          <BondDiagram a={q.a} b={q.b} whole={w} size={1.1} />
        </div>
        <div className="lx-house">
          <div className="lx-house-roof">
            <span>{w}</span>
          </div>
          <div className="lx-house-body">
            {facts.map((f, i) => (
              <div key={i} className="lx-house-fact">
                <span>{f.l} =</span>
                {student ? (
                  <span className="lx-house-picks">
                    {shuffle([f.r, Math.max(0, f.r - 1), Math.min(10, f.r + 1)].filter((v, k, arr) => arr.indexOf(v) === k))
                      .sort((x, y) => x - y)
                      .map((v) => (
                        <button type="button" key={v} className={`lx-option ${picks[i] === v ? (v === f.r ? 'is-right' : 'is-wrong') : ''}`} onClick={(e) => (e.stopPropagation(), choose(i, v))}>
                          {v}
                        </button>
                      ))}
                  </span>
                ) : (
                  <button type="button" className={`lx-house-ans ${open[i] ? 'is-open' : ''}`} onClick={(e) => (e.stopPropagation(), setOpen(open.map((o, k) => (k === i ? !o : o))), sfx.flip())}>
                    {open[i] ? f.r : '?'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        {student && allRight && <Confetti />}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Fact flash: a fact card for two teams; reveal, then score. (M9, M13)
// ---------------------------------------------------------------------------

function newFact(ops: 'sub' | 'mixed', max: number) {
  const sub = ops === 'sub' || Math.random() < 0.5
  if (sub) {
    const a = rand(1, max)
    return { a, b: rand(0, a), op: '−' as const }
  }
  const a = rand(0, max)
  return { a, b: rand(0, max - a), op: '+' as const }
}

export function FactFlash({ ops = 'sub' }: { ops?: 'sub' | 'mixed' }) {
  const { student, report } = useSlide()
  const [max, setMax] = useState(5)
  const [f, setF] = useState(() => newFact(ops, 5))
  const [shown, setShown] = useState(false)
  const [team, setTeam] = useState(0)
  const [score, setScore] = useState([0, 0])
  const [ans, setAns] = useState<number | null>(null)
  const [right, setRight] = useState(0)
  const chk = useCheck()
  const value = f.op === '+' ? f.a + f.b : f.a - f.b

  function next(m = max) {
    setF(newFact(ops, m))
    setShown(false)
    setAns(null)
    chk.reset()
  }

  return (
    <Act
      tag="fact cards"
      scene="space"
      prompt={
        <>
          Say the answer as fast as you can! {student ? 'Tap the number.' : 'Then turn the card over to check.'}
        </>
      }
      status={
        student ? (
          <span className="lx-tally">right: {right} of 5</span>
        ) : (
          <div className="lx-teams">
            {['Team Jessie', 'Team Ravi'].map((name, i) => (
              <span key={i} className={`lx-team ${team === i ? 'is-turn' : ''}`}>
                {name} <b>{score[i]}</b>
              </span>
            ))}
          </div>
        )
      }
      tools={
        <>
          {[5, 10].map((m) => (
            <Btn key={m} tone={max === m ? 'blue' : 'plain'} onClick={() => (setMax(m), next(m))}>
              within {m}
            </Btn>
          ))}
          {!student && (
            <>
              <Btn onClick={() => (setShown(true), sfx.flip())}>turn over</Btn>
              <Btn
                tone="go"
                disabled={!shown}
                onClick={() => {
                  setScore((s) => s.map((v, i) => (i === team ? v + 1 : v)))
                  setTeam(1 - team)
                  sfx.yes()
                  next()
                }}
              >
                correct!
              </Btn>
              <Btn
                tone="warn"
                disabled={!shown}
                onClick={() => {
                  setTeam(1 - team)
                  next()
                }}
              >
                not quite
              </Btn>
            </>
          )}
        </>
      }
    >
      <div className="lx-flashfact">
        <div className={`lx-flipcard lx-factcard ${shown ? 'is-open' : ''}`}>
          <div className="lx-flipcard-back lx-factcard-q">
            {f.a} {f.op} {f.b}
          </div>
          <div className="lx-flipcard-front lx-factcard-a">
            {f.a} {f.op} {f.b} = {value}
          </div>
        </div>
        {student && (
          <div className="lx-answer-col">
            <NumberPad value={ans} onChange={setAns} />
            <Btn
              tone="go"
              big
              disabled={ans === null}
              onClick={() => {
                if (chk.check(ans === value)) {
                  setShown(true)
                  const r = right + 1
                  setRight(r)
                  if (r >= 5) {
                    sfx.win()
                    report(1)
                  }
                  window.setTimeout(() => next(), 1100)
                }
              }}
            >
              check
            </Btn>
            <Feedback state={chk.v} wrong="Count back, or think of the number bond." />
          </div>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Make 10 tray: how many more to fill the tray? (M15)
// ---------------------------------------------------------------------------

const TRAY_THINGS: SpriteName[] = ['bun', 'cupcake', 'apple', 'mango']

export function MakeTenTray() {
  const { student } = useSlide()
  const [q, setQ] = useState(() => ({ n: rand(2, 8), sprite: TRAY_THINGS[rand(0, TRAY_THINGS.length - 1)] }))
  const [added, setAdded] = useState(0)
  const [ans, setAns] = useState<number | null>(null)
  const chk = useCheck()
  const need = 10 - q.n
  const full = q.n + added === 10

  return (
    <Act
      tag="make 10"
      scene="market"
      prompt={
        <>
          The bakery tray holds <b>10</b>. There {q.n === 1 ? 'is' : 'are'} {q.n} on it. <b>How many more</b> to fill it?
        </>
      }
      status={
        full ? (
          <span className="lx-say">
            {q.n} + <b>{need}</b> = 10 &nbsp; and &nbsp; 10 − {q.n} = <b>{need}</b>
          </span>
        ) : (
          <span className="lx-say">added: {added}</span>
        )
      }
      tools={
        <>
          <Btn tone="warn" onClick={() => setAdded(0)}>
            empty
          </Btn>
          <Btn
            tone="pink"
            onClick={() => {
              setQ({ n: rand(2, 8), sprite: TRAY_THINGS[rand(0, TRAY_THINGS.length - 1)] })
              setAdded(0)
              setAns(null)
              chk.reset()
            }}
          >
            new tray
          </Btn>
        </>
      }
    >
      <div className="lx-tray-wrap">
        <div className="lx-tray">
          {[...Array(10)].map((_, i) => (
            <button
              type="button"
              key={i}
              className={`lx-tray-cell ${i >= q.n && i < q.n + added ? 'is-added' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                if (i < q.n) return
                if (i < q.n + added) setAdded(i - q.n)
                else if (!full) {
                  setAdded(added + 1)
                  sfx.tap(q.n + added + 1)
                  if (q.n + added + 1 === 10) window.setTimeout(sfx.yes, 150)
                }
              }}
            >
              {i < q.n + added && <Sprite name={q.sprite} size={3} />}
            </button>
          ))}
        </div>
        {student && (
          <div className="lx-answer-col">
            <NumberPad value={ans} onChange={setAns} />
            <Btn tone="go" big disabled={ans === null} onClick={() => chk.check(ans === need)}>
              check
            </Btn>
            <Feedback state={chk.v} right={`Yes! ${q.n} and ${need} make 10.`} wrong="Fill the empty spaces and count them." />
          </div>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Thinking aloud: 1 fewer and 1 more. (M16)
// Jessie has 1 fewer mango than Ravi. Ravi has 1 more mango than Pip.
// ---------------------------------------------------------------------------

export function Mangoes() {
  const [r, setR] = useState(5)
  const [shown, setShown] = useState(false)
  const people: { who: CastId; n: number; rule: string }[] = [
    { who: 'jessie', n: r - 1, rule: '1 fewer than Ravi' },
    { who: 'ravi', n: r, rule: 'try any number!' },
    { who: 'pip', n: r - 1, rule: 'Ravi has 1 more than Pip' },
  ]

  return (
    <Act
      tag="thinking aloud"
      scene="market"
      prompt={
        <>
          Jessie has <b>1 fewer</b> mango than Ravi. Ravi has <b>1 more</b> mango than Pip. What do you know?
        </>
      }
      status={shown ? <span className="lx-say">Jessie and Pip always have <b>the same number</b>, whatever Ravi has!</span> : <span className="lx-dim">change Ravi’s mangoes and watch</span>}
      tools={
        <>
          <Btn onClick={() => (setR(Math.max(1, r - 1)), sfx.blip())}>Ravi − 1</Btn>
          <Btn onClick={() => (setR(Math.min(10, r + 1)), sfx.blip())}>Ravi + 1</Btn>
          <Btn tone="go" onClick={() => (setShown(true), sfx.yes())}>
            what do we notice?
          </Btn>
        </>
      }
    >
      <div className="lx-mangoes">
        {people.map((p) => (
          <div key={p.who} className={`lx-mango-col ${shown && p.who !== 'ravi' ? 'is-same' : ''}`}>
            <Sprite name={CAST[p.who].sprite} size={6} />
            <span className="lx-mango-name" style={{ background: CAST[p.who].colour }}>
              {CAST[p.who].name}
            </span>
            <div className="lx-mango-basket">
              {[...Array(p.n)].map((_, i) => (
                <Sprite key={i} name="mango" size={2} />
              ))}
              {p.n === 0 && <span className="lx-dim">none</span>}
            </div>
            <span className="lx-plate-count">{p.n}</span>
            <small>{p.rule}</small>
          </div>
        ))}
      </div>
    </Act>
  )
}

