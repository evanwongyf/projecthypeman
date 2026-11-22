import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Ten composite classroom cases, from lower primary to junior college, each judged as optimal or non-optimal differentiation, with what happened, why, and what changed. Names, schools and details are invented; the patterns are common.',
  nutshell: [
    'Optimal cases share **assessment-driven, flexible, high-expectation** differentiation with **sustainable** routines.',
    'Non-optimal cases show **fixed tracks**, **lowered goals**, **myths** or **unsustainable** workloads.',
  ],
  sections: [
    {
      id: 'optimal',
      title: 'Optimal cases',
      blocks: [
        { t: 'example', title: '1. Primary 2 reading: flexible guided-reading groups (optimal)', lines: [
          { label: 'Context', text: '32 pupils; reading levels spanning about three years.' },
          { label: 'Practice', text: 'Running records every three weeks; guided-reading groups regrouped each cycle; all pupils hear and discuss the same rich class novel read aloud; independent stations with anchor activities.' },
          { label: 'Why it works', text: 'Groups follow evidence and change; everyone keeps access to complex text and vocabulary through the shared novel.' },
          { label: 'Outcome', text: 'Several pupils moved up two groups during the year; nobody stayed in the “bottom group” all year.' },
        ] },
        { t: 'example', title: '2. Secondary 1 maths: compacting for advanced learners (optimal)', lines: [
          { label: 'Context', text: 'A pre-test showed six students already knew most of the ratio unit.' },
          { label: 'Practice', text: 'They skipped the practice lessons they had mastered, joined the class for the two concepts they had not, and spent the rest on a ratio-in-design project with rubric and checkpoints.' },
          { label: 'Why it works', text: 'Evidence-based compacting; real extension, not busy work; the teacher still met them at checkpoints.' },
        ] },
        { t: 'example', title: '3. Secondary 3 English: RAFT for persuasive writing (optimal)', lines: [
          { label: 'Context', text: 'Mixed interests and writing confidence.' },
          { label: 'Practice', text: 'Everyone learned persuasive techniques together with a modelled essay; then chose a RAFT (e.g. a hawker writing to the town council; a sea turtle to a plastics company). Same success criteria; sentence frames available to all.' },
          { label: 'Why it works', text: 'Shared high goal; interest-based context; universal scaffolds rather than labelled versions.' },
        ] },
        { t: 'example', title: '4. Junior college chemistry: exit tickets and a teacher table (optimal)', lines: [
          { label: 'Context', text: '25 students; equilibrium misconceptions common.' },
          { label: 'Practice', text: 'A two-question exit ticket each lesson; the next lesson opens with 10 minutes of independent practice while the teacher reteaches the “not yet” group; strong students get a harder data-based problem.' },
          { label: 'Why it works', text: 'Low preparation, high responsiveness; the teacher’s time goes where the evidence says.' },
        ] },
        { t: 'example', title: '5. Primary 5 science: tiered investigation (optimal)', lines: [
          { label: 'Context', text: 'Investigating factors affecting plant growth.' },
          { label: 'Practice', text: 'Tier A designs its own fair test; tier B gets a partly completed plan; tier C gets a planning frame and teacher check-in. All tiers present results using the same criteria.' },
          { label: 'Why it works', text: 'Same scientific goal and product; support varies; groups based on the previous investigation.' },
        ] },
      ],
    },
    {
      id: 'non-optimal',
      title: 'Non-optimal cases',
      blocks: [
        { t: 'example', title: '6. Fixed ability tables (non-optimal)', lines: [
          { label: 'Context', text: 'Primary 4 class seated by ability from January to November; “low table” always gets simplified worksheets.' },
          { label: 'What happened', text: 'Low-table pupils never attempted problem-solving questions; the gap widened by year end; pupils called themselves “the stupid table”.' },
          { label: 'Change', text: 'Mixed-attainment seating; whole-class teaching of rich problems; short flexible groups for reteaching based on exit tickets.' },
        ] },
        { t: 'example', title: '7. Learning-styles stations (non-optimal)', lines: [
          { label: 'Context', text: 'A Secondary 2 history teacher made visual, auditory and kinaesthetic versions of every lesson based on a styles questionnaire.' },
          { label: 'What happened', text: 'Planning took three times as long; “kinaesthetic” students acted out events but wrote weaker source analyses.' },
          { label: 'Change', text: 'Drop style labels; use dual coding (timelines, maps) for everyone; differentiate by readiness on source-analysis skills.' },
        ] },
        { t: 'example', title: '8. Worksheet overload (non-optimal)', lines: [
          { label: 'Context', text: 'A new teacher wrote five versions of every worksheet for a mixed class.' },
          { label: 'What happened', text: 'Burnout by week six; versions were rushed and some had errors; students compared and argued.' },
          { label: 'Change', text: 'Two tiers plus hint cards; a shared department bank; one differentiated lesson per week to start.' },
        ] },
        { t: 'example', title: '9. Fast finishers as helpers (non-optimal)', lines: [
          { label: 'Context', text: 'In Secondary 1 maths, students who finished early were always told to help others.' },
          { label: 'What happened', text: 'Advanced students disengaged; some rushed to finish; helpees often just copied answers.' },
          { label: 'Change', text: 'Anchor activities with real extension (challenge problems, investigations); structured peer tutoring only at set times with training.' },
        ] },
        { t: 'example', title: '10. Differentiating too early (non-optimal, then fixed)', lines: [
          { label: 'Context', text: 'A teacher split a Primary 6 class into three groups at the start of a new topic with a short instruction for each.' },
          { label: 'What happened', text: 'Each group got only a third of the teacher’s explanation; misconceptions spread across all groups.' },
          { label: 'Change', text: 'Explicit whole-class teaching and modelling first (“I do, we do”), check for understanding, then differentiate the practice (“you do”).' },
        ] },
      ],
    },
    {
      id: 'questions',
      title: 'Discussion questions',
      blocks: [
        { t: 'list', ordered: true, items: [
          'In case 1, what stops guided-reading groups from becoming fixed tracks?',
          'How could the teacher in case 6 keep some benefits of small-group teaching without fixed tables?',
          'What evidence would you collect to decide whether a student should compact a unit (case 2)?',
          'Pick one non-optimal case and redesign a single lesson from it.',
        ] },
      ],
    },
  ],
  related: ['teaching/differentiation/optimal-and-non-optimal', 'teaching/differentiation/in-practice', 'teaching/differentiation/managing-a-differentiated-class'],
}

export default guide
