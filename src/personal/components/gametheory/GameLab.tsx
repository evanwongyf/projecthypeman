import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { GAMES, STRATEGIES, analyse, cascade, play, replicator, rng, schellingInit, schellingStep, segregation, tournament } from '../../lib/gametheory/engine'
import type { Game2, Grid } from '../../lib/gametheory/engine'
import { Btn, Card, Pills, Slider, Stat, soft } from '../sports/shared'
import { NativeSelect } from '../../../components/NativeSelect'

type GL = Extract<Block, { t: 'game-lab' }>

export default function GameLab({ block, color }: { block: GL; color: string }) {
  switch (block.viz) {
    case 'payoff':
      return <PayoffLab color={color} preset={block.preset} />
    case 'tournament':
      return <TournamentLab color={color} />
    case 'evolution':
      return <EvolutionLab color={color} />
    case 'schelling':
      return <SchellingLab color={color} />
    case 'cascade':
      return <CascadeLab color={color} />
  }
}

// ------------------------------------------------------------------ payoff matrix
function PayoffLab({ color, preset }: { color: string; preset?: string }) {
  const [key, setKey] = useState<string>(preset && GAMES[preset] ? preset : 'pd')
  const [custom, setCustom] = useState<Game2>(GAMES.custom)
  const g: Game2 = key === 'custom' ? custom : GAMES[key]
  const an = useMemo(() => analyse(g), [g])
  const isNash = (i: number, j: number) => an.nash.some(([a, b]) => a === i && b === j)
  const setCell = (who: 'a' | 'b', i: number, j: number, v: number) => {
    const next = { ...custom, a: custom.a.map((r) => [...r]) as Game2['a'], b: custom.b.map((r) => [...r]) as Game2['b'] }
    next[who][i][j] = v
    setCustom(next)
  }
  const dilemma = an.nash.length > 0 && !an.nash.some(([i, j]) => i === an.best[0] && j === an.best[1])
  return (
    <Card title="Payoff matrix lab" color={color} note="Row player’s payoff is the first number in each cell and column player’s is the second. Blue underline: the row player’s best reply to that column. Pink underline: the column player’s best reply to that row. A cell with both is a Nash equilibrium.">
      <Pills<string> value={key} options={Object.entries(GAMES).map(([k, v]) => [k, v.name] as [string, string])} onChange={setKey} label="Game" />
      <p className="text-sm leading-relaxed">{g.note}</p>
      <div className="overflow-x-auto">
        <table className="border-separate border-spacing-1 text-center">
          <thead>
            <tr>
              <th />
              {g.cols.map((c) => (
                <th key={c} className="px-3 py-1 text-xs font-bold">Column: {c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {g.rows.map((r, i) => (
              <tr key={r}>
                <th className="px-2 text-xs font-bold">Row: {r}</th>
                {g.cols.map((_, j) => (
                  <td key={j} className="rounded-[var(--radius)] border px-3 py-2 font-mono" style={{ borderColor: 'var(--line)', background: isNash(i, j) ? 'color-mix(in srgb, var(--mint) 40%, var(--surface))' : 'var(--surface)' }}>
                    {key === 'custom' ? (
                      <span className="flex items-center justify-center gap-1">
                        <NumIn v={custom.a[i][j]} on={(v) => setCell('a', i, j, v)} label={`Row payoff ${r}/${g.cols[j]}`} />
                        <span>,</span>
                        <NumIn v={custom.b[i][j]} on={(v) => setCell('b', i, j, v)} label={`Column payoff ${r}/${g.cols[j]}`} />
                      </span>
                    ) : (
                      <span>
                        <span style={{ borderBottom: an.br.row[i][j] ? '3px solid #3b6fd8' : '3px solid transparent' }}>{g.a[i][j]}</span>
                        {', '}
                        <span style={{ borderBottom: an.br.col[i][j] ? '3px solid #e0449a' : '3px solid transparent' }}>{g.b[i][j]}</span>
                      </span>
                    )}
                    {key === 'custom' && (
                      <span className="mt-1 block text-[10px]">
                        <span style={{ borderBottom: an.br.row[i][j] ? '2px solid #3b6fd8' : '2px solid transparent' }}>row best</span>{' '}
                        <span style={{ borderBottom: an.br.col[i][j] ? '2px solid #e0449a' : '2px solid transparent' }}>col best</span>
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-2">
        <Stat label="Pure Nash equilibria" value={an.nash.length ? an.nash.map(([i, j]) => `${g.rows[i]} / ${g.cols[j]}`).join('  |  ') : 'none'} tone="var(--mint)" />
        <Stat label="Row dominant strategy" value={an.domRow === null ? 'none' : g.rows[an.domRow]} />
        <Stat label="Column dominant strategy" value={an.domCol === null ? 'none' : g.cols[an.domCol]} />
        <Stat label="Best joint outcome" value={`${g.rows[an.best[0]]} / ${g.cols[an.best[1]]}`} tone="var(--mustard)" />
      </div>
      {an.mixed && (
        <p className="text-sm leading-relaxed">
          <strong>Mixed equilibrium: </strong>
          row plays {g.rows[0]} {Math.round(an.mixed.p * 100)}% of the time, column plays {g.cols[0]} {Math.round(an.mixed.q * 100)}% of the time. At those mixes each player is indifferent between their two options, so neither gains by changing.
        </p>
      )}
      {dilemma && (
        <p className="text-sm leading-relaxed">
          <strong>A dilemma: </strong>the equilibrium is not the best joint outcome. Each player’s self-interested choice leaves both worse off than they could be.
        </p>
      )}
      {!an.nash.length && !an.mixed && <p className="text-sm" style={soft}>No equilibrium found in pure or simple mixed strategies for these numbers.</p>}
    </Card>
  )
}

function NumIn({ v, on, label }: { v: number; on: (n: number) => void; label: string }) {
  return <input type="number" aria-label={label} value={v} onChange={(e) => on(Number(e.target.value) || 0)} className="w-14 rounded border px-1 py-0.5 text-center" style={{ borderColor: 'var(--line)', background: 'var(--paper)' }} />
}

// ------------------------------------------------------------------ iterated PD tournament
function TournamentLab({ color }: { color: string }) {
  const [ids, setIds] = useState<string[]>(['allc', 'alld', 'tft', 'grim', 'pavlov', 'random'])
  const [rounds, setRounds] = useState(100)
  const [noise, setNoise] = useState(0)
  const res = useMemo(() => (ids.length >= 2 ? tournament(ids, rounds, noise, noise > 0 ? 20 : 1) : null), [ids, rounds, noise])
  const [a, setA] = useState('tft')
  const [b, setB] = useState('alld')
  const duel = useMemo(() => play(STRATEGIES.find((s) => s.id === a)!, STRATEGIES.find((s) => s.id === b)!, 20, 0, 7), [a, b])
  const order = res ? res.avg.map((v, i) => [v, i] as const).sort((x, y) => y[0] - x[0]) : []
  const max = 5
  return (
    <Card title="Repeated prisoner’s dilemma tournament" color={color} note="Payoffs per round: both cooperate 3 each; both defect 1 each; a lone defector gets 5 and the sucker 0. Every strategy plays every other (and itself). Scores are the average per round. With noise, each intended move is flipped with the chosen probability, so strategies that never forgive can spiral.">
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Strategies in the tournament">
        {STRATEGIES.map((s) => {
          const on = ids.includes(s.id)
          return (
            <button key={s.id} type="button" aria-pressed={on} title={s.blurb} onClick={() => setIds(on ? ids.filter((x) => x !== s.id) : [...ids, s.id])} className="rounded-full border px-2.5 py-1 text-xs font-bold pointer-coarse:min-h-10" style={{ borderColor: 'var(--line)', background: on ? 'var(--ink)' : 'var(--surface)', color: on ? 'var(--surface)' : 'var(--ink)' }}>
              {s.name}
            </button>
          )
        })}
      </div>
      <div className="flex flex-wrap gap-4">
        <Slider label="Rounds per match" value={rounds} min={10} max={300} step={10} onChange={setRounds} />
        <Slider label="Noise (chance a move is flipped)" value={noise} min={0} max={0.2} step={0.01} onChange={setNoise} show={`${Math.round(noise * 100)}%`} />
      </div>
      {res ? (
        <div className="flex flex-col gap-1.5" aria-label="Average score per round">
          {order.map(([v, i], rank) => (
            <div key={res.ss[i].id} className="flex items-center gap-2 text-sm">
              <span className="w-44 shrink-0 font-bold">{rank + 1}. {res.ss[i].name}</span>
              <div className="h-5 flex-1 rounded" style={{ background: 'var(--paper-2)' }}>
                <div className="h-5 rounded" style={{ width: `${(v / max) * 100}%`, background: color }} />
              </div>
              <span className="w-12 text-right font-mono">{v.toFixed(2)}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm" style={soft}>Pick at least two strategies.</p>
      )}
      <div className="flex flex-col gap-2 rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <p className="text-sm font-bold">Head to head: the first 20 rounds</p>
        <div className="flex flex-wrap gap-2">
          <NativeSelect aria-label="First strategy" value={a} onChange={(e) => setA(e.target.value)} className="rounded border px-2 py-1 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--paper)' }}>
            {STRATEGIES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </NativeSelect>
          <span className="self-center text-sm">versus</span>
          <NativeSelect aria-label="Second strategy" value={b} onChange={(e) => setB(e.target.value)} className="rounded border px-2 py-1 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--paper)' }}>
            {STRATEGIES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </NativeSelect>
        </div>
        {[duel.h1, duel.h2].map((h, k) => (
          <div key={k} className="flex flex-wrap gap-0.5 font-mono text-xs" aria-label={k ? 'Second strategy moves' : 'First strategy moves'}>
            {h.map((m, i) => (
              <span key={i} className="inline-block w-5 rounded text-center font-bold" style={{ background: m === 'C' ? 'color-mix(in srgb, var(--mint) 55%, var(--surface))' : 'color-mix(in srgb, var(--pink) 45%, var(--surface))' }}>{m}</span>
            ))}
          </div>
        ))}
        <p className="text-xs" style={soft}>C = cooperate, D = defect. Totals over 20 rounds: {duel.u1} against {duel.u2}.</p>
      </div>
    </Card>
  )
}

// ------------------------------------------------------------------ replicator dynamics
function EvolutionLab({ color }: { color: string }) {
  const [V, setV] = useState(4)
  const [C, setC] = useState(6)
  const [mode, setMode] = useState<'hd' | 'pd' | 'sh'>('hd')
  // payoffs for strategy 1 against 1 (a), 1 against 2 (b), 2 against 1 (c), 2 against 2 (d)
  const m = mode === 'hd' ? { a: (V - C) / 2, b: V, c: 0, d: V / 2, n1: 'Hawk', n2: 'Dove' } : mode === 'pd' ? { a: 1, b: 5, c: 0, d: 3, n1: 'Defect', n2: 'Cooperate' } : { a: 3, b: 3, c: 0, d: 4, n1: 'Hare', n2: 'Stag' }
  const starts = [0.05, 0.2, 0.4, 0.6, 0.8, 0.95]
  const steps = 240
  const lines = starts.map((x0) => replicator(m.a, m.b, m.c, m.d, x0, steps))
  const ess = mode === 'hd' ? (C > V ? V / C : 1) : null
  const W = 460
  const H = 220
  const px = (i: number) => 36 + (i / steps) * (W - 46)
  const py = (x: number) => 10 + (1 - x) * (H - 34)
  return (
    <Card title="Evolution of strategies (replicator dynamics)" color={color} note="Each line is a population that starts with a different share of the first strategy. A strategy grows when it earns more than the average, and shrinks when it earns less. Lines that settle on the same level show a stable mix; lines that all run to the top or bottom show one strategy taking over.">
      <Pills<'hd' | 'pd' | 'sh'> value={mode} options={[['hd', 'Hawk and dove'], ['pd', 'Prisoner’s dilemma'], ['sh', 'Stag hunt']]} onChange={setMode} label="Game" />
      {mode === 'hd' && (
        <div className="flex flex-wrap gap-4">
          <Slider label="Prize value V" value={V} min={1} max={10} step={1} onChange={setV} />
          <Slider label="Cost of a fight C" value={C} min={1} max={20} step={1} onChange={setC} />
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxWidth: 520 }} role="img" aria-label={`Share of ${m.n1} over time for six starting points`}>
        <rect x={36} y={10} width={W - 46} height={H - 34} fill="var(--surface)" stroke="var(--ink)" />
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <g key={t}>
            <line x1={36} x2={W - 10} y1={py(t)} y2={py(t)} stroke="var(--line)" />
            <text x={30} y={py(t) + 4} fontSize={10} textAnchor="end" fill="var(--ink-soft)">{t}</text>
          </g>
        ))}
        {ess !== null && ess > 0 && ess < 1 && <line x1={36} x2={W - 10} y1={py(ess)} y2={py(ess)} stroke="#e0449a" strokeDasharray="5 3" strokeWidth={2} />}
        {lines.map((ln, k) => (
          <polyline key={k} fill="none" stroke={color} strokeWidth={2} points={ln.map((x, i) => `${px(i)},${py(x)}`).join(' ')} />
        ))}
        <text x={W / 2} y={H - 4} fontSize={10} textAnchor="middle" fill="var(--ink-soft)">time</text>
        <text x={4} y={H / 2} fontSize={10} fill="var(--ink-soft)" transform={`rotate(-90 8 ${H / 2})`}>share playing {m.n1}</text>
      </svg>
      {mode === 'hd' && (
        <p className="text-sm leading-relaxed">
          {C > V ? <>Because a fight costs more than the prize, hawks cannot take over: the stable mix is a share of <strong>V/C = {(V / C).toFixed(2)}</strong> hawks (dashed line). </> : <>Because the prize is worth at least as much as a fight costs, hawks take over the population. </>}
          Under the “hawk” strategy a bird always fights; under “dove” it shares or retreats.
        </p>
      )}
      {mode === 'pd' && <p className="text-sm leading-relaxed">In the one-shot dilemma, defectors always take over a mixed population, even though a population of cooperators would earn more. Repetition, reputation or structure are needed to change that.</p>}
      {mode === 'sh' && <p className="text-sm leading-relaxed">Two stable outcomes: all stag or all hare. Where a population ends up depends on where it starts. A history of mistrust can lock in the worse one.</p>}
    </Card>
  )
}

// ------------------------------------------------------------------ Schelling segregation
function SchellingLab({ color }: { color: string }) {
  const n = 24
  const [tol, setTol] = useState(0.34)
  const [empty, setEmpty] = useState(0.12)
  const [seed, setSeed] = useState(3)
  const [grid, setGrid] = useState<Grid>(() => schellingInit(n, 0.12, 3))
  const [steps, setSteps] = useState(0)
  const [moved, setMoved] = useState<number | null>(null)
  const reset = (e = empty, s = seed) => { setGrid(schellingInit(n, e, s)); setSteps(0); setMoved(null) }
  const step = (k: number) => {
    let g = grid
    let mv = 0
    const r = rng(seed * 7919 + steps)
    for (let i = 0; i < k; i++) { const out = schellingStep(g, n, tol, r); g = out.grid; mv = out.moved }
    setGrid(g)
    setSteps(steps + k)
    setMoved(mv)
  }
  const seg = segregation(grid, n)
  const cell = 14
  return (
    <Card title="Schelling’s segregation model" color={color} note="Two kinds of households live on a grid with some empty spaces. A household is content if at least the chosen share of its neighbours (up to eight) are like itself. Each step, every discontented household moves to a random empty spot. Nobody here wants a segregated town, only not to be a small minority.">
      <div className="flex flex-wrap gap-4">
        <Slider label="Tolerance: wants at least this share alike" value={tol} min={0} max={0.9} step={0.02} onChange={setTol} show={`${Math.round(tol * 100)}%`} />
        <Slider label="Empty spaces" value={empty} min={0.04} max={0.4} step={0.02} onChange={(v) => { setEmpty(v); reset(v) }} show={`${Math.round(empty * 100)}%`} />
      </div>
      <svg viewBox={`0 0 ${n * cell} ${n * cell}`} className="w-full" style={{ maxWidth: 380, background: 'var(--paper-2)', borderRadius: 8 }} role="img" aria-label={`Grid of two household types, average share of like neighbours ${Math.round(seg * 100)} per cent`}>
        {grid.map((v, i) => (v ? <rect key={i} x={(i % n) * cell + 1} y={Math.floor(i / n) * cell + 1} width={cell - 2} height={cell - 2} rx={3} fill={v === 1 ? '#3b6fd8' : '#e07b2a'} /> : null))}
      </svg>
      <div className="flex flex-wrap gap-2">
        <Stat label="Average share of like neighbours" value={`${Math.round(seg * 100)}%`} tone={color} />
        <Stat label="Steps" value={steps} />
        <Stat label="Moved last step" value={moved === null ? '-' : moved} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => step(1)}>Step</Btn>
        <Btn onClick={() => step(10)}>10 steps</Btn>
        <Btn onClick={() => { const s = seed + 1; setSeed(s); reset(empty, s) }}>New random town</Btn>
        <Btn onClick={() => reset()}>Reset</Btn>
      </div>
      <p className="text-xs leading-relaxed" style={soft}>Try a tolerance of about one third, then press 10 steps a few times. Even a mild preference tends to produce strong clustering. Then set it to zero and note that nothing moves.</p>
    </Card>
  )
}

// ------------------------------------------------------------------ information cascade
function CascadeLab({ color }: { color: string }) {
  const [p, setP] = useState(0.7)
  const [seed, setSeed] = useState(1)
  const N = 30
  const run = useMemo(() => cascade(N, p, seed), [p, seed])
  const stats = useMemo(() => {
    let wrong = 0
    let right = 0
    let none = 0
    for (let k = 0; k < 2000; k++) {
      const r = cascade(N, p, 5000 + k)
      if (r.start < 0) none++
      else if (r.final > 0) right++
      else wrong++
    }
    return { wrong: wrong / 20, right: right / 20, none: none / 20 }
  }, [p])
  return (
    <Card title="Herd cascade simulator" color={color} note="The true answer is A. Each person privately gets a hint that is right with the chosen probability, sees everyone’s earlier choices (not their hints), and picks A or B. Once two more people have chosen one option than the other, later people rationally ignore their own hint and follow the crowd, and the crowd can be wrong.">
      <Slider label="Accuracy of each private hint" value={p} min={0.51} max={0.95} step={0.01} onChange={setP} show={`${Math.round(p * 100)}%`} />
      <div className="flex flex-wrap gap-1" role="img" aria-label="Sequence of 30 choices, A in blue and B in orange">
        {run.choices.map((c, i) => (
          <span key={i} className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: c > 0 ? '#3b6fd8' : '#e07b2a', outline: i === run.start ? '3px solid var(--ink)' : undefined, opacity: run.start >= 0 && i >= run.start ? 0.6 : 1 }} title={`Person ${i + 1}: chose ${c > 0 ? 'A' : 'B'}, own hint ${run.signals[i] > 0 ? 'A' : 'B'}`}>
            {c > 0 ? 'A' : 'B'}
          </span>
        ))}
      </div>
      <p className="text-sm leading-relaxed">
        {run.start < 0 ? 'No cascade formed in this run: everyone followed their own hint.' : <>A cascade began at person <strong>{run.start + 1}</strong> (ringed). From then on, choices are <strong>{run.final > 0 ? 'correct (A)' : 'wrong (B)'}</strong> whatever people’s own hints say. Faded circles are followers.</>}
      </p>
      <div className="flex flex-wrap gap-2">
        <Stat label="Wrong cascades, over 2,000 runs" value={`${stats.wrong.toFixed(1)}%`} tone="var(--pink)" />
        <Stat label="Right cascades" value={`${stats.right.toFixed(1)}%`} tone="var(--mint)" />
        <Stat label="No cascade" value={`${stats.none.toFixed(1)}%`} />
      </div>
      <Btn onClick={() => setSeed(seed + 1)}>Run again</Btn>
    </Card>
  )
}
