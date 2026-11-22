import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The human brain weighs about 1.4 kilograms, holds roughly 86 billion nerve cells and uses around a fifth of the body’s energy while making up only about two per cent of its weight. It is organised in layers and networks, not in neat boxes. This guide gives you a map: an interactive atlas you can tap and filter by function, and the handful of big ideas (lobes, deep structures, networks) that make the rest of the neuroscience shelf easy to follow.',
  nutshell: [
    'The wrinkled outer layer is the **cerebral cortex**, divided into four lobes: **frontal** (planning, movement, speech), **parietal** (touch, space, attention), **temporal** (hearing, language, memory, faces) and **occipital** (vision).',
    'Deeper structures do much of the emotional and motivational work: the **amygdala**, **hippocampus**, **thalamus**, **hypothalamus** and the **basal ganglia** (including the reward hub, the nucleus accumbens).',
    'No region works alone. Functions come from **networks**: the **default mode**, **salience** and **executive** networks are the big three to know.',
    'Labels like “the emotional brain” or “the fear centre” are shorthand that hides how interconnected everything is. Use the map as a **guide to where**, not a full explanation of **how**.',
    'This is general education, not medical advice or a diagnostic tool.',
  ],
  sections: [
    {
      id: 'atlas',
      title: 'The atlas',
      lead: 'Switch views, tap a region, and use the function filter to see which regions contribute to fear, reward, memory, language and more.',
      blocks: [
        { t: 'brain-map' },
        { t: 'callout', tone: 'tip', title: 'Try this', text: 'Choose “Fear and threat” in the function filter and move through all three views. Then choose “Self and mind-wandering”. Notice that the lit-up regions change, and that several appear again and again. That overlap is the point of networks.' },
      ],
    },
    {
      id: 'lobes',
      title: 'The four lobes at a glance',
      blocks: [
        {
          t: 'table',
          head: ['Lobe', 'Where', 'Main contributions', 'If damaged (examples)'],
          rows: [
            ['Frontal', 'Front, behind the forehead', 'Planning, working memory, self-control, voluntary movement, speech production, social judgment', 'Poor planning and impulse control, changes in personality, slow or effortful speech, weakness on one side'],
            ['Parietal', 'Top and back', 'Touch, body position, spatial awareness, attention, number sense', 'Neglect of one side of space, trouble with direction, difficulty combining touch and sight'],
            ['Temporal', 'Side, near the ears', 'Hearing, language comprehension, face and object recognition, long-term memory', 'Trouble understanding speech, not recognising faces, memory loss'],
            ['Occipital', 'Back of the head', 'Vision', 'Blind areas in the visual field; trouble seeing movement or colour'],
          ],
          caption: 'Simplified. A symptom depends on exactly where and how large the damage is.',
        },
        { t: 'p', text: 'Two features are worth remembering. First, the **left and right hemispheres** are joined by the corpus callosum and each mostly controls the opposite side of the body. For most right-handed people, language depends mainly on the left hemisphere. Second, the cortex is **layered by function**: sensory areas at the back, movement areas in the middle, and association areas that combine information at the front and in between.' },
      ],
    },
    {
      id: 'deep',
      title: 'The structures below the surface',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Relay', title: 'Thalamus', body: 'A switchboard through which nearly all senses (except smell) pass on the way to the cortex. It also helps direct attention and regulate wakefulness.' },
            { tag: 'Body', title: 'Hypothalamus', body: 'Keeps the body in balance (temperature, hunger, thirst, sleep) and drives the stress hormone system. It is small but powerful.' },
            { tag: 'Emotion', title: 'Amygdala', body: 'Flags what matters, especially potential threats, and triggers a quick bodily response. Not just a fear centre.' },
            { tag: 'Memory', title: 'Hippocampus', body: 'Forms new memories of events and places and puts emotions in context.' },
            { tag: 'Reward', title: 'Basal ganglia', body: 'A set of structures (caudate, putamen, nucleus accumbens and others) involved in movement, habit, reward and motivation.' },
            { tag: 'Body', title: 'Insula', body: 'A fold of cortex that monitors the inside of the body, central to feeling emotions physically.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'What about the “limbic system”?', text: 'Textbooks long described a “limbic system” as the emotional brain. Many neuroscientists now consider the term too loose: the structures involved are also important for memory, attention and decisions, and emotion also depends on the cortex. It is still a handy label for the group of regions around the centre of the brain, as long as you do not read it as a separate “emotional brain” fighting a “rational brain”.' },
      ],
    },
    {
      id: 'networks',
      title: 'Networks: how regions work together',
      blocks: [
        { t: 'p', text: 'Imaging studies show that regions with similar activity patterns form large-scale networks. Three of them are especially useful.' },
        {
          t: 'table',
          head: ['Network', 'Main hubs', 'Active when…'],
          rows: [
            ['Default mode', 'Medial prefrontal cortex, posterior cingulate and precuneus, parts of the parietal and temporal lobes', 'The mind is wandering, remembering, imagining the future or thinking about oneself and others'],
            ['Salience', 'Anterior insula, anterior cingulate cortex (and amygdala)', 'Something important, surprising or emotionally significant happens; it helps decide what to attend to'],
            ['Executive (frontoparietal)', 'Dorsolateral prefrontal cortex, posterior parietal cortex', 'You hold information in mind, plan, solve a problem or follow a rule'],
          ],
          caption: 'Often called the triple-network model. The boundaries are approximate and researchers describe more networks than these.',
        },
        { t: 'callout', tone: 'fact', title: 'A switch, roughly', text: 'A popular account says the salience network helps switch you between daydreaming (default mode) and focused work (executive). It is a useful picture, though the real dynamics are more complicated.' },
      ],
    },
    {
      id: 'lessons',
      title: 'Famous cases, and what they do and do not show',
      blocks: [
        {
          t: 'table',
          head: ['Case', 'What happened', 'What it taught us (with caveats)'],
          rows: [
            ['Phineas Gage (1848)', 'An iron rod passed through his frontal lobe in a railway blasting accident; he survived', 'Frontal damage can change social behaviour. Later accounts of his personality change are often exaggerated, so the original story should be treated with caution.'],
            ['Patient H.M. (1953)', 'Both hippocampi were removed to treat severe epilepsy; he could no longer form new memories of events', 'The hippocampus is needed for new episodic memories; skills could still be learnt, showing there are separate memory systems.'],
            ['Patient S.M.', 'Has very rare damage to the amygdala on both sides', 'Reduced fear of things like snakes and spiders, but panic could still be triggered by breathing carbon dioxide. Fear has multiple routes.'],
          ],
        },
        { t: 'links', items: [{ path: 'medicine/neuroscience/neurons-and-chemistry', note: 'Next: how neurons communicate, and the chemicals' }, { path: 'medicine/neuroscience/emotion-circuits', note: 'The circuits behind fear, reward and empathy' }] },
      ],
    },
  ],
  sources: [
    'Azevedo, F. A. C., et al. (2009). Equal numbers of neuronal and nonneuronal cells make the human brain an isometrically scaled-up primate brain. Journal of Comparative Neurology.',
    'Menon, V. (2011). Large-scale brain networks and psychopathology: a unifying triple network model. Trends in Cognitive Sciences.',
    'Scoville, W. B., and Milner, B. (1957). Loss of recent memory after bilateral hippocampal lesions. Journal of Neurology, Neurosurgery and Psychiatry.',
    'Kandel, E. R., et al. Principles of Neural Science (textbook).',
    'Macmillan, M. (2000). An Odd Kind of Fame: Stories of Phineas Gage.',
  ],
  related: ['medicine/neuroscience/neurons-and-chemistry', 'medicine/neuroscience/emotion-circuits', 'medicine/neuroscience/making-sense'],
}

export default guide
