import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Good gamified learning is designed, not decorated. This guide gives a step-by-step process, adapted from Werbach and Hunter’s six Ds and from learning design, and works it through for a Secondary 2 science unit.',
  nutshell: [
    '1. Define the **learning goals** and the behaviours that lead to them.',
    '2. Describe the **learners**: what motivates them, what they find hard, what access they have.',
    '3. Design **activity loops** (practice → feedback → progress) and the long-term **journey** (onboarding, mastery, endgame).',
    '4. Choose **mechanics** that serve the loops, then **playtest** and **iterate** with real learners.',
  ],
  sections: [
    {
      id: 'steps',
      title: 'The process',
      blocks: [
        { t: 'steps', items: [
          { title: 'Learning goals', body: 'What should learners know and be able to do? Which behaviours (practice, revision, discussion, helping) lead there?' },
          { title: 'Learners', body: 'Survey interests and player types; note access to devices; identify who struggles and who coasts.' },
          { title: 'Activity loop', body: 'The short cycle repeated each lesson: attempt a challenge → instant feedback → visible progress → next challenge.' },
          { title: 'Player journey', body: 'Onboarding (easy early wins, learn the rules), the middle (growing challenge, choices), mastery (boss challenges, mentoring others).' },
          { title: 'Mechanics', body: 'Pick the fewest elements that serve the loop: often levels, quests and team goals are enough.' },
          { title: 'Fun and fairness check', body: 'Can every learner progress? Is anyone publicly shamed? Can points be earned without learning?' },
          { title: 'Playtest', body: 'Try it with a small group for a week; watch what they actually do (the dynamics).' },
          { title: 'Iterate and evaluate', body: 'Fix the exploits, adjust pacing, and compare learning with a previous unit.' },
        ] },
      ],
    },
    {
      id: 'worked',
      title: 'Worked design: “Cell Explorers”',
      blocks: [
        { t: 'table', head: ['Design decision', 'Choice'], rows: [
          ['Learning goals', 'Describe cell structures and functions; explain diffusion and osmosis; use a microscope'],
          ['Target behaviours', 'Daily retrieval practice; careful lab work; explaining to peers'],
          ['Story frame', 'Learners are a research crew shrinking into a body to diagnose a patient; each lesson is a mission'],
          ['Loop', 'Mission briefing → practice questions with instant feedback (XP for correct answers) → lab or model task → mission log'],
          ['Progression', 'Levels 1–8 mapped to the unit’s learning objectives; level badges name the skill (“Osmosis Specialist”)'],
          ['Choice', 'Side quests: build a cell model, write a cell “travel brochure”, design an osmosis experiment'],
          ['Social', 'Crews of four with a crew progress bar; a crew bonus when every member reaches level 4'],
          ['Competition', 'None between individuals; crews compete only with their own previous week'],
          ['Endgame', 'A “boss” case: diagnose the patient using everything learned (the unit test, reframed)'],
          ['Exploit check', 'XP only for first correct attempt per question; repeated practice earns mastery stars, not XP'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Keep the story thin', text: 'A short story frame adds meaning; elaborate fiction that needs reading time competes with the science. Every story element should point at the content.' },
      ],
    },
  ],
  sources: [
    'Werbach, K., & Hunter, D. (2012). For the Win: How Game Thinking Can Revolutionize Your Business. Wharton Digital Press.',
    'Kapp, K. M. (2012). The Gamification of Learning and Instruction. Pfeiffer.',
    'Nicholson, S. (2015). A RECIPE for meaningful gamification. In Gamification in Education and Business. Springer.',
  ],
  related: ['gamification/design/progression-maths', 'gamification/design/narrative-and-quests', 'gamification/theory/design-frameworks'],
}

export default guide
