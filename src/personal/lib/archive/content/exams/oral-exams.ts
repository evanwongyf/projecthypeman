import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Oral exams, from language speaking tests to university vivas and assessed presentations, test whether you can explain your knowledge out loud and think on your feet. Preparing means practising **aloud**, not just reading silently.',
  nutshell: [
    'Practise **speaking**, not just knowing. Say your answers aloud, to people and recordings.',
    'Prepare for **likely questions**, and for follow-ups ("why?", "can you give an example?").',
    'It is fine to **pause**, ask for a question to be repeated, or say "let me think about that".',
    'Structure answers: point, reason, example.',
  ],
  sections: [
    {
      id: 'prepare',
      title: 'Preparing',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Know the format', body: 'How long? Who asks? Is there preparation time? What is assessed: content, language, delivery?' },
            { title: 'List likely questions', body: 'From the syllabus, past papers or your own work. For a viva, questions about your methods, choices and limitations.' },
            { title: 'Answer aloud', body: 'Practise answering each question aloud, then without notes. Record yourself and listen back.' },
            { title: 'Practise with people', body: 'Ask a friend or family member to question you, including unexpected follow-ups.' },
            { title: 'Rehearse under time', body: 'Time your answers and presentations.' },
          ],
        },
      ],
    },
    {
      id: 'answering',
      title: 'Answering well',
      blocks: [
        {
          t: 'example',
          title: 'Point, reason, example',
          lines: [
            { label: 'Question', text: '"Why did you choose a survey for your project?"' },
            { label: 'Point', text: '"I chose a survey because I wanted views from a large number of students."' },
            { label: 'Reason', text: '"Interviews would have given more depth, but I only had two weeks and wanted to compare year groups."' },
            { label: 'Example', text: '"For example, I found that Year 11 reported much higher stress than Year 9, which I couldn’t have seen with five interviews."' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Pause before answering; a few seconds of thought looks confident.',
            'Ask for clarification if a question is unclear.',
            'Admit what you do not know, and say how you would find out.',
            'Keep going after a slip; correct it briefly and move on.',
          ],
          dont: [
            'Memorise a script word for word; you will sound stiff and lose your place.',
            'Answer a different question because you prepared for it.',
            'Rush to fill every silence.',
          ],
        },
      ],
    },
    {
      id: 'nerves',
      title: 'Nerves',
      blocks: [
        {
          t: 'p',
          text: 'Speaking in front of examiners is nerve-wracking for most people. The best antidote is practice under realistic conditions. On the day, slow breathing and reframing nerves as readiness help. See [handling exam stress](@exams/anxiety) and, for presentations, [teaching a topic to peers](@teaching/guides/contexts/presentations).',
        },
      ],
    },
  ],
  related: ['exams/anxiety', 'teaching/guides/contexts/presentations', 'writing/essentials/persuasive'],
}

export default guide
