import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Antibiotics are grouped into families by what part of a bacterial cell they attack and how. Knowing the family tells you a lot at a glance: penicillins and cephalosporins attack the cell wall and share an allergy risk; macrolides and tetracyclines block protein-building and tend to be gentler but more interaction-prone; fluoroquinolones hit bacterial DNA copying and carry some of the most serious warnings of any antibiotic class in routine use.',
  nutshell: [
    'Antibiotics do nothing to viruses, a cold, flu or most sore throats will not respond to one.',
    '**Beta-lactams** (penicillins, cephalosporins) attack the bacterial cell wall; this is the largest family and the source of most penicillin allergies.',
    '**Macrolides and tetracyclines** block bacterial protein synthesis; fewer allergic reactions, more drug interactions.',
    '**Fluoroquinolones** block bacterial DNA replication and carry boxed warnings for tendon and nerve damage, reserved for when gentler options will not work.',
    '**Finishing the prescribed course matters less uniformly than once taught**, current guidance for many infections is to stop once you are clearly better, as directed by the specific prescription, not to hoard extra "just in case" doses.',
  ],
  sections: [
    {
      id: 'map',
      title: 'The families, mapped',
      blocks: [
        {
          t: 'mindmap',
          center: 'Antibiotic families',
          caption: 'Grouped by what part of the bacterial cell each family attacks.',
          branches: [
            { label: 'Penicillins', tone: 'teal', items: ['Amoxicillin, penicillin V', 'Attack cell-wall building', 'Most common drug allergy'] },
            { label: 'Cephalosporins', tone: 'teal', items: ['Cephalexin, ceftriaxone', 'Related to penicillins, same mechanism', 'Some cross-reactive allergy'] },
            { label: 'Macrolides', tone: 'mint', items: ['Azithromycin, clarithromycin', 'Block the bacterial ribosome', 'Can prolong the QT interval'] },
            { label: 'Tetracyclines', tone: 'mustard', items: ['Doxycycline', 'Block the ribosome differently', 'Avoid in young children, pregnancy'] },
            { label: 'Fluoroquinolones', tone: 'pink', items: ['Ciprofloxacin, levofloxacin', 'Block bacterial DNA gyrase', 'Boxed warning: tendon, nerve damage'] },
            { label: 'Folate blockers', tone: 'orange', items: ['Trimethoprim-sulfamethoxazole', 'Block bacterial folate synthesis', 'Sulfa allergy risk'] },
            { label: 'Others', tone: 'lavender', items: ['Metronidazole, clindamycin, vancomycin', 'Varied mechanisms', 'Each with its own distinct risk profile'] },
          ],
        },
      ],
    },
    {
      id: 'resistance',
      title: 'Why resistance happens, and how to slow it',
      blocks: [
        {
          t: 'diagram',
          title: 'How antibiotic resistance spreads in a population',
          nodes: [
            { id: 'course', label: 'A course of antibiotics is taken', shape: 'pill', tone: 'ink', col: 0, row: 0, w: 170 },
            { id: 'kill', label: 'Most susceptible bacteria die', shape: 'rect', tone: 'mint', col: 0, row: 1, w: 160 },
            { id: 'survive', label: 'A few bacteria happen to carry a resistance trait and survive', shape: 'rect', tone: 'pink', col: 1, row: 1, w: 180 },
            { id: 'stop', label: 'Course stopped too early, before the susceptible majority is fully cleared', shape: 'diamond', tone: 'orange', col: 1, row: 0, w: 180 },
            { id: 'multiply', label: 'Survivors multiply with less competition', shape: 'rect', tone: 'pink', col: 1, row: 2, w: 170 },
            { id: 'spread', label: 'Resistant strain spreads to others', shape: 'rect', tone: 'lavender', col: 1, row: 3, w: 165 },
          ],
          edges: [
            { from: 'course', to: 'kill' },
            { from: 'course', to: 'stop' },
            { from: 'stop', to: 'survive', label: 'yes', tone: 'orange' },
            { from: 'kill', to: 'survive' },
            { from: 'survive', to: 'multiply' },
            { from: 'multiply', to: 'spread' },
          ],
          caption: 'This is why the specific instructions on a given prescription (how long, how often) are the ones to follow, rather than a general rule of thumb.',
        },
      ],
    },
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Antibiotics' }] },
  ],
}

export default guide
