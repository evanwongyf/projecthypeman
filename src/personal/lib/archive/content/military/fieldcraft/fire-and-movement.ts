import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Fire and movement is the single idea underneath almost every infantry tactic above the individual level: one element keeps the enemy’s head down while another element moves. Scale it up from two soldiers to two fire teams to two platoons and the logic barely changes.',
  nutshell: [
    'A **buddy pair never moves together**, one covers (fires to suppress the enemy) while the other moves; they alternate.',
    'A rush is **3 to 5 seconds**: long enough to cover useful ground, short enough that an enemy can’t properly aim and fire before you’re down again.',
    'The mental checklist for a rush is often remembered as **"I’m up, he sees me, I’m down"**, said in your head, it naturally takes about the right amount of time.',
    'At close range, fire and movement transitions into a **direct assault**, where both elements move together to close the final distance.',
  ],
  sections: [
    {
      id: 'the-walkthrough',
      title: 'Watch it step by step',
      blocks: [
        { t: 'mil-viz', viz: 'fire-movement' },
      ],
    },
    {
      id: 'why-3-to-5-seconds',
      title: 'Why the rush is timed in seconds, not metres',
      blocks: [
        { t: 'p', text: 'The 3-to-5-second rule exists because of how long it genuinely takes a person to spot a moving target, bring a weapon to bear, aim, and fire an accurate shot, not an arbitrary number. A rush shorter than that risks wasting the movement (you barely cover any ground); a rush longer than that gives an alert enemy enough time to track and engage you properly.' },
        {
          t: 'plot',
          title: 'Illustrative: risk of being hit vs. how long you stay exposed moving (conceptual, not measured data)',
          x: [0, 10],
          y: [0, 100],
          xLabel: 'seconds spent exposed and moving',
          yLabel: 'illustrative relative risk',
          curves: [{ f: (t: number) => 8 + 2.2 * t ** 1.6, color: '#d9534f' }],
          shade: [{ from: 3, to: 5, label: 'the 3–5 second window', color: 'var(--mint)' }],
          caption: 'This curve is illustrative, not derived from real casualty data, it exists to show the shape of the reasoning: risk climbs slowly at first and then accelerates the longer a soldier remains an exposed, trackable target, which is exactly why the rush window is kept short rather than "as far as possible."',
        },
        { t: 'callout', tone: 'tip', title: 'Say it, don’t just count it', text: 'Counting "one-one-thousand, two-one-thousand…" under stress is unreliable, adrenaline distorts time perception. Saying the full phrase "I’m up, he sees me, I’m down" in your head as you move takes roughly the right amount of time and gives you something concrete to focus on besides the fear of the moment.' },
      ],
    },
    {
      id: 'picking-a-route',
      title: 'Picking where to move to',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Identify the next position before moving, not while moving, hesitating mid-rush wastes the short window you have',
            'Prefer cover (stops rounds: a wall, a bank, a solid tree) over mere concealment (just hides you: tall grass, a bush) whenever both are available',
            'Avoid moving in a predictable straight line toward the enemy if a slightly offset route is available, unpredictability costs little and helps a lot',
            'Never move directly in front of your covering buddy’s line of fire',
          ],
        },
        { t: 'p', text: 'This same alternating cover-and-move logic scales up directly to section and platoon tactics, one fire team suppresses while another manoeuvres, which is covered from the section commander’s perspective in [contact drills](@military/battle-drills/contact-drills).' },
      ],
    },
  ],
  sources: [
    'U.S. Army. *FM 3-21.8: The Infantry Rifle Platoon and Squad* (publicly released field manual, fire and movement chapter).',
    'British Army. *Infantry Training Volume 1: Skill at Arms* (publicly referenced fieldcraft fundamentals).',
  ],
  related: ['military/fieldcraft/imt-and-contact-reaction', 'military/battle-drills/contact-drills', 'military/fieldcraft/camouflage-and-concealment'],
}

export default guide
