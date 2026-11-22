import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The outline method organises notes into a hierarchy of headings and indented points. It is quick, tidy and ideal when the lecture or text is itself well organised.',
  nutshell: [
    'Main topics on the left; supporting points indented beneath; details indented further.',
    'Makes the structure of the material visible at a glance.',
    'Works best for clearly structured material; weaker for showing connections between different branches.',
    'Easy on a laptop or tablet using bullet lists.',
  ],
  sections: [
    {
      id: 'how',
      title: 'How it works',
      blocks: [
        {
          t: 'example',
          title: 'Outline notes: The French Revolution (causes)',
          lines: [
            { label: 'I.', text: '**Financial crisis**' },
            { label: '   A.', text: 'Debt from wars (esp. American War of Independence)' },
            { label: '   B.', text: 'Unfair taxes: First and Second Estates largely exempt' },
            { label: 'II.', text: '**Social inequality**' },
            { label: '   A.', text: 'Three estates: clergy, nobility, everyone else (~97%)' },
            { label: '   B.', text: 'Growing middle class (bourgeoisie) wanted power' },
            { label: 'III.', text: '**Enlightenment ideas**' },
            { label: '   A.', text: 'Rousseau, Voltaire: questioned absolute monarchy' },
            { label: 'IV.', text: '**Food shortages**' },
            { label: '   A.', text: 'Bad harvests 1788 → bread prices rose sharply' },
          ],
        },
        {
          t: 'p',
          text: 'You do not need formal numbering. Simple bullets and indentation work just as well. What matters is that the level of indentation shows how important a point is and what it belongs to.',
        },
      ],
    },
    {
      id: 'when',
      title: 'When to use it',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use for lectures and texts with clear headings.',
            'Leave space to add points later.',
            'Add question cues in the margin to make it testable.',
          ],
          dont: [
            'Use for fast discussions that jump around; you will lose the structure.',
            'Force material into a hierarchy when ideas are connected across branches; use a [map](@note-taking/methods/mapping) instead.',
          ],
        },
      ],
    },
  ],
  sources: ['Pauk, W., & Owens, R. J. Q. (2013). *How to study in college* (11th ed.). Wadsworth.'],
  related: ['note-taking/methods/cornell', 'note-taking/methods/mapping', 'note-taking/methods/charting'],
}

export default guide
