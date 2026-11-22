import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Being asked to teach a topic to your class is one of the best ways to learn it yourself. It is also easy to do badly: reading slides aloud while classmates zone out. This guide is for learners who have to present or teach, and for teachers setting the task.',
  nutshell: [
    'Decide what your classmates should **know or be able to do** at the end. Plan backward from that.',
    'Three key points, each with an example. Less is more.',
    'Make your audience **do** something: answer a question, solve a problem, vote.',
    'Practise out loud, and finish with a quick check of what they learned.',
  ],
  sections: [
    {
      id: 'plan',
      title: 'Planning',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Learn it properly first', body: 'Use the [Feynman technique](@teaching/techniques/learning-strategies/feynman): explain it simply to yourself and find the gaps before you teach anyone.' },
            { title: 'Write one goal', body: '"By the end, the class will be able to explain why the Titanic sank, using three causes."' },
            { title: 'Choose three key points', body: 'What are the most important ideas? Cut everything else, or put it in a handout.' },
            { title: 'Find examples and a visual for each', body: 'A picture, diagram, story or demonstration. See [dual coding](@teaching/techniques/learning-strategies/dual-coding).' },
            { title: 'Plan interaction', body: 'A question for pairs to discuss, a quick poll, a problem to try.' },
            { title: 'Plan a check', body: 'Two or three questions at the end to see what the class learned.' },
          ],
        },
      ],
    },
    {
      id: 'structure',
      title: 'A simple structure',
      blocks: [
        {
          t: 'example',
          title: 'A 10-minute teaching presentation',
          lines: [
            { label: '0:00', text: '**Hook**: a surprising fact, question or image. "The Titanic had lifeboats for only about half the people on board. Why?"' },
            { label: '1:00', text: '**Goal**: "By the end, you’ll be able to explain three reasons the Titanic sank."' },
            { label: '1:30', text: '**Point 1** with example and visual.' },
            { label: '3:30', text: '**Point 2**, then a quick pair question: "Which of these two causes do you think mattered more?"' },
            { label: '6:00', text: '**Point 3** with example and visual.' },
            { label: '8:00', text: '**Summary**: the three points on one slide.' },
            { label: '8:30', text: '**Check**: three quick questions; classmates answer on whiteboards or by hand vote.' },
            { label: '9:30', text: '**Questions** from the class.' },
          ],
        },
      ],
    },
    {
      id: 'slides',
      title: 'Slides and delivery',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use slides with a picture and a few words; say the rest aloud.',
            'Put one idea on each slide.',
            'Face the audience, not the screen.',
            'Speak slowly and pause after key points.',
            'Practise out loud at least twice, and time it.',
            'Use notes cards with key words, not a full script.',
          ],
          dont: [
            'Paste paragraphs onto slides and read them.',
            'Use tiny fonts, busy backgrounds or distracting animations.',
            'Rush to fit everything in.',
            'Apologise for being nervous; everyone is, and no one can tell as much as you think.',
          ],
        },
      ],
    },
    {
      id: 'questions',
      title: 'Handling questions',
      blocks: [
        {
          t: 'list',
          items: [
            'Repeat the question so everyone hears it.',
            'If you do not know: "Good question, I’m not sure. I’ll find out and let you know." That is a fine answer.',
            'Turn it back to the class: "What do others think?"',
            'Keep answers short, and link back to your key points.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Fiorella, L., & Mayer, R. E. (2013). The relative benefits of learning by teaching and teaching expectancy. *Contemporary Educational Psychology, 38*(4), 281–288.',
    'Reynolds, G. (2019). *Presentation Zen* (3rd ed.). New Riders.',
  ],
  related: ['teaching/techniques/learning-strategies/feynman', 'teaching/techniques/instruction/explaining', 'teaching/techniques/learning-strategies/dual-coding'],
}

export default guide
