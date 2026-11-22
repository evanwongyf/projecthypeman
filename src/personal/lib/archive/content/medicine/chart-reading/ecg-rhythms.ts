import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A rhythm strip is read the same way every time, in a fixed order, so you do not get distracted by whatever looks most dramatic. This page gives the order and the key patterns, from normal sinus rhythm through atrial fibrillation and heart block to cardiac arrest, with a simulator for each and a mystery-strip quiz.',
  nutshell: [
    'Read in order: **rate, rhythm (regular or not), P waves, PR interval, QRS width**, then the ST segment and T wave.',
    'The two questions that sort most rhythms: **is the QRS narrow or wide?** and **is it regular or irregular?**',
    '**Irregularly irregular with no P waves** is atrial fibrillation. **Sawtooth at 300** is atrial flutter.',
    'A **wide, fast, regular** rhythm is ventricular tachycardia until proven otherwise. **Chaos** is ventricular fibrillation; a **flat line** is asystole; both are cardiac arrest.',
    'Treat the **patient**, not the trace: a patient who is unwell with a “scary” rhythm needs help now.',
  ],
  sections: [
    {
      id: 'method',
      title: 'A systematic order',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Rate', body: 'Under 60 is slow (bradycardia), over 100 fast (tachycardia). Use the 300 rule or count in 6 seconds.' },
            { title: 'Rhythm', body: 'Are the R-R intervals regular, regularly irregular, or irregularly irregular? Check the distance between R waves with calipers or paper.' },
            { title: 'P waves', body: 'Present? One before every QRS? One QRS after every P? The relationship is the key to heart block.' },
            { title: 'PR interval', body: 'Under 120 ms is short, 120 to 200 normal, over 200 long (first-degree block).' },
            { title: 'QRS width', body: 'Under 120 ms is narrow (the beat started above the ventricles), over 120 ms wide (ventricular, or a bundle branch block).' },
            { title: 'ST segment and T wave', body: 'On the baseline? Elevated, depressed, inverted, peaked? These tell you about ischaemia and electrolytes.' },
          ],
        },
        {
          t: 'table',
          head: ['', 'Narrow QRS', 'Wide QRS'],
          rows: [
            ['Regular', 'Sinus rhythm, SVT, flutter with fixed block', 'VT, or a regular rhythm with a bundle branch block'],
            ['Irregular', 'Atrial fibrillation, ectopics', 'AF with a bundle branch block, ventricular ectopics'],
          ],
          caption: 'A first sort, not a diagnosis: always look at the patient too.',
        },
      ],
    },
    {
      id: 'lab',
      title: 'The rhythm lab',
      lead: 'Choose a rhythm, label the waves and measure with the calipers. Use the drawing tool to circle the feature that gives it away.',
      blocks: [{ t: 'med-chart', viz: 'ecg-lab', rhythm: 'afib' }],
    },
    {
      id: 'patterns',
      title: 'The patterns',
      blocks: [
        {
          t: 'table',
          head: ['Rhythm', 'Key features', 'Think'],
          rows: [
            ['Sinus rhythm', 'P before every QRS, PR 120 to 200 ms, rate 60 to 100, regular', 'Normal'],
            ['Sinus bradycardia / tachycardia', 'Normal beats, rate under 60 / over 100', 'Fitness, sleep, drugs / pain, fever, bleeding, anxiety'],
            ['Atrial fibrillation', 'No P waves, irregularly irregular, wobbly baseline', 'Stroke risk, rate control, anticoagulation'],
            ['Atrial flutter', 'Sawtooth at 300, ventricular rate often 150 (2:1) or 75 (4:1)', 'A fixed rate near 150'],
            ['SVT', 'Regular, narrow, 150 to 220, P waves hidden', 'Sudden onset palpitations'],
            ['First-degree AV block', 'PR over 200 ms, every P conducts', 'Usually benign'],
            ['Mobitz I (Wenckebach)', 'PR lengthens, then a dropped beat', 'Often benign (vagal tone, drugs)'],
            ['Mobitz II', 'Constant PR, sudden dropped beats', 'Dangerous, may need a pacemaker'],
            ['Complete heart block', 'P waves and QRS unrelated, ventricular rate 30 to 40', 'Needs urgent treatment'],
            ['Ventricular ectopics', 'Early wide beat, no P, compensatory pause', 'Often benign; look for causes'],
            ['Ventricular tachycardia', 'Wide, regular, fast (150 to 250)', 'Emergency'],
            ['Ventricular fibrillation', 'Chaotic, no QRS', 'Cardiac arrest: CPR and defibrillation'],
            ['Asystole', 'Flat line', 'Check leads and gain; cardiac arrest: CPR'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Shockable and non-shockable arrest rhythms', text: 'In a cardiac arrest, ventricular fibrillation and pulseless ventricular tachycardia are “shockable”: a defibrillator can restart a coordinated rhythm. Asystole and pulseless electrical activity are not shockable and need CPR and treatment of the cause. Defibrillators in public places (AEDs) analyse the rhythm and tell you what to do.' },
      ],
    },
    {
      id: 'quiz',
      title: 'Quiz: mystery strip',
      lead: 'Look at the strip and pick the rhythm. A new pattern appears each time.',
      blocks: [{ t: 'med-chart', viz: 'ecg-quiz' }],
    },
    {
      id: 'dangerous',
      title: 'When a rhythm is an emergency',
      blocks: [
        {
          t: 'dodont',
          do: ['Look at the patient first: pulse, breathing, colour, consciousness.', 'Call for help early for a fast, wide rhythm or a very slow one in an unwell patient.', 'Check the leads and the gain before calling asystole.'],
          dont: ['Do not treat a trace when the patient is well: artefact looks like VT.', 'Do not delay CPR to analyse a rhythm in someone who has collapsed with no pulse.', 'Do not rely on a screen number alone: the monitor rate can be wrong.'],
        },
        { t: 'callout', tone: 'note', title: 'Learn CPR', text: 'Anyone can learn basic life support and how to use an AED. In Singapore, the Singapore Heart Foundation and the Singapore Red Cross run courses.' },
      ],
    },
  ],
  sources: [
    'Hampton, J. (2019). The ECG Made Easy (9th ed.). Elsevier.',
    'Resuscitation Council UK (2021). Advanced Life Support guidelines.',
    'Surawicz, B., et al. AHA/ACCF/HRS recommendations for the standardization and interpretation of the electrocardiogram.',
  ],
  related: ['medicine/chart-reading/ecg-basics', 'medicine/chart-reading/ecg-12-lead', 'medicine/body-systems/the-heart-and-circulation'],
}

export default guide
