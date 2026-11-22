import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Pain relief splits into three families that work completely differently: acetaminophen, which nobody fully understands but which is gentle on the stomach; NSAIDs, which block the chemical messengers of inflammation and pain together; and opioids, which mute the brain’s experience of pain directly and carry the most serious risks of the three. Picking between them is less about strength and more about matching the mechanism to the problem.',
  nutshell: [
    '**Acetaminophen** relieves pain and fever with little effect on inflammation, and its main danger is liver injury in overdose.',
    '**NSAIDs** (ibuprofen, naproxen and relatives) also reduce inflammation, at the cost of stomach, kidney and cardiovascular risk with heavy use.',
    '**Opioids** work on a different system entirely and are reserved for pain the first two cannot touch, with real dependence and overdose risk.',
    'Inflammation is not always the target: a tension headache or a fever responds to acetaminophen as well as an NSAID, with a gentler side-effect profile.',
    'Combining acetaminophen and an NSAID at the same time is a recognised, safe way to cover more pain pathways at once, they do not compete for the same risks.',
  ],
  sections: [
    {
      id: 'choose',
      title: 'Choosing between the three families',
      blocks: [
        {
          t: 'diagram',
          title: 'A rough guide to picking a first-line pain reliever',
          caption: 'A simplification for everyday aches; a clinician’s advice always overrides this for a specific person and condition.',
          nodes: [
            { id: 'pain', label: 'Pain or fever', shape: 'pill', tone: 'ink', col: 1, row: 0 },
            { id: 'q1', label: 'Visible swelling, joint or muscle inflammation?', shape: 'diamond', tone: 'teal', col: 0, row: 1, w: 175 },
            { id: 'q2', label: 'Stomach ulcer history, kidney disease, or on a blood thinner?', shape: 'diamond', tone: 'pink', col: 0, row: 2, w: 185 },
            { id: 'nsaid', label: 'NSAID (ibuprofen/naproxen)', sub: 'with food', shape: 'rect', tone: 'mint', col: 0, row: 3, w: 170 },
            { id: 'acet1', label: 'Acetaminophen instead', shape: 'rect', tone: 'orange', col: 1, row: 2, w: 160 },
            { id: 'q3', label: 'Mild everyday ache or fever, no inflammation?', shape: 'diamond', tone: 'teal', col: 2, row: 1, w: 175 },
            { id: 'acet2', label: 'Acetaminophen', sub: 'gentlest on the stomach', shape: 'rect', tone: 'mint', col: 2, row: 2, w: 150 },
            { id: 'severe', label: 'Pain not controlled by either?', shape: 'diamond', tone: 'pink', col: 1, row: 1, w: 160 },
            { id: 'doctor', label: 'See a clinician, may need an opioid or specialist review', shape: 'rect', tone: 'lavender', col: 1, row: 3, w: 185 },
          ],
          edges: [
            { from: 'pain', to: 'q1' },
            { from: 'pain', to: 'severe' },
            { from: 'pain', to: 'q3' },
            { from: 'q1', to: 'q2', label: 'yes', tone: 'mint' },
            { from: 'q1', to: 'acet1', label: 'no', tone: 'orange' },
            { from: 'q2', to: 'acet1', label: 'yes', tone: 'orange' },
            { from: 'q2', to: 'nsaid', label: 'no', tone: 'mint' },
            { from: 'q3', to: 'acet2', label: 'yes', tone: 'mint' },
            { from: 'severe', to: 'doctor', label: 'yes', tone: 'pink' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Two numbers worth memorising',
          text: 'Acetaminophen: do not exceed 3-4 grams a day from all sources combined (lower if you drink alcohol regularly or have liver disease), check every combination cold/flu product for hidden acetaminophen. Opioids: never combine with a benzodiazepine, sleeping pill or alcohol; the combination is the leading pattern in fatal overdoses.',
        },
      ],
    },
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Pain and fever' }] },
  ],
}

export default guide
