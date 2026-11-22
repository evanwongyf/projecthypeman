import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most medicines are safe alone and safe in the combinations a doctor or pharmacist has already checked. The risk comes from combinations nobody has checked: an over-the-counter drug added on top of a prescription, two prescribers who do not know about each other, or a supplement nobody thought to mention. This page covers how interactions actually happen, when a combination needs checking, what an overdose looks like, and how to store and dispose of medicines safely.',
  nutshell: [
    '**Interactions happen four ways**: one drug changes how another is processed, two drugs add up to the same effect, one blocks the other’s effect, or they combine to injure the same organ.',
    '**The riskiest gaps are the ones nobody checked**: an OTC drug on top of a prescription, two different prescribers, or an unmentioned supplement.',
    '**A pharmacist can check an interaction for free, in minutes**, every time you add or remove a medicine, this is one of their core jobs, not an imposition.',
    '**Overdose does not always look dramatic.** Acetaminophen overdose can feel like nothing for a day before liver damage shows.',
    '**Store medicines up and away from children, and dispose of unused ones properly**, a take-back programme or pharmacy, not the toilet or the household bin for most drugs.',
  ],
  sections: [
    {
      id: 'mechanisms',
      title: 'How interactions actually happen',
      blocks: [
        {
          t: 'mindmap',
          center: 'Why two drugs interact',
          caption: 'Most real interactions fall into one of these four buckets; knowing which one is at play tells you how worried to be.',
          branches: [
            {
              label: 'Metabolism (pharmacokinetic)',
              tone: 'orange',
              items: ['One drug speeds up or slows down the liver enzyme that clears another', 'Grapefruit juice blocking CYP3A4, raising statin levels', 'Rifampin inducing enzymes, weakening the contraceptive pill'],
            },
            {
              label: 'Additive effect',
              tone: 'pink',
              items: ['Two drugs push the same direction and the effects stack', 'Two sedatives (a benzodiazepine and an opioid) both slow breathing', 'Two blood thinners both raise bleeding risk'],
            },
            {
              label: 'Opposing effect',
              tone: 'teal',
              items: ['One drug blocks or reverses what another is trying to do', 'An NSAID blunting a blood pressure medicine’s effect', 'Naloxone deliberately reversing an opioid'],
            },
            {
              label: 'Shared organ injury',
              tone: 'mint',
              items: ['Two drugs each stress the same organ, and together cross a threshold neither would alone', 'Two drugs that both affect the liver, taken together', 'An NSAID plus a drug that already strains the kidneys'],
            },
            {
              label: 'Serotonin syndrome',
              tone: 'lavender',
              items: ['A special, dangerous case of the additive pattern', 'SSRIs/SNRIs + tramadol, triptans, or certain other serotonergic drugs', 'Agitation, fast heart rate, high temperature, muscle rigidity'],
            },
            {
              label: 'Absorption interference',
              tone: 'mustard',
              items: ['One substance physically blocks another from being absorbed in the gut', 'Calcium or iron blocking levothyroxine or some antibiotics', 'Usually fixed just by spacing the doses apart'],
            },
          ],
        },
      ],
    },
    {
      id: 'check',
      title: 'When a combination needs checking',
      blocks: [
        {
          t: 'diagram',
          title: 'Should you check before combining two medicines?',
          caption: 'When in doubt, the answer is always to ask, this just helps you judge how urgently.',
          nodes: [
            { id: 'add', label: 'Adding a new medicine or supplement', shape: 'pill', tone: 'ink', col: 1, row: 0 },
            { id: 'q1', label: 'Prescribed or recommended by the same person who manages your other medicines?', shape: 'diamond', tone: 'teal', col: 1, row: 1, w: 180 },
            { id: 'ok', label: 'Likely already checked', sub: 'still mention everything you take, every visit', shape: 'rect', tone: 'mint', col: 1, row: 2, w: 170 },
            { id: 'q2', label: 'Does either carry a sedation, bleeding, heart-rhythm or serotonin warning?', shape: 'diamond', tone: 'pink', col: 0, row: 2, w: 185 },
            { id: 'ask', label: 'Ask a pharmacist before combining', shape: 'rect', tone: 'orange', col: 0, row: 3, w: 170 },
            { id: 'q3', label: 'Taken daily and long-term, or an occasional OTC product?', shape: 'diamond', tone: 'mustard', col: 2, row: 2, w: 185 },
            { id: 'mention', label: 'Mention it at your next appointment', shape: 'rect', tone: 'teal', col: 3, row: 2, w: 165 },
            { id: 'check', label: 'Worth a quick check before the first dose', shape: 'rect', tone: 'orange', col: 2, row: 3, w: 170 },
          ],
          edges: [
            { from: 'add', to: 'q1' },
            { from: 'q1', to: 'ok', label: 'yes', tone: 'mint' },
            { from: 'q1', to: 'q2', label: 'no', tone: 'pink' },
            { from: 'q2', to: 'ask', label: 'yes', tone: 'orange' },
            { from: 'q2', to: 'q3', label: 'no' },
            { from: 'q3', to: 'mention', label: 'occasional' },
            { from: 'q3', to: 'check', label: 'daily, long-term', tone: 'orange' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The one-pharmacy habit',
          text: 'Filling every prescription at the same pharmacy, and telling them about every OTC drug and supplement you take regularly, means their system automatically flags most dangerous combinations the moment a new one is added. This single habit catches more interactions than anything an individual can check by memory.',
        },
      ],
    },
    {
      id: 'overdose',
      title: 'Recognising an overdose',
      blocks: [
        {
          t: 'table',
          head: ['Category', 'What it can look like', 'Why it is dangerous'],
          rows: [
            ['Acetaminophen', 'Often nothing for 24 hours, then nausea and abdominal pain as liver injury develops', 'The most common cause of acute liver failure; damage can be severe before symptoms appear'],
            ['Opioids', 'Pinpoint pupils, slow or stopped breathing, unresponsive', 'Death is from respiratory depression; naloxone can reverse it if given in time'],
            ['Benzodiazepines + opioids or alcohol', 'Deep sedation, slurred speech, slow breathing', 'The combination is far more dangerous than either alone'],
            ['Stimulants (ADHD medicines, illicit)', 'Racing heart, high temperature, agitation, chest pain', 'Can trigger dangerous heart rhythms, especially with existing heart conditions'],
            ['Iron tablets (in a child)', 'Vomiting, abdominal pain, sometimes a deceptive period of improvement before collapse', 'A leading cause of fatal poisoning in young children; even a handful of adult tablets can be lethal'],
            ['Lithium, digoxin, warfarin', 'Confusion, tremor, visual changes, unusual bruising, depending on the drug', 'Narrow safety margin: the gap between a normal dose and a toxic one is small'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Call for help first, look it up second',
          text: 'For a suspected overdose, your own or someone else’s, call emergency services or a poison control centre immediately. Take the container with you or have it ready to describe. Do not wait to see if symptoms develop, and do not try to induce vomiting unless a poison control specialist specifically tells you to.',
        },
      ],
    },
    {
      id: 'storage',
      title: 'Storage and disposal',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Up, away and out of sight', body: 'Store medicines somewhere a child cannot see or reach, not just a closed cabinet at counter height, children climb. Childproof caps slow down, but do not stop, a determined toddler.', tag: 'children' },
            { title: 'Not the bathroom cabinet', body: 'Heat and humidity from showers degrade many medicines faster than their printed expiry date assumes. A cool, dry drawer or cupboard works better.', tag: 'storage' },
            { title: 'Take unused medicine to a take-back point', body: 'Pharmacies and many police stations run drug take-back programmes. This is the safest route for almost everything.', tag: 'disposal' },
            { title: 'A short list flushes; most do not', body: 'A small number of high-risk opioids are specifically approved for flushing if no take-back is available, because the overdose risk to a child or pet who finds them outweighs the water-supply concern. Check the specific drug’s guidance rather than assuming either way.', tag: 'flushing' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'If no take-back is available',
          text: 'Mix the medicine (not crushed, for tablets/capsules) with something undesirable like used coffee grounds or kitty litter, seal it in a bag, and put it in household rubbish. Scratch out personal information on the label before disposing of the container itself.',
        },
      ],
    },
  ],
}

export default guide
