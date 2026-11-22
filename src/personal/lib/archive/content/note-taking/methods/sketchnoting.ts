import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Sketchnotes mix handwritten words, simple drawings, arrows and containers on the page. They are not art; they are thinking made visible. Many people find they pay closer attention and remember more when they sketch.',
  nutshell: [
    'Use a small visual vocabulary: boxes, arrows, stick figures, icons, banners.',
    'Listen for the big ideas, not every detail.',
    'Drawing a concept has been shown to improve memory for it compared with writing it out.',
    'Simple beats pretty. If a drawing takes more than a few seconds, use words.',
  ],
  sections: [
    {
      id: 'toolkit',
      title: 'A visual toolkit',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Containers', body: 'Boxes, clouds and circles group related ideas.' },
            { title: 'Connectors', body: 'Arrows show cause, sequence and relationships.' },
            { title: 'People', body: 'Stick figures and faces show who, and how they felt.' },
            { title: 'Icons', body: 'Lightbulb (idea), clock (time), warning sign (important), question mark (to check).' },
            { title: 'Typography', body: 'Big bold letters for titles, smaller for details.' },
            { title: 'Layout', body: 'Top to bottom, left to right, radial, or path; decide at the start.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Why drawing helps',
      blocks: [
        {
          t: 'p',
          text: 'Wammes, Meade and Fernandes (2016) found that people remembered words they had drawn much better than words they had written out repeatedly. Drawing combines several kinds of processing: thinking about meaning, planning a picture and physically making it. This links to [dual coding](@teaching/techniques/learning-strategies/dual-coding).',
        },
        {
          t: 'callout',
          tone: 'warn',
          text: 'Sketchnoting can slow you down in a fast lecture. Many people take quick notes during class and turn them into a sketchnote afterwards, which doubles as a review.',
        },
      ],
    },
  ],
  sources: [
    'Rohde, M. (2012). *The sketchnote handbook*. Peachpit Press.',
    'Wammes, J. D., Meade, M. E., & Fernandes, M. A. (2016). The drawing effect: Evidence for reliable and robust memory benefits in free recall. *Quarterly Journal of Experimental Psychology, 69*(9), 1752–1776.',
  ],
  related: ['note-taking/methods/mapping', 'teaching/techniques/learning-strategies/dual-coding'],
}

export default guide
