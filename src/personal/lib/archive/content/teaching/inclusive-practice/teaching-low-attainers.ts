import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Teaching learners with low prior attainment is not teaching less. It is teaching the same ambitious content with more structure, smaller steps, more practice and more checking. The research that explains why is the same research that explains good teaching for everyone, and its effect is largest for the learners with the least prior knowledge. This guide covers explicit instruction, cognitive load, worked examples, retrieval, feedback and expectations, with a worked planning example, and warns against the common traps of simplified, repetitive and low-challenge work.',
  nutshell: [
    '**Same goals, different route.** Lower the barriers (language load, step size, working-memory demand), not the expectations of what the learner can come to understand.',
    '**Explicit instruction** works best for novices: model, guided practice, independent practice, with frequent checks (Rosenshine; Kirschner, Sweller and Clark, 2006).',
    'Working memory holds only about **4 chunks**; learners with less prior knowledge hit that limit sooner, so reduce **extraneous load** and break content into small steps.',
    '**Worked examples**, **retrieval practice** and **success rate** (about 80% on practice) all matter more for low attainers; guessing and discovery are costly for those who lack the base.',
    'Avoid the **"easy work" trap**: a diet of low-level tasks guarantees the gap stays. Use scaffolds that fade.',
  ],
  sections: [
    {
      id: 'principle',
      title: 'High challenge, high support',
      lead: 'The two are not opposites.',
      blocks: [
        { t: 'p', text: 'A learner who is behind needs *more* access to rich content, not less. What changes is how the content is made accessible. Think of challenge and support as two separate dials: challenge is the cognitive demand of the content; support is the scaffolding that makes it reachable. The good zone is **high challenge with high support** (the "stretch" zone). High challenge with low support causes frustration and failure; low challenge with high support causes comfortable stagnation; low on both causes boredom and disengagement.' },
        {
          t: 'table',
          head: ['', 'Low support', 'High support'],
          rows: [
            ['**High challenge**', 'Panic zone: frustration, copying, giving up', '**Stretch zone: learning happens**'],
            ['**Low challenge**', 'Boredom zone: no learning', 'Comfort zone: busy but not progressing'],
          ],
          caption: 'Adapted from the ideas of Vygotsky’s zone of proximal development and of Mariani’s challenge-and-support grid.',
        },
      ],
    },
    {
      id: 'explicit',
      title: 'Explicit instruction in small steps',
      lead: 'The core of the evidence base.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Review prior learning', body: 'A few minutes of retrieval of the last lesson and the prerequisites, because gaps are most likely there.' },
            { title: 'Present in small steps', body: 'One new idea at a time, with the language kept short and the vocabulary pre-taught. Stop after each step to check.' },
            { title: 'Model with thinking aloud', body: 'Show the steps and say why: "I check the units first because…" Experts skip steps that novices cannot see.' },
            { title: 'Guided practice', body: 'Do an example together, then a similar one with some blanks; ask many questions and require all pupils to respond (mini-whiteboards).' },
            { title: 'Check understanding', body: 'Do not ask "does everyone understand?" (they say yes). Ask a question whose wrong answers diagnose the confusion.' },
            { title: 'Independent practice with high success', body: 'Aim for about 80% accuracy on the first independent practice, so that learners practise doing it right, not doing it wrong.' },
            { title: 'Revisit', body: 'Weekly and monthly review of previous content; low attainers forget faster without it.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`R(t)=e^{-t/S},\qquad R_{\text{after }n\text{ reviews}}\ \text{with}\ S\ \text{increasing}`,
          caption: 'The forgetting curve: retention R falls exponentially with time t, at a rate set by the memory strength S; each successful retrieval increases S.',
          where: [{ sym: 'R(t)', def: 'the fraction retained after time t' }, { sym: 'S', def: 'memory strength (days): a larger S means slower forgetting' }],
          syntax: [
            { sym: 'e^{-t/S}', say: 'exponential decay. Effect: most forgetting happens early and slows later. Why: each moment a constant share of what is left is lost.' },
            { sym: 'S\\uparrow', say: 'each retrieval strengthens the trace. Effect: spaced retrieval flattens the curve. Why: effortful recall is what builds durable memory (the testing effect).' },
          ],
          worked: {
            title: 'Weak and strong memory strength',
            steps: ['With S = 2 days, retention after 7 days: \\(e^{-3.5}=3\\%\\).', 'After two spaced retrievals S = 10 days: retention after 7 days: \\(e^{-0.7}=50\\%\\).', 'The learner who retrieved the content twice keeps about 17 times as much.'],
            answer: 'Because learners who are behind often have weaker prior knowledge to attach new ideas to, the early, frequent, low-stakes retrieval quizzes help them most.',
          },
        },
      ],
    },
    {
      id: 'load',
      title: 'Working memory and cognitive load',
      lead: 'The reason small steps work.',
      blocks: [
        { t: 'p', text: 'Working memory is small (about four items for new information) and short-lived (seconds). Experts overcome this by having large stored chunks in long-term memory: a chess master sees a position, a skilled reader sees a word, not letters. A learner without those chunks is overloaded by tasks that look simple to a teacher. Cognitive load theory distinguishes **intrinsic load** (the difficulty of the content itself), **extraneous load** (difficulty added by poor presentation, which can be removed) and **germane load** (effort that builds schemas). The goal is to cut extraneous load and manage intrinsic load by sequencing.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Worked examples', tag: 'novices', body: 'Show fully solved problems before asking learners to solve alone, then fade the steps ("completion problems"). For novices this beats unguided problem solving, and the advantage reverses as expertise grows (the expertise-reversal effect).' },
            { title: 'Split attention', tag: 'layout', body: 'Put the label next to the part of the diagram it describes; do not make learners hunt between a picture and a caption.' },
            { title: 'Redundancy', tag: 'cut', body: 'Reading out the slide word for word while learners read it adds load, not learning. Say the explanation, show the picture.' },
            { title: 'Pre-training', tag: 'vocabulary', body: 'Teach key terms and symbols before the lesson that uses them, so working memory is free for the idea.' },
          ],
        },
        { t: 'p', text: 'Anxiety adds its own load. The conceptual curve below (Yerkes and Dodson’s old idea, a metaphor not a law) shows performance rising with arousal and then falling: for a learner who expects to fail, a task pitched too high pushes them over the peak.' },
        { t: 'teach-viz', viz: 'arousal-curve' },
      ],
    },
    {
      id: 'example',
      title: 'A worked planning example',
      lead: 'The same topic, adapted.',
      blocks: [
        {
          t: 'example',
          title: 'Teaching "the main idea of a paragraph" to a class where five learners read two years below age',
          lines: [
            { label: 'Goal', text: 'Every learner can state the main idea of a paragraph and give two supporting details, using the same grade-level texts as the class.' },
            { label: 'Barrier 1: vocabulary', text: 'Pre-teach six key words from the text in a 10-minute group slot before the lesson, with pictures and a sentence each.' },
            { label: 'Barrier 2: text length', text: 'Chunk the paragraph into two-sentence segments; read it aloud once while they follow, then ask for one-word summaries per chunk.' },
            { label: 'Barrier 3: steps', text: 'Model on a different paragraph with a think-aloud ("Who or what is this about? What do they say about it?"), then a sentence frame: "This paragraph is mostly about… because…"' },
            { label: 'Check', text: 'Mini-whiteboards: "Which sentence is the main idea?" with three options, one plausible but too narrow. Wrong answers show who needs reteaching.' },
            { label: 'Independent', text: 'Same task, same text for everyone; the five learners get the frame and highlighted key words, which fade over the next two lessons.' },
            { label: 'Revisit', text: 'Next week’s starter: retrieve the strategy with a new paragraph.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Keep the text and the question at grade level; change the support, not the target.', 'Fade scaffolds deliberately, and record when.', 'Praise specific strategies the learner used, not intelligence.'],
          dont: ['Give a different, easier text and a different question so that the learner never meets the grade-level standard.', 'Seat the learners together and leave them with a worksheet.', 'Let a helper complete the task for them.'],
        },
      ],
    },
  ],
  sources: [
    'Rosenshine, B. (2012). Principles of instruction: research-based strategies that all teachers should know. *American Educator*, 36(1), 12–19.',
    'Kirschner, P. A., Sweller, J. & Clark, R. E. (2006). Why minimal guidance during instruction does not work. *Educational Psychologist*, 41(2), 75–86.',
    'Sweller, J., Ayres, P. & Kalyuga, S. (2011). *Cognitive Load Theory*. Springer.',
    'Kalyuga, S. et al. (2003). The expertise reversal effect. *Educational Psychologist*, 38(1), 23–31.',
    'Ebbinghaus, H. (1885/1913). *Memory: A Contribution to Experimental Psychology*; Rowland, C. A. (2014). The effect of testing versus restudy on retention. *Psychological Bulletin*, 140(6).',
  ],
  related: ['teaching/inclusive-practice/catch-up-evidence', 'teaching/techniques/instruction/rosenshine', 'teaching/techniques/instruction/worked-examples', 'teaching/theories/cognitive-load', 'teaching/differentiation/scaffolding'],
}

export default guide
