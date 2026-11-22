import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Acid, nausea and bowel symptoms each have their own small toolkit. Acid-reducers split into a slow, powerful class that shuts off acid production almost completely (PPIs) and a faster, milder class that turns it down (H2 blockers). Anti-nausea drugs intercept the signal at different points between the gut and the brain’s vomiting centre. Laxatives range from gentle water-softeners to stimulant drugs that should not become a daily habit without medical advice.',
  nutshell: [
    '**PPIs** (omeprazole and relatives) block the stomach’s acid pump almost completely and are meant for defined courses, not indefinite daily use without review.',
    '**H2 blockers** (famotidine) turn acid production down by a gentler route and act faster, though less completely, than a PPI.',
    '**Anti-nausea drugs** block different signals, serotonin receptors (ondansetron) or dopamine receptors (metoclopramide), which is why one works when another has not.',
    '**Laxatives range from gentle to strong**: stool softeners and osmotic laxatives for routine use, stimulant laxatives for short-term, not daily, use.',
    'Long-term PPI use is now linked to several slow-building risks (low magnesium, fracture risk, nutrient deficiencies), worth an occasional conversation about whether ongoing use is still needed.',
  ],
  sections: [
    {
      id: 'acid',
      title: 'Two ways to turn down acid',
      blocks: [
        {
          t: 'diagram',
          title: 'PPIs and H2 blockers act on the same cell, differently',
          nodes: [
            { id: 'cell', label: 'Stomach acid-producing cell', shape: 'circle', tone: 'teal', col: 1, row: 0, w: 160 },
            { id: 'h2r', label: 'Histamine receptor', sub: 'turns the pump on', shape: 'rect', tone: 'orange', col: 0, row: 1, w: 150 },
            { id: 'pump', label: 'Acid pump', sub: 'releases acid into the stomach', shape: 'rect', tone: 'pink', col: 2, row: 1, w: 140 },
            { id: 'h2b', label: 'H2 blocker (famotidine)', sub: 'blocks the receptor, fast-acting', shape: 'pill', tone: 'mint', col: 0, row: 2, w: 165 },
            { id: 'ppi', label: 'PPI (omeprazole)', sub: 'blocks the pump itself, more complete', shape: 'pill', tone: 'mint', col: 2, row: 2, w: 150 },
          ],
          edges: [
            { from: 'cell', to: 'h2r' },
            { from: 'cell', to: 'pump' },
            { from: 'h2r', to: 'pump' },
            { from: 'h2b', to: 'h2r', dashed: true, tone: 'mint' },
            { from: 'ppi', to: 'pump', dashed: true, tone: 'mint' },
          ],
        },
      ],
    },
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Stomach and gut' }] },
  ],
}

export default guide
