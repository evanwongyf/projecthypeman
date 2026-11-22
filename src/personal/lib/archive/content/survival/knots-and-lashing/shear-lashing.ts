import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A shear lashing binds two poles that lie side by side, so they can be opened into an A-frame (a pair of sheers or a bipod) or joined end to end to make a longer pole. It is the lashing that stands up a gate post, a lifting derrick or the legs of a tripod, and it is made with more turns than the other lashings, because it holds poles that will pull in opposite directions.',
  nutshell: [
    'A shear lashing binds **two parallel poles** so they open like a pair of legs.',
    'Start with a **clove hitch** on one pole, wind **six to eight loose turns** round both poles, then make **two or three frapping turns** between the poles, and finish with a clove hitch on the other pole.',
    'The turns are kept **loose** so the poles can swing apart; the frapping turns then pull everything tight.',
    'Used for **sheers** (an A-frame), **tripods**, **bipods** and for **lengthening a pole** by lashing two together.',
    'Place the lashing **near the top**, where the legs meet.',
  ],
  sections: [
    {
      id: 'tie',
      title: 'How to tie it',
      lead: 'Step through the diagram. The two poles are vertical and side by side, and the rope winds round both.',
      blocks: [
        { t: 'knot', id: 'shear-lashing' },
        {
          t: 'steps',
          items: [
            { title: 'Lay the poles together', body: 'Lay the two poles side by side, with the butts level and the tops where you want the lashing.' },
            { title: 'Start with a clove hitch', body: 'Tie a clove hitch round one pole, a short distance from the top, with the tail along the standing part.' },
            { title: 'Wind the lashing turns', body: 'Wind six to eight turns round both poles, each lying beside the last. Keep them **loose enough** that the poles can open into a V, but tidy and even.' },
            { title: 'Frap between the poles', body: 'Wind two or three frapping turns in the gap between the poles, round the lashing turns, and pull them tight. This draws the turns together.' },
            { title: 'Finish with a clove hitch', body: 'Tie a clove hitch on the other pole, tuck the tail, and open the poles gently into an A-frame.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Opening the legs', text: 'Open the poles slowly. The loose lashing turns let the poles swing, and the frapping prevents the lashing from sliding down. Put the feet on firm ground and brace or tie them so they cannot slide apart.' },
      ],
    },
    {
      id: 'why',
      title: 'Why the turns are loose',
      blocks: [
        { t: 'p', text: 'In a square or diagonal lashing the turns are as tight as you can pull them, because the poles must not move. A shear lashing is the opposite: the poles **have to move**, because they hinge open into a V. Tight turns would lock the poles parallel and the frame could not open. So the lashing turns are kept slack enough for the poles to pivot, and the frapping turns are the part that tightens the lashing as a whole.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Sheers', body: 'Two poles lashed near the top and opened into an A-frame, used to raise or lower a load or as a pivoting support.' },
            { title: 'Bipod', body: 'The same lashing used as the two legs of a support, with a guy line holding it upright.' },
            { title: 'Lengthening a pole', body: 'Two poles lashed with a long overlap, using a shear lashing at each end of the overlap, to make a longer pole.' },
            { title: 'Tripod', body: 'Three poles lashed together at the top with a variation of the shear lashing, then spread into a tripod.' },
          ],
        },
      ],
    },
    {
      id: 'safe',
      title: 'Safety with A-frames',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Bury or brace the feet, or tie them so they cannot spread.',
            'Add guy lines to hold an A-frame upright against sideways pull.',
            'Test a frame with a light load first, and from a distance.',
            'Build under supervision, and keep a clear area around it.',
          ],
          dont: [
            'Do not let anyone stand under or climb on a frame you have not tested.',
            'Do not hang a heavy load from a lashing that is only hand-tight.',
            'Do not use rotten or cracked poles.',
            'Do not use the frame for lifting a person without proper training and equipment.',
          ],
        },
        {
          t: 'checklist',
          items: [
            'The poles are the same length at the lashing, with the butts level.',
            'There are six to eight even turns, loose enough to open.',
            'There are two or three tight frapping turns between the poles.',
            'The clove hitches at each end are tight.',
            'The frame stands and does not slide.',
          ],
        },
      ],
    },
  ],
  sources: [
    'The Scout Association. Pioneering: lashings.',
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday.',
  ],
  related: ['survival/knots-and-lashing/square-lashing', 'survival/knots-and-lashing/diagonal-lashing', 'survival/knots-and-lashing/clove-hitch'],
}

export default guide
