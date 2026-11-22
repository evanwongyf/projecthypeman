/** Lesson planning, rosters, seating and groups. */
import { formatDate, nameKey } from '../../format'
import { resolveRelationships } from '../../relationships'
import { adjacentConflicts } from '../../seating'
import { rosterOf } from '../build'
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
  table,
  text,
} from './shared'

const classFields = () => [
  text('school', 'School', { prefill: (ctx: { classRoom: { school?: string } | null }) => ctx.classRoom?.school?.trim() ?? '' }),
  text('className', 'Class', { prefill: (ctx: { classRoom: { name?: string } | null }) => ctx.classRoom?.name ?? '' }),
  text('subject', 'Subject', { prefill: pSubject }),
]

export const classroomTemplates: DocTemplate[] = [
  {
    id: 'lesson-plan',
    name: 'Lesson Plan',
    category: 'Classroom',
    summary: 'Objectives, a timed sequence, and what counts as evidence of learning.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Lesson', [
        ...classFields(),
        text('topic', 'Topic'),
        date('when', 'Date', { prefill: pToday }),
        text('period', 'Period'),
        num('minutes', 'Length in minutes'),
        text('room', 'Room'),
      ]),
      section('Intentions', [
        area('objectives', 'Learning objectives', { rows: 4, hint: 'one per line' }),
        area('success', 'Success criteria', { rows: 4, hint: 'one per line' }),
        area('priorKnowledge', 'Prior knowledge assumed', { rows: 2 }),
        area('vocabulary', 'Key vocabulary', { rows: 2 }),
      ]),
      section('Sequence', [
        table('sequence', 'Sequence', ['Time', 'Teacher', 'Students', 'Resources'], { startRows: 5 }),
        area('questions', 'Questions to ask', { rows: 3, hint: 'one per line' }),
        area('assessment', 'How learning is checked', { rows: 3 }),
        area('differentiation', 'Adjustments for individuals', { rows: 3 }),
        area('homework', 'Homework set', { rows: 2 }),
      ]),
      section('After', [
        area('reflection', 'Reflection', { rows: 3 }),
        check('reflectionLines', 'Leave the reflection blank to write by hand'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const lines = (id: string) =>
        ctx
          .v(id)
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean)
      return compact([
        masthead({
          school: ctx.v('school'),
          title: ctx.v('topic') || 'Lesson Plan',
          subtitle: [ctx.v('subject'), ctx.v('className')].filter(Boolean).join('  |  ') || undefined,
          meta: metaOf(
            { label: 'Date', value: dateText(ctx.v('when')) },
            { label: 'Period', value: ctx.v('period') },
            { label: 'Length', value: ctx.v('minutes') ? `${ctx.v('minutes')} min` : '' },
            { label: 'Room', value: ctx.v('room') }
          ),
        }),
        heading('By the end of this lesson'),
        lines('objectives').length ? { k: 'bullets', items: lines('objectives') } : { k: 'lines', n: 3, label: 'Objectives' },
        lines('success').length ? heading('Success criteria', 2) : null,
        lines('success').length ? { k: 'checklist', items: lines('success').map((text) => ({ text })) } : null,
        ctx.v('priorKnowledge') || ctx.v('vocabulary')
          ? {
              k: 'kv',
              cols: 1,
              rows: compactPairs([
                { label: 'Prior knowledge', value: ctx.v('priorKnowledge') },
                { label: 'Key vocabulary', value: ctx.v('vocabulary') },
              ]),
            }
          : null,
        heading('Sequence'),
        {
          k: 'table',
          head: ['Time', 'Teacher', 'Students', 'Resources'],
          rows: ctx.rows('sequence'),
          widths: [1.1, 3.4, 3.4, 2],
          zebra: true,
        },
        lines('questions').length ? heading('Questions to ask', 2) : null,
        lines('questions').length ? { k: 'bullets', items: lines('questions') } : null,
        heading('Checking and adjusting'),
        field('How learning is checked', ctx.v('assessment'), 3),
        field('Adjustments for individuals', ctx.v('differentiation'), 3),
        ctx.v('homework') ? field('Homework set', ctx.v('homework'), 2) : null,
        heading('Reflection'),
        ctx.v('reflection') && !ctx.v('reflectionLines') ? para(ctx.v('reflection')) : { k: 'lines', n: 4 },
        gap(6),
        signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' }]),
      ])
    },
  },

  {
    id: 'unit-overview',
    name: 'Unit Overview',
    category: 'Classroom',
    summary: 'A unit at a glance: lessons, assessment points and resources.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Unit', [
        ...classFields(),
        text('unit', 'Unit title'),
        text('level', 'Level or year'),
        date('start', 'Starts', { prefill: pToday }),
        date('end', 'Ends'),
        num('lessons', 'Number of lessons'),
      ]),
      section('Design', [
        area('bigIdeas', 'Big ideas', { rows: 3, hint: 'one per line' }),
        area('outcomes', 'Intended outcomes', { rows: 4, hint: 'one per line' }),
        area('misconceptions', 'Likely misconceptions', { rows: 3, hint: 'one per line' }),
        table('plan', 'Lesson by lesson', ['No.', 'Focus', 'Activity', 'Assessment'], { startRows: 6 }),
      ]),
      section('Assessment and resources', [
        table('assessments', 'Assessment points', ['When', 'What', 'Weighting'], { startRows: 2 }),
        area('resources', 'Resources', { rows: 3, hint: 'one per line' }),
        area('links', 'Links to other units', { rows: 2 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const lines = (id: string) =>
        ctx
          .v(id)
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean)
      return compact([
        masthead({
          school: ctx.v('school'),
          title: ctx.v('unit') || 'Unit Overview',
          subtitle: [ctx.v('subject'), ctx.v('level') || ctx.v('className')].filter(Boolean).join('  |  ') || undefined,
          meta: metaOf(
            { label: 'Starts', value: dateText(ctx.v('start')) },
            { label: 'Ends', value: dateText(ctx.v('end')) },
            { label: 'Lessons', value: ctx.v('lessons') }
          ),
        }),
        lines('bigIdeas').length ? heading('Big ideas') : null,
        lines('bigIdeas').length ? { k: 'bullets', items: lines('bigIdeas') } : null,
        heading('By the end of the unit'),
        lines('outcomes').length ? { k: 'checklist', items: lines('outcomes').map((text) => ({ text })) } : { k: 'lines', n: 4 },
        lines('misconceptions').length ? heading('Likely misconceptions', 2) : null,
        lines('misconceptions').length ? { k: 'bullets', items: lines('misconceptions') } : null,
        heading('Lesson by lesson'),
        {
          k: 'table',
          head: ['No.', 'Focus', 'Activity', 'Assessment'],
          rows: ctx.rows('plan'),
          widths: [0.8, 3, 4, 2.4],
          align: ['c', 'l', 'l', 'l'],
          zebra: true,
        },
        ctx.rows('assessments').length ? heading('Assessment points') : null,
        ctx.rows('assessments').length
          ? { k: 'table', head: ['When', 'What', 'Weighting'], rows: ctx.rows('assessments'), widths: [2, 5.4, 1.8], align: ['l', 'l', 'r'], zebra: true }
          : null,
        lines('resources').length ? heading('Resources', 2) : null,
        lines('resources').length ? { k: 'bullets', items: lines('resources') } : null,
        ctx.v('links') ? field('Links to other units', ctx.v('links'), 2) : null,
        gap(6),
        signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Written by' }]),
      ])
    },
  },

  {
    id: 'seating-record',
    name: 'Seating Plan Record',
    category: 'Classroom',
    summary: 'A named plan printed as a grid, with the conflicts it has to respect.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Class', [
        ...classFields(),
        pick('planId', 'Plan', [], {
          hint: 'plans saved for this class',
          dynamicOptions: (ctx) =>
            ctx.data.seatingPlans
              .filter((p) => p.classId === ctx.classRoom?.id)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((p) => ({ value: p.id, label: `${p.name} (${p.rows} x ${p.cols})` })),
          prefill: (ctx) => ctx.data.seatingPlans.find((p) => p.classId === ctx.classRoom?.id)?.id ?? '',
        }),
        date('docDate', 'Printed', { prefill: pToday }),
      ]),
      section('Sheet', [
        check('preferred', 'Use preferred names in the grid'),
        check('showConflicts', 'List recorded conflicts'),
        check('showUnseated', 'List students without a seat'),
        area('note', 'Note for whoever uses this plan', { rows: 3 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const plan = ctx.data.seatingPlans.find((p) => p.id === ctx.v('planId'))
      const roster = rosterOf(ctx)
      const blocks: Block[] = [
        masthead({
          school: ctx.v('school'),
          title: plan ? `Seating: ${plan.name}` : 'Seating Plan Record',
          subtitle: [ctx.v('subject'), ctx.v('className')].filter(Boolean).join('  |  ') || undefined,
          meta: metaOf(
            { label: 'Grid', value: plan ? `${plan.rows} rows x ${plan.cols} columns` : '' },
            { label: 'Seated', value: plan ? String(Object.keys(plan.seats).length) : '' },
            { label: 'Printed', value: dateText(ctx.v('docDate')) }
          ),
        }),
      ]
      if (!plan) {
        blocks.push(note('Pick a class and one of its saved seating plans.'))
        return blocks
      }

      const byId = new Map(roster.map((s) => [s.id, s]))
      const label = (id: string | undefined) => {
        if (!id) return ''
        const student = byId.get(id) ?? ctx.data.students.find((s) => s.id === id)
        if (!student) return ''
        return ctx.v('preferred') ? student.preferredName?.trim() || student.fullName : student.fullName
      }

      if (ctx.v('note')) blocks.push(note(ctx.v('note')))
      blocks.push(para('The front of the room is at the top of the grid.', 'i'))
      blocks.push({
        k: 'table',
        head: ['', ...Array.from({ length: plan.cols }, (_, c) => String(c + 1))],
        rows: Array.from({ length: plan.rows }, (_, r) => [
          `Row ${r + 1}`,
          ...Array.from({ length: plan.cols }, (_, c) => label(plan.seats[`${r},${c}`])),
        ]),
        widths: [1, ...Array.from({ length: plan.cols }, () => 2)],
        align: ['l', ...Array.from({ length: plan.cols }, () => 'c' as const)],
      })

      if (ctx.v('showConflicts')) {
        // Every recorded conflict between two students in the plan, with the
        // ones who have ended up side by side called out. adjacentConflicts
        // reads relationships from both directions, so it does not matter
        // which profile the conflict was recorded on.
        const adjacent = new Set(
          adjacentConflicts(plan, ctx.data.students).map((p) => [p.students[0].id, p.students[1].id].sort().join('|'))
        )
        const seatedIds = new Set(Object.values(plan.seats))
        const seen = new Set<string>()
        const pairs: string[][] = []
        for (const student of ctx.data.students.filter((s) => seatedIds.has(s.id))) {
          for (const rel of resolveRelationships(student, ctx.data.students)) {
            if (rel.kind !== 'conflict' || !rel.otherStudentId || !seatedIds.has(rel.otherStudentId)) continue
            const key = [student.id, rel.otherStudentId].sort().join('|')
            if (seen.has(key)) continue
            seen.add(key)
            pairs.push([student.fullName, rel.otherLabel, adjacent.has(key) ? 'Side by side' : 'Apart'])
          }
        }
        blocks.push(heading('Recorded conflicts', 2))
        blocks.push(
          pairs.length
            ? {
                k: 'table',
                head: ['Student', 'In conflict with', 'In this plan'],
                rows: pairs,
                widths: [3.4, 3.4, 2.4],
                zebra: true,
              }
            : para('No conflicts recorded between students in this plan.', 'i')
        )
      }

      if (ctx.v('showUnseated')) {
        const seated = new Set(Object.values(plan.seats))
        const out = roster.filter((s) => !seated.has(s.id))
        blocks.push(heading('Not seated', 2))
        blocks.push(out.length ? { k: 'bullets', items: out.map((s) => s.fullName) } : para('Everyone has a seat.', 'i'))
      }

      blocks.push(signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Form Teacher' }]))
      return blocks
    },
  },

  {
    id: 'class-roster',
    name: 'Class Roster',
    category: 'Classroom',
    summary: 'The roster with the columns you choose, ready for a clipboard.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Class', [...classFields(), date('docDate', 'Printed', { prefill: pToday })]),
      section('Columns', [
        check('colPreferred', 'Preferred name'),
        check('colBirthday', 'Birthday'),
        check('colGuardian', 'Primary contact'),
        check('colPhone', 'Contact number'),
        check('colCcas', 'CCAs'),
        check('blankColumns', 'Add blank columns to write in'),
        text('blankHeads', 'Blank column headings', { placeholder: 'Week 1, Week 2, Week 3' }),
      ]),
      section('Sheet', [area('note', 'Note', { rows: 2 }), ...authorFields()]),
    ],
    build: (ctx) => {
      const roster = rosterOf(ctx)
      const blanks = ctx.v('blankColumns')
        ? ctx
            .v('blankHeads')
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
        : []
      const head = ['No.', 'Name']
      const widths = [1.1, 3.4]
      if (ctx.v('colPreferred')) {
        head.push('Known as')
        widths.push(2)
      }
      if (ctx.v('colBirthday')) {
        head.push('Birthday')
        widths.push(1.6)
      }
      if (ctx.v('colGuardian')) {
        head.push('Contact')
        widths.push(2.6)
      }
      if (ctx.v('colPhone')) {
        head.push('Phone')
        widths.push(2)
      }
      if (ctx.v('colCcas')) {
        head.push('CCAs')
        widths.push(2.4)
      }
      for (const b of blanks.length ? blanks : ctx.v('blankColumns') ? ['', '', ''] : []) {
        head.push(b)
        widths.push(1.4)
      }

      const blocks: Block[] = [
        masthead({
          school: ctx.v('school'),
          title: 'Class Roster',
          subtitle: [ctx.v('subject'), ctx.v('className')].filter(Boolean).join('  |  ') || undefined,
          meta: metaOf(
            { label: 'Students', value: roster.length ? String(roster.length) : '' },
            { label: 'Printed', value: dateText(ctx.v('docDate')) }
          ),
        }),
      ]
      if (ctx.v('note')) blocks.push(note(ctx.v('note')))
      if (roster.length === 0) {
        blocks.push(note('Pick a class and its roster fills this sheet.'))
        return blocks
      }
      blocks.push({
        k: 'table',
        head,
        rows: roster.map((s, i) => {
          const row = [String(i + 1), s.fullName]
          if (ctx.v('colPreferred')) row.push(s.preferredName?.trim() ?? '')
          if (ctx.v('colBirthday')) row.push(s.birthday ? formatDate(s.birthday) : '')
          if (ctx.v('colGuardian')) row.push(s.guardians[0]?.name ?? '')
          if (ctx.v('colPhone')) row.push(s.guardians[0]?.phone ?? '')
          if (ctx.v('colCcas')) row.push(s.ccas.join(', '))
          for (let b = 0; b < head.length - row.length; b++) row.push('')
          return row
        }),
        widths,
        align: ['c', 'l'],
        zebra: true,
      })
      blocks.push(signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Form Teacher' }]))
      return blocks
    },
  },

  {
    id: 'attendance-register',
    name: 'Attendance Register',
    category: 'Classroom',
    summary: 'A blank grid of dates against the roster, with the key printed on it.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Class', [...classFields(), text('period', 'Period covered', { placeholder: 'Term 2, Week 4' })]),
      section('Grid', [
        num('days', 'Number of columns'),
        text('headings', 'Column headings', { placeholder: 'Mon, Tue, Wed, Thu, Fri' }),
        check('showKey', 'Print the key'),
        check('totals', 'Add a totals column'),
      ]),
      section('Sheet', [area('note', 'Note', { rows: 2 }), ...authorFields()]),
    ],
    build: (ctx) => {
      const roster = rosterOf(ctx)
      const named = ctx
        .v('headings')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
      const count = named.length || Math.min(20, Math.max(1, Number(ctx.v('days')) || 10))
      const columns = named.length ? named : Array.from({ length: count }, (_, i) => String(i + 1))
      const head = ['Name', ...columns, ...(ctx.v('totals') ? ['Absences'] : [])]
      const blocks: Block[] = [
        masthead({
          school: ctx.v('school'),
          title: 'Attendance Register',
          subtitle: [ctx.v('subject'), ctx.v('className')].filter(Boolean).join('  |  ') || undefined,
          meta: metaOf(
            { label: 'Period', value: ctx.v('period') },
            { label: 'Students', value: roster.length ? String(roster.length) : '' }
          ),
        }),
      ]
      if (ctx.v('showKey')) {
        blocks.push(note('Key:  /  present      L  late      A  absent      E  excused      M  medical certificate'))
      }
      if (ctx.v('note')) blocks.push(note(ctx.v('note')))
      if (roster.length === 0) {
        blocks.push(note('Pick a class and its roster fills this register.'))
        return blocks
      }
      blocks.push({
        k: 'table',
        head,
        rows: roster.map((s) => [s.fullName, ...head.slice(1).map(() => '')]),
        widths: [3.4, ...head.slice(1).map(() => 1)],
        align: ['l', ...head.slice(1).map(() => 'c' as const)],
        zebra: true,
      })
      blocks.push(signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Form Teacher' }]))
      return blocks
    },
  },

  {
    id: 'group-allocation',
    name: 'Group Work Allocation',
    category: 'Classroom',
    summary: 'Who is in which group, with roles and the conflicts to keep apart.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Class', [
        ...classFields(),
        text('task', 'Task'),
        date('when', 'Date', { prefill: pToday }),
      ]),
      section('Groups', [
        table('groups', 'Groups', ['Group', 'Members', 'Role split'], { startRows: 4 }),
        area('roles', 'Roles available', { rows: 2, hint: 'one per line' }),
        area('criteria', 'How the work is judged', { rows: 3 }),
        check('showConflicts', 'List recorded conflicts to keep apart'),
        check('showRoster', 'Print the roster for reference'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const roster = rosterOf(ctx)
      const roles = ctx
        .v('roles')
        .split('\n')
        .map((r) => r.trim())
        .filter(Boolean)
      const conflicts: string[][] = []
      if (ctx.v('showConflicts')) {
        const seen = new Set<string>()
        for (const student of roster) {
          for (const rel of student.relationships) {
            if (rel.kind !== 'conflict') continue
            const other = rel.otherStudentId
              ? ctx.data.students.find((s) => s.id === rel.otherStudentId)?.fullName
              : rel.otherName
            if (!other) continue
            const key = [student.fullName, other].sort().join('|')
            if (seen.has(key)) continue
            seen.add(key)
            conflicts.push([student.fullName, other])
          }
        }
        conflicts.sort((a, b) => nameKey(a[0]).localeCompare(nameKey(b[0])))
      }
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Group Work Allocation',
          subtitle: ctx.v('task') || [ctx.v('subject'), ctx.v('className')].filter(Boolean).join('  |  ') || undefined,
          meta: metaOf(
            { label: 'Class', value: ctx.v('className') },
            { label: 'Date', value: dateText(ctx.v('when')) },
            { label: 'Students', value: roster.length ? String(roster.length) : '' }
          ),
        }),
        roles.length ? heading('Roles', 2) : null,
        roles.length ? { k: 'bullets', items: roles } : null,
        heading('Groups'),
        { k: 'table', head: ['Group', 'Members', 'Role split'], rows: ctx.rows('groups'), widths: [1.4, 5.6, 3], zebra: true },
        ctx.v('criteria') ? field('How the work is judged', ctx.v('criteria'), 3) : null,
        ctx.v('showConflicts') ? heading('Keep apart', 2) : null,
        ctx.v('showConflicts')
          ? conflicts.length
            ? { k: 'table', head: ['Student', 'In conflict with'], rows: conflicts, widths: [1, 1], zebra: true }
            : para('No conflicts recorded in this class.', 'i')
          : null,
        ctx.v('showRoster') && roster.length ? heading('Roster', 2) : null,
        ctx.v('showRoster') && roster.length ? { k: 'bullets', items: roster.map((s) => s.fullName) } : null,
        gap(6),
        signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' }]),
      ])
    },
  },
]

/** Pairs with nothing in them are left out rather than printed as blanks. */
function compactPairs(pairs: { label: string; value: string }[]): { label: string; value: string }[] {
  const kept = pairs.filter((p) => p.value.trim())
  return kept.length ? kept : [{ label: pairs[0]?.label ?? '', value: '' }]
}
