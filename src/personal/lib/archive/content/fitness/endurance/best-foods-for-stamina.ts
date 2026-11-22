import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The best foods for stamina are mostly carbohydrate: they refill the glycogen that fuels hard and long efforts. Around that foundation sit a few specific helpers, iron for oxygen transport, nitrate from vegetables such as beetroot for a small economy gain, caffeine, and enough protein and fluid for recovery. This guide lists the foods that work before, during and after training, gives a table of carbohydrate sources (with local choices), covers iron and nitrate, shows sample menus for a heavy training day and race morning, and explains the role of the glycaemic index.',
  nutshell: [
    '**Daily carbohydrate for endurance training: about 5 to 8 g/kg** for 1 to 3 hours of training a day, up to 8 to 12 g/kg on very heavy days; **protein about 1.2 to 1.8 g/kg**; the rest from fat.',
    '**Best carbohydrate sources:** rice, noodles, oats, bread, potatoes and sweet potatoes, bananas and other fruit, dates, and sports drinks and gels for use during exercise.',
    '**Before:** familiar, low-fat, low-fibre carbohydrate 2 to 4 hours before; **during:** simple carbohydrate you can digest; **after:** carbohydrate plus protein (chocolate milk works as well as commercial recovery drinks).',
    '**Iron, nitrate and caffeine** have evidence: aim for iron-rich foods, consider **beetroot juice** (about 500 ml, 2 to 3 hours before) and **caffeine** (3 to 6 mg/kg).',
    'Foods to limit around key sessions: **high-fat, high-fibre and very spicy** meals, which slow digestion and may upset the stomach.',
  ],
  sections: [
    {
      id: 'carbs',
      title: 'Carbohydrate foods and drinks',
      lead: 'What to eat, and when.',
      blocks: [
        {
          t: 'table',
          head: ['Food (typical serving)', 'Carbohydrate', 'Approx. kcal', 'Best used', 'Notes'],
          rows: [
            ['White rice, cooked (1 bowl, 200 g)', '55 g', '260', 'Main meals, load, recovery', 'Low fibre, easy to digest; the standard Asian endurance fuel'],
            ['Noodles or bee hoon, cooked (1 bowl, 200 g)', '45 g', '220', 'Main meals', 'Choose soup or light sauce'],
            ['Oats (50 g dry) with milk', '45 g', '280', 'Breakfast 2 to 3 hours before', 'Moderate fibre; test in training'],
            ['Bread, 2 slices', '30 g', '160', 'Pre-event, snacks', 'White bread is lower in fibre; add jam or honey'],
            ['Banana (1 medium)', '27 g', '105', 'Before and during', 'Portable, with potassium'],
            ['Dates (3)', '54 g', '200', 'During, pre-event', 'Dense, natural sugars; easy to carry'],
            ['Sweet potato (150 g)', '30 g', '135', 'Meals', 'Lower glycaemic index; fibre'],
            ['Sports drink (500 ml)', '30 to 35 g', '120 to 140', 'During', 'Also supplies sodium and fluid'],
            ['Energy gel (1)', '20 to 25 g', '90 to 100', 'During (with water)', 'Convenient; some contain caffeine'],
            ['Chocolate milk (300 ml)', '30 g carb, 10 g protein', '210', 'After', 'Carbohydrate : protein about 3:1; cheap and effective'],
            ['Kaya toast and soft-boiled eggs (set)', '30 to 35 g carb, 12 g protein', '330 to 380', 'Breakfast, 2 to 3 hours before', 'A classic local pre-run meal; avoid the extra butter and sweet coffee if you are gut-sensitive'],
          ],
          caption: 'Typical values from food composition tables; labels and portions vary. A bowl of rice is the most widely available, cheapest and best-tolerated base for an endurance meal in Singapore.',
        },
        {
          t: 'math',
          tex: String.raw`\text{daily CHO (g)}=g_c\times m,\qquad g_c=\begin{cases}5\text{ to }7 & 1\text{ h/day moderate}\\ 6\text{ to }10 & 1\text{ to }3\text{ h/day}\\ 8\text{ to }12 & >4\text{ h/day}\end{cases}`,
          caption: 'Daily carbohydrate in grams, from body mass and the volume of training (sports-nutrition guidance).',
          where: [{ sym: 'g_c', def: 'carbohydrate in grams per kilogram per day' }, { sym: 'm', def: 'body mass in kilograms' }],
          syntax: [{ sym: 'g_c\\times m', say: 'the daily carbohydrate target. Effect: scales with both body size and training volume. Why: glycogen use and replacement rise with the work done.' }],
          worked: {
            title: 'A 60 kg runner training 90 minutes a day',
            steps: ['Target of 6 to 8 g/kg: 360 to 480 g a day.', 'In bowls of rice (55 g each): about 7 to 9 bowls equivalent, spread across rice, bread, fruit, oats and drinks.', 'A day: oats and banana (75 g), toast (30 g), lunch with 1.5 bowls rice (80 g), snack with fruit and yoghurt (45 g), sports drink on the run (35 g), dinner with 1.5 bowls rice (80 g) and fruit (30 g) = about 375 g.'],
            answer: 'Reaching 6 g/kg takes real food: most people who undereat on hard weeks are short of carbohydrate. If appetite is the limit, use liquids and snacks.',
          },
        },
      ],
    },
    {
      id: 'helpers',
      title: 'Iron, nitrate, caffeine and the rest',
      lead: 'The evidence-backed extras.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Iron', tag: 'oxygen carrying', body: 'Endurance athletes, especially women and vegetarians, lose iron through sweat, gut bleeding and foot-strike haemolysis. Low ferritin impairs training. Eat red meat, liver, shellfish, tofu, lentils and fortified cereals with vitamin C; test ferritin before supplementing, as excess iron is harmful.' },
            { title: 'Dietary nitrate', tag: 'small but real', body: 'Beetroot juice (about 6 to 8 mmol of nitrate, about 500 ml) 2 to 3 hours before lowers the oxygen cost of exercise and improves time-trial performance by about 1 to 3% in recreational athletes; less in elite athletes. Spinach, rocket and celery also contain nitrate.' },
            { title: 'Caffeine', tag: '3 to 6 mg/kg', body: 'Coffee, caffeine gum or gels 45 to 60 minutes before, or late in a long race, reduces perceived effort and improves endurance by 2 to 4% on average. Avoid late in the day; start with a small dose.' },
            { title: 'Protein and fat', tag: 'recovery and fuel', body: 'Endurance athletes need about 1.2 to 1.8 g/kg of protein to repair muscle. Fat provides about 20 to 35% of energy in the daily diet, mostly unsaturated, but limit it right before key sessions.' },
            { title: 'Fluids and electrolytes', tag: 'see the fuelling guide', body: 'Water, sports drinks and salty foods (miso soup, salted crackers, broth); coconut water supplies potassium but little sodium.' },
            { title: 'Whole-food variety', tag: 'micronutrients', body: 'Colourful vegetables and fruit supply vitamins and antioxidants; very high-dose antioxidant supplements may blunt training adaptation, so food first.' },
          ],
        },
      ],
    },
    {
      id: 'gi',
      title: 'Glycaemic index and food choice around training',
      lead: 'Fast and slow carbohydrate.',
      blocks: [
        { t: 'p', text: 'The **glycaemic index (GI)** ranks carbohydrate foods by how quickly they raise blood glucose compared with pure glucose (100). High-GI foods (white rice, white bread, sports drinks, potatoes) digest fast; low-GI foods (oats, legumes, most fruit, wholegrain bread) release slowly. For daily eating, lower-GI foods are generally healthier. For the hour or two around hard exercise and in the first hours after, higher-GI foods help refuel quickly, and for during-exercise fuel you want fast sugars. The effects of pre-exercise GI on performance are small and individual, so use what your stomach tolerates.' },
        {
          t: 'table',
          head: ['Timing', 'Aim', 'Examples (Singapore-friendly)'],
          rows: [
            ['3 to 4 hours before a long session or race', 'Full meal: carbohydrate, some protein, low fat and fibre', 'Rice with steamed chicken and a little vegetable; fish soup with bee hoon; oats with banana and milk'],
            ['1 hour before', 'Small, easy carbohydrate', 'A banana; toast with jam; 3 dates; half a sports drink'],
            ['During (over 60 to 75 minutes)', 'Simple carbohydrate 30 to 90 g per hour, with fluids', 'Sports drink, gel, chews, bananas, dates, rice cakes'],
            ['Within 1 hour after', 'Carbohydrate plus 20 to 30 g protein and fluids', 'Chocolate milk, rice with egg and chicken, a fruit and yoghurt smoothie, soy milk with a banana'],
            ['Rest of the day', 'Balanced meals with plenty of vegetables, fruit and fish', 'Economy rice with steamed fish, vegetables and tofu; soup-based noodles'],
          ],
        },
        {
          t: 'dodont',
          do: ['Practise your pre-race meal at least twice in training.', 'Keep portions small if you are anxious before a race, and favour liquid calories.', 'Salt your food or add a drink with sodium after long sweaty sessions.'],
          dont: ['Try new foods, supplements or spicy meals before a long session or race.', 'Take a large amount of fibre (beans, raw salads, bran) in the hours before.', 'Rely on caffeine to cover for a lack of sleep.'],
        },
        { t: 'callout', tone: 'note', title: 'Heavy hawker meals', text: 'Fried and coconut-rich dishes (nasi lemak, char kway teow, curry laksa) are high in fat and slow to digest. Enjoy them away from long runs; use steamed rice, soup noodles, plain bread and fruit before and after hard training.' },
      ],
    },
  ],
  sources: [
    'Thomas, D. T., Erdman, K. A. & Burke, L. M. (2016). Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: nutrition and athletic performance. *Journal of the Academy of Nutrition and Dietetics*, 116(3).',
    'Jones, A. M. (2014). Dietary nitrate supplementation and exercise performance. *Sports Medicine*, 44(S1).',
    'Grgic, J. et al. (2020). Wake up and smell the coffee: caffeine supplementation and exercise performance. *British Journal of Sports Medicine*, 54(11).',
    'Sim, M. et al. (2019). Iron considerations for the athlete: a narrative review. *European Journal of Applied Physiology*, 119.',
    'Karp, J. R. et al. (2006). Chocolate milk as a post-exercise recovery aid. *International Journal of Sport Nutrition and Exercise Metabolism*, 16(1).',
    'Health Promotion Board Singapore: Energy & Nutrient Composition of Food (focos.hpb.gov.sg).',
  ],
  related: ['fitness/endurance/fuelling-endurance', 'fitness/muscle-nutrition/best-foods-for-muscle', 'fitness/fuel', 'fitness/muscle-nutrition/carbs-fats-and-micronutrients', 'fitness/endurance/training-in-the-heat'],
}

export default guide
