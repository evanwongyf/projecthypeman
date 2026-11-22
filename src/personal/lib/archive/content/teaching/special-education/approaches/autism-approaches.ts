import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'There is no single “autism method”. The US National Clearinghouse on Autism Evidence and Practice (NCAEP) reviewed thousands of studies and identified 28 evidence-based practices, and the best programmes combine several of them, chosen for the individual learner. This guide explains the main approaches, what the evidence says, the debates around some of them, and how to put them together in a neurodiversity-affirming way.',
  nutshell: [
    'Start from **understanding**: autism is a different way of processing social information and the senses, not a broken version of typical development (the double empathy problem: communication breaks down in both directions).',
    'The strongest evidence is for **visual supports, prompting, reinforcement, modelling and video modelling, task analysis, antecedent-based intervention, naturalistic developmental behavioural interventions, social narratives, peer-based instruction, and AAC**.',
    'Structured teaching (**TEACCH**), **SCERTS** and **JASPER** are well-known frameworks that bundle these practices.',
    '**ABA** is effective for teaching skills but controversial: many autistic adults object to compliance-focused versions. Modern practice favours naturalistic, consent-based, interest-led teaching.',
  ],
  sections: [
    {
      id: 'ebps',
      title: 'Evidence-based practices (NCAEP 2020)',
      blocks: [
        { t: 'table', head: ['Practice', 'What it is', 'Classroom example'], rows: [
          ['Antecedent-based intervention', 'Changing what happens before behaviour to prevent difficulty', 'Warning before transitions; seating away from the door'],
          ['Visual supports', 'Pictures, schedules, written cues', 'Visual timetable, first–then board, task strip'],
          ['Prompting', 'Verbal, gestural, model or physical help, then fading', 'Pointing to the next step, then just looking at it'],
          ['Reinforcement', 'Consequences that make a behaviour more likely', 'Token board towards time with a special interest'],
          ['Modelling and video modelling', 'Showing the skill; recording it to watch', 'A video of the learner successfully ordering lunch'],
          ['Social narratives', 'Short stories describing a situation and what to expect', 'A Social Story™ about the fire drill'],
          ['Task analysis', 'Breaking a skill into teachable steps', 'Handwashing broken into 8 pictured steps'],
          ['Naturalistic intervention', 'Teaching within everyday activities and interests', 'Requesting the next train piece during play'],
          ['Peer-based instruction', 'Training peers to support interaction', 'A trained lunchtime buddy group'],
          ['Augmentative and alternative communication', 'Symbols, devices, signing', 'A speech-generating app; PECS'],
          ['Self-management', 'Learner monitors and records own behaviour', 'A checklist the learner ticks after each step'],
          ['Exercise and movement', 'Planned physical activity', 'A run around the playground before maths'],
          ['Functional communication training', 'Teaching a communicative replacement for challenging behaviour', 'A “break” card instead of throwing work'],
          ['Cognitive behavioural strategies', 'Adapted CBT for anxiety and emotional regulation', 'An anxiety thermometer and coping plan'],
          ['Social skills training (with care)', 'Explicit teaching of social understanding', 'Small-group sessions on starting a conversation'],
        ] },
      ],
    },
    {
      id: 'frameworks',
      title: 'Major frameworks',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Structured teaching', title: 'TEACCH', body: 'From North Carolina (Schopler, 1970s). Organises the environment and tasks visually so learners know what to do, how much, when it is finished and what comes next. Work systems run left to right (to do → finished). Strong for independence and reducing anxiety.' },
          { tag: 'Developmental', title: 'SCERTS', body: 'Social Communication, Emotional Regulation, Transactional Support (Prizant et al.). A framework rather than a programme: sets goals in communication and regulation, and changes how adults and environments support the learner.' },
          { tag: 'Naturalistic', title: 'JASPER and NDBIs', body: 'Joint Attention, Symbolic Play, Engagement and Regulation (Kasari). Naturalistic developmental behavioural interventions teach within play and routines, following the child’s lead. Randomised trials show gains in joint attention and language.' },
          { tag: 'Communication', title: 'PECS and AAC', body: 'The Picture Exchange Communication System teaches requesting by exchanging a picture; AAC devices and apps give a voice. AAC does not stop speech developing, evidence suggests it can support it.' },
          { tag: 'Social understanding', title: 'Social Stories™ and comic strip conversations', body: 'Carol Gray’s formats describe situations from the learner’s perspective with descriptive sentences far outnumbering directive ones. Comic strip conversations draw what people said and thought.' },
          { tag: 'Interest-led', title: 'LEGO®-based therapy', body: 'Groups build models with roles (engineer, supplier, builder), practising communication and joint attention around a shared interest. Small trials show social gains.' },
        ] },
      ],
    },
    {
      id: 'aba',
      title: 'The ABA debate',
      blocks: [
        { t: 'p', text: 'Applied behaviour analysis applies learning principles (reinforcement, prompting, shaping) and underpins many practices above. Early intensive versions (Lovaas, 1987) aimed to make autistic children “indistinguishable from their peers” and used high-intensity drilling. Many autistic adults describe such programmes as harmful: teaching compliance, suppressing stimming and masking distress. Systematic reviews find positive effects on some skills but often low-quality evidence and little measurement of wellbeing.' },
        { t: 'dodont', do: ['Teach skills the learner and family value (communication, independence, safety)', 'Use naturalistic, play-based, interest-led teaching', 'Respect assent: stop when the learner signals distress', 'Accept harmless stimming and autistic ways of being'], dont: ['Train eye contact or “quiet hands”', 'Treat compliance as the goal', 'Use aversive consequences', 'Measure success by how “normal” a learner appears'] },
      ],
    },
    {
      id: 'affirming',
      title: 'A neurodiversity-affirming classroom',
      blocks: [
        { t: 'checklist', items: [
          'Ask autistic learners (and adults) what helps, they are the experts on their own experience.',
          'Teach about autism to the class, with the learner’s consent, so differences are understood rather than judged.',
          'Allow stimming that is not harmful; offer alternatives only if it hurts or seriously disrupts others.',
          'Make social rules explicit instead of expecting them to be absorbed.',
          'Plan for sensory needs as you would for physical access.',
          'Watch for masking (camouflaging) and its cost: exhaustion, anxiety and burnout, especially in girls.',
          'Set goals that increase independence, wellbeing and self-advocacy, not just “appropriate behaviour”.',
        ] },
      ],
    },
  ],
  sources: [
    'Hume, K. et al. (2021). Evidence-based practices for children, youth, and young adults with autism: third generation review. Journal of Autism and Developmental Disorders 51.',
    'Milton, D. (2012). On the ontological status of autism: the ‘double empathy problem’. Disability & Society 27(6).',
    'Mesibov, G., Shea, V. & Schopler, E. (2004). The TEACCH Approach to Autism Spectrum Disorders. Springer.',
    'Kasari, C. et al. (2006). Joint attention and symbolic play in young children with autism: a randomized controlled intervention study. JCPP 47(6).',
    'Sandbank, M. et al. (2020). Project AIM: autism intervention meta-analysis for studies of young children. Psychological Bulletin 146(1).',
  ],
  related: ['teaching/special-education/needs/autism', 'teaching/special-education/approaches/autism-case-studies'],
}

export default guide
