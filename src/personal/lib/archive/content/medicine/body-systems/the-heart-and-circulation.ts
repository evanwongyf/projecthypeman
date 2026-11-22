import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The heart is, mechanically, two pumps fused into one organ, working in perfect sync to drive a single continuous loop of blood, one half to the lungs, the other half to everywhere else. Understanding it as a circuit, not just a muscle, makes the whole system click into place.',
  nutshell: [
    'The heart has **four chambers**: two atria (receiving blood) and two ventricles (pumping blood out) on each side.',
    'The **right side** pumps oxygen-poor blood to the lungs (the pulmonary circuit); the **left side** pumps oxygen-rich blood to the rest of the body (the systemic circuit), one continuous loop, two pumps.',
    'The **cardiac cycle** alternates systole (contraction, pumping) and diastole (relaxation, filling), the "lub-dub" heart sound is two sets of valves snapping shut in sequence.',
    '**Cardiac output** (blood pumped per minute) is heart rate × stroke volume, and both rise together during exercise.',
    'A **blood pressure reading** (systolic/diastolic) reflects pressure during contraction over pressure during relaxation, and both numbers matter independently.',
  ],
  sections: [
    {
      id: 'the-loop',
      title: 'One loop, two pumps',
      blocks: [
        { t: 'med-viz', viz: 'heart-flow' },
        {
          t: 'table',
          head: ['Chamber', 'Receives from', 'Pumps to'],
          rows: [
            ['Right atrium (RA)', 'Oxygen-poor blood returning from the body (via the vena cava)', 'Right ventricle'],
            ['Right ventricle (RV)', 'Right atrium', 'The lungs (via the pulmonary artery), the only artery in the body carrying oxygen-poor blood'],
            ['Left atrium (LA)', 'Oxygen-rich blood returning from the lungs (via the pulmonary vein)', 'Left ventricle'],
            ['Left ventricle (LV)', 'Left atrium', 'The entire rest of the body (via the aorta), the thickest, most muscular chamber, since it pumps against the whole body’s resistance'],
          ],
          caption: 'Notice the pulmonary artery and pulmonary vein are named "backwards" compared to every other artery/vein in the body, arteries carry blood away from the heart and veins carry it back, regardless of oxygen content, which is why the pulmonary artery (carrying oxygen-poor blood toward the lungs) is still correctly called an artery.',
        },
      ],
    },
    {
      id: 'cardiac-cycle',
      title: 'The cardiac cycle and heart sounds',
      blocks: [
        {
          t: 'flow',
          title: 'One heartbeat',
          nodes: [
            { label: 'Diastole: chambers relax and fill', sub: 'blood flows passively into the atria, then ventricles', tone: 'process' },
            { label: 'Atrial systole: atria contract', sub: 'topping off the ventricles with the last bit of blood', tone: 'process' },
            { label: 'Ventricular systole: ventricles contract', sub: 'the main pumping force, pushing blood out to the lungs and body', tone: 'process' },
            { label: 'Valves snap shut in sequence', sub: 'preventing backflow, this is the "lub-dub" sound', tone: 'output' },
          ],
          loop: 'repeats roughly 60–100 times per minute at rest',
        },
        { t: 'callout', tone: 'tip', title: 'What "lub-dub" actually is', text: 'The first heart sound ("lub") is the mitral and tricuspid valves (between atria and ventricles) snapping shut at the start of ventricular contraction, stopping blood from flowing backward into the atria. The second sound ("dub") is the aortic and pulmonary valves snapping shut right after, stopping blood from flowing back into the ventricles once they relax. A doctor listening with a stethoscope for unusual extra sounds (murmurs) is listening for blood leaking backward through a valve that isn’t sealing properly.' },
        {
          t: 'math',
          tex: String.raw`CO = HR \times SV`,
          where: [
            { sym: 'CO', def: 'Cardiac output, total blood volume pumped per minute' },
            { sym: 'HR', def: 'Heart rate (beats per minute)' },
            { sym: 'SV', def: 'Stroke volume, blood pumped per single beat (roughly 70 mL at rest for an average adult)' },
          ],
          caption: 'Reading it: a resting cardiac output around 5 L/min (70 bpm × 70 mL) is enough to circulate someone’s entire blood volume roughly once every minute. During intense exercise, both HR and SV rise together, a trained athlete’s cardiac output can climb to 20–25 L/min, four to five times the resting rate, which is the direct physiological reason fitness training improves endurance.',
        },
      ],
    },
    {
      id: 'blood-pressure',
      title: 'Reading a blood pressure number',
      blocks: [
        { t: 'med-viz', viz: 'blood-pressure' },
        { t: 'p', text: 'The two numbers correspond directly to the cardiac cycle just covered: systolic pressure is the peak pressure in the arteries during ventricular systole (contraction); diastolic pressure is the lower pressure that remains during diastole (relaxation), maintained by the elasticity of the artery walls themselves.' },
      ],
    },
  ],
  sources: [
    'Hall, J. E., & Hall, M. E. (2020). *Guyton and Hall Textbook of Medical Physiology* (14th ed.). Elsevier.',
    'American Heart Association. *Understanding Blood Pressure Readings*.',
  ],
  related: ['medicine/body-systems/the-lungs-and-breathing', 'medicine/body-systems/organ-systems-overview', 'sports/physiology/vo2-training-zones'],
}

export default guide
