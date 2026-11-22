import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A simulation is a model of a real system that learners can act in. Pilots train in flight simulators, doctors on manikins and virtual patients, students in virtual labs and economic games. Simulations let learners practise rare, dangerous, expensive or invisible things, make mistakes safely, and see consequences quickly.',
  nutshell: [
    'Simulations combine **experiential learning** (do, then reflect), **deliberate practice** (repeat with feedback) and **situated learning** (practise in context).',
    'Meta-analyses find **large effects**: technology-enhanced simulation in health professions education versus no intervention (Cook et al., 2011) and simulation-based learning for complex skills in higher education (Chernikova et al., 2020, g ≈ 0.85).',
    '**Fidelity** (how realistic) matters less than **functional fidelity**: whether the simulation demands the same decisions and actions as the real task.',
    'The **debrief** is where most of the learning is consolidated.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why simulations teach',
      blocks: [
        { t: 'cards', cols: 3, items: [
          { title: 'Safe failure', body: 'Crash the plane, lose the patient, bankrupt the company, and learn without real harm.' },
          { title: 'Compressed time', body: 'Decades of population growth or climate change in minutes.' },
          { title: 'Making the invisible visible', body: 'Electrons in a circuit, molecules in a gas, forces on a bridge.' },
          { title: 'Repetition', body: 'Rare events (a cardiac arrest, an engine fire) can be practised dozens of times.' },
          { title: 'Immediate feedback', body: 'The system responds at once to each decision.' },
          { title: 'Assessment', body: 'Performance can be observed and scored in standardised scenarios.' },
        ] },
      ],
    },
    {
      id: 'evidence',
      title: 'The evidence',
      blocks: [
        { t: 'bars', title: 'Technology-enhanced simulation versus no intervention (Cook et al., 2011)', unit: 'ES', decimals: 2, refs: [{ at: 0.5, label: 'medium' }, { at: 0.8, label: 'large' }], items: [
          { label: 'Knowledge', value: 1.20 },
          { label: 'Time skills', value: 1.14 },
          { label: 'Process skills', value: 1.09 },
          { label: 'Product skills', value: 1.18 },
          { label: 'Behaviour with patients', value: 0.79 },
          { label: 'Patient outcomes', value: 0.50 },
        ], caption: 'Pooled effect sizes from 609 studies in health professions education. Effects are much smaller when simulation is compared with other active instruction rather than with nothing.' },
        {
          t: 'math',
          tex: String.raw`U_3 = \Phi(d)`,
          caption: 'Cohen’s U₃: the share of the comparison group scoring below the average learner who had the simulation.',
          plain: 'Effect sizes above 1 are rare in education, so it helps to translate them. Φ(d) gives the share of the comparison group that the average simulation-trained learner outperforms.',
          where: [
            { sym: String.raw`U_3`, def: 'share of the comparison group below the average treated learner' },
            { sym: 'd', def: 'effect size' },
          ],
          syntax: [
            { sym: String.raw`\Phi`, say: '“capital phi”: the cumulative normal distribution' },
          ],
          worked: {
            title: 'Knowledge (d = 1.20) and patient outcomes (d = 0.50)',
            steps: [
              String.raw`\(\Phi(1.20) \approx 0.885\).`,
              String.raw`\(\Phi(0.50) \approx 0.691\).`,
              'Effects shrink as outcomes move from the simulator to real patients.',
            ],
            why: [
              'read the z-table at 1.20',
              'and at 0.50',
              'transfer to the real world is harder than performance in the simulator',
            ],
            answer: 'The average simulation-trained learner knows more than about 89% of untrained peers, and their patients do better than about 69% of comparison patients’ outcomes. Large, but a reminder that transfer is the hard part.',
          },
        },
      ],
    },
    {
      id: 'fidelity',
      title: 'Fidelity: how real does it need to be?',
      blocks: [
        { t: 'table', head: ['Type', 'Meaning', 'Example'], rows: [
          ['Physical fidelity', 'Looks and feels real', 'A full cockpit replica; a lifelike manikin'],
          ['Functional fidelity', 'Responds like the real system to the learner’s actions', 'A screen-based simulation with correct physics'],
          ['Psychological fidelity', 'Creates the real pressures and emotions', 'Time pressure, noise, a distressed “relative”'],
        ] },
        { t: 'p', text: 'Expensive physical realism often adds less than expected; for beginners, simplified simulations that strip away distractions can teach better (Norman, Dore and Grierson, 2012). Increase fidelity as learners advance, and match the type of fidelity to what must transfer.' },
      ],
    },
  ],
  sources: [
    'Cook, D. A. et al. (2011). Technology-enhanced simulation for health professions education: A systematic review and meta-analysis. JAMA, 306(9), 978–988.',
    'Chernikova, O. et al. (2020). Simulation-based learning in higher education: A meta-analysis. Review of Educational Research, 90(4), 499–541.',
    'Norman, G., Dore, K., & Grierson, L. (2012). The minimal relationship between simulation fidelity and transfer of learning. Medical Education, 46(7), 636–647.',
    'Ericsson, K. A. (2008). Deliberate practice and acquisition of expert performance. Academic Emergency Medicine, 15(11), 988–994.',
  ],
  related: ['e-pedagogy/simulation/designing-simulations', 'facilitation/debriefing/debrief-models', 'teaching/theories/experiential'],
}

export default guide
