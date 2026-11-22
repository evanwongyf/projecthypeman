import type { Guide } from '../../../guide'

const tp = (title: string, lines: [string, string][]) => ({ t: 'example' as const, title, lines: lines.map(([label, text]) => ({ label, text })) })

const guide: Guide = {
  intro: 'With four temperaments there are ten possible pairings. Each has a typical gift and a typical fight.',
  sections: [
    {
      id: 'same',
      title: 'Same temperament',
      blocks: [
        tp('Rational + Rational (NT + NT)', [['Gift', 'Endless ideas and debate, mutual respect for competence.'], ['Fight', 'Who is right; neglect of feelings and practical chores.'], ['Try', 'Schedule non-intellectual time together; take turns being wrong.']]),
        tp('Idealist + Idealist (NF + NF)', [['Gift', 'Deep emotional and spiritual connection.'], ['Fight', 'Unspoken hurt, idealising then disappointment, money and logistics.'], ['Try', 'Practical check-ins on bills and plans.']]),
        tp('Guardian + Guardian (SJ + SJ)', [['Gift', 'Stability, shared traditions, reliability.'], ['Fight', 'Whose way is the right way; resistance to change.'], ['Try', 'Try one new thing a month together.']]),
        tp('Artisan + Artisan (SP + SP)', [['Gift', 'Fun, adventure, living in the moment.'], ['Fight', 'Money, plans, long-term commitments.'], ['Try', 'One shared plan for money; keep the adventures.']]),
      ],
    },
    {
      id: 'mixed',
      title: 'Mixed temperaments',
      blocks: [
        tp('Rational + Idealist (NT + NF)', [['Gift', 'Shared love of ideas; NF adds warmth, NT adds rigour.'], ['Fight', 'NF feels criticised; NT feels manipulated by emotion.'], ['Try', 'NT: lead with appreciation. NF: say what you need explicitly.']]),
        tp('Rational + Guardian (NT + SJ)', [['Gift', 'Strategy plus execution; both value competence and responsibility.'], ['Fight', 'NT questions rules SJ respects; SJ finds NT reckless with tradition.'], ['Try', 'Explain the “why” behind changes; respect proven methods.']]),
        tp('Rational + Artisan (NT + SP)', [['Gift', 'Independence; theory meets hands-on skill.'], ['Fight', 'NT finds SP impulsive; SP finds NT boring and overthinking.'], ['Try', 'Build things together; let ideas be tested in action.']]),
        tp('Idealist + Guardian (NF + SJ)', [['Gift', 'Shared care for people; SJ provides stability for NF’s ideals.'], ['Fight', 'NF finds SJ conventional; SJ finds NF unrealistic.'], ['Try', 'Turn ideals into routines.']]),
        tp('Idealist + Artisan (NF + SP)', [['Gift', 'Creativity, warmth, spontaneity.'], ['Fight', 'NF wants depth; SP wants fun.'], ['Try', 'Mix deep talks with shared activities.']]),
        tp('Guardian + Artisan (SJ + SP)', [['Gift', 'Practical partners; SJ plans, SP improvises.'], ['Fight', 'SJ finds SP irresponsible; SP finds SJ controlling.'], ['Try', 'Agree non-negotiables, leave the rest flexible.']]),
      ],
    },
  ],
  sources: ['Keirsey, D. (1998). Please Understand Me II.'],
  related: ['personality/foundations/temperaments'],
}

export default guide
