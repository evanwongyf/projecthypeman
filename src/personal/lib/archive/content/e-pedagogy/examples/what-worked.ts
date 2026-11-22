import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Some digital learning has strong evidence behind it. What the successes have in common is not flashy technology but sound pedagogy delivered at scale: practice with immediate feedback, mastery before moving on, spaced retrieval, simulations that make the invisible visible, and teachers freed to spend class time on the hard parts.',
  nutshell: [
    '**Intelligent tutoring systems** approach the effect of human tutoring on step-by-step problem solving.',
    '**Online homework with feedback** (ASSISTments) raised maths scores in a large randomised trial.',
    '**Simulations** (PhET) can teach some concepts better than real equipment.',
    '**Flipped classrooms** show moderate gains when class time is used for active learning.',
    '**AI tutors with guardrails** showed large gains in recent randomised studies.',
  ],
  sections: [
    {
      id: 'cases',
      title: 'Cases with evidence',
      blocks: [
        { t: 'table', head: ['Example', 'What it does', 'Evidence (approximate)', 'Why it worked'], rows: [
          ['Intelligent tutoring systems (step-based)', 'Give feedback on each step of a problem', 'VanLehn (2011): d ≈ 0.76 versus no tutoring, close to human tutors (0.79)', 'Immediate, specific feedback; mastery'],
          ['Cognitive Tutor Algebra I', 'Carnegie Learning’s algebra curriculum with tutoring software', 'Pane et al. (2014, RAND, 147 schools): about +0.2 SD in the second year in high schools', 'Practice and feedback, once teachers adapted'],
          ['ASSISTments', 'Online maths homework with immediate feedback and teacher reports', 'Roschelle et al. (2016): about +0.18 SD in a state-wide randomised trial', 'Feedback on homework; teachers targeted common errors next day'],
          ['PhET simulations', 'Free interactive science and maths simulations (University of Colorado)', 'Finkelstein et al. (2005): students using a circuit simulation outperformed those using real equipment on conceptual questions and building real circuits', 'Shows invisible processes (current flow); quick experimentation'],
          ['Spaced retrieval apps', 'Flashcard systems that schedule reviews', 'Decades of spacing and testing research (Cepeda et al., 2006; Roediger and Karpicke, 2006)', 'Automates two of the best-evidenced techniques'],
          ['Flipped classrooms', 'Content before class, practice in class', 'Meta-analyses: moderate positive effects (around g = 0.3–0.5)', 'More active class time; pre-class quizzes'],
          ['AI tutor in physics (Harvard)', 'A carefully prompted AI tutor for a lesson', 'Kestin et al. (2025): learning gains more than double those of an active-learning class, in less time', 'Structured pedagogy built into the prompt; scaffolding, not answers'],
          ['AI tutoring after school (Nigeria pilot)', 'Six weeks of guided sessions with an AI tutor and teacher facilitators', 'De Simone et al. (2025, World Bank): about +0.3 SD in English', 'Teacher-guided, curriculum-aligned use'],
        ] },
      ],
    },
    {
      id: 'singapore',
      title: 'Singapore examples',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Student Learning Space (SLS)', body: 'MOE’s national online learning platform (2018) gives every student curriculum-aligned lessons, quizzes with feedback, and teacher tools. It enabled continuity during the 2020 school closures and supports routine home-based learning days.' },
          { title: 'Personal learning devices', body: 'The National Digital Literacy Programme (from 2020) gave every secondary student a personal device by 2021, paired with guidance on cyber wellness and screen use.' },
          { title: 'Adaptive learning in SLS', body: 'Features such as adaptive learning for mathematics and AI-assisted feedback for English writing were introduced from 2023, as part of the EdTech Masterplan 2030.' },
          { title: 'Teachers as designers', body: 'The strongest results came where teachers redesigned lessons around the tools rather than adding devices to unchanged lessons.' },
        ] },
      ],
    },
    {
      id: 'patterns',
      title: 'What the successes share',
      blocks: [
        { t: 'checklist', items: [
          'Learners actively do something (answer, manipulate, explain) rather than watch',
          'Feedback is immediate and specific',
          'Progress depends on mastery',
          'Teachers use the data to change what they teach',
          'The technology removes a real constraint (time, equipment, scale)',
          'It is aligned with the curriculum and assessment',
          'Implementation was supported over years, not weeks',
        ] },
      ],
    },
  ],
  sources: [
    'VanLehn, K. (2011). The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems. Educational Psychologist, 46(4), 197–221.',
    'Pane, J. F. et al. (2014). Effectiveness of Cognitive Tutor Algebra I at scale. Educational Evaluation and Policy Analysis, 36(2), 127–144.',
    'Roschelle, J. et al. (2016). Online mathematics homework increases student achievement. AERA Open, 2(4).',
    'Finkelstein, N. D. et al. (2005). When learning about the real world is better done virtually. Physical Review Special Topics – Physics Education Research, 1, 010103.',
    'Kestin, G. et al. (2025). AI tutoring outperforms in-class active learning. Scientific Reports, 15, 17458.',
    'De Simone, M. E. et al. (2025). From chalkboards to chatbots: Evaluating the impact of generative AI on learning outcomes in Nigeria. World Bank Policy Research Working Paper.',
    'Ministry of Education Singapore. EdTech Masterplan 2030; Student Learning Space.',
  ],
  related: ['e-pedagogy/examples/what-failed', 'e-pedagogy/applications/ai-in-education', 'e-pedagogy/simulation/why-simulation'],
}

export default guide
