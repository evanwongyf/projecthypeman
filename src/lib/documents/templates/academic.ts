/** Progress, feedback and support documents. */
import { formatDate } from '../../format'
import { displayState } from '../../status'
import {
  awardRows,
  classHomework,
  entryRows,
  homeworkRows,
  homeworkSummary,
  pointsSummary,
  rosterOf,
  subjects,
} from '../build'
import type { Block, DocTemplate } from '../types'
import {
  area,
  authorFields,
  check,
  compact,
  date,
  dateText,
  field,
  gap,
  heading,
  masthead,
  metaOf,
  note,
  num,
  para,
  pSubject,
  pToday,
  pick,
  section,
  signatures,
  studentIdentity,
  table,
  text,
} from './shared'

const GRADES = ['A1', 'A2', 'B3', 'B4', 'C5', 'C6', 'D7', 'E8', 'F9']
const EFFORT = ['Excellent', 'Good', 'Satisfactory', 'Inconsistent', 'Of concern']
const SCALE = ['Secure', 'Developing', 'Emerging', 'Not yet']

export const academicTemplates: DocTemplate[] = [
  {
    id: 'progress-report',
    name: 'Student Progress Report',
    category: 'Academic',
    summary: 'One page per student, drawing on the points, homework and notes already logged.',
    audience: 'many',
    font: 'sans',
    sections: [
      section('Report', [
        text('school', 'School', { prefill: (ctx) => ctx.classRoom?.school?.trim() ?? '' }),
        text('className', 'Class', { prefill: (ctx) => ctx.classRoom?.name ?? '' }),
        text('subject', 'Subject', { prefill: pSubject }),
        text('period', 'Period covered', { placeholder: 'Term 2' }),
        date('docDate', 'Date', { prefill: pToday }),
      ]),
      section('For every student', [
        check('showPoints', 'Points summary'),
        check('showHomework', 'Homework record'),
        check('showNotes', 'Teacher notes from the record'),
        check('showPhoto', 'Photo'),
        pick('comment', 'Comment space', ['Ruled lines', 'None']),
        num('commentLines', 'Lines for comments'),
      ]),
      section('Shared text', [
        area('intro', 'Note at the top of each report', { rows: 3 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const people = subjects(ctx)
      if (people.length === 0) {
        return [
          masthead({ school: ctx.v('school'), title: 'Student Progress Report', meta: [] }),
          note('Choose one or more students, or a class, and a report is written for each of them.'),
        ]
      }
      const lines = Math.max(1, Number(ctx.v('commentLines')) || 4)
      const blocks: Block[] = []
      people.forEach((student, i) => {
        if (i > 0) blocks.push({ k: 'pagebreak' })
        const points = pointsSummary(ctx, student)
        const hw = homeworkSummary(ctx, student)
        const photo = ctx.v('showPhoto') ? ctx.photo(student.id) : null
        blocks.push(
          masthead({
            school: ctx.v('school'),
            title: student.fullName,
            subtitle: [ctx.v('subject'), ctx.v('period')].filter(Boolean).join('  |  ') || undefined,
            meta: metaOf(
              { label: 'Class', value: ctx.v('className') },
              { label: 'Known as', value: student.preferredName?.trim() ?? '' },
              { label: 'Date', value: dateText(ctx.v('docDate')) }
            ),
          })
        )
        if (photo) blocks.push({ k: 'photo', src: photo.src, ratio: photo.ratio, w: 84 })
        if (ctx.v('intro')) blocks.push(para(ctx.v('intro')))
        if (ctx.v('showPoints') || ctx.v('showHomework')) {
          const tiles = [
            ...(ctx.v('showPoints')
              ? [
                  { label: 'Points', value: points.total > 0 ? `+${points.total}` : String(points.total) },
                  { label: 'Earned', value: `+${points.positive}` },
                  { label: 'Deducted', value: String(points.negative) },
                ]
              : []),
            ...(ctx.v('showHomework')
              ? [
                  { label: 'Homework in', value: `${hw.collected}/${hw.total}` },
                  { label: 'Overdue', value: String(hw.overdue) },
                ]
              : []),
          ]
          blocks.push({ k: 'stats', items: tiles.slice(0, 5) })
        }
        if (ctx.v('showHomework')) {
          const rows = homeworkRows(ctx, student)
          if (rows.length) {
            blocks.push(heading('Homework', 2))
            blocks.push({
              k: 'table',
              head: ['Task', 'Due', 'State', 'Collected'],
              rows,
              widths: [4, 1.8, 1.6, 2.4],
              zebra: true,
            })
          }
        }
        if (ctx.v('showPoints')) {
          const rows = awardRows(ctx, student, 8)
          if (rows.length) {
            blocks.push(heading('Recent points', 2))
            blocks.push({ k: 'table', head: ['Logged', 'Effect', 'Points'], rows, widths: [3, 5, 1.4], align: ['l', 'l', 'r'], zebra: true })
          }
        }
        if (ctx.v('showNotes')) {
          const rows = entryRows(student.notes, 6)
          if (rows.length) {
            blocks.push(heading('Teacher notes', 2))
            blocks.push({ k: 'table', head: ['Logged', 'Note'], rows, widths: [2.4, 7], zebra: true })
          }
        }
        if (ctx.v('comment') !== 'None') {
          blocks.push(heading('Comment', 2))
          blocks.push({ k: 'lines', n: lines })
        }
        blocks.push(signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' }]))
      })
      return blocks
    },
  },

  {
    id: 'report-comments',
    name: 'Report Card Comment Sheet',
    category: 'Academic',
    summary: 'A drafting sheet: grade, effort and comment for every student in the class.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Class', [
        text('school', 'School', { prefill: (ctx) => ctx.classRoom?.school?.trim() ?? '' }),
        text('className', 'Class', { prefill: (ctx) => ctx.classRoom?.name ?? '' }),
        text('subject', 'Subject', { prefill: pSubject }),
        text('period', 'Reporting period', { placeholder: 'Term 2' }),
        date('due', 'Submission deadline'),
      ]),
      section('Sheet', [
        pick('layout', 'Layout', ['One row per student', 'One block per student']),
        check('includeGrade', 'Grade column'),
        check('includeEffort', 'Effort column'),
        num('lines', 'Comment lines per student'),
        area('guidance', 'Reminders for the drafter', { rows: 3 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const roster = rosterOf(ctx)
      const lines = Math.max(1, Number(ctx.v('lines')) || 3)
      const head = ['Student', ...(ctx.v('includeGrade') ? ['Grade'] : []), ...(ctx.v('includeEffort') ? ['Effort'] : []), 'Comment']
      const widths = [3, ...(ctx.v('includeGrade') ? [1] : []), ...(ctx.v('includeEffort') ? [1.4] : []), 6]
      const blocks: Block[] = [
        masthead({
          school: ctx.v('school'),
          title: 'Report Card Comment Sheet',
          subtitle: [ctx.v('subject'), ctx.v('period')].filter(Boolean).join('  |  ') || undefined,
          meta: metaOf(
            { label: 'Class', value: ctx.v('className') },
            { label: 'Students', value: roster.length ? String(roster.length) : '' },
            { label: 'Due', value: dateText(ctx.v('due')) }
          ),
        }),
      ]
      if (ctx.v('guidance')) blocks.push(note(ctx.v('guidance')))
      if (roster.length === 0) {
        blocks.push(note('Pick a class and the roster fills this sheet.'))
        return blocks
      }
      if (ctx.v('layout') === 'One block per student') {
        roster.forEach((student) => {
          blocks.push(heading(student.fullName, 2))
          if (ctx.v('includeGrade') || ctx.v('includeEffort')) {
            blocks.push({
              k: 'kv',
              cols: 2,
              rows: [
                ...(ctx.v('includeGrade') ? [{ label: 'Grade', value: '' }] : []),
                ...(ctx.v('includeEffort') ? [{ label: 'Effort', value: '' }] : []),
              ],
            })
          }
          blocks.push({ k: 'lines', n: lines })
        })
      } else {
        blocks.push({
          k: 'table',
          head,
          rows: roster.map((s) => [s.fullName, ...head.slice(1).map(() => '')]),
          widths,
          zebra: true,
        })
      }
      blocks.push(signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Subject teacher' }]))
      return blocks
    },
  },

  {
    id: 'assessment-feedback',
    name: 'Assessment Feedback Sheet',
    category: 'Academic',
    summary: 'Marks against criteria, what went well, and the next step.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Assessment', [
        ...studentIdentity(),
        text('subject', 'Subject', { prefill: pSubject }),
        text('task', 'Task'),
        date('sat', 'Date sat'),
        num('mark', 'Mark'),
        num('outOf', 'Out of'),
        pick('grade', 'Grade', GRADES),
      ]),
      section('Criteria', [
        table('criteria', 'Criteria', ['Criterion', 'Marks', 'Out of', 'Comment'], { startRows: 4 }),
      ]),
      section('Feedback', [
        area('strengths', 'What went well', { rows: 4 }),
        area('improve', 'What to do next time', { rows: 4 }),
        area('action', 'Action for the student', { rows: 3 }),
        check('studentReply', 'Space for the student to respond'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const mark = Number(ctx.v('mark'))
      const outOf = Number(ctx.v('outOf'))
      const pct = outOf > 0 && Number.isFinite(mark) ? `${Math.round((mark / outOf) * 1000) / 10}%` : ''
      return compact([
        masthead({
          school: ctx.v('school'),
          title: ctx.v('task') || 'Assessment Feedback',
          subtitle: ctx.v('subject'),
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Sat', value: dateText(ctx.v('sat')) }
          ),
        }),
        {
          k: 'stats',
          items: [
            { label: 'Mark', value: ctx.v('mark') && ctx.v('outOf') ? `${ctx.v('mark')}/${ctx.v('outOf')}` : ctx.v('mark') || '-' },
            { label: 'Percentage', value: pct || '-' },
            { label: 'Grade', value: ctx.v('grade') || '-' },
          ],
        },
        ctx.rows('criteria').length ? heading('Against the criteria') : null,
        ctx.rows('criteria').length
          ? {
              k: 'table',
              head: ['Criterion', 'Marks', 'Out of', 'Comment'],
              rows: ctx.rows('criteria'),
              widths: [3.4, 1.1, 1.1, 4.4],
              align: ['l', 'r', 'r', 'l'],
              zebra: true,
            }
          : null,
        heading('Feedback'),
        field('What went well', ctx.v('strengths'), 4),
        field('What to do next time', ctx.v('improve'), 4),
        field('Action for the student', ctx.v('action'), 3),
        ctx.v('studentReply') ? heading('Student response', 2) : null,
        ctx.v('studentReply') ? { k: 'lines', n: 4 } : null,
        gap(6),
        signatures([
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Marker' },
          { name: ctx.v('student'), role: 'Student' },
        ]),
      ])
    },
  },

  {
    id: 'item-analysis',
    name: 'Paper Item Analysis',
    category: 'Academic',
    summary: 'Question by question across the class, from the marks already entered.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Paper', [
        text('school', 'School', { prefill: (ctx) => ctx.classRoom?.school?.trim() ?? '' }),
        text('className', 'Class', { prefill: (ctx) => ctx.classRoom?.name ?? '' }),
        text('subject', 'Subject', { prefill: pSubject }),
        pick('homeworkId', 'Paper', [], {
          hint: 'papers set up for item analysis',
          dynamicOptions: (ctx) =>
            ctx.data.homework
              .filter((hw) => hw.classId === ctx.classRoom?.id && hw.questions?.length)
              .sort((a, b) => b.dueDate.localeCompare(a.dueDate))
              .map((hw) => ({ value: hw.id, label: `${hw.title} (due ${formatDate(hw.dueDate)})` })),
          prefill: (ctx) => {
            const first = ctx.data.homework
              .filter((hw) => hw.classId === ctx.classRoom?.id && hw.questions?.length)
              .sort((a, b) => b.dueDate.localeCompare(a.dueDate))[0]
            return first?.id ?? ''
          },
        }),
        date('docDate', 'Date', { prefill: pToday }),
      ]),
      section('Reading', [
        num('weakBelow', 'Flag questions below this percentage'),
        check('showConcepts', 'Group by concept'),
        area('comment', 'What this suggests for teaching', { rows: 4 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const hw = ctx.data.homework.find((h) => h.id === ctx.v('homeworkId'))
      const roster = rosterOf(ctx)
      const questions = hw?.questions ?? []
      const scores = hw?.scores ?? {}
      const blocks: Block[] = [
        masthead({
          school: ctx.v('school'),
          title: 'Paper Item Analysis',
          subtitle: hw?.title ?? ctx.v('subject'),
          meta: metaOf(
            { label: 'Class', value: ctx.v('className') },
            { label: 'Due', value: hw ? formatDate(hw.dueDate) : '' },
            { label: 'Date', value: dateText(ctx.v('docDate')) }
          ),
        }),
      ]
      if (!hw || questions.length === 0) {
        blocks.push(
          note(
            'Choose a paper that has been set up for item analysis on the Homework page. Once marks are entered, this sheet fills itself in.'
          )
        )
        return blocks
      }

      // Only students with a score for a question count towards it, so a
      // half-marked paper reports what it knows rather than scoring zeros.
      const marked = roster.filter((s) => Array.isArray(scores[s.id]))
      const threshold = Number(ctx.v('weakBelow')) || 0
      const perQuestion = questions.map((q, qi) => {
        let sum = 0
        let count = 0
        for (const s of marked) {
          const value = scores[s.id]?.[qi]
          if (typeof value === 'number') {
            sum += value
            count += 1
          }
        }
        const mean = count ? sum / count : null
        const facility = mean !== null && q.marks > 0 ? (mean / q.marks) * 100 : null
        return { n: qi + 1, marks: q.marks, concept: q.concept ?? '', mean, facility, count }
      })
      const overall = perQuestion.filter((q) => q.facility !== null)
      const classMean = overall.length ? overall.reduce((a, q) => a + (q.facility ?? 0), 0) / overall.length : null

      blocks.push({
        k: 'stats',
        items: [
          { label: 'Questions', value: String(questions.length) },
          { label: 'Marked', value: `${marked.length}/${roster.length}` },
          { label: 'Mean facility', value: classMean !== null ? `${Math.round(classMean)}%` : '-' },
          { label: 'Total marks', value: String(Math.round(questions.reduce((a, q) => a + q.marks, 0) * 100) / 100) },
        ],
      })
      blocks.push(heading('By question'))
      blocks.push({
        k: 'table',
        head: ['Q', 'Marks', 'Concept', 'Mean', 'Facility', 'Flag'],
        rows: perQuestion.map((q) => [
          String(q.n),
          String(q.marks),
          q.concept,
          q.mean !== null ? String(Math.round(q.mean * 100) / 100) : '',
          q.facility !== null ? `${Math.round(q.facility)}%` : '',
          q.facility !== null && threshold > 0 && q.facility < threshold ? 'Review' : '',
        ]),
        widths: [0.7, 1, 3.6, 1.2, 1.3, 1.3],
        align: ['c', 'r', 'l', 'r', 'r', 'c'],
        zebra: true,
      })

      if (ctx.v('showConcepts')) {
        const byConcept = new Map<string, { sum: number; n: number }>()
        for (const q of perQuestion) {
          if (q.facility === null) continue
          const key = q.concept || 'Unlabelled'
          const entry = byConcept.get(key) ?? { sum: 0, n: 0 }
          entry.sum += q.facility
          entry.n += 1
          byConcept.set(key, entry)
        }
        if (byConcept.size) {
          blocks.push(heading('By concept', 2))
          blocks.push({
            k: 'table',
            head: ['Concept', 'Questions', 'Mean facility'],
            rows: [...byConcept.entries()]
              .sort((a, b) => a[1].sum / a[1].n - b[1].sum / b[1].n)
              .map(([concept, e]) => [concept, String(e.n), `${Math.round(e.sum / e.n)}%`]),
            widths: [5, 1.6, 2],
            align: ['l', 'r', 'r'],
            zebra: true,
          })
        }
      }

      if (threshold > 0) {
        const weak = perQuestion.filter((q) => q.facility !== null && q.facility < threshold)
        if (weak.length) {
          blocks.push(
            note(
              `Below ${threshold}%: ${weak.map((q) => `Q${q.n}${q.concept ? ` (${q.concept})` : ''}`).join(', ')}.`,
              'strong'
            )
          )
        }
      }
      blocks.push(field('What this suggests for teaching', ctx.v('comment'), 4))
      blocks.push(signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Subject teacher' }]))
      return blocks
    },
  },

  {
    id: 'homework-record',
    name: 'Homework Record',
    category: 'Academic',
    summary: 'Every task set for the class, and who is still to hand in.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Class', [
        text('school', 'School', { prefill: (ctx) => ctx.classRoom?.school?.trim() ?? '' }),
        text('className', 'Class', { prefill: (ctx) => ctx.classRoom?.name ?? '' }),
        text('subject', 'Subject', { prefill: pSubject }),
        date('docDate', 'Printed', { prefill: pToday }),
      ]),
      section('Sheet', [
        pick('view', 'Arrange by', ['Student', 'Task']),
        check('outstandingOnly', 'Outstanding work only'),
        check('chaseList', 'Add a chase list'),
        area('comment', 'Note', { rows: 3 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const roster = rosterOf(ctx)
      const list = classHomework(ctx)
      const blocks: Block[] = [
        masthead({
          school: ctx.v('school'),
          title: 'Homework Record',
          subtitle: ctx.v('subject'),
          meta: metaOf(
            { label: 'Class', value: ctx.v('className') },
            { label: 'Tasks', value: list.length ? String(list.length) : '' },
            { label: 'Students', value: roster.length ? String(roster.length) : '' },
            { label: 'Printed', value: dateText(ctx.v('docDate')) }
          ),
        }),
      ]
      if (!ctx.classRoom || roster.length === 0 || list.length === 0) {
        blocks.push(note('Pick a class with homework set, and this sheet is written from the record.'))
        return blocks
      }

      if (ctx.v('view') === 'Task') {
        for (const hw of list) {
          const states = roster.map((s) => ({ s, state: displayState(hw, s.id, ctx.now) }))
          const shown = ctx.v('outstandingOnly') ? states.filter((r) => r.state !== 'collected') : states
          blocks.push(heading(hw.title, 2))
          blocks.push({
            k: 'kv',
            cols: 2,
            rows: [
              { label: 'Due', value: formatDate(hw.dueDate) },
              { label: 'In', value: `${states.filter((r) => r.state === 'collected').length}/${roster.length}` },
            ],
          })
          if (shown.length) {
            blocks.push({
              k: 'table',
              head: ['Student', 'State', 'Collected'],
              rows: shown.map((r) => [
                r.s.fullName,
                r.state === 'collected' ? 'Collected' : r.state === 'overdue' ? 'Overdue' : 'Assigned',
                hw.collectedAt?.[r.s.id] ? formatDate(hw.collectedAt[r.s.id].slice(0, 10)) : '',
              ]),
              widths: [4.4, 2, 2.4],
              zebra: true,
            })
          } else {
            blocks.push(para('All in.', 'i'))
          }
        }
      } else {
        const head = ['Student', ...list.map((hw) => hw.title)]
        const widths = [3, ...list.map(() => 1.2)]
        blocks.push({
          k: 'table',
          head,
          rows: roster.map((s) => [
            s.fullName,
            ...list.map((hw) => {
              const state = displayState(hw, s.id, ctx.now)
              return state === 'collected' ? 'In' : state === 'overdue' ? 'Late' : '-'
            }),
          ]),
          widths,
          align: ['l', ...list.map(() => 'c' as const)],
          zebra: true,
        })
      }

      if (ctx.v('chaseList')) {
        const chase = roster
          .map((s) => {
            const owed = list.filter((hw) => displayState(hw, s.id, ctx.now) !== 'collected')
            return { s, owed }
          })
          .filter((r) => r.owed.length > 0)
        blocks.push(heading('Chase list'))
        blocks.push(
          chase.length
            ? {
                k: 'table',
                head: ['Student', 'Outstanding', 'Tasks'],
                rows: chase.map((r) => [r.s.fullName, String(r.owed.length), r.owed.map((hw) => hw.title).join('; ')]),
                widths: [3, 1.4, 5.6],
                align: ['l', 'r', 'l'],
                zebra: true,
              }
            : para('Nothing outstanding.', 'i')
        )
      }
      if (ctx.v('comment')) blocks.push(field('Note', ctx.v('comment'), 2))
      blocks.push(signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Subject teacher' }]))
      return blocks
    },
  },

  {
    id: 'learning-support',
    name: 'Learning Support Plan',
    category: 'Academic',
    summary: 'Needs, adjustments and who does what, on one reviewable page.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Student', [
        ...studentIdentity(),
        date('start', 'Plan starts', { prefill: pToday }),
        date('review', 'Review on'),
      ]),
      section('Picture of the learner', [
        area('strengths', 'Strengths', {
          rows: 3,
          prefill: (ctx) => (ctx.student?.characteristics ?? []).join(', '),
        }),
        area('interests', 'Interests', {
          rows: 2,
          prefill: (ctx) => [...(ctx.student?.interests ?? []), ...(ctx.student?.ccas ?? [])].join(', '),
        }),
        area('needs', 'Needs', { rows: 4 }),
        area('evidence', 'Evidence and assessments', { rows: 3 }),
      ]),
      section('The plan', [
        table('adjustments', 'Adjustments in class', ['Adjustment', 'Where it applies', 'Who'], { startRows: 3 }),
        table('goals', 'Goals', ['Goal', 'How we will know', 'By when'], { startRows: 3 }),
        area('assessment', 'Assessment arrangements', { rows: 3 }),
        area('home', 'Agreed with home', { rows: 3 }),
      ]),
      section('Review', [
        {
          id: 'progressScale',
          label: 'Progress against goals so far',
          kind: 'select',
          options: SCALE,
        },
        area('reviewNotes', 'Review notes', { rows: 3 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) =>
      compact([
        masthead({
          school: ctx.v('school'),
          title: 'Learning Support Plan',
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Starts', value: dateText(ctx.v('start')) },
            { label: 'Review', value: dateText(ctx.v('review')) }
          ),
        }),
        note('Shared with everyone who teaches this student. The adjustments are expectations, not suggestions.'),
        heading('The learner'),
        field('Strengths', ctx.v('strengths'), 3),
        ctx.v('interests') ? field('Interests', ctx.v('interests'), 2) : null,
        field('Needs', ctx.v('needs'), 4),
        field('Evidence and assessments', ctx.v('evidence'), 3),
        heading('Adjustments in class'),
        { k: 'table', head: ['Adjustment', 'Where it applies', 'Who'], rows: ctx.rows('adjustments'), widths: [4, 3.4, 2], zebra: true },
        heading('Goals'),
        { k: 'table', head: ['Goal', 'How we will know', 'By when'], rows: ctx.rows('goals'), widths: [4, 3.6, 1.8], zebra: true },
        field('Assessment arrangements', ctx.v('assessment'), 3),
        field('Agreed with home', ctx.v('home'), 3),
        ctx.v('progressScale') || ctx.v('reviewNotes') ? heading('Review') : null,
        ctx.v('progressScale')
          ? { k: 'kv', cols: 1, rows: [{ label: 'Progress', value: ctx.v('progressScale') }] }
          : null,
        ctx.v('reviewNotes') ? field('Review notes', ctx.v('reviewNotes'), 3) : null,
        gap(8),
        signatures([
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Coordinator' },
          { name: '', role: 'Parent or guardian' },
        ]),
      ]),
  },

  {
    id: 'target-agreement',
    name: 'Target Setting Agreement',
    category: 'Academic',
    summary: 'Three targets in the student’s own words, signed by everyone.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Student', [
        ...studentIdentity(),
        text('subject', 'Subject', { prefill: pSubject }),
        date('docDate', 'Agreed on', { prefill: pToday }),
        date('review', 'Review on'),
      ]),
      section('Where we are', [
        pick('currentGrade', 'Current grade', GRADES),
        pick('targetGrade', 'Target grade', GRADES),
        pick('effort', 'Effort now', EFFORT),
        area('standing', 'How things stand', { rows: 3 }),
      ]),
      section('Targets', [
        table('targets', 'Targets', ['Target', 'What I will do', 'By when'], { startRows: 3 }),
        area('support', 'What the teacher will do', { rows: 3 }),
        area('obstacles', 'What might get in the way', { rows: 2 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) =>
      compact([
        masthead({
          school: ctx.v('school'),
          title: 'Target Setting Agreement',
          subtitle: ctx.v('subject'),
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Agreed', value: dateText(ctx.v('docDate')) },
            { label: 'Review', value: dateText(ctx.v('review')) }
          ),
        }),
        {
          k: 'stats',
          items: [
            { label: 'Now', value: ctx.v('currentGrade') || '-' },
            { label: 'Target', value: ctx.v('targetGrade') || '-' },
            { label: 'Effort', value: ctx.v('effort') || '-' },
          ],
        },
        ctx.v('standing') ? field('How things stand', ctx.v('standing'), 3) : null,
        heading('My targets'),
        { k: 'table', head: ['Target', 'What I will do', 'By when'], rows: ctx.rows('targets'), widths: [3.4, 4.4, 1.8], zebra: true },
        field('What the teacher will do', ctx.v('support'), 3),
        ctx.v('obstacles') ? field('What might get in the way', ctx.v('obstacles'), 2) : null,
        gap(8),
        signatures([
          { name: ctx.v('student'), role: 'Student' },
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' },
        ]),
      ]),
  },
]
