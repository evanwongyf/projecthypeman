import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A summary captures the main ideas of a text in your own words, in far fewer words than the original. It is a core skill for note-taking, research and exams, and writing one is a good test of whether you understood what you read.',
  nutshell: [
    'Identify the **main idea** and the key supporting points. Leave out examples and detail.',
    'Write in **your own words** without looking at the text.',
    'Keep the author’s meaning; add no opinions of your own.',
    'Cite the source.',
  ],
  sections: [
    {
      id: 'steps',
      title: 'Step by step',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Read the whole text', body: 'Get the gist before you start.' },
            { title: 'Find the main idea', body: 'What is the author’s central point? Often in the introduction or conclusion.' },
            { title: 'Mark the key points', body: 'Usually one per paragraph or section, often in topic sentences.' },
            { title: 'Put the text away', body: 'Write the summary from memory, starting with the main idea.' },
            { title: 'Check and trim', body: 'Compare with the original: is it accurate and complete? Cut anything that is detail or your own opinion.' },
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'An example',
      blocks: [
        {
          t: 'example',
          title: 'A 150-word article, summarised in one sentence',
          lines: [
            { label: 'Summary', text: 'Smith (2022) argues that four-day school weeks save money but harm learning in younger pupils, because the longer days that replace the lost day are harder for them to concentrate through.' },
            { label: 'Includes', text: 'The source, the main claim, the key reason.' },
            { label: 'Leaves out', text: 'Examples of specific districts, statistics, the author’s anecdote.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Start with the main idea.', 'Use reporting verbs: argues, claims, finds, suggests.', 'Keep it neutral.'],
          dont: ['Copy sentences (see [avoiding plagiarism](@research/avoiding-plagiarism)).', 'Include minor details and examples.', 'Add your own opinion.'],
        },
      ],
    },
  ],
  related: ['research/avoiding-plagiarism', 'note-taking/situations/reading', 'research/literature-review'],
}

export default guide
