import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Everything the brain does, from a flicker of fear to solving an equation, comes down to nerve cells passing signals to each other. A signal travels along a neuron as an electrical pulse and crosses to the next neuron as a chemical message. Different chemicals, called neurotransmitters, do different jobs, and understanding them explains how mood, motivation, focus and many medicines work. This guide keeps it practical: how a neuron fires, how a synapse works, and what each of the main chemicals does.',
  nutshell: [
    'A **neuron** receives signals through its dendrites, and if enough arrive it fires an **action potential**, an electrical pulse that runs down its axon.',
    'At the **synapse**, the pulse triggers the release of a **neurotransmitter**, which crosses a tiny gap and binds to receptors on the next cell, exciting it or inhibiting it.',
    '**Glutamate** is the main excitatory chemical and **GABA** the main inhibitory one. The balance between them keeps the brain stable.',
    '**Dopamine, serotonin, noradrenaline and acetylcholine** are “modulators” that tune whole networks, shaping motivation, mood, alertness and learning.',
    'Neat one-chemical stories (“dopamine is the pleasure chemical”) are oversimplified. Each chemical does many things depending on where in the brain it acts.',
  ],
  sections: [
    {
      id: 'neuron',
      title: 'How a neuron fires',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Resting', body: 'The inside of the cell is electrically negative compared with the outside (about −70 millivolts), held there by pumps and channels that keep more sodium outside and more potassium inside.' },
            { title: 'Input', body: 'Signals from other neurons arrive at the dendrites and nudge the voltage up (excitatory) or down (inhibitory).' },
            { title: 'Threshold', body: 'If the combined input pushes the voltage past a threshold (about −55 millivolts) the cell fires.' },
            { title: 'Action potential', body: 'Sodium channels open and sodium rushes in, then potassium channels open and potassium rushes out. A brief spike travels down the axon. It is all-or-nothing: the same size every time.' },
            { title: 'Speed', body: 'Axons wrapped in a fatty insulating sheath called **myelin** conduct much faster, with the signal jumping between gaps. In the fastest fibres, signals travel at well over 100 metres per second.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Rate, not size', text: 'Because an action potential is all-or-nothing, a neuron signals “more” by firing more often, not by firing harder.' },
      ],
    },
    {
      id: 'synapse',
      title: 'How a synapse works',
      blocks: [
        {
          t: 'flow',
          title: 'A chemical message',
          nodes: [
            { label: 'Spike arrives', sub: 'at the axon terminal', tone: 'data' },
            { label: 'Calcium enters', sub: 'triggers vesicles to fuse', tone: 'process' },
            { label: 'Neurotransmitter released', sub: 'into the gap (the cleft)', tone: 'process' },
            { label: 'Binds receptors', sub: 'on the next neuron', tone: 'model' },
            { label: 'Cleared away', sub: 'reuptake or breakdown', tone: 'output' },
          ],
        },
        { t: 'p', text: 'The signal is ended by removing the chemical: either the sending cell takes it back up (**reuptake**) or enzymes break it down. Many medicines work by changing this step. For example, SSRIs (selective serotonin reuptake inhibitors) slow the reuptake of serotonin. Many recreational drugs also act at synapses, which is why they can have such strong effects.' },
      ],
    },
    {
      id: 'chemicals',
      title: 'The main chemicals',
      blocks: [
        {
          t: 'table',
          head: ['Chemical', 'Roughly what it does', 'Where it matters'],
          rows: [
            ['Glutamate', 'The main excitatory transmitter. Involved in nearly all fast signalling and in learning', 'Throughout the cortex and hippocampus; too much can damage neurons'],
            ['GABA', 'The main inhibitory transmitter. Calms activity and keeps circuits stable', 'Throughout the brain; alcohol, benzodiazepines and some sleep drugs enhance its effect'],
            ['Dopamine', 'Signals prediction errors and the value of rewards, motivates effort and helps with movement and focus', 'Midbrain pathways to the striatum and prefrontal cortex; loss causes Parkinson’s disease'],
            ['Serotonin', 'Modulates mood, appetite, sleep and impulse control. Its roles are varied and complex', 'Brainstem raphe nuclei project everywhere; the target of SSRI antidepressants'],
            ['Noradrenaline', 'Raises alertness and arousal, sharpens attention in stress', 'Locus coeruleus in the brainstem; central to the “fight or flight” response in the brain'],
            ['Acetylcholine', 'Supports attention, learning and muscle movement', 'Basal forebrain to the cortex; reduced in Alzheimer’s disease'],
            ['Endorphins', 'The body’s own painkillers; contribute to relief and calm', 'Released in pain, exercise and social bonding'],
            ['Oxytocin', 'A hormone and neuromodulator involved in bonding, trust and birth. Effects depend on context', 'Hypothalamus and pituitary; less simple than its “love hormone” label'],
            ['Cortisol', 'The main stress hormone, made by the adrenal glands under the control of the brain', 'Mobilises energy; long-term high levels affect memory, mood and immunity'],
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '“Dopamine is the pleasure chemical”',
          text: 'Dopamine is better described as a signal for wanting and for learning from surprise: it rises when something is better than expected. Pleasure itself involves other systems (opioids and others). That is why one can crave something that is not enjoyed.',
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '“Depression is just low serotonin”',
          text: 'The idea of a simple serotonin shortage is not supported by strong evidence. Antidepressants help many people, but how they work, and why they take weeks, is still being researched. Depression is better thought of as involving several systems, including stress, sleep and circuits for reward and emotion.',
        },
      ],
    },
    {
      id: 'balance',
      title: 'Balance and adaptation',
      blocks: [
        { t: 'p', text: 'The brain adapts to what it is given. If a receptor is stimulated strongly for a long time, the cell often reduces the number of receptors (**tolerance**); if stimulation is removed, it may go the other way. This explains why stopping some drugs, caffeine or alcohol causes withdrawal, and why medicines that alter these chemicals are usually started and stopped gradually under medical advice.' },
        { t: 'links', items: [{ path: 'medicine/neuroscience/emotion-circuits', note: 'See these chemicals in the emotion circuits' }, { path: 'medicine/basics/how-drugs-work-pharmacology', note: 'How drugs act in the body' }] },
      ],
    },
  ],
  sources: [
    'Kandel, E. R., et al. Principles of Neural Science (textbook).',
    'Schultz, W. (1997). A neural substrate of prediction and reward. Science.',
    'Berridge, K. C., and Robinson, T. E. (1998). What is the role of dopamine in reward: hedonic impact, reward learning, or incentive salience? Brain Research Reviews.',
    'Moncrieff, J., et al. (2022). The serotonin theory of depression: a systematic umbrella review. Molecular Psychiatry (and responses to it).',
  ],
  related: ['medicine/neuroscience/brain-map', 'medicine/neuroscience/emotion-circuits', 'medicine/basics/how-drugs-work-pharmacology'],
}

export default guide
