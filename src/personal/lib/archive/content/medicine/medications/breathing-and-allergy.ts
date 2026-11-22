import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Asthma treatment rests on a distinction that trips up a lot of new patients: a reliever opens the airway for the next few minutes, and a preventer calms the inflammation that caused the narrowing in the first place, working over weeks, not minutes. Reaching for the reliever more than twice a week is a sign the preventer dose needs reviewing, not a sign to carry a second reliever inhaler.',
  nutshell: [
    '**Relievers** (albuterol) relax airway muscle within minutes but do nothing for the underlying inflammation.',
    '**Preventers** (inhaled steroids) reduce airway inflammation over weeks and must be taken daily, not just when symptomatic.',
    '**Long-acting bronchodilators** must always be paired with a steroid for asthma, used alone, they carry a boxed warning for increased asthma deaths.',
    '**Antihistamines** split into sedating (diphenhydramine) and non-sedating (cetirizine, loratadine) generations; the newer ones cross into the brain far less.',
    '**Epinephrine** is the only drug that reverses anaphylaxis, antihistamines help with itching and hives but will not stop a severe reaction on their own.',
  ],
  sections: [
    {
      id: 'reliever',
      title: 'Reliever versus preventer',
      blocks: [
        {
          t: 'diagram',
          title: 'Why asthma needs two different kinds of inhaler',
          nodes: [
            { id: 'trigger', label: 'Trigger (allergen, exercise, cold air)', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 190 },
            { id: 'inflame', label: 'Airway inflammation builds up over time', shape: 'rect', tone: 'orange', col: 0, row: 1, w: 175 },
            { id: 'narrow', label: 'Airway muscle tightens suddenly', shape: 'rect', tone: 'pink', col: 2, row: 1, w: 165 },
            { id: 'preventer', label: 'Preventer (inhaled steroid)', sub: 'daily, reduces inflammation over weeks', shape: 'rect', tone: 'mint', col: 0, row: 2, w: 175 },
            { id: 'reliever', label: 'Reliever (albuterol)', sub: 'as needed, relaxes muscle in minutes', shape: 'rect', tone: 'teal', col: 2, row: 2, w: 165 },
          ],
          edges: [
            { from: 'trigger', to: 'inflame' },
            { from: 'trigger', to: 'narrow' },
            { from: 'preventer', to: 'inflame', dashed: true, tone: 'mint' },
            { from: 'reliever', to: 'narrow', dashed: true, tone: 'teal' },
          ],
          caption: 'Both pathways usually need addressing; a reliever alone treats the symptom while the cause keeps building.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Needing the reliever often is a warning sign',
          text: 'Using a reliever inhaler more than about twice a week (outside of exercise) usually means the preventer dose is not controlling the underlying inflammation well enough, and is worth reviewing with a clinician rather than simply refilling the reliever.',
        },
      ],
    },
    {
      id: 'anaphylaxis',
      title: 'Anaphylaxis: when epinephrine is needed',
      blocks: [
        {
          t: 'list',
          items: [
            'Swelling of the lips, tongue or throat, or a feeling the throat is closing.',
            'Difficulty breathing, wheezing, or a persistent cough that starts suddenly.',
            'Widespread hives combined with any of the above, or with dizziness/fainting.',
            'Use the epinephrine auto-injector at the first sign of these, hesitating to “see if it gets better” is the most common fatal mistake.',
            'Call emergency services immediately after using it, even if symptoms improve: a second wave (a biphasic reaction) can follow hours later.',
          ],
        },
      ],
    },
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Breathing and allergy' }] },
  ],
}

export default guide
