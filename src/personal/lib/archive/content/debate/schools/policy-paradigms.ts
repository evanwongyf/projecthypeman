import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'American policy debate did something no other format did: it made the question "what is a judge for?" an argument you can run inside the round. The five paradigms are five answers, each with a different theory of what a debate is, and the dispute between them is the most developed body of thought about adjudication that exists anywhere.',
  nutshell: [
    '**Stock issues**: the affirmative must win harms, inherency, solvency and significance. Fail one, lose.',
    '**Policymaker**: the judge is a legislator comparing the plan with the best alternative on net benefits.',
    '**Hypothesis testing**: the resolution is a hypothesis and the negative is a sceptic; the affirmative must survive testing.',
    '**Tabula rasa**: the judge brings no assumptions and the debaters argue for the standard the judge should use.',
    '**Games playing**: debate is a competitive activity with rules, and arguments are moves — the parent of theory debate.',
    'The **kritik** rejects the frame itself: it challenges an assumption of the plan, or of the activity.',
  ],
  sections: [
    {
      id: 'five',
      title: 'The five paradigms',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Stock issues', tag: 'Oldest', body: 'A checklist inherited from legal advocacy: harm, inherency, solvency, significance, topicality. Clear, teachable, and criticised for letting a plan lose on a technicality while being obviously better.' },
            { title: 'Policymaker', tag: 'Most intuitive', body: 'Compare plan and counterplan on net benefit, like a legislator. Produces the impact-calculus culture, and with it impact inflation.' },
            { title: 'Hypothesis testing', tag: 'Most sceptical', body: 'The negative need not defend anything, only cast doubt. Permits contradictory negative positions, which many judges dislike.' },
            { title: 'Tabula rasa', tag: 'Most common now', body: 'The judge adopts whatever standard is best argued. Maximally fair, and it makes theory debate inevitable — if the standard is up for grabs, debaters will argue about it.' },
            { title: 'Games playing', tag: 'Most honest', body: 'Debate is a game with rules; an argument is good if it works within them. Explains speed and technicality, and invites the charge that the game has drifted from its purpose.' },
          ],
        },
        {
          t: 'table',
          head: ['Paradigm', 'Affirmative wins by', 'Negative wins by'],
          rows: [
            ['Stock issues', 'Winning every stock issue.', 'Winning any one of them.'],
            ['Policymaker', 'Net benefits favour the plan.', 'Net benefits favour the status quo or a counterplan.'],
            ['Hypothesis testing', 'Surviving all tests.', 'Raising sufficient doubt, from any direction.'],
            ['Tabula rasa', 'Winning the standard and then meeting it.', 'The same, with their standard.'],
            ['Games playing', 'Out-playing on the flow within the rules.', 'The same.'],
          ],
        },
      ],
    },
    {
      id: 'kritik',
      title: 'The kritik',
      blocks: [
        { t: 'p', text: 'A kritik ("K") refuses the terms of the question. Rather than arguing the plan is bad, it argues that an assumption behind the plan — or behind debating it this way — is the real harm, and that the judge should vote on rejecting that assumption.' },
        {
          t: 'flow',
          title: 'The shape of a kritik',
          nodes: [
            { label: 'Link', sub: 'the plan relies on assumption X', tone: 'data' },
            { label: 'Impact', sub: 'X does harm in the world', tone: 'process' },
            { label: 'Alternative', sub: 'reject, or re-orient', tone: 'model' },
            { label: 'Framework', sub: 'why the judge should decide on this', tone: 'output' },
          ],
          caption: 'The framework element is what makes it a kritik rather than a disadvantage: it argues for a different question, not a different answer.',
        },
        { t: 'p', text: 'The arguments for and against are genuine, not merely tactical. In favour: debates about which assumptions are permitted are exactly the debates most worth having, and formats that exclude them quietly privilege the status quo. Against: a position that can be run against any plan risks disconnecting the round from the resolution altogether, which punishes the team who prepared the topic. Both of these are themselves arguments you can run — which is the paradigm question again, one level up.' },
      ],
    },
    {
      id: 'theory',
      title: 'Theory debate',
      blocks: [
        { t: 'p', text: 'Once the judge is a blank slate, the rules themselves are debatable. Theory arguments claim that a practice makes the round unfair or uneducational and that the judge should penalise it.' },
        {
          t: 'terms',
          items: [
            { term: 'Topicality', def: 'The plan is not an instance of the resolution, so defending it is not defending the topic.' },
            { term: 'Fairness', def: 'A practice gives one side an advantage unavailable to the other: the usual standard appealed to.' },
            { term: 'Education', def: 'A practice makes the round worse as a learning activity. The other standard, and the one that answers "it is just a game".' },
            { term: 'Abuse story', def: 'The concrete harm the practice caused in *this* round, as opposed to in principle. Judges require it.' },
            { term: 'Reciprocity', def: 'Whether both sides could run the same move. A common test for whether a practice is unfair or merely clever.' },
            { term: 'Reject the argument, not the team', def: 'The usual remedy, short of losing the round, for a practice that was abusive but not decisive.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Why theory is disliked outside policy', text: 'Other formats handle the same problems through rules and equity processes rather than in-round argument, on the view that a round spent arguing about the rules is a round not spent on the motion. Both designs have costs; policy pays in accessibility and gains in self-correction.' },
      ],
    },
    {
      id: 'elsewhere',
      title: 'What this means outside policy debate',
      blocks: [
        { t: 'p', text: 'Parliamentary formats answer the paradigm question by fiat: the judge is an [average reasonable person](@debate/systems/judging) and the standard is not up for debate. That is a real choice with real consequences, and knowing the alternatives tells you what your format has traded away.' },
        {
          t: 'table',
          head: ['Question', 'Policy debate', 'Parliamentary formats'],
          rows: [
            ['Who decides the standard?', 'The debaters, by argument.', 'The rulebook.'],
            ['Can you argue about the rules?', 'Yes, and it can win the round.', 'No, except through equity processes afterwards.'],
            ['Is silence a concession?', 'Strictly.', 'Strongly, but a judge may discount an absurd dropped point.'],
            ['Does the judge use outside knowledge?', 'Discouraged, varies by paradigm.', 'Discouraged explicitly.'],
            ['What wins a close round?', 'Coverage and impact calculus.', 'Comparative weighing and engagement.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Read the paradigm', text: 'Circuit judges publish paradigms, and they tell you precisely how to win in front of that person. Not reading one when it is available is leaving information on the table; how far to adapt is in [judge adaptation](@debate/winning/judge-adaptation).' },
      ],
    },
  ],
  sources: [
    'Zarefsky, D., and Lichtman, A. and Rohrer, D., the foundational articles on hypothesis testing and policy-making paradigms in the Journal of the American Forensic Association.',
    'Snider, A. (1984) Games Without Frontiers, on the games-playing paradigm.',
    'Shanahan, W., and subsequent literature on the kritik in academic debate.',
  ],
  related: ['debate/formats/american-formats', 'debate/systems/judging', 'debate/winning/judge-adaptation'],
}

export default guide
