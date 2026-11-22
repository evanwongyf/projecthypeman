import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Teachers sometimes meet a child whose behaviour is troubling in a particular way: deliberate cruelty, lying without apparent guilt, indifference to others’ distress, and little response to punishment. Words like “sociopath” or “psychopath” come to mind. Those labels are not used for children, and for good reason. Research instead describes **conduct problems** and a subgroup of children with **callous-unemotional (CU) traits**. Understanding this research helps teachers notice, record, refer and respond well, without labelling a child for life.',
  nutshell: [
    '“Psychopathy” and antisocial personality disorder are **adult** concepts; antisocial personality disorder cannot be diagnosed before 18.',
    'Children can be diagnosed (by clinicians) with **oppositional defiant disorder (ODD)** or **conduct disorder (CD)**.',
    'DSM-5 adds a specifier for CD, **“with limited prosocial emotions”**, which captures CU traits: lack of remorse or guilt, lack of empathy, unconcern about performance, and shallow or deficient emotion.',
    'CU traits predict more severe and stable problems on average, **but children change**: warm, consistent, reward-focused parenting and intervention can reduce CU traits.',
    'A teacher’s role is to **observe, record, support, refer and keep everyone safe**, never to diagnose.',
  ],
  sections: [
    {
      id: 'terms',
      title: 'The terms',
      blocks: [
        { t: 'table', head: ['Term', 'What it means', 'Who uses it'], rows: [
          ['Conduct problems', 'A general term for aggression, rule-breaking, defiance, lying, stealing', 'Researchers, schools'],
          ['Oppositional defiant disorder (ODD)', 'A persistent pattern of angry or irritable mood, argumentative or defiant behaviour, or vindictiveness', 'Clinicians (DSM-5, ICD-11)'],
          ['Conduct disorder (CD)', 'A repetitive pattern of violating others’ rights or major age-appropriate rules: aggression, destruction, deceit or theft, serious rule violations', 'Clinicians'],
          ['“With limited prosocial emotions” specifier', 'CD plus at least two of: lack of remorse or guilt; callous lack of empathy; unconcerned about performance; shallow or deficient affect, persistently over 12 months and across settings', 'Clinicians (DSM-5)'],
          ['Callous-unemotional (CU) traits', 'The research construct behind the specifier, measured on a continuum', 'Researchers, clinicians'],
          ['Psychopathy', 'An adult personality construct (interpersonal, affective, lifestyle and antisocial features)', 'Forensic and research settings with adults'],
          ['Antisocial personality disorder', 'An adult diagnosis requiring age 18+ and evidence of CD before 15', 'Clinicians, adults only'],
          ['“Sociopath”', 'An informal, imprecise word', 'Popular media; avoid'],
        ] },
      ],
    },
    {
      id: 'why-not-label',
      title: 'Why not label children',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Development', body: 'Empathy, guilt and self-control are still developing through childhood and adolescence. Many children with early conduct problems do not become antisocial adults.' },
          { title: 'Change is possible', body: 'Studies show CU traits can decrease with warm, consistent parenting and targeted intervention (Hawes, Price and Dadds, 2014; Waller and Hyde, 2017).' },
          { title: 'Look-alikes', body: 'Trauma, attachment difficulties, autism, ADHD, depression and language problems can all look like “not caring”.' },
          { title: 'Self-fulfilling labels', body: 'A child seen as “a psychopath” is treated with fear and exclusion, which removes the warmth and relationships that help.' },
        ] },
        { t: 'callout', tone: 'warn', title: 'Language matters', text: 'In records and conversations, describe behaviour (“laughed when a classmate cried after being pushed”) rather than character (“he is cold and cruel”). Leave diagnosis to qualified clinicians.' },
      ],
    },
    {
      id: 'research',
      title: 'What research says about CU traits',
      blocks: [
        { t: 'list', items: [
          'In clinic-referred children with conduct problems, a substantial minority show elevated CU traits; these children on average show more severe, premeditated aggression and more stable problems (Frick et al., 2014).',
          'Children with high CU traits tend to show **reduced responsiveness to others’ fear and distress** and **lower sensitivity to punishment**, while remaining responsive to **reward**.',
          'Twin studies find CU traits are substantially heritable, but environment matters: harsh parenting is linked to increases, and parental warmth to decreases, in CU traits.',
          'Many children with conduct problems have **low** CU traits: their aggression is more reactive, often linked to frustration, anxiety, adversity or poor emotion regulation.',
        ] },
      ],
    },
  ],
  sources: [
    'American Psychiatric Association (2013, 2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., text revision): Conduct disorder.',
    'Frick, P. J., Ray, J. V., Thornton, L. C., & Kahn, R. E. (2014). Can callous-unemotional traits enhance the understanding, diagnosis, and treatment of serious conduct problems in children and adolescents? Psychological Bulletin, 140(1), 1–57.',
    'Hawes, D. J., Price, M. J., & Dadds, M. R. (2014). Callous-unemotional traits and the treatment of conduct problems in childhood and adolescence. Clinical Child and Family Psychology Review, 17(3), 248–267.',
    'Waller, R., & Hyde, L. W. (2017). Callous-unemotional behaviors in early childhood: Measurement, meaning, and the influence of parenting. Child Development Perspectives, 11(2), 120–126.',
    'Viding, E., Blair, R. J. R., Moffitt, T. E., & Plomin, R. (2005). Evidence for substantial genetic risk for psychopathy in 7-year-olds. Journal of Child Psychology and Psychiatry, 46(6), 592–597.',
  ],
  related: ['teaching/special-education/conduct-and-cu/signs-and-patterns', 'teaching/special-education/conduct-and-cu/look-alikes', 'teaching/special-education/needs/semh'],
}

export default guide
