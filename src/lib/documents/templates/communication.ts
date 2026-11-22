/** Letters home, meeting records and contact logs. */
import { awardRows, guardianRows, homeworkSummary, pointsSummary } from '../build'
import type { DocTemplate } from '../types'
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
  pGuardian,
  pGuardianEmail,
  pGuardianPhone,
  pKnownAs,
  pSubject,
  pToday,
  section,
  signatures,
  studentIdentity,
  table,
  text,
} from './shared'

const contactFields = () => [
  text('guardian', 'Parent or guardian', { prefill: pGuardian }),
  text('phone', 'Phone', { prefill: pGuardianPhone }),
  text('email', 'Email', { prefill: pGuardianEmail }),
]

/** The salutation of a letter home, which should never read "Dear ,". */
const dear = (name: string) => `Dear ${name.trim() || 'Parent or Guardian'},`

export const communicationTemplates: DocTemplate[] = [
  {
    id: 'parent-meeting',
    name: 'Parent Meeting Record',
    category: 'Communication',
    summary: 'Who came, what was discussed, what was agreed and by when.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Meeting', [
        ...studentIdentity(),
        date('when', 'Date', { prefill: pToday }),
        text('time', 'Time'),
        text('place', 'Where', { placeholder: 'Meeting Room 2 / video call' }),
        text('attendees', 'Present', { placeholder: 'Names and roles' }),
      ]),
      section('Discussion', [
        text('purpose', 'Purpose of the meeting'),
        area('concerns', 'Raised by the school', { rows: 4 }),
        area('homeView', 'Raised by the family', { rows: 4 }),
        area('agreed', 'What was agreed', { rows: 4 }),
        table('actions', 'Actions', ['Action', 'Who', 'By when'], { startRows: 3 }),
        date('review', 'Review date'),
      ]),
      section('Attach', [
        check('showPoints', 'Include the points record'),
        check('showHomework', 'Include the homework summary'),
        ...contactFields(),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const points = pointsSummary(ctx, ctx.student)
      const hw = homeworkSummary(ctx, ctx.student)
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Parent Meeting Record',
          subtitle: ctx.v('purpose'),
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Date', value: dateText(ctx.v('when')) },
            { label: 'Time', value: ctx.v('time') },
            { label: 'Where', value: ctx.v('place') },
            { label: 'Present', value: ctx.v('attendees') }
          ),
        }),
        ctx.v('showPoints') || ctx.v('showHomework') ? heading('Where things stand', 2) : null,
        ctx.v('showPoints') || ctx.v('showHomework')
          ? {
              k: 'stats',
              items: compactStats([
                ctx.v('showPoints') ? { label: 'Points', value: points.total > 0 ? `+${points.total}` : String(points.total) } : null,
                ctx.v('showHomework') ? { label: 'Homework set', value: String(hw.total) } : null,
                ctx.v('showHomework') ? { label: 'Collected', value: String(hw.collected) } : null,
                ctx.v('showHomework') ? { label: 'Overdue', value: String(hw.overdue) } : null,
              ]),
            }
          : null,
        heading('Discussion'),
        field('Raised by the school', ctx.v('concerns'), 4),
        field('Raised by the family', ctx.v('homeView'), 4),
        field('What was agreed', ctx.v('agreed'), 4),
        heading('Actions'),
        { k: 'table', head: ['Action', 'Who', 'By when'], rows: ctx.rows('actions'), widths: [5, 2.5, 2], zebra: true },
        ctx.v('review') ? note(`To be reviewed on ${dateText(ctx.v('review'))}.`) : null,
        gap(8),
        signatures([
          { name: ctx.v('teacher'), role: ctx.v('role') || 'School' },
          { name: ctx.v('guardian'), role: 'Parent or guardian' },
        ]),
      ])
    },
  },

  {
    id: 'parent-letter',
    name: 'Letter to Parent or Guardian',
    category: 'Communication',
    summary: 'A plain letter home, with a reply slip when one is needed.',
    audience: 'one',
    font: 'serif',
    sections: [
      section('Addressed to', [
        ...studentIdentity(),
        text('guardian', 'Parent or guardian', { prefill: pGuardian }),
        date('docDate', 'Date', { prefill: pToday }),
      ]),
      section('Letter', [
        text('subject', 'Subject line'),
        area('opening', 'Opening', { rows: 3 }),
        area('body', 'Body', { rows: 10 }),
        area('closing', 'Closing', { rows: 3 }),
        text('signOff', 'Sign-off', { placeholder: 'Yours sincerely' }),
      ]),
      section('Reply', [
        check('replySlip', 'Include a reply slip'),
        text('replyBy', 'Return by'),
        area('replyAsk', 'What the slip should ask', { rows: 2 }),
        text('teacher', 'From', { prefill: (ctx) => ctx.teacher.name }),
        text('role', 'Role'),
      ]),
    ],
    build: (ctx) =>
      compact([
        masthead({
          school: ctx.v('school'),
          title: ctx.v('subject') || 'Letter to Parent or Guardian',
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Date', value: dateText(ctx.v('docDate')) }
          ),
        }),
        para(dear(ctx.v('guardian'))),
        ctx.v('opening') ? para(ctx.v('opening')) : null,
        ctx.v('body') ? para(ctx.v('body')) : { k: 'lines', n: 10 },
        ctx.v('closing') ? para(ctx.v('closing')) : null,
        gap(10),
        para(ctx.v('signOff') || 'Yours sincerely'),
        gap(18),
        signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' }]),
        ctx.v('replySlip') ? { k: 'divider' } : null,
        ctx.v('replySlip') ? heading('Reply slip', 2) : null,
        ctx.v('replySlip') && ctx.v('replyBy') ? para(`Please detach and return by ${ctx.v('replyBy')}.`, 'b') : null,
        ctx.v('replySlip') && ctx.v('replyAsk') ? para(ctx.v('replyAsk')) : null,
        ctx.v('replySlip')
          ? {
              k: 'kv',
              cols: 2,
              rows: [
                { label: 'Student', value: ctx.v('student') },
                { label: 'Class', value: ctx.v('className') },
              ],
            }
          : null,
        ctx.v('replySlip') ? { k: 'lines', n: 2, label: 'Comments' } : null,
        ctx.v('replySlip')
          ? signatures([
              { name: '', role: 'Parent or guardian signature' },
              { name: '', role: 'Date' },
            ])
          : null,
      ]),
  },

  {
    id: 'contact-log',
    name: 'Parent Contact Log',
    category: 'Communication',
    summary: 'Every call, email and meeting about one student, in one place.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Student', studentIdentity()),
      section('Contacts', [
        table('log', 'Log', ['Date', 'Method', 'Spoke with', 'About', 'Outcome'], { startRows: 6 }),
        check('showGuardians', 'Include the contact list from the record'),
      ]),
      section('Summary', [
        area('pattern', 'Pattern over the term', { rows: 3 }),
        date('nextContact', 'Next contact due'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const contacts = guardianRows(ctx.student)
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Parent Contact Log',
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Printed', value: dateText(ctx.v('docDate')) }
          ),
        }),
        ctx.v('showGuardians') && contacts.length ? heading('Contacts on record', 2) : null,
        ctx.v('showGuardians') && contacts.length
          ? { k: 'table', head: ['Name', 'Relation', 'Phone', 'Email'], rows: contacts, widths: [3, 2, 2.4, 3.4], zebra: true }
          : null,
        heading('Log'),
        {
          k: 'table',
          head: ['Date', 'Method', 'Spoke with', 'About', 'Outcome'],
          rows: ctx.rows('log'),
          widths: [1.8, 1.6, 2.2, 3.2, 3.2],
          zebra: true,
        },
        ctx.v('pattern') ? field('Pattern over the term', ctx.v('pattern'), 3) : null,
        ctx.v('nextContact') ? note(`Next contact due ${dateText(ctx.v('nextContact'))}.`) : null,
        gap(6),
        signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' }]),
      ])
    },
  },

  {
    id: 'commendation',
    name: 'Letter of Commendation',
    category: 'Communication',
    summary: 'Good news home, said properly and worth keeping.',
    audience: 'one',
    font: 'serif',
    sections: [
      section('Student', [
        ...studentIdentity(),
        text('knownAs', 'Known as', { prefill: pKnownAs }),
        text('guardian', 'Parent or guardian', { prefill: pGuardian }),
        date('docDate', 'Date', { prefill: pToday }),
      ]),
      section('What for', [
        text('reason', 'Awarded for', { placeholder: 'Outstanding effort in Mathematics' }),
        area('detail', 'What they did', { rows: 6 }),
        area('qualities', 'Qualities shown', {
          rows: 2,
          prefill: (ctx) => (ctx.student?.characteristics ?? []).join(', '),
        }),
        check('showPoints', 'Mention the points earned'),
      ]),
      section('Signed', [
        ...authorFields(),
        text('head', 'Countersigned by', { placeholder: 'Principal' }),
      ]),
    ],
    build: (ctx) => {
      const points = pointsSummary(ctx, ctx.student)
      const awards = awardRows(ctx, ctx.student, 6).filter((row) => row[2].startsWith('+'))
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Letter of Commendation',
          subtitle: ctx.v('reason'),
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Date', value: dateText(ctx.v('docDate')) }
          ),
        }),
        para(dear(ctx.v('guardian'))),
        para(
          `It is a pleasure to write to you about ${ctx.v('knownAs') || ctx.v('student') || 'your child'}${
            ctx.v('reason') ? `, who has been commended for ${ctx.v('reason').toLowerCase()}` : ''
          }.`
        ),
        ctx.v('detail') ? para(ctx.v('detail')) : { k: 'lines', n: 6 },
        ctx.v('qualities') ? para(`Qualities shown: ${ctx.v('qualities')}.`) : null,
        ctx.v('showPoints') && points.positive > 0
          ? {
              k: 'stats',
              items: [
                { label: 'Points earned', value: `+${points.positive}` },
                { label: 'Running total', value: points.total > 0 ? `+${points.total}` : String(points.total) },
                { label: 'Entries', value: String(points.entries) },
              ],
            }
          : null,
        ctx.v('showPoints') && awards.length
          ? { k: 'table', head: ['Logged', 'Effect', 'Points'], rows: awards, widths: [3, 5, 1.4], align: ['l', 'l', 'r'], zebra: true }
          : null,
        para('This has been recorded on the school file. Our congratulations to you both.'),
        gap(12),
        para('Yours sincerely'),
        gap(16),
        signatures([
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' },
          { name: ctx.v('head'), role: 'Countersigned' },
        ]),
      ])
    },
  },

  {
    id: 'academic-concern',
    name: 'Academic Concern Letter',
    category: 'Communication',
    summary: 'A letter home about work, with the evidence attached.',
    audience: 'one',
    font: 'serif',
    sections: [
      section('Student', [
        ...studentIdentity(),
        text('subject', 'Subject', { prefill: pSubject }),
        text('guardian', 'Parent or guardian', { prefill: pGuardian }),
        date('docDate', 'Date', { prefill: pToday }),
      ]),
      section('Concern', [
        area('concern', 'The concern', { rows: 5 }),
        area('evidence', 'What it is based on', { rows: 4 }),
        area('strengths', 'What is going well', { rows: 3 }),
        check('showHomework', 'Include the homework record'),
      ]),
      section('What next', [
        area('school', 'What the school will do', { rows: 3 }),
        area('home', 'What would help at home', { rows: 3 }),
        date('review', 'Review date'),
        check('requestMeeting', 'Ask for a meeting'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const hw = homeworkSummary(ctx, ctx.student)
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Academic Concern',
          subtitle: ctx.v('subject'),
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Date', value: dateText(ctx.v('docDate')) }
          ),
        }),
        para(dear(ctx.v('guardian'))),
        para(
          `I am writing about ${ctx.v('student') || 'your child'}'s progress${ctx.v('subject') ? ` in ${ctx.v('subject')}` : ''}. I would rather raise this now, while there is time in the term to put it right.`
        ),
        heading('The concern'),
        field('', ctx.v('concern'), 5),
        field('What it is based on', ctx.v('evidence'), 4),
        ctx.v('showHomework') && hw.total > 0
          ? {
              k: 'stats',
              items: [
                { label: 'Homework set', value: String(hw.total) },
                { label: 'Collected', value: String(hw.collected) },
                { label: 'Outstanding', value: String(hw.outstanding) },
                { label: 'Overdue', value: String(hw.overdue) },
              ],
            }
          : null,
        ctx.v('strengths') ? field('What is going well', ctx.v('strengths'), 3) : null,
        heading('What happens next'),
        field('What the school will do', ctx.v('school'), 3),
        field('What would help at home', ctx.v('home'), 3),
        ctx.v('requestMeeting') ? note('I would welcome a short meeting to talk this through. Please contact the school office to arrange one.', 'strong') : null,
        ctx.v('review') ? para(`I will write again after ${dateText(ctx.v('review'))} with an update.`) : null,
        gap(10),
        para('Yours sincerely'),
        gap(14),
        signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' }]),
      ])
    },
  },

  {
    id: 'attendance-concern',
    name: 'Attendance Concern Letter',
    category: 'Communication',
    summary: 'Attendance figures, what they mean in lessons lost, and the ask.',
    audience: 'one',
    font: 'serif',
    sections: [
      section('Student', [
        ...studentIdentity(),
        text('guardian', 'Parent or guardian', { prefill: pGuardian }),
        date('docDate', 'Date', { prefill: pToday }),
      ]),
      section('The figures', [
        text('period', 'Period covered', { placeholder: 'Term 2' }),
        num('sessions', 'Sessions possible'),
        num('present', 'Sessions attended'),
        num('unexplained', 'Unexplained absences'),
        num('late', 'Times late'),
        area('pattern', 'Pattern noticed', { rows: 3 }),
      ]),
      section('The ask', [
        area('impact', 'Effect on learning', { rows: 3 }),
        area('ask', 'What we are asking', { rows: 3 }),
        area('support', 'Support available', { rows: 3 }),
        check('requestMeeting', 'Ask for a meeting'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const possible = Number(ctx.v('sessions'))
      const present = Number(ctx.v('present'))
      const rate = possible > 0 && Number.isFinite(present) ? Math.round((present / possible) * 1000) / 10 : null
      const missed = possible > 0 && Number.isFinite(present) ? Math.max(0, possible - present) : null
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Attendance',
          subtitle: ctx.v('period'),
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Date', value: dateText(ctx.v('docDate')) }
          ),
        }),
        para(dear(ctx.v('guardian'))),
        {
          k: 'stats',
          items: compactStats([
            rate !== null ? { label: 'Attendance', value: `${rate}%` } : null,
            missed !== null ? { label: 'Sessions missed', value: String(missed) } : null,
            ctx.v('unexplained') ? { label: 'Unexplained', value: ctx.v('unexplained') } : null,
            ctx.v('late') ? { label: 'Late', value: ctx.v('late') } : null,
          ]),
        },
        ctx.v('pattern') ? field('Pattern noticed', ctx.v('pattern'), 3) : null,
        heading('Why it matters'),
        field('', ctx.v('impact'), 3),
        heading('What we are asking'),
        field('', ctx.v('ask'), 3),
        field('Support available', ctx.v('support'), 3),
        ctx.v('requestMeeting') ? note('Please contact the school office so that we can meet and agree a way forward.', 'strong') : null,
        gap(10),
        para('Yours sincerely'),
        gap(14),
        signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Form Teacher' }]),
      ])
    },
  },
]

/** Figure tiles only for the figures that exist, so the row is never half empty. */
function compactStats(items: ({ label: string; value: string } | null)[]): { label: string; value: string }[] {
  const kept = items.filter((i): i is { label: string; value: string } => !!i && !!i.value.trim())
  return kept.length ? kept : [{ label: 'Summary', value: '-' }]
}
