import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Bone and muscle are living tissues that are built, broken down and rebuilt all your life. You build most of your bone before about 30, then slowly lose it; muscle follows a similar curve and fades faster without use. Food supports both, but exercise is the partner it cannot do without. This guide covers the nutrients for bone (calcium, vitamin D, vitamin K, magnesium, protein), how much protein muscle needs, and why strength training matters at every age.',
  nutshell: [
    'Bone needs **calcium**, **vitamin D**, **protein**, **vitamin K**, **magnesium** and **load**: weight-bearing and strength exercise tell bone to stay strong.',
    'Peak bone mass is reached by about **age 30**. Childhood and teen years are the best time to bank it, and later life is about keeping it.',
    'Muscle needs **enough protein** spread across meals, and **resistance training**. Older adults often need more protein than younger ones.',
    'Salt, heavy drinking, smoking and very low weight all **harm bone**. Excess caffeine has a small effect.',
    'See a doctor about **osteoporosis** testing if you have risk factors (fracture after 50, family history, steroids, early menopause, low weight).',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-milk', title: 'Milk', body: 'Calcium, protein, iodine' },
          { photo: 'f-sardines', title: 'Sardines', body: 'Calcium in the bones, vitamin D' },
          { photo: 'f-tofu', title: 'Calcium-set tofu', body: 'Calcium and protein' },
          { photo: 'f-natto', title: 'Natto', body: 'Vitamin K2' },
          { photo: 'f-almonds', title: 'Almonds', body: 'Magnesium' },
          { photo: 'f-eggs', title: 'Eggs', body: 'Protein and vitamin D' },
        ] },
      ],
    },
    {
      id: 'bone',
      title: 'Feeding bone',
      blocks: [
        {
          t: 'table',
          head: ['Nutrient', 'Role in bone', 'Food sources (Japanese examples)'],
          rows: [
            ['Calcium', 'The main mineral in bone', 'Milk, yogurt, calcium-set tofu, iriko and shirasu, komatsuna, sesame'],
            ['Vitamin D', 'Lets the gut absorb calcium', 'Oily fish, shirasu, dried shiitake, eggs, sunshine'],
            ['Vitamin K', 'Activates proteins that bind calcium to bone', 'Natto, komatsuna, spinach, broccoli'],
            ['Protein', 'About half of bone volume is protein; also supports muscle', 'Fish, eggs, tofu, meat, dairy, beans'],
            ['Magnesium', 'Part of the bone structure; needed for vitamin D activation', 'Nuts, seeds, tofu, beans, wakame'],
            ['Potassium and vegetables', 'Alkaline-forming foods may reduce calcium loss; fruit and vegetables are linked with better bone density', 'Vegetables, fruit, potatoes, kabocha'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Natto, vitamin K2 and fractures',
          text: 'In Japan, a synthetic form of vitamin K2 (menatetrenone) is used as an osteoporosis treatment, and population studies link higher natto intake with fewer hip fractures in some regions of Japan. Evidence from randomised trials outside Japan is mixed. Natto is a good food for many reasons, but it is not a substitute for calcium, vitamin D, exercise and treatment where needed.',
        },
        {
          t: 'dodont',
          do: ['Eat a calcium-rich food at most meals.', 'Get some sun and eat oily fish.', 'Do weight-bearing exercise (walking, jogging, stairs, dancing) and strength training.', 'Ask about a bone density scan if you are at risk.'],
          dont: ['Rely on spinach for calcium: oxalate blocks it.', 'Smoke or drink heavily.', 'Cut out dairy or fish without replacing calcium.', 'Take large calcium supplements without need.'],
        },
      ],
    },
    {
      id: 'muscle',
      title: 'Feeding muscle',
      blocks: [
        { t: 'p', text: 'Muscle is built from protein, but only in response to use. The signal to build is strongest when you do resistance exercise and then eat enough protein. The standard recommendation for adults is 0.8 grams per kilogram of body weight a day. Many experts suggest around 1.0 to 1.2 g per kg for healthy older adults, and 1.2 to 2.0 g per kg for people doing regular strength training, to help preserve and build muscle. The age-related loss of muscle (sarcopenia) is a major cause of frailty and falls.' },
        {
          t: 'table',
          head: ['Strategy', 'Why'],
          rows: [
            ['Spread protein across meals (about 20 to 30 g per meal)', 'Muscle responds to a moderate dose at each meal; a large amount at dinner alone is less effective in older adults'],
            ['Include a protein source after strength exercise', 'Supports repair; timing is less critical than total intake'],
            ['Choose complete or complementary proteins', 'Animal foods, soy and combinations of grains and pulses provide all the essential amino acids'],
            ['Do resistance training two or three times a week', 'The stimulus is as important as the protein'],
            ['Get enough vitamin D and energy', 'Low vitamin D and under-eating both work against muscle'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Protein in common foods (approximate)', body: 'Egg: 6 g. Tofu, 100 g: 8 g. Natto, one pack: 8 g. Salmon fillet, 100 g: 20 g. Chicken breast, 100 g: 23 g. Milk, 1 cup: 8 g. Cooked lentils, 100 g: 9 g.' },
            { title: 'Supplements', body: 'Protein powders are convenient, not necessary. They help people who struggle to eat enough, such as older adults with small appetites.' },
            { title: 'Kidney disease', body: 'People with kidney disease may need to limit protein and should follow their own medical advice.' },
            { title: 'Creatine', body: 'One of the best-studied sports supplements and modestly increases strength in trials. Talk to a doctor if you have kidney problems.' },
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/minerals/major-minerals', note: 'Calcium and magnesium' }, { path: 'food-therapy/japanese/recipes-bones-eyes-and-skin', note: 'Recipes for bone health' }, { path: 'fitness/start-here', note: 'Training for strength' }] },
      ],
    },
  ],
  sources: [
    'US National Institutes of Health, Office of Dietary Supplements. Fact sheets: Calcium, Vitamin D, Vitamin K.',
    'Bauer, J., et al. (2013). Evidence-based recommendations for optimal dietary protein intake in older people: PROT-AGE Study Group position paper. Journal of the American Medical Directors Association.',
    'Weaver, C. M., et al. (2016). The National Osteoporosis Foundation’s position statement on peak bone mass development and lifestyle factors. Osteoporosis International.',
    'Iwamoto, J., et al. (2000). Vitamin K2 therapy for postmenopausal osteoporosis (review), and reviews of natto and fracture in Japanese cohorts.',
  ],
  related: ['food-therapy/minerals/major-minerals', 'food-therapy/vitamins/fat-soluble', 'food-therapy/japanese/recipes-bones-eyes-and-skin'],
}

export default guide
