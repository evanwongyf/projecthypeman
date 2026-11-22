import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Protein supplies the amino acids that muscle is built from, and getting enough of it is the best-supported nutritional lever for gaining muscle. The research is clearer than the marketing: about 1.6 grams per kilogram of body weight a day captures most of the benefit, up to roughly 2.2 g/kg helps some people; spreading it across three to five meals is sensible; protein quality and leucine content matter, but total daily protein matters most; and plant proteins work just as well when the amount and mix are right. This guide covers the numbers, the evidence, the sources and how to hit your target on a budget.',
  nutshell: [
    '**Target: about 1.6 to 2.2 g of protein per kg of body weight a day** for muscle gain; the benefit plateaus near 1.6 g/kg on average (Morton et al., 2018), and more may help in a deficit.',
    '**Distribution:** 0.3 to 0.4 g/kg per meal over 3 to 5 meals (about 20 to 40 g each) keeps muscle protein synthesis stimulated through the day.',
    '**Leucine** is the amino acid that most strongly triggers synthesis; about 2 to 3 g per meal (found in about 25 to 40 g of animal protein) is a useful threshold.',
    '**Quality:** animal proteins and soy are complete and well digested; most plant proteins are lower in one or more essential amino acids, fixed by eating a variety or slightly more.',
    'Protein is **filling and has a high thermic effect**, helping in a diet; kidney damage in healthy people at these intakes is not supported by evidence.',
  ],
  sections: [
    {
      id: 'amount',
      title: 'How much?',
      lead: 'The meta-analysis numbers.',
      blocks: [
        { t: 'p', text: 'A meta-analysis of 49 studies and 1,863 participants (Morton et al., 2018) found that protein supplementation increased gains in muscle mass and strength during resistance training, with the benefit levelling off at a total intake of about **1.62 g/kg/day**; the upper confidence limit was **2.2 g/kg/day**, which is a sensible ceiling for those who want to be sure. The recommended dietary allowance for the general population, 0.8 g/kg, is a minimum to avoid deficiency, not an optimum for building muscle.' },
        {
          t: 'math',
          tex: String.raw`P_{\text{day}}=g\times m,\qquad P_{\text{meal}}=\frac{P_{\text{day}}}{n},\qquad \text{leucine}\approx 0.08\times P_{\text{meal}}\ (\text{animal protein})`,
          caption: 'Daily protein from a target in grams per kilogram, protein per meal, and the leucine content of a typical animal-protein meal.',
          where: [{ sym: 'g', def: 'the target in grams per kilogram of body weight (1.6 to 2.2)' }, { sym: 'm', def: 'body mass in kilograms' }, { sym: 'n', def: 'the number of meals and protein feedings per day' }],
          syntax: [
            { sym: 'g\\times m', say: 'the daily target. Effect: a heavier person needs more in absolute terms. Why: the target is proportional to body size. Use goal body weight if you carry a lot of body fat.' },
            { sym: 'P_{\\text{day}}/n', say: 'protein per meal. Effect: 4 meals and 140 g a day is 35 g each, comfortably above the 0.3 g/kg per meal needed to maximise synthesis. Why: synthesis per meal saturates, so spreading is more efficient than one big dose.' },
            { sym: '0.08\\times P_{\\text{meal}}', say: 'animal proteins are about 8% leucine, so 30 g gives about 2.4 g. Effect: reaches the leucine threshold. Why: plant proteins have less (about 6 to 7% in soy, lower in wheat), so slightly more is needed to match.' },
          ],
          worked: {
            title: 'A 75 kg person',
            steps: ['Target 1.8 g/kg: 1.8 × 75 = 135 g a day.', 'Four meals: 135/4 ≈ 34 g each. Check: 0.4 g/kg × 75 = 30 g per meal, so this is just above the usual per-meal target.', 'Leucine in a 34 g animal-protein meal: 0.08 × 34 = 2.7 g.'],
            answer: 'Four feedings of 30 to 35 g each meets the day’s target and the per-meal threshold. If three meals fit your day better, three feedings of 45 g each work almost as well.',
          },
        },
        {
          t: 'bars',
          title: 'Suggested daily protein for different situations (g per kg of body weight)',
          unit: 'g/kg',
          min: 0,
          max: 3,
          decimals: 1,
          items: [
            { label: 'Minimum to avoid deficiency (RDA)', value: 0.8, group: 'General health' },
            { label: 'Active people, general fitness', value: 1.2 },
            { label: 'Muscle gain, average benefit plateau', value: 1.6, group: 'Muscle gain' },
            { label: 'Muscle gain, upper practical range', value: 2.2 },
            { label: 'Fat loss while lifting (lean, larger deficit)', value: 2.4, group: 'Dieting' },
          ],
          caption: 'Values are typical recommendations drawn from the ISSN position stand, Morton et al. (2018) and Helms et al. (2014). Individual needs differ.',
        },
      ],
    },
    {
      id: 'quality',
      title: 'Protein quality: animal, plant and combinations',
      lead: 'Not all grams are equal, but most differences can be fixed.',
      blocks: [
        {
          t: 'table',
          head: ['Source', 'Quality (DIAAS, approximate)', 'Notes'],
          rows: [
            ['Whey, milk, egg, beef, chicken, fish', 'High (about 1.0 or above)', 'Complete, rich in leucine, well digested'],
            ['Soy (tofu, tempeh, soy milk)', 'Good (about 0.9)', 'Complete; trials show gains similar to animal protein when total intake matches'],
            ['Pea, rice, hemp (powders)', 'Moderate (0.5 to 0.8)', 'A blend such as pea plus rice covers the gaps; use a slightly larger serving'],
            ['Beans, lentils, chickpeas', 'Moderate', 'Low in methionine; combine with grains over the day'],
            ['Wheat (gluten, seitan)', 'Low (about 0.45) alone', 'Low in lysine; combine with legumes'],
          ],
          caption: 'DIAAS is the digestible indispensable amino acid score; values vary with the study and the way the food is prepared.',
        },
        { t: 'p', text: 'Trials comparing plant and animal protein with resistance training (reviewed by Messina and colleagues, 2018, and in Morton et al., 2018) find **no consistent difference in muscle gain** when total protein is adequate, particularly with soy. For vegetarians and vegans, the practical advice is to aim for the upper end of the range (about 2 g/kg), eat a variety of sources (soy, legumes, grains, seeds and nuts) and consider a pea-and-rice or soy powder. People who follow a halal, vegetarian or Buddhist vegetarian diet, common in Singapore, can meet the same targets with eggs, dairy, tofu, tempeh, legumes and fish where permitted.' },
        { t: 'callout', tone: 'note', title: 'Is high protein safe?', text: 'In healthy adults, intakes of 2 g/kg and above have not been shown to harm kidneys or bones in trials lasting months to years. People with existing kidney disease should follow medical advice. As always, prefer whole foods first and use powders for convenience.' },
      ],
    },
    {
      id: 'timing',
      title: 'Spreading protein through the day',
      lead: 'Meals, not just a post-workout shake.',
      blocks: [
        { t: 'p', text: 'Muscle protein synthesis rises after a protein-containing meal, peaks within two to three hours and returns to baseline even if amino acids stay available (the "muscle full" effect). Eating several moderate doses keeps synthesis stimulated more often than one very large dose. Schoenfeld and Aragon (2018) concluded that about 0.4 g/kg per meal across at least four meals reaches the daily target efficiently. Eating protein within a few hours before or after training is sensible, but the old idea of a 30-minute "anabolic window" is not supported when daily protein is adequate and you ate before training.' },
        {
          t: 'checklist',
          items: [
            'Is my daily protein at least 1.6 g/kg (or my goal-weight equivalent)?',
            'Does each of 3 to 5 meals contain 25 to 40 g of protein?',
            'Do I eat protein within a few hours of training?',
            'Do I have protein before bed? About 30 to 40 g may add a little overnight synthesis (casein, milk, yoghurt or eggs).',
            'If vegetarian, do I eat soy and varied legumes and grains, and aim near 2 g/kg?',
          ],
        },
        { t: 'p', text: 'For cost, compare **protein per dollar** rather than the label: eggs, tofu, canned fish, chicken thighs and breast, milk and lentils are cheap sources; whey powder is cost-effective per gram of protein; red meat and salmon cost more. The next guide lists specific foods and Singapore options.' },
      ],
    },
  ],
  sources: [
    'Morton, R. W. et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. *British Journal of Sports Medicine*, 52(6), 376–384.',
    'Schoenfeld, B. J. & Aragon, A. A. (2018). How much protein can the body use in a single meal for muscle-building? *Journal of the International Society of Sports Nutrition*, 15(10).',
    'Jäger, R. et al. (2017). International Society of Sports Nutrition position stand: protein and exercise. *Journal of the International Society of Sports Nutrition*, 14(20).',
    'Messina, M., Lynch, H., Dickinson, J. M. & Reed, K. E. (2018). No difference between the effects of supplementing with soy protein versus animal protein on gains in muscle mass and strength in response to resistance exercise. *International Journal of Sport Nutrition and Exercise Metabolism*, 28(6).',
    'Food and Agriculture Organization (2013). *Dietary protein quality evaluation in human nutrition* (DIAAS). FAO Food and Nutrition Paper 92.',
  ],
  related: ['fitness/muscle-nutrition/energy-and-surplus', 'fitness/muscle-nutrition/best-foods-for-muscle', 'fitness/muscle-nutrition/supplements-timing-and-menus', 'fitness/fuel', 'fitness/muscle/hypertrophy-science'],
}

export default guide
