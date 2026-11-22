import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A report that arrives in a fixed, predictable order is far more useful than an accurate one delivered as a jumbled rush, the listener knows exactly where each piece of information is coming, even over a crackly radio, under stress, with gunfire in the background.',
  nutshell: [
    '**SALUTE** (Size, Activity, Location, Unit, Time, Equipment) is a widely used format for reporting what you’ve observed of the enemy, in a fixed order.',
    'A **SITREP** (situation report) is a broader status update, not just enemy contact, but friendly status, position and any changes since the last report.',
    'Radio **prowords** (procedure words like "over," "out," "roger," "wilco," "say again") exist to make transmissions short, unambiguous, and resistant to being misheard.',
    '**Brevity and security** both matter on the radio: shorter transmissions are both easier to understand and give less time for anyone listening in to intercept useful information.',
  ],
  sections: [
    {
      id: 'builder',
      title: 'Build a SALUTE report',
      blocks: [
        { t: 'mil-viz', viz: 'sitrep-builder' },
        { t: 'p', text: 'Practise filling this in from memory without looking at the labels, under real pressure, the value of a fixed format is that you don’t need to think about what to say next, only what you actually observed.' },
      ],
    },
    {
      id: 'sitrep-vs-salute',
      title: 'SITREP vs. a contact report',
      blocks: [
        {
          t: 'table',
          head: ['Report type', 'When it’s used', 'What it covers'],
          rows: [
            ['SALUTE (contact/enemy report)', 'Immediately after observing the enemy', 'Size, activity, location, unit/uniform, time observed, equipment seen'],
            ['SITREP (situation report)', 'Periodically, or when the situation changes', 'Friendly unit location and status, any contact or casualties, remaining ammunition/supplies, intentions'],
            ['MEDEVAC/casualty request', 'When a casualty needs evacuation', 'Location, number and type of casualties, security of the pickup site, and other details a NATO-standard 9-line format is built specifically to capture completely and in order'],
          ],
          caption: 'Different militaries and units use somewhat different exact formats and terminology, the underlying principle (fixed, memorised order; most critical information first) is consistent across almost all of them.',
        },
      ],
    },
    {
      id: 'radio-basics',
      title: 'Basic radio discipline',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: '"Over"', def: 'I’m finished transmitting and expect a reply, hand the conversation back to the other station.' },
            { term: '"Out"', def: 'The conversation is finished, no reply expected.' },
            { term: '"Roger"', def: 'Message received and understood (not the same as agreeing to act on it).' },
            { term: '"Wilco"', def: '"Will comply"received, understood, and will be carried out.' },
            { term: '"Say again"', def: 'Please repeat your last transmission, plain, unambiguous, used instead of "what" or "repeat" (which has its own different meaning in artillery communication, asking for another round on the same target).' },
            { term: '"Wait, out" / "Wait one"', def: 'I need a short moment before replying, then will get back to you.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Why "brevity" and "security" are taught together', text: 'A short transmission is easier for the listener to catch correctly the first time (no "say again" needed), and it also minimises how long a transmission is on the air for anyone who might be listening to intercept it. Clear, standard prowords and formats serve both goals at once, speed and security aren’t really separate skills here, they come from the same discipline.' },
        {
          t: 'checklist',
          items: [
            'Think through what you need to say before keying the radio"dead air" while thinking wastes the channel and your own transmission window',
            'Use call signs, not names, over the radio, the whole point of a call sign system is that it doesn’t reveal who’s who to anyone listening in',
            'Keep transmissions as short as the information allows, without leaving out anything actually needed',
            'Confirm understanding explicitly ("roger" or "wilco") rather than assuming silence means agreement',
          ],
        },
      ],
    },
  ],
  sources: [
    'U.S. Army. *FM 6-02.53: Techniques for Tactical Radio Operations* (publicly released, prowords and radio procedure).',
    'NATO Standardization Office. *9-Line MEDEVAC Request Format* (publicly documented standard format).',
  ],
  related: ['military/battle-drills/contact-drills', 'military/battle-drills/casualty-care-and-classification', 'military/singapore-ns/bmt-field-camp-overview'],
}

export default guide
