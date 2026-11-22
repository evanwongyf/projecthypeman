import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A twelve-lead ECG looks at the heart from twelve angles. Each lead is a viewpoint, so a problem in one wall of the heart shows up in the leads that face it. This page explains the layout, the coronary territories, how to spot ST elevation (the sign of a STEMI heart attack), and how bundle branch block, high potassium and pericarditis differ.',
  nutshell: [
    'The **six limb leads** (I, II, III, aVR, aVL, aVF) look at the heart in a vertical plane; the **six chest leads** (V1 to V6) look across it in a horizontal plane.',
    'Leads that look at the same wall change together: **anterior** V1 to V4, **inferior** II, III and aVF, **lateral** I, aVL, V5 and V6.',
    '**ST elevation** in two or more neighbouring leads, in the right clinical setting, means a **STEMI**: a blocked coronary artery and a time-critical emergency.',
    '**Reciprocal** ST depression in the opposite leads supports a true STEMI.',
    '**Left bundle branch block** widens the QRS and distorts the ST segment; **hyperkalaemia** gives peaked T waves; **pericarditis** gives widespread, saddle-shaped elevation.',
  ],
  sections: [
    {
      id: 'leads',
      title: 'What the leads look at',
      blocks: [
        {
          t: 'table',
          head: ['Leads', 'Wall of the heart', 'Usual artery'],
          rows: [
            ['V1, V2', 'Septum', 'Left anterior descending (LAD)'],
            ['V3, V4', 'Anterior wall', 'LAD'],
            ['V5, V6, I, aVL', 'Lateral wall', 'Circumflex (LCx)'],
            ['II, III, aVF', 'Inferior wall', 'Right coronary artery (RCA) in most people'],
            ['V1 to V3 (ST depression)', 'Posterior wall (mirror image)', 'RCA or LCx'],
          ],
          caption: 'Coronary anatomy varies between people, so use this as a guide, not a rule.',
        },
        { t: 'p', text: 'The chest leads sit on the chest wall: V1 and V2 either side of the breastbone in the fourth space, V4 in the fifth space under the middle of the collarbone, V3 between V2 and V4, V5 level with V4 at the front of the armpit and V6 at the middle of the armpit. Wrong placement can make a normal ECG look abnormal.' },
      ],
    },
    {
      id: 'lab',
      title: 'The twelve-lead lab',
      lead: 'Pick a pattern, tick Show territories, and circle the leads that change. The leads with a clear ST change in each pattern are labelled in red.',
      blocks: [{ t: 'med-chart', viz: 'ecg-12lead', rhythm: 'stemi-ant' }],
    },
    {
      id: 'stemi',
      title: 'ST elevation and STEMI',
      blocks: [
        { t: 'p', text: 'The ST segment is the flat line between the QRS and the T wave. In a STEMI (ST-elevation myocardial infarction) a coronary artery is blocked and the heart muscle is injured, which lifts the ST segment, often in a dome that merges with the T wave (“tombstone”). The size of the lift that counts is small: roughly 1 mm (one small square) in two neighbouring leads, with higher thresholds for V2 and V3.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Look for', body: 'ST elevation in two or more leads that look at the same wall; reciprocal depression in the opposite leads; new Q waves; hyperacute (tall) T waves.' },
            { title: 'Mimics', body: 'Pericarditis, early repolarisation, left bundle branch block, left ventricular hypertrophy and an old aneurysm can all raise the ST segment without an acute blockage.' },
            { title: 'Time matters', body: 'Muscle dies with every minute of blockage, so a STEMI is treated as an emergency (opening the artery with angioplasty or clot-busting drugs).' },
            { title: 'Not all heart attacks lift the ST', body: 'An NSTEMI shows ST depression or T-wave changes, or even a normal ECG, and is diagnosed with a blood test (troponin).' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Chest pain is an emergency', text: 'If you or someone near you has chest pain with sweating, breathlessness or pain spreading to the arm or jaw, call emergency services (995 in Singapore) and do not wait for a trace. This page cannot diagnose anyone.' },
      ],
    },
    {
      id: 'others',
      title: 'Other patterns to know',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'What you see', 'Cause'],
          rows: [
            ['Left bundle branch block', 'QRS over 120 ms, broad notched R in V6 and I, deep S in V1, T wave opposite to the QRS', 'Conduction system disease, heart failure; a new LBBB with chest pain is treated like a STEMI'],
            ['Hyperkalaemia', 'Tall, narrow, peaked T waves, flat P, wide QRS, sine wave in severe cases', 'High blood potassium: kidney failure, drugs. Dangerous'],
            ['Pericarditis', 'Widespread saddle-shaped ST elevation, PR depression, no reciprocal change', 'Inflammation of the sac around the heart'],
            ['Sinus bradycardia', 'Normal beats at under 60 per minute', 'Fitness, sleep, drugs, hypothyroidism'],
          ],
        },
      ],
    },
    {
      id: 'axis',
      title: 'Axis in one minute',
      blocks: [
        { t: 'p', text: 'The electrical axis is the average direction of ventricular depolarisation. The quick check uses two leads: if lead I is mostly upward (positive) and aVF is mostly upward, the axis is normal. If lead I is positive and aVF negative, the axis is deviated to the left; if lead I is negative and aVF positive, it is deviated to the right.' },
        {
          t: 'table',
          head: ['Lead I', 'aVF', 'Axis'],
          rows: [['Positive', 'Positive', 'Normal (about −30° to +90°)'], ['Positive', 'Negative', 'Left axis deviation'], ['Negative', 'Positive', 'Right axis deviation'], ['Negative', 'Negative', 'Extreme (north-west) axis']],
        },
      ],
    },
  ],
  sources: [
    'Thygesen, K., et al. (2018). Fourth universal definition of myocardial infarction. Circulation.',
    'Garcia, T. B. (2015). 12-Lead ECG: The Art of Interpretation (2nd ed.). Jones and Bartlett.',
    'Hampton, J. (2019). The ECG Made Easy (9th ed.). Elsevier.',
  ],
  related: ['medicine/chart-reading/ecg-basics', 'medicine/chart-reading/ecg-rhythms', 'medicine/body-systems/the-heart-and-circulation'],
}

export default guide
