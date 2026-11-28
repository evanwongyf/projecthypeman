import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Beyond the competitive circuits sit formats built for other purposes: Karl Popper for teaching, Oxford-style for audiences, moot court for law, and Model UN for negotiation. Each one changes what counts as winning, and each is worth knowing because the skills transfer in only one direction.',
  nutshell: [
    '**Karl Popper** makes cross-examination a scored part of the round, which is why it is used to teach.',
    '**Oxford-style** is judged by an audience vote, measured as the *shift* in opinion rather than the final count.',
    '**Moot court** has no motion, only a legal question, and the bench interrupts whenever it likes.',
    '**Model UN** is not debate but negotiation: the win condition is a resolution that passes, not an argument that lands.',
    'Audience formats reward **narrative and concession**; technical formats reward coverage. Confusing the two is the usual failure.',
  ],
  sections: [
    {
      id: 'kp',
      title: 'Karl Popper',
      blocks: [
        { t: 'p', text: 'Three speakers a side, alternating speeches and three-minute cross-examinations, run widely across Central and Eastern Europe, Central Asia and IDEA’s school programmes. Every speaker both speaks and questions, which is the point: you cannot hide behind a teammate, and the format forces you to understand a case you did not write.' },
        { t: 'debate-lab', viz: 'formats' },
        { t: 'p', text: 'Because topics are released well in advance and teams prepare both sides, the format tests depth of understanding rather than improvisation. The cross-examination is where rounds are decided; technique for it is in [points and cross-examination](@debate/techniques/points-and-cross-examination).' },
      ],
    },
    {
      id: 'oxford',
      title: 'Oxford-style and public debate',
      blocks: [
        { t: 'p', text: 'A motion, two or three speakers a side, and an audience that votes before and after. The standard measure is the **shift**: a side that moves 12% of the room wins over a side that holds a larger but unchanged majority. That single scoring rule inverts several competitive habits.' },
        {
          t: 'table',
          head: ['Competitive instinct', 'In front of an audience'],
          rows: [
            ['Never concede anything.', 'Concede early and visibly; it is the cheapest credibility available.'],
            ['Cover every argument.', 'Choose one story and tell it well. Nobody is flowing.'],
            ['Speak at pace to fit more in.', 'Slow down; pauses do the work of signposting.'],
            ['Technical framing of the burden.', 'A concrete example of a real person, named early and returned to.'],
            ['Win the clash.', 'Move the undecided. The committed are not available to you.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Target the movable', text: 'Pre-vote figures usually show a large undecided block. Your speech is addressed to them, which means answering the objection they already have rather than the one your opponent just made.' },
      ],
    },
    {
      id: 'moot',
      title: 'Moot court',
      blocks: [
        { t: 'p', text: 'Mooting is appellate advocacy: a fictional case on appeal, a bench of judges, and no motion to define. You argue from the record and the authorities, and the bench interrupts the moment it is unconvinced. Marks go to legal reasoning, use of authority, and how you handle questions.' },
        {
          t: 'dodont',
          do: [
            'Answer the question asked, in the first sentence, then return to your structure.',
            'Concede the weak limb and argue the strong one; benches respect it.',
            'Know your authorities well enough to be taken off-script into any of them.',
            'Keep a one-page skeleton: your submissions, numbered, with the key case under each.',
          ],
          dont: [
            'Say "I will come to that" more than once.',
            'Overstate a case’s holding. One correction and your remaining submissions are discounted.',
            'Argue the facts as if the trial were being re-run.',
            'Use debating rhetoric. The register is formal and the bench is not an audience.',
          ],
        },
      ],
    },
    {
      id: 'mun',
      title: 'Model UN and committee debate',
      blocks: [
        { t: 'p', text: 'MUN looks like debate and behaves like negotiation. You represent a state whose interests are fixed, speeches are short and procedural, and the output is a written resolution that must attract votes. Winning is coalition-building: the best speaker in the room routinely loses to the delegate who wrote the clause everyone could accept.' },
        { t: 'p', text: 'The transferable skill is the one from [actor motions](@debate/systems/motions-and-burdens): arguing from a mandate rather than from your own view, and being bound by an interest you did not choose.' },
      ],
    },
    {
      id: 'choose',
      title: 'Which skills move between them',
      blocks: [
        {
          t: 'table',
          head: ['Skill', 'Transfers well to', 'Actively hurts in'],
          rows: [
            ['Weighing and comparison', 'Everything', '—'],
            ['Coverage on the flow', 'Policy, LD, PF', 'Oxford-style, moot'],
            ['Narrative and examples', 'Oxford-style, WSDC, PF with lay judges', 'Policy with technical judges'],
            ['Questioning technique', 'Karl Popper, policy, moot', '—'],
            ['Speed', 'Policy', 'Every other format on this shelf'],
            ['Procedural argument', 'Policy, LD', 'Audience formats, where it reads as evasion'],
          ],
        },
      ],
    },
  ],
  sources: [
    'IDEA (International Debate Education Association) format guides, including the Karl Popper rules.',
    'Intelligence Squared debate records, for the pre- and post-vote shift measure.',
    'Snider, A. and Schnurer, M. (2006) Many Sides: Debate Across the Curriculum. IDEA.',
  ],
  related: ['debate/formats/choosing-and-switching', 'debate/techniques/points-and-cross-examination', 'debate/techniques/delivery-and-style'],
}

export default guide
