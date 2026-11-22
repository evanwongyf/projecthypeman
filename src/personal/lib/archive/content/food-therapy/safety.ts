import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Food is generally safe, which is why food therapy is attractive. But some foods and supplements interact with medicines, some are risky in pregnancy or for certain conditions, and the idea that “natural” means “harmless” is false. This page lists the main cautions, in plain language, and says when to talk to a doctor, pharmacist or registered dietitian. Read it before taking supplements, if you take medicines, or if you are pregnant or have a long-term condition.',
  nutshell: [
    '**Tell your doctor or pharmacist** about every supplement and herbal product you take. They can interact with medicines.',
    '**Warfarin**: keep vitamin K intake steady (greens, natto). **Thyroid medicine, MAO inhibitors, some blood pressure and kidney medicines** have specific food issues.',
    '**Pregnancy**: avoid excess vitamin A (liver), raw or undercooked fish and eggs, high-mercury fish and unpasteurised foods; take folic acid; moderate kombu and caffeine.',
    '**Kidney, thyroid and heart disease** change what is safe. Get individual advice before diet changes or supplements.',
    '**Choking** is a real risk with mochi and sticky foods for older adults and young children.',
  ],
  sections: [
    {
      id: 'meds',
      title: 'Food and medicines',
      blocks: [
        {
          t: 'table',
          head: ['Medicine or condition', 'Food concern', 'What to do'],
          rows: [
            ['Warfarin (blood thinner)', 'Vitamin K from greens and natto changes how well it works; large changes in intake alter blood thinning', 'Eat a steady amount of greens and natto; tell the prescriber about diet changes; newer anticoagulants are less affected'],
            ['Levothyroxine (thyroid)', 'Calcium, iron, soy and coffee near the dose can reduce absorption', 'Take on an empty stomach and leave several hours before calcium or iron'],
            ['MAO inhibitors (some antidepressants)', 'Foods high in tyramine (aged cheese, fermented soy products such as miso, soy sauce, natto, cured meats) can cause dangerous blood pressure rises', 'Ask the prescriber; follow the given list'],
            ['Statins and some blood pressure medicines', 'Grapefruit and pomelo (and some related citrus) can raise drug levels', 'Check with a pharmacist before eating grapefruit; data on other citrus such as yuzu are limited'],
            ['ACE inhibitors, ARBs, potassium-sparing diuretics', 'High potassium (supplements, salt substitutes, large amounts of potassium-rich food) can cause high blood potassium', 'Ask about potassium; avoid potassium salt substitutes unless told'],
            ['Metformin, long-term acid suppressants', 'Can lower vitamin B12 absorption', 'Ask about B12 testing'],
            ['Diabetes medicines (insulin, sulfonylureas)', 'Changing carbohydrate intake can cause low blood sugar', 'Adjust diet with your care team'],
            ['Kidney disease', 'Potassium, phosphorus, protein and salt may need limiting', 'See a renal dietitian; do not use supplements unadvised'],
          ],
        },
      ],
    },
    {
      id: 'pregnancy',
      title: 'Pregnancy and breastfeeding',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Take folic acid (usually 400 µg a day before and in early pregnancy), as advised in your country.',
            'Avoid liver and vitamin A supplements above the advised amounts: too much preformed vitamin A can harm the baby.',
            'Cook fish, eggs, meat and shellfish thoroughly. Avoid raw fish (sushi, sashimi), raw eggs and unpasteurised dairy.',
            'Limit high-mercury fish (shark, swordfish, king mackerel, some tuna) and follow local advice on oily fish.',
            'Limit caffeine to about 200 mg a day (roughly two cups of coffee).',
            'Avoid alcohol.',
            'Keep kombu and seaweed to moderate amounts; iodine is needed but excess can harm the thyroid. Avoid hijiki.',
            'Ask your midwife or doctor before any supplement.',
          ],
        },
      ],
    },
    {
      id: 'foods',
      title: 'Foods with specific cautions',
      blocks: [
        {
          t: 'table',
          head: ['Food', 'Concern', 'Advice'],
          rows: [
            ['Hijiki', 'Inorganic arsenic. The UK Food Standards Agency advises against eating it; Japan’s ministry says occasional small portions are not a concern', 'Eat rarely, if at all; choose wakame and nori instead; avoid in pregnancy and for young children'],
            ['Kombu and kelp supplements', 'Very high iodine; thyroid effects', 'Use for dashi, not as a daily food; avoid kelp tablets unless prescribed'],
            ['Raw fish and shellfish', 'Parasites (such as Anisakis), bacteria and viruses', 'Use freshness-tested or frozen fish for raw dishes; avoid in pregnancy and weakened immunity'],
            ['Raw eggs', 'Salmonella', 'Use fresh, high-quality eggs; avoid for vulnerable groups'],
            ['Honey', 'Infant botulism', 'Never give to babies under 12 months'],
            ['Mochi and sticky rice cakes', 'Choking risk, with several deaths each year in Japan, mostly older adults', 'Cut small, chew well, drink tea, avoid for young children and those with swallowing problems'],
            ['Grated or whole nuts and seeds', 'Allergy; choking in young children', 'Follow allergy advice; delay whole nuts for small children'],
            ['Brazil nuts', 'Selenium: a few a day can exceed the limit', 'One or two at most'],
            ['Liver', 'Vitamin A and heavy metals if eaten often', 'Small amounts and not in pregnancy'],
            ['Salty foods', 'Blood pressure and stroke', 'Reduce salt: see the minerals guide'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Food allergy',
          text: 'Common food allergens include soy, fish, shellfish, eggs, milk, wheat, peanuts, tree nuts and sesame. Allergic reactions can be severe. If you or a child has had a reaction (hives, swelling, breathing difficulty, vomiting), get assessed by a doctor, and call emergency services for any severe reaction.',
        },
      ],
    },
    {
      id: 'supplements',
      title: 'Supplements: when and how',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Supplement that may be advised'],
          rows: [
            ['Planning pregnancy or early pregnancy', 'Folic acid'],
            ['Vegan or very low in animal foods', 'Vitamin B12; sometimes iodine, vitamin D, algae-based omega-3'],
            ['Little sun, older age, dark skin at high latitude', 'Vitamin D'],
            ['Diagnosed iron-deficiency anaemia', 'Iron, with follow-up'],
            ['Diagnosed deficiency of any nutrient', 'The specific nutrient'],
            ['Intermediate age-related macular degeneration', 'AREDS2 formula on an eye specialist’s advice'],
            ['Malabsorption or after bariatric surgery', 'Multiple, under supervision'],
          ],
        },
        {
          t: 'dodont',
          do: ['Choose products tested by an independent body where available.', 'Take the stated dose and not more.', 'Tell your doctor about everything you take.', 'Stop and seek help if you feel unwell after starting.'],
          dont: ['Take high doses of fat-soluble vitamins (A, D, E, K) without advice.', 'Combine multiple products that contain the same nutrient.', 'Use supplements to treat a condition without a diagnosis.', 'Buy products that promise to “cure” disease.'],
        },
      ],
    },
    {
      id: 'help',
      title: 'When food is not enough',
      blocks: [
        { t: 'p', text: 'See a doctor or registered dietitian if you have unexplained weight loss, ongoing tiredness, persistent digestive problems, signs of anaemia, a chronic illness, a restricted diet you cannot widen, or if food worries or rules are taking over your life. Eating disorders are serious conditions, and food-therapy ideas should not be used to justify restriction. If you are concerned about yourself or someone else, seek help early.' },
        { t: 'callout', tone: 'note', title: 'Evidence and humility', text: 'Nutrition science is imperfect: many findings come from observational studies and results change. Where this shelf cites tradition, it says so. Where studies disagree, trust the broad, consistent advice: a varied diet of mostly plants, fish, whole grains and pulses, with less salt, sugar and ultra-processed food.' },
        { t: 'links', items: [{ path: 'food-therapy/start-here', note: 'Back to the start' }, { path: 'food-therapy/vitamins/overview-and-explorer', note: 'The nutrient explorer' }, { path: 'food-therapy/japanese/weekly-menu', note: 'A week of meals' }] },
      ],
    },
  ],
  sources: [
    'US National Institutes of Health, Office of Dietary Supplements. Dietary Supplement fact sheets and “Dietary Supplements: What You Need to Know”.',
    'World Health Organization. Healthy diet; and WHO guidance on nutrition in pregnancy.',
    'UK Food Standards Agency (2004). Advice on hijiki seaweed; Japan Ministry of Health, Labour and Welfare (2004) response.',
    'US Food and Drug Administration. Advice about eating fish for women who are or might become pregnant, and young children.',
    'Product information for warfarin, levothyroxine and MAO inhibitors, and national guidance on food-drug interactions.',
  ],
  related: ['food-therapy/start-here', 'food-therapy/vitamins/overview-and-explorer', 'food-therapy/minerals/trace-minerals'],
}

export default guide
