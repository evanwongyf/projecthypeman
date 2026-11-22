import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Memory is not a single recording. The brain holds several kinds of memory in different places, and the process of storing an experience continues for days after it happens, helped by sleep. The cellular basis is simple and elegant: connections that are used get stronger. This guide explains the types of memory, the role of the hippocampus, what sleep does, how synapses change, and how to turn the biology into better studying.',
  nutshell: [
    'There are several memory systems: **working memory** (a few seconds), **episodic** (events), **semantic** (facts), **procedural** (skills and habits) and **emotional** memory.',
    'The **hippocampus** binds the elements of an experience into one episode and helps move it into long-term storage in the cortex over days to years, a process called **consolidation**.',
    '**Sleep** is when much consolidation happens; replay of the day’s activity strengthens what matters.',
    '**Synaptic plasticity**: connections between neurons strengthen with use (long-term potentiation) and weaken without it. “Cells that fire together wire together” is a good rule of thumb.',
    'The best study methods (**retrieval practice, spacing, sleep**) work because they use these mechanisms.',
  ],
  sections: [
    {
      id: 'types',
      title: 'The kinds of memory',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'What it holds', 'Main brain areas'],
          rows: [
            ['Working memory', 'What you are thinking about right now, for seconds', 'Prefrontal and parietal cortex'],
            ['Episodic', 'Events you experienced: what, where, when', 'Hippocampus, then cortex'],
            ['Semantic', 'Facts and meanings: Paris is the capital of France', 'Temporal and other association cortex'],
            ['Procedural', 'Skills and habits: riding a bike, typing', 'Basal ganglia, cerebellum, motor cortex'],
            ['Emotional', 'The feeling attached to a memory, and fear learning', 'Amygdala, working with the hippocampus'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Patient H.M.', text: 'After surgery removed both of his hippocampi, H.M. could not form new memories of events or facts, but he could learn new motor skills (for example mirror drawing) without remembering the practice. This showed that different memory types depend on different systems.' },
      ],
    },
    {
      id: 'hippocampus',
      title: 'The hippocampus and consolidation',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Encoding', body: 'The sights, sounds, place and emotions of an experience are processed by different cortical areas. The hippocampus links them into one memory trace.' },
            { title: 'Short-term storage', body: 'For hours to days the memory depends heavily on the hippocampus.' },
            { title: 'Replay during sleep', body: 'In deep sleep the hippocampus replays recent patterns, in a conversation with the cortex, which gradually strengthens the cortical connections.' },
            { title: 'Long-term storage', body: 'Over time the memory depends less on the hippocampus and more on the cortex, and is integrated with what you already know.' },
            { title: 'Retrieval and reconsolidation', body: 'Each time you recall a memory it becomes briefly flexible and is stored again, which is why memories can change, for better or worse.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Memories are rebuilt, not replayed', text: 'Because recall reconstructs a memory from pieces, details can shift and false memories can form, especially after leading questions. Vivid memories are not necessarily accurate ones.' },
      ],
    },
    {
      id: 'plasticity',
      title: 'Plasticity: how connections change',
      blocks: [
        { t: 'p', text: 'In 1949 Donald Hebb proposed that when one neuron repeatedly helps to fire another, the connection between them strengthens. In 1973 Bliss and Lømo found a long-lasting increase in the strength of synapses in the hippocampus after intense stimulation, now called **long-term potentiation (LTP)**. At the molecular level, glutamate acts on NMDA receptors, calcium enters, and the cell adds more receptors and eventually grows new structure.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Strengthen', title: 'Use it', body: 'Repeated, spaced retrieval strengthens a pathway, making it faster and more reliable.' },
            { tag: 'Weaken', title: 'Lose it', body: 'Connections that are not used weaken and may be pruned. This is part of why unused knowledge fades.' },
            { tag: 'Adult brain', title: 'New neurons?', body: 'New neurons are born in the adult hippocampus in many mammals. Whether and how much this happens in adult humans is still debated.' },
            { tag: 'Whole brain', title: 'Plasticity continues', body: 'The brain changes throughout life in response to learning and experience (for example, in the hippocampus of London taxi drivers and the motor cortex of musicians), though young brains change most readily.' },
          ],
        },
      ],
    },
    {
      id: 'use-it',
      title: 'Using this to learn better',
      blocks: [
        {
          t: 'table',
          head: ['Method', 'Why it works (biology)'],
          rows: [
            ['Retrieval practice (testing yourself)', 'Recall strengthens the pathway and triggers reconsolidation, more than rereading'],
            ['Spaced repetition', 'Spacing gives consolidation time between sessions and makes each recall slightly harder, which strengthens the trace'],
            ['Sleep after learning', 'Replay and consolidation during deep sleep; sleep before learning also helps the hippocampus take in new material'],
            ['Making connections', 'Linking new facts to what you know gives the cortex more cues to retrieve from'],
            ['Emotional relevance', 'Emotion tags memories via the amygdala and noradrenaline, so interest and meaning help'],
            ['Exercise', 'Linked to better hippocampal function and growth factors that support plasticity'],
          ],
        },
        { t: 'links', items: [{ path: 'memory/how-memory-works', note: 'A learner’s guide to memory' }, { path: 'memory/active-recall', note: 'Active recall, step by step' }, { path: 'memory/spaced-repetition', note: 'Spaced repetition systems' }, { path: 'memory/sleep-and-body', note: 'Sleep, exercise and memory' }] },
      ],
    },
  ],
  sources: [
    'Hebb, D. O. (1949). The Organization of Behavior.',
    'Bliss, T. V. P., and Lømo, T. (1973). Long-lasting potentiation of synaptic transmission in the dentate area of the anaesthetized rabbit. Journal of Physiology.',
    'Scoville, W. B., and Milner, B. (1957). Loss of recent memory after bilateral hippocampal lesions.',
    'Diekelmann, S., and Born, J. (2010). The memory function of sleep. Nature Reviews Neuroscience.',
    'Maguire, E. A., et al. (2000). Navigation-related structural change in the hippocampi of taxi drivers. PNAS.',
    'Roediger, H. L., and Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science.',
  ],
  related: ['medicine/neuroscience/making-sense', 'medicine/neuroscience/optimising-intelligence', 'memory/how-memory-works'],
}

export default guide
