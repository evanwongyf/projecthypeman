import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A picture shelf of everyday foods that do a lot of nutritional work for their price. None is a miracle on its own; together, eaten regularly, they make up the patterns (Mediterranean, Japanese, Nordic) linked to longer, healthier lives. Photos come from Wikimedia Commons, credited under each one.',
  nutshell: [
    'Aim for **variety and colour** across the week rather than any single “superfood”.',
    'The cheapest heroes are often the humblest: **lentils, beans, oats, eggs, cabbage, carrots, bananas, frozen spinach and canned sardines**.',
    'Fermented foods (yoghurt, kimchi, miso, natto) add live microbes; oily fish adds omega-3; leafy greens add folate and vitamin K.',
  ],
  sections: [
    {
      id: 'protein',
      title: 'Fish, eggs, meat and dairy',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-salmon', title: 'Salmon', body: 'Omega-3 (EPA, DHA), protein, vitamin D, B12. Frozen fillets are cheaper and just as good.' },
          { photo: 'f-sardines', title: 'Sardines', body: 'Omega-3, calcium (eat the soft bones), vitamin D, low mercury. A can costs about S$2.' },
          { photo: 'f-mackerel', title: 'Mackerel', body: 'One of the richest sources of omega-3; saba is a Japanese staple.' },
          { photo: 'f-eggs', title: 'Eggs', body: 'Complete protein, choline for the brain, lutein for the eyes, vitamin B12 and D.' },
          { photo: 'f-yogurt', title: 'Yoghurt', body: 'Protein, calcium, live cultures. Choose plain and add your own fruit.' },
          { photo: 'f-milk', title: 'Milk', body: 'Calcium, iodine, protein, B12. Fortified soy milk is the closest plant swap.' },
          { photo: 'f-beef', title: 'Lean beef', body: 'Haem iron, zinc and B12, easily absorbed. A few times a week is plenty.' },
          { photo: 'f-liver', title: 'Liver', body: 'The most nutrient-dense food there is: vitamin A, iron, B12, folate. Small portions; avoid in pregnancy (too much vitamin A).' },
        ] },
      ],
    },
    {
      id: 'plants-protein',
      title: 'Beans, lentils, soy and seeds',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-lentils', title: 'Lentils', body: 'Protein, fibre, iron and folate for pennies; red lentils cook in 20 minutes.' },
          { photo: 'f-chickpeas', title: 'Chickpeas', body: 'Protein and fibre; the base of hummus and chana masala.' },
          { photo: 'f-beans', title: 'Beans', body: 'Fibre linked to lower cholesterol and better blood sugar; canned beans are fine.' },
          { photo: 'f-tofu', title: 'Tofu', body: 'Complete plant protein; calcium-set tofu is rich in calcium.' },
          { photo: 'f-natto', title: 'Natto', body: 'Fermented soybeans rich in vitamin K2 and protein. An acquired taste.' },
          { photo: 'f-walnuts', title: 'Walnuts', body: 'Plant omega-3 (ALA), polyphenols. A small handful a day.' },
          { photo: 'f-almonds', title: 'Almonds', body: 'Vitamin E, magnesium, fibre and healthy fats.' },
          { photo: 'f-pumpkin-seeds', title: 'Pumpkin seeds', body: 'Magnesium, zinc and iron in a tablespoon.' },
          { photo: 'f-chia', title: 'Chia seeds', body: 'Fibre and ALA omega-3; thickens oats and puddings.' },
        ] },
      ],
    },
    {
      id: 'veg',
      title: 'Vegetables',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-spinach', title: 'Spinach', body: 'Folate, vitamin K, lutein; iron is better absorbed with vitamin C.' },
          { photo: 'f-broccoli', title: 'Broccoli', body: 'Vitamin C, K, folate and sulforaphane. Steam briefly.' },
          { photo: 'f-cabbage', title: 'Cabbage', body: 'Vitamin C and K for very little money; the base of kimchi and sauerkraut.' },
          { photo: 'f-carrot', title: 'Carrots', body: 'Beta-carotene (vitamin A) for eyes and skin; absorbed better with a little fat.' },
          { photo: 'f-sweet-potato', title: 'Sweet potato', body: 'Beta-carotene, fibre and potassium.' },
          { photo: 'f-tomato', title: 'Tomatoes', body: 'Lycopene, better absorbed from cooked tomatoes and olive oil.' },
          { photo: 'f-peppers', title: 'Bell peppers', body: 'More vitamin C than an orange.' },
          { photo: 'f-shiitake', title: 'Shiitake', body: 'Umami flavour, B vitamins, beta-glucans; sun-dried ones contain vitamin D.' },
          { photo: 'f-wakame', title: 'Wakame', body: 'Iodine, magnesium and fibre; a little goes a long way (iodine excess is possible with kombu).' },
          { photo: 'f-garlic', title: 'Garlic', body: 'Flavour without salt; small effects on blood pressure in trials.' },
        ] },
      ],
    },
    {
      id: 'fruit',
      title: 'Fruit',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-blueberries', title: 'Blueberries', body: 'Anthocyanins and fibre; frozen are cheaper.' },
          { photo: 'f-kiwi', title: 'Kiwifruit', body: 'Vitamin C and fibre; two a day helped constipation and sleep in small trials.' },
          { photo: 'f-orange', title: 'Oranges', body: 'Vitamin C, folate and fibre (the whole fruit beats juice).' },
          { photo: 'f-banana', title: 'Bananas', body: 'Potassium and quick energy; a good pre-exam snack.' },
          { photo: 'f-avocado', title: 'Avocado', body: 'Monounsaturated fat, fibre, potassium, folate.' },
        ] },
      ],
    },
    {
      id: 'grains-ferments',
      title: 'Grains, ferments, oils and drinks',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-oats', title: 'Oats', body: 'Beta-glucan fibre lowers LDL cholesterol; slow, steady energy.' },
          { photo: 'f-kimchi', title: 'Kimchi', body: 'Fermented cabbage with live cultures and vitamin C; salty, so moderate amounts.' },
          { photo: 'f-miso', title: 'Miso', body: 'Fermented soybean paste for soups and glazes; high in salt.' },
          { photo: 'f-olive-oil', title: 'Extra virgin olive oil', body: 'Polyphenols and monounsaturated fat at the heart of the Mediterranean diet.' },
          { photo: 'f-ginger', title: 'Ginger', body: 'Good evidence for nausea (pregnancy, motion sickness); warming in teas.' },
          { photo: 'f-turmeric', title: 'Turmeric', body: 'Curcumin is poorly absorbed; black pepper and fat help. Small effects on joint pain in trials.' },
          { photo: 'f-green-tea', title: 'Green tea', body: 'Catechins and a gentle caffeine dose with L-theanine for calm focus.' },
          { photo: 'f-dark-chocolate', title: 'Dark chocolate', body: 'Flavanols and magnesium; 70%+ in small squares.' },
        ] },
      ],
    },
  ],
  related: ['food-therapy/vitamins/overview-and-explorer', 'food-therapy/recipes/accessible-healthy'],
}

export default guide
