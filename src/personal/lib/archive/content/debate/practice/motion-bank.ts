import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Motions to practise on, across all five families, each with the first thing a good team notices in prep and three lines of case for both sides. Use them for timed prep drills rather than for memorising cases: the value is in the reading of the motion, not in the arguments.',
  nutshell: [
    'Prep against the motion **type** first; the burdens follow from the wording.',
    'Three lines of case is a sketch, not a speech. Each still needs a mechanism, an impact and a comparison.',
    'Practise both sides of every motion. Teams who only prep their own side never find their weak link.',
    'Work in the tool below, under a timer, rather than reading the sketches as answers.',
  ],
  sections: [
    {
      id: 'worked',
      title: 'Worked motions',
      blocks: [
        { t: 'p', text: 'Five motions, one from each family. Switch to "Worked motions", set yourself seven minutes, write your own case, and only then read the sketch.' },
        { t: 'debate-lab', viz: 'motion' },
      ],
    },
    {
      id: 'policy',
      title: 'Policy motions',
      blocks: [
        {
          t: 'list',
          items: [
            'This House would ban political advertising on social media.',
            'This House would make voting compulsory.',
            'This House would abolish selective state schools.',
            'This House would replace prison sentences under two years with community orders.',
            'This House would require all publicly funded research to be published open access.',
            'This House would introduce a four-day working week by statute.',
            'This House would allow cities to charge drivers for entering the centre.',
            'This House would ban the use of facial recognition by police forces.',
            'This House would give every citizen an unconditional basic income.',
            'This House would require social media platforms to verify the age of all users.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Drill for these', text: 'Spend the first two minutes writing only the model: actor, mechanism, funding, enforcement, timeline, exemptions. Teams that can do this in two minutes win the practical half of policy debates almost by default.' },
      ],
    },
    {
      id: 'value',
      title: 'Value motions',
      blocks: [
        {
          t: 'list',
          items: [
            'This House believes that social media has done more harm than good.',
            'This House believes that the pursuit of economic growth is no longer a worthwhile political goal.',
            'This House believes that parents should not post images of their children online.',
            'This House believes that universities should not accept donations from fossil fuel companies.',
            'This House believes that anonymity online does more for the powerful than for the vulnerable.',
            'This House believes that art should be judged independently of its creator.',
            'This House believes that competitive sport does more harm than good to children.',
            'This House believes that humanity is right to pursue artificial general intelligence.',
          ],
        },
        { t: 'p', text: 'The drill: write the standard of judgement first, in one sentence, before any argument. If both sides do this, the debate is about the standard — which is the debate the motion actually sets.' },
      ],
    },
    {
      id: 'other',
      title: 'Fact, actor and counterfactual motions',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Fact and prediction', tag: 'Mechanisms, not values', body: 'AI will widen inequality · Remote work will reduce regional inequality · Democracies are becoming less capable of long-term planning · Nuclear power will supply most new low-carbon electricity by 2050.' },
            { title: 'Actor', tag: 'Interests, not ethics', body: 'As a teachers’ union, accept performance-related pay · As a developing state, refuse aid tied to governance reform · As a newspaper, stop reporting opinion polls · As a university, abolish tenure.' },
            { title: 'Counterfactual and regret', tag: 'Specify the other world', body: 'Regrets the gig economy · Regrets the rise of the celebrity activist · Would rather live in a world without social media · Regrets the professionalisation of politics.' },
            { title: 'Principle', tag: 'Rights and standing', body: 'States owe no duty to future generations · Juries should be abolished · Freedom of expression should protect the publication of leaked documents.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The usual trap in each', text: 'Fact motions debated as value motions. Actor motions debated as general ethics. Counterfactual motions debated as policy, when nobody in the room can act. Each error is visible to a judge within thirty seconds.' },
      ],
    },
    {
      id: 'using',
      title: 'How to use a motion bank',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Pick one blind', body: 'Do not choose a motion you have prepared. The skill is reading an unfamiliar one.' },
            { title: 'Seven minutes, both sides', body: 'Burdens, comparison line, three arguments per side, in note form only.' },
            { title: 'Write the clash', body: 'One sentence: what both sides will inevitably fight about.' },
            { title: 'Write the weighing', body: 'One sentence per side: why they win if both prove their case.' },
            { title: 'Speak one argument aloud', body: 'Three minutes, full five parts. This is the part people skip and it is the part that trains.' },
          ],
        },
        { t: 'p', text: 'Full drill set in [drills](@debate/practice/drills); the burden analysis for each family is in [motion types](@debate/systems/motions-and-burdens).' },
      ],
    },
  ],
  related: ['debate/systems/motions-and-burdens', 'debate/practice/drills', 'debate/structure/case-building'],
}

export default guide
