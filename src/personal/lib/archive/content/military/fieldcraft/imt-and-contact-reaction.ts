import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Individual movement technique (IMT) is the physical foundation everything else on this shelf sits on top of, before a section can fire and move, before a commander can call a contact drill, every individual soldier needs to be able to get from standing to a stable firing position, fast, without thinking about it.',
  nutshell: [
    'The first reaction to effective enemy fire is always **down**, not sideways and not backward, any extra second spent upright is a second spent as the easiest target on the field.',
    'A practised soldier goes from standing to an aimed prone position in roughly **one to two seconds**.',
    'The movement is a straight, controlled drop, **knee and opposite hand first**, weapon staying roughly on target the whole way down, not a dive or a stumble.',
    'Only once stable does return fire start: **reacting fast matters, but firing accurately matters more** than firing first.',
  ],
  sections: [
    {
      id: 'why-speed-matters',
      title: 'Why the first second matters so much',
      blocks: [
        { t: 'p', text: 'An exposed, standing target is dramatically easier to hit than a prone one, smaller profile, harder to range, and (once down) using whatever cover and concealment the ground offers. The entire point of drilling this movement until it is automatic is removing the hesitation gap between "I am being shot at" and "I am in a position to do something about it."' },
        { t: 'mil-viz', viz: 'imt-sequence' },
      ],
    },
    {
      id: 'the-sequence',
      title: 'Breaking the movement down',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Recognise', body: 'Hearing or seeing effective fire (rounds actually landing near you, not just the general sound of gunfire somewhere) is the trigger, the drill starts the instant that registers, not after looking around to confirm.' },
            { title: 'Drop', body: 'Weight shifts down and forward in one motion, the firing-side knee and the opposite hand taking the initial impact, keeping the body moving in a straight line rather than lunging sideways.' },
            { title: 'Extend', body: 'The body extends flat into the prone position, legs spread slightly for stability, weapon coming into the shoulder as the body settles rather than after.' },
            { title: 'Orient', body: 'Elbows down and spread for a stable firing platform, muzzle oriented toward the direction fire is believed to be coming from.' },
            { title: 'Fire (once stable)', body: 'Aimed shots, not blind suppression from an unstable position, a few seconds spent getting properly set up is worth it if it means the rounds that follow actually land somewhere useful.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Why this is drilled until it is boring', text: 'Under genuine stress, fine motor control and conscious decision-making both degrade, which is exactly why basic training drills simple movements like this one repeatedly, until the body can execute them correctly without the brain having to consciously direct every step. The repetition that feels unnecessary on a calm training field is what makes the movement reliable under real pressure.' },
      ],
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes worth drilling out early',
      blocks: [
        {
          t: 'dodont',
          do: ['Go straight down in a controlled drop, weapon tracking roughly toward the threat the whole way', 'Pick the nearest usable cover, even if it is imperfect, over a better position further away', 'Get stable before firing, a few tenths of a second for a solid position pays for itself in accuracy'],
          dont: ['Freeze upright while deciding where to go, moving to imperfect cover beats staying exposed while searching for perfect cover', 'Dive sideways or stumble, which both slows the drop and risks losing control of the weapon', 'Fire wildly from an unstable position before settling, uncontrolled "spray" fire rarely hits anything and gives away your position for nothing'],
        },
      ],
    },
  ],
  sources: [
    'U.S. Army. *FM 3-21.8: The Infantry Rifle Platoon and Squad* (publicly released field manual, individual movement techniques chapter).',
    'British Army. *Infantry Training Volume 1: Skill at Arms* (publicly referenced fieldcraft fundamentals).',
  ],
  related: ['military/fieldcraft/fire-and-movement', 'military/battle-drills/contact-drills', 'military/fieldcraft/camouflage-and-concealment'],
}

export default guide
