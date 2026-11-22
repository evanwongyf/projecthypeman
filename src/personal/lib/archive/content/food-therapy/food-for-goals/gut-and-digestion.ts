import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Your gut holds trillions of bacteria, collectively the microbiome, that help digest food, make vitamins, train the immune system and talk to the brain. What you eat shapes which bacteria thrive. Fibre and fermented foods are the best-supported ways to nurture them. This guide covers what to eat for a healthy gut, what to do when your stomach is upset, how Japanese fermented foods fit in, and when digestive symptoms need a doctor.',
  nutshell: [
    '**Fibre** (25 to 30 g a day for adults) feeds gut bacteria, softens stools and lowers the risk of bowel disease. Most people eat too little.',
    '**Fermented foods** (miso, natto, yogurt, pickles, kimchi) are linked with a more diverse microbiome. A trial found that a high-fermented-food diet increased diversity and lowered inflammatory markers.',
    '**Variety** of plants matters: the more different plants you eat, the more varied your microbiome.',
    'For an **upset stomach**: small sips of fluid, rehydration solution if there is diarrhoea or vomiting, then bland, easy foods like okayu.',
    '**Blood in stools, black stools, unexplained weight loss, persistent pain or a change in bowel habits** need a doctor.',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-kimchi', title: 'Kimchi', body: 'Fermented vegetables' },
          { photo: 'f-yogurt', title: 'Yoghurt', body: 'Live cultures' },
          { photo: 'f-miso', title: 'Miso', body: 'Fermented soy' },
          { photo: 'f-chickpeas', title: 'Chickpeas', body: 'Prebiotic fibre' },
          { photo: 'f-kiwi', title: 'Kiwifruit', body: 'Helps constipation' },
          { photo: 'f-ginger', title: 'Ginger', body: 'Eases nausea' },
        ] },
      ],
    },
    {
      id: 'fibre',
      title: 'Fibre and the microbiome',
      blocks: [
        {
          t: 'table',
          head: ['Type of fibre', 'What it does', 'Food sources (Japanese examples)'],
          rows: [
            ['Insoluble', 'Adds bulk, speeds passage, prevents constipation', 'Whole grains, vegetables, burdock (gobo), mushrooms, brown rice'],
            ['Soluble', 'Forms a gel; lowers cholesterol and slows sugar absorption', 'Oats, barley, beans, apples, konjac, okra, natto'],
            ['Prebiotic (fermentable)', 'Feeds beneficial gut bacteria; they make short-chain fatty acids that nourish the gut lining', 'Burdock, onion, garlic, leek, asparagus, banana, oats, seaweed'],
            ['Resistant starch', 'Escapes digestion and feeds bacteria in the colon', 'Cooled rice, cooked and cooled potatoes, beans, firm bananas'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Add fibre slowly',
          text: 'Raising fibre suddenly can cause gas and bloating. Increase gradually over a couple of weeks, and drink more water. A common easy path: add one extra vegetable portion, swap to a mixed-grain rice, and add beans or natto a few times a week.',
        },
      ],
    },
    {
      id: 'fermented',
      title: 'Fermented foods',
      blocks: [
        {
          t: 'table',
          head: ['Food', 'What it is', 'Notes'],
          rows: [
            ['Miso', 'Soybeans fermented with koji (a mould, Aspergillus oryzae) and salt', 'Add miso at the end of cooking and do not boil, to preserve live cultures; it is salty'],
            ['Natto', 'Soybeans fermented with Bacillus subtilis', 'Rich in vitamin K2 and fibre; the sticky strands contain nattokinase, an enzyme. Warfarin users take care'],
            ['Tsukemono (pickles)', 'Vegetables pickled in salt, bran (nukazuke) or vinegar', 'Bran-bed pickles can contain lactic acid bacteria; many are very salty'],
            ['Yogurt, kefir', 'Fermented milk', 'Live cultures; choose unsweetened'],
            ['Kimchi, sauerkraut', 'Fermented vegetables', 'Live bacteria; salty'],
            ['Amazake', 'A sweet rice-koji drink', 'The koji version has no alcohol, while the sake-lees version has a trace; both contain sugars'],
            ['Shio-koji', 'A salted rice-koji seasoning', 'Tenderises and adds umami; salty'],
          ],
          caption: 'Heating (for example in cooked miso soup) kills live bacteria but not all benefits.',
        },
        { t: 'p', text: 'In a 2021 randomised trial at Stanford, healthy adults who ate more fermented foods for ten weeks had increased microbiome diversity and lower levels of inflammatory markers, while a group that increased fibre alone saw a different pattern. It is a small study, but it supports adding fermented foods as a sensible step.' },
      ],
    },
    {
      id: 'upset',
      title: 'When your stomach is upset',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Replace fluids first', body: 'Sip water, weak tea, broth or an oral rehydration solution little and often. Dehydration is the main danger of vomiting and diarrhoea, especially in babies and older people.' },
            { title: 'Rest the gut briefly', body: 'It is fine to skip a meal or two if you feel sick. Starving for days is not helpful.' },
            { title: 'Start with easy foods', body: 'Okayu (rice porridge), plain rice, toast, banana, soup, plain noodles. Eat small amounts. The old “BRAT” list is not essential; return to a normal diet as soon as you can.' },
            { title: 'Avoid irritants for a few days', body: 'Alcohol, very fatty or spicy food, large amounts of caffeine, and sugary drinks.' },
            { title: 'Ginger for nausea', body: 'Ginger tea or grated ginger has helped nausea in several trials; a reasonable, gentle option.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'See a doctor if',
          text: 'There is blood in vomit or stool, black stool, severe or constant pain, high fever, signs of dehydration (very little urine, dizziness, dry mouth), diarrhoea lasting more than a few days, unexplained weight loss, trouble swallowing, or symptoms in a baby, an elderly person or someone with a long-term condition.',
        },
      ],
    },
    {
      id: 'common',
      title: 'Common gut problems',
      blocks: [
        {
          t: 'table',
          head: ['Problem', 'Food-related steps that help', 'Note'],
          rows: [
            ['Constipation', 'Fibre, fluids, movement, prunes or kiwi; regular toilet routine', 'If new or persistent, see a doctor'],
            ['Bloating and gas', 'Increase fibre gradually; chew slowly; notice triggers (beans, onions, fizzy drinks)', 'Sudden or severe symptoms need a check'],
            ['Irritable bowel syndrome', 'Regular meals, soluble fibre; a low-FODMAP diet under dietitian guidance; peppermint oil helps some', 'Get diagnosed first; do not self-restrict long-term'],
            ['Heartburn and reflux', 'Smaller meals, avoid late eating, limit alcohol, coffee and large fatty meals', 'Persistent symptoms need a check'],
            ['Lactose intolerance', 'Lactose-free milk, yogurt and hard cheese are often tolerated; keep calcium up from other sources', 'Different from milk allergy'],
            ['Coeliac disease', 'Strict lifelong gluten-free diet', 'Needs a medical diagnosis before cutting out gluten'],
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/japanese/recipes-digestion-and-recovery', note: 'Recipes: okayu, chawanmushi, miso soup' }, { path: 'food-therapy/japanese/pantry', note: 'Miso, natto and other fermented foods' }, { path: 'medicine/body-systems/organ-systems-overview', note: 'The digestive system in context' }] },
      ],
    },
  ],
  sources: [
    'Wastyk, H. C., et al. (2021). Gut-microbiota-targeted diets modulate human immune status. Cell.',
    'Reynolds, A., et al. (2019). Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. The Lancet.',
    'Ernst, E., and Pittler, M. H. (2000) and later reviews on ginger for nausea.',
    'Cummings, J. H., and Macfarlane, G. T. (1991) and later reviews of fibre, short-chain fatty acids and gut health.',
  ],
  related: ['food-therapy/japanese/recipes-digestion-and-recovery', 'food-therapy/japanese/pantry', 'food-therapy/food-for-goals/immunity'],
}

export default guide
