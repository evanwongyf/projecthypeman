import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Coaches have argued for decades about the best way to train runners. The good news: the successful approaches agree on more than they disagree. Here are the major schools of thought, what each emphasises, and what you can borrow from them.',
  nutshell: [
    'Almost every successful approach builds a big **aerobic base** of easy running.',
    'They differ in **how much** hard work, **what kind** (threshold or intervals), and **how it is controlled** (pace, heart rate, lactate, feel).',
    '**Lydiard**: base first, then hills, then speed. **Daniels**: precise paces from your VDOT.',
    '**Polarised (80/20)**: mostly easy, some very hard, little in between. **Norwegian**: lots of controlled threshold work, often twice a day.',
    '**Maffetone**: low-heart-rate base training. **Hansons**: cumulative fatigue. **Galloway**: run-walk.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'The schools compared',
      blocks: [
        {
          t: 'table',
          head: ['Approach', 'Big idea', 'Typical week', 'Good for'],
          rows: [
            ['Lydiard (1960s, New Zealand)', 'Long aerobic base phase, then hill strength, then speed, then a taper: the origin of periodisation', 'Lots of steady running, a weekly long run; hills and intervals only in later phases', 'Building durable endurance over months'],
            ['Daniels (VDOT)', 'Each workout has a purpose and a precise pace from your current fitness (VDOT): E, M, T, I and R paces', 'Easy running plus T and I sessions, with limits on how much of each', 'Runners who like structure and numbers'],
            ['Polarised / 80/20 (Seiler)', 'About 80% of sessions below the first threshold, 20% hard; avoid the "grey zone" in the middle', 'Many easy runs, 1–2 truly hard interval days', 'Most runners; it guards against doing every run moderately hard'],
            ['Norwegian method', 'High volume of easy running plus lots of threshold work, kept just below LT2, often two sessions in one day; measured with lactate', 'Two "double threshold" days, easy days, one hill or faster session', 'Experienced, high-volume runners; adapted versions for amateurs'],
            ['Maffetone (MAF)', 'Build the aerobic base with all runs under a heart rate of 180 minus age', 'Months of easy running only, then add speed', 'Beginners and people who always run too hard'],
            ['Hansons', '"Cumulative fatigue": six days a week, long run capped at about 26 km for the marathon', 'Easy days, speed or strength, a tempo at marathon pace, a long run', 'Marathoners with time for frequent running'],
            ['Galloway run-walk', 'Planned walk breaks from the start lower fatigue and injury', 'Run-walk intervals on every run', 'Beginners, older runners, first marathons'],
          ],
        },
      ],
    },
    {
      id: 'lydiard',
      title: 'Arthur Lydiard: base before speed',
      blocks: [
        {
          t: 'p',
          text: 'Lydiard coached New Zealand’s Olympic champions Peter Snell and Murray Halberg. His athletes ran huge volumes of steady aerobic running (famously around 100 miles a week) before any speed work, then did a hill phase for strength, then a short anaerobic phase to sharpen, then a taper. Nearly every modern plan, with its base, build, peak and taper, follows his structure.',
        },
      ],
    },
    {
      id: 'daniels',
      title: 'Jack Daniels: training with purpose',
      blocks: [
        {
          t: 'p',
          text: 'Daniels, an exercise physiologist, asked "what is the purpose of this workout?" and gave each one a pace from your current fitness, measured as **VDOT** from a recent race. Easy (E) pace builds the base, Marathon (M) pace is race rehearsal, Threshold (T) pace raises the lactate threshold, Interval (I) pace raises VO2max, and Repetition (R) pace builds speed and economy. Find yours with the [race predictor](@fitness/running/calculators).',
        },
      ],
    },
    {
      id: 'polarised',
      title: 'Polarised and 80/20',
      blocks: [
        {
          t: 'p',
          text: 'Stephen Seiler studied how elite endurance athletes in many sports actually train and found a consistent pattern: around 80% of sessions at low intensity and around 20% hard, with relatively little in the middle. Running every run at a "moderately hard" pace feels productive but leaves you too tired for real quality and not rested enough to recover. Matt Fitzgerald popularised this for amateurs as **80/20 running**.',
        },
      ],
    },
    {
      id: 'norwegian',
      title: 'The Norwegian method',
      blocks: [
        {
          t: 'p',
          text: 'Popularised by Marius Bakken, the Ingebrigtsen brothers and triathletes like Kristian Blummenfelt, this approach uses a lot of threshold work, split into intervals and kept just under the second threshold by measuring blood lactate (often around 2–4 mmol/L). Doing two threshold sessions in one day (a "double threshold") lets athletes accumulate a lot of quality work without the fatigue of going too hard. Amateur versions replace the lactate meter with pace and effort, and use one threshold session in place of two.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Do not copy elite volume',
          text: 'Elite plans are built on years of training and 150+ km weeks. Borrow the principles (control the intensity, lots of easy running) and scale the amounts to you.',
        },
      ],
    },
    {
      id: 'maf',
      title: 'Maffetone and heart-rate training',
      blocks: [
        {
          t: 'p',
          text: 'Phil Maffetone’s "180 formula" sets a maximum aerobic heart rate of 180 minus your age (adjusted up or down for health and experience). For a base period of several months, all runs stay at or below it. Many runners find this painfully slow at first, but it forces easy running and can build a large aerobic base. The formula is a rule of thumb, not a physiological law.',
        },
        { t: 'fit-tool', tool: 'hr' },
      ],
    },
    {
      id: 'borrow',
      title: 'What to borrow from all of them',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Make most of your running easy (Lydiard, Seiler, Maffetone).',
            'Give every hard session a clear purpose and pace (Daniels).',
            'Control intensity: finish threshold sessions feeling you had more in you (Norwegian).',
            'Build in stages: base, then strength, then speed, then a taper (Lydiard).',
            'Walk breaks are allowed and smart (Galloway).',
            'Consistency over months matters more than any single workout (all of them).',
          ],
        },
      ],
    },
  ],
  sources: [
    'Lydiard, A., & Gilmour, G. (1978). *Running the Lydiard Way*. World Publications.',
    'Daniels, J. (2014). *Daniels’ Running Formula* (3rd ed.). Human Kinetics.',
    'Seiler, S. (2010). What is best practice for training intensity and duration distribution in endurance athletes? *International Journal of Sports Physiology and Performance*, 5(3), 276–291.',
    'Fitzgerald, M. (2014). *80/20 Running*. NAL.',
    'Maffetone, P. (2010). *The Big Book of Endurance Training and Racing*. Skyhorse.',
    'Humphrey, L., Hanson, K., & Hanson, K. (2012). *Hansons Marathon Method*. VeloPress.',
    'Casado, A., et al. (2022). Training periodization, methods, intensity distribution, and volume in highly trained and elite distance runners: A systematic review. *International Journal of Sports Physiology and Performance*, 17(6), 820–833.',
  ],
  related: ['fitness/running/workouts', 'fitness/running/plans', 'fitness/running/physiology'],
}

export default guide
