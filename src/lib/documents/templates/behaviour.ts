/** Behaviour and pastoral documents. */
import { awardRows, entryRows, pointsSummary } from '../build'
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
  pClass,
  pGuardian,
  pGuardianPhone,
  pSchool,
  pStudent,
  pToday,
  pick,
  section,
  signatures,
  studentIdentity,
  table,
  text,
  yesNo,
} from './shared'

const SEVERITY = ['Minor', 'Moderate', 'Serious', 'Severe']

export const behaviourTemplates: DocTemplate[] = [
  {
    id: 'behaviour-incident',
    name: 'Behavioural Incident Report',
    category: 'Behaviour',
    summary: 'A dated account of what happened, who was involved and what followed.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Student', studentIdentity()),
      section('The incident', [
        date('when', 'Date of incident', { prefill: pToday }),
        text('time', 'Time', { placeholder: '10:35' }),
        text('place', 'Location', { placeholder: 'Science Lab 2' }),
        pick('severity', 'Severity', SEVERITY),
        text('category', 'Category', { placeholder: 'Disruption, defiance, property' }),
        area('account', 'What happened', { rows: 6, hint: 'factual, in order' }),
        area('antecedent', 'What came before it', { rows: 3 }),
        text('witnesses', 'Others present'),
      ]),
      section('Response', [
        area('immediate', 'Action taken at the time', { rows: 3 }),
        area('consequence', 'Consequence applied', { rows: 3 }),
        check('parentInformed', 'Parent or guardian informed'),
        text('informedHow', 'How and when', { placeholder: 'Phone call, same day' }),
        area('followUp', 'Follow-up agreed', { rows: 3 }),
        check('referred', 'Referred onward'),
        text('referredTo', 'Referred to', { placeholder: 'Year Head' }),
      ]),
      section('Record', [
        check('showHistory', 'Include this student’s logged incidents'),
        check('showPoints', 'Include the points record'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const points = pointsSummary(ctx, ctx.student)
      const incidents = ctx.student ? entryRows(ctx.student.incidents, 8) : []
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Behavioural Incident Report',
          subtitle: ctx.v('category'),
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Incident', value: dateText(ctx.v('when')) },
            { label: 'Time', value: ctx.v('time') },
            { label: 'Location', value: ctx.v('place') },
            { label: 'Severity', value: ctx.v('severity') }
          ),
        }),
        heading('Account'),
        field('What happened', ctx.v('account'), 7),
        ctx.v('antecedent') ? field('What came before it', ctx.v('antecedent'), 2) : null,
        ctx.v('witnesses') ? { k: 'kv', cols: 1, rows: [{ label: 'Others present', value: ctx.v('witnesses') }] } : null,
        heading('Response'),
        {
          k: 'kv',
          cols: 2,
          rows: [
            { label: 'Parent told', value: yesNo(ctx.v('parentInformed')) },
            { label: 'How', value: ctx.v('informedHow') },
            { label: 'Referred', value: yesNo(ctx.v('referred')) },
            { label: 'Referred to', value: ctx.v('referredTo') },
          ],
        },
        field('Action taken at the time', ctx.v('immediate'), 2),
        field('Consequence applied', ctx.v('consequence'), 2),
        field('Follow-up agreed', ctx.v('followUp'), 3),
        ctx.v('showPoints') && points.entries > 0 ? heading('Points record', 2) : null,
        ctx.v('showPoints') && points.entries > 0
          ? {
              k: 'stats',
              items: [
                { label: 'Total', value: points.total > 0 ? `+${points.total}` : String(points.total) },
                { label: 'Earned', value: `+${points.positive}` },
                { label: 'Deducted', value: String(points.negative) },
                { label: 'Entries', value: String(points.entries) },
              ],
            }
          : null,
        ctx.v('showPoints') && awardRows(ctx, ctx.student, 8).length
          ? { k: 'table', head: ['Logged', 'Effect', 'Points'], rows: awardRows(ctx, ctx.student, 8), widths: [3, 5, 1.4], align: ['l', 'l', 'r'], zebra: true }
          : null,
        ctx.v('showHistory') && incidents.length ? heading('Previously logged incidents', 2) : null,
        ctx.v('showHistory') && incidents.length
          ? { k: 'table', head: ['Logged', 'Entry'], rows: incidents, widths: [2.4, 7], zebra: true }
          : null,
        gap(10),
        signatures([
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Reporting teacher' },
          { name: '', role: 'Received by' },
        ]),
      ])
    },
  },

  {
    id: 'behaviour-plan',
    name: 'Behaviour Improvement Plan',
    category: 'Behaviour',
    summary: 'Targets, support and review dates, agreed with the student.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Student', studentIdentity()),
      section('Plan', [
        date('start', 'Start date', { prefill: pToday }),
        date('review', 'Review date'),
        area('concern', 'Behaviour of concern', { rows: 4 }),
        area('strengths', 'Strengths to build on', { rows: 3 }),
        table('targets', 'Targets', ['Target', 'What success looks like', 'Who checks'], { startRows: 3 }),
        table('support', 'Support in place', ['Support', 'Provided by', 'How often'], { startRows: 2 }),
        area('rewards', 'Recognition when targets are met', { rows: 2 }),
        area('consequences', 'If the plan is not followed', { rows: 2 }),
      ]),
      section('Agreement', [
        text('studentView', 'Student’s own words'),
        text('guardian', 'Parent or guardian', { prefill: pGuardian }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) =>
      compact([
        masthead({
          school: ctx.v('school'),
          title: 'Behaviour Improvement Plan',
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Starts', value: dateText(ctx.v('start')) },
            { label: 'Review', value: dateText(ctx.v('review')) }
          ),
        }),
        note('This plan is written with the student, not about them. It is reviewed on the date above and replaced once the targets hold.'),
        heading('Where we are'),
        field('Behaviour of concern', ctx.v('concern'), 4),
        field('Strengths to build on', ctx.v('strengths'), 3),
        heading('Targets'),
        {
          k: 'table',
          head: ['Target', 'What success looks like', 'Who checks'],
          rows: ctx.rows('targets'),
          widths: [3, 4, 2],
          zebra: true,
        },
        heading('Support'),
        { k: 'table', head: ['Support', 'Provided by', 'How often'], rows: ctx.rows('support'), widths: [4, 3, 2], zebra: true },
        heading('What follows'),
        field('Recognition when targets are met', ctx.v('rewards'), 2),
        field('If the plan is not followed', ctx.v('consequences'), 2),
        ctx.v('studentView') ? field('Student’s own words', ctx.v('studentView'), 2) : null,
        gap(8),
        signatures([
          { name: ctx.v('student'), role: 'Student' },
          { name: ctx.v('guardian'), role: 'Parent or guardian' },
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' },
          { name: '', role: 'Year Head' },
        ]),
      ]),
  },

  {
    id: 'detention-notice',
    name: 'Detention Notice',
    category: 'Behaviour',
    summary: 'A slip home: what it was for, when it is served, what to bring.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Student', studentIdentity()),
      section('Detention', [
        pick('kind', 'Type', ['Lunchtime', 'After school', 'Saturday', 'Departmental']),
        date('serveOn', 'To be served on'),
        text('serveTime', 'Time', { placeholder: '15:00 to 16:00' }),
        text('servePlace', 'Room'),
        num('minutes', 'Length in minutes'),
        area('reason', 'Reason', { rows: 3 }),
        area('bring', 'What to bring', { rows: 2 }),
        area('missed', 'If the detention is missed', { rows: 2 }),
      ]),
      section('Home', [
        text('guardian', 'Parent or guardian', { prefill: pGuardian }),
        text('phone', 'Contact number', { prefill: pGuardianPhone }),
        check('replySlip', 'Include a tear-off reply slip'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) =>
      compact([
        masthead({
          school: ctx.v('school'),
          title: 'Detention Notice',
          subtitle: ctx.v('kind') ? `${ctx.v('kind')} detention` : undefined,
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Issued', value: dateText(ctx.v('docDate')) }
          ),
        }),
        {
          k: 'kv',
          cols: 2,
          rows: [
            { label: 'Date', value: dateText(ctx.v('serveOn')) },
            { label: 'Time', value: ctx.v('serveTime') },
            { label: 'Room', value: ctx.v('servePlace') },
            { label: 'Length', value: ctx.v('minutes') ? `${ctx.v('minutes')} minutes` : '' },
          ],
        },
        heading('Reason'),
        field('', ctx.v('reason'), 3),
        ctx.v('bring') ? field('What to bring', ctx.v('bring'), 2) : null,
        ctx.v('missed') ? note(`If the detention is missed: ${ctx.v('missed')}`, 'strong') : null,
        gap(6),
        signatures([
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Issuing teacher' },
          { name: '', role: 'Parent or guardian signature' },
        ]),
        ctx.v('replySlip') ? { k: 'divider' } : null,
        ctx.v('replySlip') ? heading('Reply slip', 2) : null,
        ctx.v('replySlip')
          ? para(
              `I acknowledge the detention for ${ctx.v('student') || 'my child'} on ${dateText(ctx.v('serveOn')) || 'the date above'}. Please detach and return this slip.`
            )
          : null,
        ctx.v('replySlip') ? { k: 'lines', n: 2, label: 'Comments' } : null,
        ctx.v('replySlip')
          ? signatures([
              { name: ctx.v('guardian'), role: 'Parent or guardian' },
              { name: '', role: 'Date' },
            ])
          : null,
      ]),
  },

  {
    id: 'restorative-conference',
    name: 'Restorative Conversation Record',
    category: 'Behaviour',
    summary: 'The five questions, what was agreed, and who checks it held.',
    audience: 'many',
    font: 'sans',
    sections: [
      section('Those present', [
        text('student', 'Student', { prefill: pStudent }),
        text('className', 'Class', { prefill: pClass }),
        text('school', 'School', { prefill: pSchool }),
        text('others', 'Others in the conversation', { placeholder: 'Names, and why they are here' }),
        date('when', 'Date', { prefill: pToday }),
        text('place', 'Where'),
      ]),
      section('The conversation', [
        area('whatHappened', 'What happened', { rows: 4 }),
        area('thinking', 'What were you thinking at the time', { rows: 3 }),
        area('since', 'What have you thought about since', { rows: 3 }),
        area('affected', 'Who has been affected, and how', { rows: 4 }),
        area('repair', 'What needs to happen to put it right', { rows: 4 }),
      ]),
      section('Agreement', [
        table('actions', 'Agreed actions', ['Action', 'By whom', 'By when'], { startRows: 3 }),
        date('checkOn', 'Check back on'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) =>
      compact([
        masthead({
          school: ctx.v('school'),
          title: 'Restorative Conversation Record',
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Date', value: dateText(ctx.v('when')) },
            { label: 'Where', value: ctx.v('place') },
            { label: 'Also present', value: ctx.v('others') }
          ),
        }),
        heading('The five questions'),
        field('What happened', ctx.v('whatHappened'), 4),
        field('What were you thinking at the time', ctx.v('thinking'), 3),
        field('What have you thought about since', ctx.v('since'), 3),
        field('Who has been affected, and how', ctx.v('affected'), 4),
        field('What needs to happen to put it right', ctx.v('repair'), 4),
        heading('Agreed actions'),
        { k: 'table', head: ['Action', 'By whom', 'By when'], rows: ctx.rows('actions'), widths: [5, 2.5, 2], zebra: true },
        ctx.v('checkOn') ? note(`To be checked on ${dateText(ctx.v('checkOn'))}.`) : null,
        gap(8),
        signatures([
          { name: ctx.v('student'), role: 'Student' },
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Facilitator' },
        ]),
      ]),
  },

  {
    id: 'suspension-recommendation',
    name: 'Suspension Recommendation',
    category: 'Behaviour',
    summary: 'The case put to leadership: history, grounds, and what is proposed.',
    audience: 'one',
    font: 'serif',
    sections: [
      section('Student', studentIdentity()),
      section('Grounds', [
        date('when', 'Date of the incident', { prefill: pToday }),
        area('summary', 'Summary of the incident', { rows: 5 }),
        area('policy', 'Policy or rule engaged', { rows: 2 }),
        table('history', 'Previous steps taken', ['Date', 'Step taken', 'Outcome'], { startRows: 3 }),
        check('includeLogged', 'Include logged incidents from the record'),
      ]),
      section('Recommendation', [
        pick('proposed', 'Proposed action', [
          'Internal suspension',
          'Suspension, one day',
          'Suspension, two days',
          'Suspension, three days or more',
          'Referral to discipline committee',
        ]),
        num('days', 'Number of days'),
        area('rationale', 'Why this is proportionate', { rows: 4 }),
        area('reentry', 'Conditions for return', { rows: 3 }),
        area('support', 'Support to be put in place', { rows: 3 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const logged = ctx.student ? entryRows(ctx.student.incidents, 10) : []
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Suspension Recommendation',
          subtitle: 'For the attention of school leadership',
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Incident', value: dateText(ctx.v('when')) },
            { label: 'Proposed', value: ctx.v('proposed') }
          ),
        }),
        heading('The incident'),
        field('Summary', ctx.v('summary'), 5),
        field('Policy or rule engaged', ctx.v('policy'), 2),
        heading('What has already been tried'),
        { k: 'table', head: ['Date', 'Step taken', 'Outcome'], rows: ctx.rows('history'), widths: [2, 4, 4], zebra: true },
        ctx.v('includeLogged') && logged.length ? heading('Logged incidents', 2) : null,
        ctx.v('includeLogged') && logged.length
          ? { k: 'table', head: ['Logged', 'Entry'], rows: logged, widths: [2.4, 7], zebra: true }
          : null,
        heading('Recommendation'),
        {
          k: 'kv',
          cols: 2,
          rows: [
            { label: 'Action', value: ctx.v('proposed') },
            { label: 'Days', value: ctx.v('days') },
          ],
        },
        field('Why this is proportionate', ctx.v('rationale'), 4),
        field('Conditions for return', ctx.v('reentry'), 3),
        field('Support to be put in place', ctx.v('support'), 3),
        gap(10),
        signatures([
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Recommended by' },
          { name: '', role: 'Approved by' },
        ]),
      ])
    },
  },

  {
    id: 'counselling-referral',
    name: 'Counselling Referral',
    category: 'Behaviour',
    summary: 'A referral that leads with what has been noticed, not with a label.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Student', [
        ...studentIdentity(),
        text('age', 'Age', {
          prefill: (ctx) => {
            const b = ctx.student?.birthday
            if (!b) return ''
            const [y, m, d] = b.split('-').map(Number)
            if (!y) return ''
            const now = new Date(ctx.now)
            let years = now.getFullYear() - y
            if (now.getMonth() + 1 < m || (now.getMonth() + 1 === m && now.getDate() < d)) years -= 1
            return years > 0 && years < 120 ? String(years) : ''
          },
        }),
      ]),
      section('Referral', [
        pick('urgency', 'Urgency', ['Routine', 'Soon', 'Urgent']),
        area('noticed', 'What has been noticed', { rows: 5, hint: 'behaviour, not diagnosis' }),
        date('since', 'First noticed'),
        area('pattern', 'When and where it shows', { rows: 3 }),
        area('tried', 'What has been tried already', { rows: 3 }),
        area('strengths', 'Strengths and interests', {
          rows: 2,
          prefill: (ctx) => [...(ctx.student?.interests ?? []), ...(ctx.student?.ccas ?? [])].join(', '),
        }),
        check('studentKnows', 'The student knows about this referral'),
        check('guardianKnows', 'The parent or guardian knows about this referral'),
      ]),
      section('Contacts', [
        text('guardian', 'Parent or guardian', { prefill: pGuardian }),
        text('phone', 'Contact number', { prefill: pGuardianPhone }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) =>
      compact([
        masthead({
          school: ctx.v('school'),
          title: 'Counselling Referral',
          subtitle: ctx.v('urgency') ? `${ctx.v('urgency')} referral` : undefined,
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Age', value: ctx.v('age') },
            { label: 'Referred', value: dateText(ctx.v('docDate')) }
          ),
        }),
        note('Written in terms of what has been observed. Any interpretation is for the counsellor to make.'),
        heading('What has been noticed'),
        field('', ctx.v('noticed'), 5),
        {
          k: 'kv',
          cols: 2,
          rows: [
            { label: 'First noticed', value: dateText(ctx.v('since')) },
            { label: 'Student told', value: yesNo(ctx.v('studentKnows')) },
            { label: 'Home told', value: yesNo(ctx.v('guardianKnows')) },
            { label: 'Contact', value: ctx.v('phone') },
          ],
        },
        field('When and where it shows', ctx.v('pattern'), 3),
        field('What has been tried already', ctx.v('tried'), 3),
        field('Strengths and interests', ctx.v('strengths'), 2),
        gap(8),
        signatures([
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Referred by' },
          { name: '', role: 'Received by' },
        ]),
      ]),
  },
]
