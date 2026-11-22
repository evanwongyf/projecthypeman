import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A severe allergic reaction (anaphylaxis) and a suspected poisoning or overdose both call for the same basic instinct: act fast, call for help, and use the specific antidote if one is available and prescribed, epinephrine for anaphylaxis, naloxone for an opioid overdose. See the Medication reference’s interactions and safety page for more on recognising overdose specifically.',
  nutshell: [
    'Anaphylaxis signs: swelling of the lips/tongue/throat, difficulty breathing, widespread hives with dizziness or fainting, **use an epinephrine auto-injector immediately**, do not wait to see if it gets better.',
    'Call emergency services **after** using the auto-injector, every time, even if symptoms improve, because a second wave (biphasic reaction) can follow.',
    'For suspected poisoning: call emergency services or poison control, keep the container or substance for identification, and do not try to induce vomiting unless specifically told to.',
    'For a suspected opioid overdose: naloxone (Narcan) can reverse it within minutes if available, call for help regardless of whether you have it.',
    'A mild allergic reaction (itching, a few hives, no breathing or swallowing difficulty) can usually be managed with an antihistamine and watched closely, but escalate immediately if it changes.',
  ],
  sections: [
    {
      id: 'ana',
      title: 'Recognising and treating anaphylaxis',
      blocks: [
        {
          t: 'diagram',
          title: 'Allergic reaction: how severe, and what to do',
          nodes: [
            { id: 'reaction', label: 'Allergic reaction', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 150 },
            { id: 'severe', label: 'Throat/tongue swelling, breathing difficulty, widespread hives with dizziness?', shape: 'diamond', tone: 'pink', col: 1, row: 1, w: 195 },
            { id: 'epi', label: 'Use epinephrine auto-injector now, outer thigh', shape: 'rect', tone: 'lavender', col: 0, row: 2, w: 170 },
            { id: 'call999', label: 'Call emergency services immediately after', shape: 'rect', tone: 'lavender', col: 0, row: 3, w: 170 },
            { id: 'second', label: 'Monitor closely for a second wave; lie flat, legs raised, unless breathing is hard', shape: 'rect', tone: 'lavender', col: 0, row: 4, w: 180 },
            { id: 'mild', label: 'Mild: itching, a few hives, fully breathing normally', shape: 'rect', tone: 'mint', col: 2, row: 2, w: 175 },
            { id: 'antihist', label: 'Antihistamine, watch closely for any change', shape: 'rect', tone: 'mint', col: 2, row: 3, w: 170 },
          ],
          edges: [
            { from: 'reaction', to: 'severe' },
            { from: 'severe', to: 'epi', label: 'yes', tone: 'lavender' },
            { from: 'epi', to: 'call999' },
            { from: 'call999', to: 'second' },
            { from: 'severe', to: 'mild', label: 'no', tone: 'mint' },
            { from: 'mild', to: 'antihist' },
            { from: 'antihist', to: 'severe', dashed: true, label: 'worsens' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Never substitute an antihistamine for epinephrine',
          text: 'An antihistamine works too slowly to stop anaphylaxis and does nothing for the airway swelling or blood pressure drop that actually kills. If anaphylaxis is suspected, epinephrine comes first, every time, an antihistamine can be given afterward for itching once epinephrine has been used and help is on the way.',
        },
      ],
    },
    {
      id: 'poison',
      title: 'Suspected poisoning or overdose',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Check the scene is safe', body: 'Some poisons (gases, chemicals) can affect you too, ventilate the area or move the person to fresh air before approaching if that is the source.' },
            { title: 'Call for help immediately', body: 'Emergency services or a poison control centre. Do this before searching for more information online.' },
            { title: 'Identify what you can', body: 'Keep the container, packaging, or a sample of the substance if safe to do so, this speeds up treatment enormously.' },
            { title: 'Do not induce vomiting', body: 'Unless a poison control specialist specifically tells you to, vomiting some substances (strong acids, alkalis, petroleum products) causes additional injury on the way back up.' },
            { title: 'If unresponsive and not breathing normally', body: 'Start CPR and continue until help arrives or an AED is available.' },
            { title: 'If a known opioid overdose and naloxone is available', body: 'Give it as directed on the packaging, it is safe even if the diagnosis turns out to be wrong, and can be repeated if there is no response within a few minutes.' },
          ],
        },
      ],
    },
  ],
}

export default guide
