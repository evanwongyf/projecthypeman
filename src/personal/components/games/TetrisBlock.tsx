import { useEffect, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { TETRIS_DEMOS } from '../../lib/games/tetris-demos'
import { Btn, Card, soft } from '../sports/shared'

type TetrisT = Extract<Block, { t: 'tetris' }>

const COLORS: Record<string, string> = { I: '#35e6e0', J: '#5d7bff', L: '#ff8a3d', O: '#f6d02f', S: '#4ade9a', T: '#b04fff', Z: '#ff4a5a', G: '#6f6a85' }

// Rotation states, as in the standard rotation system: spawn, right, 180 and left.
const SHAPES: Record<string, string[][]> = {
  I: [['0000', '1111', '0000', '0000'], ['0010', '0010', '0010', '0010'], ['0000', '0000', '1111', '0000'], ['0100', '0100', '0100', '0100']],
  O: [['0110', '0110'], ['0110', '0110'], ['0110', '0110'], ['0110', '0110']],
  T: [['010', '111', '000'], ['010', '011', '010'], ['000', '111', '010'], ['010', '110', '010']],
  S: [['011', '110', '000'], ['010', '011', '001'], ['000', '011', '110'], ['100', '110', '010']],
  Z: [['110', '011', '000'], ['001', '011', '010'], ['000', '110', '011'], ['010', '110', '100']],
  J: [['100', '111', '000'], ['011', '010', '010'], ['000', '111', '001'], ['010', '010', '110']],
  L: [['001', '111', '000'], ['010', '010', '011'], ['000', '111', '100'], ['110', '010', '010']],
}
const ROT_NAMES = ['Spawn', 'Right (clockwise)', '180°', 'Left (anticlockwise)']

function PieceChart({ color }: { color: string }) {
  const [rot, setRot] = useState(0)
  return (
    <Card title="The seven pieces and their rotations" color={color} note="The colours are the usual guideline colours. Rotate with the buttons to see the four orientations of each piece.">
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Rotation">
        {ROT_NAMES.map((n, i) => (
          <Btn key={n} active={rot === i} onClick={() => setRot(i)}>
            {n}
          </Btn>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
        {Object.entries(SHAPES).map(([p, states]) => {
          const m = states[rot]
          const size = 14
          return (
            <div key={p} className="flex flex-col items-center gap-1 rounded-[var(--radius)] border p-2" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
              <svg width={m[0].length * size} height={m.length * size} role="img" aria-label={`${p} piece, ${ROT_NAMES[rot]}`}>
                {m.map((row, r) =>
                  [...row].map((v, c) => (v === '1' ? <rect key={`${r}${c}`} x={c * size} y={r * size} width={size - 1} height={size - 1} rx={2} fill={COLORS[p]} stroke="#14121f" strokeWidth={1} /> : null)),
                )}
              </svg>
              <span className="font-mono text-xs font-bold">{p}</span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

function Board({ rows }: { rows: string[] }) {
  const s = 22
  const w = 10 * s
  const h = rows.length * s
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ maxWidth: 260, background: '#14121f', borderRadius: 8 }} role="img" aria-label="Tetris board">
      {rows.map((row, r) => {
        const complete = [...row].every((ch) => ch !== '.' && ch !== '*')
        return (
          <g key={r}>
            {[...row].map((ch, c) => {
              const x = c * s
              const y = r * s
              const up = ch.toUpperCase()
              const live = ch !== up && ch !== '*' && ch !== '.'
              if (ch === '.') return <rect key={c} x={x + 0.5} y={y + 0.5} width={s - 1} height={s - 1} fill="none" stroke="rgba(243,241,250,0.09)" />
              if (ch === '*') return <rect key={c} x={x + 2} y={y + 2} width={s - 4} height={s - 4} fill="rgba(255,62,200,0.14)" stroke="#ff3ec8" strokeWidth={1.5} strokeDasharray="3 2" />
              return (
                <rect key={c} x={x + 1} y={y + 1} width={s - 2} height={s - 2} rx={3} fill={COLORS[up] ?? '#999'} stroke={live ? '#ffffff' : 'rgba(0,0,0,0.35)'} strokeWidth={live ? 2 : 1} />
              )
            })}
            {complete && <rect x={0} y={r * s} width={w} height={s} fill="rgba(255,255,255,0.28)" />}
          </g>
        )
      })}
    </svg>
  )
}

export default function TetrisBlock({ block, color }: { block: TetrisT; color: string }) {
  if (block.id === 'pieces') return <PieceChart color={color} />
  return <Demo id={block.id} color={color} />
}

function Demo({ id, color }: { id: string; color: string }) {
  const demo = TETRIS_DEMOS[id]
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)
  const n = demo.frames.length

  useEffect(() => {
    if (!playing) return
    const t = window.setTimeout(() => {
      if (i >= n - 1) setPlaying(false)
      else setI(i + 1)
    }, 2600)
    return () => window.clearTimeout(t)
  }, [playing, i, n])

  const f = demo.frames[i]
  return (
    <Card title={`${demo.title}: step ${i + 1} of ${n}`} color={color} note={demo.note}>
      <div className="flex flex-wrap items-start gap-4">
        <Board rows={f.rows} />
        <div className="flex min-w-48 flex-1 flex-col gap-2">
          <p className="font-bold">{f.title}</p>
          <p className="text-sm leading-relaxed">{f.text}</p>
          {f.combo !== undefined && f.combo >= 1 && <p className="text-sm font-bold">Combo ×{f.combo}</p>}
          <p className="text-xs" style={soft}>
            The piece being placed has a white outline. A bright flash across a row means that row is full and is about to clear.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Btn onClick={() => { setPlaying(false); setI(Math.max(0, i - 1)) }} disabled={i === 0}>
          Back
        </Btn>
        <Btn onClick={() => { setPlaying(false); setI(Math.min(n - 1, i + 1)) }} disabled={i === n - 1}>
          Next
        </Btn>
        <Btn
          onClick={() => {
            if (playing) setPlaying(false)
            else {
              if (i >= n - 1) setI(0)
              setPlaying(true)
            }
          }}
          active={playing}
        >
          {playing ? 'Pause' : 'Play all'}
        </Btn>
      </div>
    </Card>
  )
}
