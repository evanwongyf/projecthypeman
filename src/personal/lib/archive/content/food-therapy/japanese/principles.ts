import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Japan has some of the longest life expectancies in the world, and its food culture is often given credit. The truth is more interesting than the myth. Japan has a long tradition of treating food as care: the idea of “shokuyo” (eating for health), the meal pattern of one soup and three dishes, the emphasis on seasonality and variety, and a national programme of food education (shokuiku). It also has a real weakness, salt. This guide explains the ideas, what research supports, and how to apply the pattern in your own kitchen.',
  nutshell: [
    '**Shokuyo** (食養) is the Japanese tradition of using everyday food to maintain health and recover from illness. It draws on Chinese ideas of “medicine and food share a source” (**ishoku dogen**) and on Japanese writers such as Kaibara Ekiken (*Yojokun*, 1713).',
    '**Washoku**, traditional Japanese cuisine, was added to UNESCO’s list of intangible cultural heritage in 2013. Its pillars are variety, seasonality, balance, and respect for ingredients.',
    'The practical template is **ichiju-sansai**: rice, one soup, and three dishes (a main of fish, tofu or egg, and two vegetable sides).',
    'Large studies in Japan link closer adherence to the national food guide with **lower mortality**, but the diet is also **high in salt**, and healthy lifestyles confound the picture.',
    '“**Hara hachi bu**” (eat until about 80 per cent full) is a Confucian-inspired habit, popularised in Okinawa. It is a sensible guideline, though not proven by itself.',
  ],
  sections: [
    {
      id: 'history',
      title: 'Where the ideas come from',
      blocks: [
        {
          t: 'table',
          head: ['Idea', 'Origin', 'Meaning today'],
          rows: [
            ['Ishoku dogen (医食同源)', 'Chinese “medicine and food share an origin”, absorbed into Japan', 'Everyday food and medicine are on a continuum; eat to prevent illness, not only treat it'],
            ['Yojo (養生)', 'Kaibara Ekiken’s Yojokun (1713), a guide to living long', 'Moderation in eating, regular habits, avoiding extremes'],
            ['Shokuyo (食養)', 'Developed in the Meiji era by Ishizuka Sagen and later by Sagen’s followers, including macrobiotic ideas', 'Eating for health with whole foods; some claims (such as extreme brown-rice diets) are not supported by modern science'],
            ['Shokuiku (食育)', 'The 2005 Basic Act on Shokuiku (food and nutrition education) made it national policy', 'Teaching children and families about nutrition, cooking, local food and eating together'],
            ['Washoku (和食)', 'Traditional Japanese cuisine; UNESCO listed in 2013', 'A social practice around food, with seasonal ingredients and balanced meals'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Tradition is not proof', text: 'Some shokuyo and macrobiotic teachings (such as restricting to brown rice and a handful of foods) can cause nutrient deficiencies. This shelf uses the tradition as a source of good habits and recipes, and checks the claims against current evidence.' },
      ],
    },
    {
      id: 'pattern',
      title: 'The meal pattern: ichiju-sansai',
      blocks: [
        {
          t: 'flow',
          title: 'One soup, three dishes, and rice',
          nodes: [
            { label: 'Rice', sub: 'gohan: energy', tone: 'data' },
            { label: 'Soup', sub: 'shiru-mono: warmth, hydration, miso', tone: 'process' },
            { label: 'Main dish', sub: 'shushoku: fish, tofu, egg or meat', tone: 'model' },
            { label: 'Side dish one', sub: 'fukusai: simmered or dressed vegetables', tone: 'model' },
            { label: 'Side dish two', sub: 'fukufukusai: pickles, salad or seaweed', tone: 'output' },
          ],
          caption: 'A typical home meal. Portions are small, flavours are balanced, and the meal is built from many ingredients.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Rule', title: 'Five colours', body: 'White, black (or dark), red, yellow and green. Aim for a range of colours on the plate, which means a range of nutrients.' },
            { tag: 'Rule', title: 'Five tastes', body: 'Sweet, sour, salty, bitter and umami. A balanced meal includes a mix, which is satisfying with less salt or sugar.' },
            { tag: 'Rule', title: 'Five methods', body: 'Raw, simmered, grilled, fried and steamed. Mixing methods mixes textures and preserves different nutrients.' },
            { tag: 'Rule', title: 'Hara hachi bu', body: 'Stop eating when about 80 per cent full. It gives the body time to signal fullness.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the research shows',
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Source and caveat'],
          rows: [
            ['People who adhered more closely to the Japanese food guide (the “Spinning Top”) had lower overall and cardiovascular mortality', 'Japan Public Health Center cohort (Kurotani et al., BMJ 2016). Observational, so not proof of cause'],
            ['Greater adherence to a traditional Japanese pattern was associated with lower risk of some diseases, including stroke in some analyses, but also higher stomach cancer in some salt-heavy patterns', 'Cohort studies; results depend on which foods are counted'],
            ['Higher fish and soy intake is linked with lower heart-disease risk', 'Several cohorts; fish intake is among the more consistent findings'],
            ['Salt intake in Japan is high and linked with stroke and stomach cancer', 'National surveys and cohorts; this is the main weakness of the traditional diet'],
            ['Life expectancy in Japan is among the highest globally', 'Diet is one factor among many, including healthcare, low obesity, walking and social ties'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'What probably matters most',
          text: 'The pattern: plenty of vegetables, fish, soy, seaweed and tea, small portions, little sugar and red meat, and a lot of walking. Copying one “Japanese superfood” misses it.',
        },
      ],
    },
    {
      id: 'apply',
      title: 'Using the pattern at home',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start with the soup', body: 'A bowl of miso soup full of vegetables, tofu and seaweed is warming, hydrating and easy to vary.' },
            { title: 'Plan the three dishes', body: 'One protein dish (fish, tofu, egg), one cooked vegetable dish and one raw or pickled dish.' },
            { title: 'Choose your rice', body: 'Mix in barley or brown rice if you like; a smaller serving than a Western plate.' },
            { title: 'Season with dashi and aromatics', body: 'Dashi, ginger, sesame, citrus and shiso give flavour, so you can use less salt.' },
            { title: 'Eat slowly, stop at about 80 per cent', body: 'Put the chopsticks down between bites.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Use dashi, ginger, vinegar and citrus for flavour.', 'Eat fish a few times a week.', 'Include seaweed and mushrooms regularly.', 'Drink green tea.'],
          dont: ['Finish all the soup or noodle broth every time if salt is a concern.', 'Rely on pickles and soy sauce for flavour.', 'Eat huge portions of white rice with little else.', 'Believe that any one food is a cure.'],
        },
        { t: 'links', items: [{ path: 'food-therapy/japanese/pantry', note: 'The therapeutic pantry' }, { path: 'food-therapy/japanese/weekly-menu', note: 'A week of meals' }, { path: 'food-therapy/minerals/major-minerals', note: 'Salt and potassium' }] },
      ],
    },
  ],
  sources: [
    'Kurotani, K., et al. (2016). Quality of diet and mortality among Japanese men and women: Japan Public Health Center based prospective study. BMJ.',
    'UNESCO (2013). Washoku, traditional dietary cultures of the Japanese. Representative List of the Intangible Cultural Heritage of Humanity.',
    'Ministry of Health, Labour and Welfare, and Ministry of Agriculture, Forestry and Fisheries (Japan). Japanese Food Guide Spinning Top (2005).',
    'Cabinet Office (Japan). Basic Act on Shokuiku (2005).',
    'Historical overviews of shokuyo and macrobiotics in Japan (various authors).',
  ],
  related: ['food-therapy/japanese/pantry', 'food-therapy/japanese/weekly-menu', 'food-therapy/food-for-goals/heart-and-blood-sugar'],
}

export default guide
