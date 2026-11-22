import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Plagiarism is presenting someone else’s words or ideas as your own. Most of it is not deliberate cheating but poor technique: notes copied without quotation marks, paraphrases too close to the original, or forgotten citations. Good habits prevent it.',
  nutshell: [
    'Credit every idea, fact, quote, image or data you take from a source, unless it is common knowledge.',
    'Three ways to use a source: **quote** (exact words, in quotation marks), **paraphrase** (the idea in your own words and structure), **summarise** (the main point, much shorter). All three need a citation.',
    '**Patchwriting**, swapping a few words for synonyms, is still plagiarism.',
    'Prevent it at the note-taking stage: mark quotes clearly and record where everything came from.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What counts as plagiarism',
      blocks: [
        {
          t: 'list',
          items: [
            'Copying text without quotation marks and a citation.',
            'Paraphrasing without a citation.',
            'Paraphrasing too closely, keeping the original structure and many of its words (patchwriting).',
            'Using someone’s ideas, arguments, data, images or code without credit.',
            'Submitting work written by someone else, including paid services or, under most policies, AI tools used without permission or acknowledgement.',
            'Reusing your own previous work without permission (self-plagiarism).',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Common knowledge',
          text: 'Facts widely known and easily found in many general sources, like "Paris is the capital of France" or "water boils at 100°C at sea level", do not need a citation. Specific statistics, interpretations and arguments do. When in doubt, cite.',
        },
      ],
    },
    {
      id: 'three-ways',
      title: 'Quote, paraphrase, summarise',
      blocks: [
        {
          t: 'example',
          title: 'Using one source three ways',
          lines: [
            { label: 'Original', text: '"Students who tested themselves on material retained substantially more after one week than those who spent the same time rereading it, even though the rereaders predicted they would remember more." (Author, 2020, p. 14)' },
            { label: 'Quote', text: 'Author (2020) found that students who reread "predicted they would remember more" but in fact retained less (p. 14).' },
            { label: 'Paraphrase', text: 'Self-testing led to much better recall a week later than spending the same study time rereading, even though learners who reread expected the opposite (Author, 2020).' },
            { label: 'Summary', text: 'Self-testing beats rereading for longer-term memory (Author, 2020).' },
            { label: 'Patchwriting ✕', text: 'Students who quizzed themselves on content kept considerably more after a week than those who used the same time re-reading it (Author, 2020)., Same structure, words swapped: still plagiarism.' },
          ],
        },
      ],
    },
    {
      id: 'paraphrase',
      title: 'How to paraphrase properly',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Read until you understand', body: 'You cannot paraphrase what you do not understand.' },
            { title: 'Cover the original', body: 'Put it out of sight.' },
            { title: 'Write from memory', body: 'Explain the idea in your own words, as if to a friend. Your sentence structure will naturally differ.' },
            { title: 'Check against the original', body: 'Is the meaning accurate? Have you accidentally copied distinctive phrases? Put any you keep in quotation marks.' },
            { title: 'Cite it', body: 'Add the in-text citation. See [references](@research/references).' },
          ],
        },
      ],
    },
    {
      id: 'habits',
      title: 'Habits that prevent it',
      blocks: [
        {
          t: 'checklist',
          items: [
            'In my notes, copied text is always in quotation marks with the page number.',
            'Next to every note, I record the source.',
            'I write paraphrases in my notes, not just copied text.',
            'I add citations as I draft, not at the end.',
            'I know my institution’s policy on AI tools and follow it.',
            'I leave time to check that every source in my text is in my reference list, and vice versa.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Howard, R. M. (1995). Plagiarisms, authorships, and the academic death penalty. *College English, 57*(7), 788–806.',
    'Purdue Online Writing Lab. *Avoiding plagiarism*. owl.purdue.edu',
  ],
  related: ['research/references', 'research/ai-tools', 'writing/forms/summaries'],
}

export default guide
