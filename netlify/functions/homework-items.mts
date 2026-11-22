import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { cleanQuestions } from './_shared/items.js'
import { mutate, nowIso } from './_shared/store.js'

/**
 * Initialise (PUT) or remove (DELETE) a homework's item analysis.
 *
 * Re-initialising keeps marks already entered when only the concepts change.
 * If the number of questions or any full mark changes and marks exist, the
 * request must say `reset: true`, so marks are never silently thrown away.
 */
export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response
  const { id } = context.params

  if (req.method === 'DELETE') {
    const ok = await mutate(guard.session.username, (data) => {
      const hw = data.homework.find((h) => h.id === id)
      if (!hw) return false
      delete hw.questions
      delete hw.itemsInitialisedAt
      delete hw.scores
      return true
    })
    if (!ok) return Response.json({ error: 'Homework not found.' }, { status: 404 })
    return Response.json({ ok: true })
  }

  const body = (await req.json()) as { questions?: unknown; reset?: boolean }
  const cleaned = cleanQuestions(body.questions)
  if ('error' in cleaned) return Response.json({ error: cleaned.error }, { status: 400 })
  const questions = cleaned.questions

  const result = await mutate(guard.session.username, (data) => {
    const hw = data.homework.find((h) => h.id === id)
    if (!hw) return 'notfound' as const

    const hasScores = Object.values(hw.scores ?? {}).some((row) => row.some((v) => v !== null))
    const old = hw.questions ?? []
    const sameShape = old.length === questions.length && old.every((q, i) => q.marks === questions[i].marks)

    if (hasScores && !sameShape && !body.reset) return 'conflict' as const

    hw.questions = questions
    hw.itemsInitialisedAt = hw.itemsInitialisedAt && sameShape ? hw.itemsInitialisedAt : nowIso()
    if (!sameShape) hw.scores = {}
    else hw.scores ??= {}
    return 'ok' as const
  })

  if (result === 'notfound') return Response.json({ error: 'Homework not found.' }, { status: 404 })
  if (result === 'conflict') {
    return Response.json(
      { error: 'Marks have already been entered. Changing the number of questions or their full marks clears them.', code: 'has-scores' },
      { status: 409 }
    )
  }
  return Response.json({ ok: true })
}

export const config: Config = { path: '/api/homework/:id/items', method: ['PUT', 'DELETE'] }
