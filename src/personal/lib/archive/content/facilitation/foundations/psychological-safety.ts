import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Psychological safety is the shared belief that the group is safe for interpersonal risk-taking: that you will not be humiliated or punished for asking a question, admitting a mistake, offering an idea or disagreeing. Amy Edmondson’s research shows it is the foundation of team learning, and every facilitation technique works better on top of it.',
  nutshell: [
    'Edmondson (1999) found that hospital teams with **more** psychological safety **reported more** errors, because they were willing to talk about them, not because they made more.',
    'Google’s Project Aristotle (2015) found psychological safety was the strongest of five factors separating its most effective teams.',
    'Safety is **not comfort**: safe groups argue more, because disagreement is not dangerous.',
    'Facilitators build it by framing the work as learning, modelling fallibility and responding well when someone takes a risk.',
  ],
  sections: [
    {
      id: 'research',
      title: 'What the research found',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Edmondson’s hospital teams', body: 'Studying nursing units, Edmondson expected better teams to make fewer drug errors. The better-led units reported **more** errors. The difference was willingness to report and discuss them, which is how teams learn.' },
          { title: 'Project Aristotle', body: 'Google studied 180 teams. Who was on a team mattered less than how it worked. The five factors: psychological safety, dependability, structure and clarity, meaning, and impact. Safety was the base of the others.' },
          { title: 'Learning behaviour', body: 'Across many later studies, safety predicts asking for help, seeking feedback, speaking up about problems and experimenting, which in turn predict team performance in complex work.' },
          { title: 'Equal airtime', body: 'Woolley and colleagues found groups where members spoke in roughly equal amounts, and who were better at reading emotions, did better across many kinds of tasks (“collective intelligence”).' },
        ] },
      ],
    },
    {
      id: 'quadrant',
      title: 'Safety and standards',
      blocks: [
        { t: 'table', head: ['', 'Low standards', 'High standards'], rows: [
          ['**High safety**', 'Comfort zone: pleasant, little learning', 'Learning zone: candid, challenging, growing'],
          ['**Low safety**', 'Apathy zone: people go through the motions', 'Anxiety zone: high pressure, people hide problems'],
        ], caption: 'Edmondson’s four zones. The aim is high safety and high standards together.' },
      ],
    },
    {
      id: 'building',
      title: 'How facilitators build it',
      blocks: [
        { t: 'steps', items: [
          { title: 'Frame the work', body: 'Say why voices are needed: “This is a new problem; none of us has the answer, so we need everyone’s view.” Framing turns speaking up from a risk into a contribution.' },
          { title: 'Agree norms', body: 'Let the group set a few explicit norms (“challenge ideas, not people”, “what is said here stays here”, “step up, step back”). Write them up and refer back.' },
          { title: 'Model fallibility', body: 'Admit your own mistakes and uncertainties: “I got the timing wrong on that activity.” If the facilitator never errs, nobody else will either.' },
          { title: 'Invite, don’t demand', body: 'Use pairs and writing before plenary, rounds with a right to pass, anonymous input when stakes are high.' },
          { title: 'Respond productively', body: 'The first time someone takes a risk is decisive. Thank them, show curiosity, and never let the group punish the messenger.' },
        ] },
        { t: 'dodont', do: [
          '“Thank you for raising that, it is exactly what we need to hear.”',
          '“What are we missing?” and “Who sees it differently?”',
          'Let people pass in a round, and come back to them',
          'Treat a failed activity as data for the debrief',
        ], dont: [
          'Sarcasm, even affectionate',
          'Asking for honesty, then defending yourself',
          'Calling on an individual cold in a tense moment',
          'Sharing what someone said in confidence',
        ] },
      ],
    },
    {
      id: 'measure',
      title: 'Checking the level',
      blocks: [
        { t: 'p', text: 'Edmondson’s seven-item scale asks members to rate statements such as “If you make a mistake on this team, it is often held against you” (reverse-scored) and “It is safe to take a risk on this team.” A quick facilitator version is an anonymous 1–5 rating at the start and end of a programme of: “I can say what I really think in this group.”' },
        { t: 'callout', tone: 'warn', title: 'Not therapy', text: 'Psychological safety at work or in a programme means safe for learning risks. It does not mean people must disclose personal matters. Never require emotional disclosure, and know where to refer someone who needs more support than a group can give.' },
      ],
    },
  ],
  sources: [
    'Edmondson, A. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383.',
    'Edmondson, A. (2018). The Fearless Organization. Wiley.',
    'Woolley, A. W. et al. (2010). Evidence for a collective intelligence factor in the performance of human groups. Science, 330, 686–688.',
    'Duhigg, C. (2016). What Google learned from its quest to build the perfect team. New York Times Magazine.',
  ],
  related: ['facilitation/foundations/group-development', 'facilitation/toolkit/difficult-dynamics', 'facilitation/debriefing/hard-debriefs'],
}

export default guide
