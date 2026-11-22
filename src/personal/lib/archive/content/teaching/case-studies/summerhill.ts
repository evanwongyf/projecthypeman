import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 1999 the English schools inspectorate told Summerhill, a small boarding school in Suffolk, that it would be closed unless it forced its pupils to attend lessons. The school fought, and in March 2000 won a settlement that let it carry on as before. Summerhill had been running for nearly eighty years on the radical principle that children should be free to choose whether to go to class, and that the school should be run by a meeting in which every pupil and every adult has one vote. This case study looks at the school, the dispute, what we know about its pupils and what a century of freedom suggests about the limits and the possibilities of democratic education.',
  nutshell: [
    '**A. S. Neill** founded Summerhill in **1921** (it has been at Leiston, Suffolk since **1927**). Lessons are **optional** and the school is run by the **School Meeting**, with **one vote per person**, child or adult.',
    'Neill’s creed: **“freedom, not licence”**. Children are happiest and learn best when they are free to play and to choose, and when they can live in a community that they govern.',
    'In **1999** inspectors criticised the school’s lack of compulsion; the school challenged this at a **tribunal in 2000** and the case ended in a **settlement**, with the school keeping its approach.',
    'Evidence on outcomes is **limited and self-reported**; later inspections were more favourable.',
    'The case shows what a school can do with **freedom and democratic governance**, and what questions remain about **basic skills** and **vulnerable pupils**.',
  ],
  sections: [
    {
      id: 'school',
      title: 'The school',
      blocks: [
        {
          t: 'table',
          head: ['Feature', 'At Summerhill'],
          rows: [
            ['Founder', 'Alexander Sutherland Neill (1883 to 1973), a Scottish teacher who had been troubled by the authoritarian schools he saw; he began in Germany in 1921 and settled the school in Leiston in 1927'],
            ['Size', 'A small boarding school of a few dozen to about a hundred pupils, from about 5 to 17, drawn from many countries'],
            ['Lessons', 'Available in the timetable, but attendance is the pupil’s choice; some children play for months before attending'],
            ['Governance', 'A School Meeting, usually weekly, chaired by a pupil, where rules are made, complaints heard and fines or other penalties decided; every pupil and member of staff has one vote'],
            ['Rules', 'Pupils make most rules (such as bedtimes and noise), with a few made by adults for safety and law'],
            ['Inspections', 'Government inspectors visit; a 1999 inspection led to a notice of complaint, resolved in 2000'],
          ],
        },
        { t: 'quote', text: 'The function of the child is to live his own life, not the life that his anxious parents think he should live.', by: 'A. S. Neill, Summerhill (1960)' },
      ],
    },
    {
      id: 'dispute',
      title: 'The 1999 notice and 2000 tribunal',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'March 1999', body: 'An inspection by the Office for Standards in Education (Ofsted) criticised the school’s failure to ensure that pupils attended lessons, as well as some other points, and the government served a Notice of Complaint threatening closure.' },
            { title: 'The school’s response', body: 'Summerhill, led by Neill’s daughter Zoë Readhead, challenged the notice before an Independent Schools Tribunal. Pupils and supporters campaigned and the case drew wide attention.' },
            { title: 'March 2000', body: 'On the eve of a tribunal hearing the government and school reached an agreed settlement. The school agreed to a range of measures on how it would be monitored and report, and kept its approach of optional lessons.' },
            { title: 'Afterwards', body: 'Later inspections of the school reported favourably on pupils’ personal development, behaviour and relationships, according to published reports.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'What was at stake', text: 'The case raised a question that every democracy faces: how much freedom should a school have to follow a philosophy that is very different from the norm, and how much should the state require? The settlement was widely read as a victory for the school.' },
      ],
    },
    {
      id: 'evidence',
      title: 'What do we know about the results?',
      blocks: [
        {
          t: 'table',
          head: ['Source', 'What it says', 'Caution'],
          rows: [
            ['Summerhill’s own accounts and Neill’s writing', 'Happy, confident, self-reliant children who learn what they need when they are ready', 'Written by the school’s founders and supporters'],
            ['Inspection reports (2000s)', 'Favourable on personal development and relationships; mixed on some academic measures', 'Inspections are snapshots'],
            ['Surveys of former pupils', 'Most report valuing their time, and go on to a wide range of careers and further study', 'Self-selected respondents, no control group'],
            ['Research on democratic schools more widely', 'Some studies find students are more autonomous and cooperative; few rigorous comparisons exist', 'Selection effects: families who choose such schools differ'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Be honest about the limits', text: 'Summerhill’s pupils are not a random sample: their families chose the school, and many are from supportive homes. A school that works for them may not work for every child. For children who need systematic teaching, such as those with dyslexia, a rule of “learn when you are ready” may mean waiting too long.' },
      ],
    },
    {
      id: 'lessons',
      title: 'What travels',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Real responsibility', body: 'Pupils who make real decisions, with consequences, learn what responsibility is. A class council with real power does this in a smaller way.' },
            { title: 'Voice and fairness', body: 'Fair processes, in which everyone can speak and vote, build trust in rules, a point echoed by the research on school climate.' },
            { title: 'Play and choice', body: 'Choice and play are not opposed to learning, particularly for younger children.' },
            { title: 'Limits', body: 'Freedom needs structure: Summerhill has rules, a meeting and adults who keep the community safe. Basic skills need explicit teaching for most children.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/philosophies/free-and-democratic-schools', note: 'Free and democratic schools' }, { path: 'teaching/theories/motivation', note: 'Autonomy and motivation' }, { path: 'teaching/concepts/school-climate-and-culture', note: 'School climate' }] },
      ],
    },
  ],
  sources: [
    'Neill, A. S. (1960). Summerhill: A Radical Approach to Child Rearing. Hart.',
    'Stronach, I., and Piper, H. (2008). Can liberal education make a difference? The Summerhill case. Curriculum Inquiry.',
    'Readhead, Z., and Hern, M. (2008). Summerhill school: a democratic community. In Deschooling Our Lives.',
    'Gribble, D. (1998). Real Education: Varieties of Freedom. Libertarian Education.',
  ],
  related: ['teaching/philosophies/free-and-democratic-schools', 'teaching/theories/motivation', 'teaching/philosophies/progressivism'],
}

export default guide
