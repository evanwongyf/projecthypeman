import { useState } from 'react'
import { EXERCISES } from '../../lib/fitness/moves'
import type { Exercise } from '../../lib/fitness/moves'
import { Rich } from '../archive/GuideBlocks'
import { ExercisePlayer } from './ExercisePlayer'

const MUSCLE_NAMES: Record<string, string> = {
  legs: 'legs',
  glutes: 'glutes',
  calves: 'calves',
  core: 'core',
  chest: 'chest',
  back: 'back',
  shoulders: 'shoulders',
  arms: 'arms',
}

function Detail({ ex, color }: { ex: Exercise; color: string }) {
  const list = (title: string, items: string[], ordered = false) =>
    items.length > 0 && (
      <div>
        <p className="text-sm font-bold">{title}</p>
        {ordered ? (
          <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm leading-relaxed">
            {items.map((s, i) => (
              <li key={i}>
                <Rich text={s} />
              </li>
            ))}
          </ol>
        ) : (
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed">
            {items.map((s, i) => (
              <li key={i}>
                <Rich text={s} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <div>
        <p className="text-xl font-bold leading-tight">{ex.name}</p>
        {ex.muscles.length > 0 && (
          <p className="mt-1 flex flex-wrap gap-1">
            {ex.muscles.map((m) => (
              <span key={m} className="rounded-full border px-2 py-0.5 text-[11px] font-bold" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${color} 30%, var(--surface))` }}>
                {MUSCLE_NAMES[m]}
              </span>
            ))}
          </p>
        )}
      </div>
      {list('How to do it', ex.steps, true)}
      {list('Think about', ex.cues)}
      {list('Avoid', ex.mistakes)}
      {(ex.dose || ex.easier || ex.harder) && (
        <dl className="grid grid-cols-[5rem_1fr] gap-x-2 gap-y-1 rounded-[var(--radius)] p-2.5 text-sm leading-snug" style={{ background: `color-mix(in srgb, ${color} 14%, var(--surface))` }}>
          {ex.dose && (
            <>
              <dt className="font-bold">Start with</dt>
              <dd>{ex.dose}</dd>
            </>
          )}
          {ex.easier && (
            <>
              <dt className="font-bold">Easier</dt>
              <dd>{ex.easier}</dd>
            </>
          )}
          {ex.harder && (
            <>
              <dt className="font-bold">Harder</dt>
              <dd>{ex.harder}</dd>
            </>
          )}
        </dl>
      )}
    </div>
  )
}

// A set of exercises with one 3D player: pick an exercise to watch it and read how.
export function ExerciseLibrary({ ids, color }: { ids: string[]; color: string }) {
  const list = ids.filter((id) => EXERCISES[id])
  const [pick, setPick] = useState(list[0])
  const ex = EXERCISES[pick]
  if (!ex) return null
  return (
    <div className="card-surface flex flex-col gap-4 rounded-[var(--radius)] p-3 sm:p-4">
      {list.length > 1 && (
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Exercises">
          {list.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={id === pick}
              onClick={() => setPick(id)}
              className="rounded-full border px-3 py-1 text-sm font-bold pointer-coarse:min-h-10"
              style={{ borderColor: 'var(--line)', background: id === pick ? color : 'var(--surface)', boxShadow: id === pick ? '0 0 0 1px var(--accent)' : 'none' }}
            >
              {EXERCISES[id].name}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <ExercisePlayer ex={ex} color={color} />
        <Detail ex={ex} color={color} />
      </div>
    </div>
  )
}
