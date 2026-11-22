import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'David Keirsey grouped the sixteen types into four temperaments, echoing an idea that goes back to the ancient Greek four humours. Each temperament shares a core need, a set of values and a way of talking. Many people find temperament the most useful level of type: fewer categories, clearer contrasts.',
  sections: [
    {
      id: 'four',
      title: 'The four temperaments',
      blocks: [
        { t: 'table', head: ['', 'Rationals (NT)', 'Idealists (NF)', 'Guardians (SJ)', 'Artisans (SP)'], rows: [
          ['Types', 'INTJ, INTP, ENTJ, ENTP', 'INFJ, INFP, ENFJ, ENFP', 'ISTJ, ISFJ, ESTJ, ESFJ', 'ISTP, ISFP, ESTP, ESFP'],
          ['Core need', 'Competence, mastery, understanding', 'Meaning, identity, authenticity', 'Belonging, responsibility, security', 'Freedom, action, impact'],
          ['Values', 'Logic, knowledge, innovation', 'Growth, harmony, ideals', 'Duty, tradition, stability', 'Skill, excitement, spontaneity'],
          ['Talks about', 'Ideas, systems, strategy', 'People, values, possibilities', 'Facts, duties, experience', 'Things, actions, what is happening'],
          ['Fears', 'Incompetence, being foolish', 'Meaninglessness, insincerity', 'Chaos, irresponsibility', 'Boredom, constraint'],
          ['Share of population (US)', 'about 10%', 'about 15%', 'about 45%', 'about 30%'],
          ['Leadership style', 'Visionary, strategic', 'Inspiring, developmental', 'Stabilising, procedural', 'Tactical, troubleshooting'],
        ] },
        { t: 'callout', tone: 'note', title: 'Population figures', text: 'Shares come from the MBTI Manual’s US national sample and vary by country and source. Intuitive temperaments are heavily over-represented in online communities and among people who read about type.' },
      ],
    },
    {
      id: 'misread',
      title: 'How they misread each other',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Rationals see…', body: 'Idealists as too emotional, Guardians as rigid rule-followers, Artisans as impulsive.' },
          { title: 'Idealists see…', body: 'Rationals as cold, Guardians as conventional, Artisans as shallow.' },
          { title: 'Guardians see…', body: 'Rationals as arrogant rule-breakers, Idealists as unrealistic, Artisans as irresponsible.' },
          { title: 'Artisans see…', body: 'Rationals as dull theorists, Idealists as over-serious, Guardians as boring and controlling.' },
        ] },
      ],
    },
  ],
  sources: ['Keirsey, D. & Bates, M. (1978). Please Understand Me. Prometheus Nemesis.', 'Keirsey, D. (1998). Please Understand Me II.', 'Myers, I. B. et al. (1998). MBTI Manual (3rd ed.).'],
  related: ['personality/compatibility/temperament-pairs'],
}

export default guide
