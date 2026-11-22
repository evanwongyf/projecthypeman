import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Explaining is the teacher’s most used and least practised skill. A good explanation connects to what learners know, moves in small steps, uses examples and pictures, and checks it has landed. It can be planned and rehearsed like anything else.',
  nutshell: [
    'Start from what learners already know, and say where the explanation is going.',
    'One idea at a time, in plain language, with key terms introduced carefully.',
    'Use concrete **examples and non-examples**, **analogies**, and **visuals**.',
    'Stop and check understanding before moving on.',
  ],
  sections: [
    {
      id: 'plan',
      title: 'Planning an explanation',
      lead: 'Five questions to answer first.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'What exactly do I want them to understand?', body: 'Write it in one sentence. If you cannot, the explanation will wander.' },
            { title: 'What must they already know?', body: 'List the prerequisites and check them first.' },
            { title: 'What are the likely misconceptions?', body: 'Plan how to confront them.' },
            { title: 'What examples, non-examples and analogies will I use?', body: 'Choose them in advance. Improvised analogies are often misleading.' },
            { title: 'How will I know they have understood?', body: 'Plan a question that would reveal a misunderstanding.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Try the [Feynman technique](@teaching/techniques/learning-strategies/feynman) on your own explanation before teaching: explain it aloud as if to a beginner, and notice where you stumble or reach for jargon.',
        },
      ],
    },
    {
      id: 'structure',
      title: 'Structure',
      lead: 'Give learners a map.',
      blocks: [
        {
          t: 'list',
          items: [
            '**Hook to prior knowledge**: "You know how a bike pump gets warm when you use it? Today we’ll find out why."',
            '**Signpost**: "There are three parts to this. First… second… finally…"',
            '**Small steps**: one idea, an example, a quick check, then the next idea.',
            '**Summarise**: pull the steps together at the end, and link back to the hook.',
          ],
        },
      ],
    },
    {
      id: 'tools',
      title: 'Tools for clarity',
      lead: 'Examples, analogies, pictures, stories.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Examples and non-examples', body: 'Several varied examples, and similar-looking cases that are not examples, mark the boundaries of a concept. See [concrete examples](@teaching/techniques/learning-strategies/concrete-examples).' },
            { title: 'Analogies', body: 'Link the unfamiliar to the familiar: electric current as water in pipes. Then say where the analogy breaks down, so it does not create a new misconception.' },
            { title: 'Visuals', body: 'Draw as you talk. A diagram built step by step keeps attention on the current step. See [dual coding](@teaching/techniques/learning-strategies/dual-coding).' },
            { title: 'Stories', body: 'People remember stories. Frame content as a problem someone faced and how it was solved (Willingham, 2009).' },
            { title: 'Precise vocabulary', body: 'Introduce the technical term after the idea is understood, write it down, and use it consistently.' },
            { title: 'Contrast', body: 'Explain an idea by what it is not: weather versus climate, speed versus velocity.' },
          ],
        },
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Keep explanations short, then let learners do something with the idea.',
            'Pause after key points.',
            'Stand still and face the class for important points.',
            'Check understanding with questions that require thinking, not "Does that make sense?"',
            'Be ready with a second explanation using a different example or representation.',
          ],
          dont: [
            'Talk over slides full of text.',
            'Introduce several new terms in one sentence.',
            'Digress in the middle of an explanation.',
            'Repeat the same explanation louder when learners do not understand.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Wragg, E. C., & Brown, G. (2001). *Explaining in the secondary school*. RoutledgeFalmer.',
    'Tharby, A. (2018). *How to explain absolutely anything to absolutely anyone*. Crown House.',
    'Willingham, D. T. (2009). *Why don’t students like school?* Jossey-Bass.',
  ],
  related: ['teaching/techniques/learning-strategies/feynman', 'teaching/techniques/instruction/modelling', 'teaching/techniques/learning-strategies/concrete-examples'],
}

export default guide
