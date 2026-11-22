import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A lashing binds two or more poles together using a series of turns of rope. The square lashing joins two poles that cross at right angles, such as the rails and posts of a gate, a tripod base, the frame of a shelter or a camp table. It has been the backbone of scout pioneering and of countless traditional structures, and it needs only a rope, two clove hitches and patience.',
  nutshell: [
    'A square lashing is for poles that **meet at right angles**, one across the other.',
    'The rope starts with a **clove hitch** on the upright, makes **three or four tight turns** around both poles, then **frapping turns** between them, and finishes with a clove hitch.',
    'The turns go **over the crosspiece and behind the upright**, forming a square window of rope round the joint.',
    '**Frapping turns** are wound round the lashing turns between the poles, pulling the turns tight against the wood.',
    'Use **natural-fibre rope** (sisal or jute) if you can, because it grips; synthetic rope may slip.',
  ],
  sections: [
    {
      id: 'tie',
      title: 'How to tie it',
      lead: 'Step through the diagram. The upright runs up the page and the crosspiece runs across it, in front.',
      blocks: [
        { t: 'knot', id: 'square-lashing' },
        {
          t: 'steps',
          items: [
            { title: 'Place the poles', body: 'Put the crosspiece in front of the upright, at right angles, at the place you want the joint. Mark the position so it does not slide.' },
            { title: 'Start with a clove hitch', body: 'Tie a clove hitch round the upright, just below the crosspiece, on the side the crosspiece rests on. Lay the short tail along the standing part and bind it in under the first turns.' },
            { title: 'Make three or four lashing turns', body: 'Take the rope up over the front of the crosspiece, round behind the upright, down over the front of the crosspiece again, and round behind the upright. Each turn lies beside the last, snug against the poles. Pull each turn tight as you go.' },
            { title: 'Make two or three frapping turns', body: 'Wind the rope two or three times between the two poles, round the lashing turns, pulling them tight against the poles. Frapping binds the turns together.' },
            { title: 'Finish with a clove hitch', body: 'Tie off with a clove hitch on the crosspiece (or the upright), close to the lashing. Tuck the tail, and check that every turn is tight.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Rope length', text: 'Allow a generous length: for poles about 5 cm thick, about 3 m of cord is a common allowance, plus a little spare for the hitches. Too much rope is easier to manage than too little.' },
      ],
    },
    {
      id: 'why',
      title: 'Why it holds',
      blocks: [
        { t: 'p', text: 'Each turn is a closed loop of rope, and both poles pass through it, so the loop cannot slide off either one. Because the turns run **over the crosspiece and behind the upright**, they press the two poles together at the joint from both directions. The **frapping turns** do a different job: they cinch the lashing turns together, so any slack is pulled out and the whole lashing tightens as one.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Lashing turns', body: 'The main binding. Three or four tight turns that clamp the poles together.' },
            { title: 'Frapping turns', body: 'Tighten the lashing by pulling the turns against each other and against the poles. They do not grip the poles themselves.' },
            { title: 'Clove hitches', body: 'Hold the rope in place at the start and finish while you wind the turns.' },
            { title: 'Natural rope', body: 'Sisal and jute swell when wet and grip the wood, so the lashing tightens. Smooth nylon slips unless the turns are tight.' },
          ],
        },
      ],
    },
    {
      id: 'use',
      title: 'What to build with it',
      blocks: [
        {
          t: 'list',
          items: [
            'A **gate** or fence frame, where the rails meet the posts at right angles.',
            'A **camp table**, **bench** or **kitchen rack**, built from straight poles.',
            'The **frame of a shelter** or a bivouac, where a ridge pole rests across two uprights.',
            'A **signal tower** or lookout platform, with the platform rails lashed across the legs.',
            'A **raft or stretcher frame** (only in a supervised, trained setting).',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Test before you trust', text: 'Pioneering structures can fail suddenly. Build only under adult or instructor supervision, keep structures low, test them gently first, and never put a person under a load you have not checked.' },
      ],
    },
    {
      id: 'mistakes',
      title: 'Common mistakes',
      blocks: [
        {
          t: 'table',
          head: ['Mistake', 'What goes wrong', 'Fix'],
          rows: [
            ['Loose turns', 'The joint wobbles and the poles slide', 'Pull each turn tight as you make it'],
            ['Crossed turns', 'Turns that cross each other are weaker and look untidy', 'Lay each turn beside the last, in a neat spiral'],
            ['No frapping', 'The turns are not pulled together, so the lashing slackens', 'Add two or three frapping turns between the poles'],
            ['Wrong rope', 'Slick synthetic rope slips on smooth poles', 'Use sisal or jute, or tie more turns and an extra hitch'],
            ['Hitch tied too far from the joint', 'The hitch slides and the lashing loosens', 'Start the clove hitch right at the joint'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'The poles are at right angles.',
            'Every turn is tight and none cross.',
            'There are two or three frapping turns.',
            'It finishes with a clove hitch against the poles.',
            'The structure holds when pushed.',
          ],
        },
      ],
    },
  ],
  sources: [
    'The Scout Association. Pioneering: lashings.',
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday.',
    'Wilkinson, J. Pioneering projects for scouts and cadets (standard lashing instructions).',
  ],
  related: ['survival/knots-and-lashing/clove-hitch', 'survival/knots-and-lashing/diagonal-lashing', 'survival/knots-and-lashing/shear-lashing'],
}

export default guide
