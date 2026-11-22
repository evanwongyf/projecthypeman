import type { Guide } from '../../../guide'

const GROUP = ['now', 'tomorrow', 'yesterday', 'morning', 'night', 'later']

const guide: Guide = {
  intro:
    'ASL imagines time as a line running through your body: the future is in front of you, the past is behind your shoulder, and now is right where you are. Time signs move along that line.',
  nutshell: [
    'Forward means future (*tomorrow*, *later*); backward means past (*yesterday*).',
    '*Now* is made right in front of you, both hands dropping slightly.',
    '*Morning* is the sun rising over the horizon of your arm; *night* is it setting.',
    'Time words usually come **first** in an ASL sentence: TOMORROW ME SCHOOL.',
  ],
  sections: [
    {
      id: 'signs',
      title: 'The signs',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'signs', words: GROUP },
      ],
    },
    {
      id: 'line',
      title: 'The time line',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Behind the shoulder: the past', body: '*Yesterday*, *before*, *long ago*. The further back, the longer ago.' },
            { name: 'At the body: now', body: '*Now*, *today*.' },
            { name: 'In front: the future', body: '*Tomorrow*, *later*, *will*. The further forward, the further away in time.' },
          ],
          caption: 'Time runs from behind you (past) through your body (now) to in front of you (future).',
        },
        {
          t: 'example',
          title: 'Time comes first',
          lines: [
            { label: 'ASL', text: 'TOMORROW ME SCHOOL.' },
            { label: 'English', text: 'I am going to school tomorrow.' },
            { label: 'ASL', text: 'YESTERDAY ME TIRED.' },
            { label: 'English', text: 'I was tired yesterday.' },
            { label: 'ASL', text: 'MORNING ME EAT FINISH.' },
            { label: 'English', text: 'I have already eaten this morning.' },
          ],
        },
        {
          t: 'p',
          text: 'Signs do not change for tense the way English verbs do (*eat, ate*). The time sign at the start sets the time for everything after it, until a new time sign changes it. FINISH after a verb shows it is already done.',
        },
      ],
    },
  ],
  sources: ['Valli, C., Lucas, C., Mulrooney, K. J., & Villanueva, M. (2011). *Linguistics of American Sign Language* (5th ed.). Gallaudet University Press.'],
  related: ['sign-language/grammar', 'sign-language/numbers'],
}

export default guide
