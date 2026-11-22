import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Inclusive education means that learners with disabilities and special educational needs learn alongside their peers in ordinary classrooms, with the support they need to take a full part. It is both a legal duty in many countries and a way of teaching that benefits everyone.',
  nutshell: [
    'Inclusion is not just being in the room. It means taking part and making progress.',
    'The **social model of disability**: people are disabled by barriers in the environment, not only by their impairments. Remove the barriers.',
    'International agreements (Salamanca 1994, UN CRPD 2006) set inclusion as the goal.',
    'Good inclusive practice starts with quality teaching for everyone, then adds targeted support.',
  ],
  sections: [
    {
      id: 'models',
      title: 'Two models of disability',
      lead: 'Where the problem is located.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Medical model', 'Social model'],
          rows: [
            ['Where the problem is', 'In the person’s impairment', 'In barriers in the environment, attitudes and systems'],
            ['Goal', 'Treat or fix the individual', 'Remove barriers so the person can participate'],
            ['Classroom example', '"She can’t read the worksheet because of her visual impairment."', '"The worksheet is inaccessible. Let’s provide it in large print or on a screen reader."'],
          ],
        },
        {
          t: 'p',
          text: 'The social model was set out by disabled activists in the UK in the 1970s and named by Mike Oliver in 1983. It does not deny that impairments are real or that some need medical care. It shifts the teacher’s question from "what is wrong with this learner?" to "what is stopping this learner from learning, and what can I change?".',
        },
      ],
    },
    {
      id: 'continuum',
      title: 'Exclusion to inclusion',
      lead: 'Four different things that are often confused.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Exclusion', body: 'Learners are kept out of education altogether.' },
            { name: 'Segregation', body: 'Learners are educated in separate settings designed for particular impairments, apart from peers.' },
            { name: 'Integration', body: 'Learners are placed in mainstream settings but expected to fit in as they are, without changes to the teaching or environment.' },
            { name: 'Inclusion', body: 'The teaching, curriculum, environment and culture change so that all learners can participate and learn together.' },
          ],
          caption: 'Based on the UN Committee on the Rights of Persons with Disabilities, General Comment No. 4 (2016). Specialist settings still play a role for some learners in many systems.',
        },
      ],
    },
    {
      id: 'law',
      title: 'The legal framework',
      lead: 'Key agreements and laws.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Salamanca Statement (1994)', def: 'UNESCO agreement signed by 92 governments stating that regular schools with an inclusive orientation are the most effective way to combat discrimination and build an inclusive society.' },
            { term: 'UN CRPD (2006)', def: 'Article 24 of the Convention on the Rights of Persons with Disabilities commits signatories to an inclusive education system at all levels, with reasonable accommodation.' },
            { term: 'United States: IDEA', def: 'The Individuals with Disabilities Education Act guarantees a free appropriate public education in the **least restrictive environment**, with an Individualized Education Program (IEP) for eligible learners.' },
            { term: 'United Kingdom: SEND Code of Practice', def: 'Statutory guidance (England, 2015) describing the graduated approach and Education, Health and Care Plans. The Equality Act 2010 requires **reasonable adjustments** for disabled learners.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'Laws and terms vary by country and change over time. Check your local legislation and your school’s policies, and talk to your special educational needs coordinator (SENCO) or special education team.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Inclusive classroom practice',
      blocks: [
        {
          t: 'checklist',
          items: [
            'I know which learners have identified needs and what their plans say.',
            'My lesson materials are accessible (clear layout, readable fonts, captions, alternative text).',
            'Instructions are given aloud and in writing, in short steps.',
            'I use [Universal Design for Learning](@teaching/differentiation/udl) to build options into my planning.',
            'Support staff know the lesson goal and their role in advance.',
            'Seating and the environment work for learners with sensory or physical needs.',
            'Learners with needs have the same high expectations and access to the same rich content as their peers.',
            'I talk to learners and families about what helps.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Good for everyone',
          text: 'Much of what helps learners with special needs, like clear structure, explicit teaching, visual support and checking understanding, helps all learners. A meta-analysis also found that including learners with special needs has, on average, a small positive effect on the achievement of their classmates (Szumski, Smogorzewska & Karwowski, 2017).',
        },
      ],
    },
  ],
  sources: [
    'UNESCO. (1994). *The Salamanca statement and framework for action on special needs education*.',
    'United Nations. (2006). *Convention on the rights of persons with disabilities*, Article 24.',
    'UN Committee on the Rights of Persons with Disabilities. (2016). *General comment No. 4 on the right to inclusive education*.',
    'Oliver, M. (1983). *Social work with disabled people*. Macmillan.',
    'Department for Education & Department of Health. (2015). *SEND code of practice: 0 to 25 years*.',
    'Szumski, G., Smogorzewska, J., & Karwowski, M. (2017). Academic achievement of students without special educational needs in inclusive classrooms: A meta-analysis. *Educational Research Review, 21*, 33–54.',
  ],
  related: ['teaching/special-education/foundations/accommodations', 'teaching/special-education/foundations/plans', 'teaching/differentiation/udl', 'teaching/special-education/foundations/tiered-support', 'teaching/special-education/needs/physical-medical'],
}

export default guide
