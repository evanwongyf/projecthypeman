import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An exam essay is a first draft written against the clock. The winning habits are simple: spend a few minutes planning, answer the question directly from the first paragraph, keep to time for each section, and leave a couple of minutes to check.',
  nutshell: [
    'Spend about **10%** of the time reading the question and planning.',
    'Write your thesis in the introduction so the examiner knows your answer immediately.',
    'One point per paragraph, each linked to the question.',
    'Watch the clock: a finished, shorter essay usually beats an unfinished long one.',
  ],
  sections: [
    {
      id: 'timing',
      title: 'Splitting a 45-minute essay',
      blocks: [
        {
          t: 'table',
          head: ['Minutes', 'Task'],
          rows: [
            ['0–5', 'Unpack the question (command words, focus, limits). Quick plan: thesis plus 3–4 points with evidence.'],
            ['5–10', 'Introduction with thesis.'],
            ['10–35', 'Three or four body paragraphs, about 7–8 minutes each.'],
            ['35–41', 'Conclusion that makes a judgement.'],
            ['41–45', 'Check: does it answer the question? Fix obvious slips.'],
          ],
        },
      ],
    },
    {
      id: 'plan',
      title: 'A five-minute plan',
      blocks: [
        {
          t: 'example',
          title: 'Plan for: "How far was Stalin’s rise to power due to his own skill?"',
          lines: [
            { label: 'Thesis', text: 'Largely, but only because rivals’ mistakes gave his skill room to work.' },
            { label: '¶1', text: 'His skill: control of party appointments as General Secretary → loyal supporters.' },
            { label: '¶2', text: 'His skill: playing rivals against each other (left vs right).' },
            { label: '¶3', text: 'Rivals’ mistakes: Trotsky underestimated him; Lenin’s testament was not published.' },
            { label: 'Judgement', text: 'Skill was the key factor, but rivals’ errors were essential.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Prepare plans in advance',
          text: 'Before the exam, practise writing five-minute plans for many past questions. It is faster than writing full essays and trains the skill that matters most under time pressure.',
        },
      ],
    },
    {
      id: 'tips',
      title: 'Tips',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Answer the question in the first paragraph.',
            'Use the question’s words in topic sentences.',
            'Move on when your time for a paragraph is up.',
            'If running out of time, write your remaining points as brief notes; some examiners can credit them.',
          ],
          dont: [
            'Write a long introduction with background.',
            'Try to include everything you know.',
            'Spend 20 minutes on the first paragraph and rush the rest.',
          ],
        },
      ],
    },
  ],
  related: ['exams/exam-technique', 'writing/essentials/the-question', 'writing/essentials/thesis'],
}

export default guide
