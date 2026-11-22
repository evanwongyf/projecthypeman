import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Psychiatric medicines act on the same handful of brain chemical systems, serotonin, noradrenaline, dopamine and GABA, in different combinations and degrees. Antidepressants mostly turn serotonin and noradrenaline signalling up; antipsychotics mostly turn dopamine signalling down; benzodiazepines turn GABA’s calming effect up fast but build tolerance; and mood stabilisers and anticonvulsants work through mechanisms that are still only partly understood despite decades of use.',
  nutshell: [
    '**SSRIs and SNRIs** are the most commonly prescribed antidepressants, raising serotonin (and noradrenaline for SNRIs) availability; full effect takes 4-6 weeks.',
    '**Antipsychotics** mainly block dopamine receptors; “atypical” ones add serotonin-receptor effects and tend to cause fewer movement side effects but more weight gain.',
    '**Benzodiazepines** work fast and reliably for anxiety but carry real dependence and dangerous-withdrawal risk, which is why they are meant for short-term or occasional use.',
    '**Mood stabilisers** (lithium, valproate, lamotrigine) treat the swings of bipolar disorder rather than depression or mania alone.',
    '**Never stop an antidepressant, antipsychotic or benzodiazepine abruptly**, each has its own withdrawal or rebound pattern, and tapering under guidance is safer.',
  ],
  sections: [
    {
      id: 'map',
      title: 'The families, mapped',
      blocks: [
        {
          t: 'mindmap',
          center: 'Psychiatric medicine families',
          caption: 'Each branch acts on a different brain chemical system, or a different part of the same one.',
          branches: [
            { label: 'SSRIs', tone: 'teal', items: ['Sertraline, escitalopram, fluoxetine', 'Raise serotonin availability', 'First-line for depression, anxiety'] },
            { label: 'SNRIs', tone: 'teal', items: ['Venlafaxine, duloxetine', 'Raise serotonin and noradrenaline', 'Also used for nerve pain'] },
            { label: 'Atypical antidepressants', tone: 'mint', items: ['Bupropion, mirtazapine, trazodone', 'Each works differently', 'Chosen for a specific side-effect profile'] },
            { label: 'Older antidepressants', tone: 'mustard', items: ['Tricyclics, e.g. amitriptyline', 'Broad receptor effects', 'Dangerous in overdose'] },
            { label: 'Atypical antipsychotics', tone: 'pink', items: ['Risperidone, olanzapine, quetiapine, aripiprazole', 'Dopamine + serotonin blockade', 'Metabolic monitoring needed'] },
            { label: 'Typical antipsychotics', tone: 'pink', items: ['Haloperidol', 'Strong dopamine blockade', 'More movement side effects'] },
            { label: 'Benzodiazepines', tone: 'orange', items: ['Alprazolam, lorazepam, diazepam', 'Enhance GABA, fast-acting', 'Dependence risk with regular use'] },
            { label: 'Mood stabilisers', tone: 'lavender', items: ['Lithium, valproate, lamotrigine', 'Smooth the highs and lows of bipolar disorder', 'Regular blood monitoring for several'] },
            { label: 'Stimulants', tone: 'mustard', items: ['Methylphenidate, amphetamines', 'Raise dopamine and noradrenaline', 'Used for ADHD, controlled substances'] },
          ],
        },
      ],
    },
    {
      id: 'serotonin',
      title: 'Serotonin syndrome: the interaction to know',
      blocks: [
        {
          t: 'callout',
          tone: 'warn',
          title: 'When serotonin-raising drugs stack up',
          text: 'Combining two or more serotonin-raising drugs, an SSRI with tramadol, a triptan, St John’s Wort, or another antidepressant, can push serotonin signalling too high. Watch for agitation, a racing heart, sweating, tremor, muscle twitching and a raised temperature developing within hours of a dose change; this combination is a medical emergency, not something to wait out.',
        },
      ],
    },
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Mental health' }] },
  ],
}

export default guide
