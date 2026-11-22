import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Frank Williams’ taxonomy of divergent thinking and feeling lists eight creative behaviours, four thinking, four feeling, that teachers can deliberately ask for. It is widely used in gifted education, but every learner benefits from tasks with more than one right answer.',
  sections: [
    {
      id: 'levels',
      title: 'The eight behaviours',
      blocks: [
        { t: 'table', head: ['Behaviour', 'Meaning', 'Prompt'], rows: [
          ['Fluency', 'Generating many ideas', 'List as many uses for a paperclip as you can in two minutes.'],
          ['Flexibility', 'Ideas from different categories', 'Group your uses, now add one from a group you have not used.'],
          ['Originality', 'Unusual, novel ideas', 'Which of your ideas do you think nobody else thought of?'],
          ['Elaboration', 'Adding detail to develop an idea', 'Take one idea and make it work: draw it, label it, explain it.'],
          ['Risk taking', 'Willingness to try and to be wrong', 'Defend an idea you are only half sure of.'],
          ['Complexity', 'Seeing order in messy problems', 'What are all the parts of this problem, and how do they connect?'],
          ['Curiosity', 'Wondering, questioning, exploring', 'What would you need to find out to be sure?'],
          ['Imagination', 'Visualising and building mental images', 'Imagine the town if the river disappeared. Describe it.'],
        ] },
        { t: 'p', text: 'The first four (fluency, flexibility, originality, elaboration) come from Guilford and Torrance’s research on divergent thinking and are the dimensions scored in the Torrance Tests of Creative Thinking. The last four are affective: they describe the dispositions that make creative thinking likely.' },
      ],
    },
  ],
  sources: ['Williams, F. E. (1970). Classroom Ideas for Encouraging Thinking and Feeling. D.O.K. Publishers.', 'Torrance, E. P. (1974). Torrance Tests of Creative Thinking.'],
  related: ['teaching/differentiation/advanced', 'teaching/taxonomies/depth-complexity'],
}

export default guide
