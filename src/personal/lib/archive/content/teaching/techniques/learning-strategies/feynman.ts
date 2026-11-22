import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'The Feynman technique is a way to test and deepen your understanding by explaining an idea in plain words, as if to someone who knows nothing about it. Wherever the explanation stumbles, you have found a gap. Go back, fill it, and explain again.',
  nutshell: [
    'Four steps: **pick a concept, explain it simply, find the gaps, simplify and use an analogy**.',
    'Jargon hides confusion. If you cannot say it without the technical term, you may not understand it yet.',
    'It works because it combines retrieval, self-explanation and elaboration, three well-supported learning strategies.',
    'Teachers can use it too: to plan explanations, and as a check for understanding in class.',
  ],
  sections: [
    {
      id: 'origin',
      title: 'Where the name comes from',
      lead: 'A physicist famous for explaining.',
      blocks: [
        {
          t: 'p',
          text: 'Richard Feynman was a Nobel Prize-winning physicist known for his gift for explaining hard ideas simply, in lectures that are still widely read. Feynman did not publish a four-step "technique"; the method was assembled later by writers inspired by his approach. But it captures something he cared about deeply: the difference between knowing the **name** of something and knowing **how it works**.',
        },
        {
          t: 'p',
          text: 'He told a story of his father pointing at a bird and saying you can know its name in every language and still know nothing about the bird. Only by watching what it does do you learn something about it.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'The illusion of explanatory depth',
          text: 'People think they understand everyday things, like how a zip or a toilet works, far better than they do. Asking them to explain step by step punctures the illusion (Rozenblit & Keil, 2002). The Feynman technique uses this deliberately.',
        },
      ],
    },
    {
      id: 'steps',
      title: 'The four steps',
      lead: 'Explain, find the gaps, fix them, simplify.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Choose a concept', body: 'Write its name at the top of a blank page. Make it specific: "how vaccines train the immune system", not "biology".' },
            { title: 'Explain it to a beginner', body: 'Write or say an explanation as if to a curious twelve-year-old. Use plain words, short sentences and an example. **Do it from memory**, without your notes.' },
            { title: 'Find the gaps and go back', body: 'Mark every place where you got stuck, went vague, used jargon to cover a jump, or said "basically" and waved your hands. Go back to your notes or the source for those parts only, then explain again.' },
            { title: 'Simplify and use an analogy', body: 'Tighten the explanation. Replace remaining jargon with plain words or define it. Add an analogy that captures how it works. Read it aloud: would a beginner follow it?' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Warning signs of a gap',
          text: 'You reach for a technical term and cannot define it. You say "it just does". Your explanation skips from cause to effect with no mechanism. You can describe *what* happens but not *why*. You cannot think of an example.',
        },
      ],
    },
    {
      id: 'example',
      title: 'A worked example',
      lead: 'Two rounds on the same idea.',
      blocks: [
        {
          t: 'example',
          title: 'Concept: how vaccines work',
          lines: [
            { label: 'Round 1', text: '"A vaccine gives you antibodies so you are immune to the virus."' },
            { label: 'Gap check', text: 'Does the vaccine *give* antibodies? Where do antibodies come from? Why does the protection last years? The explanation uses "immune" without saying what it means.' },
            { label: 'Back to source', text: 'Vaccines contain a harmless piece or version of the germ (an antigen). The immune system makes its own antibodies against it, and keeps memory cells that remember it.' },
            { label: 'Round 2', text: '"Your body has a defence team that learns to recognise invaders by their shape. A vaccine shows the team a harmless copy of an invader’s shape, like a wanted poster. The team practises making weapons (antibodies) that fit that shape, and some team members (memory cells) keep the poster for years. If the real invader turns up, the team recognises it straight away and fights it before it can make you ill."' },
            { label: 'Check', text: 'Every term is defined, the mechanism is there, and the analogy (wanted poster) fits how it works. Where does the analogy break down? Real antibodies are proteins, not people, and memory fades for some diseases, which is why boosters exist.' },
          ],
        },
        {
          t: 'p',
          text: 'Notice the final question. Every analogy breaks somewhere. Knowing **where** it breaks is a sign of real understanding, and a good follow-up to test yourself on.',
        },
      ],
    },
    {
      id: 'why',
      title: 'Why it works',
      lead: 'Three proven strategies in one.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Retrieval', body: 'Explaining without notes forces you to pull knowledge from memory, which strengthens it. See [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice).' },
            { title: 'Self-explanation', body: 'Explaining how and why, step by step, improves understanding and transfer (Chi et al., 1994).' },
            { title: 'Elaboration', body: 'Examples and analogies connect the new idea to things you already know. See [elaboration](@teaching/techniques/learning-strategies/elaboration).' },
          ],
        },
        {
          t: 'p',
          text: 'There is also evidence for a "protégé effect": people who study material expecting to teach it, and especially those who actually explain it to others, tend to learn it better than those who study only for a test (Nestojko et al., 2014; Fiorella & Mayer, 2014).',
        },
      ],
    },
    {
      id: 'variations',
      title: 'Ways to do it',
      lead: 'Pick the format that suits you.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Blank page', body: 'The classic: write the explanation on a blank sheet from memory, then check against the source in a different colour.' },
            { title: 'Talk it out', body: 'Explain aloud to a friend, a family member, a pet or a recording. Record yourself and listen back for vague patches.' },
            { title: 'Rubber duck', body: 'Programmers explain their code line by line to a rubber duck. Saying each step aloud reveals the bug.' },
            { title: 'Teach a study partner', body: 'Take turns explaining topics to each other. The listener asks "why?" after every sentence.' },
            { title: 'Explain to a chatbot', body: 'Ask an AI to act as a confused beginner and ask follow-up questions. Check any facts it supplies against a reliable source.' },
            { title: 'Draw it', body: 'Explain with a simple diagram and labels. Mechanisms that are hard to draw are often the ones you do not understand yet.' },
          ],
        },
      ],
    },
    {
      id: 'teachers',
      title: 'For teachers',
      lead: 'Using it in class.',
      blocks: [
        {
          t: 'list',
          items: [
            '**Plan explanations** by doing the technique yourself before teaching a topic. The places you stumble are the places learners will too.',
            '**Explain it to a Year 7**: ask learners to write a short explanation of today’s idea for a younger learner, then swap and mark gaps in each other’s.',
            '**Jargon ban**: learners must explain a concept without using a list of key words, which forces them to show they understand what the words mean.',
            '**Pair teaching**: one partner explains, the other can only ask "why?" or "what does that mean?".',
            '**Exit ticket**: "Explain X in two sentences a ten-year-old would understand."',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Simple, not simplistic',
          text: 'Simplifying the language must not change the idea into something false. Encourage learners to keep the mechanism accurate and to name the limits of their analogy.',
        },
      ],
    },
    {
      id: 'try',
      title: 'Try it now',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Pick one concept from something you are studying this week.',
            'Close your notes and write an explanation for a beginner.',
            'Underline every piece of jargon and every vague step.',
            'Check the source for just those parts.',
            'Rewrite the explanation with an example and an analogy.',
            'Note where your analogy breaks down.',
            'Come back tomorrow and explain it again from memory.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Feynman, R. P., Leighton, R. B., & Sands, M. (1963). *The Feynman lectures on physics*. Addison-Wesley.',
    'Feynman, R. P. (1988). *"What do you care what other people think?"*. W. W. Norton.',
    'Rozenblit, L., & Keil, F. (2002). The misunderstood limits of folk science: An illusion of explanatory depth. *Cognitive Science, 26*(5), 521–562.',
    'Chi, M. T. H., De Leeuw, N., Chiu, M.-H., & LaVancher, C. (1994). Eliciting self-explanations improves understanding. *Cognitive Science, 18*(3), 439–477.',
    'Nestojko, J. F., Bui, D. C., Kornell, N., & Bjork, E. L. (2014). Expecting to teach enhances learning and organization of knowledge in free recall of text passages. *Memory & Cognition, 42*(7), 1038–1048.',
    'Fiorella, L., & Mayer, R. E. (2014). Role of expectations and explanations in learning by teaching. *Contemporary Educational Psychology, 39*(2), 75–85.',
  ],
  related: ['teaching/techniques/learning-strategies/retrieval-practice', 'teaching/techniques/learning-strategies/elaboration', 'teaching/techniques/instruction/explaining', 'teaching/guides/contexts/presentations'],
}

export default guide
