import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Attention is the brain’s way of choosing what to process deeply out of the enormous flood of information arriving every second. It is not one thing: we select (focus on one voice in a noisy room), sustain (keep focus over time), divide (try to do two things), and control (resist distraction and switch on purpose).',
  nutshell: [
    'Posner and Petersen’s three attention networks: **alerting** (being ready), **orienting** (directing attention) and **executive control** (resolving conflict, staying on task).',
    'Early theories described a **filter** (Broadbent, 1958); later work showed unattended information is **attenuated**, not blocked (Treisman): your name can still break through.',
    '**Inattentional blindness**: about half of viewers miss a person in a gorilla suit while counting basketball passes (Simons and Chabris, 1999).',
    'Working memory holds about **four chunks** (Cowan, 2001), so attention decides what gets those slots.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Kinds of attention',
      blocks: [
        { t: 'table', head: ['Kind', 'What it is', 'Classroom example'], rows: [
          ['Selective', 'Focusing on one source while ignoring others', 'Listening to the teacher while a lawnmower runs outside'],
          ['Sustained (vigilance)', 'Keeping focus over time', 'Following a 20-minute explanation'],
          ['Divided', 'Attending to two things at once', 'Taking notes while listening; texting while listening (fails)'],
          ['Alternating (switching)', 'Moving focus between tasks', 'Switching between a worksheet and a video'],
          ['Executive control', 'Choosing what to attend to, resisting distraction', 'Ignoring a notification to finish a problem'],
        ] },
      ],
    },
    {
      id: 'networks',
      title: 'Posner’s three networks',
      blocks: [
        { t: 'cards', cols: 3, items: [
          { title: 'Alerting', body: 'Achieving and keeping a ready state. Linked to noradrenaline and right frontal and parietal areas. A warning signal (“Ready?”) speeds responses.' },
          { title: 'Orienting', body: 'Selecting information from the senses, often by moving the eyes. Parietal and frontal eye fields. A pointing hand or an arrow on a slide directs it.' },
          { title: 'Executive control', body: 'Resolving conflict between responses, planning and inhibiting. Anterior cingulate and prefrontal cortex. Develops through childhood into the twenties.' },
        ] },
      ],
    },
    {
      id: 'bottleneck',
      title: 'The bottleneck',
      blocks: [
        { t: 'p', text: 'In Colin Cherry’s 1953 “cocktail party” experiments, people listening to two messages in different ears could repeat one and remember almost nothing of the other, not even when it switched language. Yet later studies showed that about a third of people noticed their own name in the ignored ear (Moray, 1959; Conway et al., 2001, found it was mostly people with lower working memory capacity, whose focus was leakier). Unattended information is weakened, not completely blocked.' },
        { t: 'callout', tone: 'fact', title: 'The invisible gorilla', text: 'Simons and Chabris (1999) asked people to count passes in a video of basketball players. About half failed to notice a person in a gorilla suit walking through the middle and thumping their chest. Attention does not just sharpen what we look at; it can make other things effectively invisible.' },
      ],
    },
    {
      id: 'wm',
      title: 'Working memory: the four slots',
      blocks: [
        { t: 'p', text: 'George Miller’s famous “seven plus or minus two” (1956) counted items like digits that people can chunk. Nelson Cowan’s review (2001) put the true capacity at about **four chunks** when chunking is prevented. A chunk can be big if you have expertise: “1945” is one chunk to a historian. That is why experts can attend to more of a complex situation: they need fewer slots per idea.' },
        { t: 'dodont', do: [
          'Point at what to look at (signalling)',
          'Give one instruction at a time, or write multi-step instructions down',
          'Remove irrelevant noise and visuals',
          'Build chunks through practice so less attention is needed',
        ], dont: [
          'Talk over a busy slide with a different message',
          'Give five-step oral instructions to a class',
          'Assume students noticed something just because it was visible',
        ] },
      ],
    },
  ],
  sources: [
    'Posner, M. I., & Petersen, S. E. (1990). The attention system of the human brain. Annual Review of Neuroscience, 13, 25–42.',
    'Broadbent, D. E. (1958). Perception and Communication. Pergamon.',
    'Cherry, E. C. (1953). Some experiments on the recognition of speech, with one and two ears. Journal of the Acoustical Society of America, 25, 975–979.',
    'Simons, D. J., & Chabris, C. F. (1999). Gorillas in our midst. Perception, 28(9), 1059–1074.',
    'Cowan, N. (2001). The magical number 4 in short-term memory. Behavioral and Brain Sciences, 24(1), 87–114.',
    'Conway, A. R. A., Cowan, N., & Bunting, M. F. (2001). The cocktail party phenomenon revisited. Psychonomic Bulletin & Review, 8(2), 331–335.',
  ],
  related: ['attention/attention/attention-span-myths', 'teaching/theories/cognitive-load', 'medicine/start-here'],
}

export default guide
