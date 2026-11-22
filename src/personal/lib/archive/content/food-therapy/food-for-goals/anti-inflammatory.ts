import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Inflammation is the body’s repair response, essential when you cut a finger. Low-grade inflammation that never switches off is linked to heart disease, type 2 diabetes, arthritis and depression. Diet is one of several things (with sleep, exercise, weight, smoking and stress) that shift it. The evidence favours whole eating patterns over single “anti-inflammatory” foods or supplements.',
  nutshell: [
    'Patterns linked to lower inflammatory markers: **Mediterranean**, **traditional Japanese**, **Nordic** and **DASH**, lots of vegetables, fruit, legumes, whole grains, fish, nuts and olive oil.',
    'Patterns linked to higher markers: lots of **ultra-processed food, sugary drinks, refined starch, processed meat** and alcohol.',
    '**Omega-3** from fish has the best evidence of single nutrients; turmeric and ginger have small effects for joint pain.',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-olive-oil', title: 'Olive oil', body: 'Polyphenols' },
          { photo: 'f-salmon', title: 'Oily fish', body: 'Omega-3' },
          { photo: 'f-turmeric', title: 'Turmeric', body: 'Curcumin' },
          { photo: 'f-ginger', title: 'Ginger', body: 'Small effects on joint pain' },
          { photo: 'f-blueberries', title: 'Berries', body: 'Anthocyanins' },
          { photo: 'f-broccoli', title: 'Broccoli', body: 'Sulforaphane' },
        ] },
      ],
    },
    {
      id: 'plate',
      title: 'Building an anti-inflammatory plate',
      blocks: [
        { t: 'dodont', do: [
          'Vegetables and fruit of many colours, daily',
          'Legumes three or more times a week',
          'Oily fish twice a week',
          'Whole grains instead of refined',
          'Extra virgin olive oil, nuts and seeds',
          'Herbs and spices (turmeric, ginger, garlic)',
          'Green tea, coffee in moderation',
        ], dont: [
          'Sugary drinks and sweets most days',
          'Processed meats (ham, sausages, bacon) often',
          'Deep-fried fast food regularly',
          'Refined white bread, pastries and biscuits as staples',
          'Heavy alcohol use',
          'Expensive “anti-inflammatory” supplements in place of food',
        ] },
      ],
    },
    {
      id: 'evidence',
      title: 'What trials show',
      blocks: [
        { t: 'table', head: ['Food or supplement', 'Evidence', 'Verdict'], rows: [
          ['Mediterranean diet', 'PREDIMED trial: about 30% fewer heart attacks and strokes; lower CRP in several trials', 'Strong'],
          ['Omega-3 (fish, fish oil)', 'Reduces triglycerides; modest benefit for rheumatoid arthritis pain and stiffness', 'Moderate'],
          ['Turmeric (curcumin)', 'Small reductions in osteoarthritis pain in short trials; poorly absorbed', 'Weak to moderate'],
          ['Ginger', 'Small effects on osteoarthritis pain and menstrual pain', 'Weak to moderate'],
          ['Tart cherries, green tea, berries', 'Small studies with mixed results', 'Weak'],
          ['Elimination diets (no nightshades, gluten-free for everyone)', 'Little evidence outside diagnosed conditions (e.g. coeliac disease)', 'Not supported'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Medical conditions', text: 'If you have arthritis, inflammatory bowel disease or another inflammatory condition, diet can help alongside treatment but not replace it. Turmeric supplements can interact with blood thinners.' },
        { t: 'links', items: [{ path: 'food-therapy/foods-gallery', note: 'Pictures of the foods mentioned here' }, { path: 'food-therapy/food-for-goals/heart-and-blood-sugar' }] },
      ],
    },
  ],
  sources: [
    'Estruch, R. et al. (2018). Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil or nuts. New England Journal of Medicine 378.',
    'Shivappa, N. et al. (2014). Designing and developing a literature-derived, population-based Dietary Inflammatory Index. Public Health Nutrition 17(8).',
    'Daily, J. W., Yang, M. & Park, S. (2016). Efficacy of turmeric extracts and curcumin for alleviating the symptoms of joint arthritis. Journal of Medicinal Food 19(8).',
    'Goldberg, R. J. & Katz, J. (2007). A meta-analysis of the analgesic effects of omega-3 polyunsaturated fatty acid supplementation for inflammatory joint pain. Pain 129.',
  ],
  related: ['food-therapy/food-for-goals/heart-and-blood-sugar', 'food-therapy/foods-gallery'],
}

export default guide
