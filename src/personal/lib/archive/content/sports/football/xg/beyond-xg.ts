import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Shots are a small part of a football match: a team may spend 60 minutes building towards a chance that comes in the 61st. Newer metrics try to value everything that happens before the shot. Expected assists (xA) credit the passer; expected threat (xT) values every pass and carry by how much it raises the chance of scoring; pitch control estimates which team could reach each part of the pitch first; and PPDA measures how intensely a team presses. This guide explains each idea, how it is built and what it can and cannot say, with a live lab for each.',
  nutshell: [
    '**xA** credits the passer with the xG of the shot that followed the pass; **key passes** and **big chances created** are the raw counts.',
    '**Expected threat (xT)** gives every location a value; a pass or carry earns the difference in value between its end and its start.',
    '**PPDA** (passes per defensive action) measures pressing: opponent passes in a zone divided by your defensive actions there; lower means more pressing.',
    '**Pitch control** models which team can reach each point first; it values space, not just the ball.',
    '**Possession-value models** (VAEP, EPV) assign a value to every action, based on how it changes the probabilities of scoring and conceding.',
  ],
  sections: [
    {
      id: 'xa',
      title: 'Expected assists and chance creation',
      lead: 'Crediting the pass.',
      blocks: [
        {
          t: 'p',
          text: 'An assist is only recorded if the shot scores, which depends on the finisher’s luck. **Expected assists (xA)** instead credit the passer with the xG of the shot, whether or not it scores: a pass that creates a 0.4 chance earns 0.4 xA. Variants: **xG chain** gives credit to every player in the possession that ended in a shot; **xG buildup** excludes the shooter and the passer so the earlier build-up is credited too.',
        },
        {
          t: 'table',
          head: ['Metric', 'Credits', 'Note'],
          rows: [
            ['Assist', 'The last pass before a goal', 'Depends on the finisher scoring'],
            ['Key pass', 'The last pass before any shot', 'Treats a 0.02 and a 0.5 chance equally'],
            ['xA', 'The xG of the shot after the pass', 'Better, but ignores pre-assist play'],
            ['xG chain', 'Everyone involved in a possession ending in a shot', 'Credits build-up, but also gives credit for passing around the back'],
            ['xG buildup', 'Everyone except the shooter and key passer', 'Highlights the earlier contributors'],
          ],
        },
      ],
    },
    {
      id: 'xt',
      title: 'Expected threat and progressive actions',
      lead: 'Valuing the move.',
      blocks: [
        { t: 'ftbl-viz', viz: 'xt-lab' },
        {
          t: 'math',
          tex: String.raw`xT(z)=s(z)\,g(z)+m(z)\sum_{z'}T(z\to z')\,xT(z')`,
          caption: 'Expected threat as a value iteration: the value of a zone is the chance of shooting and scoring from it plus the chance of moving to another zone times that zone’s value.',
          where: [{ sym: 's(z)', def: 'the probability of shooting from zone z' }, { sym: 'g(z)', def: 'the probability of scoring from a shot in z (an xG average)' }, { sym: 'm(z)', def: 'the probability of moving the ball instead' }, { sym: 'T(z\\to z\')', def: 'the probability that a move from z ends in z\'' }],
          syntax: [{ sym: 'm(z)\\sum T\\,xT', say: 'the value of the move option. Effect: zones near the goal are worth more, and zones that lead to those zones inherit part of that value. Why: possession valuable now is valuable if it can be moved to a better place.' }],
          worked: {
            title: 'A pass that adds threat',
            steps: ['Suppose the zone around the centre circle is worth xT = 0.008 and a zone at the edge of the box is worth 0.050.', 'A pass from one to the other earns 0.050 − 0.008 = 0.042 xT.', 'Summed over a match, a team’s xT shows how often it moved the ball to dangerous places, not only whether it shot.'],
            answer: 'xT is a way to value passing and dribbling. The published method (Karun Singh, 2019) used a 16×12 grid and iterated until the values converged; the lab above uses a simpler illustration.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Progressive pass', tag: 'raw count', body: 'A pass that moves the ball a certain distance closer to the opponent’s goal (the exact threshold varies by data provider).' },
            { title: 'Progressive carry', tag: 'dribbling', body: 'A run with the ball that moves it significantly towards goal; a sign of a player who breaks lines by carrying.' },
            { title: 'Line-breaking pass', tag: 'tracking data', body: 'A pass that bypasses a line of opponents; needs tracking data to identify.' },
            { title: 'Pass completion above expectation', tag: 'model-based', body: 'Pass completion compared with the model’s expected completion for the difficulty of the pass.' },
          ],
        },
      ],
    },
    {
      id: 'press',
      title: 'Pressing, space and possession value',
      lead: 'Beyond the ball.',
      blocks: [
        { t: 'ftbl-viz', viz: 'pressing-lab' },
        { t: 'ftbl-viz', viz: 'pitch-control' },
        {
          t: 'p',
          text: '**PPDA** was proposed by Colin Trainor in 2014 as a pressing measure from event data. **Pitch control** comes from tracking data: William Spearman’s 2018 paper "Beyond Expected Goals" modelled the probability that each team controls each point, and **pitch value** (the probability of scoring if one controlled it). Combining control and value gives space-based measures of attacking threat. **Possession-value models** such as VAEP (Decroos and colleagues, 2019) and EPV (Fernández, Bornn and Cervone, 2019) value every action by how it changes the chances of scoring and conceding in the next moments.',
        },
        {
          t: 'dodont',
          do: ['Use xT and progressive actions to compare how teams create, not just how many shots they take', 'Interpret PPDA against the team’s style and the opponent’s', 'Use tracking-data metrics where available, and recognise that they are model-based'],
          dont: ['Treat a pass’s xT as a measure of its difficulty or intent', 'Compare PPDA across leagues without checking how the data are defined', 'Rank players by a single value metric: they are noisy and depend on role'],
        },
      ],
    },
  ],
  sources: [
    'Singh, K. (2019). Introducing expected threat (xT). karun.in/blog.',
    'Spearman, W. (2018). Beyond expected goals. *MIT Sloan Sports Analytics Conference* (research paper).',
    'Decroos, T., Bransen, L., Van Haaren, J. & Davis, J. (2019). Actions speak louder than goals: valuing player actions in soccer. *KDD ’19*.',
    'Fernández, J., Bornn, L. & Cervone, D. (2021). A framework for the fine-grained evaluation of the instantaneous expected value of soccer possessions. *Machine Learning*, 110.',
    'Trainor, C. (2014). Pressing intensity and PPDA, StatsBomb and Cartilage Free Captain posts.',
  ],
  related: ['sports/football/xg/xg-basics', 'sports/football/tactics/pressing-and-gegenpressing', 'sports/football/passing/passing-networks'],
}

export default guide
