import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Learners who are deaf or hard of hearing, or blind or partially sighted, can access the full curriculum when teaching and materials are designed with them in mind. Most adjustments are simple, and many help the whole class.',
  nutshell: [
    'Hearing: face the class, reduce background noise, use captions, repeat other learners’ answers, and check hearing technology.',
    'Vision: describe what you show, provide accessible formats, keep layouts consistent, and never rely on visuals alone.',
    'Specialist teachers of the deaf and of vision impairment are key partners. Ask for their advice.',
    'Ask learners what works for them; needs vary greatly.',
  ],
  sections: [
    {
      id: 'hearing',
      title: 'Deaf and hard of hearing learners',
      blocks: [
        {
          t: 'p',
          text: 'Hearing loss ranges from mild to profound, and learners may use hearing aids, cochlear implants, lip-reading, sign language (such as BSL or ASL) or a mix. Many deaf people see themselves as part of a cultural and linguistic community rather than as having an impairment; capital-D "Deaf" often signals this identity.',
        },
        {
          t: 'dodont',
          do: [
            'Face the class when speaking; do not talk while writing on the board.',
            'Keep your face visible and well lit (not in front of a bright window).',
            'Repeat or summarise other learners’ answers before responding.',
            'Use captions on all videos, and provide transcripts.',
            'Reduce background noise: close doors, turn off noisy equipment, use soft furnishings.',
            'Write key words, homework and changes on the board.',
            'Use radio aids or soundfield systems if provided, and check they work.',
            'Seat the learner where they can see you and most of the class.',
          ],
          dont: [
            'Shout or exaggerate lip movements; it distorts speech.',
            'Give important instructions while the class is noisy or during transitions.',
            'Assume a nod means the learner has heard.',
          ],
        },
      ],
    },
    {
      id: 'vision',
      title: 'Blind and partially sighted learners',
      blocks: [
        {
          t: 'p',
          text: 'Vision impairment ranges from reduced sharpness or field of vision to no useful sight. Learners may use large print, magnifiers, screen magnification, screen readers or braille, and may have orientation and mobility training to move around independently.',
        },
        {
          t: 'dodont',
          do: [
            'Say aloud what you write and show: "I’m writing 3x + 2 = 11 on the board."',
            'Provide materials in advance in the learner’s format: enlarged, digital or braille.',
            'Use high-contrast, uncluttered layouts and clear fonts.',
            'Add alternative text to images in digital materials.',
            'Offer tactile diagrams and real objects for key visuals.',
            'Keep the classroom layout consistent, and tell the learner before moving things.',
            'Say your name when you approach, and the learner’s name when addressing them.',
          ],
          dont: [
            'Say "this one here" or "look at that" without describing it.',
            'Rely on colour alone to convey meaning in charts or diagrams.',
            'Hand out materials in a format the learner cannot use and expect them to cope.',
          ],
        },
      ],
    },
    {
      id: 'partners',
      title: 'Working with specialists',
      blocks: [
        {
          t: 'list',
          items: [
            'Qualified teachers of the deaf or of vision impairment can assess needs, advise on the classroom, train staff and teach specialist skills like braille.',
            'Audiologists and ophthalmologists provide information on the learner’s hearing or sight.',
            'Families and the learner know best what works day to day.',
            'Plan exam access arrangements early: modified papers, readers, extra time, rest breaks.',
          ],
        },
      ],
    },
  ],
  sources: [
    'National Deaf Children’s Society. *Supporting the achievement of deaf children* (guidance series).',
    'Royal National Institute of Blind People (RNIB). *Effective practice guides for education*.',
    'CAST. (2024). *Universal Design for Learning guidelines version 3.0*.',
  ],
  related: ['teaching/special-education/strategies/assistive-tech', 'teaching/differentiation/udl', 'teaching/special-education/foundations/accommodations'],
}

export default guide
