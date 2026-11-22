import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A worked example is a problem shown with its full solution, step by step. For beginners, studying worked examples teaches more than solving the same problems unaided. Then, as learners improve, steps are removed one at a time until they solve problems alone.',
  nutshell: [
    'Beginners solving problems waste working memory searching for a method. Worked examples show the method directly.',
    '**Example-problem pairs**: a worked example followed by a similar problem to solve.',
    '**Fading**: remove steps from the end first, so learners complete more and more of each solution.',
    'Ask learners to explain each step; it makes studying examples active.',
    'Stop using full examples once learners are fluent; they then get in the way.',
  ],
  sections: [
    {
      id: 'effect',
      title: 'The worked example effect',
      lead: 'Why seeing solutions beats searching for them.',
      blocks: [
        {
          t: 'p',
          text: 'Sweller and Cooper (1985) found that algebra students who studied worked examples learned faster and made fewer errors than students who solved the same problems. When novices solve problems, most of their working memory goes into searching for a way forward, leaving little for learning the method. A worked example removes the search. See [cognitive load theory](@teaching/theories/cognitive-load).',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Expertise reversal',
          text: 'Once learners know the method, studying complete examples becomes redundant and can hinder them (Kalyuga et al., 2003). Worked examples are for the start of learning, not the whole of it.',
        },
      ],
    },
    {
      id: 'good',
      title: 'What makes a good worked example',
      blocks: [
        {
          t: 'list',
          items: [
            'Each step is shown and on its own line.',
            'Each step is **labelled** with its purpose, which helps learners see the structure ("subgoal labels", Catrambone, 1998): *"Step 1: isolate the x term."*',
            'Text and diagram are integrated, not separate.',
            'Irrelevant detail is left out.',
            'Several examples vary the surface details, so learners see what stays the same.',
          ],
        },
        {
          t: 'example',
          title: 'A labelled worked example: solve 3x + 7 = 22',
          lines: [
            { label: 'Goal', text: 'Get x on its own.' },
            { label: 'Step 1', text: 'Remove the + 7 by subtracting 7 from both sides: 3x = 15.' },
            { label: 'Step 2', text: 'Remove the × 3 by dividing both sides by 3: x = 5.' },
            { label: 'Check', text: 'Substitute back: 3 × 5 + 7 = 22. ✓' },
          ],
        },
      ],
    },
    {
      id: 'fading',
      title: 'Fading the example',
      lead: 'From studying to solving.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Full worked example', body: 'All steps shown. Learner studies and explains each step.' },
            { name: 'Last step missing', body: 'Learner completes the final step.' },
            { name: 'Last two steps missing', body: 'Learner completes more of the solution.' },
            { name: 'Only the first step given', body: 'Learner does nearly everything.' },
            { name: 'Problem only', body: 'Learner solves independently.' },
          ],
          caption: 'Backward fading, as studied by Renkl and colleagues (2002): remove steps from the end first.',
        },
        {
          t: 'p',
          text: 'A simpler alternative is **example-problem pairs**: show a worked example, then immediately give a near-identical problem for learners to solve. Alternating examples and problems works better than a block of examples followed by a block of problems.',
        },
      ],
    },
    {
      id: 'active',
      title: 'Making examples active',
      lead: 'Learners must study, not just look.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Self-explanation prompts', body: '"Why was 7 subtracted first, not 3 divided?" Learners who explain steps learn more (see [elaboration](@teaching/techniques/learning-strategies/elaboration)).' },
            { title: 'Spot the mistake', body: 'Show an example with one wrong step. Learners find and fix it.' },
            { title: 'Compare two examples', body: 'Show two solutions to similar problems. What is the same? What changed and why?' },
            { title: 'Cover and reproduce', body: 'Study the example, cover it, and reproduce the method on a new problem.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Sweller, J., & Cooper, G. A. (1985). The use of worked examples as a substitute for problem solving in learning algebra. *Cognition and Instruction, 2*(1), 59–89.',
    'Renkl, A., Atkinson, R. K., Maier, U. H., & Staley, R. (2002). From example study to problem solving: Smooth transitions help learning. *Journal of Experimental Education, 70*(4), 293–315.',
    'Atkinson, R. K., Derry, S. J., Renkl, A., & Wortham, D. (2000). Learning from examples: Instructional principles from the worked examples research. *Review of Educational Research, 70*(2), 181–214.',
    'Catrambone, R. (1998). The subgoal learning model. *Journal of Experimental Psychology: General, 127*(4), 355–376.',
  ],
  related: ['teaching/theories/cognitive-load', 'teaching/techniques/instruction/i-do-we-do-you-do', 'teaching/techniques/instruction/modelling'],
}

export default guide
