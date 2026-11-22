import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In a lecture you have to listen, understand, decide what matters and write, all at once, at the speaker’s pace. A little preparation, a few shortcuts and a quick review afterwards make lecture notes far more useful.',
  nutshell: [
    '**Before**: skim the reading or slides so you know the structure and key terms.',
    '**During**: listen for signals of importance; write main ideas and examples in your own words; use abbreviations.',
    '**After**: within a day, fill gaps, add questions and summarise.',
    'Laptop or pen? Evidence is mixed. What matters more is avoiding verbatim typing and distractions.',
  ],
  sections: [
    {
      id: 'before',
      title: 'Before the lecture',
      blocks: [
        {
          t: 'list',
          items: [
            'Skim the assigned reading or slides: headings, key terms, diagrams.',
            'Review your notes from the last lecture for five minutes.',
            'Write the date, topic and any questions you hope will be answered.',
            'If slides are shared, print or open them so you can annotate instead of copying.',
          ],
        },
      ],
    },
    {
      id: 'during',
      title: 'During the lecture',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Listen for signals', body: '"The key point is…", "There are three reasons…", "This will be on the exam", repetition, slowing down, writing on the board.' },
            { title: 'Capture structure', body: 'Headings and numbered lists as the lecturer moves between points.' },
            { title: 'Write examples', body: 'Examples are often what makes a concept click later. Note them briefly.' },
            { title: 'Mark confusion', body: 'A "?" in the margin next to anything you did not follow. Ask or check afterwards.' },
          ],
        },
        {
          t: 'table',
          head: ['Symbol', 'Meaning'],
          rows: [
            ['→', 'leads to, causes'],
            ['←', 'caused by'],
            ['↑ ↓', 'increase, decrease'],
            ['∴', 'therefore'],
            ['∵', 'because'],
            ['≈', 'approximately'],
            ['e.g. / i.e.', 'for example / that is'],
            ['w/ · w/o', 'with · without'],
            ['★', 'important'],
          ],
          caption: 'Build your own shorthand and use it consistently.',
        },
      ],
    },
    {
      id: 'laptop',
      title: 'Laptop or pen?',
      blocks: [
        {
          t: 'p',
          text: 'A widely reported study (Mueller & Oppenheimer, 2014) found that students taking notes on laptops wrote more verbatim and did worse on conceptual questions than those writing by hand. Later replications, however, found smaller or no differences (Morehead, Dunlosky & Rawson, 2019; Urry et al., 2021). The safest conclusion: **how** you take notes matters more than the tool.',
        },
        {
          t: 'dodont',
          do: [
            'Summarise in your own words, whichever tool you use.',
            'Close other tabs, turn off notifications, or use full-screen mode.',
            'Use the tool that lets you review and organise your notes best.',
          ],
          dont: [
            'Type everything verbatim because you can.',
            'Browse or message during lectures; it hurts your learning and distracts people near you (Sana, Weston & Cepeda, 2013).',
          ],
        },
      ],
    },
    {
      id: 'after',
      title: 'After the lecture',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Within 24 hours, review', body: 'Read through, fix unclear bits, fill gaps from slides or a friend.' },
            { title: 'Add questions', body: 'Write cue questions in the margin ([Cornell style](@note-taking/methods/cornell)).' },
            { title: 'Summarise', body: 'Three sentences on what the lecture was about.' },
            { title: 'Resolve the "?"s', body: 'Check the textbook, ask a classmate, or bring them to office hours.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Mueller, P. A., & Oppenheimer, D. M. (2014). The pen is mightier than the keyboard: Advantages of longhand over laptop note taking. *Psychological Science, 25*(6), 1159–1168.',
    'Morehead, K., Dunlosky, J., & Rawson, K. A. (2019). How much mightier is the pen than the keyboard for note-taking? A replication and extension of Mueller and Oppenheimer (2014). *Educational Psychology Review, 31*(3), 753–780.',
    'Urry, H. L., et al. (2021). Don’t ditch the laptop just yet: A direct replication of Mueller and Oppenheimer’s (2014) Study 1 plus mini meta-analyses across similar studies. *Psychological Science, 32*(3), 326–339.',
    'Sana, F., Weston, T., & Cepeda, N. J. (2013). Laptop multitasking hinders classroom learning for both users and nearby peers. *Computers & Education, 62*, 24–31.',
  ],
  related: ['note-taking/methods/cornell', 'note-taking/situations/review', 'habits/focus'],
}

export default guide
