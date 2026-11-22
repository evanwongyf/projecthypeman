import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Reflective writing asks you to think critically about your own experience: what happened, what you made of it, and what you will do differently. It is common in teaching, nursing, social work, business and placements. It is personal, but it is still academic.',
  nutshell: [
    'Go beyond describing: **analyse** why things happened and what you learned.',
    'Use a model like **Gibbs’ cycle** or **What? So what? Now what?** for structure.',
    'Link experience to theory and evidence.',
    'Use "I", and be honest about what went wrong, but keep a professional tone.',
  ],
  sections: [
    {
      id: 'levels',
      title: 'Levels of reflection',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Descriptive', body: 'What happened. Necessary but not enough on its own.' },
            { name: 'Descriptive with reasons', body: 'What happened and why, from your point of view.' },
            { name: 'Dialogic', body: 'Stepping back: considering other perspectives, theory, and alternative explanations.' },
            { name: 'Critical', body: 'Placing the experience in a wider context: assumptions, ethics, how it changes your practice and thinking.' },
          ],
          caption: 'Based on Hatton and Smith (1995). Aim to move up from description.',
        },
      ],
    },
    {
      id: 'model',
      title: 'Using a model',
      blocks: [
        {
          t: 'example',
          title: 'What? So what? Now what?',
          lines: [
            { label: 'What?', text: 'In my group presentation, I spoke for most of our slot and two members barely contributed.' },
            { label: 'So what?', text: 'I think I took over because I was anxious about the grade, but this meant the others did not practise their skills, and our presentation lost the variety of their ideas. Research on cooperative learning suggests groups work best with equal participation and individual accountability (Johnson & Johnson, 2009).' },
            { label: 'Now what?', text: 'Next time, I will suggest we assign clear roles and practise with a timer so that everyone speaks. I will also notice when anxiety makes me take control.' },
          ],
        },
        {
          t: 'p',
          text: 'For a fuller structure, see [Gibbs’ reflective cycle](@teaching/guides/growth/reflection).',
        },
      ],
    },
    {
      id: 'phrases',
      title: 'Useful phrases',
      blocks: [
        {
          t: 'table',
          head: ['Purpose', 'Phrases'],
          rows: [
            ['Describing', 'The situation involved… / I was responsible for…'],
            ['Feelings', 'At the time I felt… / I was surprised that…'],
            ['Analysing', 'This may have happened because… / In relation to [theory], this suggests…'],
            ['Learning', 'I have learned that… / This experience has made me reconsider…'],
            ['Action', 'In future, I will… / To develop this skill, I plan to…'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Hatton, N., & Smith, D. (1995). Reflection in teacher education: Towards definition and implementation. *Teaching and Teacher Education, 11*(1), 33–49.',
    'Gibbs, G. (1988). *Learning by doing*. Further Education Unit.',
  ],
  related: ['teaching/guides/growth/reflection', 'teaching/theories/experiential'],
}

export default guide
