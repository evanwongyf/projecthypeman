import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The best foods for muscle growth are not exotic. They are foods that deliver a lot of high-quality protein for the calories and the money, that you enjoy, and that fit your culture and kitchen. This guide ranks common foods by protein density, shows protein per serving and the trade-offs of each, and translates the list into hawker centre, kopitiam and supermarket choices in Singapore, including halal and vegetarian options and the dishes to order or avoid when you are trying to hit a protein target.',
  nutshell: [
    '**Protein density** (grams per 100 kcal) matters most when you are in a deficit; **protein per serving and per dollar** matter when you are gaining.',
    'The densest foods: **prawns, tuna in water, egg whites, chicken breast, lean pork, white fish, Greek yoghurt and whey**. Eggs, tofu, tempeh, salmon and lentils are less dense but cheap and nutritious.',
    'At the hawker centre, choose **steamed or soup-based dishes with extra protein** (chicken rice with skinless chicken, fish soup, yong tau foo, sliced fish bee hoon), and watch the oil, gravy and rice portion.',
    'Build meals from **a protein, a carbohydrate, a vegetable and a smaller portion of fat**, rather than looking for single "superfoods".',
  ],
  sections: [
    {
      id: 'density',
      title: 'Protein density: grams of protein per 100 kcal',
      lead: 'How much protein you get for the calories.',
      blocks: [
        {
          t: 'bars',
          title: 'Protein per 100 kcal (approximate, cooked or ready to eat)',
          unit: 'g protein / 100 kcal',
          min: 0,
          max: 26,
          decimals: 1,
          items: [
            { label: 'Prawns (cooked)', value: 24.2, group: 'Very high density' },
            { label: 'Tuna, canned in water', value: 22.4 },
            { label: 'Egg white', value: 21 },
            { label: 'Whey protein (per scoop)', value: 20 },
            { label: 'Chicken breast (cooked, no skin)', value: 18.8, group: 'High density' },
            { label: 'Pork tenderloin (cooked)', value: 18.2 },
            { label: 'Greek yoghurt (low fat)', value: 17 },
            { label: 'Lean beef sirloin (cooked)', value: 15.8 },
            { label: 'Firm tofu (higher-protein types)', value: 11.8, group: 'Moderate density: good value' },
            { label: 'Cottage cheese', value: 11.2 },
            { label: 'Tempeh', value: 10.4 },
            { label: 'Edamame (cooked)', value: 9.9 },
            { label: 'Salmon (cooked)', value: 9.6 },
            { label: 'Whole egg', value: 8.8 },
            { label: 'Lentils (cooked)', value: 7.8 },
            { label: 'Peanuts', value: 4.6, group: 'Low density: mostly fat or carbohydrate' },
            { label: 'White rice (cooked)', value: 2.1 },
          ],
          caption: 'Calculated from typical composition data (USDA FoodData Central and the Health Promotion Board’s food composition database), rounded. Values vary with the cut, brand and cooking method. A food’s protein per 100 kcal says nothing of its other nutrients: salmon and whole eggs carry omega-3, vitamin D and choline.',
        },
        {
          t: 'math',
          tex: String.raw`\text{density}=\frac{p}{E}\times100,\qquad \text{cost per 25 g protein}=\frac{25}{p_{\text{serving}}}\times\text{price per serving}`,
          caption: 'Two ways to compare foods: grams of protein per 100 kcal, and the price of 25 grams of protein.',
          where: [{ sym: 'p', def: 'protein in grams in a serving' }, { sym: 'E', def: 'energy in kilocalories in that serving' }],
          syntax: [{ sym: '(p/E)\\times100', say: 'protein per 100 kcal. Effect: chicken breast has 31 g protein in 165 kcal, giving 18.8; a cup of cooked rice has 4 g in 200 kcal, 2. Why: it shows how much protein comes with each calorie; useful when calories are limited.' }, { sym: '25/p_{\\text{serving}}\\times\\text{price}', say: 'the cost of a standard 25 g protein feeding. Effect: lets you compare an egg, a tin of tuna and a scoop of whey fairly. Why: price per serving does not reflect protein.' }],
          worked: {
            title: 'Which is cheaper per 25 g of protein?',
            steps: ['Eggs: 12.6 g in 100 g, a large egg (50 g) has about 6.3 g; 4 eggs give 25 g. At $0.40 each: $1.60.', 'Chicken breast: 31 g per 100 g cooked, so 80 g cooked gives 25 g, which is about 105 g raw. At $1.30 per 100 g raw: about $1.40.', 'Whey: 24 g per scoop at about $1 a scoop: $1.04.', 'Firm tofu: about 8 to 10 g per 100 g, so 250 g gives 25 g. At $0.40 per 100 g: $1.00.'],
            answer: 'Tofu, whey and eggs are all cheap per gram of protein; chicken is competitive and the best for density. Prices vary by shop and week; compare yours.',
          },
        },
      ],
    },
    {
      id: 'groups',
      title: 'Food groups for muscle',
      lead: 'What to put on the plate.',
      blocks: [
        {
          t: 'table',
          head: ['Group', 'Examples (protein per typical serving)', 'Strengths', 'Watch for'],
          rows: [
            ['Poultry and lean meat', 'Chicken breast 120 g cooked (37 g); chicken thigh (28 g); lean pork or beef 120 g (30 g)', 'Dense, complete, leucine-rich', 'Fatty cuts and skin raise calories; processed meats are high in salt'],
            ['Fish and seafood', 'Prawns 100 g (24 g); sliced fish 100 g (22 g); canned tuna 100 g (26 g); sardines (25 g); mackerel (24 g)', 'Dense, omega-3 in oily fish, low in calories', 'Mercury in large predator fish; fried seafood and sambal add fat'],
            ['Eggs', 'One large egg (6 g); three eggs (19 g)', 'Cheap, complete, versatile, rich in choline', 'Whole eggs have fat; two to three a day is fine for most people'],
            ['Dairy', 'Milk 250 ml (8 g); Greek yoghurt 170 g (17 g); cottage cheese 100 g (11 g)', 'Whey and casein, calcium, cheap', 'Lactose intolerance (try lactose-free); sweetened versions add sugar'],
            ['Soy', 'Firm tofu 150 g (15 g); tempeh 100 g (20 g); soy milk 250 ml (7 g); edamame 100 g (12 g)', 'Complete plant protein, cheap, halal and vegetarian-friendly', 'Fried tofu has more fat; flavoured soy milk has added sugar'],
            ['Legumes', 'Lentils, chickpeas, kidney beans 150 g cooked (13 g); dhal', 'Fibre, iron, cheap', 'Lower in methionine; large portions needed; gas'],
            ['Whole grains, nuts, seeds', 'Oats 40 g (5 g); wholemeal bread 2 slices (7 g); almonds 30 g (6 g); peanut butter 2 tbsp (8 g)', 'Carbohydrate, fibre, fats, some protein', 'Energy-dense; portion control when cutting'],
            ['Protein powders', 'Whey 30 g (24 g); casein; pea or soy blends (20 to 25 g)', 'Convenient and cost-effective', 'Choose products with third-party testing; powders are not necessary'],
          ],
        },
        {
          t: 'dodont',
          do: ['Put a palm-sized portion (25 to 40 g of protein) at each meal.', 'Choose lean cuts and cook by steaming, grilling, baking or in soups.', 'Keep convenient protein on hand: eggs, tinned tuna, yoghurt, tofu, a tub of whey.', 'Add vegetables to every meal and fruit through the day.'],
          dont: ['Rely on a single food. Variety covers more nutrients.', 'Count a protein bar as a meal; many are sweets with added protein.', 'Fear whole eggs or fish skin without a medical reason.'],
        },
      ],
    },
    {
      id: 'sg',
      title: 'Eating for muscle in Singapore',
      lead: 'Hawker centres, kopitiams and supermarkets.',
      blocks: [
        {
          t: 'table',
          head: ['Dish (typical serving)', 'Approx. calories', 'Approx. protein', 'Make it better'],
          rows: [
            ['Chicken rice, steamed (with skin)', '500 to 620 kcal', '25 to 30 g', 'Ask for skinless or remove the skin, add chicken, less rice or gravy, plus a vegetable side'],
            ['Fish soup with sliced fish and bee hoon or rice', '300 to 450 kcal', '25 to 35 g', 'Choose clear (not milk) soup; add egg or extra fish'],
            ['Yong tau foo (soup, with tofu, fish paste and vegetables)', '300 to 450 kcal', '20 to 30 g', 'Choose tofu, egg, fish, vegetables; limit fried items and fish balls (high fat and salt)'],
            ['Economy rice (rice, 1 meat, 2 vegetables)', '500 to 750 kcal', '25 to 40 g', 'Pick steamed or grilled fish or chicken and plain vegetables; less gravy'],
            ['Satay, 10 sticks with ketupat', '400 to 550 kcal', '25 to 35 g', 'Skip some peanut sauce; add cucumber'],
            ['Mee soto or chicken noodle soup', '350 to 500 kcal', '20 to 30 g', 'Add egg and chicken; drink less of the soup (salt)'],
            ['Nasi lemak with fried chicken wing and egg', '650 to 900 kcal', '25 to 35 g', 'High in saturated fat; share, or skip the extra fried items'],
            ['Roti prata, 2 plain with dhal', '450 to 550 kcal', '10 to 15 g', 'Low protein: add egg prata or a protein side'],
            ['Char kway teow, laksa', '600 to 800 kcal', '15 to 25 g', 'Occasional meal; low in protein for the calories'],
          ],
          caption: 'Estimates for typical servings; real values vary widely by stall. Check the Health Promotion Board’s Energy & Nutrient Composition of Food database (focos.hpb.gov.sg) for specific dishes.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Halal', tag: 'widely available', body: 'Malay and Muslim stalls offer grilled fish, chicken and beef, soto, satay and egg dishes; halal-certified supermarkets stock whey, tofu and canned fish. Check gelatine and certification in supplements.' },
            { title: 'Vegetarian and Buddhist vegetarian', tag: 'plan for protein', body: 'Tofu, tempeh, beancurd skin, edamame, lentils, eggs and dairy (for ovo-lacto vegetarians). Some vegetarian meals are rice- or noodle-heavy; add a soy or legume dish.' },
            { title: 'Supermarket picks', tag: 'budget', body: 'Eggs, frozen chicken breast and fish, canned tuna and sardines, tofu, tempeh, milk, plain yoghurt, oats and wholemeal bread. Frozen vegetables are good value.' },
            { title: 'Beverages', tag: 'hidden calories', body: 'Kopi and teh with condensed milk and sugar (about 100 to 150 kcal a cup), bubble tea (300 to 500 kcal), and soft drinks add calories without protein. Ask for "kosong" (no sugar) or "siu dai" (less sweet).' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Healthier Choice and the Nutri-Grade label', text: 'Singapore’s Healthier Choice Symbol marks products meeting nutrient criteria, and the Nutri-Grade label grades beverages A to D by sugar and saturated fat content. They are useful quick filters, but for muscle gain still look at protein and calories on the label.' },
      ],
    },
  ],
  sources: [
    'USDA FoodData Central (fdc.nal.usda.gov): composition values for chicken, eggs, fish, tofu, tempeh, legumes and dairy.',
    'Health Promotion Board Singapore. *Energy & Nutrient Composition of Food* database (focos.hpb.gov.sg) and Healthier Choice Symbol programme.',
    'Jäger, R. et al. (2017). ISSN position stand: protein and exercise. *Journal of the International Society of Sports Nutrition*, 14(20).',
    'Messina, M. et al. (2018). No difference between the effects of supplementing with soy protein versus animal protein on gains in muscle mass and strength in response to resistance exercise. *International Journal of Sport Nutrition and Exercise Metabolism*, 28(6).',
  ],
  related: ['fitness/muscle-nutrition/protein-for-muscle', 'fitness/muscle-nutrition/supplements-timing-and-menus', 'fitness/muscle-nutrition/energy-and-surplus', 'fitness/fuel', 'fitness/endurance/best-foods-for-stamina'],
}

export default guide
