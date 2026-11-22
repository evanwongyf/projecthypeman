import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A graphic organiser is a visual template that shows how ideas relate: compared, sequenced, caused, categorised. Choosing the right one makes the structure of the content visible and gives learners a scaffold for thinking and writing.',
  nutshell: [
    'Match the organiser to the **structure of the thinking**, not to what looks nice.',
    'Give **partly completed** organisers first, then fade to blank ones, then to learner-chosen ones.',
    'The **Frayer model** is excellent for teaching vocabulary.',
    'Organisers are tools for thinking; watch that they do not become colouring-in.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Which organiser for which job',
      blocks: [
        {
          t: 'table',
          head: ['Thinking', 'Organiser', 'Example'],
          rows: [
            ['Compare two things', 'Venn diagram; double bubble; T-chart', 'Mitosis vs meiosis'],
            ['Compare several things', 'Comparison matrix', 'Three religions across five beliefs'],
            ['Sequence', 'Flow chart; timeline', 'Events leading to a revolution'],
            ['Cycle', 'Cycle diagram', 'The carbon cycle'],
            ['Cause and effect', 'Fishbone; cause-effect chain', 'Causes of a war'],
            ['Classify', 'Tree diagram; tree map', 'Types of rock'],
            ['Define a concept', 'Frayer model', 'What is a "democracy"?'],
            ['Argue', 'Claim-evidence-reasoning chart', 'Should zoos exist?'],
            ['Connect many ideas', 'Concept map', 'Key terms in an ecosystem'],
            ['Narrative', 'Story map', 'Setting, characters, problem, events, resolution'],
          ],
        },
      ],
    },
    {
      id: 'frayer',
      title: 'The Frayer model',
      lead: 'Frayer, Frederick and Klausmeier (1969).',
      blocks: [
        {
          t: 'example',
          title: 'Frayer model: "mammal"',
          lines: [
            { label: 'Definition', text: 'A warm-blooded animal with hair or fur that feeds its young on milk.' },
            { label: 'Characteristics', text: 'Warm-blooded; hair or fur; breathes air; most give birth to live young.' },
            { label: 'Examples', text: 'Dog, human, whale, bat.' },
            { label: 'Non-examples', text: 'Shark (fish), penguin (bird), crocodile (reptile).' },
          ],
        },
        {
          t: 'p',
          text: 'The four boxes force learners to go beyond a definition: characteristics show understanding, and non-examples mark the boundary of the concept. See [concrete examples](@teaching/techniques/learning-strategies/concrete-examples).',
        },
      ],
    },
    {
      id: 'using',
      title: 'Using them well',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Model filling one in, thinking aloud.',
            'Use one organiser consistently for a recurring type of thinking.',
            'Use them as planning tools for writing.',
            'Have learners complete them from memory as retrieval practice.',
          ],
          dont: [
            'Let decoration take over from thinking.',
            'Use a Venn diagram for everything.',
            'Keep giving the same completed scaffold forever; fade it (see [scaffolding](@teaching/differentiation/scaffolding)).',
          ],
        },
        {
          t: 'p',
          text: 'Reviews of graphic organisers, including for learners with learning disabilities, have found positive effects on comprehension and vocabulary learning (Dexter & Hughes, 2011), consistent with research on [dual coding](@teaching/techniques/learning-strategies/dual-coding).',
        },
      ],
    },
  ],
  sources: [
    'Frayer, D. A., Frederick, W. C., & Klausmeier, H. J. (1969). *A schema for testing the level of concept mastery*. Wisconsin Research and Development Center for Cognitive Learning.',
    'Dexter, D. D., & Hughes, C. A. (2011). Graphic organizers and students with learning disabilities: A meta-analysis. *Learning Disability Quarterly, 34*(1), 51–72.',
  ],
  related: ['teaching/techniques/learning-strategies/dual-coding', 'note-taking/methods/mapping', 'teaching/differentiation/scaffolding'],
}

export default guide
