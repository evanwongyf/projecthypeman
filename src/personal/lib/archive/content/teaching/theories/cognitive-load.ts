import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cognitive load theory, developed by John Sweller from the late 1980s, starts from one fact: working memory can only handle a few new things at a time. Good teaching spends that tiny capacity on what matters and wastes none of it.',
  nutshell: [
    'Working memory is small for new information and has no known limit for well-learned information.',
    '**Intrinsic load** comes from the material itself. **Extraneous load** comes from how it is presented, and is waste.',
    'Cut extraneous load: no split attention, no redundant text, no decoration that competes for attention.',
    'Manage intrinsic load: break complex material into parts, and teach the parts first.',
    'Beginners learn best from **worked examples**; as expertise grows, the same support starts to get in the way.',
  ],
  sections: [
    {
      id: 'architecture',
      title: 'The architecture behind it',
      lead: 'A small workspace and a huge library.',
      blocks: [
        {
          t: 'p',
          text: 'The theory builds on the memory model described in [cognitivism](@teaching/theories/cognitivism). New information has to pass through **working memory**, which can hold only a few elements and loses them within seconds. **Long-term memory** holds schemas of any size, and a schema can be brought into working memory as a single element.',
        },
        {
          t: 'p',
          text: 'This explains the core difference between novices and experts. An expert reading "2x + 3 = 11" sees one familiar thing. A beginner sees six separate symbols, each of which must be held and related to the others. The task is the same; the load is not.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Element interactivity',
          text: 'Load depends less on how many things there are to learn than on how much they **interact**. Twenty vocabulary words can be learned one at a time. Balancing a chemical equation requires holding many interacting elements at once. High element interactivity is what makes some material hard.',
        },
      ],
    },
    {
      id: 'types',
      title: 'Types of load',
      lead: 'What is essential and what is waste.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: 'essential', title: 'Intrinsic load', body: 'The inherent complexity of the material for this learner. It depends on element interactivity and on what the learner already knows. You cannot remove it without changing what is learned, but you can **sequence** it.' },
            { tag: 'waste', title: 'Extraneous load', body: 'Load created by poor design: hunting between a diagram and its labels, reading text that repeats the narration, decoding a confusing instruction. It uses capacity and teaches nothing. **Remove it.**' },
            { tag: 'productive', title: 'Germane load', body: 'Originally, the effort spent building schemas. Later versions of the theory treat it as the working memory resources devoted to intrinsic load rather than a separate type. The practical point stands: free up capacity so it can go to learning.' },
          ],
        },
        {
          t: 'p',
          text: 'The goal is simple to state: **minimise extraneous load, manage intrinsic load**, so that the learner’s limited capacity goes into understanding the material.',
        },
      ],
    },
    {
      id: 'effects',
      title: 'The key effects',
      lead: 'Findings you can apply to any lesson or resource.',
      blocks: [
        {
          t: 'table',
          head: ['Effect', 'What it says', 'What to do'],
          rows: [
            ['Worked example', 'Novices learn more from studying worked solutions than from solving the same problems unaided.', 'Show complete worked examples before asking for independent problem solving. See [worked examples](@teaching/techniques/instruction/worked-examples).'],
            ['Completion problem', 'Partly worked examples bridge the gap between studying and solving.', 'Give examples with the last steps missing, then more steps missing.'],
            ['Split attention', 'Having to mentally combine separated sources (a diagram and a separate key) wastes capacity.', 'Put labels on the diagram, next to what they describe.'],
            ['Redundancy', 'Extra information that repeats or is not needed adds load.', 'Do not read out slides word for word. Drop decorative images and repeated text.'],
            ['Modality', 'Words spoken with a diagram can work better than written words with a diagram, because they use separate channels.', 'Talk through a diagram instead of adding paragraphs to it.'],
            ['Transient information', 'Spoken or animated information vanishes, so long passages overload memory.', 'Keep narrated chunks short; leave key information visible.'],
            ['Expertise reversal', 'Support that helps novices can hinder experts, who must process redundant guidance.', 'Fade worked examples and scaffolds as learners become more expert.'],
            ['Goal-free', 'Open goals ("find everything you can") can reduce load compared to a specific target that invites means-ends search.', 'For novices, try "calculate as many angles as you can" instead of "find angle x".'],
          ],
        },
      ],
    },
    {
      id: 'design',
      title: 'Designing a low-load lesson',
      lead: 'A checklist to run over your materials.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'New content is broken into small steps, each practised before the next.',
            'Prerequisite knowledge is checked or retaught first.',
            'Key vocabulary is taught before it is needed in a complex task.',
            'Diagrams carry their own labels; nothing needs to be cross-referenced.',
            'Slides have few words; I explain them aloud instead of reading them.',
            'Decorative images, animations and sound effects that add nothing are removed.',
            'Instructions are short, written down and visible while learners work.',
            'Beginners see worked examples before solving problems alone.',
            'Support is faded as learners become fluent.',
            'Learners are not asked to learn a new tool (an app, a format) at the same time as new content.',
          ],
        },
        {
          t: 'example',
          title: 'Fixing a slide',
          lines: [
            { label: 'Before', text: 'A labelled diagram of the heart on the left, a numbered key on the right, a paragraph underneath, a clip-art doctor in the corner, and the teacher reading the paragraph aloud.' },
            { label: 'After', text: 'The same diagram with labels placed directly on each chamber, no paragraph, no clip art. The teacher points and explains aloud, one chamber at a time, revealing the arrows of blood flow step by step.' },
          ],
        },
      ],
    },
    {
      id: 'limits',
      title: 'Limits and debates',
      lead: 'Where the theory is strong and where it is argued over.',
      blocks: [
        {
          t: 'list',
          items: [
            'Load is hard to measure directly. Many studies rely on learners rating their own mental effort.',
            'Most evidence comes from well-structured domains like maths, science and technical skills. It applies less clearly to open-ended creative work.',
            'Critics argue the theory can be read as a case against all struggle. Supporters reply that productive difficulty (like [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice)) is fine once the basics are in place; the problem is overload for novices.',
            'The expertise reversal effect is a reminder that no design is right for everyone: what is waste for one learner is essential support for another.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science, 12*(2), 257–285.',
    'Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. *Educational Psychology Review, 31*, 261–292.',
    'Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. *Educational Psychologist, 38*(1), 23–31.',
    'Mayer, R. E. (2009). *Multimedia learning* (2nd ed.). Cambridge University Press.',
    'Lovell, O. (2020). *Sweller’s cognitive load theory in action*. John Catt.',
  ],
  related: ['teaching/theories/cognitivism', 'teaching/techniques/instruction/worked-examples', 'teaching/techniques/learning-strategies/dual-coding', 'teaching/techniques/instruction/rosenshine'],
}

export default guide
