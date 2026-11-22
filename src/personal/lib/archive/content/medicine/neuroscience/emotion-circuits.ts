import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'It is tempting to say that the amygdala is the fear centre, the prefrontal cortex is the rational brain and the two are fighting. The reality is richer and more useful. Emotions arise from interacting circuits that detect what matters, prepare the body, and then generate the feeling and the decision. This guide walks through the main players, what each contributes to fear, reward, disgust, empathy and the felt sense of the body, and the competing ideas scientists still argue about.',
  nutshell: [
    'The **amygdala** rapidly flags what is important (especially possible threats) and tells the **hypothalamus** and **brainstem** to prepare the body.',
    'The **insula** and **anterior cingulate cortex** monitor the body and conflict, and are central to feeling emotion and pain, including empathy.',
    'The **nucleus accumbens** and other **dopamine** circuits drive wanting, motivation and learning from rewards. Wanting and liking are separate systems.',
    'The **hippocampus** gives emotional events their context; the **prefrontal cortex** shapes and regulates the response.',
    'Researchers disagree about whether emotions are built-in categories or constructed by the brain from body signals and context. Both views have evidence.',
  ],
  sections: [
    {
      id: 'threat',
      title: 'Threat: from a rustle to a racing heart',
      blocks: [
        { t: 'p', text: 'Imagine you hear a sudden bang behind you. Within a fraction of a second your body has started to react, before you could say what the noise was. Neuroscientist Joseph LeDoux described a “quick and dirty” route: the thalamus sends a rough signal straight to the amygdala, which can start a response while a slower, more detailed route runs through the cortex to check what it really is.' },
        {
          t: 'flow',
          title: 'The threat response',
          nodes: [
            { label: 'Sense', sub: 'noise, sight, smell', tone: 'data' },
            { label: 'Thalamus', sub: 'rough signal, fast', tone: 'process' },
            { label: 'Amygdala', sub: 'flags “important”', tone: 'model' },
            { label: 'Hypothalamus and brainstem', sub: 'heart rate, adrenaline, freezing', tone: 'process' },
            { label: 'Cortex and hippocampus', sub: 'check the detail and the context', tone: 'human' },
          ],
          loop: 'If it was a false alarm, the prefrontal cortex and hippocampus help the amygdala stand down.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Fast', title: 'The body responds first', body: 'Heart rate, breathing, sweating and attention change within moments through the sympathetic nervous system and adrenaline.' },
            { tag: 'Slower', title: 'Stress hormones follow', body: 'The hypothalamus triggers the pituitary and adrenal glands to release cortisol over minutes, which keeps the body mobilised.' },
            { tag: 'Context', title: 'The hippocampus says where and when', body: 'It tells the brain whether this place or situation was dangerous before. Damage to it can leave fear without context.' },
            { tag: 'Brake', title: 'The prefrontal cortex calms', body: 'Especially its inner, lower part (vmPFC), which helps switch off a fear response once a cue is safe.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Is the amygdala a fear centre?',
          text: 'It is crucial for threat detection and fear learning, but it is also active for novelty, for faces, for positive emotions and for social information. It is better described as a hub that signals what is significant. LeDoux himself now argues that the conscious feeling of fear depends on cortical circuits too, separate from the survival circuits that control the body’s reaction.',
        },
      ],
    },
    {
      id: 'reward',
      title: 'Reward: wanting, liking and learning',
      blocks: [
        { t: 'p', text: 'Psychologist Kent Berridge separated **wanting** (the motivational pull, driven by dopamine) from **liking** (the pleasure itself, involving smaller “hotspots” and opioid and other systems). It explains how someone can crave something they no longer enjoy.' },
        {
          t: 'table',
          head: ['Component', 'Brain areas', 'What it does'],
          rows: [
            ['Wanting (incentive)', 'Dopamine neurons in the midbrain, nucleus accumbens', 'Makes a cue grab attention and drives effort'],
            ['Liking (pleasure)', 'Small hotspots in the accumbens and other areas, using opioid and related signals', 'The felt enjoyment'],
            ['Learning', 'Dopamine prediction-error signals, striatum, orbitofrontal cortex', 'Updates the expected value of actions and cues'],
            ['Valuation', 'Orbitofrontal and ventromedial prefrontal cortex', 'Compares options and decides what is worth it'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Prediction error', text: 'Dopamine neurons fire more when something is better than expected, stay steady when it is as expected, and dip when it is worse. That “surprise” signal is how the brain learns which actions pay off. It is also why unpredictable rewards, such as a notification or a slot machine, can be so compelling.' },
      ],
    },
    {
      id: 'body',
      title: 'The felt body: insula, cingulate and the vagus',
      blocks: [
        { t: 'p', text: 'Emotions are felt in the body, and the brain keeps track of the body’s state, a sense called **interoception**. The **insula** receives signals about heartbeat, gut, breathing and pain and builds a picture of how you feel. The **anterior cingulate cortex** registers conflict, error and distress, including social distress. Together, with the amygdala, they form the salience network, which flags what is important enough to grab your attention.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Disgust and pain', body: 'The anterior insula is active when you feel disgust, when you feel pain, and when you see another person in pain.' },
            { title: 'Empathy', body: 'Parts of the insula and cingulate respond both to your own pain and to the pain of others, one of the ways people feel for each other. Empathy also needs regions that take another’s perspective, such as the temporoparietal junction and medial prefrontal cortex.' },
            { title: 'Social pain', body: 'Exclusion activates some of the same circuits as physical pain, which is part of why ostracism hurts so much.' },
            { title: 'Heart and gut', body: 'The vagus nerve carries signals both ways between the brain and organs, one route by which the gut and the heart influence mood.' },
          ],
        },
      ],
    },
    {
      id: 'theories',
      title: 'Two big ideas about what emotions are',
      blocks: [
        {
          t: 'table',
          head: ['View', 'Claim', 'Evidence and critique'],
          rows: [
            ['Basic emotions', 'A small set of emotions (fear, anger, joy, sadness, disgust and so on) are built-in with dedicated circuits and universal expressions', 'Cross-cultural studies of expressions support some universality; critics say brain imaging does not show a neat circuit for each emotion'],
            ['Constructed emotion', 'The brain builds emotions on the fly from body signals, past experience and context, and labels them with concepts (Lisa Feldman Barrett)', 'Explains cultural variation and why the same state can feel different in different situations; critics say it underplays the built-in circuits'],
          ],
          caption: 'Both views shape current research. A useful working model: some circuits are built in, and the brain’s predictions and concepts shape what you feel.',
        },
        { t: 'links', items: [{ path: 'medicine/neuroscience/emotion-regulation', note: 'Next: steering emotion with the prefrontal cortex' }, { path: 'medicine/neuroscience/neurons-and-chemistry', note: 'The chemicals involved' }] },
      ],
    },
  ],
  sources: [
    'LeDoux, J. E., and Pine, D. S. (2016). Using neuroscience to help understand fear and anxiety: a two-system framework. American Journal of Psychiatry.',
    'Berridge, K. C., and Kringelbach, M. L. (2015). Pleasure systems in the brain. Neuron.',
    'Craig, A. D. (2009). How do you feel, now? The anterior insula and human awareness. Nature Reviews Neuroscience.',
    'Barrett, L. F. (2017). How Emotions Are Made. Houghton Mifflin Harcourt.',
    'Eisenberger, N. I. (2012). The pain of social disconnection. Nature Reviews Neuroscience.',
  ],
  related: ['medicine/neuroscience/brain-map', 'medicine/neuroscience/emotion-regulation', 'medicine/neuroscience/when-circuits-go-wrong'],
}

export default guide
