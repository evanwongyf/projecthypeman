import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Many essays lose marks not for weak writing but for answering a different question. The key is to break the question into its parts: the **command word** (what to do), the **topic** (what it is about) and any **limits** (the focus, period or texts).',
  nutshell: [
    'Circle the **command word**: it tells you what kind of thinking to show.',
    'Underline the **topic** and box the **limits** (dates, texts, aspects, numbers).',
    'Rewrite the question in your own words before you plan.',
    'Keep checking your plan and draft against the question.',
  ],
  sections: [
    {
      id: 'unpack',
      title: 'Unpacking a question',
      blocks: [
        {
          t: 'example',
          title: '"To what extent was the Treaty of Versailles responsible for the outbreak of the Second World War?"',
          lines: [
            { label: 'Command', text: '**To what extent**: weigh up how far it is true. You need a judgement, and to consider other factors.' },
            { label: 'Topic', text: 'The causes of the Second World War.' },
            { label: 'Focus', text: 'The Treaty of Versailles, compared with other causes.' },
            { label: 'Limit', text: 'The *outbreak* (1939), not the course of the war.' },
            { label: 'In my words', text: 'How important was Versailles, compared with other causes, in causing war to break out in 1939?' },
          ],
        },
      ],
    },
    {
      id: 'commands',
      title: 'Common command words',
      blocks: [
        {
          t: 'table',
          head: ['Command word', 'What it asks you to do'],
          rows: [
            ['Describe', 'Say what something is like or what happened. Little or no explanation needed.'],
            ['Explain', 'Say why or how something happens, giving reasons or causes.'],
            ['Analyse', 'Break something into parts and examine how they work and relate.'],
            ['Compare', 'Identify similarities (and usually differences).'],
            ['Contrast', 'Identify differences.'],
            ['Discuss', 'Consider different sides or aspects of an issue, with evidence, usually reaching a conclusion.'],
            ['Evaluate / assess', 'Judge the value, importance or success of something, using evidence and criteria. Reach a judgement.'],
            ['To what extent / how far', 'Weigh up how true a statement is. Consider the case for and against, then judge the degree.'],
            ['Justify', 'Give reasons and evidence to support a position.'],
            ['Outline', 'Give the main points briefly.'],
            ['Examine', 'Look at something in detail, investigating assumptions and connections.'],
            ['Critically…', 'Added to any command, it means question assumptions and evidence, and show the limits of arguments.'],
          ],
          caption: 'Meanings vary slightly between exam boards and subjects. Check your course’s own glossary.',
        },
      ],
    },
    {
      id: 'mistakes',
      title: 'Common mistakes',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Answer every part of multi-part questions.',
            'Reach a judgement when the question asks "evaluate", "assess" or "to what extent".',
            'Stay within the limits (the period, texts or aspect named).',
            'Use the question’s key words in your topic sentences to show you are on track.',
          ],
          dont: [
            'Write everything you know about the topic ("knowledge dumping").',
            'Describe when asked to explain or evaluate.',
            'Answer the question you wished had been asked.',
            'Sit on the fence when a judgement is required.',
          ],
        },
      ],
    },
  ],
  related: ['writing/essentials/thesis', 'writing/essentials/argument', 'exams/exam-technique', 'teaching/taxonomies/blooms'],
}

export default guide
