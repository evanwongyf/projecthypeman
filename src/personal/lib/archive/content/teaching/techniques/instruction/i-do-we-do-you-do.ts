import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    '"I do, we do, you do" is the everyday name for the **gradual release of responsibility**: the teacher shows how, then does it together with learners, then hands it over. Responsibility for the thinking shifts step by step from teacher to learner.',
  nutshell: [
    '**I do**: the teacher models and thinks aloud. **We do**: teacher and learners work it together. **You do**: learners work independently.',
    'Fisher and Frey add **"you do it together"**: learners work in pairs or groups before working alone.',
    'Move to the next stage when learners are succeeding, not when the clock says so. Move back if they are not.',
    'The most common mistake is skipping or rushing "we do".',
  ],
  sections: [
    {
      id: 'model',
      title: 'The model',
      lead: 'From Pearson and Gallagher to Fisher and Frey.',
      blocks: [
        {
          t: 'p',
          text: 'P. David Pearson and Margaret Gallagher (1983) described the gradual release of responsibility in reading comprehension. Douglas Fisher and Nancy Frey (2008) popularised a four-phase version that works across subjects.',
        },
        {
          t: 'levels',
          items: [
            { name: 'I do: focused instruction', body: 'The teacher demonstrates and explains, thinking aloud to make expert decisions visible. Learners watch with a clear focus.' },
            { name: 'We do: guided instruction', body: 'Teacher and class work through examples together. The teacher prompts and questions; learners supply more and more of the steps.' },
            { name: 'You do it together: collaborative learning', body: 'Learners work in pairs or small groups, explaining their thinking to each other, while the teacher circulates.' },
            { name: 'You do alone: independent learning', body: 'Learners apply the skill on their own, showing what they can do without support.' },
          ],
          caption: 'Responsibility moves up the ladder from teacher (bottom) to learner (top).',
        },
      ],
    },
    {
      id: 'example',
      title: 'An example',
      lead: 'Teaching how to write a topic sentence.',
      blocks: [
        {
          t: 'example',
          title: 'Topic sentences for a paragraph on school uniforms',
          lines: [
            { label: 'I do', text: 'Teacher writes a topic sentence live: "I need a sentence that states my point, not a fact. ‘Uniforms are worn in many schools’ is just a fact. ‘Uniforms reduce pressure to wear expensive clothes’ makes a claim the paragraph can prove. That is my topic sentence."' },
            { label: 'We do', text: '"Here is a paragraph without a topic sentence. What is the paragraph arguing? Give me a claim. Is that a claim or a fact? How could we sharpen it?" The class builds the sentence together on the board.' },
            { label: 'You do together', text: 'Pairs get three paragraphs and write topic sentences for each, then swap with another pair to check they make a claim.' },
            { label: 'You do alone', text: 'Each learner writes a topic sentence for their own paragraph on a new topic, then underlines the claim.' },
          ],
        },
      ],
    },
    {
      id: 'doing-it-well',
      title: 'Doing it well',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Think aloud during "I do", especially about decisions and checks.',
            'Make "we do" long enough: several examples, with learners doing more each time.',
            'Use checks for understanding to decide when to release more responsibility.',
            'Go back a stage for learners who are struggling, while others move on.',
            'Use the model across a unit, not just within a single lesson.',
          ],
          dont: [
            'Model silently and expect learners to see your thinking.',
            'Jump from "I do" straight to "you do".',
            'Let "we do" become the teacher doing it while calling on one or two learners.',
            'Treat the model as rigid; experienced learners may start at "we do" or "you do".',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Making "we do" everyone’s job',
          text: 'Use mini whiteboards so every learner writes the next step before you reveal it, or cold call different learners for each step. See [checking for understanding](@teaching/techniques/questioning/checking-understanding).',
        },
      ],
    },
  ],
  sources: [
    'Pearson, P. D., & Gallagher, M. C. (1983). The instruction of reading comprehension. *Contemporary Educational Psychology, 8*(3), 317–344.',
    'Fisher, D., & Frey, N. (2013). *Better learning through structured teaching: A framework for the gradual release of responsibility* (2nd ed.). ASCD.',
  ],
  related: ['teaching/techniques/instruction/modelling', 'teaching/techniques/instruction/rosenshine', 'teaching/theories/social-constructivism', 'teaching/differentiation/scaffolding'],
}

export default guide
