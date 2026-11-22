import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'There are dozens of debrief models. They share a common shape (what happened, what it means, what next) and differ in emphasis: some foreground emotion, some performance gaps, some the facilitator’s own observations. Knowing several lets you pick one to fit the group and the stakes.',
  nutshell: [
    '**What? So what? Now what?** (Borton, 1970; Rolfe et al., 2001): the simplest and most adaptable.',
    '**Gibbs’ reflective cycle** (1988): adds feelings and evaluation explicitly.',
    '**The 4Fs** (Greenaway): Facts, Feelings, Findings, Futures.',
    '**Plus/delta** and **after-action review** for quick, performance-focused teams.',
    '**PEARLS** and **advocacy-inquiry** from healthcare simulation, for high-stakes skills.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'Models side by side',
      blocks: [
        { t: 'table', head: ['Model', 'Stages', 'Best for', 'Time'], rows: [
          ['What? So what? Now what?', 'Description → meaning → action', 'Any group, any age', '5–30 min'],
          ['Gibbs’ cycle', 'Description, feelings, evaluation, analysis, conclusion, action plan', 'Written reflection, professional learning', '20–60 min'],
          ['4Fs (Greenaway)', 'Facts, feelings, findings, futures', 'Outdoor and youth work', '10–30 min'],
          ['ORID', 'Objective, reflective, interpretive, decisional', 'Workshops, staff reviews', '10–45 min'],
          ['Plus/delta', 'What worked (+), what to change (Δ)', 'Quick end-of-session check', '5 min'],
          ['After-action review', 'Planned, actual, why different, sustain/improve', 'Teams that repeat a task', '15–30 min'],
          ['Lederman (1992)', 'Introduce the experience; identify impact; generalise', 'Simulations and games', '20–40 min'],
          ['PEARLS (Eppich and Cheng, 2015)', 'Reactions, description, analysis, summary', 'Simulation in healthcare and safety training', '20–40 min'],
          ['GAS', 'Gather, analyse, summarise', 'Short structured skills debriefs', '10–20 min'],
        ] },
      ],
    },
    {
      id: 'whatsowhat',
      title: 'What? So what? Now what?',
      blocks: [
        { t: 'example', title: 'A blindfold tent-pitching challenge with Secondary 2 students', lines: [
          { label: 'What?', text: 'What did you have to do? What happened in the first two minutes? Who spoke most?' },
          { label: 'So what?', text: 'Why did the tent finally go up? What did it feel like not to be heard? What does that tell us about how our class makes decisions?' },
          { label: 'Now what?', text: 'In our group project next week, what will we do so everyone is heard? Who will check?' },
        ] },
      ],
    },
    {
      id: 'gibbs',
      title: 'Gibbs’ reflective cycle',
      blocks: [
        { t: 'cycle', items: [
          { name: 'Description', body: 'What happened?' },
          { name: 'Feelings', body: 'What were you thinking and feeling?' },
          { name: 'Evaluation', body: 'What was good and bad about the experience?' },
          { name: 'Analysis', body: 'What sense can you make of it? What theory helps?' },
          { name: 'Conclusion', body: 'What else could you have done?' },
          { name: 'Action plan', body: 'If it arose again, what would you do?' },
        ] },
      ],
    },
    {
      id: 'advocacy',
      title: 'Advocacy-inquiry and debriefing with good judgement',
      lead: 'From Rudolph and colleagues at the Center for Medical Simulation, Boston.',
      blocks: [
        { t: 'p', text: 'Rather than hiding their judgement behind leading questions (“What do you think you could have done differently?”) or being harsh, the facilitator **advocates** what they saw and their view of it, then **inquires** genuinely into the participant’s reasoning. The assumption is that participants are intelligent and trying their best; mistakes come from frames (mental models) that the debrief can uncover.' },
        { t: 'example', title: 'Advocacy-inquiry in a first aid simulation', lines: [
          { label: 'Observe', text: '“I noticed the casualty was left on their back for about two minutes after they started vomiting.”' },
          { label: 'Judge', text: '“That worried me, because of the risk to the airway.”' },
          { label: 'Inquire', text: '“I’m curious what was going through your mind at that point?”' },
          { label: 'Response', text: '“I was waiting for my partner to finish the spinal check before moving them.”' },
          { label: 'Teach to the frame', text: '“That makes sense as a concern. Let’s talk about how to protect the airway while protecting the spine: the log roll.”' },
        ] },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing a model',
      blocks: [
        { t: 'table', head: ['If…', 'Use'], rows: [
          ['You have 5 minutes', 'Plus/delta or one round of What? So what? Now what?'],
          ['The group is young or new to debriefing', 'What? So what? Now what? or the 4Fs, with props'],
          ['Emotions ran high', 'Start with reactions (PEARLS or Gibbs’ feelings stage)'],
          ['A technical skill was performed wrongly', 'Advocacy-inquiry, PEARLS'],
          ['A team repeats the same kind of task', 'After-action review, every time'],
          ['You want written reflection', 'Gibbs'],
        ] },
      ],
    },
  ],
  sources: [
    'Borton, T. (1970). Reach, Touch and Teach. McGraw-Hill.',
    'Rolfe, G., Freshwater, D., & Jasper, M. (2001). Critical Reflection in Nursing and the Helping Professions. Palgrave.',
    'Gibbs, G. (1988). Learning by Doing. Further Education Unit.',
    'Greenaway, R. Active Reviewing Guide (reviewing.co.uk).',
    'Rudolph, J. W. et al. (2006). There’s no such thing as “nonjudgmental” debriefing. Simulation in Healthcare, 1(1), 49–55.',
    'Eppich, W., & Cheng, A. (2015). PEARLS. Simulation in Healthcare, 10(2), 106–115.',
  ],
  related: ['facilitation/debriefing/debrief-techniques', 'facilitation/frameworks/orid', 'facilitation/debriefing/hard-debriefs'],
}

export default guide
