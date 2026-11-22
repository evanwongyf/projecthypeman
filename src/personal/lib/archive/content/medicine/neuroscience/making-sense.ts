import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'You do not passively receive the world; your brain builds a model of it and checks that model against the senses. This is sense-making, and it happens at every scale: a flash of light becomes an object, an object becomes “my friend’s face”, and a stream of words becomes a meaning. This guide follows the signal from senses to understanding, then introduces the idea of prediction, the attention systems that choose what gets in, the networks that handle thinking, and the brain’s language machinery.',
  nutshell: [
    'Senses reach the cortex via the **thalamus** (smell is the exception). Primary sensory areas extract simple features; association areas combine them into objects and meaning.',
    'Vision splits into a **“what” pathway** (to the temporal lobe, for identity) and a **“where/how” pathway** (to the parietal lobe, for space and action).',
    'The brain is a **prediction machine**: it constantly guesses what comes next and updates when it is wrong. Surprise (prediction error) draws attention and drives learning.',
    '**Attention** is a competition. The salience network flags what matters; the executive network keeps you on task; the default mode network wanders.',
    '**Language** depends mainly on the left hemisphere for most people: Broca’s area for production, Wernicke’s area for comprehension, linked by a bundle of fibres.',
  ],
  sections: [
    {
      id: 'pathway',
      title: 'From signal to meaning',
      blocks: [
        {
          t: 'flow',
          title: 'The path of a visual signal',
          nodes: [
            { label: 'Eye', sub: 'light becomes a signal', tone: 'data' },
            { label: 'Thalamus', sub: 'relay and filter', tone: 'process' },
            { label: 'Primary visual cortex', sub: 'edges, orientation, motion', tone: 'model' },
            { label: 'Higher visual areas', sub: 'shapes, colour, objects, faces', tone: 'model' },
            { label: 'Association cortex', sub: 'meaning, memory, action', tone: 'human' },
          ],
          caption: 'Other senses follow a similar pattern: hearing through the auditory cortex in the temporal lobe, touch through the somatosensory strip.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'What', title: 'The ventral (“what”) stream', body: 'Runs from the occipital to the temporal lobe. It tells you what an object is: a face, a word, a tool. Damage can cause trouble recognising faces (prosopagnosia).' },
            { tag: 'Where', title: 'The dorsal (“where and how”) stream', body: 'Runs from the occipital to the parietal lobe. It tells you where things are and guides reaching and grasping. Damage can cause trouble judging space or reaching accurately.' },
            { tag: 'Combine', title: 'Multisensory areas', body: 'Parts of the parietal and temporal cortex combine sight, sound and touch, which is why watching someone’s lips helps you hear them.' },
            { tag: 'Body', title: 'Body maps', body: 'The somatosensory and motor strips hold maps of the body, with large areas for the hands and mouth, which need fine control.' },
          ],
        },
      ],
    },
    {
      id: 'prediction',
      title: 'The brain as a prediction machine',
      blocks: [
        { t: 'p', text: 'A leading idea, often called **predictive processing**, is that higher areas of the brain send down predictions of what the senses should report, and lower areas send back only the **prediction error**, the part that was not expected. You do not process the whole scene afresh each moment; you update a running model. It explains many things: why familiar things fade from awareness, why surprises pop out, why illusions fool us, and why expectation changes what we hear and see.' },
        {
          t: 'example',
          title: 'A quick demonstration',
          lines: [
            { label: 'Read', text: '“Aoccdrnig to a rscheearch, it deosn’t mttaer in waht oredr the ltteers in a wrod are.”' },
            { label: 'What happened', text: 'You probably read it easily. Your brain filled in the expected words from the context, then checked the letters loosely against that guess.' },
            { label: 'Lesson', text: 'Perception is partly expectation. This is also why proofreading your own writing is so hard: you see what you meant to write.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'A theory, not a settled fact', text: 'Predictive processing is a major framework and fits a lot of data, but researchers still debate its details and how literally the brain implements it. Treat it as a powerful way of thinking, not as proven in full.' },
      ],
    },
    {
      id: 'attention',
      title: 'Attention: what gets in',
      blocks: [
        { t: 'p', text: 'You cannot process everything, so the brain selects. Attention has two broad flavours: **bottom-up** (a loud noise or a movement grabs you) and **top-down** (you decide to look for a red car).' },
        {
          t: 'table',
          head: ['System', 'Main areas', 'Role'],
          rows: [
            ['Salience network', 'Anterior insula, anterior cingulate, amygdala', 'Detects what is important or surprising and can interrupt what you are doing'],
            ['Executive (frontoparietal) network', 'Dorsolateral prefrontal and posterior parietal cortex', 'Holds a goal and keeps attention on it; resists distraction'],
            ['Default mode network', 'Medial prefrontal cortex, posterior cingulate and precuneus', 'Active in rest and mind-wandering; thinking about yourself, others and the past or future'],
            ['Arousal systems', 'Brainstem (locus coeruleus, reticular system), thalamus', 'Set the general level of alertness; noradrenaline and acetylcholine sharpen focus'],
          ],
        },
        {
          t: 'dodont',
          do: ['Reduce notifications and clutter so that bottom-up grabs are fewer.', 'Work in focused blocks with short breaks.', 'Let your mind wander sometimes: the default mode network supports insight and planning.'],
          dont: ['Assume you can multitask: switching between tasks costs time and accuracy.', 'Fight wandering with force; just notice it and return.'],
        },
      ],
    },
    {
      id: 'thinking',
      title: 'Thinking, reasoning and understanding',
      blocks: [
        { t: 'p', text: 'Sense-making at a higher level, understanding a problem, an argument or a story, depends on the prefrontal cortex holding information in **working memory**, the parietal cortex for number and spatial reasoning, and the temporal lobes for meaning and stored knowledge. The hippocampus links new information to what you already know. Understanding feels like a click when your model fits the new information.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Working memory', body: 'A small workspace (often described as holding roughly four chunks) in the prefrontal cortex. Its limit is one reason that complex ideas must be broken into steps.' },
            { title: 'Insight', body: 'A sudden “aha” is linked to a burst of activity in the right temporal lobe, often preceded by quieter mental states. Incubation, stepping away, often helps.' },
            { title: 'Analogy', body: 'Reasoning by comparison draws on the frontal and parietal networks and relies on well-organised stored knowledge. Experts see deeper patterns than novices.' },
            { title: 'Metacognition', body: 'Thinking about your own thinking depends on the medial and anterior prefrontal cortex, and is a skill that can be trained.' },
          ],
        },
      ],
    },
    {
      id: 'language',
      title: 'Language',
      blocks: [
        {
          t: 'table',
          head: ['Area', 'Where (left hemisphere for most people)', 'Role', 'If damaged'],
          rows: [
            ['Broca’s area', 'Left inferior frontal gyrus', 'Producing speech and grammar', 'Slow, effortful speech with relatively good understanding'],
            ['Wernicke’s area', 'Left posterior superior temporal region', 'Understanding spoken and written language', 'Fluent but meaningless speech; poor comprehension'],
            ['Arcuate fasciculus', 'A bundle of fibres joining the two areas', 'Connects understanding with speech', 'Trouble repeating what you hear'],
            ['Angular gyrus and others', 'Parietal and temporal', 'Reading, meaning, linking words to concepts', 'Reading and writing problems'],
          ],
          caption: 'The classic model is a useful starting point, but modern imaging shows language uses a much wider network, including the right hemisphere for tone and context.',
        },
        { t: 'links', items: [{ path: 'medicine/neuroscience/memory-and-learning', note: 'Next: how understanding becomes memory' }, { path: 'medicine/neuroscience/brain-map', note: 'Return to the atlas' }] },
      ],
    },
  ],
  sources: [
    'Mishkin, M., Ungerleider, L. G., and Macko, K. A. (1983) and Goodale, M. A., and Milner, A. D. (1992). Two visual pathways (classic papers).',
    'Clark, A. (2013). Whatever next? Predictive brains, situated agents, and the future of cognitive science. Behavioral and Brain Sciences.',
    'Menon, V., and Uddin, L. Q. (2010). Saliency, switching, attention and control: a network model of insula function. Brain Structure and Function.',
    'Cowan, N. (2001). The magical number 4 in short-term memory. Behavioral and Brain Sciences.',
    'Hickok, G., and Poeppel, D. (2007). The cortical organization of speech processing. Nature Reviews Neuroscience.',
  ],
  related: ['medicine/neuroscience/brain-map', 'medicine/neuroscience/memory-and-learning', 'medicine/neuroscience/intelligence'],
}

export default guide
