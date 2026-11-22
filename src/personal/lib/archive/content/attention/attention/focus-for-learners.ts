import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Concentration is less about willpower than about design. People who seem to focus easily usually arrange their environment, time and tasks so that focusing is the easiest option. This guide collects the strategies with the best support, for anyone studying on their own.',
  nutshell: [
    '**Remove the distraction** rather than resisting it: phone in another room, notifications off, one tab.',
    'Work in **focus blocks** (25–50 minutes) with real breaks.',
    'Start with a **clear, small first step**; vague tasks invite procrastination.',
    'Use **if–then plans** for predictable distractions.',
    'Sleep, exercise and hydration matter more than any app.',
  ],
  sections: [
    {
      id: 'environment',
      title: 'Design the environment',
      blocks: [
        { t: 'checklist', items: [
          'Phone out of sight, ideally another room, or in a timed lock box or focus mode',
          'Notifications off on the computer; close email and chat',
          'One browser window, only the tabs you need',
          'A consistent study place, used mainly for study',
          'Everything you need ready before you start (water, books, charger)',
          'Background: silence or steady non-lyrical sound; lyrics compete with reading',
          'Tell people around you when you are in a focus block',
        ] },
      ],
    },
    {
      id: 'blocks',
      title: 'Focus blocks and breaks',
      blocks: [
        { t: 'steps', items: [
          { title: 'Choose one task', body: 'Write a specific goal: “Do questions 1–8 of the circles exercise”, not “maths”.' },
          { title: 'Set a timer', body: '25 minutes (the Pomodoro technique) to start; 40–50 once you are used to it.' },
          { title: 'Park distractions', body: 'Keep a notepad for thoughts that pop up (“reply to Mei”); deal with them in the break.' },
          { title: 'Take a real break', body: '5–10 minutes away from screens: move, drink water, look outside.' },
          { title: 'Repeat, then rest', body: 'After three or four blocks, take a longer break.' },
        ] },
        { t: 'callout', tone: 'note', title: 'Evidence', text: 'Studies of structured breaks find they help sustain performance and mood compared with working through, and that brief exposure to nature or movement can restore attention (attention restoration theory, Kaplan, 1995). The exact block length matters less than having a plan and protecting it.' },
      ],
    },
    {
      id: 'plans',
      title: 'If–then plans for distraction',
      blocks: [
        { t: 'example', title: 'Implementation intentions', lines: [
          { label: 'If', text: 'I feel the urge to check my phone → then I will write the urge on my notepad and do one more question first.' },
          { label: 'If', text: 'I get stuck on a question for 5 minutes → then I will mark it, move on, and come back after the block.' },
          { label: 'If', text: 'I start the evening on my bed → then I will move to the desk before opening my books.' },
        ] },
        { t: 'p', text: 'Gollwitzer and Sheeran’s meta-analysis of 94 studies found if–then plans had a medium-to-large effect on reaching goals, including resisting distraction.' },
      ],
    },
    {
      id: 'differences',
      title: 'Attention differences',
      blocks: [
        { t: 'p', text: 'For people with ADHD, attention regulation is genuinely harder, and the problem is not effort or character. The same strategies help, often more strongly: external structure (timers, checklists, body doubling), shorter blocks, movement, and support from teachers and clinicians. Medication and behavioural support are the best-evidenced treatments; see the teaching shelf for classroom approaches.' },
        { t: 'links', items: [
          { path: 'teaching/special-education/needs/adhd', note: 'ADHD: attention, impulsivity and executive function' },
          { path: 'teaching/special-education/strategies/executive-function', note: 'Supporting executive function' },
        ] },
      ],
    },
  ],
  sources: [
    'Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis. Advances in Experimental Social Psychology, 38, 69–119.',
    'Kaplan, S. (1995). The restorative benefits of nature: Toward an integrative framework. Journal of Environmental Psychology, 15(3), 169–182.',
    'Cirillo, F. (2018). The Pomodoro Technique. Currency.',
    'Duckworth, A. L. et al. (2016). Situational strategies for self-control. Perspectives on Psychological Science, 11(1), 35–55.',
  ],
  related: ['e-pedagogy/brain/multitasking-and-notifications', 'habits/focus', 'attention/practice/planning-reviews'],
}

export default guide
