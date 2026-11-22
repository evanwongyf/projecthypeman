import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A child who clings, a child who will not let anyone close, a child who seems unable to settle: teachers meet them every year, and attachment theory offers one way of understanding where such patterns can begin. John Bowlby and Mary Ainsworth showed that infants form bonds with caregivers, and that the quality of those bonds shapes how they explore the world and how they later trust others. This page explains attachment theory, the main attachment patterns, what it can and cannot tell a teacher, and how an adult at school can act as a safe base without trying to be a therapist.',
  nutshell: [
    '**Bowlby** argued that infants are born with a drive to form a **close bond** with a caregiver, which provides a **secure base** to explore from and a **safe haven** to return to.',
    '**Ainsworth’s Strange Situation** identified patterns: **secure**, **insecure-avoidant**, **insecure-ambivalent** (anxious) and **disorganised**.',
    'Early attachment can shape a child’s **expectations of adults**, but **patterns are not fixed**; later relationships can change them.',
    'In school, a warm, **predictable and reliable** adult can be a **secure base**: this is relationship-building, not therapy.',
    'Be cautious: attachment is **not a diagnosis**, labels can mislead, and behaviour has many causes. Refer concerns to the school counsellor.',
  ],
  sections: [
    {
      id: 'theory',
      title: 'Bowlby and Ainsworth',
      blocks: [
        { t: 'p', text: 'John Bowlby, a British psychiatrist, began from observations of children separated from their parents in hospitals and orphanages. He argued that attachment is an evolved system: infants seek proximity to a caregiver when frightened, and use the caregiver as a base from which to explore. Mary Ainsworth developed the Strange Situation, a short laboratory procedure in which a one-year-old is separated from, and reunited with, the caregiver, and found that infants differed in how they responded.' },
        {
          t: 'table',
          head: ['Pattern', 'In the Strange Situation', 'Caregiving linked to it', 'Typical expectation of others'],
          rows: [
            ['Secure', 'Upset at separation, easily comforted on return, explores freely', 'Sensitive, responsive', '“Adults will help me when I need it”'],
            ['Insecure-avoidant', 'Little distress, avoids caregiver on return', 'Rejecting or uncomfortable with closeness', '“I must cope on my own”'],
            ['Insecure-ambivalent (anxious)', 'Very distressed, hard to soothe, clings and resists', 'Inconsistent', '“I cannot be sure adults will be there”'],
            ['Disorganised', 'Confused, contradictory behaviour', 'Frightening or frightened caregiving, maltreatment', '“Adults are both a source of comfort and of fear”'],
          ],
          caption: 'Roughly two-thirds of infants in typical samples are classed as secure, with the remainder divided among the insecure patterns. Rates vary by culture and sample.',
        },
      ],
    },
    {
      id: 'school',
      title: 'What it means in school',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Secure', title: 'Explorers', body: 'Likely to ask for help appropriately, join in, and recover from setbacks. A teacher’s warmth reinforces this.' },
            { tag: 'Avoidant', title: 'Self-reliant, distant', body: 'May refuse help, hide difficulty and seem independent. Offer help in low-key ways and respect space, while staying available.' },
            { tag: 'Anxious', title: 'Seeking reassurance', body: 'May cling, seek constant attention or be easily upset. Give predictable routines and clear signals about when you will be available.' },
            { tag: 'Disorganised', title: 'Hard to read', body: 'May switch between affection and aggression or freeze. These children need specialist input; keep routines calm and safe and involve the counsellor.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Be reliable: the same greeting, the same follow-through.', 'Name feelings and offer comfort before correction in the moment.', 'Keep transitions and changes predictable, and prepare students for them.', 'Repair after conflict, so that the child learns that relationships survive disagreement.'],
          dont: ['Do not label a child as having “attachment disorder”: this is a clinical diagnosis for professionals.', 'Do not take a child’s rejection personally.', 'Do not become a substitute parent or promise confidentiality you cannot keep.', 'Do not use withdrawal of warmth as a punishment.'],
        },
      ],
    },
    {
      id: 'limits',
      title: 'What attachment theory cannot tell you',
      blocks: [
        {
          t: 'list',
          items: [
            '**It is not destiny.** Studies of continuity show that attachment patterns are only moderately stable, and later experiences (including good teachers) matter.',
            '**Many things look similar.** Anxiety, ADHD, autism, trauma and learning difficulties can look like attachment problems and need different responses.',
            '**Culture matters.** The Strange Situation was developed in the US and its categories may fit differently in other cultures, where caregiving is shared among many adults or early independence is valued differently.',
            '**It should not blame parents.** Attachment is shaped by circumstances: poverty, illness, migration and work. Work with families rather than judging them.',
            '**Teachers are not therapists.** Where a child’s distress is severe or persistent, refer to the school counsellor or relevant services.',
          ],
        },
        { t: 'callout', tone: 'note', title: 'The value for teachers', text: 'Attachment theory is useful less as a diagnostic tool than as a reminder: a child’s behaviour often reflects how safe adults feel to them. A teacher who is consistently warm, calm and fair, and who repairs ruptures, offers something that can matter a great deal.' },
        { t: 'links', items: [{ path: 'teaching/special-education/needs/semh', note: 'Social, emotional and mental health needs' }, { path: 'teaching/guides/classroom/relationships', note: 'Relationships and belonging' }, { path: 'teaching/theories/ecological-systems', note: 'Ecological systems theory' }] },
      ],
    },
  ],
  sources: [
    'Bowlby, J. (1969). Attachment and Loss, Vol. 1: Attachment. Hogarth Press.',
    'Ainsworth, M. D. S., Blehar, M. C., Waters, E., and Wall, S. (1978). Patterns of Attachment. Erlbaum.',
    'Bergin, C., and Bergin, D. (2009). Attachment in the classroom. Educational Psychology Review.',
    'Geddes, H. (2006). Attachment in the Classroom. Worth Publishing.',
  ],
  related: ['teaching/theories/ecological-systems', 'teaching/special-education/needs/semh', 'teaching/guides/classroom/relationships'],
}

export default guide
