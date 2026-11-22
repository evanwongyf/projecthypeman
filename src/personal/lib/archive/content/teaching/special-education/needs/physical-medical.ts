import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Learners with physical disabilities or long-term medical conditions, such as cerebral palsy, epilepsy, diabetes, asthma or chronic fatigue, can take a full part in school when access, health needs and energy are planned for. Most of the work is practical, and the learner and family are the best source of information.',
  nutshell: [
    'Each learner with a significant condition should have an **individual healthcare plan** agreed with the family and health professionals.',
    'Know the plan for the learners you teach, including what to do in an emergency.',
    'Plan **access**: rooms, equipment, trips, practical work and PE.',
    'Allow for **fatigue, absence and pain**: flexible deadlines, catch-up materials, rest breaks.',
  ],
  sections: [
    {
      id: 'plans',
      title: 'Healthcare plans',
      blocks: [
        {
          t: 'p',
          text: 'In England, schools must make arrangements to support learners with medical conditions, including individual healthcare plans where needed (DfE, 2015). Many other countries have similar requirements. A plan typically covers the condition and its triggers, signs and symptoms, daily care, medication, what to do in an emergency, who is trained, and effects on learning.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Follow the plan and your training',
          text: 'The summaries below are for awareness only. Always follow the learner’s own healthcare plan and your school’s procedures and training, and call emergency services when the plan says to or when in doubt.',
        },
      ],
    },
    {
      id: 'conditions',
      title: 'Common conditions',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Epilepsy', body: 'Seizures take many forms, from brief absences (staring, missed instructions) to convulsive seizures. In a convulsive seizure, general guidance is: time it, protect the head, move hazards away, do not restrain or put anything in the mouth, and place the learner in the recovery position afterwards. Seizures lasting over five minutes are usually treated as an emergency. After a seizure, learners may be tired and confused.' },
            { title: 'Type 1 diabetes', body: 'Learners may need to check blood glucose, inject or use a pump, and eat snacks at any time, including in lessons and exams. Low blood sugar (hypo) can cause shakiness, sweating, confusion or irritability and needs quick-acting sugar as set out in the plan.' },
            { title: 'Asthma', body: 'Reliever inhalers must be easily accessible at all times, including in PE and on trips. Know the learner’s triggers.' },
            { title: 'Physical disabilities', body: 'Such as cerebral palsy or muscular conditions. Needs vary: mobility, fine motor skills, fatigue, communication. Occupational therapists and physiotherapists advise on equipment and positioning.' },
            { title: 'Chronic illness and fatigue', body: 'Conditions like ME/CFS or long-term illness bring fluctuating energy, pain and absence. "Pacing" (spreading activity to avoid crashes) often matters more than pushing through.' },
            { title: 'Allergies', body: 'Severe allergies may need adrenaline auto-injectors. Know who carries one and where spares are kept.' },
          ],
        },
      ],
    },
    {
      id: 'learning',
      title: 'Supporting learning',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Provide materials and notes for lessons missed through illness or appointments.',
            'Plan flexible deadlines and a catch-up plan agreed with the learner.',
            'Check access for every room, trip and practical activity in advance.',
            'Adapt PE and practical work so the learner takes part meaningfully.',
            'Allow rest breaks, and a way to leave the room quietly when needed.',
            'Ask the learner what helps, and how they want their condition discussed with peers.',
          ],
          dont: [
            'Exclude the learner from trips or activities without first exploring adjustments.',
            'Penalise absence caused by their condition.',
            'Discuss their medical details in front of the class.',
            'Assume a physical disability means a learning difficulty.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Department for Education. (2015). *Supporting pupils at school with medical conditions* (statutory guidance, updated 2017).',
    'Epilepsy Action. *Epilepsy and seizure first aid*. epilepsy.org.uk',
    'Diabetes UK. *Type 1 diabetes in schools*. diabetes.org.uk',
  ],
  related: ['teaching/special-education/foundations/inclusion', 'teaching/special-education/foundations/accommodations', 'teaching/special-education/needs/dyspraxia'],
}

export default guide
