import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A 911/999/112 call is itself a skill: dispatchers are trained to extract the right information fast, but a calm, structured answer gets help moving sooner, and can unlock phone-guided CPR or choking instructions if you need them. Knowing the shape of the call in advance means you spend less time thinking and more time acting.',
  nutshell: [
    'Call **before** you start treating if you are alone and the person is unresponsive, getting help moving is usually the single highest-value thing you can do first.',
    'The number differs by country: 911 (US/Canada), 999 (UK), 112 (much of the EU and reachable from most mobiles worldwide), 000 (Australia), 111 (NZ).',
    'The dispatcher needs: location, what happened, how many people, their condition, and your name.',
    'Put the phone on speaker and set it down nearby so you can keep both hands free to help.',
    'Stay on the line, the dispatcher can give you real-time instructions and will tell you when it is safe to hang up.',
  ],
  sections: [
    {
      id: 'order',
      title: 'What to say, in order',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'State the emergency type', body: '“I need an ambulance” (or fire, or police) tells the call-taker which service to connect you to immediately.' },
            { title: 'Give the location first', body: 'The single most important piece of information. A street address, or landmarks and cross-streets if you do not know it. In many regions, your phone’s GPS location can be shared automatically, follow any prompt to allow it.' },
            { title: 'Say what happened', body: 'Briefly: “A man collapsed and isn’t breathing,” “My child swallowed something and is choking,” “A car hit a cyclist.”' },
            { title: 'Say how many people and their condition', body: 'Conscious or not, breathing or not, visible bleeding, whatever you can see right now.' },
            { title: 'Answer the dispatcher’s questions', body: 'They are trained to ask what they need and can guide you through CPR, choking relief or bleeding control step by step if you are unsure.' },
            { title: 'Do not hang up first', body: 'Let the dispatcher end the call. They may have further instructions, or need to confirm help has arrived.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'If you are alone with an unresponsive adult',
          text: 'Call emergency services (or put the call on speaker) before you start CPR, if you can do so in under about 10 seconds, most phones let you do this almost immediately. For an unresponsive child or infant, current guidance is usually to give about two minutes of CPR first if you are alone, then call, because a child collapse is more often caused by a breathing problem that CPR can address quickly.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Phone-guided help works',
          text: 'Dispatchers routinely talk untrained bystanders through CPR and choking relief in real time, and it demonstrably saves lives. If you are unsure what to do, calling and following their instructions is far better than hesitating.',
        },
      ],
    },
  ],
}

export default guide
