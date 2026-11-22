import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The biggest criticism of camps, retreats and team-building days is that the learning stays there. People feel transformed on Friday and act exactly the same on Monday. Transfer of learning is the deliberate work of carrying lessons from the programme into ordinary life, and it has to be designed in.',
  nutshell: [
    '**Near transfer** (similar situations) is easier than **far transfer** (very different ones).',
    'Transfer improves with **metaphors that map** to real life, **specific commitments**, **practice in realistic contexts** and **follow-up**.',
    'Plan transfer before, during and after the programme.',
  ],
  sections: [
    {
      id: 'kinds',
      title: 'Kinds of transfer',
      blocks: [
        { t: 'table', head: ['Kind', 'Example'], rows: [
          ['Specific', 'Learning to tie a bowline at camp and using it on a boat'],
          ['Non-specific', 'Learning to plan before acting in a group challenge and planning projects better at school'],
          ['Metaphoric', 'A trust fall that becomes a reference point for trusting teammates (“remember the fall”)'],
          ['Negative', 'Learning that the instructor will always rescue you, and expecting the same at school'],
        ] },
      ],
    },
    {
      id: 'techniques',
      title: 'Techniques that help transfer',
      blocks: [
        { t: 'steps', items: [
          { title: 'Before: frontload', body: 'Ask participants what they want to get better at back home; design activities that mirror those situations (isomorphic framing).' },
          { title: 'During: bridge questions', body: '“Where else in your life does this happen?” “Who at school is like the person who was left holding the rope?”' },
          { title: 'During: name it', body: 'Give the lesson a short, memorable name the group can use later: “the plank moment”, “check the knot”.' },
          { title: 'End: specific commitments', body: 'Each person writes one behaviour, when and where they will do it, and who will notice. Vague commitments (“be a better team player”) rarely transfer.' },
          { title: 'End: anchors', body: 'A physical object, photo or phrase to remind them.' },
          { title: 'After: follow-up', body: 'A letter to self posted a month later, a reunion, a teacher check-in, a group chat challenge.' },
        ] },
        { t: 'example', title: 'Implementation intention', lines: [
          { label: 'Weak', text: '“I will speak up more in groups.”' },
          { label: 'Strong', text: '“In the first group project meeting next week, when the topic is decided, I will say at least one idea before the end of the meeting. My friend Mei will check with me afterwards.”' },
        ] },
        { t: 'callout', tone: 'note', title: 'Why “if–then” plans work', text: 'Gollwitzer’s research on implementation intentions (“If situation X, then I will do Y”) found across 94 studies a medium-to-large effect on goal attainment (d ≈ 0.65), because the plan links a specific cue to a specific action.' },
      ],
    },
    {
      id: 'barriers',
      title: 'Barriers back home',
      blocks: [
        { t: 'list', items: [
          'The home environment does not support the new behaviour (a class that laughs at speaking up).',
          'The person returns to old roles and expectations.',
          'Nobody back home knows what was learned.',
          'The lesson was too tied to the context (“on the ropes course”).',
        ] },
        { t: 'p', text: 'Counter these by involving teachers or managers in the debrief or a closing presentation, by practising the transfer situation in the programme itself, and by forming accountability pairs who see each other daily.' },
      ],
    },
  ],
  sources: [
    'Gass, M. A. (1985). Programming the transfer of learning in adventure education. Journal of Experiential Education, 8(3), 18–24.',
    'Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis. Advances in Experimental Social Psychology, 38, 69–119.',
    'Perkins, D. N., & Salomon, G. (1992). Transfer of learning. International Encyclopedia of Education.',
  ],
  related: ['facilitation/frameworks/experiential-cycle', 'facilitation/growth/measuring-growth', 'habits/focus'],
}

export default guide
