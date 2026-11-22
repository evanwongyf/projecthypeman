import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Game theory is powerful and often oversold. It is a way of thinking, not a crystal ball. Its assumptions are strong, its predictions are sensitive to details, and its most cited examples are simple enough to mislead. This final guide sets out the main criticisms, the real limits and the sensible way to use the models: lightly, as lenses that sharpen questions, never as answers on their own.',
  nutshell: [
    '**Models simplify**. They omit emotion, culture, history and the many ways real situations differ from a payoff table.',
    '**Equilibrium selection**: many games have several equilibria, and theory often cannot say which will occur.',
    '**Payoffs are assumed**. Getting them right (what people really want) is the hardest part, and it is often unobservable.',
    '**Rationality** and **common knowledge** are strong assumptions. Behavioural research shows systematic departures.',
    'Used well, game theory **clarifies incentives, reveals hidden strategic structure and warns against wishful thinking**. Used badly, it justifies cynicism or false precision.',
  ],
  sections: [
    {
      id: 'critiques',
      title: 'The main critiques',
      blocks: [
        {
          t: 'table',
          head: ['Critique', 'Substance', 'Response'],
          rows: [
            ['Unrealistic rationality', 'People do not compute equilibria; they use rules of thumb and are swayed by framing and emotion', 'Behavioural game theory adds realistic psychology; evolutionary models need no rationality'],
            ['Selfishness assumed', 'Models often treat players as caring only about money', 'Payoffs can include fairness and morality; the theory does not require selfishness'],
            ['Multiple equilibria', 'Theory often cannot pick one; refinements help but do not always settle it', 'Focal points, history, culture and learning fill the gap'],
            ['Hidden assumptions', 'Results can depend on details such as the order of moves or what is common knowledge', 'Check robustness and vary assumptions'],
            ['Payoffs are unobservable', 'Analysts choose numbers that give the answer they want', 'Be explicit; test with data and experiments'],
            ['Context ignored', 'History, power, institutions and culture shape what games exist and how they are played', 'Combine with anthropology, history and political science'],
            ['Limited prediction', 'Many real-world forecasts from the theory have failed or been post hoc', 'Use for explanation and design more than for forecasting'],
          ],
        },
      ],
    },
    {
      id: 'dangers',
      title: 'Misuse and misreading',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Cynicism', title: '“Everyone is selfish”', body: 'The prisoner’s dilemma does not show that people are selfish. It shows how structure produces bad outcomes even among decent people, and how to repair it.' },
            { tag: 'Self-fulfilling', title: 'Teaching selfishness', body: 'Some studies suggest that studying economics can raise self-interested behaviour in games, or that describing a game as a “Wall Street game” instead of a “community game” changes behaviour. Framing and expectations feed back.' },
            { tag: 'False precision', title: 'Numbers without basis', body: 'Putting numbers on payoffs can give an air of rigour to guesswork.' },
            { tag: 'Ethics', title: 'Cold calculation', body: 'The Cold War strategists’ logic was sometimes criticised for treating mass death as a bargaining chip. Models cannot replace moral judgement.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'A famous example, read carefully',
          text: 'In the early 1950s the RAND researchers who first played the prisoner’s dilemma with colleagues were surprised that people often cooperated. Later work found cooperation is common when people can talk, repeat, or see each other. The real world is full of mechanisms the one-shot model leaves out.',
        },
      ],
    },
    {
      id: 'good',
      title: 'Using it well',
      blocks: [
        {
          t: 'checklist',
          items: [
            'State the model: players, options, payoffs, information, timing. If you cannot, you do not yet have a game.',
            'Ask what the model leaves out, and whether that matters for your question.',
            'Test the result against changes in assumptions. Does it survive?',
            'Compare with evidence: what do experiments or cases show?',
            'Use it to ask better questions (“what does each side know, and want?”) more than to give answers.',
            'Keep the human side in view: fairness, emotion, identity, culture.',
          ],
        },
        {
          t: 'dodont',
          do: ['Treat a game as a lens that highlights incentives.', 'Combine game theory with other disciplines (psychology, anthropology, history).', 'Be honest about uncertainty.', 'Use it to design better rules.'],
          dont: ['Treat a model’s answer as a prediction.', 'Reduce people to payoffs.', 'Use jargon to win arguments.', 'Forget that rules, norms and institutions are made by people and can be changed.'],
        },
        { t: 'p', text: 'The best summary of the subject may be Schelling’s. Strategy, he wrote, is about the interdependence of decisions: your best move depends on what others do, and theirs on yours. Understanding that does not make you able to control other people. It does make you better at seeing what is going on, at designing arrangements in which people’s interests align, and at recognising that cooperation, when it happens, is something societies build.' },
        { t: 'links', items: [{ path: 'game-theory/society/strategic-mentality', note: 'Habits for using it well' }, { path: 'game-theory/society/behavioural-game-theory', note: 'Real minds' }, { path: 'anthropology/start-here', note: 'Culture and human behaviour' }] },
      ],
    },
  ],
  sources: [
    'Rubinstein, A. (2012). Economic Fables. Open Book Publishers.',
    'Camerer, C. F. (2003). Behavioral Game Theory. Princeton University Press.',
    'Liberman, V., Samuels, S. M., and Ross, L. (2004). The name of the game: predictive power of reputations versus situational labels in determining prisoner’s dilemma game moves. Personality and Social Psychology Bulletin.',
    'Frank, R. H., Gilovich, T., and Regan, D. T. (1993). Does studying economics inhibit cooperation? Journal of Economic Perspectives.',
    'Schelling, T. C. (1960). The Strategy of Conflict. Harvard University Press.',
  ],
  related: ['game-theory/society/strategic-mentality', 'game-theory/society/behavioural-game-theory', 'anthropology/start-here'],
}

export default guide
