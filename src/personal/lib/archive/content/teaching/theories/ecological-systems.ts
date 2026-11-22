import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When a child misbehaves, falls behind or withdraws, the natural question is “what is wrong with the child?” Urie Bronfenbrenner’s ecological systems theory asks a wider one: what is happening in the web of settings around the child, from the family and the classroom to the neighbourhood, the media and the culture? A child develops inside nested systems that influence one another, and a teacher who can see the whole picture can understand problems that look puzzling in the classroom alone. This page sets out the five systems, how they interact, and how to use the theory in practice.',
  nutshell: [
    'Development is the product of **interactions between the child and the environments** the child lives in, not of the child or the environment alone.',
    'Bronfenbrenner described **nested systems**: **micro** (family, school, peers), **meso** (links between them), **exo** (settings the child is not in but which affect them), **macro** (culture and policy), and **chrono** (time).',
    'The **mesosystem** matters most for teachers: how well home and school connect affects the child’s success.',
    'Problems have **roots in several systems**: a teacher can act on the classroom and, with others, the links to home and community.',
    'The theory is a **framework for thinking**, not a set of testable laws: it tells you where to look, not exactly what to expect.',
  ],
  sections: [
    {
      id: 'systems',
      title: 'The five systems',
      blocks: [
        {
          t: 'levels',
          caption: 'From the innermost, closest to the child, to the widest. Each influences the ones inside it.',
          items: [
            { name: 'Microsystem', body: 'The settings the child directly takes part in: family, classroom, peers, a tuition centre, a religious group. Face-to-face relationships.' },
            { name: 'Mesosystem', body: 'The connections between microsystems: whether parents and teachers talk, whether friends from the neighbourhood are in the same class, whether school and tuition teach in the same way.' },
            { name: 'Exosystem', body: 'Settings the child is not in, but that affect them: a parent’s workplace and its hours, the school board’s decisions, a sibling’s school, the local economy.' },
            { name: 'Macrosystem', body: 'The wider culture: values, laws, policy, economy, beliefs about childhood and education, such as meritocracy or the examination system.' },
            { name: 'Chronosystem', body: 'Time: changes over the child’s life and in history, such as a parent’s divorce, a move, a pandemic or a new curriculum.' },
          ],
        },
        {
          t: 'table',
          head: ['System', 'Example in a Singapore classroom', 'Teacher’s possible role'],
          rows: [
            ['Micro', 'A pupil’s relationship with her form teacher and classmates; her home life', 'Build a positive relationship; ensure the class is safe and fair'],
            ['Meso', 'The link between her teacher and her mother; between school and tuition', 'Communicate regularly and constructively; share what you see'],
            ['Exo', 'Her father’s shift work means he cannot attend parent meetings; a school timetable decision', 'Offer flexible ways to meet; raise structural issues with leadership'],
            ['Macro', 'A culture of examinations and ranking; national policy on PSLE scoring', 'Be aware of the pressure; help students keep perspective; use the language of the school’s policy'],
            ['Chrono', 'The move from primary to secondary; a family bereavement', 'Plan transitions; notice changes over time'],
          ],
        },
      ],
    },
    {
      id: 'use',
      title: 'Using the theory in practice',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Describe the problem factually', body: 'What is happening, when, with whom? Do not start with a diagnosis.' },
            { title: 'Look at each system', body: 'What is happening in the classroom, at home, between home and school, in the community and in policy that could help explain it?' },
            { title: 'Find what you can influence', body: 'Usually the classroom, and the link with home. Other systems need others: the counsellor, school leaders, social services.' },
            { title: 'Strengthen the links', body: 'Many problems ease when the mesosystem is stronger: regular positive contact with parents, shared plans with other teachers.' },
            { title: 'Look for strengths in every system', body: 'A grandparent, a youth leader, a strong friend: protective factors as well as risks.' },
          ],
        },
        {
          t: 'example',
          title: 'A pupil who stopped doing homework',
          lines: [
            { label: 'Micro (classroom)', text: 'The homework is hard for her and she has few friends in the class to ask.' },
            { label: 'Micro (home)', text: 'Her mother works two jobs and her older brother cares for her in the evenings.' },
            { label: 'Meso', text: 'Her mother has not received the school’s messages because they are sent in English only.' },
            { label: 'Exo', text: 'The mother’s work schedule changed last term.' },
            { label: 'Action', text: 'Translate messages, offer a homework session at school, pair her with a study buddy and meet the mother at a time that suits her. The behaviour changes.' },
          ],
        },
      ],
    },
    {
      id: 'critique',
      title: 'Strengths and limits',
      blocks: [
        {
          t: 'table',
          head: ['Strengths', 'Limits'],
          rows: [
            ['Prevents blaming the child or the family alone', 'Broad: hard to test as a theory'],
            ['Explains why interventions that change only one setting often fail', 'Does not say which system matters most or how to weigh them'],
            ['Supports home-school partnership and multi-agency work', 'Can overwhelm a teacher with factors beyond their control'],
            ['Influential in policy, such as the Head Start programme, child protection and community schools', 'Bronfenbrenner later revised it to stress “proximal processes” and the person’s own characteristics (the bioecological model)'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Do not use it to excuse', text: 'Understanding why a pupil is struggling does not mean lowering expectations. It means choosing the response that is most likely to work: high standards with support addressed at the real causes.' },
      ],
    },
  ],
  sources: [
    'Bronfenbrenner, U. (1979). The Ecology of Human Development. Harvard University Press.',
    'Bronfenbrenner, U., and Morris, P. A. (2006). The bioecological model of human development. In Handbook of Child Psychology (6th ed.). Wiley.',
    'Epstein, J. L. (2011). School, Family, and Community Partnerships. Westview Press.',
  ],
  related: ['teaching/theories/humanism', 'teaching/guides/classroom/families', 'teaching/inclusive-practice/poverty-and-attendance'],
}

export default guide
