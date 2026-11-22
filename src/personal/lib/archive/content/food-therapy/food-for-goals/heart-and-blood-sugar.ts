import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Heart disease, stroke and type 2 diabetes are the great chronic diseases of modern life, and diet is one of their biggest modifiable causes. The encouraging news is that eating patterns studied for decades (Mediterranean, DASH, and the traditional Japanese diet) point in the same direction: more plants, fish, whole grains and pulses; less salt, refined starch, sugar and processed meat. This guide explains the mechanisms in plain language and gives practical swaps. It supports, and never replaces, medical treatment.',
  nutshell: [
    '**Blood pressure** falls with **less salt**, **more potassium** (vegetables, fruit, pulses), weight loss, exercise and less alcohol. The **DASH** diet is the best-tested pattern.',
    '**Cholesterol** (LDL) falls when saturated fat is replaced with unsaturated fat, and with **soluble fibre** (oats, barley, beans), nuts and soy.',
    '**Fish** twice a week is linked with lower risk of heart disease. Omega-3 supplements are not a substitute for most people.',
    '**Blood sugar** is steadier with **fibre**, **protein**, **whole grains**, mixing barley with rice, eating vegetables first, and limiting sugary drinks. Weight loss and activity have the biggest effects in type 2 diabetes.',
    '**If you take medicines** for blood pressure, cholesterol or diabetes, do not stop them for diet changes. Talk to your doctor or dietitian.',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-oats', title: 'Oats', body: 'Beta-glucan lowers LDL' },
          { photo: 'f-beans', title: 'Beans', body: 'Fibre for blood sugar' },
          { photo: 'f-olive-oil', title: 'Olive oil', body: 'Monounsaturated fats' },
          { photo: 'f-mackerel', title: 'Mackerel', body: 'Omega-3' },
          { photo: 'f-avocado', title: 'Avocado', body: 'Potassium and healthy fat' },
          { photo: 'f-tomato', title: 'Tomatoes', body: 'Potassium and lycopene' },
        ] },
      ],
    },
    {
      id: 'bp',
      title: 'Blood pressure',
      blocks: [
        {
          t: 'table',
          head: ['Change', 'Typical effect on systolic blood pressure', 'How'],
          rows: [
            ['DASH-style diet (fruit, vegetables, low-fat dairy, whole grains, less salt)', 'about 6 to 11 mmHg lower in people with high blood pressure', 'More potassium, calcium, magnesium and fibre'],
            ['Cutting salt (by about 1 teaspoon, 5 g, a day)', 'about 4 to 5 mmHg lower in those with high blood pressure', 'Less sodium'],
            ['Weight loss', 'about 1 mmHg per kilogram lost', 'Less strain on the heart and arteries'],
            ['Regular aerobic exercise', 'about 4 to 8 mmHg lower', 'Improves vessel function'],
            ['Limiting alcohol', 'a few mmHg lower in drinkers', 'Heavy drinking raises blood pressure'],
          ],
          caption: 'Approximate effects from reviews; individual results vary.',
        },
        { t: 'callout', tone: 'warn', title: 'Salt in the Japanese diet', text: 'Traditional Japanese food is healthy in many ways but high in salt (miso, soy sauce, pickles, salted fish, noodle broth). Japan has historically had high rates of stroke, and average salt intake is above the national target. If you eat Japanese-style, use less soy sauce, choose reduced-salt miso, leave some soup, rinse pickles, and add potassium-rich vegetables and seaweed.' },
      ],
    },
    {
      id: 'cholesterol',
      title: 'Cholesterol and fats',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Swap', title: 'Saturated for unsaturated', body: 'Replacing butter, fatty meat and coconut or palm oil with olive, canola, sesame or other plant oils, fish and nuts lowers LDL cholesterol.' },
            { tag: 'Fibre', title: 'Soluble fibre', body: 'Oats, barley, beans, apples and psyllium bind bile acids and lower LDL a little (about 5 to 10 per cent with enough beta-glucan, around 3 g a day).' },
            { tag: 'Fish', title: 'Oily fish', body: 'Replaces red and processed meat and provides omega-3 fats that lower triglycerides. Twice a week is a common recommendation.' },
            { tag: 'Soy', title: 'Soy foods', body: 'Tofu, natto, edamame and miso replace animal protein and are linked with modest LDL reductions.' },
            { tag: 'Eggs', title: 'Eggs', body: 'Dietary cholesterol affects blood cholesterol less than saturated fat does. Moderate egg eating is fine for most, though people with diabetes or high cholesterol should check with a doctor.' },
            { tag: 'Trans', title: 'Avoid trans fats', body: 'Industrial trans fats raise LDL and lower HDL. Now banned or restricted in many countries.' },
          ],
        },
      ],
    },
    {
      id: 'sugar',
      title: 'Blood sugar',
      blocks: [
        { t: 'p', text: 'In type 2 diabetes the body’s cells respond poorly to insulin. Food cannot cure it, but it matters a great deal: weight loss, regular activity and a pattern that avoids large sugar spikes can improve control and, for some people, put the disease into remission. Anyone with diabetes should work with a doctor or dietitian.' },
        {
          t: 'table',
          head: ['Strategy', 'Why it helps'],
          rows: [
            ['Mix barley (mugi) or brown rice into white rice', 'Adds fibre and slows the glucose rise'],
            ['Eat vegetables and protein before the rice', 'Small studies show lower after-meal glucose'],
            ['Choose whole or minimally processed grains', 'Slower digestion than refined starch'],
            ['Avoid sugary drinks and sweet snacks', 'Large, quick sugar loads; strongly linked with weight gain and diabetes'],
            ['Cool cooked rice, then reheat (resistant starch)', 'Slightly lowers the glucose response; the effect is modest'],
            ['A little vinegar (such as in sunomono) with a meal', 'Small trials show a modest reduction in the after-meal rise; no substitute for treatment'],
            ['Walk for 10 to 15 minutes after eating', 'Muscles take up glucose; one of the most effective simple habits'],
            ['Protein and healthy fat at each meal', 'Slows stomach emptying'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Medicines and low blood sugar', text: 'If you take insulin or certain tablets, changing your diet can cause low blood sugar. Make changes with your medical team.' },
      ],
    },
    {
      id: 'plate',
      title: 'A heart-and-sugar plate, Japanese style',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Half the plate: vegetables, seaweed and mushrooms (cooked in a few ways).',
            'A palm-sized portion of fish, tofu, egg or lean meat.',
            'A smaller bowl of rice, ideally with barley or brown rice mixed in.',
            'Miso soup with vegetables, with the broth left unfinished if salt is a concern.',
            'Green tea or water instead of sugary drinks.',
            'Fish twice a week, and a handful of nuts or sesame most days.',
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/japanese/recipes-heart-and-blood-sugar', note: 'Recipes: kinpira, sunomono, simmered kabocha' }, { path: 'food-therapy/minerals/major-minerals', note: 'Potassium and sodium' }, { path: 'medicine/body-systems/the-heart-and-circulation', note: 'How the heart and circulation work' }] },
      ],
    },
  ],
  sources: [
    'Appel, L. J., et al. (1997). A clinical trial of the effects of dietary patterns on blood pressure (DASH). New England Journal of Medicine.',
    'He, F. J., et al. (2013). Effect of longer-term modest salt reduction on blood pressure. BMJ.',
    'Estruch, R., et al. (2018). Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with olive oil or nuts (PREDIMED). New England Journal of Medicine.',
    'Kurotani, K., et al. (2016). Quality of diet and mortality among Japanese men and women. BMJ.',
    'American Diabetes Association. Standards of Care in Diabetes: nutrition therapy.',
  ],
  related: ['food-therapy/minerals/major-minerals', 'food-therapy/japanese/recipes-heart-and-blood-sugar', 'medicine/body-systems/the-heart-and-circulation'],
}

export default guide
