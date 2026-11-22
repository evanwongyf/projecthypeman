import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Forgetting is not a flaw; it keeps your memory from clogging with useless detail. But when you forget things you need, it helps to know why, because each cause has a different fix.',
  nutshell: [
    '**Never encoded**: you did not really pay attention or process it in the first place.',
    '**Fading**: unused memories get harder to reach over time. Fix: spaced review.',
    '**Interference**: similar memories get mixed up. Fix: compare them directly and learn the differences.',
    '**Retrieval failure**: it is in there, but you cannot find it. Fix: practise retrieval, and use cues.',
  ],
  sections: [
    {
      id: 'causes',
      title: 'Four reasons we forget',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'It never got in', body: 'Most people cannot draw a coin accurately despite seeing thousands (Nickerson & Adams, 1979). Seeing is not the same as encoding. If you read while distracted, the information may never have been stored.' },
            { title: 'It faded', body: 'Ebbinghaus showed forgetting is steep at first, then slows. Memories that are not used become harder to retrieve. See [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).' },
            { title: 'Something else got in the way', body: '**Interference**: old learning disrupts new (proactive), or new learning disrupts old (retroactive). Learning Spanish can make your French vocabulary slip.' },
            { title: 'You cannot find it', body: 'The memory is stored but the cue is missing. The "tip of the tongue" feeling is this: you know you know it. It often comes back later with the right cue.' },
          ],
        },
      ],
    },
    {
      id: 'context',
      title: 'Context and cues',
      blocks: [
        {
          t: 'p',
          text: 'Memories are linked to the context in which they were learned. In a famous study, divers who learned words underwater recalled them better underwater, and those who learned on land recalled better on land (Godden & Baddeley, 1975). The effect is usually small in real life, but the principle matters: memories are easier to retrieve when the cues at recall match the cues at learning.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Make memories portable',
          text: 'Study in varied places and ways, and practise recalling without your notes, so memories are not tied to one room or one page. In the exam, if you are stuck, picture where you were when you learned it or the page it was on.',
        },
      ],
    },
    {
      id: 'fixes',
      title: 'Fixes',
      blocks: [
        {
          t: 'table',
          head: ['Cause', 'Fix'],
          rows: [
            ['Never encoded', 'Remove distractions. Process for meaning: explain, ask why, connect.'],
            ['Faded', 'Review on a spaced schedule; use flashcards with [spaced repetition](@memory/spaced-repetition).'],
            ['Interference', 'Put similar things side by side and learn the differences (a comparison [chart](@note-taking/methods/charting)). Mix them in practice ([interleaving](@teaching/techniques/learning-strategies/interleaving)).'],
            ['Retrieval failure', 'Practise retrieval often; build many connections so there are many cues; vary where you study.'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Nickerson, R. S., & Adams, M. J. (1979). Long-term memory for a common object. *Cognitive Psychology, 11*(3), 287–307.',
    'Godden, D. R., & Baddeley, A. D. (1975). Context-dependent memory in two natural environments: On land and underwater. *British Journal of Psychology, 66*(3), 325–331.',
    'Tulving, E., & Thomson, D. M. (1973). Encoding specificity and retrieval processes in episodic memory. *Psychological Review, 80*(5), 352–373.',
  ],
  related: ['memory/how-memory-works', 'memory/spaced-repetition', 'teaching/techniques/learning-strategies/interleaving'],
}

export default guide
