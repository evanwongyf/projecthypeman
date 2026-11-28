import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Sprite, thing, type SpriteName } from './pixel'
import { Act, Btn, Bubble, Confetti, DotCard, Draggable, Feedback, NumCard, NumberPad, SpriteRow, TenFrame, WORDS, Zone, rand, seeded, shuffle, useFlash, useSlide, type Scene } from './kit'
import { sfx } from './sfx'

type Verdict = 'idle' | 'right' | 'wrong'

/** Student check helper: the first try counts towards the score. */
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

// ---------------------------------------------------------------------------
// Count all: tap each thing once; the last number says how many.
// ---------------------------------------------------------------------------

function layout(n: number, seed: number) {
  const r = seeded(seed)
  const cells = [...Array(15).keys()].sort(() => r() - 0.5).slice(0, n)
  return cells.map((c) => ({ x: 20 + (c % 5) * 15 + (r() - 0.5) * 6, y: 6 + Math.floor(c / 5) * 29 + (r() - 0.5) * 8 }))
}

export function CountTap({ groups, scene = 'pond' }: { groups: { sprite: SpriteName; n: number }[]; scene?: Scene }) {
  const { student } = useSlide()
  const [g, setG] = useState(0)
  const [seedBump, setSeedBump] = useState(0)
  const [order, setOrder] = useState<number[]>([])
  const [answer, setAnswer] = useState<number | null>(null)
  const auto = useRef<number | undefined>(undefined)
  const chk = useCheck()
  const group = groups[g]
  const t = thing(group.sprite)
  const pos = useMemo(() => layout(group.n, (g + 1) * 97 + seedBump * 13), [group.n, g, seedBump])
  const done = order.length === group.n

  const reset = useCallback(() => {
    window.clearInterval(auto.current)
    setOrder([])
    setAnswer(null)
    chk.reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => () => window.clearInterval(auto.current), [])

  function tap(i: number) {
    if (order.includes(i)) {
      sfx.no()
      return
    }
    const next = [...order, i]
    setOrder(next)
    sfx.tap(next.length)
    if (next.length === group.n) window.setTimeout(sfx.yes, 200)
  }

  function autoCount(fromRight: boolean) {
    reset()
    const seq = pos.map((p, i) => ({ i, x: p.x })).sort((a, b) => (fromRight ? b.x - a.x : a.x - b.x)).map((p) => p.i)
    let k = 0
    auto.current = window.setInterval(() => {
      k++
      setOrder(seq.slice(0, k))
      sfx.tap(k)
      if (k >= seq.length) {
        window.clearInterval(auto.current)
        window.setTimeout(sfx.yes, 200)
      }
    }, 650)
  }

  return (
    <Act
      tag="count all"
      scene={scene}
      prompt={
        student ? (
          <>
            How many <b>{t.many}</b>? Tap each one to count, then pick the number.
          </>
        ) : (
          <>
            How many <b>{t.many}</b> are there? Tap each one <b>once</b>.
          </>
        )
      }
      status={
        <div className="lx-countwords">
          {order.length === 0 ? <span className="lx-dim">tap to count…</span> : order.map((_, k) => <span key={k}>{k + 1}</span>)}
        </div>
      }
      tools={
        <>
          {!student && <Btn onClick={() => autoCount(false)}>count for me</Btn>}
          {!student && <Btn onClick={() => autoCount(true)}>from the right</Btn>}
          <Btn
            onClick={() => {
              reset()
              setSeedBump((s) => s + 1)
            }}
          >
            mix up
          </Btn>
          <Btn tone="warn" onClick={reset}>
            reset
          </Btn>
        </>
      }
    >
      <div className="lx-field">
        {groups.length > 1 && (
          <div className="lx-chooser">
            {groups.map((gr, k) => (
              <Btn
                key={k}
                tone={k === g ? 'blue' : 'plain'}
                onClick={() => {
                  setG(k)
                  reset()
                }}
              >
                <Sprite name={gr.sprite} size={1.3} /> {thing(gr.sprite).many}
              </Btn>
            ))}
          </div>
        )}
        {pos.map((p, i) => {
          const k = order.indexOf(i)
          return (
            <button
              type="button"
              key={i}
              className={`lx-thing ${k >= 0 ? 'is-counted' : ''}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              onClick={(e) => {
                e.stopPropagation()
                tap(i)
              }}
            >
              <Sprite name={group.sprite} size={4.6} />
              {k >= 0 && <span className="lx-badge">{k + 1}</span>}
            </button>
          )
        })}
        {done && !student && (
          <div className="lx-result" key={`r${g}${seedBump}`}>
            <Confetti />
            <span className="lx-result-num">{group.n}</span>
            <span>
              There {group.n === 1 ? 'is' : 'are'} {group.n} {group.n === 1 ? t.one : t.many}!
            </span>
            <small>The last number we say tells us how many.</small>
          </div>
        )}
      </div>
      {student && (
        <div className="lx-answer-row">
          <NumberPad value={answer} onChange={setAnswer} />
          <Btn tone="go" big disabled={answer === null} onClick={() => chk.check(answer === group.n)}>
            check
          </Btn>
          <Feedback state={chk.v} right={`Yes! ${group.n} ${group.n === 1 ? t.one : t.many}.`} wrong="Count again, one at a time." />
        </div>
      )}
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Number gallery: 0 to 10 as things, a ten-frame, dots, numeral and word.
// ---------------------------------------------------------------------------

const GALLERY: SpriteName[] = ['duck', 'sun', 'tree', 'duck', 'flower', 'ladybug', 'butterfly', 'apple', 'flower', 'star', 'fish']

export function Gallery({ start = 0 }: { start?: number }) {
  const { active, onStep } = useSlide()
  const [n, setN] = useState(start)
  const step = useCallback(() => {
    if (n < 10) {
      setN(n + 1)
      sfx.tap(n + 1)
      return true
    }
    return false
  }, [n])
  useEffect(() => {
    if (!active) return
    onStep(step)
    return () => onStep(null)
  }, [active, step, onStep])

  const sprite = n === 0 ? 'duck' : GALLERY[n]
  return (
    <Act
      tag="numbers 0 to 10"
      scene="sky"
      prompt={
        <>
          Count from <b>0</b> to <b>10</b>. Press → to add one more.
        </>
      }
      tools={
        <div className="lx-strip">
          {[...Array(11).keys()].map((k) => (
            <button
              type="button"
              key={k}
              className={`lx-strip-cell ${k === n ? 'is-on' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setN(k)
                sfx.tap(k)
              }}
            >
              {k}
            </button>
          ))}
        </div>
      }
    >
      <div className="lx-gallery" key={n}>
        <div className="lx-gallery-things">
          {n === 0 ? (
            <div className="lx-empty-nest">
              <span>nothing here!</span>
              <small>0 means there is no object</small>
            </div>
          ) : (
            <SpriteRow name={sprite} n={n} size={n > 6 ? 2.8 : 3.4} gap={0.5} />
          )}
        </div>
        <div className="lx-gallery-row">
          <DotCard n={n} size={7} />
          <TenFrame filled={n} size={2.5} />
          <div className="lx-bignum">
            <span>{n}</span>
            <em>{WORDS[n]}</em>
          </div>
        </div>
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Build a number on a ten-frame by dragging counters.
// ---------------------------------------------------------------------------

type Shown = 'numeral' | 'word' | 'dots'

export function TenFrameBuild({ targets = [3, 7, 5, 9, 0, 10, 6] }: { targets?: number[] }) {
  const { student } = useSlide()
  const [ti, setTi] = useState(0)
  const [cells, setCells] = useState<boolean[]>(Array(10).fill(false))
  const [as, setAs] = useState<Shown>('numeral')
  const [showCount, setShowCount] = useState(!student)
  const chk = useCheck()
  const [flash, setFlash] = useFlash()
  const target = targets[ti % targets.length]
  const count = cells.filter(Boolean).length

  function place(i: number | null, from: number | null) {
    setCells((c) => {
      const next = [...c]
      if (from !== null) next[from] = false
      if (i === null) return next
      const slot = next[i] ? next.indexOf(false) : i
      if (slot >= 0) next[slot] = true
      return next
    })
  }

  function onDrop(id: string, zone: string | null) {
    const from = id.startsWith('c') ? Number(id.slice(1)) : null
    if (zone?.startsWith('tf')) {
      place(Number(zone.slice(2)), from)
      sfx.drop()
    } else if (from !== null) place(null, from)
  }

  function nextTarget() {
    setTi((t) => t + 1)
    setCells(Array(10).fill(false))
    setAs((['numeral', 'word', 'dots'] as Shown[])[rand(0, 2)])
    chk.reset()
  }

  return (
    <Act
      tag="ten-frame"
      scene="paper"
      prompt={
        <>
          Drag counters onto the ten-frame to show <b>this many</b>.
        </>
      }
      status={showCount ? <span className="lx-tally">{count} counter{count === 1 ? '' : 's'}</span> : <span className="lx-dim">count hidden</span>}
      tools={
        <>
          {(['numeral', 'word', 'dots'] as Shown[]).map((s) => (
            <Btn key={s} tone={as === s ? 'blue' : 'plain'} onClick={() => setAs(s)}>
              {s}
            </Btn>
          ))}
          {!student && <Btn onClick={() => setShowCount((v) => !v)}>{showCount ? 'hide count' : 'show count'}</Btn>}
          <Btn tone="warn" onClick={() => setCells(Array(10).fill(false))}>
            clear
          </Btn>
          <Btn tone="go" onClick={() => (count === target ? (chk.check(true), setFlash('ok')) : chk.check(false))}>
            check
          </Btn>
          <Btn tone="pink" onClick={nextTarget}>
            new number
          </Btn>
        </>
      }
    >
      <div className="lx-tfb">
        <div className="lx-target">
          <span className="lx-target-label">show me</span>
          {as === 'numeral' && <NumCard n={target} size={9} />}
          {as === 'word' && <div className="lx-wordcard">{WORDS[target]}</div>}
          {as === 'dots' && <DotCard n={target} size={9} />}
        </div>
        <div className={`lx-tfb-frame ${flash === 'ok' ? 'is-glow' : ''}`}>
          <TenFrame
            filled={cells}
            size={4.2}
            zonePrefix="tf"
            render={(i) =>
              cells[i] ? (
                <Draggable id={`c${i}`} onDrop={onDrop} onTap={() => place(null, i)}>
                  <span className="lx-counter lx-counter-big" />
                </Draggable>
              ) : null
            }
          />
          <Feedback state={chk.v} right={`Yes! That shows ${target}.`} wrong={count > target ? 'Too many. Take some away.' : 'Not enough yet. Add more.'} />
        </div>
        <Zone id="pile" className="lx-pile">
          <span className="lx-pile-label">counters</span>
          <div className="lx-pile-grid">
            {[...Array(10 - count)].map((_, k) => (
              <Draggable key={`${k}-${count}`} id={`p${k}`} onDrop={onDrop}>
                <span className="lx-counter lx-counter-big" />
              </Draggable>
            ))}
          </div>
        </Zone>
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Count money in dollars.
// ---------------------------------------------------------------------------

export function MoneyMake({ targets = [4, 7, 2, 10, 6, 9] }: { targets?: number[] }) {
  const [ti, setTi] = useState(0)
  const [ones, setOnes] = useState(0)
  const [ten, setTen] = useState(false)
  const chk = useCheck()
  const target = targets[ti % targets.length]
  const total = ten ? 10 : ones

  function onDrop(id: string, zone: string | null) {
    if (id === 'pile' && zone === 'wallet' && !ten && ones < 10) {
      setOnes(ones + 1)
      sfx.tap(ones + 1)
    } else if (id === 'in' && zone !== 'wallet') {
      setOnes(Math.max(0, ones - 1))
      sfx.drop()
    }
  }

  return (
    <Act
      tag="money"
      scene="market"
      prompt={
        <>
          Pay exactly <b>${target}</b>. Drag $1 notes into the purse and count.
        </>
      }
      status={<span className="lx-tally">counted: ${total}</span>}
      tools={
        <>
          {ones === 10 && !ten && (
            <Btn
              tone="pink"
              onClick={() => {
                setTen(true)
                sfx.whoosh()
              }}
            >
              swap 10 × $1 for $10
            </Btn>
          )}
          <Btn
            tone="warn"
            onClick={() => {
              setOnes(0)
              setTen(false)
              chk.reset()
            }}
          >
            empty purse
          </Btn>
          <Btn tone="go" onClick={() => chk.check(total === target)}>
            pay
          </Btn>
          <Btn
            onClick={() => {
              setTi(ti + 1)
              setOnes(0)
              setTen(false)
              chk.reset()
            }}
          >
            new price
          </Btn>
        </>
      }
    >
      <div className="lx-money">
        <div className="lx-shop">
          <Sprite name="cupcake" size={6} />
          <span className="lx-price">${target}</span>
        </div>
        <Zone id="wallet" className="lx-wallet">
          <span className="lx-pile-label">purse</span>
          <div className="lx-wallet-notes">
            {ten ? (
              <div className="lx-note lx-note-10 is-new">$10</div>
            ) : (
              [...Array(ones)].map((_, k) => (
                <Draggable key={k} id="in" onDrop={onDrop}>
                  <div className="lx-note">
                    $1<small>{k + 1}</small>
                  </div>
                </Draggable>
              ))
            )}
          </div>
          <Feedback state={chk.v} right={`Yes! $${target} exactly.`} wrong={total > target ? 'Too much money!' : 'Not enough money yet.'} />
        </Zone>
        <div className="lx-bank">
          <span className="lx-pile-label">bank</span>
          {!ten && ones < 10 && (
            <Draggable id="pile" onDrop={onDrop} key={ones}>
              <div className="lx-note lx-note-stack">$1</div>
            </Draggable>
          )}
          <small className="lx-dim">drag from the stack</small>
        </div>
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Number train: missing numbers, 1 more and 1 less.
// ---------------------------------------------------------------------------

function makeTrain(dir: 'up' | 'down', missing: number) {
  const len = 5
  const start = dir === 'up' ? rand(0, 10 - len + 1) : rand(len - 1, 10)
  const seq = [...Array(len)].map((_, i) => (dir === 'up' ? start + i : start - i))
  const hidden = shuffle([1, 2, 3, 4]).slice(0, missing).sort()
  const decoys = shuffle([...Array(11).keys()].filter((n) => !seq.includes(n))).slice(0, 2)
  const tiles = shuffle([...hidden.map((h) => seq[h]), ...decoys]).map((v, k) => ({ id: `t${k}`, v }))
  return { seq, hidden, tiles }
}

export function NumberTrain({ dir: dir0 = 'up', missing = 2 }: { dir?: 'up' | 'down'; missing?: number }) {
  const [dir, setDir] = useState(dir0)
  const [train, setTrain] = useState(() => makeTrain(dir0, missing))
  const [placed, setPlaced] = useState<Record<number, boolean>>({})
  const [hint, setHint] = useState<string | null>(null)
  const [flash, setFlash] = useFlash()
  const [leaving, setLeaving] = useState(false)
  const misses = useRef(0)
  const { report } = useSlide()
  const done = train.hidden.every((h) => placed[h])

  function renew(d = dir) {
    setTrain(makeTrain(d, missing))
    setPlaced({})
    setHint(null)
    setLeaving(false)
    misses.current = 0
  }

  function onDrop(id: string, zone: string | null) {
    if (!zone?.startsWith('car')) return
    const idx = Number(zone.slice(3))
    const tile = train.tiles.find((t) => t.id === id)
    if (!tile || placed[idx] || !train.hidden.includes(idx)) return
    if (train.seq[idx] === tile.v) {
      const next = { ...placed, [idx]: true }
      setPlaced(next)
      setHint(null)
      sfx.yes()
      if (train.hidden.every((h) => next[h])) {
        report(Math.max(0.3, 1 - misses.current * 0.25))
        window.setTimeout(() => {
          setLeaving(true)
          sfx.toot()
        }, 700)
      }
    } else {
      misses.current++
      setFlash(zone)
      sfx.no()
      const before = train.seq[idx - 1]
      setHint(dir === 'up' ? `What is 1 more than ${before}?` : `What is 1 less than ${before}?`)
    }
  }

  const usedValues = train.hidden.filter((h) => placed[h]).map((h) => train.seq[h])
  const tiles = train.tiles.filter((t) => {
    const i = usedValues.indexOf(t.v)
    if (i >= 0) {
      usedValues.splice(i, 1)
      return false
    }
    return true
  })

  return (
    <Act
      tag={dir === 'up' ? 'count on' : 'count back'}
      scene="rail"
      prompt={
        <>
          Help the train! Drag the <b>missing numbers</b> into the carriages. {dir === 'up' ? 'Each one is 1 more.' : 'Each one is 1 less.'}
        </>
      }
      status={hint ? <Bubble who="bolt">{hint}</Bubble> : done ? <Bubble who="pip">All aboard! Toot toot!</Bubble> : null}
      tools={
        <>
          <Btn
            tone={dir === 'up' ? 'blue' : 'plain'}
            onClick={() => {
              setDir('up')
              renew('up')
            }}
          >
            count on ↑
          </Btn>
          <Btn
            tone={dir === 'down' ? 'blue' : 'plain'}
            onClick={() => {
              setDir('down')
              renew('down')
            }}
          >
            count back ↓
          </Btn>
          <Btn onClick={() => setPlaced(Object.fromEntries(train.hidden.map((h) => [h, true])))}>reveal</Btn>
          <Btn tone="pink" onClick={() => renew()}>
            new train
          </Btn>
        </>
      }
    >
      <div className={`lx-train ${leaving ? 'is-leaving' : ''}`}>
        <div className="lx-loco">
          <span className="lx-chimney" />
          <span className="lx-smoke" />
          <span className="lx-loco-cab" />
          <Sprite name="pip" size={2.6} style={{ position: 'absolute', top: '-1.9em', left: '0.9em' }} />
        </div>
        {train.seq.map((v, i) => {
          const hidden = train.hidden.includes(i) && !placed[i]
          return (
            <div key={i} className="lx-car">
              {hidden ? (
                <Zone id={`car${i}`} className={`lx-car-slot ${flash === `car${i}` ? 'is-wrong' : ''}`}>
                  ?
                </Zone>
              ) : (
                <span className={`lx-car-num ${train.hidden.includes(i) ? 'is-new' : ''}`}>{v}</span>
              )}
            </div>
          )
        })}
      </div>
      <div className="lx-tiles">
        {tiles.map((t) => (
          <Draggable key={t.id} id={t.id} onDrop={onDrop}>
            <div className="lx-tile">{t.v}</div>
          </Draggable>
        ))}
      </div>
      {leaving && <Confetti />}
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Match dots, numerals and number words.
// ---------------------------------------------------------------------------

function pickNums(k: number) {
  return shuffle([...Array(10).keys()].map((n) => n + 1)).slice(0, k)
}

export function MatchUp({ count = 4 }: { count?: number }) {
  const [nums, setNums] = useState(() => pickNums(count))
  const [placed, setPlaced] = useState<Record<string, boolean>>({})
  const [flash, setFlash] = useFlash()
  const misses = useRef(0)
  const { report } = useSlide()
  const tiles = useMemo(() => shuffle(nums.flatMap((n) => [{ id: `n${n}`, kind: 'n', n }, { id: `w${n}`, kind: 'w', n }])), [nums])
  const done = nums.every((n) => placed[`n${n}`] && placed[`w${n}`])

  function onDrop(id: string, zone: string | null) {
    if (!zone) return
    if (zone === id) {
      const next = { ...placed, [id]: true }
      setPlaced(next)
      sfx.yes()
      if (nums.every((n) => next[`n${n}`] && next[`w${n}`])) report(Math.max(0.3, 1 - misses.current * 0.15))
    } else if (/^[nw]\d+$/.test(zone)) {
      misses.current++
      setFlash(zone)
      sfx.no()
    }
  }

  return (
    <Act
      tag="match"
      scene="paper"
      prompt={
        <>
          Count the dots. Drag the matching <b>numeral</b> and <b>number word</b> to each card.
        </>
      }
      tools={
        <>
          <Btn
            onClick={() => {
              const all: Record<string, boolean> = {}
              nums.forEach((n) => {
                all[`n${n}`] = true
                all[`w${n}`] = true
              })
              setPlaced(all)
            }}
          >
            reveal
          </Btn>
          <Btn
            tone="pink"
            onClick={() => {
              setNums(pickNums(count))
              setPlaced({})
              misses.current = 0
            }}
          >
            new cards
          </Btn>
        </>
      }
      status={done ? <Bubble who="jessie">All matched! Brilliant!</Bubble> : null}
    >
      <div className="lx-match">
        <div className="lx-match-rows">
          {nums.map((n) => (
            <div key={n} className="lx-match-row">
              <DotCard n={n} size={5} />
              <Zone id={`n${n}`} className={`lx-slot ${flash === `n${n}` ? 'is-wrong' : ''}`}>
                {placed[`n${n}`] ? <span className="lx-slot-num">{n}</span> : <span className="lx-dim">numeral</span>}
              </Zone>
              <Zone id={`w${n}`} className={`lx-slot lx-slot-wide ${flash === `w${n}` ? 'is-wrong' : ''}`}>
                {placed[`w${n}`] ? <span className="lx-slot-word">{WORDS[n]}</span> : <span className="lx-dim">word</span>}
              </Zone>
            </div>
          ))}
        </div>
        <div className="lx-tiles lx-tiles-col">
          {tiles
            .filter((t) => !placed[t.id])
            .map((t) => (
              <Draggable key={t.id} id={t.id} onDrop={onDrop}>
                <div className={`lx-tile ${t.kind === 'w' ? 'lx-tile-word' : ''}`}>{t.kind === 'n' ? t.n : WORDS[t.n]}</div>
              </Draggable>
            ))}
        </div>
        {done && <Confetti />}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Flash dots: see how many without counting.
// ---------------------------------------------------------------------------

export function FlashDots() {
  const { student } = useSlide()
  const [n, setN] = useState(5)
  const [phase, setPhase] = useState<'ready' | 'flash' | 'hidden' | 'shown'>('ready')
  const [ms, setMs] = useState(1200)
  const [look, setLook] = useState<'card' | 'scatter' | 'frame'>('card')
  const [seed, setSeed] = useState(1)
  const [answer, setAnswer] = useState<number | null>(null)
  const chk = useCheck()
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  function go() {
    setPhase('flash')
    sfx.flip()
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setPhase('hidden'), ms)
  }
  function next() {
    let m = rand(1, 10)
    while (m === n) m = rand(1, 10)
    setN(m)
    setSeed((s) => s + 1)
    setAnswer(null)
    chk.reset()
    setPhase('ready')
  }

  return (
    <Act
      tag="quick look"
      scene="night"
      prompt={
        <>
          Watch closely! How many dots? <b>Don’t count one by one.</b>
        </>
      }
      status={
        !student && (
          <span className="lx-speed">
            speed
            {[2000, 1200, 700].map((v) => (
              <Btn key={v} tone={ms === v ? 'blue' : 'plain'} onClick={() => setMs(v)}>
                {v / 1000}s
              </Btn>
            ))}
          </span>
        )
      }
      tools={
        <>
          {(['card', 'scatter', 'frame'] as const).map((l) => (
            <Btn key={l} tone={look === l ? 'blue' : 'plain'} onClick={() => setLook(l)}>
              {l}
            </Btn>
          ))}
          <Btn tone="go" onClick={go}>
            {phase === 'ready' ? 'flash!' : 'again'}
          </Btn>
          {!student && (
            <Btn onClick={() => setPhase('shown')} disabled={phase === 'ready'}>
              reveal
            </Btn>
          )}
          <Btn tone="pink" onClick={next}>
            next
          </Btn>
        </>
      }
    >
      <div className="lx-flash">
        <div className={`lx-flash-card is-${phase}`}>
          {phase === 'flash' || phase === 'shown' ? (
            look === 'frame' ? (
              <div className="lx-flash-tf">
                <TenFrame filled={n} size={3.6} colour="#ffd23f" />
              </div>
            ) : (
              <DotCard n={n} size={15} scatter={look === 'scatter' ? seed : undefined} colour="#ffd23f" style={{ background: '#101a3a' }} />
            )
          ) : (
            <div className="lx-flash-cover">{phase === 'ready' ? 'ready?' : '?'}</div>
          )}
        </div>
        {phase === 'shown' && (
          <div className="lx-bignum lx-bignum-light">
            <span>{n}</span>
            <em>{WORDS[n]}</em>
          </div>
        )}
        {student && phase === 'hidden' && (
          <div className="lx-answer-col">
            <NumberPad value={answer} onChange={setAnswer} />
            <Btn
              tone="go"
              big
              disabled={answer === null}
              onClick={() => {
                chk.check(answer === n)
                if (answer === n) setPhase('shown')
              }}
            >
              check
            </Btn>
            <Feedback state={chk.v} wrong="Have another look! Tap again." />
          </div>
        )}
      </div>
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Memory pairs: a dot card and its numeral. Two teams.
// ---------------------------------------------------------------------------

type MCard = { id: number; n: number; face: 'dots' | 'num' }
function deal(k: number, ten = false): MCard[] {
  if (ten) {
    // Pairs that make 10: a dot card and the numeral that completes it.
    const pairs = shuffle([[1, 9], [2, 8], [3, 7], [4, 6], [5, 5], [0, 10], [6, 4], [7, 3]]).slice(0, k)
    return shuffle(pairs.flatMap(([a, b], i) => [{ id: i * 2, n: a, face: 'dots' as const }, { id: i * 2 + 1, n: b, face: 'num' as const }]))
  }
  const nums = pickNums(k)
  return shuffle(nums.flatMap((n, i) => [{ id: i * 2, n, face: 'dots' as const }, { id: i * 2 + 1, n, face: 'num' as const }]))
}

export function MemoryPairs({ pairs = 6, makeTen = false }: { pairs?: number; makeTen?: boolean }) {
  const { student, report } = useSlide()
  const [cards, setCards] = useState(() => deal(pairs, makeTen))
  const [up, setUp] = useState<number[]>([])
  const [got, setGot] = useState<Record<number, number>>({})
  const [team, setTeam] = useState(0)
  const [score, setScore] = useState([0, 0])
  const [moves, setMoves] = useState(0)
  const busy = useRef(false)
  const done = Object.keys(got).length === cards.length

  function flip(c: MCard) {
    if (busy.current || up.includes(c.id) || got[c.id] !== undefined) return
    sfx.flip()
    const next = [...up, c.id]
    setUp(next)
    if (next.length < 2) return
    setMoves((m) => m + 1)
    const [a, b] = next.map((id) => cards.find((x) => x.id === id)!)
    busy.current = true
    if (a.face !== b.face && (makeTen ? a.n + b.n === 10 : a.n === b.n)) {
      window.setTimeout(() => {
        sfx.yes()
        const g = { ...got, [a.id]: team, [b.id]: team }
        setGot(g)
        setScore((s) => s.map((v, i) => (i === team ? v + 1 : v)))
        setUp([])
        busy.current = false
        if (Object.keys(g).length === cards.length) {
          sfx.win()
          if (student) report(Math.max(0.3, Math.min(1, (pairs * 1.6) / (moves + 1))))
        }
      }, 450)
    } else {
      window.setTimeout(() => {
        setUp([])
        if (!student) setTeam((t) => 1 - t)
        busy.current = false
      }, 1100)
    }
  }

  return (
    <Act
      tag={makeTen ? 'make 10' : 'memory game'}
      scene="space"
      prompt={
        <>
          {makeTen ? (
            <>
              Flip a dot card and a numeral card. Do they <b>make 10</b>?
            </>
          ) : (
            <>
              Flip two cards. Find a <b>dot card</b> and its <b>numeral</b>!
            </>
          )}
        </>
      }
      status={
        student ? (
          <span className="lx-tally">moves: {moves}</span>
        ) : (
          <div className="lx-teams">
            {['Team Pip', 'Team Bolt'].map((name, i) => (
              <span key={i} className={`lx-team ${team === i && !done ? 'is-turn' : ''}`}>
                {name} <b>{score[i]}</b>
              </span>
            ))}
          </div>
        )
      }
      tools={
        <Btn
          tone="pink"
          onClick={() => {
            setCards(deal(pairs, makeTen))
            setUp([])
            setGot({})
            setScore([0, 0])
            setTeam(0)
            setMoves(0)
          }}
        >
          new game
        </Btn>
      }
    >
      <div className="lx-memory" style={{ gridTemplateColumns: `repeat(${Math.ceil(cards.length / 2)}, 1fr)` }}>
        {cards.map((c) => {
          const open = up.includes(c.id) || got[c.id] !== undefined
          return (
            <button type="button" key={c.id} className={`lx-mcard ${open ? 'is-open' : ''} ${got[c.id] !== undefined ? `is-got is-team${got[c.id]}` : ''}`} onClick={(e) => (e.stopPropagation(), flip(c))}>
              <span className="lx-mcard-inner">
                <span className="lx-mcard-back">?</span>
                <span className="lx-mcard-front">{c.face === 'dots' ? <DotCard n={c.n} size={6.4} /> : <NumCard n={c.n} size={6.4} />}</span>
              </span>
            </button>
          )
        })}
      </div>
      {done && (
        <div className="lx-result">
          <Confetti />
          <Sprite name="trophy" size={5} />
          <span>{student ? `All pairs in ${moves} moves!` : score[0] === score[1] ? 'A draw! Everyone wins!' : `${score[0] > score[1] ? 'Team Pip' : 'Team Bolt'} wins!`}</span>
        </div>
      )}
    </Act>
  )
}

// ---------------------------------------------------------------------------
// Number tape: hop 1 more / 1 less, hide numbers, compare positions.
// ---------------------------------------------------------------------------

export function NumberTape({ mode = 'hop' }: { mode?: 'hop' | 'compare' }) {
  const [pos, setPos] = useState(3)
  const [hidden, setHidden] = useState<Set<number>>(new Set())
  const [hideMode, setHideMode] = useState(false)
  const [picks, setPicks] = useState<number[]>([])
  const [said, setSaid] = useState<string>(mode === 'hop' ? 'Tap a number to jump there.' : 'Tap two numbers to compare them.')
  const [hop, setHop] = useState(0)

  function move(to: number, why?: 'more' | 'less') {
    if (to < 0 || to > 10) {
      sfx.no()
      setSaid(to < 0 ? 'There is no number before 0 on our tape!' : 'Our tape stops at 10!')
      return
    }
    setPos(to)
    setHop((h) => h + 1)
    sfx.tap(to)
    if (why === 'more') setSaid(`1 more than ${to - 1} is ${to}.`)
    else if (why === 'less') setSaid(`1 less than ${to + 1} is ${to}.`)
    else setSaid(`Pip is on ${to}. What comes after? What comes before?`)
  }

  function tapCell(n: number) {
    if (hideMode) {
      const h = new Set(hidden)
      if (h.has(n)) h.delete(n)
      else h.add(n)
      setHidden(h)
      sfx.flip()
      return
    }
    if (mode === 'hop') return move(n)
    const p = picks.length >= 2 ? [n] : [...picks, n]
    setPicks(p)
    sfx.tap(n)
    if (p.length === 2) {
      const [a, b] = p
      if (a === b) setSaid(`${a} and ${b} are the same number.`)
      else {
        const [hi, lo] = a > b ? [a, b] : [b, a]
        setSaid(`${hi} is greater than ${lo}. ${lo} is smaller than ${hi}. ${hi} is further along the tape.`)
      }
    } else setSaid('Now tap another number.')
  }

  return (
    <Act
      tag="number tape"
      scene="sky"
      prompt={mode === 'hop' ? <>Hop along the tape. What is <b>1 more</b>? What is <b>1 less</b>?</> : <>Which number is <b>greater</b>? Look where it sits on the tape.</>}
      status={<Bubble who="pip">{said}</Bubble>}
      tools={
        <>
          {mode === 'hop' && (
            <>
              <Btn tone="blue" onClick={() => move(pos - 1, 'less')}>
                ← 1 less
              </Btn>
              <Btn tone="blue" onClick={() => move(pos + 1, 'more')}>
                1 more →
              </Btn>
            </>
          )}
          <Btn tone={hideMode ? 'pink' : 'plain'} onClick={() => setHideMode((v) => !v)}>
            {hideMode ? 'done hiding' : 'hide numbers'}
          </Btn>
          {hidden.size > 0 && <Btn onClick={() => setHidden(new Set())}>show all</Btn>}
        </>
      }
    >
      <div className="lx-tape-wrap">
        <div className="lx-tape">
          {[...Array(11).keys()].map((n) => {
            const picked = picks.includes(n)
            return (
              <button type="button" key={n} className={`lx-tape-cell ${picked ? 'is-picked' : ''} ${hidden.has(n) ? 'is-hidden' : ''}`} onClick={(e) => (e.stopPropagation(), tapCell(n))}>
                <span>{hidden.has(n) ? '?' : n}</span>
                {mode === 'hop' && pos === n && (
                  <span className="lx-tape-frog" key={hop}>
                    <Sprite name="pip" size={3.2} />
                  </span>
                )}
                {mode === 'compare' && picked && <span className="lx-tape-flag">▼</span>}
              </button>
            )
          })}
        </div>
        <div className="lx-tape-arrow">
          <span>smaller</span>
          <span>greater →</span>
        </div>
      </div>
    </Act>
  )
}
