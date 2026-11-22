import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Blood pressure is the product of how hard the heart pumps and how tightly the blood vessels are squeezed, and nearly every class on this page lowers it by turning down one piece of that system: the kidney’s salt-and-water balance, the hormone that tightens vessels, the calcium signal that contracts vessel muscle, or the heart’s own response to adrenaline. Cholesterol and clotting drugs work on separate systems again, protecting the same arteries from different angles.',
  nutshell: [
    'The body controls blood pressure mainly through the **renin-angiotensin system** (ACE inhibitors, ARBs act here), **calcium channels** in vessel walls, the heart’s response to **adrenaline** (beta blockers), and the kidney’s handling of **salt and water** (diuretics).',
    'ACE inhibitors and ARBs do the same underlying job through different points in the same pathway, which is why they are rarely combined.',
    '**Statins** work on cholesterol production, a separate system from blood pressure, protecting arteries from a different direction.',
    '**Anticoagulants and antiplatelets** prevent clots by two different mechanisms, which is why they are combined only for specific situations and specific durations.',
    'Never stop a beta blocker abruptly: the heart has adapted to the blockade, and stopping suddenly can trigger rebound high blood pressure or chest pain.',
  ],
  sections: [
    {
      id: 'map',
      title: 'Where each class acts',
      blocks: [
        {
          t: 'diagram',
          title: 'The blood pressure control system, and where each drug class intervenes',
          nodes: [
            { id: 'kidney', label: 'Kidney', sub: 'senses pressure, releases renin', shape: 'circle', tone: 'teal', col: 0, row: 0, w: 120 },
            { id: 'angiotensin', label: 'Renin → angiotensin II', sub: 'a vessel-tightening hormone', shape: 'rect', tone: 'orange', col: 1, row: 0, w: 170 },
            { id: 'ace', label: 'ACE inhibitors', sub: 'block its production', shape: 'pill', tone: 'mint', col: 1, row: 1, w: 150 },
            { id: 'arb', label: 'ARBs', sub: 'block its receptor', shape: 'pill', tone: 'mint', col: 2, row: 1, w: 120 },
            { id: 'vessel', label: 'Blood vessel wall', sub: 'tightens or relaxes', shape: 'rect', tone: 'pink', col: 2, row: 0, w: 160 },
            { id: 'ccb', label: 'Calcium channel blockers', sub: 'relax vessel muscle directly', shape: 'pill', tone: 'mint', col: 3, row: 1, w: 170 },
            { id: 'heart', label: 'Heart', sub: 'pumps harder with adrenaline', shape: 'circle', tone: 'teal', col: 0, row: 2, w: 110 },
            { id: 'beta', label: 'Beta blockers', sub: 'blunt the adrenaline response', shape: 'pill', tone: 'mint', col: 1, row: 2, w: 150 },
            { id: 'volume', label: 'Blood volume', sub: 'more fluid, more pressure', shape: 'rect', tone: 'lavender', col: 0, row: 1, w: 150 },
            { id: 'diuretic', label: 'Diuretics', sub: 'remove salt and water', shape: 'pill', tone: 'mint', col: 0, row: 2.5, w: 140 },
          ],
          edges: [
            { from: 'kidney', to: 'angiotensin' },
            { from: 'angiotensin', to: 'vessel' },
            { from: 'ace', to: 'angiotensin', dashed: true, tone: 'mint' },
            { from: 'arb', to: 'vessel', dashed: true, tone: 'mint' },
            { from: 'ccb', to: 'vessel', dashed: true, tone: 'mint' },
            { from: 'beta', to: 'heart', dashed: true, tone: 'mint' },
            { from: 'diuretic', to: 'volume', dashed: true, tone: 'mint' },
            { from: 'volume', to: 'kidney' },
            { from: 'heart', to: 'vessel' },
          ],
          caption: 'Solid arrows show how the body raises pressure; dashed arrows show where each drug class interrupts that pathway.',
        },
      ],
    },
    {
      id: 'clot',
      title: 'Cholesterol and clotting: two more protection systems',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Statins', body: 'Block the liver enzyme that makes cholesterol, lowering LDL and slowing the buildup of arterial plaque over years.', tag: 'cholesterol' },
            { title: 'Antiplatelets', body: 'Stop platelets clumping together, the first step of forming a clot, important after a stent or a heart attack.', tag: 'clopidogrel, aspirin' },
            { title: 'Warfarin', body: 'Blocks the liver’s use of vitamin K to build several clotting factors; needs regular blood monitoring (INR).', tag: 'older anticoagulant' },
            { title: 'Direct oral anticoagulants', body: 'Block one clotting-cascade enzyme (factor Xa) directly, with no routine monitoring needed, at the cost of no simple test to confirm the level.', tag: 'apixaban, rivaroxaban' },
          ],
        },
      ],
    },
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Heart and blood pressure' }] },
  ],
}

export default guide
