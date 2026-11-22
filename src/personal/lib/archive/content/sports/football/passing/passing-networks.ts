import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'If you draw a dot at the average position of each player and a line between two players for each pass they exchange, with the line’s thickness showing how often, you get a passing network. It is a map of how a team moves the ball. Networks show who is the hub of the passing, whether the team plays down the middle or down the flanks, whether the defence is connected to the attack, and how the picture changes when a player is sent off or a coach changes the tactic. This guide explains how to read a network, the simple measures (degree and centrality) that summarise it, and uses a live lab to show how style changes its shape.',
  nutshell: [
    'A **passing network** has **nodes** (players at their average positions) and **links** (the passes between them, thicker for more).',
    '**Degree** counts a player’s passes (sent plus received); **centrality** shows how important he is to the flow; a high-centrality pivot is the hub.',
    'The **shape** shows the style: dense links between nearby players mean short passing; long thin links mean direct play.',
    '**Weak points**: a player with high centrality is a pressing target; a gap in the network shows disconnected lines (a "hole" between defence and midfield).',
    'Networks are **averages over a match or season**: they hide the sequence and timing of passes.',
  ],
  sections: [
    {
      id: 'read',
      title: 'Reading a network',
      lead: 'Dots, lines and what they mean.',
      blocks: [
        { t: 'ftbl-viz', viz: 'passing-network' },
        {
          t: 'table',
          head: ['Feature', 'What it suggests'],
          rows: [
            ['Thick links among the back four and pivot', 'A team that builds patiently from the back'],
            ['Few links between defenders and forwards', 'A direct team, or one whose midfield is bypassed'],
            ['A large central node', 'A deep playmaker or pivot who touches the ball a lot (Busquets, Pirlo)'],
            ['Thick links down one flank', 'A team that attacks mainly on that side'],
            ['Isolated forward', 'A striker not involved in build-up: starved of service, or a poacher by design'],
          ],
        },
      ],
    },
    {
      id: 'maths',
      title: 'Measuring the network',
      lead: 'Degree and centrality.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`k_i=\sum_j (w_{ij}+w_{ji}),\qquad C_i=\frac{k_i}{2W},\qquad W=\sum_{i,j} w_{ij}`,
          caption: 'Weighted degree and centrality for player i in a passing network with pass counts w_ij.',
          where: [{ sym: 'w_{ij}', def: 'the number of passes from player i to player j' }, { sym: 'k_i', def: 'the weighted degree: passes sent plus passes received by i' }, { sym: 'W', def: 'the total number of passes' }, { sym: 'C_i', def: 'the share of all pass endpoints that involve player i' }],
          syntax: [{ sym: 'k_i/(2W)', say: 'the share of the total passing involving i. Effect: every pass has two ends, so the shares across the team sum to 1. Why: dividing by 2W normalises for the number of passes in the match.' }],
          worked: {
            title: 'A pivot in a 600-pass match',
            steps: ['The team completes W = 600 passes, so there are 1,200 pass endpoints.', 'The pivot sends 175 and receives 180 passes: k = 355.', 'Centrality = 355/1,200 = 29.6%.'],
            answer: 'Nearly a third of the team’s passing involves the pivot. A coach who sees this knows the opponent’s plan is to press him; a team that depends on one hub is vulnerable if he is marked or injured.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Betweenness', tag: 'a hub measure', body: 'How often a player lies on the shortest path between two others: a pivot between defence and attack has high betweenness.' },
            { title: 'Clustering', tag: 'triangles', body: 'The share of a player’s neighbours who also pass to each other: high clustering means many triangles.' },
            { title: 'Density', tag: 'connectedness', body: 'The fraction of possible links that are actually used; positional teams have denser networks.' },
            { title: 'Network change', tag: 'over a match', body: 'Compare networks before and after a substitution or red card to see how the team’s structure changed.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'A caution', text: 'Passing networks show who passes to whom, not whether the passes were useful. A team can have a dense, elegant network and create few chances. Combine with xG, xT and shot maps for the whole picture.' },
      ],
    },
  ],
  sources: [
    'Gudmundsson, J. & Horton, M. (2017). Spatio-temporal analysis of team sports. *ACM Computing Surveys*, 50(2).',
    'Buldú, J. M., Busquets, J., Echegoyen, I. & Seirul·lo, F. (2019). Defining a historic football team: using network science to analyze Guardiola’s FC Barcelona. *Scientific Reports*, 9, 13602.',
    'Duch, J., Waitzman, J. S. & Amaral, L. A. N. (2010). Quantifying the performance of individual players in a team activity. *PLoS ONE*, 5(6), e10937.',
  ],
  related: ['sports/football/passing/possession-versus-directness', 'sports/football/xg/beyond-xg', 'sports/football/passing/passing-geometry'],
}

export default guide
