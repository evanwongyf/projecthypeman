import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Most learners with special educational needs are not unwilling, they are disengaged by something specific: a task that is too hard or too vague, an environment that is too loud, a demand that feels threatening, or an activity that means nothing to them. This toolkit gathers the engagement strategies that work across needs, organised by the barrier they remove.',
  nutshell: [
    '**Find the barrier first.** Ask: can they do it? Do they understand what is wanted? Is something in the room overwhelming? Is the demand itself the problem? Do they see a point?',
    '**Start from strengths and interests**: special interests are the most powerful engagement tool for autistic learners, and choice and novelty matter for ADHD.',
    '**Make success likely and visible**: errorless learning, small steps, frequent reinforcement, visible progress.',
    '**Reduce threat**: predictable routines, low-arousal language, a safe exit, and relationships before demands.',
  ],
  sections: [
    {
      id: 'diagnose',
      title: 'Diagnose the barrier',
      blocks: [
        { t: 'diagram', title: 'Why is this learner not engaging?', nodes: [
          { id: 'start', label: 'Learner not engaging', col: 2, row: 1, shape: 'pill', tone: 'ink' },
          { id: 'can', label: 'Can they do the task?', col: 2, row: 2, shape: 'diamond', tone: 'mustard' },
          { id: 'skill', label: 'Skill gap', sub: 'Reteach, smaller steps, model, scaffold', col: 1, row: 3, tone: 'teal' },
          { id: 'know', label: 'Do they know exactly what to do?', col: 3, row: 3, shape: 'diamond', tone: 'mustard' },
          { id: 'clarity', label: 'Clarity gap', sub: 'Visual steps, example of finished work, first–then', col: 2, row: 4, tone: 'teal' },
          { id: 'env', label: 'Is the environment OK?', col: 4, row: 4, shape: 'diamond', tone: 'mustard' },
          { id: 'sensory', label: 'Sensory / arousal', sub: 'Quieter seat, ear defenders, movement, break', col: 3, row: 5, tone: 'teal' },
          { id: 'meaning', label: 'Meaning or demand', sub: 'Link to interests, offer choice, reduce direct demands', col: 5, row: 5, tone: 'teal' },
        ], edges: [
          { from: 'start', to: 'can' }, { from: 'can', to: 'skill', label: 'no' }, { from: 'can', to: 'know', label: 'yes' },
          { from: 'know', to: 'clarity', label: 'no' }, { from: 'know', to: 'env', label: 'yes' },
          { from: 'env', to: 'sensory', label: 'no' }, { from: 'env', to: 'meaning', label: 'yes' },
        ] },
      ],
    },
    {
      id: 'interest',
      title: 'Use interests and strengths',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Autism', title: 'Special interests as a route in', body: 'Teach fractions with train timetables, persuasive writing about why a favourite game is the best, reading with dinosaur non-fiction. Interests increase attention, reduce anxiety and improve social interaction (studies of interest-based learning show gains in engagement and on-task time). Use them as the vehicle, not just a reward.' },
          { tag: 'ADHD', title: 'Novelty, urgency and challenge', body: 'Interest-based attention is a hallmark of ADHD: the same learner who cannot start a worksheet can focus for hours on something novel, urgent or challenging. Add competition against their own record, timers, mystery, choice and real stakes.' },
          { tag: 'Dyslexia', title: 'Show strengths through other channels', body: 'Many dyslexic learners have strong oral reasoning, visual-spatial thinking or creativity. Let them show understanding orally, through diagrams, models or video, so reading and writing difficulty does not hide what they know.' },
          { tag: 'All', title: 'Choice', body: 'Offer bounded choices, which task first, which of two topics, pencil or keyboard. Choice builds autonomy (self-determination theory) and reduces opposition, especially for learners with demand-avoidant profiles.' },
        ] },
      ],
    },
    {
      id: 'success',
      title: 'Make success likely',
      blocks: [
        { t: 'terms', items: [
          { term: 'Errorless learning', def: 'Prompt enough to guarantee a correct response, then fade prompts. Prevents learners rehearsing errors and protects those who shut down after failure.' },
          { term: 'Behavioural momentum', def: 'Ask for two or three easy, likely-to-be-done things before the hard request. Compliance builds momentum.' },
          { term: 'Premack principle (first–then)', def: '“First maths, then Lego.” A less preferred activity followed by a preferred one. Show it visually.' },
          { term: 'Task analysis and chaining', def: 'Break a skill into steps; teach one at a time. Backward chaining (teaching the last step first) gives immediate success.' },
          { term: 'High rates of specific praise', def: 'Name exactly what was done well. Some autistic learners dislike public praise: use a quiet word, a note or a thumbs-up instead.' },
          { term: 'Visible progress', def: 'Tick-off checklists, token boards, fluency charts. Seeing progress is itself motivating.' },
        ] },
      ],
    },
    {
      id: 'regulation',
      title: 'Regulate first, teach second',
      blocks: [
        { t: 'p', text: 'A learner who is anxious, overloaded or dysregulated cannot learn, however good the lesson. Bruce Perry’s sequence, **regulate, relate, reason**, is a useful order: calm the body first, connect with the person second, and only then reason or teach.' },
        { t: 'cards', cols: 3, items: [
          { title: 'Sensory diet', body: 'Planned movement and sensory input across the day: heavy work (carrying books), fidgets, wobble cushions, a walk.' },
          { title: 'Low-arousal approach', body: 'Calm voice, fewer words, no crowding, avoid demands and eye contact in moments of distress (Andrew McDonnell’s Studio III model).' },
          { title: 'Predictability', body: 'Visual timetable, warnings before changes, the same routine to start and end lessons.' },
          { title: 'Zones of Regulation', body: 'A shared colour vocabulary (blue, green, yellow, red) for states, and a personal toolkit for each zone.' },
          { title: 'Safe space', body: 'An agreed place and a non-verbal way to ask to go there.' },
          { title: 'Relationships', body: 'A trusted adult, greeted daily, who knows the learner’s triggers and interests.' },
        ] },
      ],
    },
    {
      id: 'participation',
      title: 'Ways to participate without barriers',
      blocks: [
        { t: 'table', head: ['Barrier', 'Instead of…', 'Try…'], rows: [
          ['Writing', 'Long written answers', 'Dictation, scribe, mind maps, labelled diagrams, voice notes, sentence-strip ordering'],
          ['Reading', 'Independent reading of dense text', 'Text-to-speech, pre-reading key vocabulary, audiobooks, adapted texts at the same conceptual level'],
          ['Speaking', 'Cold-calling', 'Warning before asking, think time, answer on a mini-whiteboard, choose from options, AAC'],
          ['Group work', 'Unstructured groups', 'Clear roles, pairs before groups, a visual of who does what, the option of a parallel task'],
          ['Attention', 'Long instructions', 'One step at a time, written on the board, checklist on the desk'],
          ['Sitting still', 'Staying in seat', 'Standing desk, movement jobs, brain breaks every 15–20 minutes'],
        ] },
      ],
    },
  ],
  sources: [
    'Gunn, K. C. M. & Delafield-Butt, J. T. (2016). Teaching children with autism spectrum disorder with restricted interests: a review of evidence for best practice. Review of Educational Research 86(2).',
    'Perry, B. D. (2006). Applying principles of neurodevelopment to clinical work with maltreated and traumatized children: the neurosequential model. In Webb (ed.), Working with Traumatized Youth in Child Welfare.',
    'McDonnell, A. (2010). Managing Aggressive Behaviour in Care Settings: Understanding and Applying Low Arousal Approaches. Wiley.',
    'Kuypers, L. (2011). The Zones of Regulation. Think Social Publishing.',
  ],
  related: ['teaching/special-education/approaches/teaching-scripts', 'teaching/taxonomies/engagement-profile', 'teaching/special-education/strategies/behaviour-support'],
}

export default guide
