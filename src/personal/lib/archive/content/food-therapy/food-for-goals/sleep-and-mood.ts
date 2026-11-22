import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Sleep and mood are closely linked, and both respond to what and when you eat and drink. The effects are real but often modest, and they are smaller than the effects of sleep schedule, light, exercise and, where needed, treatment. This guide separates what the evidence supports (caffeine and alcohol timing, meal timing, a pattern-level link between diet and depression) from what it does not (foods that “make you sleepy”, single-nutrient fixes for mood).',
  nutshell: [
    '**Caffeine** lasts. Its half-life is around five hours, so an afternoon coffee can still be active at bedtime. Stop about **eight hours** before sleep if you are sensitive.',
    '**Alcohol** helps some people fall asleep but fragments sleep and reduces REM sleep. Do not use it as a sleep aid.',
    '**Large, heavy or spicy meals** close to bedtime can disturb sleep. A light snack is fine. Going to bed hungry or stuffed both disturb some people.',
    'A **Mediterranean-style or similar diet** is linked with lower depression risk, and one trial found that dietary improvement reduced symptoms in people with depression. Diet is an addition to treatment, not a replacement.',
    'The **gut-brain axis**, **omega-3 fats** and **B vitamins** are active research areas; effects are modest.',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-milk', title: 'Warm milk', body: 'Tryptophan and comfort' },
          { photo: 'f-kiwi', title: 'Kiwifruit', body: 'Small trials suggest better sleep' },
          { photo: 'f-salmon', title: 'Oily fish', body: 'Omega-3 linked to mood' },
          { photo: 'f-pumpkin-seeds', title: 'Seeds', body: 'Magnesium' },
          { photo: 'f-dark-chocolate', title: 'Dark chocolate', body: 'A small treat; contains caffeine' },
          { photo: 'f-banana', title: 'Bananas', body: 'Carbohydrate before bed' },
        ] },
      ],
    },
    {
      id: 'sleep',
      title: 'Eating and sleeping',
      blocks: [
        {
          t: 'table',
          head: ['Factor', 'What the evidence shows', 'What to do'],
          rows: [
            ['Caffeine', 'Blocks adenosine, the chemical that builds sleep pressure. Taken six hours before bed, it reduced sleep time by an hour in a classic trial', 'Cut off at about midday to early afternoon; remember tea, cola and chocolate also contain it'],
            ['Alcohol', 'Speeds falling asleep but disrupts the second half of the night and suppresses REM sleep', 'Avoid within three or four hours of bed'],
            ['Late heavy meal', 'Can cause reflux and discomfort; some studies link late eating with poorer sleep', 'Finish a large meal two to three hours before bed'],
            ['Light evening snack', 'Not harmful, and may help if you are hungry', 'Something small (banana, yogurt, a few nuts)'],
            ['Tryptophan and turkey', 'Tryptophan is a building block for serotonin and melatonin, but food sources do not make you sleepy on their own; the “Thanksgiving turkey” effect is a myth', 'Do not rely on specific foods'],
            ['Kiwi and tart cherry', 'Small trials show modest sleep improvements', 'Interesting but not proven; fine to try'],
            ['Magnesium', 'Some evidence of modest benefit in older adults, mixed overall', 'Food sources are safe; ask before supplements'],
            ['Fluid timing', 'Drinking a lot late in the evening wakes you to use the toilet', 'Taper fluids in the evening'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The big levers are not food', text: 'A fixed wake-up time, morning light, exercise, a cool, dark room and keeping screens away before bed matter more than any food choice. If you often cannot sleep, or you snore and feel sleepy by day, see a doctor.' },
      ],
    },
    {
      id: 'mood',
      title: 'Eating and mood',
      blocks: [
        { t: 'p', text: 'Many studies link healthier diets, with more vegetables, fruit, whole grains, fish and pulses and less ultra-processed food, with a lower risk of depression. This is partly because people who eat well differ in other ways. Trials give some support: in the SMILES trial, adults with moderate to severe depression who were helped to improve their diet to a Mediterranean style had a greater reduction in symptoms over 12 weeks than a social-support control group. A single trial is not the last word, and diet was added to, not instead of, usual care.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Pattern', title: 'Regular, varied meals', body: 'Skipped meals and heavy sugar swings can make irritability and low mood worse in some people.' },
            { tag: 'Fats', title: 'Omega-3 (EPA)', body: 'Meta-analyses suggest EPA-rich supplements may modestly help depression when added to treatment; eating oily fish is a reasonable step.' },
            { tag: 'Gut', title: 'The gut-brain connection', body: 'Gut bacteria influence inflammation and neurotransmitters. Early studies of probiotics for mood are promising but not conclusive.' },
            { tag: 'Vitamins', title: 'Folate, B12, vitamin D', body: 'Low levels are linked with depression. Correct a deficiency; supplements in people who are not deficient have not been shown to treat depression.' },
            { tag: 'Alcohol', title: 'Alcohol and mood', body: 'Alcohol is a depressant: it can worsen low mood and anxiety, even when it seems to help in the moment.' },
            { tag: 'Together', title: 'Eating with others', body: 'Shared meals support connection, which supports mood.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'If your mood is low',
          text: 'Food is a support, not a treatment, for depression or anxiety. If low mood lasts more than two weeks, affects daily life, or you have thoughts of harming yourself, speak to a doctor or a mental health professional, or contact a crisis line. Do not stop prescribed medicine for dietary changes.',
        },
        { t: 'links', items: [{ path: 'medicine/neuroscience/emotion-regulation', note: 'Regulating emotion' }, { path: 'medicine/neuroscience/when-circuits-go-wrong', note: 'Depression and anxiety circuits' }, { path: 'memory/sleep-and-body', note: 'Sleep, exercise and memory' }] },
      ],
    },
  ],
  sources: [
    'Drake, C., et al. (2013). Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. Journal of Clinical Sleep Medicine.',
    'Ebrahim, I. O., et al. (2013). Alcohol and sleep I: effects on normal sleep. Alcoholism: Clinical and Experimental Research.',
    'Jacka, F. N., et al. (2017). A randomised controlled trial of dietary improvement for adults with major depression (the SMILES trial). BMC Medicine.',
    'Lassale, C., et al. (2019). Healthy dietary indices and risk of depressive outcomes: a systematic review and meta-analysis of observational studies. Molecular Psychiatry.',
    'Mocking, R. J. T., et al. (2016). Meta-analysis and meta-regression of omega-3 polyunsaturated fatty acid supplementation for major depressive disorder. Translational Psychiatry.',
  ],
  related: ['food-therapy/food-for-goals/energy-and-fatigue', 'medicine/neuroscience/emotion-regulation', 'memory/sleep-and-body'],
}

export default guide
