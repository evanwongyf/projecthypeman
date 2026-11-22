import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Common mental health conditions are not mysterious: they can be understood as disruptions of the same circuits that handle threat, reward, attention and control. Understanding the pattern helps to explain symptoms and why treatments work, and it takes some of the stigma away. This guide is educational. It cannot diagnose anyone, and it does not replace advice from a doctor or mental health professional.',
  nutshell: [
    '**Anxiety** involves an overactive threat system (amygdala, insula) and weaker top-down control from the prefrontal cortex.',
    '**Depression** involves changes in reward circuits, stress systems, sleep and mood regulation, not a simple lack of one chemical.',
    '**ADHD** involves differences in the dopamine and noradrenaline systems and the frontal networks that handle attention and self-control.',
    '**PTSD** involves a memory system stuck in threat mode, with a hyperactive amygdala and a quieter hippocampus and prefrontal cortex.',
    '**Addiction** hijacks the reward and habit circuits, shifting from wanting to compulsion.',
    'All of these are **treatable**. Therapy, medication, lifestyle changes and support work, often best in combination.',
  ],
  sections: [
    {
      id: 'table',
      title: 'Conditions and circuits at a glance',
      blocks: [
        {
          t: 'table',
          head: ['Condition', 'Circuit picture (simplified)', 'Treatments with good evidence'],
          rows: [
            ['Anxiety disorders', 'Overactive amygdala and insula; weaker prefrontal control; hyper-vigilance', 'Cognitive behavioural therapy (CBT) with exposure; SSRIs and related medicines; exercise; relaxation skills'],
            ['Depression', 'Reduced reward-circuit response, altered stress (HPA) axis, changes in prefrontal and cingulate regions, sleep disruption', 'Psychotherapy (CBT, behavioural activation, interpersonal therapy); antidepressants; exercise; for severe cases, other treatments under specialist care'],
            ['ADHD', 'Differences in dopamine and noradrenaline signalling and in frontal-striatal networks for attention and inhibition', 'Behavioural strategies and support; stimulant and non-stimulant medication under medical care'],
            ['PTSD', 'Hyperactive threat response; weaker hippocampal context; reduced prefrontal control, so memories feel present', 'Trauma-focused therapies (trauma-focused CBT, EMDR); some medicines'],
            ['Addiction', 'Dopamine reward pathway is sensitised to cues; control networks weaken; habit systems take over', 'Behavioural therapies, medication for some substances, mutual support, treating other conditions'],
            ['OCD', 'Loops linking frontal cortex, basal ganglia and thalamus that fail to switch off a “something is wrong” signal', 'CBT with exposure and response prevention; SSRIs'],
          ],
          caption: 'Highly simplified. Real conditions involve many interacting factors: genes, development, stress, life events, sleep and physical health.',
        },
      ],
    },
    {
      id: 'details',
      title: 'A closer look',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Anxiety', title: 'Why avoidance backfires', body: 'Avoiding what you fear gives short-term relief but stops the brain learning that it was safe. Exposure therapy works by letting the prefrontal cortex and hippocampus teach the amygdala a new “safe” memory.' },
            { tag: 'Depression', title: 'Why activity helps', body: 'Low mood reduces motivation, which reduces activity, which reduces rewards. Behavioural activation breaks the loop by scheduling meaningful activities first, and the mood often follows.' },
            { tag: 'ADHD', title: 'Not laziness', body: 'ADHD is a difference in how attention and impulse control work, with a strong genetic component. Structure, external reminders, exercise and medication can all help.' },
            { tag: 'PTSD', title: 'The memory that will not file', body: 'In PTSD, a traumatic memory remains vivid and tied to the body’s alarm, instead of being stored as something in the past. Therapy helps to process and re-file it.' },
            { tag: 'Addiction', title: 'Wanting beyond liking', body: 'As addiction develops, cues trigger intense wanting even when the substance no longer gives much pleasure. That is why willpower alone is often not enough.' },
            { tag: 'Stress', title: 'The common thread', body: 'Chronic stress, poor sleep and isolation make nearly all of these conditions more likely and worse. They are targets for prevention.' },
          ],
        },
      ],
    },
    {
      id: 'help',
      title: 'When and how to get help',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Symptoms last more than a couple of weeks or keep coming back.',
            'They interfere with sleep, work, study, relationships or safety.',
            'You are using alcohol or other substances to cope.',
            'You have thoughts of harming yourself or others. This is an emergency: contact local emergency services or a crisis line straight away.',
            'You are a friend or family member and notice a big change in someone.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Do not stop medicines on your own',
          text: 'Antidepressants, ADHD medicines and other psychiatric drugs act on brain chemistry, and stopping suddenly can cause withdrawal or relapse. Changes should be made with a doctor’s help.',
        },
        { t: 'p', text: 'In Singapore, options include a family doctor or polyclinic, the Institute of Mental Health, and national helplines such as the Samaritans of Singapore. Other countries have equivalents. Check current details locally, as services change.' },
        { t: 'links', items: [{ path: 'medicine/neuroscience/emotion-regulation', note: 'Self-help tools for regulating emotion' }, { path: 'medicine/neuroscience/emotion-circuits', note: 'The circuits explained' }] },
      ],
    },
  ],
  sources: [
    'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, 5th edition, text revision (2022).',
    'World Health Organization. mhGAP Intervention Guide.',
    'Etkin, A., and Wager, T. D. (2007). Functional neuroimaging of anxiety: a meta-analysis. American Journal of Psychiatry.',
    'Volkow, N. D., et al. (2016). Neurobiologic advances from the brain disease model of addiction. New England Journal of Medicine.',
    'National Institute for Health and Care Excellence (NICE) guidelines on depression, anxiety, ADHD and PTSD.',
  ],
  related: ['medicine/neuroscience/emotion-regulation', 'medicine/neuroscience/emotion-circuits', 'medicine/neuroscience/neurons-and-chemistry'],
}

export default guide
