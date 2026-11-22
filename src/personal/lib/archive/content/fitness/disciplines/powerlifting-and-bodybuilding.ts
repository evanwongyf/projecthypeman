import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Powerlifting and bodybuilding are the two best-known strength traditions and look similar from outside, since both involve a gym and heavy weights. They train differently because they are judged differently: powerlifting asks how much you can lift on three exercises, so it practises those exercises with heavy loads and peaks for a date; bodybuilding is judged on appearance, so it trains every muscle with volume and cycles body fat, with an extended diet before a show. This guide describes each: the lifts and rules, how training is structured, scoring, preparation for a contest and the risks to know.',
  nutshell: [
    '**Powerlifting**: squat, bench press, deadlift; three attempts each; the heaviest successful attempts add to the **total**; ranked within weight classes and by points formulas (IPF GL Points, Dots).',
    'Training is built on **frequent heavy practice of the three lifts**, accessory work for weak points, and a **peak** of about 8 to 16 weeks ending with a taper.',
    '**Bodybuilding** is judged on muscle size, symmetry, proportion and conditioning (leanness); training uses high volume near failure and many exercises.',
    '**Contest preparation** involves a long, gradual fat-loss phase and recovery afterwards; it carries physical and psychological risks and benefits from coaching.',
  ],
  sections: [
    {
      id: 'pl',
      title: 'Powerlifting',
      lead: 'The total.',
      blocks: [
        { t: 'p', text: 'A powerlifting meet has three events: **squat** (descend until the hip crease passes below the top of the knee, then stand), **bench press** (lower to the chest, pause, press to lockout) and **deadlift** (lift from the floor to standing). Each lifter has three attempts per lift, and the best successful attempt in each counts toward the total. Judges give white or red lights. Federations differ on equipment (raw or with supportive gear), drug testing and rules. Lifters compete in bodyweight classes, with age divisions, and results can be compared across classes using a points formula.' },
        {
          t: 'math',
          tex: String.raw`\text{Total}=S_{\max}+B_{\max}+D_{\max},\qquad \text{Points}=\text{Total}\times f(\text{bodyweight},\text{sex})`,
          caption: 'The powerlifting total and the idea of a bodyweight-adjusted score.',
          where: [{ sym: 'S_{\\max},B_{\\max},D_{\\max}', def: 'the best successful squat, bench press and deadlift in competition' }, { sym: 'f', def: 'a coefficient from a fitted formula (IPF GL, Dots or others) that depends on sex and bodyweight' }],
          syntax: [
            { sym: 'S+B+D', say: 'the sum of three lifts in kilograms. Effect: it rewards balanced strength, since a failed attempt at any lift lowers it, and three failed attempts at one lift can disqualify you from the total. Why: it is the sport’s definition of strength.' },
            { sym: 'f(\\text{bodyweight},\\text{sex})', say: 'a multiplier that levels the playing field between lifters of different sizes. Effect: a 60 kg lifter with a 400 kg total can score as well as a 120 kg lifter with a 700 kg total. Why: heavier lifters can lift more in absolute terms, but not in proportion to their weight.' },
          ],
          worked: {
            title: 'Choosing attempts',
            steps: ['A lifter’s best training squat is 180 kg for a single. Plan the meet: opener 160 kg (about 90% of the planned best), second 172.5 kg, third 182.5 kg.', 'The opener should feel easy so that one bad day does not bomb out; the third is a small personal best if all goes well.', 'Total across three lifts: with squat 172.5, bench 110 and deadlift 215, the total is 497.5 kg.'],
            answer: 'Attempt selection is a skill: open conservatively, build momentum, and take the last attempt only if the second moved well.',
          },
        },
        {
          t: 'table',
          head: ['Phase', 'Typical length', 'Emphasis'],
          rows: [
            ['Base / hypertrophy', '4 to 8 weeks', 'Moderate loads (6 to 10 reps), build muscle and work capacity, more variations'],
            ['Strength', '4 to 6 weeks', 'Heavier sets of 3 to 6 reps on the competition lifts, technique work'],
            ['Peaking', '3 to 4 weeks', 'Heavy singles and doubles near the competition weight; less volume'],
            ['Taper', '5 to 10 days', 'Reduce volume sharply, keep a little intensity, rest; arrive fresh'],
            ['Off-season', '2 to 6 weeks', 'Lighter work, address weak points and injuries'],
          ],
          caption: 'Many lifters use autoregulation (adjust loads by rate of perceived exertion or reps in reserve) instead of fixed percentages, because daily form varies.',
        },
      ],
    },
    {
      id: 'bb',
      title: 'Bodybuilding',
      lead: 'Size, shape, conditioning.',
      blocks: [
        { t: 'p', text: 'Competitive bodybuilding has several divisions (open, classic physique, men’s physique, women’s physique, figure, bikini and others) with different standards for muscularity and presentation. Judges assess **muscle size, symmetry and proportion, conditioning (leanness and muscle detail) and presentation**, including mandatory poses. Training emphasises volume and exercise variety to develop every muscle, usually in splits with each muscle trained once or twice a week; the principles in the muscle-building shelf apply directly.' },
        {
          t: 'steps',
          items: [
            { title: 'Off-season: build', body: 'A surplus of calories and progressive training to add muscle; body fat is allowed to rise moderately.' },
            { title: 'Contest preparation: cut', body: 'Typically 12 to 20 weeks of a gradual deficit (losing about 0.5 to 1% of body weight a week), high protein (about 2.3 to 3.1 g per kg of lean body mass in the guidance of Helms and colleagues, 2014), continued resistance training and careful tracking.' },
            { title: 'Peak week and show day', body: 'Fine-tuning of water, sodium, carbohydrates and training to look as full and defined as possible. These manipulations are risky and should not be done without experience.' },
            { title: 'Recovery', body: 'Return to maintenance gradually. Rapid regain, binge eating, disrupted hormones and body-image problems are well documented after contests.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The costs of very low body fat', text: 'Contest conditioning (about 5 to 8% body fat for men and 10 to 15% for women) is not a healthy state to hold. Studies of contest preparation show reductions in testosterone and other hormones, loss of menstruation in women, lower bone density, fatigue and mood disturbance, which mostly reverse on recovery. If you compete, use a qualified coach, keep the lean phase short, and plan the recovery. Use of performance-enhancing drugs is common at the top level of some federations and carries serious health risks.' },
      ],
    },
    {
      id: 'diff',
      title: 'How the training differs',
      lead: 'Same barbells, different priorities.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Powerlifting', 'Bodybuilding'],
          rows: [
            ['Reps', 'Low (1 to 6) on the main lifts, with some higher-rep accessories', 'Moderate to high (6 to 30), mostly near failure'],
            ['Exercises', 'The three lifts and a few close variations', 'Many exercises to cover every muscle from different angles'],
            ['Frequency', 'Each lift 2 to 4 times a week', 'Each muscle 1 to 3 times a week'],
            ['Judged on', 'Weight lifted', 'Appearance'],
            ['Diet', 'Maintain body weight in a class, or eat for strength', 'Surplus to build; deficit to cut'],
            ['Peaking', 'Taper to a single meet day', 'Cut for the stage, then regain'],
            ['Overlap', 'Hypertrophy supports strength; heavy lifts also build muscle', 'Strength training supports progressive overload'],
          ],
        },
        { t: 'p', text: 'Both reward patience, consistency and attention to technique. Many lifters spend part of the year in each mode: a bodybuilding-style block builds muscle, which a strength block then turns into heavier lifts. Local competitions exist in Singapore through the national federations; a coach and a club are the best way to start.' },
      ],
    },
  ],
  sources: [
    'International Powerlifting Federation (2023). *Technical Rules Book*; IPF GL Points formula (2020).',
    'Helms, E. R., Aragon, A. A. & Fitschen, P. J. (2014). Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation. *Journal of the International Society of Sports Nutrition*, 11(20).',
    'Rossow, L. M. et al. (2013). Natural bodybuilding competition preparation and recovery: a 12-month case study. *International Journal of Sports Physiology and Performance*, 8(5).',
    'Helms, E. R. et al. (2015). Recommendations for natural bodybuilding contest preparation: resistance and cardiovascular training. *Journal of Sports Medicine and Physical Fitness*, 55(3).',
    'Zourdos, M. C. et al. (2016). Novel resistance training-specific rating of perceived exertion scale. *Journal of Strength and Conditioning Research*, 30(1).',
  ],
  related: ['fitness/disciplines/disciplines-compared', 'fitness/strength/programmes', 'fitness/muscle/hypertrophy-science', 'fitness/muscle-nutrition/energy-and-surplus', 'fitness/muscle/periodisation-and-recovery'],
}

export default guide
