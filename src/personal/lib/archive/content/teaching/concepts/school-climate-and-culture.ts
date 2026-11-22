import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Walk into two schools with similar buildings and similar intakes and you can feel the difference within minutes: how students greet a visitor, how teachers speak to each other, what happens in the corridors at break, whether there is litter or laughter. That is school climate and culture. Research suggests that it matters for attendance, behaviour, well-being, staff retention and even achievement, and that it is shaped far more by daily habits than by slogans. This page explains the terms, what the research identifies as the main dimensions, how climate is measured and what leaders and teachers can do to change it.',
  nutshell: [
    '**School climate** is the **quality and character of school life**: how people experience safety, relationships, teaching and the physical environment.',
    '**School culture** is the deeper layer: the **shared beliefs, values and habits** that explain why things are done the way they are.',
    'Reviews (Thapa and colleagues, 2013) identify main dimensions: **safety**, **relationships**, **teaching and learning**, **institutional environment** and **staff**.',
    'A positive climate is linked to **better attendance, behaviour, well-being and achievement**, and to lower rates of bullying.',
    'Climate is **measured** by surveys of students, staff and parents and **changed** through consistent routines, relationships, fair discipline and leadership.',
  ],
  sections: [
    {
      id: 'terms',
      title: 'Climate and culture',
      blocks: [
        {
          t: 'table',
          head: ['', 'Climate', 'Culture'],
          rows: [
            ['What it is', 'How people feel about the school: the mood and the atmosphere', 'The shared values, beliefs, norms and habits that underlie the way things are done'],
            ['Time scale', 'Can change in months', 'Slow to change; years'],
            ['How you see it', 'Surveys, observation, how a visitor is greeted', 'Stories, rituals, what is rewarded and what is tolerated'],
            ['Analogy', 'The weather', 'The climate in the long run, the geography'],
          ],
        },
        { t: 'callout', tone: 'note', title: '“The way we do things here”', text: 'Culture is often described as how people behave when no one is watching. A school culture that values effort, kindness and honesty will show it in small things: how a late student is greeted, how a mistake is treated, how staff talk about students in the staffroom.' },
      ],
    },
    {
      id: 'dimensions',
      title: 'The dimensions of climate',
      blocks: [
        { t: 'p', text: 'A review of research (Thapa, Cohen, Guffey and Higgins-D’Alessandro, 2013) and the National School Climate Council in the United States propose five dimensions that recur across studies.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Safety', title: 'Physical and emotional safety', body: 'Clear rules, fairly applied; low bullying and violence; students feel safe in toilets, corridors and online.' },
            { tag: 'Relationships', title: 'Respect and connectedness', body: 'Positive relationships between students, between staff and students, and among staff; a sense of belonging.' },
            { tag: 'Teaching and learning', title: 'Support for learning', body: 'High expectations, good teaching, feedback, social and emotional learning, and support for those who struggle.' },
            { tag: 'Institutional environment', title: 'The physical and organisational setting', body: 'Clean, orderly and well-kept buildings; good resources; clear structures and processes.' },
            { tag: 'Staff', title: 'The adult community', body: 'Collegiality, trust, professional development, workload and morale. Teachers’ wellbeing affects students’.' },
            { tag: 'Engagement', title: 'Participation and voice', body: 'Students and families have a say, and take part in the life of the school.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the research shows',
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Detail'],
          rows: [
            ['Positive climate is linked to better attendance and fewer suspensions', 'Students who feel safe and connected come to school and behave better'],
            ['It is linked to higher achievement, especially for disadvantaged students', 'Climate may partly buffer the effects of poverty (Berkowitz and colleagues, 2017 review)'],
            ['It is associated with lower bullying and violence', 'Consistent, fair discipline and positive relationships reduce incidents'],
            ['It is associated with well-being and lower depression', 'Belonging is a protective factor'],
            ['It matters for teachers: lower burnout, higher retention', 'Collegial, supportive schools keep their staff'],
          ],
          caption: 'Most studies are correlational, so direction of cause can be argued: a high-achieving school may have a better climate too. Experiments and longitudinal studies suggest that the effect runs both ways.',
        },
      ],
    },
    {
      id: 'measure',
      title: 'Measuring it',
      blocks: [
        {
          t: 'list',
          items: [
            '**Surveys** of students, staff and parents, asking about safety, relationships, fairness and belonging, preferably anonymously and repeatedly.',
            '**Observation**: walk the school, watch transitions, the canteen and the toilets, and ask what a visitor would notice.',
            '**Data**: attendance, lateness, referrals, suspensions, staff turnover and sick leave.',
            '**Focus groups**: hear from students who are not usually heard.',
            '**Hot spots**: map where and when incidents occur.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Compare groups', text: 'Averages hide gaps. Split survey results by year group, gender, ability and background to see whose experience is worse.' },
      ],
    },
    {
      id: 'change',
      title: 'Changing climate and culture',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start with a clear picture', body: 'Use the data and the voices of students and staff. Name the gap between the school you want and the school you have.' },
            { title: 'Agree a few shared values and behaviours', body: 'Write them as observable behaviours: “We greet each other by name”, “We help a student who is struggling”.' },
            { title: 'Make the routines consistent', body: 'Entry, transitions, corridors, behaviour responses: everyone does the same, every day.' },
            { title: 'Build relationships on purpose', body: 'Form-time, mentoring, house systems, greeting at the door, positive calls home.' },
            { title: 'Be fair and visible about discipline', body: 'Clear rules, proportionate responses, procedures students trust.' },
            { title: 'Look after staff', body: 'Reasonable workload, supportive leadership, time to collaborate and a culture of trust.' },
            { title: 'Review regularly', body: 'Resurvey each year, share results and act on them.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/concepts/school-leadership', note: 'Leadership and culture' }, { path: 'teaching/singapore/bullying-law-and-protocol', note: 'Bullying and the school protocol' }, { path: 'teaching/guides/classroom/relationships', note: 'Relationships and belonging' }] },
      ],
    },
  ],
  sources: [
    'Thapa, A., Cohen, J., Guffey, S., and Higgins-D’Alessandro, A. (2013). A review of school climate research. Review of Educational Research.',
    'Berkowitz, R., Moore, H., Astor, R. A., and Benbenishty, R. (2017). A research synthesis of the associations between socioeconomic background, inequality, school climate, and academic achievement. Review of Educational Research.',
    'National School Climate Council (2007). The School Climate Challenge.',
    'Hargreaves, A. (1994). Changing Teachers, Changing Times. Cassell.',
  ],
  related: ['teaching/concepts/school-leadership', 'teaching/singapore/bullying-law-and-protocol', 'teaching/guides/classroom/relationships'],
}

export default guide
