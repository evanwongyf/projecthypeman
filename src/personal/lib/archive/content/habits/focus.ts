import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Focus is the scarce resource of studying. Every notification, tab switch and quick check of your phone pulls attention away, and getting it back takes time. The good news: the environment is easier to change than willpower.',
  nutshell: [
    '**Multitasking is really task-switching**, and each switch costs time and accuracy.',
    'After switching, part of your attention stays on the previous task ("attention residue").',
    'Put your **phone out of sight and reach**, turn off notifications, close unrelated tabs.',
    'Work in focused blocks on a single task, with planned breaks.',
  ],
  sections: [
    {
      id: 'switching',
      title: 'The cost of switching',
      blocks: [
        {
          t: 'p',
          text: 'The brain does not really do two demanding tasks at once; it switches between them. Each switch has a cost in time and errors, and the cost is bigger for complex tasks (Rubinstein, Meyer & Evans, 2001). Sophie Leroy (2009) found that when people switch tasks, part of their attention lingers on the previous one, reducing performance on the new one.',
        },
        {
          t: 'example',
          title: 'An hour of "studying"',
          lines: [
            { label: 'Distracted', text: 'Reading, phone buzz, reply, back to reading, check another app, back again… 15 switches. Each needs time to refocus. Much of the hour is recovery.' },
            { label: 'Focused', text: 'Phone in another room. 50 minutes on one task, 10-minute break. Far more real work done, and less tiring.' },
          ],
        },
      ],
    },
    {
      id: 'phones',
      title: 'Phones',
      blocks: [
        {
          t: 'p',
          text: 'A widely reported study found that people with their phone on the desk, even face down and silent, did worse on tests of working memory than people whose phone was in another room (Ward et al., 2017). Later studies have had mixed results about that specific effect, but the practical conclusion is easy: interruptions from phones clearly harm focus, and the simplest fix is distance.',
        },
        {
          t: 'checklist',
          items: [
            'Phone in another room, or in a bag across the room, while studying.',
            'Notifications off for everything except true emergencies.',
            'Website or app blockers during study blocks.',
            'Only the tabs you need for this task open.',
            'Tell people when you will be offline and when you will reply.',
          ],
        },
      ],
    },
    {
      id: 'environment',
      title: 'A focus-friendly environment',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'A dedicated spot', body: 'A place you only use for studying helps your brain switch into study mode.' },
            { title: 'Clear the desk', body: 'Only what you need for this task.' },
            { title: 'Sound', body: 'Quiet, or steady background noise. Music with lyrics tends to interfere with reading and writing for many people.' },
            { title: 'One task at a time', body: 'Write down the single task for this block before you start.' },
            { title: 'Capture stray thoughts', body: 'Keep a notepad for "I must remember to…" thoughts, so they leave your head without derailing you.' },
            { title: 'Energy', body: 'Hard, focused work in your best hours; admin and easy tasks in low-energy times.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Rubinstein, J. S., Meyer, D. E., & Evans, J. E. (2001). Executive control of cognitive processes in task switching. *Journal of Experimental Psychology: Human Perception and Performance, 27*(4), 763–797.',
    'Leroy, S. (2009). Why is it so hard to do my work? The challenge of attention residue when switching between work tasks. *Organizational Behavior and Human Decision Processes, 109*(2), 168–181.',
    'Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017). Brain drain: The mere presence of one’s own smartphone reduces available cognitive capacity. *Journal of the Association for Consumer Research, 2*(2), 140–154.',
    'Newport, C. (2016). *Deep work*. Grand Central.',
  ],
  related: ['habits/pomodoro', 'habits/procrastination', 'memory/how-memory-works'],
}

export default guide
