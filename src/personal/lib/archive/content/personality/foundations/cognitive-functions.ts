import type { Guide } from '../../../guide'
import { FUNCTIONS } from '../../../../personality/types'
import type { Fn } from '../../../../personality/types'

const ORDER: Fn[] = ['Ni', 'Ne', 'Si', 'Se', 'Ti', 'Te', 'Fi', 'Fe']

const guide: Guide = {
  intro:
    'Beneath the four letters, Jung described eight “cognitive functions”: four ways of perceiving and four ways of judging, each turned outward (extraverted) or inward (introverted). Each type uses them in a preferred order, its function stack. Functions explain why types with similar letters can feel so different, and they are the main engine behind the compatibility readings on this shelf.',
  nutshell: [
    '**Perceiving functions** take in information: Sensing (Se, Si) and Intuition (Ne, Ni).',
    '**Judging functions** make decisions: Thinking (Te, Ti) and Feeling (Fe, Fi).',
    'Each type’s stack runs **dominant → auxiliary → tertiary → inferior**. The dominant and auxiliary alternate perceiving and judging and introversion and extraversion.',
    'The **inferior** is the opposite of the dominant (Ni ↔ Se, Ti ↔ Fe) and drives stress reactions.',
  ],
  sections: [
    {
      id: 'eight',
      title: 'The eight functions',
      blocks: [
        { t: 'table', head: ['Function', 'In short', 'What it does'], rows: ORDER.map((f) => [`${f} · ${FUNCTIONS[f].name}`, FUNCTIONS[f].short, FUNCTIONS[f].body]) },
      ],
    },
    {
      id: 'stack',
      title: 'How the stack is built',
      blocks: [
        { t: 'steps', items: [
          { title: 'Find the extraverted function from J/P', body: 'J types extravert their judging function (T or F); P types extravert their perceiving function (S or N). INTJ: J, so the T is extraverted: Te.' },
          { title: 'The other middle letter is introverted', body: 'INTJ: N is introverted: Ni.' },
          { title: 'E/I says which leads', body: 'Introverts lead with their introverted function, extraverts with their extraverted one. INTJ: Ni dominant, Te auxiliary.' },
          { title: 'Tertiary and inferior are the opposites', body: 'Tertiary is the opposite of the auxiliary (Te → Fi); inferior is the opposite of the dominant (Ni → Se). INTJ = Ni–Te–Fi–Se.' },
        ] },
        { t: 'mbti', viz: 'stack' },
      ],
    },
    {
      id: 'lookalikes',
      title: 'Telling look-alike types apart',
      blocks: [
        { t: 'table', head: ['Pair', 'Shared letters', 'Real difference'], rows: [
          ['INTJ vs INTP', 'I, N, T', 'INTJ leads with Ni (converging vision) and organises with Te; INTP leads with Ti (internal logic) and explores with Ne. INTJs decide fast, INTPs keep questioning.'],
          ['INFJ vs INFP', 'I, N, F', 'INFJ: Ni + Fe, reads others’ feelings, seeks group harmony. INFP: Fi + Ne, guided by inner values, more individualistic.'],
          ['ISTJ vs ISFJ', 'I, S, J', 'Both Si dominant; ISTJ organises with Te (efficiency), ISFJ with Fe (people’s needs).'],
          ['ENTP vs ENFP', 'E, N, P', 'Both Ne dominant; ENTP judges with Ti (logic), ENFP with Fi (values).'],
          ['ESTP vs ISTP', 'S, T, P', 'Same functions; ESTP leads with Se (action), ISTP with Ti (analysis).'],
        ] },
        { t: 'callout', tone: 'note', title: 'An important caveat', text: 'The function model is a theory built by Jung and later writers (Beebe, Berens, Thomson). Unlike the four scales, it has very little empirical support, and different schools order the functions differently. Treat it as a rich descriptive language.' },
      ],
    },
  ],
  sources: ['Jung, C. G. (1921). Psychological Types.', 'Beebe, J. (2017). Energies and Patterns in Psychological Type. Routledge.', 'Thomson, L. (1998). Personality Type: An Owner’s Manual. Shambhala.', 'Berens, L. V. & Nardi, D. (1999). The 16 Personality Types: Descriptions for Self-Discovery. Telos.'],
  related: ['personality/foundations/stress-and-growth', 'personality/compatibility/function-clashes'],
}

export default guide
