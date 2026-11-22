import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'What would a school look like if attendance at lessons were voluntary, the rules were made by students and staff with one vote each, and the curriculum came from the children? Free and democratic schools ask this question and have run the experiment for a century. This page looks at Summerhill and Sudbury Valley, the idea of unschooling, what these schools achieve, what evidence exists and where they run into limits.',
  nutshell: [
    '**Summerhill** (founded by A. S. Neill in 1921) has **optional lessons** and a **weekly School Meeting** where every child and adult has one vote.',
    '**Sudbury Valley School** (1968) takes this further, with **no curriculum**, **mixed ages** and a **judicial committee** for rules.',
    '**Unschooling** (John Holt) means learning from life and interest without a fixed curriculum, usually at home.',
    'Their core claim is that **freedom and responsibility** produce happier, more self-directed people; the evidence is **mostly descriptive and self-reported**.',
    'In many places, including Singapore, **compulsory education law** limits what is possible without exemptions.',
  ],
  sections: [
    {
      id: 'ideas',
      title: 'The core ideas',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Freedom', title: 'Children are naturally curious', body: 'If compulsion is removed, children will learn what they need at the right time. Neill wrote “freedom, not licence”.' },
            { tag: 'Democracy', title: 'Real rules, made together', body: 'Students and staff make the rules in a meeting and enforce them through a committee. Learning responsibility needs real power.' },
            { tag: 'Self-direction', title: 'No required curriculum', body: 'Students decide how to spend their time; teachers are available as resources.' },
            { tag: 'Emotions', title: 'Happiness as a priority', body: 'Neill believed that emotional health was more important than academic achievement, and that unhappy people are the product of unhappy education.' },
          ],
        },
      ],
    },
    {
      id: 'schools',
      title: 'Summerhill and Sudbury Valley',
      blocks: [
        {
          t: 'table',
          head: ['', 'Summerhill (England)', 'Sudbury Valley (USA)'],
          rows: [
            ['Founded', '1921 by A. S. Neill (in Leiston, Suffolk since 1927)', '1968, Framingham, Massachusetts'],
            ['Lessons', 'Available and optional; children attend if they choose', 'No classes unless students ask for them'],
            ['Governance', 'Weekly School Meeting, one person one vote', 'School Meeting runs the school, including hiring staff and budgets; a Judicial Committee handles rule breaks'],
            ['Ages', 'About 5 to 17', 'About 4 and up, ages mixed'],
            ['Staff role', 'Teachers and houseparents', 'Staff are elected annually by the School Meeting'],
          ],
        },
        { t: 'p', text: 'Summerhill is the better known, partly because of its encounter with the inspectors. In 1999 the English schools inspectorate served a notice of complaint threatening closure, partly because of children missing lessons. The school fought the notice at a tribunal in 2000 and the matter ended in an agreed settlement, with the school keeping its approach. The case is cited as a landmark for the right of a school to follow its philosophy.' },
      ],
    },
    {
      id: 'unschooling',
      title: 'Unschooling',
      blocks: [
        { t: 'p', text: 'John Holt, a teacher who became a critic of schools, wrote *How Children Fail* (1964) and began the newsletter *Growing Without Schooling* (1977). He argued that children learn naturally when they are interested, and that schools get in the way. Unschooling families give their children the run of home and community, following their interests without a set curriculum. Surveys of unschoolers suggest high satisfaction and many go on to higher education, but the studies rely on self-selected volunteers.' },
        { t: 'callout', tone: 'note', title: 'In Singapore', text: 'Education is compulsory for Singapore citizens in national primary school, with a limited route for exemption (for example for approved home-schooling or religious schooling) that requires MOE approval. Unschooling in the full sense would be difficult without an exemption. See the discussion of the Compulsory Education Act in the Singapore pages.' },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Source and caveat'],
          rows: [
            ['Alumni report high satisfaction and sustained curiosity; many enter higher education and varied careers', 'Follow-up surveys of Sudbury Valley graduates (Greenberg and colleagues); self-reported, unrepresentative, no comparison group'],
            ['Students in democratic schools report greater autonomy and community', 'Small studies and surveys'],
            ['Children learn to read at widely different ages without apparent long-term harm', 'Observation in free schools; consistent with delayed-start findings but not a controlled trial'],
            ['Few rigorous comparisons on academic outcomes exist', 'Selection effects: families who choose these schools are not typical'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Be careful', text: 'Absence of strong evidence is not evidence of harm, and not evidence of benefit. For children who need systematic teaching, such as those with dyslexia, waiting for readiness can be costly. Reading is one area where explicit instruction has strong evidence.' },
      ],
    },
    {
      id: 'borrow',
      title: 'What any classroom can borrow',
      blocks: [
        {
          t: 'list',
          items: [
            'A class council or meeting where students help set and review rules.',
            'Genuine choice over some work, with accountability.',
            'Real responsibilities for students, such as running a club or a project.',
            'Time to pursue an interest and present it.',
            'Restorative conversations in place of punishments, where appropriate.',
          ],
        },
        { t: 'links', items: [{ path: 'teaching/case-studies/summerhill', note: 'Summerhill as a case study' }, { path: 'teaching/guides/classroom/restorative', note: 'Restorative practice' }, { path: 'teaching/theories/motivation', note: 'Autonomy and motivation' }] },
      ],
    },
  ],
  sources: [
    'Neill, A. S. (1960). Summerhill: A Radical Approach to Child Rearing. Hart.',
    'Greenberg, D. (1987). Free at Last: The Sudbury Valley School. Sudbury Valley School Press.',
    'Holt, J. (1964). How Children Fail. Pitman.',
    'Gray, P., and Riley, G. (2015). Grown unschoolers’ experiences with higher education and employment. Journal of Unschooling and Alternative Learning.',
  ],
  related: ['teaching/philosophies/overview', 'teaching/philosophies/progressivism', 'teaching/case-studies/summerhill'],
}

export default guide
