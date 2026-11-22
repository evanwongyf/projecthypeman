import type { ArchiveNode } from '../topics'

// Survival skills: the practical craft that keeps a person safe, warm and useful outdoors.
// The first shelf is knots and lashing, with step-by-step rope diagrams for each knot.

export const SURVIVAL: ArchiveNode = {
  slug: 'survival',
  title: 'Survival skills',
  blurb: 'Practical outdoor craft, starting with knots and lashing: the overhand, clove hitch, reef knot, bowline and figure of eight, and the lashings that turn poles into shelters and frames, each as a step-by-step diagram.',
  glyph: '⛺',
  color: 'color-mix(in srgb, var(--mint) 45%, var(--mustard))',
  tags: ['survival', 'bushcraft', 'outdoors', 'scouts', 'camping', 'knots', 'rope', 'lashing', 'shelter', 'ncc', 'cadets'],
  children: [
    {
      slug: 'start-here',
      title: 'Start here',
      blurb: 'What the survival shelf covers, the safety rules that matter, and a route from your first knot to a working lashing.',
      minutes: 5,
      glyph: '★',
      tags: ['beginner', 'overview', 'roadmap', 'safety'],
    },
    {
      slug: 'knots-and-lashing',
      title: 'Knots and lashing',
      blurb: 'Learn the knots by their jobs: stop a rope end, tie to a post, join two ropes, make a loop that will not slip, then bind poles into frames. Every knot has a stepped, animated diagram.',
      glyph: '➰',
      color: 'color-mix(in srgb, var(--mustard) 60%, var(--orange))',
      tags: ['knots', 'lashing', 'rope', 'hitch', 'bend', 'bowline', 'scouts'],
      children: [
        { slug: 'rope-basics', title: 'Rope, terms and safety', blurb: 'Working end, standing part, bight, turn and round turn; knot, hitch, bend and lashing; how rope is made, how a knot weakens it, and how to look after it.', minutes: 10, tags: ['rope', 'terms', 'working end', 'standing part', 'bight', 'knot strength', 'rope care', 'kernmantle'] },
        { slug: 'overhand-knot', title: 'Overhand knot', blurb: 'The simplest knot and the root of many others: a stopper that keeps a rope end from running out, why it jams, and how to tie it on a doubled rope.', minutes: 8, tags: ['overhand', 'stopper', 'simple knot', 'trefoil', 'thumb knot'] },
        { slug: 'clove-hitch', title: 'Clove hitch', blurb: 'The quick way to tie a rope to a pole or post, how to recognise a correct one, why it can slip, and how it starts and finishes a lashing.', minutes: 9, tags: ['clove hitch', 'hitch', 'post', 'pole', 'tie off', 'lashing'] },
        { slug: 'reef-knot', title: 'Reef knot', blurb: 'The square knot: right over left, then left over right. What it is good for, how to tell it from a granny knot, and why you should never trust it to join two load-bearing ropes.', minutes: 8, tags: ['reef knot', 'square knot', 'granny knot', 'first aid', 'sling', 'binding'] },
        { slug: 'bowline', title: 'Bowline', blurb: 'The rabbit comes out of the hole: a fixed loop that does not slip and unties easily after a load, with its limits and safer variations.', minutes: 10, tags: ['bowline', 'loop', 'rescue', 'rabbit', 'yosemite', 'double bowline'] },
        { slug: 'figure-of-8', title: 'Figure of eight', blurb: 'The strongest, cleanest stopper, the follow-through loop used in climbing, how to dress it and check it, and how it differs from the overhand.', minutes: 9, tags: ['figure eight', 'figure of eight', 'stopper', 'follow through', 'climbing', 'tie-in'] },
        { slug: 'square-lashing', title: 'Square lashing', blurb: 'Binding two poles at right angles: a clove hitch, three tight turns, frapping turns and a finishing hitch, for gates, frames and platforms.', minutes: 10, tags: ['square lashing', 'lashing', 'frame', 'gadget', 'pioneering', 'frapping'] },
        { slug: 'diagonal-lashing', title: 'Diagonal lashing', blurb: 'Binding two poles that cross at an angle so they cannot spring apart: braces, trestles and the crossing of a tripod.', minutes: 9, tags: ['diagonal lashing', 'lashing', 'brace', 'trestle', 'pioneering'] },
        { slug: 'shear-lashing', title: 'Shear lashing', blurb: 'Binding two poles side by side so they open into an A-frame, or lengthening a pole, with frapping turns that pull the legs together.', minutes: 9, tags: ['shear lashing', 'lashing', 'a-frame', 'sheers', 'bipod', 'pioneering'] },
        { slug: 'choosing-a-knot', title: 'Choosing a knot, and practising', blurb: 'Every knot on the shelf compared by job, strength and failure mode, a decision guide for picking one in the field, and a practice routine that makes them stick.', minutes: 9, tags: ['comparison', 'which knot', 'practice', 'knot strength', 'decision guide'] },
      ],
    },
  ],
}
