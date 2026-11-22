import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Many children who seem not to care are actually overwhelmed, frightened, hurt or struggling to read others. Mistaking these children for “callous” can do real harm. Before concluding anything, consider the more common explanations, and let professionals assess.',
  nutshell: [
    '**Trauma and adversity** can produce emotional numbing, defiance and aggression.',
    '**Autism** can affect reading and expressing emotions, though autistic children usually care about others.',
    '**ADHD** produces impulsive behaviour, often followed by genuine regret.',
    '**Depression**, **language disorders**, **attachment difficulties** and **situational stress** are other look-alikes.',
  ],
  sections: [
    {
      id: 'table',
      title: 'Look-alikes compared',
      blocks: [
        { t: 'table', head: ['Explanation', 'How it can look', 'Distinguishing features'], rows: [
          ['Trauma / adverse childhood experiences', 'Numb, detached, hostile, aggressive when triggered', 'Hypervigilance, fear responses, reactions to triggers; history of adversity; emotion is present but defended'],
          ['Autism', 'Seems not to notice others’ feelings; blunt; meltdowns', 'Difficulty reading cues, but distress at causing harm once understood; sensory and social communication profile'],
          ['ADHD', 'Impulsive aggression, rule-breaking', 'Acts before thinking; usually shows remorse afterwards'],
          ['Depression', 'Flat, uncaring about school, irritable', 'Low mood, withdrawal, changes in sleep or appetite; indifference extends to self'],
          ['Developmental language disorder', 'Says the wrong thing, cannot explain or apologise', 'Difficulty expressing feelings in words; feelings visible in other ways'],
          ['Attachment difficulties', 'Controlling, mistrustful, indiscriminate or rejecting', 'History of disrupted care; relationship-focused patterns'],
          ['Situational stress', 'Sudden change in behaviour', 'Recent bereavement, family conflict, bullying; behaviour new rather than long-standing'],
          ['Reactive conduct problems with low CU traits', 'Aggressive and defiant', 'Hot-headed, anxious, remorseful; aggression is reactive'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Co-occurrence', text: 'These are not either–or. A child can have ADHD and elevated CU traits, or trauma and conduct problems. That is why multi-informant professional assessment matters.' },
      ],
    },
    {
      id: 'questions',
      title: 'Questions to consider before referral',
      blocks: [
        { t: 'checklist', items: [
          'Is this behaviour new, or has it been present for a long time and in many settings?',
          'Does the child show regret or distress later, when calm?',
          'Is there a known history of trauma, neglect, bereavement or family change?',
          'Are there signs of autism, ADHD, language difficulties or learning difficulties?',
          'Is the child being bullied or under unusual stress?',
          'How does the child respond to warmth, praise and rewards?',
          'What do parents and other teachers observe?',
        ] },
      ],
    },
  ],
  sources: [
    'Kahn, R. E. et al. (2013). Distinguishing primary and secondary variants of callous-unemotional traits among adolescents in a clinic-referred sample. Psychological Assessment, 25(3), 966–978.',
    'Felitti, V. J. et al. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. American Journal of Preventive Medicine, 14(4), 245–258.',
    'National Institute for Health and Care Excellence (2013, updated 2017). Antisocial behaviour and conduct disorders in children and young people: recognition and management (CG158).',
  ],
  related: ['teaching/special-education/needs/semh', 'teaching/special-education/needs/autism', 'teaching/special-education/needs/adhd'],
}

export default guide
