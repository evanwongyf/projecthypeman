import type { ArchiveNode } from '../topics'

// Card games and Mahjong: the complete rules of blackjack, poker and Mahjong, then the
// probability, combinatorics and game theory that explain why the "correct" play is
// correct, basic strategy, card counting, pot odds, GTO bluffing frequencies, and
// Mahjong's winning shapes and scoring. Written for someone who has never played any of
// these games, through to the statistics that separate a casual player from a strong one.

export const GAMES: ArchiveNode = {
  slug: 'games',
  title: 'Games & puzzles',
  blurb: 'The full rules of blackjack, poker and Mahjong, and the maths that explains how to play them well, plus Tetris: stacking, T-spins, combos and advanced technique, with board diagrams you can step through, and a Clash Royale strategy shelf with its own card browser, deck builder and battle sandbox.',
  glyph: '♠',
  color: 'color-mix(in srgb, var(--pink) 55%, var(--mustard))',
  tags: ['games', 'tetris', 'puzzle', 't-spin', 'blackjack', 'poker', 'mahjong', 'cards', 'probability', 'gambling', 'strategy', 'odds', 'game theory', 'clash royale'],
  children: [
    {
      slug: 'start-here',
      title: 'Start here',
      blurb: 'What is on this shelf, and a route through the rules and the maths behind them.',
      minutes: 5,
      glyph: '★',
      tags: ['beginner', 'overview', 'roadmap'],
    },
    {
      slug: 'tetris',
      title: 'Tetris',
      blurb: 'How the pieces rotate, how to stack without holes, T-spins and other spins, combos and back-to-back, and the speed and strategy of competitive play, with board diagrams you can step through.',
      glyph: '▦',
      tags: ['tetris', 'puzzle', 't-spin', 'tspin', 'stacking', 'combo', 'perfect clear', 'finesse', 'srs', 'garbage', 'versus'],
      children: [
        { slug: 'basics', title: 'Tetris basics: pieces, rotation and controls', blurb: 'The seven pieces, how they rotate, the controls (drop, hold, next queue, lock delay) and the 7-bag that decides what comes next.', minutes: 10, tags: ['pieces', 'tetromino', 'rotation', 'controls', 'hold', '7-bag'] },
        { slug: 'stacking', title: 'Stacking cleanly: surface, holes and wells', blurb: 'Why a flat surface wins, how holes form and why they cost so much, and how to build and use a well for a four-line Tetris.', minutes: 11, tags: ['stacking', 'holes', 'well', 'surface', 'tetris clear'] },
        { slug: 't-spins', title: 'T-spins: single, double, triple and mini', blurb: 'What counts as a T-spin, how to spot and build a slot, and step-through boards for the double, single, triple and mini.', minutes: 14, tags: ['t-spin', 'tsd', 'tst', 'mini', 'overhang', 'wall kick'] },
        { slug: 'attack-and-scoring', title: 'Clears, combos, back-to-back and perfect clears', blurb: 'The scoring table, how combos and back-to-back chains work, what a perfect clear is, and how clears turn into attack in versus play.', minutes: 11, tags: ['scoring', 'combo', 'back-to-back', 'perfect clear', 'garbage', 'attack'] },
        { slug: 'speed-and-finesse', title: 'Speed, finesse and practice', blurb: 'DAS and ARR, finesse (fewest key presses), pieces per second, the settings that matter and a practice routine that builds speed without bad habits.', minutes: 10, tags: ['das', 'arr', 'finesse', 'pps', 'speed', 'practice'] },
        { slug: 'openers-and-strategy', title: 'Openers and advanced strategy', blurb: 'Why openers exist, the idea behind the well-known T-spin setups, downstacking, garbage handling and how strong players decide what to do next.', minutes: 12, tags: ['opener', 'dt cannon', 'tki', 'downstack', 'garbage', 'strategy', 'versus'] },
      ],
    },
    {
      slug: 'blackjack',
      title: 'Blackjack',
      blurb: 'Every rule and variant, the basic strategy chart, the probability behind it, and how card counting shifts the odds.',
      glyph: '♣',
      tags: ['blackjack', '21', 'casino', 'card counting'],
      children: [
        { slug: 'rules-and-variants', title: 'Rules, every variant, and how to win', blurb: 'The complete rules of blackjack: dealing, hitting, standing, doubling, splitting, insurance, and every winning and losing condition, plus how Spanish 21, Double Exposure and other variants differ.', minutes: 10, tags: ['rules', 'variants', 'winning conditions'] },
        { slug: 'basic-strategy', title: 'Basic strategy: the mathematically correct play', blurb: 'The full basic strategy chart for every hand and dealer upcard, how it is derived, and why it is the single biggest edge any player can have.', minutes: 10, tags: ['strategy', 'chart', 'optimal play'] },
        { slug: 'probability-and-ev', title: 'The probability and house edge behind the rules', blurb: 'Why the dealer has an edge at all, how each rule variation shifts it, and the combinatorics behind bust probabilities and blackjack payouts.', minutes: 9, tags: ['probability', 'house edge', 'expected value', 'combinatorics'] },
        { slug: 'card-counting', title: 'Card counting: Hi-Lo, true count and betting spreads', blurb: 'How card counting actually works, the Hi-Lo system step by step, true count conversion, bet spreads, and why it is legal but unwelcome.', minutes: 9, tags: ['card counting', 'hi-lo', 'true count', 'advantage play'] },
      ],
    },
    {
      slug: 'poker',
      title: 'Poker',
      blurb: 'Hand rankings and rules, the major variants, pot odds and outs, bluffing game theory, and the variance that makes bankroll management essential.',
      glyph: '♦',
      tags: ['poker', "texas hold'em", 'omaha', 'game theory', 'pot odds'],
      children: [
        { slug: 'rules-and-hand-rankings', title: "Rules and hand rankings (Texas hold'em)", blurb: "The complete rules of Texas hold'em, blinds, betting rounds, the board, showdown, and every hand ranking from high card to royal flush with its exact odds.", minutes: 10, tags: ['rules', 'hand rankings', "texas hold'em"] },
        { slug: 'variants', title: 'Poker variants: Omaha, stud, razz and more', blurb: 'How Omaha, Omaha hi-lo, seven-card stud, razz, five-card draw and short-deck hold’em each change the rules and the hands worth playing.', minutes: 9, tags: ['variants', 'omaha', 'stud', 'razz'] },
        { slug: 'pot-odds-and-outs', title: 'Pot odds, outs and equity', blurb: 'Counting outs, the rule of 4 and 2, exact equity calculations, and comparing your odds against what the pot is offering to find a profitable call.', minutes: 9, tags: ['pot odds', 'outs', 'equity', 'probability'] },
        { slug: 'bluffing-and-game-theory', title: 'Bluffing frequency and game theory optimal play', blurb: 'The indifference principle behind GTO poker: why a balanced range of value bets and bluffs cannot be exploited, and the maths behind minimum defence frequency.', minutes: 9, tags: ['game theory', 'gto', 'bluffing', 'nash equilibrium'] },
        { slug: 'variance-and-bankroll', title: 'Variance, bankroll management and the Kelly criterion', blurb: 'Why poker results swing so widely even for a skilled player, how standard deviation and variance are measured in poker, and how the Kelly criterion sizes bets to survive the swings.', minutes: 9, tags: ['variance', 'bankroll', 'kelly criterion', 'standard deviation'] },
      ],
    },
    {
      slug: 'mahjong',
      title: 'Mahjong',
      blurb: 'The full tile set and turn structure, every winning hand shape and yaku, how scoring works, and the probability behind efficient play.',
      glyph: '🀄',
      tags: ['mahjong', 'riichi', 'tiles', 'yaku'],
      children: [
        { slug: 'rules-and-tiles', title: 'Rules, tiles and turn structure', blurb: 'The 136-tile set, how a hand is dealt, drawing and discarding, calling chi/pon/kan, and exactly what counts as a complete, winning hand.', minutes: 10, tags: ['rules', 'tiles', 'turn structure'] },
        { slug: 'winning-hands-and-yaku', title: 'Winning hands and yaku', blurb: "Every hand needs at least one yaku to win, the major yaku explained with examples, from tanyao and pinfu to the rare yakuman hands.", minutes: 10, tags: ['yaku', 'winning hands', 'hand patterns'] },
        { slug: 'scoring', title: 'Scoring: han, fu and points', blurb: 'How han (hand value) and fu (structural points) combine into a score, the scoring table up to mangan and beyond, and who pays whom.', minutes: 9, tags: ['scoring', 'han', 'fu', 'points'] },
        { slug: 'strategy-and-probability', title: 'Strategy, tile efficiency and probability', blurb: 'Shanten and tile efficiency (ukeire), reading discards for defence, and the probability behind drawing the tiles a hand still needs.', minutes: 9, tags: ['strategy', 'shanten', 'tile efficiency', 'probability'] },
      ],
    },
    {
      slug: 'clash-royale',
      title: 'Clash Royale',
      blurb: 'Elixir trading and the economy that decides every exchange, the major deck archetypes as a mindmap, popular decks with how to play them, a matchup/counter flowchart, and a glossary of card roles, plus a card browser, deck builder and real-time battle sandbox in the Relax area.',
      glyph: '👑',
      tags: ['clash royale', 'elixir', 'deck', 'archetype', 'matchup', 'counter', 'tower', 'push', 'cycle'],
      children: [
        { slug: 'start-here', title: 'Start here: what this shelf covers', blurb: 'A map of the strategy guides below, and where to find the card browser, deck builder and live battle sandbox.', minutes: 4, tags: ['beginner', 'overview', 'roadmap'] },
        { slug: 'elixir-and-economy', title: 'Elixir trading and the economy of every exchange', blurb: 'Why elixir, not cards, is the real currency of the game: positive and negative trades, double elixir, and the decisions that come from managing it.', minutes: 10, tags: ['elixir', 'trading', 'economy', 'double elixir'] },
        { slug: 'archetypes', title: 'Deck archetypes: cycle, beatdown, siege, bait, control, bridge spam', blurb: 'The six broad deck shapes almost every deck falls into, what each is trying to do, and the trade-offs between them, as a mindmap.', minutes: 9, tags: ['archetype', 'cycle', 'beatdown', 'siege', 'bait', 'control', 'bridge spam'] },
        { slug: 'popular-decks', title: 'Popular decks and how to play them', blurb: 'Eight well-known deck shapes, Hog Cycle, Golem Beatdown, Log Bait, X-Bow Siege, Giant Double Prince, Royal Giant Lightning, Lava Loon and Miner Poison Control, each with its win condition and game plan.', minutes: 12, tags: ['decks', 'hog cycle', 'golem', 'log bait', 'x-bow', 'lava hound', 'miner'] },
        { slug: 'matchups-and-counters', title: 'Countering common threats', blurb: 'A flowchart for what to do when a Hog Rider, a Giant push, a Balloon or a Goblin Barrel comes at your tower, and the cards that answer each cheaply.', minutes: 10, tags: ['counter', 'matchup', 'defence', 'flowchart'] },
        { slug: 'card-roles-glossary', title: 'Card roles glossary', blurb: 'What "win condition", "tank", "mini-tank", "support" and the other roles used throughout this shelf actually mean, with examples of each from the 120-card reference.', minutes: 8, tags: ['glossary', 'roles', 'win condition', 'tank', 'support'] },
      ],
    },
  ],
}
