import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Groups are not static. A new group behaves differently from one that has worked together for a week, and a group struggling through a hard decision looks very different from one generating ideas. Two models help facilitators read where a group is and what it needs: Tuckman’s stages of development and Kaner’s diamond of participation.',
  nutshell: [
    '**Tuckman (1965, 1977)**: forming, storming, norming, performing, adjourning.',
    'Storming is normal and often necessary; groups that skip it may only be avoiding conflict.',
    '**Kaner’s diamond**: discussions open out (divergent zone), get messy and uncomfortable (the **groan zone**), then close down (convergent zone).',
    'The facilitator’s job changes with the stage: more structure early, more challenge in the middle, more autonomy later.',
  ],
  sections: [
    {
      id: 'tuckman',
      title: 'Tuckman’s stages',
      blocks: [
        { t: 'steps', items: [
          { title: 'Forming', body: 'Polite, uncertain, dependent on the leader. People ask: Do I belong? What is expected? **Facilitator**: give clear purpose and structure, low-risk introductions, agree norms.' },
          { title: 'Storming', body: 'Disagreement about roles, goals and methods; challenges to the leader; cliques. **Facilitator**: name it as normal, surface the real issues, teach conflict tools, keep safety.' },
          { title: 'Norming', body: 'Agreed ways of working, growing trust and cohesion, roles settle. **Facilitator**: share more control, help the group make its norms explicit.' },
          { title: 'Performing', body: 'Interdependent, self-correcting, focused on the task. **Facilitator**: step back, offer challenge, protect from outside interference.' },
          { title: 'Adjourning', body: 'Added in 1977 with Jensen: the group ends; people may feel loss. **Facilitator**: mark the ending, celebrate, transfer learning, say goodbye properly.' },
        ] },
        { t: 'callout', tone: 'note', title: 'A model, not a law', text: 'Tuckman built the model from a review of studies of therapy and training groups, not from a controlled test. Real groups loop back (a new member or a crisis can send a performing group back to storming) and stages overlap. Use it to notice and name, not to predict.' },
      ],
    },
    {
      id: 'diamond',
      title: 'The diamond of participation and the groan zone',
      blocks: [
        { t: 'flow', title: 'Kaner’s diamond, left to right', nodes: [
          { label: 'Business as usual', sub: 'familiar opinions', tone: 'data' },
          { label: 'Divergent zone', sub: 'many ideas, suspend judgement', tone: 'process' },
          { label: 'Groan zone', sub: 'confusion, frustration, misunderstanding', tone: 'human' },
          { label: 'Convergent zone', sub: 'evaluate, refine, decide', tone: 'model' },
          { label: 'Closure', sub: 'decision and commitment', tone: 'output' },
        ] },
        { t: 'p', text: 'When a group opens up a question honestly, people discover that they see it differently. That discovery is uncomfortable: the **groan zone**. Inexperienced facilitators (and leaders) often panic here and force an early decision, which produces a weak decision that does not stick. Experienced facilitators expect the groan zone and help the group build **shared understanding** before converging.' },
        { t: 'table', head: ['Zone', 'Tools that help'], rows: [
          ['Divergent', 'Brainstorming rules, brainwriting, 1-2-4-All, round-robin, “yes, and”'],
          ['Groan', 'Paraphrasing, asking each side to state the other’s view, listing assumptions, mapping interests, a break'],
          ['Convergent', 'Criteria, dot voting, gradients of agreement, prioritisation matrices'],
          ['Closure', 'Decision rule, written decision, owners and dates, check for consent'],
        ] },
      ],
    },
    {
      id: 'reading',
      title: 'Reading the group',
      blocks: [
        { t: 'table', head: ['Signal', 'Probable stage', 'Try'], rows: [
          ['Everyone looks at you before speaking', 'Forming', 'Pairs before plenary; give roles'],
          ['Side conversations, eye-rolls, “this is pointless”', 'Storming', 'Name it, ask what the group needs, revisit norms'],
          ['People finish each other’s sentences; jokes are inclusive', 'Norming or performing', 'Hand over more decisions'],
          ['Ideas are repeated in circles, energy drops', 'Groan zone', 'Summarise the views so far, switch to a structured method'],
          ['Quiet at the end, lingering, photos', 'Adjourning', 'A closing ritual; capture learning'],
        ] },
      ],
    },
  ],
  sources: [
    'Tuckman, B. W. (1965). Developmental sequence in small groups. Psychological Bulletin, 63(6), 384–399.',
    'Tuckman, B. W., & Jensen, M. A. C. (1977). Stages of small-group development revisited. Group & Organization Studies, 2(4), 419–427.',
    'Kaner, S. et al. (2014). Facilitator’s Guide to Participatory Decision-Making (3rd ed.). Jossey-Bass.',
  ],
  related: ['facilitation/foundations/psychological-safety', 'facilitation/unity/conflict', 'facilitation/frameworks/decision-making'],
}

export default guide
