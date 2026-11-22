import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For learners with profound, multiple or complex learning difficulties, progress through a curriculum may be slow or invisible on ordinary scales. Barry Carpenter’s Engagement Profile and Scale, developed in the Complex Learning Difficulties and Disabilities research project, measures something every learner can show: **how deeply they engage**. It is both a taxonomy of engagement and a planning tool.',
  nutshell: [
    'Seven indicators: **awareness, curiosity, investigation, discovery, anticipation, persistence, initiation**.',
    'Each is scored 0–4 during a specific activity; the total shows how engaging that activity is for that learner.',
    'The point is not to label the learner but to adjust the activity until engagement rises, engagement comes before learning.',
  ],
  sections: [
    {
      id: 'indicators',
      title: 'The seven indicators',
      blocks: [
        { t: 'table', head: ['Indicator', 'What it looks like', 'Question for the adult'], rows: [
          ['Awareness', 'Notices the activity or object: stills, turns, changes expression', 'Has the learner noticed it?'],
          ['Curiosity', 'Shows interest: reaches, looks longer, vocalises', 'Does the learner want to know more?'],
          ['Investigation', 'Actively explores: touches, mouths, manipulates, tries things', 'Is the learner finding out about it?'],
          ['Discovery', 'Shows delight, surprise or recognition at a result', 'Has the learner found something out?'],
          ['Anticipation', 'Predicts what will happen: tenses before a game’s surprise, looks to where it comes from', 'Does the learner expect something?'],
          ['Persistence', 'Keeps going despite difficulty or interruption', 'Does the learner stay with it?'],
          ['Initiation', 'Starts the activity or interaction themselves', 'Does the learner start it independently?'],
        ] },
        { t: 'levels', caption: 'Scoring each indicator', items: [
          { name: '0, None', body: 'No sign of the indicator.' },
          { name: '1, Emerging', body: 'Fleeting, inconsistent signs.' },
          { name: '2, Partly established', body: 'Present with support or some of the time.' },
          { name: '3, Fairly established', body: 'Present most of the time.' },
          { name: '4, Established', body: 'Consistently present.' },
        ] },
      ],
    },
    {
      id: 'use',
      title: 'Using the profile',
      blocks: [
        { t: 'steps', items: [
          { title: 'Choose an activity where engagement is low', body: 'Observe for 5–10 minutes and score the seven indicators.' },
          { title: 'Hypothesise', body: 'What might raise engagement, a preferred object, a different position, less noise, more predictability, a favourite adult, a special interest?' },
          { title: 'Change one thing', body: 'Adjust and score again over several sessions.' },
          { title: 'Record what works', body: 'The profile becomes a record of what engages this learner, invaluable when staff change.' },
        ] },
        { t: 'callout', tone: 'note', title: 'Related frameworks', text: 'In England the Rochford Review replaced P-levels with the **seven areas of engagement**, drawn from this work, for pupils not yet engaged in subject-specific learning. Wales’ “Routes for Learning” assessment covers similar early communication and cognition milestones.' },
      ],
    },
  ],
  sources: ['Carpenter, B. et al. (2015). Engaging Learners with Complex Learning Difficulties and Disabilities. Routledge.', 'Standards and Testing Agency (2016). The Rochford Review: final report. UK Department for Education.'],
  related: ['teaching/special-education/needs/intellectual', 'teaching/taxonomies/icap'],
}

export default guide
