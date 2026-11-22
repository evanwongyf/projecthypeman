import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'What a teacher says in a hard moment often decides whether it calms down or escalates. These are short, tested scripts for common situations with neurodivergent learners, with the reasoning behind them. Adapt the words to your voice; keep the structure.',
  sections: [
    {
      id: 'scripts',
      title: 'Scripts by situation',
      blocks: [
        { t: 'example', title: 'A change of plan (autism)', lines: [
          { label: 'Avoid', text: '“We’re not doing art today, get your maths books out.”' },
          { label: 'Try', text: '“Change: art is not happening today. Instead we are doing maths. Art is on Thursday.” (point to the timetable)' },
          { label: 'Why', text: 'Name the change, say what replaces it, show when the missed thing will happen. Predictability lowers anxiety.' },
        ] },
        { t: 'example', title: 'Refusal (demand-avoidant or anxious)', lines: [
          { label: 'Avoid', text: '“Do it now or you’ll stay in at break.”' },
          { label: 'Try', text: '“I wonder whether you’d rather start with question 1 or the diagram. I’ll come back in two minutes.”' },
          { label: 'Why', text: 'Indirect language and choice reduce threat; leaving space avoids a power struggle.' },
        ] },
        { t: 'example', title: 'Rising distress', lines: [
          { label: 'Avoid', text: 'Lots of questions: “What’s wrong? Why are you upset? Look at me.”' },
          { label: 'Try', text: 'Few words, calm voice: “You’re safe. Calm corner or stay here?” Then wait.' },
          { label: 'Why', text: 'Language processing shuts down under stress; questions and eye contact add load.' },
        ] },
        { t: 'example', title: 'Meltdown or shutdown', lines: [
          { label: 'During', text: 'Keep everyone safe, reduce noise and people, say almost nothing, do not reason or sanction.' },
          { label: 'After', text: 'When fully calm (often 20–60 minutes): “That was really hard. What happened just before? What could help next time?” Use a drawing or comic strip if talking is hard.' },
        ] },
        { t: 'example', title: 'Calling out (ADHD)', lines: [
          { label: 'Avoid', text: 'Long public reprimands.' },
          { label: 'Try', text: 'A pre-agreed silent signal; then catch them: “Thanks for putting your hand up, what’s your idea?”' },
          { label: 'Why', text: 'Quick, private prompts plus immediate praise for the replacement behaviour.' },
        ] },
        { t: 'example', title: 'Getting started (ADHD, executive function)', lines: [
          { label: 'Try', text: '“Let’s do the first one together. Write the date… now number 1… what’s the first word?” Then: “Do the next two, and show me.”' },
          { label: 'Why', text: 'Lowers the activation barrier; short targets with quick checks.' },
        ] },
        { t: 'example', title: 'Reading aloud (dyslexia)', lines: [
          { label: 'Avoid', text: '“Mei, read the next paragraph.” (unplanned)' },
          { label: 'Try', text: 'Privately, the day before: “Tomorrow I’ll ask you to read this short paragraph. Want to practise it with me?”' },
          { label: 'Why', text: 'Removes public humiliation; preparation builds fluency and confidence.' },
        ] },
        { t: 'example', title: 'Literal language (autism)', lines: [
          { label: 'Avoid', text: '“Can you pull your socks up?” “Give me two seconds.”' },
          { label: 'Try', text: '“Please finish questions 1 to 5 by 10:30.” “Wait for me, I’ll be there in two minutes.”' },
        ] },
      ],
    },
    {
      id: 'principles',
      title: 'The principles behind the scripts',
      blocks: [
        { t: 'dodont', do: ['Fewer words, said calmly', 'Say what to do, not what not to do', 'Offer limited choices', 'Give processing time (count to 10)', 'Repair the relationship afterwards'], dont: ['Argue during distress', 'Use sarcasm or idioms with literal thinkers', 'Shame in public', 'Remove movement or breaks as punishment', 'Assume intent'] },
      ],
    },
  ],
  sources: ['Greene, R. W. (2014). Lost at School: Collaborative and Proactive Solutions. Scribner.', 'Christie, P. et al. (2012). Understanding Pathological Demand Avoidance Syndrome in Children. Jessica Kingsley.', 'Barkley, R. A. (2016). Managing ADHD in School. PESI.'],
  related: ['teaching/special-education/approaches/engagement-toolkit', 'teaching/special-education/strategies/behaviour-support'],
}

export default guide
