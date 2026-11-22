import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Erik Erikson proposed that a person’s development runs through eight stages across the whole life, and that each stage presents a central psychological task, or crisis, to be worked through in a way that leaves the person with strengths or weaknesses. Two of those stages, “industry versus inferiority” in the school years and “identity versus role confusion” in adolescence, speak directly to what teachers see. This page sets out the eight stages, looks at the two that matter most to schools and draws out the practical implications.',
  nutshell: [
    'Erikson’s theory has **eight stages**, each with a central **crisis** between two poles; healthy resolution brings a **virtue**.',
    'In the **school-age years (about 6 to 12)** the crisis is **industry versus inferiority**: children need to feel **competent** and to be rewarded for effort.',
    'In **adolescence (about 12 to 18)** the crisis is **identity versus role confusion**: young people explore who they are and what they will become.',
    'Teachers can support these tasks by providing **achievable challenges, genuine praise, choices and safe ways to try out identities**.',
    'Critics note that the stages are **not rigid**, were drawn from a **Western, male** sample, and are **hard to test**, but the central tasks still ring true.',
  ],
  sections: [
    {
      id: 'stages',
      title: 'The eight stages',
      blocks: [
        {
          t: 'table',
          head: ['Stage (approx. age)', 'Crisis', 'Virtue if resolved well', 'In school'],
          rows: [
            ['Infancy (0 to 1)', 'Trust versus mistrust', 'Hope', 'A secure base: warm, reliable adults'],
            ['Early childhood (1 to 3)', 'Autonomy versus shame and doubt', 'Will', 'Letting toddlers do things for themselves'],
            ['Play age (3 to 6)', 'Initiative versus guilt', 'Purpose', 'Encouraging play, questions and starting things'],
            ['School age (6 to 12)', 'Industry versus inferiority', 'Competence', 'Success, effort and feedback; avoid constant comparison'],
            ['Adolescence (12 to 18)', 'Identity versus role confusion', 'Fidelity', 'Exploration of roles, values and groups'],
            ['Young adulthood (18 to 40)', 'Intimacy versus isolation', 'Love', 'Close relationships and commitments'],
            ['Adulthood (40 to 65)', 'Generativity versus stagnation', 'Care', 'Contributing, mentoring, creating'],
            ['Later life (65+)', 'Integrity versus despair', 'Wisdom', 'Making sense of a life lived'],
          ],
          caption: 'Ages are approximate. Erikson stressed that earlier stages are never completely “finished” and can be revisited.',
        },
      ],
    },
    {
      id: 'industry',
      title: 'Industry versus inferiority (the primary years)',
      blocks: [
        { t: 'p', text: 'Between about six and twelve, children are busy learning the skills their culture values: reading, number, making things, working with others. They want to do things well. If they are encouraged and see their effort produce results, they develop a sense of industry and competence. If they are met with constant failure, ridicule or comparison, they can come to feel inferior. In a school system with early ranking and frequent testing, the way children experience competence and comparison matters.' },
        {
          t: 'dodont',
          do: ['Set tasks that are challenging but achievable, with the support to succeed.', 'Praise effort and strategies, and show progress against the child’s own earlier work.', 'Make mistakes safe and routine.', 'Give a variety of ways to show competence: practical, creative, social.'],
          dont: ['Do not rank children publicly or compare constantly.', 'Do not let a child accumulate a record of failure in a subject without a change of approach.', 'Do not label (“weak in maths”).', 'Do not rely only on one kind of ability.'],
        },
      ],
    },
    {
      id: 'identity',
      title: 'Identity versus role confusion (adolescence)',
      blocks: [
        { t: 'p', text: 'The adolescent has to answer “who am I?”: What are my values, my beliefs, my abilities, what groups do I belong to, what will I do with my life? Erikson saw this as a time to try out roles, sometimes a “psychosocial moratorium” in which a young person explores before committing. Those who explore and commit achieve a stable identity; those who cannot may drift in role confusion. James Marcia extended the idea into four identity statuses.' },
        {
          t: 'table',
          head: ['Identity status (Marcia)', 'Explored?', 'Committed?', 'What it looks like'],
          rows: [
            ['Achievement', 'Yes', 'Yes', 'Has explored options and chosen; confident, flexible'],
            ['Moratorium', 'Yes (actively)', 'Not yet', 'In the middle of exploring; anxious, open'],
            ['Foreclosure', 'No', 'Yes', 'Committed, often to parents’ plans, without exploring'],
            ['Diffusion', 'No', 'No', 'Drifting; no direction'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Offer exploration', body: 'Clubs, service, electives, work experience, discussion of values and careers.' },
            { title: 'Respect peer groups', body: 'Belonging matters enormously. A friendship group is part of identity work.' },
            { title: 'Welcome questions', body: 'Teenagers test beliefs. A teacher who listens without alarm gives space for healthy exploration.' },
            { title: 'Watch for foreclosure under pressure', body: 'In high-pressure systems, some students take a path set by others without choosing it. Offer chances to reflect on what they want.' },
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
            ['Takes the whole life span and the social context seriously', 'Stages are broad and hard to test; the sequence is not universal'],
            ['Names tasks that teachers do see: competence, identity', 'Based on a Western, male-centred view; Gilligan and others argued that relationships matter more in the identity of many girls'],
            ['Useful for thinking about transitions (primary to secondary)', 'Culture shapes what counts as healthy resolution; some cultures stress group identity over individual identity'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Erikson, E. H. (1963). Childhood and Society (2nd ed.). W. W. Norton.',
    'Erikson, E. H. (1968). Identity: Youth and Crisis. W. W. Norton.',
    'Marcia, J. E. (1966). Development and validation of ego-identity status. Journal of Personality and Social Psychology.',
  ],
  related: ['teaching/theories/humanism', 'teaching/theories/motivation', 'teaching/theories/moral-development'],
}

export default guide
