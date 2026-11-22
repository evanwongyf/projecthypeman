import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An electrocardiogram (ECG or EKG) is a picture of the heart’s electrical activity drawn on a moving strip of squared paper. It looks like a scribble until you know the grid and the five or six shapes that repeat in every heartbeat. This page teaches the paper, the waves, the intervals and how to count a heart rate, using a simulated trace you can label and measure.',
  nutshell: [
    'The paper is a **grid**: one small square is **40 ms** wide and **0.1 mV** tall; one large square (5 small) is **200 ms** and **0.5 mV**.',
    'Every normal beat has a **P wave** (atria), a **QRS complex** (ventricles) and a **T wave** (ventricles resetting).',
    'Key numbers: **PR 120 to 200 ms**, **QRS under 120 ms**, **QTc under about 440 to 460 ms**.',
    'Count the **heart rate** with 300 ÷ large squares between R waves (regular rhythm), or QRS complexes in 6 seconds × 10 (irregular).',
    'The ECG shows **electricity, not pumping**: a normal-looking trace does not prove the heart is pumping well.',
  ],
  sections: [
    {
      id: 'paper',
      title: 'The paper and the grid',
      lead: 'The ECG machine moves the paper at a standard speed, so distance across the paper is time.',
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'Small square', 'Large square (5 small)'],
          rows: [
            ['Time (25 mm/s)', '0.04 s (40 ms)', '0.20 s (200 ms)'],
            ['Voltage (10 mm/mV)', '0.1 mV (1 mm)', '0.5 mV (5 mm)'],
            ['Large squares in 1 s', '', '5'],
            ['Large squares in 1 min', '', '300'],
          ],
          caption: 'The standard calibration is 25 mm per second and 10 mm per millivolt. The standard strip is 10 s long (250 mm).',
        },
        { t: 'callout', tone: 'tip', title: 'Always check the calibration', text: 'Look for the calibration block at the start of the trace: a small square wave 10 mm tall. If the amplitude is set to half, everything looks half as tall. Speeds of 50 mm/s are also used, which stretches the trace.' },
      ],
    },
    {
      id: 'beat',
      title: 'Anatomy of a heartbeat',
      lead: 'Select each part of the trace to see what it means.',
      blocks: [
        { t: 'med-chart', viz: 'ecg-anatomy' },
        {
          t: 'table',
          head: ['Part', 'What it shows', 'Normal'],
          rows: [
            ['P wave', 'Atrial depolarisation (atria contract)', 'Under 120 ms, up to 2.5 mm tall, upright in lead II'],
            ['PR interval', 'Time for the impulse to cross the AV node', '120 to 200 ms (3 to 5 small squares)'],
            ['QRS complex', 'Ventricular depolarisation (ventricles contract)', 'Under 120 ms (3 small squares)'],
            ['ST segment', 'Ventricles fully depolarised, between the two waves', 'On the baseline (isoelectric)'],
            ['T wave', 'Ventricular repolarisation (muscle resets)', 'Upright in most leads, asymmetrical'],
            ['QT interval', 'Total ventricular electrical time', 'Rate-dependent; QTc under about 440 ms (men) or 460 ms (women)'],
          ],
        },
      ],
    },
    {
      id: 'rate',
      title: 'Counting the heart rate',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: 'Regular rhythm', title: '300 ÷ large squares', body: 'Count the large squares between two R waves and divide 300 by it. Two squares is 150 per minute, three is 100, four is 75, five is 60, six is 50.' },
            { tag: 'Regular, fast or slow', title: '1500 ÷ small squares', body: 'For more precision count small squares between R waves and divide 1500 by it. 20 small squares is 75 per minute.' },
            { tag: 'Irregular rhythm', title: 'Count in 6 seconds × 10', body: 'Count the QRS complexes in a 6-second window (30 large squares) and multiply by 10. This averages out the irregularity.' },
          ],
        },
        {
          t: 'math',
          tex: '\\text{rate} = \\frac{300}{\\text{large squares between R waves}}',
          caption: 'The 300 rule works because 300 large squares of 0.2 s each take exactly one minute.',
          where: [{ sym: '300', def: '300 large squares pass in one minute at 25 mm/s' }],
          worked: { title: 'An example', steps: ['The R waves are 4 large squares apart.', 'Rate = 300 ÷ 4 = 75.'], answer: '75 beats per minute' },
        },
      ],
    },
    {
      id: 'lab',
      title: 'Try it: the strip lab',
      lead: 'Pick a rhythm, label the waves, and drag the calipers to measure an interval. Then try the drawing tools to mark what you notice.',
      blocks: [
        { t: 'med-chart', viz: 'ecg-lab', rhythm: 'sinus' },
        {
          t: 'checklist',
          items: [
            'I can find the P wave, QRS and T wave in a beat.',
            'I measured the PR interval with the calipers (about 160 ms).',
            'I counted the rate two ways and got the same answer.',
            'I know that 1 small square is 40 ms and 1 large square is 200 ms.',
            'I can say whether each P wave is followed by a QRS.',
          ],
        },
      ],
    },
    {
      id: 'safety',
      title: 'What an ECG can and cannot tell you',
      blocks: [
        { t: 'callout', tone: 'warn', title: 'A teaching tool, not medical advice', text: 'The traces on this page are simulations. Reading real ECGs takes supervised practice, and a trace must always be read together with the patient: how they look, their symptoms, their pulse and blood pressure. If you or someone else has chest pain, collapse, fainting or palpitations, call emergency services.' },
        { t: 'list', items: ['A normal ECG does not rule out heart disease, especially early in a heart attack.', 'The ECG shows electrical activity, not how well the heart pumps (for that you need an echocardiogram).', 'Artefact (movement, loose leads, shivering, mains interference) can mimic arrhythmias, so always look at the patient.'] },
      ],
    },
  ],
  sources: [
    'Hampton, J. (2019). The ECG Made Easy (9th ed.). Elsevier.',
    'Garcia, T. B. (2015). 12-Lead ECG: The Art of Interpretation (2nd ed.). Jones and Bartlett.',
    'Resuscitation Council UK. Guidelines for adult advanced life support.',
  ],
  related: ['medicine/chart-reading/ecg-rhythms', 'medicine/chart-reading/ecg-12-lead', 'medicine/body-systems/the-heart-and-circulation'],
}

export default guide
