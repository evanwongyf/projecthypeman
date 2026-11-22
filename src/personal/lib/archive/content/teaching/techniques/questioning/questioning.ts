import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Teachers ask hundreds of questions a day, but many only reach the few learners with hands up, and many only ask for recall. A handful of techniques turn questioning into a way to make every learner think and to find out what they understand.',
  nutshell: [
    '**Wait time**: pause three seconds or more after asking, and again after an answer.',
    '**Cold calling**: choose who answers instead of taking hands up, so everyone prepares an answer.',
    '**No opt out**: "I don’t know" is a start, not an end; come back until the learner gives the right answer.',
    '**Probe and bounce**: follow up an answer with "why?" or pass it to another learner to build on.',
    'Plan key questions in advance, including ones that go beyond recall.',
  ],
  sections: [
    {
      id: 'wait',
      title: 'Wait time',
      lead: 'The simplest improvement there is.',
      blocks: [
        {
          t: 'p',
          text: 'Mary Budd Rowe (1972, 1986) found that teachers typically waited about **one second** for an answer before calling on someone, rephrasing or answering themselves. When teachers waited three seconds or more, answers got longer and more thoughtful, more learners responded, and fewer said "I don’t know". Waiting again after a learner answers (wait time 2) drew out further explanation.',
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Silently count "one thousand, two thousand, three thousand" after asking. Tell the class what you are doing: "I’ll give everyone ten seconds to think before I choose someone."',
        },
      ],
    },
    {
      id: 'who',
      title: 'Who answers?',
      lead: 'Making everyone accountable for thinking.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Cold call', body: 'Ask the question, pause, then name a learner. Everyone must prepare an answer because anyone might be asked. Keep it warm and predictable, not a trap (Lemov, 2021).' },
            { title: 'No hands up', body: 'Hands are only for learners’ own questions. Answers come by cold call, lolly sticks or a random name picker.' },
            { title: 'Everybody writes', body: 'Everyone writes an answer first, on paper or a whiteboard. Then cold call; nobody starts from nothing.' },
            { title: 'Think, pair, share', body: 'Private thinking, then partner discussion, then share. Learners rehearse answers before speaking to the class. See [think, pair, share](@teaching/techniques/active-learning/think-pair-share).' },
          ],
        },
      ],
    },
    {
      id: 'follow-up',
      title: 'After the answer',
      lead: 'Where the real learning happens.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'No opt out', def: 'If a learner cannot answer, ask someone else, then return to the first learner to repeat or use the answer. They end with success, and learn that "I don’t know" does not end the question.' },
            { term: 'Right is right', def: 'Hold out for a complete, correct answer. "You’re nearly there. What’s missing?" rather than "Yes, sort of" and finishing it yourself.' },
            { term: 'Probe / stretch it', def: 'Follow a right answer with a harder question: "Why?" "How do you know?" "What if…?" "Can you give an example?"' },
            { term: 'Bounce', def: 'Pass an answer to another learner: "Do you agree with Sam? Why?" or "Can you add to that?"' },
            { term: 'Say it again, better', def: 'Ask the learner to refine their answer using the key vocabulary.' },
          ],
        },
        {
          t: 'example',
          title: 'Pose, pause, pounce, bounce',
          lines: [
            { label: 'Pose', text: '"Why do you think the character lies to her sister?"' },
            { label: 'Pause', text: 'Wait at least five seconds. Everyone thinks.' },
            { label: 'Pounce', text: '"Aisha?" "Because she’s scared of what her sister will think."' },
            { label: 'Bounce', text: '"Leo, do you agree with Aisha? What in the text supports or challenges that?"' },
          ],
        },
      ],
    },
    {
      id: 'kinds',
      title: 'Kinds of question',
      lead: 'Matching the question to the purpose.',
      blocks: [
        {
          t: 'table',
          head: ['Purpose', 'Example'],
          rows: [
            ['Recall', 'What is the name for animals that eat only plants?'],
            ['Understanding', 'Explain in your own words why the ice melted faster in the metal tray.'],
            ['Diagnostic', 'Which of these four sentences uses the apostrophe correctly? (distractors reveal misconceptions)'],
            ['Reasoning', 'How do you know? What is your evidence?'],
            ['Hypothetical', 'What would happen to the food chain if the foxes disappeared?'],
            ['Evaluative', 'Which solution is better, and why?'],
            ['Metacognitive', 'How did you work that out? Where did you get stuck?'],
          ],
        },
        {
          t: 'p',
          text: 'Use [Bloom’s taxonomy](@teaching/taxonomies/blooms) to plan a spread of question types. For deeper discussion, see [Socratic questioning](@teaching/techniques/questioning/socratic).',
        },
      ],
    },
    {
      id: 'avoid',
      title: 'Habits to avoid',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Ask the question, then name the learner.',
            'Plan three or four key questions before the lesson.',
            'Respond to wrong answers with interest: "Interesting. What made you think that?"',
          ],
          dont: [
            'Name the learner first (everyone else stops thinking).',
            'Ask "Does everyone understand?" or "Any questions?" as a check.',
            'Guess-what-I’m-thinking questions with one word you are fishing for.',
            'Answer your own questions after one second of silence.',
            'Rely on the same few volunteers.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Rowe, M. B. (1986). Wait time: Slowing down may be a way of speeding up! *Journal of Teacher Education, 37*(1), 43–50.',
    'Lemov, D. (2021). *Teach like a champion 3.0*. Jossey-Bass.',
    'Wiliam, D. (2011). *Embedded formative assessment*. Solution Tree.',
  ],
  related: ['teaching/techniques/questioning/hinge-questions', 'teaching/techniques/questioning/checking-understanding', 'teaching/techniques/questioning/socratic', 'teaching/taxonomies/blooms'],
}

export default guide
