import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most of the adjustments that help a learner with special educational needs help other learners too, and most can be made by any teacher without specialist help. Adaptive teaching means noticing where a learner is stuck and changing the lesson at that point, while keeping the learning goal the same. This guide organises the changes into five levers (presentation, task, response, time and environment), gives scripts and checklists, explains when to use accommodations versus modifications, and warns about three common errors: over-differentiating, separating learners and over-helping.',
  nutshell: [
    'Think of **five levers**: change how it is **presented**, how the **task** is built, how the learner **responds**, how much **time** is allowed, and the **environment**. Keep the goal.',
    '**Ordinarily available provision** is what every teacher offers routinely (clear routines, visuals, chunking, checks). Specialist support is added only after that is in place.',
    'An **accommodation** changes how a learner accesses or shows learning (extra time, read-aloud); a **modification** changes what is expected. Use accommodations first.',
    '**Plan for the edges**, and the middle benefits too: ramps, captions and large print started as accommodations.',
    'Prefer **fading scaffolds** that move the learner toward independence, over permanent help that hides need.',
  ],
  sections: [
    {
      id: 'levers',
      title: 'Five levers',
      lead: 'Where to adjust.',
      blocks: [
        {
          t: 'table',
          head: ['Lever', 'Examples', 'Helps with…'],
          rows: [
            ['Presentation (input)', 'Short chunks of instruction; instructions in writing and spoken; visuals and diagrams; vocabulary lists; larger print; captioned video; models of finished work', 'Dyslexia, language needs, attention, working-memory load, hearing and vision'],
            ['Task (what they do)', 'Break into steps with a checklist; sentence starters; partially completed examples; fewer items of the same type; structured templates; graphic organisers', 'Executive function, writing difficulties, low prior attainment, slow processing'],
            ['Response (how they show it)', 'Speak, draw, type, use a scribe or speech-to-text; choose between formats; oral explanation instead of an essay; multiple choice with fewer options', 'Dysgraphia, dyspraxia, speech and language, motor difficulties, anxiety'],
            ['Time and pacing', 'Extra time; pre-teaching; breaks; due dates split into stages; pre-reading material ahead of class', 'Slow processing, fatigue, anxiety, ADHD, health conditions'],
            ['Environment', 'Seating away from noise and movement; quiet space; clear desk; visual timetable; predictable routines; reduced sensory load; access to a movement break', 'Autism and sensory needs, ADHD, anxiety, hearing'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Start with removing the barrier', text: 'Ask "what in this task is not the point, but is getting in the way?" If the aim is to explain photosynthesis, then handwriting speed and spelling of "chlorophyll" are not the point; speech-to-text, a word bank or a diagram might remove the barrier without lowering the target.' },
      ],
    },
    {
      id: 'daily',
      title: 'A daily toolkit',
      lead: 'Moves for every lesson.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Clear structure', tag: 'predictability', body: 'Show the plan for the lesson on the board; use consistent routines for starting, transitions and ending; warn before changes. Predictability lowers anxiety and frees attention.' },
            { title: 'Chunk and check', tag: 'instruction', body: 'Give one or two instructions at a time, in order, and ask learners to say back what they will do first. Write multi-step instructions down.' },
            { title: 'Show, not just tell', tag: 'visuals', body: 'A model answer, a diagram, a photographed example, a number line, an object. Keep visuals consistent and uncluttered; leave them up while learners work.' },
            { title: 'Vocabulary first', tag: 'language', body: 'Pre-teach and display the five to eight words a lesson needs, with a picture or example, and use them repeatedly.' },
            { title: 'Think time and talk', tag: 'participation', body: 'Silent thinking, then talk to a partner, then share. Gives time to process and rehearse language, and lowers the risk of a public wrong answer.' },
            { title: 'Check understanding of everyone', tag: 'assessment', body: 'Mini-whiteboards or response cards let you see all answers at once and catch misunderstanding early, without singling anyone out.' },
          ],
        },
        {
          t: 'example',
          title: 'Scripts that help',
          lines: [
            { label: 'Instructions', text: '"Three steps. One: read the question and underline the key word. Two: write your answer in a full sentence. Three: check by reading it aloud to your partner. Tell your partner step one."' },
            { label: 'When stuck', text: '"What have you tried? What do you know so far? What is the first thing that is confusing?" Then a prompt, not the answer: "Look at the example on the board. What do they do first?"' },
            { label: 'Normalising help', text: '"Everyone gets stuck on this part. Here are three things you can do when you are stuck: look at the model, ask your partner, or put your card on the corner of the desk."' },
            { label: 'Private check', text: '(Crouch beside a learner) "Show me where you are. Tell me what you will do next." Check quietly rather than asking publicly if they understand.' },
          ],
        },
      ],
    },
    {
      id: 'acc',
      title: 'Accommodation, modification and when to use which',
      lead: 'Same standard, different access; or a different standard.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Accommodation', 'Modification'],
          rows: [
            ['Changes', 'How the learner accesses or demonstrates learning', 'What the learner is expected to learn or show'],
            ['Standard', 'The same as for peers', 'Different from peers (reduced or altered)'],
            ['Examples', 'Extra time; read-aloud; large print; scribe; breaks; speech-to-text; quiet room', 'Fewer learning objectives; a simplified curriculum; an adjusted grading standard; an alternative assessment of different content'],
            ['Use when', 'The difficulty is with access, not with understanding the content', 'The learner cannot reach the standard even with full access, for a significant and persistent reason, and this is agreed in a plan'],
            ['Risk', 'Over-reliance if not faded or reviewed', 'Lower expectations; difficulty returning to the standard curriculum; limits future options'],
          ],
          caption: 'Use accommodations first and modify only with a clear reason, agreed with the learner and family, and reviewed often.',
        },
        {
          t: 'dodont',
          do: ['Plan the adaptations before the lesson, not during.', 'Let the learner choose from a menu where possible; they know what helps.', 'Review whether an adaptation is still needed; fade it when it is not.', 'Make adaptations ordinary: available to anyone who asks.'],
          dont: ['Single learners out with different-looking resources in front of peers.', 'Give the answer, or complete the task for the learner.', 'Create a separate worksheet for every learner (unsustainable and divisive).', 'Assume the same adaptation will suit everyone with the same label.'],
        },
      ],
    },
    {
      id: 'planning',
      title: 'Planning a lesson with the levers',
      lead: 'A quick routine.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Write the learning goal', body: 'A single sentence of what learners will know or be able to do by the end, independent of the format.' },
            { title: 'Predict the barriers', body: 'For each activity, ask what could stop a learner reaching the goal for a reason unrelated to the goal: reading demand, writing demand, working-memory load, noise, time, anxiety, vocabulary.' },
            { title: 'Choose levers', body: 'For each barrier, pick the lightest change (a visual, a frame, a word bank, a choice of response) that removes it for the whole class if possible.' },
            { title: 'Prepare one or two extras', body: 'For the learners you know, add a specific adjustment (pre-teaching, a checklist, a quiet corner) agreed in their plans.' },
            { title: 'Watch and adjust', body: 'During the lesson, notice who is stuck, check and adapt on the spot; after, note what to change next time.' },
          ],
        },
        { t: 'checklist', items: ['Instructions both spoken and written, in steps?', 'Key vocabulary displayed and taught?', 'A model or example available?', 'More than one way to respond?', 'Time allowances and breaks planned?', 'A plan for learners who finish early and for those who need more time?', 'A way for learners to ask for help without being embarrassed?'] },
      ],
    },
  ],
  sources: [
    'Department for Education (2015). *SEND Code of Practice*, chapter 6; and Teaching Schools Council (2016), *Developing Great Teaching*.',
    'Rose, D. H. & Meyer, A. (2002). *Teaching Every Student in the Digital Age: Universal Design for Learning*. ASCD.',
    'Sharples, J. (2021). *Special Educational Needs in Mainstream Schools*. EEF guidance report.',
    'Westwood, P. (2015). *Commonsense Methods for Children with Special Educational Needs* (7th ed.). Routledge.',
    'CAST (2018). *Universal Design for Learning Guidelines version 2.2* (udlguidelines.cast.org).',
  ],
  related: ['teaching/differentiation/udl', 'teaching/special-education/foundations/accommodations', 'teaching/differentiation/scaffolding', 'teaching/special-education/strategies/visual-supports', 'teaching/inclusive-practice/inclusive-assessment'],
}

export default guide
