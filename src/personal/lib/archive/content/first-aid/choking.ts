import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Choking is a complete or partial blockage of the airway, usually by food or an object, and the right response depends heavily on how severe it is and how old the person is, what works for an adult can injure an infant, and what works for a mild cough is very different from what a silent, airway-blocked person needs.',
  nutshell: [
    'A person who can **cough, speak or cry** has at least a partial airway, encourage coughing and do not interfere.',
    'A person who **cannot cough, speak, or is making a high-pitched noise or no sound at all** has a severe blockage and needs immediate back blows and abdominal thrusts.',
    '**Abdominal thrusts are not used on infants** under 1 year, or usually on visibly pregnant people, chest thrusts are used instead.',
    'If the person becomes unresponsive, lower them to the ground and start CPR, chest compressions can dislodge an object even without a pulse check.',
    'Even a successfully cleared choking episode is worth a medical check, especially in children, in case part of the object remains or internal injury occurred from the thrusts.',
  ],
  sections: [
    {
      id: 'flow',
      title: 'Choking response, by severity and age',
      blocks: [
        {
          t: 'diagram',
          title: 'What to do for a choking adult or child over 1 year',
          caption: 'For an infant under 1 year, see the separate technique below, the mechanics differ to protect their smaller, more fragile body.',
          nodes: [
            { id: 'start', label: 'Suspected choking', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 150 },
            { id: 'cough', label: 'Can they cough, speak or cry?', shape: 'diamond', tone: 'teal', col: 1, row: 1, w: 170 },
            { id: 'encourage', label: 'Encourage coughing, stay close, do not interfere', shape: 'rect', tone: 'mint', col: 0, row: 2, w: 170 },
            { id: 'clear', label: 'Cleared on its own?', shape: 'diamond', tone: 'teal', col: 0, row: 3, w: 140 },
            { id: 'done', label: 'Still get checked out', shape: 'pill', tone: 'mint', col: 0, row: 4, w: 150 },
            { id: 'severe', label: 'Severe: 5 back blows between the shoulder blades', shape: 'rect', tone: 'orange', col: 2, row: 2, w: 170 },
            { id: 'thrusts', label: 'Still blocked: 5 abdominal thrusts', shape: 'rect', tone: 'orange', col: 2, row: 3, w: 160 },
            { id: 'alternate', label: 'Alternate 5 and 5 until cleared or they become unresponsive', shape: 'rect', tone: 'pink', col: 2, row: 4, w: 180 },
            { id: 'unresponsive', label: 'Becomes unresponsive', shape: 'diamond', tone: 'pink', col: 2, row: 5, w: 160 },
            { id: 'cpr', label: 'Lower to the ground, start CPR', shape: 'rect', tone: 'lavender', col: 2, row: 6, w: 165 },
          ],
          edges: [
            { from: 'start', to: 'cough' },
            { from: 'cough', to: 'encourage', label: 'yes', tone: 'mint' },
            { from: 'encourage', to: 'clear' },
            { from: 'clear', to: 'done', label: 'yes', tone: 'mint' },
            { from: 'clear', to: 'severe', label: 'no, worsens', tone: 'orange' },
            { from: 'cough', to: 'severe', label: 'no', tone: 'orange' },
            { from: 'severe', to: 'thrusts' },
            { from: 'thrusts', to: 'alternate' },
            { from: 'alternate', to: 'unresponsive' },
            { from: 'unresponsive', to: 'cpr', label: 'yes', tone: 'pink' },
          ],
        },
      ],
    },
    {
      id: 'technique',
      title: 'The techniques',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Back blows (adult or child)', body: 'Stand slightly behind and to the side, support their chest with one hand and lean them forward, then strike firmly between the shoulder blades with the heel of your other hand, up to 5 times.' },
            { title: 'Abdominal thrusts (adult or child, not infants)', body: 'Stand behind them, make a fist, place it thumb-side in just above the navel, grasp it with your other hand, and pull sharply inward and upward, up to 5 times.' },
            { title: 'Infants under 1 year', body: 'Lay the infant face-down along your forearm, supporting the head and jaw, head lower than the chest, and give up to 5 firm back blows between the shoulder blades with the heel of your hand. If unsuccessful, turn them face-up along your forearm and give up to 5 chest thrusts with two fingers on the lower breastbone, never abdominal thrusts on an infant.' },
            { title: 'Self-administered (choking alone)', body: 'Use your own fist against the upper abdomen and pull inward and upward, or lean over a firm surface like a chair back or counter edge and press your upper abdomen against it sharply.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'After it clears',
          text: 'Abdominal and chest thrusts can cause internal injury even when done correctly. Anyone who received them, especially a child or infant, should be seen by a medical professional afterward, even if they seem completely fine.',
        },
      ],
    },
  ],
}

export default guide
