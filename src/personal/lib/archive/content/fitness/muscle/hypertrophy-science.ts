import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Muscle grows when you give it a reason to: load it hard enough, often enough, give it the materials to rebuild, and let it recover. The details of why are well studied, and they overturn several gym beliefs: you do not need very heavy weights, you do not need to feel a burn or be sore, and you do not always need to train to failure. This guide explains the mechanisms, what the research says about repetition ranges, proximity to failure, volume and frequency, how fast you can realistically gain, and what is still uncertain.',
  nutshell: [
    '**Mechanical tension**, the force fibres experience when they are activated near their limit while stretched and loaded, is the main driver of growth. Soreness and a "pump" are not reliable indicators.',
    'Hypertrophy is similar across a **wide range of loads (about 5 to 30+ reps)** provided sets are taken **close to failure** (roughly 0 to 3 reps in reserve); heavier loads are better for strength.',
    '**Volume** (hard sets per muscle per week) has a dose–response relationship with diminishing returns: about 10 or more weekly sets tends to beat fewer, and gains flatten at high volumes.',
    'Training each muscle **about twice a week** is a convenient way to spread volume; once equated for total volume, frequency matters little.',
    'Realistic gains: roughly **1 to 1.5% of body weight a month** in the first year of training, then progressively less (a heuristic, not a law).',
  ],
  sections: [
    {
      id: 'how',
      title: 'How a muscle grows',
      lead: 'From stimulus to bigger fibres.',
      blocks: [
        { t: 'p', text: 'A muscle is made of fibres, each packed with contractile protein (myofibrils) and containing many nuclei. When fibres are loaded hard, mechanosensors in the cell detect the tension and signal (through pathways including mTOR) for **muscle protein synthesis (MPS)** to rise above muscle protein breakdown. Repeated across weeks, a small positive balance each time adds contractile protein: the fibre gets thicker (**hypertrophy**). Large gains also recruit **satellite cells**, which donate extra nuclei to the fibre so it can support more protein; these nuclei appear to be retained for a long time, one explanation for "muscle memory" when someone retrains after a layoff.' },
        {
          t: 'math',
          tex: String.raw`\Delta M = \text{MPS}-\text{MPB},\qquad \text{net gain over time}=\sum_t\big(\text{MPS}_t-\text{MPB}_t\big)`,
          caption: 'Net muscle protein balance: growth happens only when synthesis exceeds breakdown, on average, over days and weeks.',
          where: [{ sym: '\\text{MPS}', def: 'muscle protein synthesis: the rate at which new muscle protein is built' }, { sym: '\\text{MPB}', def: 'muscle protein breakdown: the rate at which it is degraded and recycled' }],
          syntax: [
            { sym: '\\text{MPS}-\\text{MPB}', say: 'the balance of building and removal. Effect: positive means growth, negative means loss. Why: muscle mass is the stock, and the two rates are the flows into and out of it.' },
            { sym: '\\sum_t', say: 'adding up many days. Effect: a single session adds a tiny amount; growth is the accumulation of hundreds of small positive balances. Why: the visible change in muscle takes weeks because each day’s net gain is a fraction of a percent.' },
          ],
          worked: {
            title: 'A back-of-envelope gain',
            steps: ['A 70 kg man holds about 28 kg of skeletal muscle. A well-run first year might add 4 to 5 kg of it.', '4.5 kg over 365 days is about 12 g of muscle a day on average.', 'Each gram is about 20 to 25% protein by weight: roughly 3 g of net protein retained per day beyond what is broken down.'],
            answer: 'Muscle gain is small in daily terms: a few grams of protein a day retained. That is why consistency over months matters more than any single session, and why a small calorie surplus is enough.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Mechanical tension', tag: 'primary driver', body: 'High force through fibres, especially in a stretched position, near the end of a hard set when all fibres, including the large ones, are recruited. Any load works if the set is hard enough.' },
            { title: 'Metabolic stress', tag: 'probably secondary', body: 'The burn and pump from accumulated metabolites. It accompanies high-rep and blood-flow-restricted training; whether it drives growth beyond the tension it goes with is doubtful.' },
            { title: 'Muscle damage', tag: 'not required', body: 'Soreness shows the muscle met an unfamiliar stress. It fades with repetition and is not a guide to whether a session worked. Excessive damage can reduce the training you can do next.' },
            { title: 'Neural adaptation', tag: 'early strength', body: 'In the first weeks strength rises faster than muscle size because you learn to activate muscle better. Do not judge early progress only on the mirror.' },
          ],
        },
      ],
    },
    {
      id: 'reps',
      title: 'Loads, reps and proximity to failure',
      lead: 'What matters is how hard the set is, not the number on the bar.',
      blocks: [
        { t: 'p', text: 'Meta-analyses (Schoenfeld and colleagues, 2017 and later) comparing low loads (around 30 to 50% of one-rep max, 20 to 40 reps) with heavy loads (above 60%, fewer than 15 reps) found **similar hypertrophy** when sets were taken to or near failure, while heavy loads produced larger strength gains. The reason is that near failure, even a light load recruits all the fibres, and fibres under high tension grow. A set stopped far from failure, with a light weight, does not.' },
        {
          t: 'math',
          tex: String.raw`\text{reps in reserve (RIR)}=\text{reps you could do}-\text{reps you did},\qquad \text{effective reps}\approx\text{the last }3\text{ to }5\text{ reps before failure}`,
          caption: 'Reps in reserve as a practical measure of effort, and the idea of "effective reps".',
          where: [{ sym: '\\text{RIR}', def: 'how many more clean reps you could have performed if you had continued until you could not' }],
          syntax: [
            { sym: '\\text{RIR}=\\text{possible}-\\text{done}', say: 'the gap to failure. Effect: RIR 0 is failure, RIR 2 means you stopped two reps short. Why: it turns a vague feeling of effort into a number you can record and compare.' },
            { sym: '\\text{effective reps}', say: 'the reps at the end of a set when bar speed has slowed and all fibres are recruited. Effect: these are the reps that provide most of the growth stimulus. Why: early reps in a hard set are easy and recruit only the smaller fibres.' },
          ],
          worked: {
            title: 'Two ways to do a set',
            steps: ['A: 10 reps with a weight you could lift 20 times (RIR 10): mostly easy reps; little stimulus.', 'B: 10 reps with a weight you could lift 12 times (RIR 2): the last four to five reps are hard.', 'C: 25 reps with a weight you could lift 27 times (RIR 2): also near failure.'],
            answer: 'B and C should grow muscle about equally, while A is a warm-up. Pick the rep range that suits the exercise (heavier for squats, lighter for isolations and joints that dislike heavy loads), and finish near failure.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Failure is optional', text: 'A 2023 meta-analysis found no clear hypertrophy advantage for training to failure compared with stopping 1 to 3 reps short. Failure costs more recovery, so most of your sets can finish at RIR 1 to 3, with the last set of an isolation exercise occasionally taken to failure.' },
      ],
    },
    {
      id: 'dose',
      title: 'Volume and frequency',
      lead: 'How much, and how often.',
      blocks: [
        {
          t: 'bars',
          title: 'Average muscle size gain by weekly sets per muscle (Schoenfeld, Ogborn and Krieger, 2017)',
          unit: '% gain',
          min: 0,
          max: 12,
          decimals: 1,
          items: [
            { label: 'Fewer than 5 sets a week', value: 5.4 },
            { label: '5 to 9 sets a week', value: 6.6 },
            { label: '10 or more sets a week', value: 9.8 },
          ],
          caption: 'Pooled average gains across studies, mostly 6 to 12 weeks long. The study groups are rough, but the shape is consistent: more weekly sets, more growth, with diminishing returns and wide differences between people.',
        },
        { t: 'fit-lab', viz: 'volume' },
        { t: 'p', text: 'More recent analyses, using finer data, show a **curved dose–response**: each additional weekly set adds less than the previous one, and individuals differ widely in how much they can recover from. A sensible start is about **10 hard sets per muscle per week**, rising to 15 to 20 for muscles you want to prioritise if you are recovering well, then reducing when progress or recovery stalls. **Frequency** is mainly a way to distribute that volume: sets beyond about 6 to 10 in one session for the same muscle tend to be less productive, so splitting weekly volume over two or three sessions is efficient. When total volume is equal, training a muscle once or twice a week gives similar results (Schoenfeld, 2019).' },
      ],
    },
    {
      id: 'rates',
      title: 'How fast can you gain?',
      lead: 'Realistic expectations.',
      blocks: [
        {
          t: 'table',
          head: ['Training experience', 'Approximate gain rate (heuristic)', 'Example for a 70 kg person'],
          rows: [
            ['Year 1 (novice)', '1 to 1.5% of body weight per month', '0.7 to 1 kg a month'],
            ['Year 2', '0.5 to 1% per month', '0.35 to 0.7 kg a month'],
            ['Year 3', '0.25 to 0.5% per month', '0.2 to 0.35 kg a month'],
            ['Year 4 and beyond', 'Under 0.25% per month', 'Rarely above 1 to 2 kg a year'],
          ],
          caption: 'A rule of thumb popularised by Lyle McDonald and Alan Aragon, built from coaching experience and limited data. Individuals vary a great deal with genetics, age, sex and consistency. It describes lean mass, so some weight gained will also be fat.',
        },
        { t: 'p', text: 'Several factors influence your rate: genetics (some people grow more from the same training), age (gains continue into later life, though more slowly), training status, nutrition, sleep, and consistency. The lesson for the first year is that fast progress is normal and slows predictably, so do not infer from a stall at year three that something is broken. In the next guides you will see how to progress the load and how to choose the exercises.' },
      ],
    },
  ],
  sources: [
    'Schoenfeld, B. J. (2010). The mechanisms of muscle hypertrophy and their application to resistance training. *Journal of Strength and Conditioning Research*, 24(10).',
    'Schoenfeld, B. J., Grgic, J., Ogborn, D. & Krieger, J. W. (2017). Strength and hypertrophy adaptations between low- vs. high-load resistance training. *Journal of Strength and Conditioning Research*, 31(12).',
    'Schoenfeld, B. J., Ogborn, D. & Krieger, J. W. (2017). Dose-response relationship between weekly resistance training volume and increases in muscle mass. *Journal of Sports Sciences*, 35(11).',
    'Schoenfeld, B. J., Grgic, J. & Krieger, J. (2019). How many times per week should a muscle be trained to maximize muscle hypertrophy? *Journal of Sports Sciences*, 37(11).',
    'Refalo, M. C. et al. (2023). Influence of resistance training proximity-to-failure on skeletal muscle hypertrophy: a systematic review with meta-analysis. *Sports Medicine*, 53.',
    'Gundersen, K. (2016). Muscle memory and a new cellular model for muscle atrophy and hypertrophy. *Journal of Experimental Biology*, 219.',
  ],
  related: ['fitness/muscle/progressive-overload-and-volume', 'fitness/muscle/exercise-selection', 'fitness/muscle-nutrition/protein-for-muscle', 'fitness/principles', 'fitness/strength/basics'],
}

export default guide
