import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Think, pair, share is the simplest way to get every learner thinking and talking. Pose a question, give silent thinking time, let partners discuss, then share with the class. It takes two minutes and changes who does the thinking.',
  nutshell: [
    '**Think** alone in silence. **Pair** with a partner to compare and improve. **Share** selected answers with the class.',
    'Every learner rehearses an answer before anyone speaks publicly, which raises the quality and number of contributions.',
    'Works best with questions that have more than one reasonable answer or need explanation.',
    'Structure it tightly: clear question, short timings, and a reason to listen to your partner.',
  ],
  sections: [
    {
      id: 'steps',
      title: 'The three steps',
      lead: 'Frank Lyman’s structure (1981).',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Think (30–60 seconds)', body: 'Pose the question. Learners think silently, ideally writing a few words. Silence matters: without it, fast talkers answer for everyone.' },
            { title: 'Pair (1–3 minutes)', body: 'Partners share their thinking, compare, and agree on or improve an answer. Assign roles if needed: partner A speaks first, partner B summarises.' },
            { title: 'Share (2–5 minutes)', body: 'Cold call several pairs to share. Ask them to report their partner’s idea or what they changed their mind about.' },
          ],
        },
      ],
    },
    {
      id: 'questions',
      title: 'Good questions for it',
      blocks: [
        {
          t: 'list',
          items: [
            'Predict: "What do you think will happen when we add the salt?"',
            'Explain: "Why did the ruler change the law?"',
            'Compare: "What is the main difference between these two graphs?"',
            'Evaluate: "Which of these three solutions would you choose, and why?"',
            'Apply: "Where have you seen this pattern outside school?"',
            'Reflect: "What was the hardest part of today, and why?"',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          text: 'Closed questions with one-word answers ("What is 7 × 8?") make poor think-pair-share questions. There is nothing to discuss. Use mini whiteboards for those instead.',
        },
      ],
    },
    {
      id: 'tips',
      title: 'Making it work',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Set up talk partners in advance so pairing takes no time.',
            'Keep timings short and visible; stop pairs while they are still keen.',
            'Give a sentence stem: "I think… because…"',
            'Listen in to pairs to choose who to call on during "share".',
            'Ask "What did your partner say?" to make listening matter.',
          ],
          dont: [
            'Skip the silent "think" step.',
            'Only share with volunteers.',
            'Leave pairs chatting for so long the talk drifts off-topic.',
          ],
        },
        {
          t: 'p',
          text: 'Variations: **Think-pair-square** (two pairs join to compare before sharing), **write-pair-share** (the think step is written), and **turn and talk** (a very quick pair step with no formal share).',
        },
      ],
    },
  ],
  sources: [
    'Lyman, F. (1981). The responsive classroom discussion: The inclusion of all students. In A. S. Anderson (Ed.), *Mainstreaming Digest* (pp. 109–113). University of Maryland.',
  ],
  related: ['teaching/techniques/questioning/questioning', 'teaching/techniques/active-learning/cooperative', 'teaching/theories/social-constructivism'],
}

export default guide
