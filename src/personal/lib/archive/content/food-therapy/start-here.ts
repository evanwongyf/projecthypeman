import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Food therapy is the idea that what you eat can support your health, help you recover and, over years, lower the risk of some diseases. The idea is old: Japanese and Chinese traditions treat food as the first medicine, and modern nutrition science supports much of it, and corrects some of it. This shelf teaches the science of vitamins and minerals, shows how to eat for a goal, and then gives you a Japanese kitchen toolkit of recipes grouped by the care they give.',
  nutshell: [
    '**Food supports health; it does not replace treatment.** Use these pages to eat well and recover well, and see a doctor for diagnosis and treatment.',
    'Most people get what they need from a **varied, mostly whole-food diet**. Supplements help in specific cases (pregnancy, B12 for vegans, vitamin D with little sun, diagnosed deficiency).',
    'Each nutrient has a **range**: too little causes deficiency; too much can cause harm. The **upper limit** matters for supplements and some foods (liver, kombu, Brazil nuts).',
    'The Japanese pattern of **one soup and three dishes** is a practical template: rice, soup, fish or protein, vegetables.',
    'Where the evidence is weak or traditional, the pages say so. Traditional use is not proof.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What food therapy is, and is not',
      blocks: [
        {
          t: 'table',
          head: ['Food therapy is…', 'Food therapy is not…'],
          rows: [
            ['Eating to support the body: enough of each nutrient, a mostly whole-food diet, regular meals', 'A cure for serious disease. No food treats cancer, diabetes or infection on its own'],
            ['Using gentle, familiar foods to recover from a cold or an upset stomach', 'A reason to stop prescribed medicine or skip medical care'],
            ['Choosing foods for a specific goal: bones, heart, blood, energy', 'A list of “superfoods” that fix everything'],
            ['A tradition worth learning from, tested against modern evidence', 'Proof by tradition alone. Some old beliefs are wrong or untested'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Educational information, not medical advice', text: 'This shelf cannot take account of your health, medicines or allergies. If you are pregnant, have a medical condition (especially kidney, thyroid or heart disease), take medicines (especially warfarin), or have allergies, check with your doctor or a registered dietitian before changing your diet or taking supplements. The safety page lists the main cautions.' },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start with the explorer', body: 'Open the vitamin and mineral explorer to see what each nutrient does, how much you need, the foods that supply it and the cautions.' },
            { title: 'Read the nutrient guides', body: 'Fat-soluble vitamins, B vitamins, vitamin C, and the major and trace minerals explain the “why”.' },
            { title: 'Pick a goal', body: 'Choose the goal that matters to you (brain, energy, immunity, bones, eyes and skin, heart, gut, sleep) and read its guide.' },
            { title: 'Cook something', body: 'The Japanese section turns the ideas into recipes you can scale and tick off as you cook.' },
            { title: 'Read the safety page', body: 'Before supplements, or if you take medicine or are pregnant.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'food-therapy/vitamins/overview-and-explorer', note: 'The vitamin and mineral explorer' },
            { path: 'food-therapy/food-for-goals/brain-and-focus', note: 'Eating for the brain' },
            { path: 'food-therapy/food-for-goals/energy-and-fatigue', note: 'Steady energy' },
            { path: 'food-therapy/japanese/principles', note: 'Shokuyo and washoku' },
            { path: 'food-therapy/japanese/recipes-digestion-and-recovery', note: 'Recipes: digestion and recovery' },
            { path: 'food-therapy/japanese/weekly-menu', note: 'A week of Japanese-style meals' },
            { path: 'food-therapy/safety', note: 'Safety, supplements and medicines' },
          ],
        },
      ],
    },
    {
      id: 'rules',
      title: 'Five principles that hold up',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: '1', title: 'Variety beats any single food', body: 'Different foods supply different nutrients. A varied plate is more reliable than any “superfood”.' },
            { tag: '2', title: 'Mostly plants, enough protein, some fish', body: 'Vegetables, fruit, pulses, whole grains, nuts and seeds; adequate protein; fish a couple of times a week.' },
            { tag: '3', title: 'Less ultra-processed food, salt and added sugar', body: 'These are linked with the most harm in the modern diet.' },
            { tag: '4', title: 'Eat regularly and enjoy it', body: 'Regular meals, eaten slowly and shared when possible, support digestion and mood.' },
            { tag: '5', title: 'Food first, supplements for a reason', body: 'Take a supplement because a need was identified, not because it was advertised.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'World Health Organization. Healthy diet fact sheet.',
    'US National Institutes of Health, Office of Dietary Supplements. Nutrient fact sheets.',
    'Ministry of Health, Labour and Welfare (Japan). Dietary Reference Intakes for Japanese (2020).',
    'Academy of Nutrition and Dietetics and national dietary guidelines (various countries).',
  ],
  related: ['food-therapy/vitamins/overview-and-explorer', 'food-therapy/japanese/principles', 'food-therapy/safety'],
}

export default guide
