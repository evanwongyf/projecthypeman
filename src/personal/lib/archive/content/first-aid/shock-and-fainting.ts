import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'In first aid, “shock” has nothing to do with being startled, it means the circulatory system is failing to deliver enough blood to the body’s organs, a genuine medical emergency that can follow severe bleeding, burns, allergic reactions, infection or heart problems. Fainting is usually far more benign: a brief, self-correcting drop in blood flow to the brain, most often from standing still too long, pain, or an emotional response.',
  nutshell: [
    'Medical **shock** is a circulation failure, not surprise or fear, signs include pale, cold, clammy skin, a fast weak pulse, rapid breathing and confusion.',
    'Shock is an emergency: call for help, lay the person down, raise the legs if no leg injury or breathing difficulty, keep them warm, and treat any obvious cause (like bleeding).',
    'A **simple faint** usually resolves within a minute of lying down, often preceded by light-headedness, sweating and tunnel vision.',
    'If someone who fainted does not wake within a minute, or faints without warning or while seated, treat it more seriously and get medical help.',
    'Never give a person in shock or who has fainted anything to eat or drink, in case they need surgery or lose consciousness.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'Shock versus fainting',
      blocks: [
        {
          t: 'table',
          head: ['', 'Medical shock', 'Simple faint (vasovagal syncope)'],
          rows: [
            ['Cause', 'Blood loss, severe burns, infection (sepsis), severe allergic reaction, heart problems', 'Standing too long, pain, fear, heat, the sight of blood, sudden standing'],
            ['Warning signs', 'Often comes on over minutes, progressively worsening', 'Light-headedness, sweating, tunnel vision, nausea, usually seconds before'],
            ['Appearance', 'Pale, cold, clammy, confused, fast weak pulse, rapid breathing', 'Pale, brief loss of consciousness, usually looks fine within a minute'],
            ['What helps', 'Lie flat, raise legs if safe, keep warm, treat the cause, call emergency services', 'Lie flat, raise legs; usually resolves on its own within a minute'],
            ['When it is more serious', 'Always, this needs emergency care', 'If it happens without clear triggers, happens while seated, or recovery takes longer than a minute'],
          ],
        },
        {
          t: 'diagram',
          title: 'Someone feels faint or has collapsed',
          nodes: [
            { id: 'feel', label: 'Feels faint, or has collapsed', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 170 },
            { id: 'cause', label: 'Known cause, bleeding, burn, allergy, long standing, fear, heat?', shape: 'diamond', tone: 'teal', col: 1, row: 1, w: 190 },
            { id: 'lie', label: 'Lie flat, raise legs, loosen tight clothing, keep warm', shape: 'rect', tone: 'mint', col: 1, row: 2, w: 175 },
            { id: 'wake', label: 'Recovers within about a minute?', shape: 'diamond', tone: 'teal', col: 1, row: 3, w: 165 },
            { id: 'ok', label: 'Rest, sit up slowly, monitor', shape: 'pill', tone: 'mint', col: 0, row: 4, w: 160 },
            { id: 'worsen', label: 'Call emergency services, continue care, treat any obvious cause', shape: 'rect', tone: 'pink', col: 2, row: 4, w: 180 },
          ],
          edges: [
            { from: 'feel', to: 'cause' },
            { from: 'cause', to: 'lie' },
            { from: 'lie', to: 'wake' },
            { from: 'wake', to: 'ok', label: 'yes', tone: 'mint' },
            { from: 'wake', to: 'worsen', label: 'no, or worsening', tone: 'pink' },
          ],
        },
      ],
    },
  ],
}

export default guide
