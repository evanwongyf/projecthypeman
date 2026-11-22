import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The psychomotor domain covers physical skills: using lab equipment, playing an instrument, handwriting, cooking, sport, surgery. Bloom’s committee never completed this domain, so several others proposed versions. The two most used are by Dave (1970) and Simpson (1972).',
  nutshell: [
    '**Dave**: imitation, manipulation, precision, articulation, naturalisation. Simple and practical.',
    '**Simpson**: perception, set, guided response, mechanism, complex overt response, adaptation, origination. More detailed.',
    'Physical skills move from copying a model, to doing it with guidance, to doing it fluently without thinking, to adapting it.',
    'Practice with feedback is the engine at every level.',
  ],
  sections: [
    {
      id: 'dave',
      title: 'Dave’s five levels',
      lead: 'The simplest ladder for skills.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Imitation', body: 'Copies an action after watching it, often roughly. *Copies the teacher’s grip on a pencil.*', verbs: ['copy', 'follow', 'mimic', 'repeat'] },
            { name: 'Manipulation', body: 'Performs the action from instructions or memory, without a live model. *Sets up the microscope using the written steps.*', verbs: ['perform', 'carry out', 'follow instructions', 'practise'] },
            { name: 'Precision', body: 'Performs accurately and with fewer errors, without help. *Measures liquids to within 0.5 ml consistently.*', verbs: ['perform accurately', 'demonstrate', 'control', 'calibrate'] },
            { name: 'Articulation', body: 'Coordinates several skills together smoothly and in the right order. *Prepares, stains and focuses a slide in one fluent sequence.*', verbs: ['coordinate', 'combine', 'integrate', 'sequence'] },
            { name: 'Naturalisation', body: 'Performs automatically and effortlessly, with attention free for other things. *A pianist who can talk while playing a familiar piece.*', verbs: ['automatise', 'master', 'perform effortlessly'] },
          ],
          caption: 'Dave (1970).',
        },
      ],
    },
    {
      id: 'simpson',
      title: 'Simpson’s seven levels',
      lead: 'Adding perception, readiness and creativity.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Perception', def: 'Using the senses to guide action: noticing the ball’s spin, hearing that a note is flat.' },
            { term: 'Set', def: 'Readiness to act: mental, physical and emotional. Knowing the steps and feeling ready to try.' },
            { term: 'Guided response', def: 'Early stages of learning through imitation and trial and error, with a teacher’s guidance.' },
            { term: 'Mechanism', def: 'The skill has become habitual and can be done with some confidence.' },
            { term: 'Complex overt response', def: 'Skilful performance of complex movements, quickly and accurately, with little wasted effort.' },
            { term: 'Adaptation', def: 'Modifying the skill to fit new situations or problems.' },
            { term: 'Origination', def: 'Creating new movement patterns: a new dance, a new surgical technique.' },
          ],
        },
        {
          t: 'p',
          text: 'Anita Harrow (1972) offered a third version aimed at physical education, running from reflex movements through basic and perceptual abilities to skilled movements and expressive "non-discursive" communication like dance and mime.',
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Teaching a physical skill',
      lead: 'A sequence that follows the levels.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Demonstrate the whole', body: 'Show the complete skill at normal speed so learners see the goal.' },
            { title: 'Break it down', body: 'Demonstrate each part slowly, naming the key points to watch (see [modelling](@teaching/techniques/instruction/modelling)).' },
            { title: 'Guided practice', body: 'Learners try each part with close feedback. Correct one thing at a time.' },
            { title: 'Put it together', body: 'Practise the parts in sequence until the whole is smooth.' },
            { title: 'Practise to fluency', body: 'Repeated, spaced practice until the skill becomes automatic. Vary conditions to build adaptability.' },
            { title: 'Adapt and create', body: 'Change the context or constraints and ask learners to adjust, or invent their own variation.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Feedback on skills',
          text: 'Early on, learners need frequent, specific feedback. As they improve, give feedback less often so they learn to feel and correct their own errors; constant feedback can become a crutch.',
        },
      ],
    },
  ],
  sources: [
    'Dave, R. H. (1970). Psychomotor levels. In R. J. Armstrong (Ed.), *Developing and writing behavioral objectives*. Educational Innovators Press.',
    'Simpson, E. J. (1972). *The classification of educational objectives in the psychomotor domain*. Gryphon House.',
    'Harrow, A. J. (1972). *A taxonomy of the psychomotor domain*. David McKay.',
  ],
  related: ['teaching/taxonomies/affective', 'teaching/taxonomies/blooms', 'teaching/techniques/instruction/modelling'],
}

export default guide
