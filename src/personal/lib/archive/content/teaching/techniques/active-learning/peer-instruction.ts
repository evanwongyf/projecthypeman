import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Peer instruction, developed by Harvard physicist Eric Mazur in the 1990s, turns a lecture into a series of short conceptual questions. Learners vote, discuss their answers with a neighbour, and vote again. The discussion often does more teaching than the lecture.',
  nutshell: [
    'Short explanation → **concept question** → individual vote → **"convince your neighbour"** → revote → explanation.',
    'Works best when 30–70% get the first vote right: enough disagreement to discuss, enough knowledge to resolve it.',
    'Learners who have just understood are often better at explaining than the expert who understood long ago.',
    'Large gains in conceptual understanding in physics and other subjects.',
  ],
  sections: [
    {
      id: 'cycle',
      title: 'The cycle',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Mini-lecture', body: 'A short explanation of one concept, around 7–10 minutes.' },
            { title: 'Concept question', body: 'A multiple-choice question that tests understanding, not calculation or recall. Often called a **ConcepTest**.' },
            { title: 'Think and vote', body: 'Learners think alone for 1–2 minutes and vote (clickers, an app, cards or fingers) without discussion.' },
            { title: 'Look at the results', body: 'Under ~30% right: re-explain. Over ~70% right: explain briefly and move on. In between: discussion.' },
            { title: 'Convince your neighbour', body: 'Learners find someone with a different answer and try to convince them, for 2–4 minutes.' },
            { title: 'Revote and explain', body: 'Vote again. Typically the correct answer rises sharply. Then explain why each option is right or wrong.' },
          ],
        },
      ],
    },
    {
      id: 'questions',
      title: 'Writing concept questions',
      blocks: [
        {
          t: 'list',
          items: [
            'Focus on one concept.',
            'Make it answerable by reasoning, not by memory or long calculation.',
            'Use distractors built from common misconceptions (like [hinge questions](@teaching/techniques/questioning/hinge-questions)).',
            'Aim for questions that some but not most learners get right at first.',
          ],
        },
        {
          t: 'example',
          title: 'A concept question from economics',
          lines: [
            { label: 'Q', text: 'A café raises the price of coffee by 10% and sells 20% fewer cups. What happens to its total revenue from coffee?' },
            { label: 'Options', text: 'A: Rises. B: Falls. C: Stays the same. D: Cannot tell.' },
            { label: 'Why it works', text: 'Many learners assume a price rise always raises revenue. Discussion brings out that revenue depends on how much quantity falls: here 1.1 × 0.8 = 0.88, so revenue falls (B).' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence',
      blocks: [
        {
          t: 'p',
          text: 'Mazur reported that his students’ scores on a standard test of physics concepts roughly doubled after he switched to peer instruction. Crouch and Mazur (2001) reviewed ten years of data and found consistent gains, and the approach has since been used successfully in biology, computer science, maths and other fields. Studies show discussion with peers improves understanding even when no one in the pair initially knew the right answer (Smith et al., 2009).',
        },
      ],
    },
  ],
  sources: [
    'Mazur, E. (1997). *Peer instruction: A user’s manual*. Prentice Hall.',
    'Crouch, C. H., & Mazur, E. (2001). Peer instruction: Ten years of experience and results. *American Journal of Physics, 69*(9), 970–977.',
    'Smith, M. K., et al. (2009). Why peer discussion improves student performance on in-class concept questions. *Science, 323*(5910), 122–124.',
  ],
  related: ['teaching/techniques/questioning/hinge-questions', 'teaching/techniques/active-learning/think-pair-share', 'teaching/techniques/active-learning/flipped'],
}

export default guide
