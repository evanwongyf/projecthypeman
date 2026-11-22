import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cognitivism opens the "black box" behaviourism ignored. It treats the mind as a system that takes in information, holds it briefly, makes sense of it and stores it, and asks how teaching can help each stage.',
  nutshell: [
    'Information passes from the senses, through a small **working memory**, into a vast **long-term memory**.',
    'Working memory holds only a handful of new items at once, so it is the bottleneck of learning.',
    'Long-term memory is organised into **schemas**: networks of connected knowledge that make new learning easier.',
    'What the learner already knows is the biggest single factor in what they will learn next.',
    '"Memory is the residue of thought": learners remember what they think hard about.',
  ],
  sections: [
    {
      id: 'model',
      title: 'The memory model',
      lead: 'Three stores that information moves between.',
      blocks: [
        {
          t: 'p',
          text: 'In 1968 Atkinson and Shiffrin described memory as a series of stores. The details have been revised many times since, but the broad picture is still the backbone of how cognitive scientists think about learning.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Sensory memory', body: 'Everything you see and hear is held for well under a second or two. Almost all of it is lost. Only what you **pay attention** to moves on.' },
            { title: 'Working memory', body: 'The mental workspace where you think. It holds new information for seconds unless you rehearse it, and it can juggle only about four new chunks at once (Cowan, 2001). Miller’s famous "seven, plus or minus two" (1956) was an earlier, looser estimate.' },
            { title: 'Long-term memory', body: 'A store with no known limit, where knowledge can last a lifetime. Information gets here by being **processed**: connected, explained, used. It comes back to working memory when it is **retrieved**.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Why this matters for teaching',
          text: 'Working memory is tiny for new material but effectively unlimited for material already in long-term memory, because a whole schema can be pulled in as one chunk. That is why experts can handle complexity that overwhelms beginners. [Cognitive load theory](@teaching/theories/cognitive-load) builds a whole approach to lesson design on this.',
        },
      ],
    },
    {
      id: 'working-memory',
      title: 'Inside working memory',
      lead: 'Baddeley and Hitch’s multi-part model.',
      blocks: [
        {
          t: 'p',
          text: 'In 1974 Baddeley and Hitch argued that working memory is not one box but a team of parts. Their model explains why we can listen and look at the same time more easily than we can listen to two things at once.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Central executive', body: 'Directs attention and coordinates the other parts. It is the "manager" and it is easily overloaded.' },
            { title: 'Phonological loop', body: 'Holds speech and sounds, like the inner voice repeating a phone number.' },
            { title: 'Visuospatial sketchpad', body: 'Holds images, positions and spatial layouts.' },
            { title: 'Episodic buffer', body: 'Added in 2000. Binds information from the other parts and from long-term memory into single episodes.' },
          ],
        },
        {
          t: 'p',
          text: 'Because words and pictures use partly separate channels, presenting a diagram with spoken explanation can use working memory more efficiently than a diagram with a wall of text. This is the basis of [dual coding](@teaching/techniques/learning-strategies/dual-coding).',
        },
      ],
    },
    {
      id: 'schemas',
      title: 'Schemas and prior knowledge',
      lead: 'New knowledge sticks to old knowledge.',
      blocks: [
        {
          t: 'p',
          text: 'A **schema** is an organised cluster of knowledge about something: what a restaurant visit involves, how fractions behave, what a sonnet is. Frederic Bartlett (1932) showed that people remember stories by fitting them into schemas they already have, and distort the parts that do not fit.',
        },
        {
          t: 'quote',
          text: 'The most important single factor influencing learning is what the learner already knows. Ascertain this and teach him accordingly.',
          by: 'David Ausubel, Educational Psychology: A Cognitive View (1968)',
        },
        {
          t: 'list',
          items: [
            '**Activate prior knowledge** before new content: a quick recall question, a picture, a link to last lesson.',
            'Use **advance organisers** (Ausubel): a short overview that gives learners a structure to hang details on.',
            'Make **connections explicit**: "This is like photosynthesis in reverse."',
            'Watch for **misconceptions**. A wrong schema does not disappear when you tell learners the right answer; it has to be confronted and replaced.',
          ],
        },
      ],
    },
    {
      id: 'processing',
      title: 'Processing makes memories',
      lead: 'Learners remember what they think about.',
      blocks: [
        {
          t: 'p',
          text: 'Craik and Lockhart’s **levels of processing** idea (1972) holds that thinking about meaning leads to stronger memories than thinking about surface features. Asking "does this word rhyme with cat?" produces weaker memory than "does this word fit the sentence?"',
        },
        {
          t: 'quote',
          text: 'Memory is the residue of thought.',
          by: 'Daniel Willingham, Why Don’t Students Like School? (2009)',
        },
        {
          t: 'example',
          title: 'Same topic, different thinking',
          lines: [
            { label: 'Shallow', text: 'Learners make a colourful poster about the Romans. Most of their thinking goes into lettering and layout, so that is what they remember.' },
            { label: 'Deep', text: 'Learners decide which three Roman inventions changed daily life the most and justify their choice. Their thinking is about the Romans, so that is what they remember.' },
          ],
        },
        {
          t: 'p',
          text: 'Getting information out again is itself a powerful learning event. Every successful act of [retrieval](@teaching/techniques/learning-strategies/retrieval-practice) makes the memory easier to find next time, and spacing those retrievals out ([spaced practice](@teaching/techniques/learning-strategies/spaced-practice)) makes it last.',
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Teaching with the mind in mind',
      lead: 'Practical moves that follow from the model.',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Present new material in **small steps**, checking understanding after each.',
            'Direct attention to what matters, and remove what does not.',
            'Connect new ideas to what learners already know.',
            'Ask questions that make learners think about **meaning**.',
            'Build in retrieval and spacing so knowledge is revisited.',
            'Help learners build fluency in basics so working memory is freed for harder thinking.',
          ],
          dont: [
            'Pack slides with text you then read aloud.',
            'Introduce many new terms at once.',
            'Assume engagement equals learning: busy is not the same as thinking.',
            'Treat a correct answer today as proof of learning next month.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Atkinson, R. C., & Shiffrin, R. M. (1968). Human memory: A proposed system and its control processes. In *The Psychology of Learning and Motivation* (Vol. 2, pp. 89–195). Academic Press.',
    'Baddeley, A. D., & Hitch, G. (1974). Working memory. In *The Psychology of Learning and Motivation* (Vol. 8, pp. 47–89). Academic Press.',
    'Bartlett, F. C. (1932). *Remembering*. Cambridge University Press.',
    'Craik, F. I. M., & Lockhart, R. S. (1972). Levels of processing. *Journal of Verbal Learning and Verbal Behavior, 11*(6), 671–684.',
    'Cowan, N. (2001). The magical number 4 in short-term memory. *Behavioral and Brain Sciences, 24*(1), 87–114.',
    'Willingham, D. T. (2009). *Why don’t students like school?* Jossey-Bass.',
  ],
  related: ['teaching/theories/cognitive-load', 'teaching/theories/constructivism', 'teaching/techniques/learning-strategies/retrieval-practice', 'teaching/techniques/learning-strategies/dual-coding'],
}

export default guide
