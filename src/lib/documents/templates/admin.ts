/** Trips, risk, injuries, CCAs and testimonials. */
import { entryRows, guardianRows, pointsSummary, rosterOf, subjects } from '../build'
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
  pGuardian,
  pGuardianPhone,
  pKnownAs,
  pSchool,
  pToday,
  pick,
  section,
  signatures,
  studentIdentity,
  table,
  text,
  yesNo,
} from './shared'

const LIKELIHOOD = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost certain']
const SEVERITY = ['Negligible', 'Minor', 'Moderate', 'Major', 'Severe']

export const adminTemplates: DocTemplate[] = [
  {
    id: 'consent-form',
    name: 'Excursion Consent Form',
    category: 'Admin',
    summary: 'Trip details, medical declaration and a signature, on one sheet.',
    audience: 'none',
    font: 'serif',
    sections: [
      section('Trip', [
        text('school', 'School', { prefill: pSchool }),
        text('className', 'Class', { prefill: (ctx) => ctx.classRoom?.name ?? '' }),
        text('trip', 'Trip or activity'),
        text('destination', 'Destination'),
        date('when', 'Date'),
        text('depart', 'Departure time'),
        text('returnTime', 'Return time'),
        text('transport', 'Transport'),
        num('cost', 'Cost per student'),
      ]),
      section('Details', [
        area('purpose', 'Purpose', { rows: 3 }),
        area('itinerary', 'Outline of the day', { rows: 4 }),
        area('bring', 'What to bring', { rows: 3 }),
        area('dress', 'Dress code', { rows: 2 }),
        text('staffLead', 'Teacher in charge', { prefill: (ctx) => ctx.teacher.name }),
        text('staffContact', 'Contact on the day'),
        num('ratio', 'Staff to student ratio'),
      ]),
      section('Consent', [
        date('replyBy', 'Return by'),
        check('medicalSection', 'Include the medical declaration'),
        check('photoConsent', 'Ask about photography'),
        check('ownWay', 'Offer making their own way home'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) =>
      compact([
        masthead({
          school: ctx.v('school'),
          title: ctx.v('trip') || 'Excursion Consent Form',
          subtitle: ctx.v('destination'),
          meta: metaOf(
            { label: 'Class', value: ctx.v('className') },
            { label: 'Date', value: dateText(ctx.v('when')) },
            { label: 'Departs', value: ctx.v('depart') },
            { label: 'Returns', value: ctx.v('returnTime') },
            { label: 'Transport', value: ctx.v('transport') },
            { label: 'Cost', value: ctx.v('cost') }
          ),
        }),
        ctx.v('purpose') ? field('Purpose', ctx.v('purpose'), 3) : null,
        ctx.v('itinerary') ? field('Outline of the day', ctx.v('itinerary'), 4) : null,
        {
          k: 'kv',
          cols: 2,
          rows: [
            { label: 'In charge', value: ctx.v('staffLead') },
            { label: 'Contact', value: ctx.v('staffContact') },
            { label: 'Ratio', value: ctx.v('ratio') ? `1 to ${ctx.v('ratio')}` : '' },
            { label: 'Return by', value: dateText(ctx.v('replyBy')) },
          ],
        },
        ctx.v('bring') ? field('What to bring', ctx.v('bring'), 2) : null,
        ctx.v('dress') ? field('Dress code', ctx.v('dress'), 1) : null,
        { k: 'divider' },
        heading('Consent'),
        para('To be completed by a parent or guardian and returned to the school.'),
        {
          k: 'kv',
          cols: 2,
          rows: [
            { label: 'Student', value: '' },
            { label: 'Class', value: ctx.v('className') },
          ],
        },
        {
          k: 'checklist',
          items: [
            { text: `I give permission for my child to take part in ${ctx.v('trip') || 'this activity'}.` },
            ...(ctx.v('photoConsent') ? [{ text: 'I agree to photographs being taken for school use.' }] : []),
            ...(ctx.v('ownWay') ? [{ text: 'My child may make their own way home at the end of the activity.' }] : []),
          ],
        },
        ctx.v('medicalSection') ? heading('Medical declaration', 2) : null,
        ctx.v('medicalSection')
          ? {
              k: 'kv',
              cols: 1,
              rows: [
                { label: 'Conditions', value: '' },
                { label: 'Medication', value: '' },
                { label: 'Allergies', value: '' },
                { label: 'Emergency contact', value: '' },
              ],
            }
          : null,
        gap(6),
        signatures([
          { name: '', role: 'Parent or guardian signature' },
          { name: '', role: 'Date' },
        ]),
      ]),
  },

  {
    id: 'risk-assessment',
    name: 'Activity Risk Assessment',
    category: 'Admin',
    summary: 'Hazards, who is at risk, controls, and the rating that is left.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Activity', [
        text('school', 'School', { prefill: pSchool }),
        text('activity', 'Activity'),
        text('place', 'Location'),
        date('when', 'Date'),
        num('participants', 'Number of participants'),
        text('assessor', 'Assessed by', { prefill: (ctx) => ctx.teacher.name }),
        date('reviewed', 'Review date'),
      ]),
      section('Hazards', [
        table('hazards', 'Hazards', ['Hazard', 'Who is at risk', 'Controls in place', 'Residual rating'], { startRows: 5 }),
        pick('likelihood', 'Overall likelihood', LIKELIHOOD),
        pick('severity', 'Overall severity', SEVERITY),
      ]),
      section('Arrangements', [
        area('firstAid', 'First aid arrangements', { rows: 3 }),
        area('emergency', 'Emergency procedure', { rows: 4 }),
        area('supervision', 'Supervision plan', { rows: 3 }),
        area('weather', 'Weather or abort criteria', { rows: 2 }),
        check('declaration', 'Include the sign-off declaration'),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const l = LIKELIHOOD.indexOf(ctx.v('likelihood')) + 1
      const s = SEVERITY.indexOf(ctx.v('severity')) + 1
      const score = l > 0 && s > 0 ? l * s : null
      const band = score === null ? '' : score >= 15 ? 'High' : score >= 8 ? 'Medium' : 'Low'
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Activity Risk Assessment',
          subtitle: ctx.v('activity'),
          meta: metaOf(
            { label: 'Location', value: ctx.v('place') },
            { label: 'Date', value: dateText(ctx.v('when')) },
            { label: 'Participants', value: ctx.v('participants') },
            { label: 'Assessed by', value: ctx.v('assessor') },
            { label: 'Review', value: dateText(ctx.v('reviewed')) }
          ),
        }),
        score !== null
          ? {
              k: 'stats',
              items: [
                { label: 'Likelihood', value: String(l) },
                { label: 'Severity', value: String(s) },
                { label: 'Score', value: String(score) },
                { label: 'Band', value: band },
              ],
            }
          : null,
        heading('Hazards and controls'),
        {
          k: 'table',
          head: ['Hazard', 'Who is at risk', 'Controls in place', 'Residual'],
          rows: ctx.rows('hazards'),
          widths: [2.8, 2.2, 4.4, 1.4],
          zebra: true,
        },
        heading('Arrangements'),
        field('First aid arrangements', ctx.v('firstAid'), 3),
        field('Emergency procedure', ctx.v('emergency'), 4),
        field('Supervision plan', ctx.v('supervision'), 3),
        ctx.v('weather') ? field('Weather or abort criteria', ctx.v('weather'), 2) : null,
        ctx.v('declaration')
          ? note(
              'I confirm that the hazards above have been identified with the activity as planned, that the controls are in place, and that the staff involved have been briefed on them.',
              'strong'
            )
          : null,
        gap(8),
        signatures([
          { name: ctx.v('assessor'), role: 'Assessor' },
          { name: '', role: 'Approved by' },
        ]),
      ])
    },
  },

  {
    id: 'accident-report',
    name: 'Accident and Injury Report',
    category: 'Admin',
    summary: 'What happened, what was done, who was told and when.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Injured person', [
        ...studentIdentity(),
        text('age', 'Age'),
      ]),
      section('The accident', [
        date('when', 'Date', { prefill: pToday }),
        text('time', 'Time'),
        text('place', 'Exact location'),
        text('activity', 'Activity at the time'),
        text('supervisor', 'Supervising adult', { prefill: (ctx) => ctx.teacher.name }),
        area('account', 'What happened', { rows: 5 }),
        text('witnesses', 'Witnesses'),
      ]),
      section('Injury and treatment', [
        area('injury', 'Injury', { rows: 3 }),
        pick('severity', 'Severity', ['First aid only', 'Sent home', 'Referred to clinic', 'Hospital', 'Ambulance called']),
        text('firstAider', 'First aid given by'),
        area('treatment', 'Treatment given', { rows: 3 }),
        text('treatedAt', 'Time treated'),
      ]),
      section('Notification and follow-up', [
        check('parentTold', 'Parent or guardian informed'),
        text('toldWhen', 'When and how'),
        text('guardian', 'Spoke with', { prefill: pGuardian }),
        text('phone', 'Number called', { prefill: pGuardianPhone }),
        check('reportedOn', 'Reported to the school office'),
        area('prevent', 'Action to prevent a recurrence', { rows: 3 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) =>
      compact([
        masthead({
          school: ctx.v('school'),
          title: 'Accident and Injury Report',
          subtitle: ctx.v('severity'),
          meta: metaOf(
            { label: 'Injured', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Age', value: ctx.v('age') },
            { label: 'Date', value: dateText(ctx.v('when')) },
            { label: 'Time', value: ctx.v('time') },
            { label: 'Location', value: ctx.v('place') }
          ),
        }),
        note('Completed on the day. A copy goes to the school office; the original is kept on file.'),
        heading('What happened'),
        {
          k: 'kv',
          cols: 2,
          rows: [
            { label: 'Activity', value: ctx.v('activity') },
            { label: 'Supervising', value: ctx.v('supervisor') },
            { label: 'Witnesses', value: ctx.v('witnesses') },
            { label: 'Treated at', value: ctx.v('treatedAt') },
          ],
        },
        field('Account', ctx.v('account'), 5),
        heading('Injury and treatment'),
        field('Injury', ctx.v('injury'), 3),
        field('Treatment given', ctx.v('treatment'), 3),
        {
          k: 'kv',
          cols: 2,
          rows: [
            { label: 'First aid by', value: ctx.v('firstAider') },
            { label: 'Severity', value: ctx.v('severity') },
            { label: 'Home told', value: yesNo(ctx.v('parentTold')) },
            { label: 'When and how', value: ctx.v('toldWhen') },
            { label: 'Spoke with', value: ctx.v('guardian') },
            { label: 'Number', value: ctx.v('phone') },
          ],
        },
        field('Action to prevent a recurrence', ctx.v('prevent'), 3),
        ctx.v('reportedOn') ? para('Reported to the school office.', 'b') : null,
        gap(8),
        signatures([
          { name: ctx.v('teacher'), role: ctx.v('role') || 'Reported by' },
          { name: '', role: 'Received by office' },
        ]),
      ]),
  },

  {
    id: 'cca-record',
    name: 'CCA Participation Record',
    category: 'Admin',
    summary: 'Attendance, roles and achievements across a co-curricular year.',
    audience: 'one',
    font: 'sans',
    sections: [
      section('Student', [
        ...studentIdentity(),
        text('cca', 'CCA', { prefill: (ctx) => (ctx.student?.ccas ?? [])[0] ?? '' }),
        text('year', 'Year'),
      ]),
      section('Participation', [
        num('sessions', 'Sessions held'),
        num('attended', 'Sessions attended'),
        text('role', 'Role held', { placeholder: 'Member, Secretary, Captain' }),
        table('events', 'Events and competitions', ['Date', 'Event', 'Role', 'Result'], { startRows: 4 }),
        table('achievements', 'Achievements', ['Achievement', 'Awarded by', 'Date'], { startRows: 2 }),
      ]),
      section('Assessment', [
        pick('commitment', 'Commitment', ['Exemplary', 'Strong', 'Satisfactory', 'Inconsistent']),
        pick('leadership', 'Leadership', ['Exemplary', 'Strong', 'Developing', 'Not yet shown']),
        area('comment', 'Teacher-in-charge comment', { rows: 4 }),
        text('teacher', 'Teacher in charge', { prefill: (ctx) => ctx.teacher.name }),
        date('docDate', 'Date', { prefill: pToday }),
      ]),
    ],
    build: (ctx) => {
      const held = Number(ctx.v('sessions'))
      const went = Number(ctx.v('attended'))
      const rate = held > 0 && Number.isFinite(went) ? `${Math.round((went / held) * 100)}%` : ''
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'CCA Participation Record',
          subtitle: [ctx.v('cca'), ctx.v('year')].filter(Boolean).join('  |  ') || undefined,
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Role', value: ctx.v('role') },
            { label: 'Date', value: dateText(ctx.v('docDate')) }
          ),
        }),
        {
          k: 'stats',
          items: [
            { label: 'Sessions held', value: ctx.v('sessions') || '-' },
            { label: 'Attended', value: ctx.v('attended') || '-' },
            { label: 'Attendance', value: rate || '-' },
          ],
        },
        ctx.rows('events').length ? heading('Events and competitions') : null,
        ctx.rows('events').length
          ? { k: 'table', head: ['Date', 'Event', 'Role', 'Result'], rows: ctx.rows('events'), widths: [1.8, 4, 2, 2.4], zebra: true }
          : null,
        ctx.rows('achievements').length ? heading('Achievements', 2) : null,
        ctx.rows('achievements').length
          ? { k: 'table', head: ['Achievement', 'Awarded by', 'Date'], rows: ctx.rows('achievements'), widths: [5, 3, 2], zebra: true }
          : null,
        heading('Assessment'),
        {
          k: 'kv',
          cols: 2,
          rows: [
            { label: 'Commitment', value: ctx.v('commitment') },
            { label: 'Leadership', value: ctx.v('leadership') },
          ],
        },
        field('Teacher-in-charge comment', ctx.v('comment'), 4),
        gap(8),
        signatures([
          { name: ctx.v('teacher'), role: 'Teacher in charge' },
          { name: '', role: 'Head of CCA' },
        ]),
      ])
    },
  },

  {
    id: 'testimonial',
    name: 'Student Testimonial',
    category: 'Admin',
    summary: 'A reference drawn from what the terminal already knows about them.',
    audience: 'one',
    font: 'serif',
    sections: [
      section('Student', [
        ...studentIdentity(),
        text('knownAs', 'Known as', { prefill: pKnownAs }),
        text('years', 'Years known'),
        text('purpose', 'Written for', { placeholder: 'Scholarship application' }),
        date('docDate', 'Date', { prefill: pToday }),
      ]),
      section('Content', [
        area('academic', 'Academic standing', { rows: 4 }),
        area('character', 'Character and conduct', {
          rows: 4,
          prefill: (ctx) =>
            (ctx.student?.characteristics ?? []).length
              ? `${ctx.student!.fullName.split(' ')[0]} is ${(ctx.student!.characteristics ?? []).join(', ')}.`
              : '',
        }),
        area('contribution', 'Contribution to school life', {
          rows: 4,
          prefill: (ctx) => {
            const ccas = ctx.student?.ccas ?? []
            return ccas.length ? `Involved in ${ccas.join(', ')}.` : ''
          },
        }),
        area('closing', 'Closing recommendation', { rows: 3 }),
        check('showPoints', 'Mention the conduct record'),
        check('showNotes', 'Draw on logged teacher notes'),
      ]),
      section('Signed', [
        text('teacher', 'Written by', { prefill: (ctx) => ctx.teacher.name }),
        text('role', 'Role'),
        text('contact', 'Contact for verification'),
      ]),
    ],
    build: (ctx) => {
      const points = pointsSummary(ctx, ctx.student)
      const notes = ctx.v('showNotes') && ctx.student ? entryRows(ctx.student.notes, 5) : []
      const first = (ctx.v('knownAs') || ctx.v('student')).split(' ')[0]
      return compact([
        masthead({
          school: ctx.v('school'),
          title: 'Testimonial',
          subtitle: ctx.v('purpose'),
          meta: metaOf(
            { label: 'Student', value: ctx.v('student') },
            { label: 'Class', value: ctx.v('className') },
            { label: 'Known for', value: ctx.v('years') },
            { label: 'Date', value: dateText(ctx.v('docDate')) }
          ),
        }),
        para(`To whom it may concern`),
        para(
          `I have taught ${ctx.v('student') || 'this student'}${ctx.v('years') ? ` for ${ctx.v('years')}` : ''} and am glad to write in support of ${
            ctx.v('purpose') ? ctx.v('purpose').toLowerCase() : 'this application'
          }.`
        ),
        ctx.v('academic') ? para(ctx.v('academic')) : { k: 'lines', n: 4 },
        ctx.v('character') ? para(ctx.v('character')) : null,
        ctx.v('contribution') ? para(ctx.v('contribution')) : null,
        ctx.v('showPoints') && points.entries > 0
          ? para(
              `${first}'s conduct record over this period stands at ${points.total > 0 ? `+${points.total}` : points.total} points across ${points.entries} entries.`
            )
          : null,
        notes.length ? heading('From the record', 2) : null,
        notes.length ? { k: 'bullets', items: notes.map((row) => row[1]) } : null,
        ctx.v('closing') ? para(ctx.v('closing')) : null,
        gap(10),
        para('Yours faithfully'),
        gap(16),
        signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Teacher' }]),
        ctx.v('contact') ? para(`Verification: ${ctx.v('contact')}`, 'i') : null,
      ])
    },
  },

  {
    id: 'class-handover',
    name: 'Class Handover Notes',
    category: 'Admin',
    summary: 'What a relief or incoming teacher needs to know, per class.',
    audience: 'none',
    font: 'sans',
    sections: [
      section('Class', [
        text('school', 'School', { prefill: pSchool }),
        text('className', 'Class', { prefill: (ctx) => ctx.classRoom?.name ?? '' }),
        text('subject', 'Subject', { prefill: (ctx) => ctx.classRoom?.subject ?? '' }),
        date('from', 'Covering from', { prefill: pToday }),
        date('to', 'Covering to'),
        text('reason', 'Reason for handover'),
      ]),
      section('What to know', [
        area('wherewe', 'Where the class is up to', { rows: 4 }),
        area('routines', 'Routines that matter', { rows: 4 }),
        table('watch', 'Students to be aware of', ['Student', 'What to know', 'What helps'], { startRows: 3 }),
        check('showRoster', 'Print the roster'),
        check('showContacts', 'Print the key contacts'),
        area('resources', 'Where the resources are', { rows: 3 }),
        area('contacts', 'Who to ask', { rows: 2 }),
        ...authorFields(),
      ]),
    ],
    build: (ctx) => {
      const roster = rosterOf(ctx)
      const people = subjects(ctx)
      const contacts = people.length === 1 ? guardianRows(people[0]) : []
      const blocks: Block[] = [
        masthead({
          school: ctx.v('school'),
          title: 'Class Handover Notes',
          subtitle: [ctx.v('subject'), ctx.v('className')].filter(Boolean).join('  |  ') || undefined,
          meta: metaOf(
            { label: 'From', value: dateText(ctx.v('from')) },
            { label: 'To', value: dateText(ctx.v('to')) },
            { label: 'Reason', value: ctx.v('reason') },
            { label: 'Students', value: roster.length ? String(roster.length) : '' }
          ),
        }),
        heading('Where the class is up to'),
        field('', ctx.v('wherewe'), 4),
        heading('Routines that matter'),
        field('', ctx.v('routines'), 4),
        heading('Students to be aware of'),
        {
          k: 'table',
          head: ['Student', 'What to know', 'What helps'],
          rows: ctx.rows('watch'),
          widths: [2.6, 3.8, 3.6],
          zebra: true,
        },
      ]
      if (ctx.v('showRoster') && roster.length) {
        blocks.push(heading('Roster', 2))
        blocks.push({
          k: 'table',
          head: ['No.', 'Name', 'Known as'],
          rows: roster.map((s, i) => [String(i + 1), s.fullName, s.preferredName?.trim() ?? '']),
          widths: [0.8, 4, 3],
          align: ['c', 'l', 'l'],
          zebra: true,
        })
      }
      if (ctx.v('showContacts') && contacts.length) {
        blocks.push(heading('Key contacts', 2))
        blocks.push({ k: 'table', head: ['Name', 'Relation', 'Phone', 'Email'], rows: contacts, widths: [3, 2, 2.4, 3.4], zebra: true })
      }
      blocks.push(field('Where the resources are', ctx.v('resources'), 3))
      if (ctx.v('contacts')) blocks.push(field('Who to ask', ctx.v('contacts'), 2))
      blocks.push(gap(6))
      blocks.push(signatures([{ name: ctx.v('teacher'), role: ctx.v('role') || 'Handing over' }]))
      return blocks
    },
  },
]
