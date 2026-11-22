import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'At the top of competitive Tetris, play is built around three ideas: openers that set up a strong attack from the first pieces, a steady middle game that keeps the stack clean, and the judgment to know when to attack and when to defend. This guide explains each idea in general terms. It does not try to reproduce a catalogue of named setups, because the best way to learn those is to watch them played and practise them with a trainer.',
  nutshell: [
    'An **opener** is a memorised pattern for the first pieces that uses the known first bag to build a spin or other strong setup early.',
    'Well-known families of setups include the **DT cannon** (a T-spin double followed by a T-spin triple, repeating), the **TKI** and others. Names and details vary between communities.',
    '**Downstacking** (digging out after garbage) is a core skill: clear garbage cleanly without making your own holes.',
    'Strategy is a balance: **attack when you have a safe lead, defend when you are under pressure.**',
    'Learn the ideas first. Then learn a single setup well, rather than many badly.',
  ],
  sections: [
    {
      id: 'openers',
      title: 'What an opener is',
      blocks: [
        { t: 'p', text: 'Because the 7-bag tells you exactly which pieces the first bag contains, you can plan the very first placements in advance. An **opener** is a planned order of placements for those early pieces that results in a stack with a ready T-spin slot, a well, or another powerful shape. Players practise openers until the early moves are automatic.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'The first bag is known', body: 'You get all seven pieces in the first bag, so you can plan how they fit together.' },
            { tag: 'Idea', title: 'Hold and the queue', body: 'Hold lets you reorder one piece. The next queue shows what is coming, so the plan can adapt.' },
            { tag: 'Aim', title: 'A spin ready to fire', body: 'A good opener leaves a T-spin double slot, or a double-triple setup, ready for the first T.' },
            { tag: 'Aim', title: 'A stable stack', body: 'It should also leave a clean surface, so that a bad second bag cannot ruin it.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Names differ', text: 'Openers have community names such as the DT cannon, TKI and others. Different groups describe them slightly differently, so use a trainer or a recent guide from the community of the game you play, and treat exact piece orders as something to verify.' },
      ],
    },
    {
      id: 'dt',
      title: 'The double-triple idea',
      blocks: [
        { t: 'p', text: 'A **double-triple** setup is built so that a T-spin double leaves the board in just the right shape for a T-spin triple, and then the triple leaves it ready for another double. Because T-spin doubles and triples both count for back-to-back, a long chain gives a stream of attack from a small number of pieces. You have already seen the double and the triple in the T-spin guide. The skill is in arranging the pieces so that one prepares the next.' },
        { t: 'links', items: [{ path: 'games/tetris/t-spins', note: 'The double and the triple, step by step' }] },
      ],
    },
    {
      id: 'downstack',
      title: 'Downstacking and garbage',
      blocks: [
        { t: 'p', text: 'In versus play, garbage rows arrive at the bottom of your stack, each with one gap. Dealing with them is called **downstacking**. The aim is to clear the garbage while keeping your own stack clean.' },
        {
          t: 'list',
          items: [
            'Look for the **columns where the gaps line up**. A line of aligned gaps is easy to clear with an upright I or J/L.',
            'Fill from the **gap upwards**, not over the top of it.',
            'Keep the surface **flat on the other side** so you are not making new holes.',
            'Garbage often arrives **when you clear lines**: sending attack can cancel incoming garbage, which is a reason to keep clearing.',
            'If the stack is dangerously high, **survive first**. Take any safe clear.',
          ],
        },
      ],
    },
    {
      id: 'decisions',
      title: 'Deciding what to do next',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Sensible response'],
          rows: [
            ['Your stack is low and clean, and the opponent’s is high', 'Attack: build a Tetris or spin and send it'],
            ['Your stack is high, and garbage is coming', 'Defend: clear lines to cancel, simplify the stack'],
            ['Both stacks are low', 'Build: prepare a strong setup safely'],
            ['You have a T-spin slot and a T is coming', 'Fire the spin if it is safe'],
            ['No good piece for your plan', 'Switch plans. Do not force a setup that has failed'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Is my stack safe? If not, survive.',
            'What is the next piece, and what is in hold?',
            'What will the opponent’s garbage do to me if I wait?',
            'Can I clear without making a hole?',
            'Am I attacking because it is good, or because I planned it and cannot let go?',
          ],
        },
      ],
    },
    {
      id: 'learning',
      title: 'How to learn the advanced game',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Master clean stacking and one well', body: 'Without this, nothing else works.' },
            { title: 'Learn the T-spin double slot', body: 'Build it by hand until you can recognise it quickly.' },
            { title: 'Learn one opener well', body: 'Use a trainer or practice mode to repeat the same first bag until it is automatic.' },
            { title: 'Add combos and downstacking', body: 'These are the skills that keep you alive in versus play.' },
            { title: 'Review replays', body: 'Watch your own games and strong players’ games. Ask why they placed each piece.' },
          ],
        },
        { t: 'links', items: [{ path: 'games/tetris/basics', note: 'Back to the basics' }, { path: 'games/tetris/speed-and-finesse', note: 'Speed and finesse' }] },
      ],
    },
  ],
  sources: [
    'Tetris Wiki. “Opener”, “DT Cannon” and “Downstacking” entries.',
    'Hard Drop community wiki. T-spin setup guides.',
    'Community training tools for guideline-style Tetris (opener trainers).',
  ],
  related: ['games/tetris/t-spins', 'games/tetris/speed-and-finesse', 'games/tetris/attack-and-scoring'],
}

export default guide
