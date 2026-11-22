import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'If emotion circuits set off a reaction, what lets you pause, reconsider and choose a response? A large part of the answer is the prefrontal cortex, working with the anterior cingulate and the body’s stress systems. Understanding that machinery gives you a practical toolkit: the techniques below are the ones with the best evidence, explained by what they do in the brain.',
  nutshell: [
    '**Emotion regulation** is the set of processes that influence which emotions you have, when, and how you experience and express them.',
    'The **prefrontal cortex** can dampen the amygdala’s response. **Reappraisal** (changing how you interpret a situation) is the best-studied way of using this.',
    '**Stress** raises cortisol and adrenaline; short bursts sharpen focus but chronic stress impairs prefrontal function and memory.',
    'Body-based tools (**slow breathing, exercise, sleep**) work from the bottom up and are the most reliable in the moment.',
    'Regulation is not suppression. Pushing feelings down tends to backfire; understanding and re-framing them works better.',
  ],
  sections: [
    {
      id: 'top-down',
      title: 'Top-down: the prefrontal brake',
      blocks: [
        { t: 'p', text: 'Imaging studies of people who deliberately reinterpret a distressing picture (“this is a staged scene, not a real injury”) show greater activity in lateral and medial prefrontal regions and less in the amygdala. In other words, thinking differently about a situation changes the brain’s alarm response. This is called **cognitive reappraisal**, and it is the best-supported thinking technique for emotion.' },
        {
          t: 'table',
          head: ['Strategy', 'What you do', 'Typical effect'],
          rows: [
            ['Reappraisal', 'Reinterpret the situation (“what else could this mean?”, “what would I tell a friend?”)', 'Reduces negative feeling and amygdala activity, with little cost to memory'],
            ['Distancing', 'View the situation from outside, as an observer, or use your own name in the third person', 'Reduces distress in lab studies'],
            ['Labelling (affect labelling)', 'Put the feeling into words (“I feel anxious and embarrassed”)', 'Associated with lower amygdala response in some studies'],
            ['Suppression', 'Hide the emotion and show nothing', 'Reduces expression but not the feeling; often costs attention and memory'],
            ['Distraction', 'Turn attention to something else', 'Works well in the short term, especially for intense feelings; not a long-term fix'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'When reappraisal fails',
          text: 'Reappraisal works best for moderate feelings. For very intense emotion, the prefrontal cortex is least effective, and distraction or a body-based tool (below) is easier. Pick the tool for the intensity.',
        },
      ],
    },
    {
      id: 'stress',
      title: 'The stress response and your thinking',
      blocks: [
        {
          t: 'flow',
          title: 'Two stress pathways',
          nodes: [
            { label: 'Threat noticed', sub: 'amygdala, hypothalamus', tone: 'data' },
            { label: 'Sympathetic nervous system', sub: 'adrenaline: seconds', tone: 'process' },
            { label: 'HPA axis', sub: 'hypothalamus → pituitary → adrenal glands → cortisol: minutes', tone: 'process' },
            { label: 'Effects', sub: 'energy, alertness, narrowed attention', tone: 'output' },
            { label: 'Recovery', sub: 'feedback: cortisol turns the system down', tone: 'human' },
          ],
        },
        {
          t: 'table',
          head: ['Level of stress', 'Effect on thinking'],
          rows: [
            ['Brief and moderate', 'Sharper attention and memory for what matters'],
            ['Very high or sudden', 'The prefrontal cortex is impaired; the body takes over. Reasoning, flexible thinking and recall suffer'],
            ['Chronic', 'Linked with poorer sleep, mood and memory. In animals it shrinks the connections in the hippocampus and prefrontal cortex; in people it is associated with similar changes, though cause and effect are harder to prove'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'The Yerkes-Dodson idea', text: 'Performance is often described as best at a moderate level of arousal, poorer when too low (bored) or too high (panicked). The “inverted U” is a rough guide, not a precise law.' },
      ],
    },
    {
      id: 'bottom-up',
      title: 'Bottom-up: the body tools',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Seconds', title: 'Slow breathing', body: 'Breathing out for longer than in (for example in for four, out for six) at about six breaths a minute slows the heart and activates the parasympathetic (calming) branch. It reliably reduces arousal in the short term.' },
            { tag: 'Minutes', title: 'Movement', body: 'A brisk walk or other exercise burns off stress hormones, changes brain chemistry and often improves mood quickly. Regular exercise lowers stress reactivity over time.' },
            { tag: 'Minutes', title: 'Cold water on the face, a change of scene', body: 'Can trigger the diving reflex, slowing the heart and breaking a spiral; changing place changes cues.' },
            { tag: 'Days', title: 'Sleep', body: 'After a poor night, the amygdala reacts more strongly and its link with the prefrontal cortex weakens in imaging studies. Protecting sleep is one of the best protections for mood.' },
            { tag: 'Weeks', title: 'Mindfulness and meditation', body: 'Regular practice is associated with lower stress and modest improvements in attention and mood. Effects are real but moderate, and vary by person and programme.' },
            { tag: 'Always', title: 'Connection', body: 'Talking to someone you trust, or simply being near them, reduces stress responses. Social support is a strong protector.' },
          ],
        },
      ],
    },
    {
      id: 'plan',
      title: 'A practical sequence',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Notice and name', body: 'Spot the body signs (tight chest, hot face) and name the feeling. Labelling is a first, low-effort step.' },
            { title: 'Slow the body', body: 'Breathe out slowly for a minute or two. Lower the arousal before trying to think.' },
            { title: 'Rate the intensity', body: 'If it is moderate, try reappraisal. If it is very high, delay: walk, move, wait.' },
            { title: 'Re-frame', body: 'Ask: what else could this mean? What would I say to a friend? Will this matter in a week?' },
            { title: 'Choose a response', body: 'Decide what to do, rather than react. Write it down if it helps.' },
            { title: 'Look after the basics', body: 'Sleep, food, movement and company are the foundation that makes the above work.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'When to get help', text: 'If anxiety, low mood or anger is severe, lasts for weeks or interferes with work, relationships or safety, speak to a doctor or a mental health professional. If you are in crisis, contact local emergency or crisis services. These techniques are self-help, not a replacement for treatment.' },
        { t: 'links', items: [{ path: 'medicine/neuroscience/when-circuits-go-wrong', note: 'When these systems become overwhelmed' }, { path: 'memory/sleep-and-body', note: 'Sleep, exercise and memory' }] },
      ],
    },
  ],
  sources: [
    'Ochsner, K. N., and Gross, J. J. (2005). The cognitive control of emotion. Trends in Cognitive Sciences.',
    'Gross, J. J. (2015). Emotion regulation: current status and future prospects. Psychological Inquiry.',
    'Lieberman, M. D., et al. (2007). Putting feelings into words: affect labeling disrupts amygdala activity. Psychological Science.',
    'McEwen, B. S. (2007). Physiology and neurobiology of stress and adaptation. Physiological Reviews.',
    'Yoo, S.-S., et al. (2007). The human emotional brain without sleep. Current Biology.',
  ],
  related: ['medicine/neuroscience/emotion-circuits', 'medicine/neuroscience/when-circuits-go-wrong', 'memory/sleep-and-body'],
}

export default guide
