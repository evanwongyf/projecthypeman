import type { Guide } from '../../../../guide'
import { a, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'A formation is a team’s starting shape, written from the back: 4-4-2, 4-3-3, 3-5-2. It is the most visible and the least informative part of tactics: two teams listed as 4-3-3 can play opposite games, and one team changes shape many times in a match. A formation is better read as a set of defensive responsibilities (who covers which zone) and attacking relationships (who offers which angle). This guide explores twelve formations in a lab, shows the typical change between the shape out of possession and in possession, and sets out how formations match up against one another.',
  nutshell: [
    'A formation counts **players by line** from defence to attack; it ignores the goalkeeper and says nothing about movement.',
    'Most teams have **two shapes**: one **in possession** (often 3-2-5 or 2-3-5 variants) and one **out of possession** (4-4-2, 4-5-1, 5-4-1).',
    'A formation creates **numerical matchups**: three midfielders against two give an extra player in the centre; a back three against two strikers gives a spare defender.',
    'Formations are fashions: **2-3-5** (1900s), **WM** (1930s), **4-2-4** (1950s), **4-4-2** (1960s–2000s), **4-2-3-1** and **4-3-3** (2000s–2010s), **back threes and 3-2-5 hybrids** (2010s onward).',
    'The best question to ask is not "which formation?" but "**where are the free players, and where are the opponents’ gaps?**"',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The formation lab',
      lead: 'Twelve shapes and their matchups.',
      blocks: [
        { t: 'ftbl-viz', viz: 'formation-lab' },
        {
          t: 'table',
          head: ['Era', 'Dominant shapes', 'Why'],
          rows: [
            ['1880s–1920s', '2-3-5 (the pyramid)', 'Attack-minded; the offside law needed three opponents between the attacker and goal'],
            ['1925–1950s', 'WM (3-2-2-3)', 'The 1925 offside change to two opponents exposed the pyramid; Chapman’s Arsenal added a centre-half'],
            ['1950s–60s', '4-2-4, 4-3-3', 'Brazil’s 1958 shape; more midfield and more defenders'],
            ['1960s–2000s', '4-4-2, catenaccio variants', 'Balance, width and compactness; Sacchi’s Milan and Ferguson’s United'],
            ['2000s–2010s', '4-2-3-1, 4-3-3', 'Double pivot and a ten, or a midfield triangle; Spain, Bayern and Mourinho’s teams'],
            ['2010s–2020s', '3-4-3, 3-5-2, 3-2-4-1 hybrids', 'Back threes, wing-backs and in-possession shapes that differ from the out-of-possession shape'],
          ],
        },
      ],
    },
    {
      id: 'phases',
      title: 'Two shapes in one team',
      lead: 'Out of possession and in possession.',
      blocks: [
        {
          t: 'pitch',
          title: 'A 4-3-3 in possession becomes a 3-2-5',
          view: 'full',
          players: [
            { x: 6, y: 50, team: 'gk' },
            a(26, 28, 'CB'),
            a(24, 50, 'CB'),
            a(26, 72, 'CB'),
            a(42, 38, '6'),
            a(42, 62, '8'),
            a(64, 6, 'W'),
            a(66, 28, '10'),
            a(70, 50, '9'),
            a(66, 72, '8'),
            a(64, 94, 'W'),
          ],
          caption: 'In possession the right-back joins the centre-backs to form a back three, two midfielders sit in front of them and five attackers occupy the five lanes: a 3-2-5. Out of possession the team drops into a 4-3-3 or 4-5-1.',
        },
        {
          t: 'pitch',
          title: 'A 4-4-2 out of possession: two compact banks',
          view: 'full',
          players: shape([4, 4, 2], { shift: -12 }),
          caption: 'Two banks of four and two strikers: compact, easy to organise and hard to play through if the lines stay close.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The shape on the team sheet', tag: 'a label', body: 'Often the starting arrangement or what a broadcaster shows: it can differ from how the team really plays.' },
            { title: 'The shape out of possession', tag: 'defending', body: 'Describes the block: how many lines and how the wide players behave; often more revealing than the nominal formation.' },
            { title: 'The shape in possession', tag: 'attacking', body: 'How the team occupies the five lanes: whether full-backs go high or tuck in, whether a defender joins midfield.' },
            { title: 'Roles and rotations', tag: 'movement', body: 'Players swap, drop and drift: the formation is only a starting point.' },
          ],
        },
      ],
    },
    {
      id: 'matchups',
      title: 'Matchups: where the numbers fall',
      lead: 'Every formation has an advantage somewhere.',
      blocks: [
        {
          t: 'pitch',
          title: '4-3-3 against 4-4-2: three midfielders against two',
          view: 'full',
          players: [...shape([4, 3, 3], { shift: 0 }), ...shape([4, 4, 2], { team: 'b', mirror: true, gk: false })],
          zones: [{ x: 36, y: 20, w: 28, h: 60, label: 'centre: 3 v 2', tone: 'hot' }],
          caption: 'The 4-3-3 team has an extra player in the centre; the 4-4-2 team has two wingers against two full-backs and two strikers against two centre-backs, so it must stay compact and win the second balls.',
        },
        {
          t: 'table',
          head: ['Matchup', 'Who gains', 'Typical response'],
          rows: [
            ['4-3-3 v 4-4-2', 'Midfield 3 v 2', '4-4-2 narrows the wingers and presses the pivot with one striker'],
            ['3-5-2 v 4-4-2', 'Extra centre-back and midfielder; wing-backs v full-backs', '4-4-2 drops wingers back and uses full-backs to defend high'],
            ['3-4-3 v 4-3-3', 'Wide: wing-backs and wide forwards against full-backs', '4-3-3 narrows and presses the three centre-backs'],
            ['4-2-3-1 v 4-3-3', 'Number 10 between the lines v the single pivot', '4-3-3 drops an eight to help the pivot'],
            ['5-3-2 v 4-3-3', 'Depth: five defenders v three forwards', '4-3-3 pulls the wings wide to stretch the five'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Matchups are not destiny', text: 'A numerical advantage in one zone is useful only if the team has the movement and passing to use it. The usual response to an overload is a tweak in shape or pressing trigger, not a change of formation.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Bangsbo, J. & Peitersen, B. (2000). *Soccer Systems and Strategies*. Human Kinetics.',
    'Spielverlagerung.com: tactical analyses of formations and matchups (spielverlagerung.com).',
    'UEFA Technical Reports on the Champions League and the European Championship (uefa.com).',
  ],
  related: ['sports/football/game/phases-of-play', 'sports/football/tactics/pressing-and-gegenpressing', 'sports/football/tactics/back-three-and-wing-backs'],
}

export default guide
