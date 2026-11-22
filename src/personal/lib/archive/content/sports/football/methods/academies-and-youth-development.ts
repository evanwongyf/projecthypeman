import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A club’s style begins in its academy. Ajax’s school, La Masia at Barcelona, France’s Clairefontaine, the German academies created after 2000 and England’s Elite Player Performance Plan (EPPP) each embody a theory of how young players learn. The Dutch teach technique, insight and personality early; Spain teaches positional play through rondos; Germany stresses tactical education and athletic readiness; England’s system after 2012 placed large academies in the hands of Premier League clubs. This guide compares the main systems, what each exports to the first team, and the evidence on what matters most: the number of hours spent in play, the age of early specialisation and the relative age effect.',
  nutshell: [
    '**Ajax**: the **TIPS** model (Technique, Insight, Communication, Personality, Speed) from Cruyff’s idea of coaching; the club exports players and style.',
    '**La Masia** (Barcelona): lodging and education plus training in the first-team style; produced Xavi, Iniesta, Messi (arrived at 13) and many others.',
    '**Germany** after Euro 2000: a compulsory academy for each Bundesliga club and a national network of talent centres; the 2014 World Cup was the result.',
    '**England’s EPPP (2012)**: categories (1 to 4) for academies by facilities and funding; a focus on elite pathways, criticised for the limited number of players who reach the first team.',
    'Research on **relative age effect** shows that players born early in the selection year are over-represented in academies.',
  ],
  sections: [
    {
      id: 'systems',
      title: 'The main systems',
      lead: 'Four approaches to a similar problem.',
      blocks: [
        {
          t: 'table',
          head: ['System', 'Idea', 'Strengths', 'Criticisms'],
          rows: [
            ['Ajax (Netherlands)', 'TIPS: Technique, Insight, Communication, Personality, Speed; clubs play the same system at every age', 'A consistent style; many exports', 'Smaller domestic market; players leave young'],
            ['La Masia (Spain)', 'Positional play from age 8; rondos; residence for talented youngsters', 'Xavi, Iniesta, Busquets, Messi; a common playing identity', 'Fewer graduates in recent years; a high cost'],
            ['Clairefontaine (France)', 'A national training centre for the best 13- to 15-year-olds', 'Henry, Anelka, Mbappé; strong results from 1998', 'Selection at an early age'],
            ['Germany post-2000', 'Academy for every professional club; talent centres', 'The 2014 World Cup squad; a broad base of players', 'High costs; dependence on foreign players for the first team in some clubs'],
            ['England EPPP (2012)', 'Four categories of academy; more contact hours for the best', 'Better facilities and coaching', 'Few players reach the first team; a focus on buying players from other clubs'],
          ],
        },
        { t: 'cards', cols: 2, items: [
          { title: 'TIPS', tag: 'Ajax', body: 'Technique, Insight (game understanding), Communication, Personality and Speed: the five qualities Ajax uses to assess young players.' },
          { title: 'The 3 Ms', tag: 'La Masia', body: 'The method of teaching: small-sided games, rondos and positional games in the first-team style, from the youngest ages.' },
          { title: 'Talent centres', tag: 'Germany', body: 'Hundreds of regional centres feed the clubs; coaches are trained to the DFB’s licences.' },
          { title: 'Category system', tag: 'England', body: 'Category 1 academies receive the most funding and must provide the most hours and the best facilities.' },
        ] },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      lead: 'Hours, specialisation and birth dates.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Relative age effect', tag: 'selection bias', body: 'Players born in the first months of the selection year are older and bigger, and are over-represented in academies; later-born talents are missed. Some clubs now select by maturity.' },
            { title: 'Deliberate play', tag: 'hours', body: 'Studies of elite players find many hours of unstructured play in childhood; informal games develop skill and creativity as well as structured practice.' },
            { title: 'Early specialisation', tag: 'debated', body: 'Evidence from several sports suggests that sampling several activities in childhood, with specialisation later, is associated with fewer injuries and longer careers, though football’s early-start culture is strong.' },
            { title: 'The pathway’s leaks', tag: 'dropout', body: 'Only a small fraction of academy players reach the first team; the club’s duty to those who do not (education, release) is important.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A note on method', text: 'Studies of academy success are hard to interpret: clubs that select the best players will have the best players whatever the coaching. Try to find evidence that compares players with similar potential, or that follows the same players over time.' },
      ],
    },
  ],
  sources: [
    'Ericsson, K. A., Krampe, R. & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. *Psychological Review*, 100(3), 363–406.',
    'Cobley, S., Baker, J., Wattie, N. & McKenna, J. (2009). Annual age-grouping and athlete development: a meta-analytical review of relative age effects in sport. *Sports Medicine*, 39(3), 235–256.',
    'Honigstein, R. (2015). *Das Reboot*. Yellow Jersey Press; Premier League EPPP documents (premierleague.com).',
    'Ajax and FC Barcelona official academy descriptions (ajax.nl; fcbarcelona.com).',
  ],
  related: ['sports/football/schools/total-football-and-ajax', 'sports/football/methods/rondos-and-positional-games', 'sports/football/methods/scouting-and-analysis'],
}

export default guide
