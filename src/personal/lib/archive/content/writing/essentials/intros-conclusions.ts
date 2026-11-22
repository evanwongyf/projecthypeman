import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The introduction tells the reader what you will argue and why it matters. The conclusion shows what you have proved and why it matters. Both are short, but they shape how the whole essay is read.',
  nutshell: [
    'Introduction: **context → focus → thesis** (a funnel from broad to specific).',
    'Keep introductions short: around 10% of the word count.',
    'Conclusion: **restate the thesis in new words → draw the threads together → the "so what?"**',
    'No new evidence in the conclusion, and no "In conclusion, in this essay I have…".',
  ],
  sections: [
    {
      id: 'intro',
      title: 'Introductions',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Thesis', body: 'Your answer to the question, and the main reasons. See [thesis statements](@writing/essentials/thesis).' },
            { name: 'Focus', body: 'Narrow to the specific question, defining key terms if needed.' },
            { name: 'Context', body: 'One or two sentences of background that set up the issue.' },
          ],
          caption: 'The funnel, read from the bottom up: broad context, then focus, then your thesis at the end of the paragraph.',
        },
        {
          t: 'example',
          title: 'An introduction',
          lines: [
            { label: 'Context', text: 'By 1939, Europe was at war for the second time in a generation.' },
            { label: 'Focus', text: 'Historians have long debated how far the peace settlement of 1919 was to blame.' },
            { label: 'Thesis', text: 'This essay argues that the Treaty of Versailles was a major but not decisive cause: it created lasting resentment in Germany, but it was the Great Depression and the failure of appeasement that turned resentment into war.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Get to the point within a few sentences.', 'End with your thesis.', 'Define key terms if they are contested.'],
          dont: ['Start with "Since the dawn of time…" or a dictionary definition.', 'Include evidence you will use later.', 'Write a long list of what each paragraph will do.'],
        },
      ],
    },
    {
      id: 'conclusion',
      title: 'Conclusions',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Restate your answer', body: 'Your thesis in fresh words, now with the confidence of having proved it.' },
            { title: 'Synthesise', body: 'Show how your main points fit together, rather than repeating each one. Which factor mattered most? How do they connect?' },
            { title: 'Answer "so what?"', body: 'Why does this matter? What does it suggest more broadly, or what question does it leave open?' },
          ],
        },
        {
          t: 'example',
          title: 'A conclusion',
          lines: [
            { label: 'Restate', text: 'Versailles made the Second World War possible, but it did not make it inevitable.' },
            { label: 'Synthesise', text: 'The treaty’s harsh terms gave Hitler a grievance to exploit; the Depression gave him the desperate voters to reach power; and appeasement gave him the confidence to gamble on war. Remove any one, and 1939 might have looked very different.' },
            { label: 'So what?', text: 'The lesson historians often draw is that peace settlements must be enforced as well as written.' },
          ],
        },
      ],
    },
  ],
  related: ['writing/essentials/thesis', 'writing/essentials/paragraphs', 'writing/forms/timed'],
}

export default guide
