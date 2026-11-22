import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Supplements sit at the top of the pyramid: they matter only once training, calories, protein and sleep are in place, and most of them do little. A very short list has good evidence, led by creatine, with caffeine and protein powder as convenient helpers, and a long list does not. This guide sorts supplements by evidence, covers safety and product quality, explains meal timing (it matters less than daily totals), and gives two sample days of eating, a halal-friendly one and a vegetarian one, with the arithmetic shown.',
  nutshell: [
    '**Creatine monohydrate, 3 to 5 g a day**, is the best-supported performance supplement: it modestly improves strength and lean-mass gains and is safe in healthy people.',
    '**Caffeine (3 to 6 mg/kg, about 60 minutes before training)** improves performance; **protein powder** is convenience, not magic.',
    'Most others (BCAAs, testosterone boosters, fat burners, glutamine, most pre-workouts) have **little or no evidence** for the claims; some carry risks.',
    '**Timing**: spread protein through the day, eat before training, and do not worry about a narrow "anabolic window". Total daily intake matters far more.',
    'Choose **third-party tested** products, since supplements can be contaminated with banned or unlisted substances.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'Supplements sorted by evidence',
      lead: 'What is worth it, and what is not.',
      blocks: [
        {
          t: 'table',
          head: ['Supplement', 'Evidence', 'Dose', 'Notes'],
          rows: [
            ['Creatine monohydrate', 'Strong: dozens of trials; improves strength, power and lean mass', '3 to 5 g a day, any time; loading (20 g/day for 5 to 7 days) optional', 'Water-weight gain of 1 to 2 kg early on; safe for healthy kidneys; take daily'],
            ['Caffeine', 'Strong for performance and perceived effort', '3 to 6 mg/kg, 30 to 60 minutes before', 'Higher doses cause jitters and poor sleep; avoid late in the day'],
            ['Protein powder (whey, casein, soy, pea)', 'Strong as a source of protein; no special magic', '20 to 40 g per serving', 'Useful to reach daily target; not required'],
            ['Beta-alanine', 'Moderate for efforts of 1 to 4 minutes', '3 to 6 g a day split in doses', 'Tingling (paraesthesia) is harmless; little effect on pure strength'],
            ['Citrulline malate', 'Weak to moderate', '6 to 8 g before training', 'Small effect on reps near failure; uncertain'],
            ['Vitamin D, omega-3', 'Useful if deficient or low in the diet', 'As advised after a test or diet review', 'Food first'],
            ['BCAAs', 'Not useful if protein is adequate', '–', 'Complete protein already contains them'],
            ['Testosterone boosters, "fat burners", HMB, glutamine', 'Weak or absent', '–', 'Some products contain banned or unsafe ingredients; avoid'],
          ],
          caption: 'Summarised from the International Olympic Committee consensus statement (Maughan et al., 2018) and the ISSN position stands. Evidence quality changes; check recent reviews.',
        },
        {
          t: 'table',
          head: ['Creatine approach', 'Dose', 'Time to fill muscle stores', 'Notes'],
          rows: [
            ['Loading', '20 g a day (4 × 5 g) for 5 to 7 days, then 3 to 5 g', 'About one week', 'Faster; more water weight and some stomach upset'],
            ['Steady dose', '3 to 5 g a day', 'About 3 to 4 weeks', 'Same end result, simpler; take it every day, including rest days'],
          ],
          caption: 'Muscle creatine rises by roughly 20 to 40% when saturated. That gives more phosphocreatine for the first seconds of hard effort, so often one or two extra reps per set. Meta-analyses show about 1 to 2 kg more lean mass and a few per cent more strength over 4 to 12 weeks than training alone.',
        },
        { t: 'p', text: 'Over a year of training, a well-fed novice might gain 4 to 8 kg of lean mass; creatine might add half a kilogram to a kilogram of that, partly through allowing a little more work and partly through water in the muscle. It costs about $0.20 to $0.40 a day: a real but modest benefit, not a replacement for training, protein and sleep.' },
        {
          t: 'dodont',
          do: ['Pick products tested by independent schemes (Informed Sport, NSF Certified for Sport).', 'Check with a doctor if you have kidney disease, take medicines, are pregnant, or are under 18.', 'Buy from reputable sellers; in Singapore the Health Sciences Authority regulates health supplements.'],
          dont: ['Use products with "proprietary blends" that hide doses.', 'Combine several stimulants (pre-workout, caffeine pills, energy drinks).', 'Take supplements if you are subject to anti-doping rules without checking each ingredient (Anti-Doping Singapore).'],
        },
      ],
    },
    {
      id: 'timing',
      title: 'Meal timing',
      lead: 'What matters and what does not.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Eat 2 to 3 hours before', body: 'A meal with protein and carbohydrate, for example rice with chicken and vegetables. If you train early, a banana and yoghurt 30 to 60 minutes before is enough.' },
            { title: 'Eat within a few hours after', body: 'Protein (25 to 40 g) with carbohydrate. If you ate within 3 hours before, the "window" is wide, so there is no need to rush.' },
            { title: 'Spread protein', body: '3 to 5 feedings of 25 to 40 g across the waking day, with a protein-rich snack before bed if you like.' },
            { title: 'Hydrate', body: 'Drink fluids before and during sessions; in Singapore’s heat, add electrolytes for sessions over an hour.' },
          ],
        },
        { t: 'p', text: 'Studies comparing protein immediately before versus after training show little difference once daily intake is the same (Schoenfeld et al., 2013). For lifting sessions under about 90 minutes, there is no need for carbohydrate during the session. Nutrient timing becomes more important with two sessions a day, long endurance sessions, or very low-calorie diets.' },
      ],
    },
    {
      id: 'menus',
      title: 'Two sample days',
      lead: 'Templates to adjust.',
      blocks: [
        {
          t: 'table',
          head: ['Meal', 'Halal-friendly day (about 2,400 kcal, 160 g protein)', 'Approx. kcal', 'Protein'],
          rows: [
            ['Breakfast', '2 scrambled eggs, 2 slices wholemeal bread, a banana, 250 ml milk', '570', '29 g'],
            ['Lunch', 'Steamed chicken (120 g, skinless) with 1.5 bowls rice and vegetables', '530', '42 g'],
            ['Snack', '150 g Greek yoghurt with 30 g almonds', '260', '21 g'],
            ['Pre or post training', 'Whey (1 scoop) with a banana', '225', '25 g'],
            ['Dinner', 'Fish soup with bee hoon and extra fish (about 150 g), vegetables and a bowl of rice', '780', '45 g'],
            ['Total', '', '≈ 2,370', '≈ 162 g'],
          ],
          caption: 'Protein is about 2.1 g/kg for a 78 kg person, fat about 22% of calories, carbohydrate about 300 g. Add a bowl of rice or a snack for a bigger surplus; remove the snack and reduce rice for a deficit.',
        },
        {
          t: 'table',
          head: ['Meal', 'Ovo-lacto vegetarian day (about 2,250 kcal, 140 g protein)', 'Approx. kcal', 'Protein'],
          rows: [
            ['Breakfast', 'Oats (60 g) cooked in soy milk, 1 tbsp peanut butter, a banana', '510', '20 g'],
            ['Lunch', 'Stir-fried firm tofu (150 g) and vegetables with a bowl of rice', '565', '33 g'],
            ['Snack', '200 g Greek yoghurt with 30 g almonds', '290', '26 g'],
            ['Pre or post training', 'Soy or pea protein shake (1 scoop) with a banana', '225', '23 g'],
            ['Dinner', 'Lentil dhal (1 bowl), 2 rotis, 2 boiled eggs and vegetables', '665', '39 g'],
            ['Total', '', '≈ 2,255', '≈ 141 g'],
          ],
          caption: 'For vegans: replace eggs and dairy with extra tofu, tempeh, soy yoghurt and a fortified plant milk, and take a vitamin B12 supplement. For Buddhist vegetarians (no eggs, dairy permitted by some, no strong-smelling vegetables) the tofu, tempeh, soy and legume items still work.',
        },
        { t: 'callout', tone: 'tip', title: 'Make it your own', text: 'Treat the menus as shapes: a protein at every meal, a carbohydrate sized to your needs, vegetables, a little fat. Swap equivalents (chicken for fish, rice for noodles), measure the result for two weeks and adjust portions to move the scale slowly in the direction you want.' },
      ],
    },
  ],
  sources: [
    'Kreider, R. B. et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. *Journal of the International Society of Sports Nutrition*, 14(18).',
    'Maughan, R. J. et al. (2018). IOC consensus statement: dietary supplements and the high-performance athlete. *British Journal of Sports Medicine*, 52(7).',
    'Schoenfeld, B. J., Aragon, A. A. & Krieger, J. W. (2013). The effect of protein timing on muscle strength and hypertrophy: a meta-analysis. *Journal of the International Society of Sports Nutrition*, 10(53).',
    'Grgic, J. et al. (2020). Wake up and smell the coffee: caffeine supplementation and exercise performance. *British Journal of Sports Medicine*, 54(11).',
    'Health Sciences Authority Singapore (hsa.gov.sg): health supplements; Anti-Doping Singapore (antidopingsingapore.org).',
  ],
  related: ['fitness/muscle-nutrition/protein-for-muscle', 'fitness/muscle-nutrition/best-foods-for-muscle', 'fitness/muscle-nutrition/energy-and-surplus', 'fitness/fuel', 'fitness/endurance/fuelling-endurance'],
}

export default guide
