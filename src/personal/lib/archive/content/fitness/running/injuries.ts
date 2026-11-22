import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most running injuries are overuse injuries: tissues given more load than they could adapt to in the time available. That makes them largely preventable, with gradual progression, enough recovery and regular strength training.',
  nutshell: [
    'The usual cause is **too much, too soon**: a jump in distance, speed or hills.',
    'Strength training reduces sports injuries; stretching alone does not appear to.',
    'Pain that changes how you run, gets worse during a run, or is pinpoint on a bone needs rest and a check-up.',
    'Most niggles settle with a short reduction in load, not complete rest.',
  ],
  sections: [
    {
      id: 'common',
      title: 'Common running injuries',
      blocks: [
        {
          t: 'table',
          head: ['Injury', 'Where it hurts', 'Typical causes', 'What usually helps'],
          rows: [
            ['Shin splints (medial tibial stress syndrome)', 'Along the inner edge of the shin bone', 'Rapid increases in running, hard surfaces', 'Reduce running, build back gradually, calf strength'],
            ['Runner’s knee (patellofemoral pain)', 'Around or behind the kneecap; worse on stairs and after sitting', 'Load increases, hills, weak hips and thighs', 'Hip and quad strengthening, less downhill, higher cadence'],
            ['IT band syndrome', 'Outside of the knee, often after a set distance', 'Sudden mileage increase, cambered roads', 'Load reduction, hip strengthening'],
            ['Plantar fasciitis', 'Under the heel; worst with the first steps in the morning', 'Load increases, tight or weak calves', 'Calf raises, gradual loading, supportive shoes'],
            ['Achilles tendinopathy', 'Back of the heel or above it; stiff in the morning', 'Hills, speedwork, sudden increases', 'Heavy, slow calf raises; reduce speed and hills for a while'],
            ['Bone stress injury', 'Pinpoint pain on a bone that worsens with impact', 'Big load jumps, under-eating (RED-S)', 'Stop running and see a doctor'],
          ],
          caption: 'A guide, not a diagnosis. See a doctor or physiotherapist for pain that lasts more than a week or two, or any red flags.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Red flags',
          text: 'Stop and get it checked if you have pain on a specific point of a bone, swelling, pain at night or at rest, numbness, or pain that makes you limp.',
        },
      ],
    },
    {
      id: 'load',
      title: 'Managing load',
      blocks: [
        {
          t: 'list',
          items: [
            'Increase weekly running gradually; the old "10% rule" is not magic, but big jumps (over about 30% in a week) are risky.',
            'Change one thing at a time: distance, speed or hills.',
            'Add an easier week every 3–4 weeks.',
            'Mix surfaces where you can, and swap some runs for cycling or swimming when building back.',
            'Pain rule: mild discomfort (up to 3 out of 10) that settles by the next morning is usually fine; more than that, back off.',
          ],
        },
      ],
    },
    {
      id: 'strength',
      title: 'Strength training for runners',
      lead: 'Twice a week, 20–30 minutes. Calves, hips and thighs take most of the load in running.',
      blocks: [
        { t: 'exercises', ids: ['calf-raise', 'glute-bridge', 'lunge', 'side-plank', 'rdl', 'squat'] },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The evidence',
          text: 'In a large meta-analysis, strength training reduced sports injuries by around two-thirds and overuse injuries by almost half, while stretching had no clear effect.',
        },
      ],
    },
  ],
  sources: [
    'Lauersen, J. B., Bertelsen, D. M., & Andersen, L. B. (2014). The effectiveness of exercise interventions to prevent sports injuries: A systematic review and meta-analysis. *British Journal of Sports Medicine*, 48(11), 871–877.',
    'Nielsen, R. O., et al. (2014). Excessive progression in weekly running distance and risk of running-related injuries. *Journal of Orthopaedic & Sports Physical Therapy*, 44(10), 739–747.',
    'Silbernagel, K. G., et al. (2007). Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy. *American Journal of Sports Medicine*, 35(6), 897–906.',
  ],
  related: ['fitness/running/form', 'fitness/strength/lower-body', 'fitness/recovery'],
}

export default guide
