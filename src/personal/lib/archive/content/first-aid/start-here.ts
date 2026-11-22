import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'First aid is what happens in the gap between something going wrong and professional help arriving, sometimes seconds, sometimes many minutes. This shelf covers the decisions and techniques that fill that gap: checking a scene, CPR, choking, bleeding, burns, fractures, shock, heat and cold emergencies, severe allergic reactions, and a full animated reference for bandaging. Read it to understand the shape of each emergency and rehearse the decisions in your head, then, if you can, take an in-person course, because muscle memory under real pressure is not something a page can give you.',
  nutshell: [
    'The scene comes first, every time: check it is safe for **you** before you approach, or there are now two people who need help instead of one.',
    'First aid buys time. It is not a substitute for emergency services, call for help early, often before you start treating.',
    'Flowcharts throughout this shelf mirror the actual branching decisions you would make in the moment: who, what, how fast.',
    'The bandaging reference is animated and step-by-step on purpose: technique is easier to learn by watching a sequence than by reading a paragraph.',
    '**This is education, not training or medical advice.** Reading this shelf is not the same as being certified, and it cannot replace calling emergency services in a real emergency.',
  ],
  sections: [
    {
      id: 'shape',
      title: 'The shape of this shelf',
      blocks: [
        {
          t: 'table',
          head: ['Section', 'What it covers'],
          rows: [
            ['Primary survey', 'The fixed order for checking someone over: danger, response, airway, breathing, circulation'],
            ['Calling for help', 'What a dispatcher needs and why staying on the line matters'],
            ['Recovery position', 'Turning an unresponsive but breathing person safely onto their side'],
            ['Choking', 'Back blows, abdominal thrusts, and the different technique for infants'],
            ['CPR and the AED', 'Compressions, rescue breaths, and how a defibrillator actually works'],
            ['Bleeding and wounds', 'Judging severity, direct pressure, and the pressure-dressing technique'],
            ['Burns', 'Cool and cover, judging depth and size'],
            ['Fractures, sprains and splinting', 'Telling them apart, RICE, and the sling and joint-wrap techniques'],
            ['Bandaging techniques', 'All six techniques animated together, as a standalone reference'],
            ['Shock and fainting', 'What medical shock is, and telling a faint from something worse'],
            ['Heat and cold emergencies', 'Heat exhaustion vs. heat stroke, hypothermia vs. frostbite'],
            ['Poisoning and allergic reactions', 'Anaphylaxis, the epinephrine auto-injector, and suspected poisoning'],
            ['Building a first aid kit', 'What belongs in one, browsable by category'],
          ],
        },
      ],
    },
    {
      id: 'safety',
      title: 'The decision before every other decision',
      blocks: [
        {
          t: 'diagram',
          title: 'Before you do anything else',
          nodes: [
            { id: 'see', label: 'You see someone who needs help', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 185 },
            { id: 'danger', label: 'Is there ongoing danger, traffic, fire, electricity, structural collapse, a hostile person?', shape: 'diamond', tone: 'pink', col: 1, row: 1, w: 195 },
            { id: 'safe', label: 'Make the scene safe first, or wait for someone who can', shape: 'rect', tone: 'orange', col: 0, row: 2, w: 175 },
            { id: 'approach', label: 'Approach and begin the primary survey', shape: 'rect', tone: 'mint', col: 2, row: 2, w: 170 },
          ],
          edges: [
            { from: 'see', to: 'danger' },
            { from: 'danger', to: 'safe', label: 'yes', tone: 'orange' },
            { from: 'danger', to: 'approach', label: 'no', tone: 'mint' },
            { from: 'safe', to: 'approach' },
          ],
          caption: 'A helper who becomes a second casualty helps no one. This step takes seconds and is never worth skipping.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Reading is not training',
          text: 'Techniques like CPR and choking relief genuinely need hands-on practice to do well under pressure, a manikin does not flinch, but a real person’s chest feels different from what you imagine, and a trained instructor will correct mistakes you cannot see in yourself. A good first aid or CPR course, often just a few hours, is one of the highest-value things most adults can do with an afternoon.',
        },
      ],
    },
  ],
}

export default guide
