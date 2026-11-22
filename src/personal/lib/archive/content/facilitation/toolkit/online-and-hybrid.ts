import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Online facilitation is not in-person facilitation through a screen. Attention is thinner, body language is mostly lost, technology fails, and in hybrid rooms the people online are easily forgotten. The good news: online tools make some things easier, such as anonymous input, simultaneous writing and instant breakouts.',
  nutshell: [
    'Design for **shorter blocks** and **more frequent interaction**: something for every participant to do every 5–10 minutes.',
    'Use **chat, polls, whiteboards and breakouts** as your main instruments.',
    'In hybrid sessions, give remote participants **equal or first access** to voice, and appoint a remote advocate.',
    'Have a **producer** (co-host) handle technology so you can facilitate.',
  ],
  sections: [
    {
      id: 'differences',
      title: 'What changes online',
      blocks: [
        { t: 'table', head: ['Challenge', 'Response'], rows: [
          ['Zoom fatigue (constant close-up faces, self-view, less movement)', 'Allow cameras off at times; hide self-view; short sessions; breaks every 45–60 min'],
          ['People multitask', 'Interaction every few minutes; ask for a response from everyone (chat waterfall, poll)'],
          ['Lost non-verbal cues', 'Ask for explicit signals: reactions, a thumbs-up, a 1–5 in chat'],
          ['Hard to know who wants to speak', 'Raise-hand feature; stacking out loud; rounds in a stated order'],
          ['Technology failures', 'A producer, a dial-in, a shared document as backup'],
          ['Breakouts drift', 'Clear task and product written in the chat and on a slide; a shared doc per group'],
        ] },
      ],
    },
    {
      id: 'tools',
      title: 'Online moves',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Chat waterfall', body: 'Everyone types an answer but waits to press Enter until you say “go”: no anchoring on the first answer.' },
          { title: 'Polls and word clouds', body: 'Quick anonymous temperature checks or opinion gathering.' },
          { title: 'Shared whiteboard', body: 'Miro, Mural, Jamboard-style: sticky notes, clustering, dot voting, all at once.' },
          { title: 'Breakout rooms', body: 'Online 1-2-4-All: 2 minutes alone, 3 minutes in pairs, 5 minutes in fours. Announce time left.' },
          { title: 'Annotate the slide', body: 'Everyone stamps where they stand on a scale drawn on a slide.' },
          { title: 'Camera on, camera off', body: '“Turn your camera on if you agree.” A visual vote.' },
        ] },
      ],
    },
    {
      id: 'hybrid',
      title: 'Hybrid fairness',
      blocks: [
        { t: 'p', text: 'In a hybrid meeting the in-room people have side conversations, see the whiteboard and catch each other’s eyes; remote participants get a fuzzy wide shot and audio that drops out. Unless designed against, hybrid is the worst of both worlds.' },
        { t: 'checklist', items: [
          'Every in-room participant also joins on their own laptop (muted), so remote people see faces and everyone uses the same chat and whiteboard',
          'Remote participants speak first in rounds',
          'A named remote advocate in the room watches the chat and raises remote hands',
          'Good audio: a room microphone and speakers tested beforehand',
          'All materials digital-first; no paper-only flipcharts',
          'Consider “all remote” if fairness matters more than the room',
        ] },
      ],
    },
  ],
  sources: [
    'Bailenson, J. N. (2021). Nonverbal overload: A theoretical argument for the causes of Zoom fatigue. Technology, Mind, and Behavior, 2(1).',
    'Kaner, S. et al. (2014). Facilitator’s Guide to Participatory Decision-Making. Jossey-Bass.',
  ],
  related: ['e-pedagogy/start-here', 'facilitation/toolkit/techniques', 'attention/start-here'],
}

export default guide
