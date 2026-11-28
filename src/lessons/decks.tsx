import type { ReactNode } from 'react'
import { Sprite, type SpriteName } from './pixel'
import { DotCard, NumCard, SpriteRow, TenFrame, type Scene } from './kit'
import { Story, Teach, Title } from './scenes'
import { CountTap, FlashDots, Gallery, MatchUp, MemoryPairs, MoneyMake, NumberTape, NumberTrain, TenFrameBuild } from './counting'
import { CardCompare, Conservation, MatchPairs, Quiz, SortBins, SpillCompare, WhichSet } from './comparing'

export type SlideDef = {
  id: string
  title: string
  /** Curriculum reference, e.g. "C1.1 · E3". */
  ref?: string
  notes?: string[]
  ask?: string[]
  /** Counts towards the score in a student package. */
  scored?: boolean
  render: () => ReactNode
}

export type DeckKind = 'class' | 'story' | 'student' | 'tool'

export type Deck = {
  id: string
  kind: DeckKind
  title: string
  blurb: string
  sections: string[]
  refs: string[]
  minutes: number
  cover: { scene: Scene; sprites: SpriteName[] }
  slides: SlideDef[]
}

export const CHAPTER = {
  id: 'p1-c1',
  level: 'Primary 1',
  title: 'Numbers to 10',
  sections: [
    { id: 'C1.1', name: 'Counting to tell how many (up to 10)' },
    { id: 'C1.2', name: 'Number notation and representations' },
    { id: 'C1.3', name: 'Reading and writing numerals and words' },
    { id: 'C1.4', name: 'Comparing numbers (up to 10)' },
    { id: 'C1.5', name: 'Patterns in number sequence' },
  ],
}

const note = (dollars: number) => (
  <div style={{ display: 'flex', gap: '0.4em', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '24em' }}>
    {[...Array(dollars)].map((_, i) => (
      <div key={i} className="lx-note">
        $1
      </div>
    ))}
  </div>
)

// ---------------------------------------------------------------------------
// Class deck 1: counting
// ---------------------------------------------------------------------------

const countDeck: Deck = {
  id: 'p1c1-count',
  kind: 'class',
  title: 'Pip’s Pond: Count All',
  blurb: 'Count objects one at a time, zero, the ten-frame, dollars to $10, and numbers that count versus numbers that name.',
  sections: ['C1.1', 'C1.2'],
  refs: ['R1', 'E3', 'E4', 'M15'],
  minutes: 40,
  cover: { scene: 'pond', sprites: ['pip', 'duck', 'duck', 'duck'] },
  slides: [
    {
      id: 'title',
      title: 'Title',
      render: () => <Title kicker="P1 · Numbers to 10 · Lesson 1" title="Pip’s Pond" sub="Let’s count all the things!" scene="pond" cast={[{ who: 'pip', x: 22 }, { who: 'bolt', x: 72, flip: true }]} />,
    },
    {
      id: 'story-1',
      title: 'Story: what can we count?',
      ref: 'C1.1 · R1',
      notes: ['Let students talk about the scene before any counting.', 'This is oral: students do not need to write numerals or words yet.'],
      ask: ['What do you see in the picture?', 'What are the different things we can count?', 'Who can count the ducks for us?'],
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'pip', x: 14 }, { who: 'bolt', x: 46 }, { who: 'jessie', x: 76, flip: true }]}
          props={[
            { sprite: 'butterfly', x: 30, y: 14, size: 2 },
            { sprite: 'butterfly', x: 40, y: 22, size: 1.8 },
            { sprite: 'butterfly', x: 50, y: 12, size: 2 },
            { sprite: 'duck', x: 30, y: 63, size: 2.4 },
            { sprite: 'duck', x: 57, y: 66, size: 2.4 },
            { sprite: 'duck', x: 64, y: 61, size: 2.4 },
          ]}
          lines={[
            { who: 'pip', text: 'Welcome to my pond! There are *so many* things to count here.' },
            { who: 'bolt', text: 'Beep boop! I am Bolt. My counting chip is brand new. Can you help me count?' },
            { who: 'jessie', text: 'What can we count? I can see ducks, butterflies… what else can you see?' },
            { who: 'pip', text: 'Let’s count *all* of them. One at a time!' },
          ]}
        />
      ),
    },
    {
      id: 'count-tap',
      title: 'Count all at the pond',
      ref: 'C1.1 · E3, E4',
      notes: ['Model counting one object at a time, stressing the last counting word: it tells how many.', 'Tapping an object twice gives a buzz: each object is counted once.', '“From the right” shows that counting in any order gives the same number.'],
      ask: ['How many ducks are there?', 'Let’s check if you are right. Let’s count all the ducks together.', 'Did we get the same number when we started from the other end?'],
      render: () => (
        <CountTap
          groups={[
            { sprite: 'duck', n: 3 },
            { sprite: 'butterfly', n: 5 },
            { sprite: 'fish', n: 4 },
            { sprite: 'ladybug', n: 7 },
            { sprite: 'flower', n: 9 },
          ]}
        />
      ),
    },
    {
      id: 'rules',
      title: 'How we count',
      ref: 'C1.1 · E3',
      notes: ['Press → to reveal each card.', 'Avoid the term “cardinal number”. Say “the last number tells us how many”.', 'If students lose track, cover each object with a magnetic counter as it is counted.'],
      render: () => (
        <Teach
          title="How we count"
          guide={{ who: 'bolt', text: 'Beep! Saving these rules to my chip!' }}
          cards={[
            {
              head: 'One number for each thing',
              body: 'Touch each thing and say one number.',
              visual: (
                <div style={{ display: 'flex', gap: '0.6em' }}>
                  {[1, 2, 3].map((n) => (
                    <span key={n} className="lx-set-thing">
                      <Sprite name="apple" size={2.6} />
                      <span className="lx-badge">{n}</span>
                    </span>
                  ))}
                </div>
              ),
            },
            { head: 'The last number tells how many', body: '1, 2, 3. There are 3 apples!', visual: <span className="lx-bignum-inline">3</span> },
            { head: 'Any order works', body: 'Left to right or right to left: still 3.', visual: <span className="lx-arrows">→ ←</span> },
            { head: 'Keep track', body: 'Move it, cross it out or cover it once it is counted.', visual: <span className="lx-counter lx-counter-big" style={{ background: '#e8423f' }} /> },
          ]}
        />
      ),
    },
    {
      id: 'story-oops',
      title: 'Story: Bolt counts twice',
      ref: 'C1.1',
      notes: ['A common mistake: counting one object twice. Ask the class to spot it.'],
      ask: ['What did Bolt do wrong?', 'How can Bolt make sure he counts each duck only once?'],
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'bolt', x: 18 }, { who: 'jessie', x: 74, flip: true }]}
          lines={[
            { who: 'bolt', text: 'Easy! 1, 2, 3, 4! There are *4* ducks!', show: <SpriteRow name="duck" n={3} size={4} gap={1.5} /> },
            { who: 'jessie', text: 'Hmm. Let’s look again. How many ducks can you see?', show: <SpriteRow name="duck" n={3} size={4} gap={1.5} /> },
            { who: 'jessie', text: 'Oops! Bolt counted this duck *twice*.', show: <SpriteRow name="duck" n={3} size={4} gap={1.5} /> },
            { who: 'bolt', text: 'Each thing gets *one* number only. 1, 2, 3. *3* ducks! Beep!', show: <span className="lx-bignum-inline">3</span> },
          ]}
        />
      ),
    },
    {
      id: 'gallery',
      title: 'Numbers 0 to 10',
      ref: 'C1.2 · E4',
      notes: ['Press → to add one more each time, from 0 to 10.', 'Stress that 0 (zero) means there is no object.', 'No need to focus on spelling the words yet.'],
      ask: ['What does zero mean?', 'How many more to fill the ten-frame?'],
      render: () => <Gallery />,
    },
    {
      id: 'tenframe',
      title: 'Show me on a ten-frame',
      ref: 'C1.2 · E4',
      notes: ['Switch the target between numeral, word and dots to link the representations.', 'Hide the count for a challenge: students check by counting the counters.'],
      ask: ['How do you know you have 7?', 'How many empty boxes are left?'],
      render: () => <TenFrameBuild />,
    },
    {
      id: 'money',
      title: 'Counting dollars',
      ref: 'C1.1 · E4 (LE 1b)',
      notes: ['Count notes aloud as they go into the purse: $1, $2, $3…', 'After counting to $10, swap the ten $1 notes for one $10 note.'],
      ask: ['How much money is in the purse now?', 'Is it enough to pay for the cupcake?'],
      render: () => <MoneyMake />,
    },
    {
      id: 'around-us',
      title: 'Numbers around us',
      ref: 'C1.1 · M15',
      notes: ['Some numbers tell how many (4 people). Some are names (Bus 2, Block 5).', 'Do not use the words cardinal or nominal with students; say “counting numbers” and “labels”.'],
      ask: ['Does Bus 2 have 2 buses?', 'Where else do we see numbers that are names?'],
      render: () => <SortBins />,
    },
    {
      id: 'quiz',
      title: 'Quick check',
      ref: 'C1.1, C1.2',
      notes: ['Use as an exit check. Students can show answers with fingers or whiteboards.'],
      render: () => (
        <Quiz
          qs={[
            { prompt: 'How many apples?', visual: <SpriteRow name="apple" n={6} size={3.4} />, options: [5, 6, 7], answer: 6 },
            { prompt: 'How many stars?', visual: <SpriteRow name="star" n={8} size={3} />, options: [7, 8, 9], answer: 8 },
            { prompt: 'Which number means “nothing here”?', visual: <TenFrame filled={0} size={3} />, options: [0, 1, 10], answer: 0 },
            { prompt: 'How much money?', visual: note(5), options: ['$4', '$5', '$6'], answer: '$5' },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Class deck 2: order, 1 more / 1 less, numerals and words
// ---------------------------------------------------------------------------

const orderDeck: Deck = {
  id: 'p1c1-order',
  kind: 'class',
  title: 'The Number Train: Order & Words',
  blurb: 'Count forward and back, find missing numbers with 1 more / 1 less, match dots, numerals and number words, then play.',
  sections: ['C1.3', 'C1.5'],
  refs: ['R2', 'E5', 'E6', 'M7', 'M8'],
  minutes: 40,
  cover: { scene: 'rail', sprites: ['bolt', 'pip'] },
  slides: [
    {
      id: 'title',
      title: 'Title',
      render: () => <Title kicker="P1 · Numbers to 10 · Lesson 2" title="The Number Train" sub="All aboard! Numbers go in order." scene="rail" cast={[{ who: 'bolt', x: 20 }, { who: 'ravi', x: 74, flip: true }]} />,
    },
    {
      id: 'story-rhyme',
      title: 'Story: count forward and back',
      ref: 'C1.5 · R2',
      notes: ['Recite 1 to 10 together, then 10 back to 1. Add actions: squat and stand as the number grows.', 'Focus on the sound of the number words; do not expect numeral recognition yet.'],
      ask: ['What comes after 1?', 'What comes before 2?', 'What comes after 7?'],
      render: () => (
        <Story
          scene="rail"
          cast={[{ who: 'ravi', x: 16 }, { who: 'bolt', x: 46 }, { who: 'pip', x: 76, flip: true }]}
          lines={[
            { who: 'ravi', text: 'The Number Train is here! Let’s count *forward*: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!' },
            { who: 'bolt', text: 'Now count *backward* for blast-off: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1!' },
            { who: 'pip', text: 'What comes *after* 4?', show: <NumCard n={4} size={8} /> },
            { who: 'pip', text: '5! 5 comes after 4. 5 is *1 more* than 4.', show: <div style={{ display: 'flex', gap: '1em' }}><NumCard n={4} size={8} /><NumCard n={5} size={8} /></div> },
            { who: 'ravi', text: 'What comes *before* 2? It is 1! 1 is *1 less* than 2.', show: <div style={{ display: 'flex', gap: '1em' }}><NumCard n={1} size={8} /><NumCard n={2} size={8} /></div> },
          ]}
        />
      ),
    },
    {
      id: 'tape',
      title: 'Hop along the tape',
      ref: 'C1.5 · E5',
      notes: ['Use “1 more” and “1 less” language each hop.', '“Hide numbers” lets you cover cells, then ask which number is hiding.'],
      ask: ['Pip is on 6. Where will he land if he hops 1 more?', 'What number is hiding here? How do you know?'],
      render: () => <NumberTape mode="hop" />,
    },
    {
      id: 'train-up',
      title: 'Missing numbers: count on',
      ref: 'C1.5 · E5',
      notes: ['A wrong drop gives a hint: “What is 1 more than…?”', '“New train” makes a new sequence; increase missing numbers as students gain confidence.'],
      ask: ['What is the missing number?', 'How did you work it out?'],
      render: () => <NumberTrain dir="up" missing={2} />,
    },
    {
      id: 'train-down',
      title: 'Missing numbers: count back',
      ref: 'C1.5 · E5',
      notes: ['Descending sequences, e.g. 8, 7, __, 5. Ask “What is 1 less than…?”'],
      render: () => <NumberTrain dir="down" missing={2} />,
    },
    {
      id: 'three-ways',
      title: 'One number, three ways',
      ref: 'C1.3 · E6',
      notes: ['Press → to reveal each card.', 'Have students write the numeral and word on mini whiteboards and check against the card.'],
      render: () => (
        <Teach
          title="Seven, three ways"
          guide={{ who: 'jessie', text: 'They all mean the same number!' }}
          cards={[
            { head: 'dots', body: 'Count the dots.', visual: <DotCard n={7} size={7} /> },
            { head: 'numeral', body: 'We write it like this.', visual: <NumCard n={7} size={7} /> },
            { head: 'word', body: 'We spell it like this.', visual: <div className="lx-wordcard">seven</div> },
          ]}
        />
      ),
    },
    {
      id: 'match',
      title: 'Match dots, numerals, words',
      ref: 'C1.3 · E6',
      notes: ['Students come up to drag. Ask the class to agree before each drop.'],
      ask: ['How do you know this card shows 6?'],
      render: () => <MatchUp />,
    },
    {
      id: 'flash',
      title: 'Quick look',
      ref: 'C1.2 · M7',
      notes: ['Flash the card; the class shouts the number. Speed up as they improve.', 'Recognising without counting (subitising) shows growing number sense.'],
      ask: ['How did you see it so fast?'],
      render: () => <FlashDots />,
    },
    {
      id: 'memory',
      title: 'Memory game',
      ref: 'C1.3 · M7',
      notes: ['Two teams take turns. A match keeps your turn; a miss passes to the other team.', 'Pair students of similar ability for the table version with real cards.'],
      render: () => <MemoryPairs />,
    },
    {
      id: 'quiz',
      title: 'Quick check',
      ref: 'C1.3, C1.5',
      render: () => (
        <Quiz
          qs={[
            { prompt: 'What is 1 more than 6?', visual: <NumCard n={6} size={8} />, options: [5, 7, 8], answer: 7 },
            { prompt: 'What is missing? 8, 7, ?, 5', visual: <div style={{ display: 'flex', gap: '0.6em' }}>{[8, 7, -1, 5].map((n, i) => (n < 0 ? <div key={i} className="lx-card lx-numcard" style={{ width: '4.3em', height: '6em', fontSize: '3em' }}>?</div> : <NumCard key={i} n={n} size={6} />))}</div>, options: [4, 6, 9], answer: 6 },
            { prompt: 'Which word is 9?', visual: <NumCard n={9} size={8} />, options: ['six', 'nine', 'five'], answer: 'nine' },
            { prompt: 'How many dots?', visual: <DotCard n={5} size={9} />, options: [4, 5, 6], answer: 5 },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Class deck 3: comparing
// ---------------------------------------------------------------------------

const compareDeck: Deck = {
  id: 'p1c1-compare',
  kind: 'class',
  title: 'More or Fewer? Comparing',
  blurb: 'One-to-one matching, more / fewer / the same, greater than and smaller than, and the thinking-aloud tricks.',
  sections: ['C1.4'],
  refs: ['E10', 'E11', 'E12', 'E13', 'M14', 'M16'],
  minutes: 45,
  cover: { scene: 'market', sprites: ['rabbit', 'carrot', 'rabbit', 'carrot'] },
  slides: [
    {
      id: 'title',
      title: 'Title',
      render: () => <Title kicker="P1 · Numbers to 10 · Lesson 3" title="More or Fewer?" sub="Match, count and compare." scene="market" cast={[{ who: 'jessie', x: 22 }, { who: 'ravi', x: 70, flip: true }]} />,
    },
    {
      id: 'story-share',
      title: 'Story: who has more?',
      ref: 'C1.4 · E10',
      notes: ['Set up the need for one-to-one matching before the counters activity.'],
      ask: ['How can we find out who has more without arguing?'],
      render: () => (
        <Story
          scene="class"
          cast={[{ who: 'ravi', x: 14 }, { who: 'jessie', x: 40 }, { who: 'bolt', x: 72, flip: true }]}
          lines={[
            { who: 'ravi', text: 'I have *more* counters than you, Jessie!' },
            { who: 'jessie', text: 'No way! *I* have more!' },
            { who: 'bolt', text: 'Beep! Let’s line them up and *match* them, one to one.' },
            { who: 'bolt', text: 'The row with counters left over has *more*. The other row has *fewer*.', show: <div style={{ display: 'grid', gap: '0.6em' }}><div style={{ display: 'flex', gap: '0.6em' }}>{[...Array(6)].map((_, i) => <Sprite key={i} name="counterYellow" size={2.4} />)}</div><div style={{ display: 'flex', gap: '0.6em' }}>{[...Array(4)].map((_, i) => <Sprite key={i} name="counterRed" size={2.4} />)}</div></div> },
            { who: 'jessie', text: 'And if every counter has a partner, we have *the same number*!' },
          ]}
        />
      ),
    },
    {
      id: 'spill',
      title: 'Shake the cup',
      ref: 'C1.4 · E10, E11',
      notes: ['Ask for predictions after the spill, again after lining up, then match one to one.', 'For some students, physical lines help show one-to-one correspondence.'],
      ask: ['Are there more red counters, more yellow counters, or the same number?', 'How do you know?'],
      render: () => <SpillCompare />,
    },
    {
      id: 'pairs',
      title: 'Match and compare pictures',
      ref: 'C1.4 · E12',
      notes: ['Pictures cannot be moved like counters, but we can still match one to one: here we drag copies.', 'Leftovers glow, showing which group has more.'],
      ask: ['Which group has more? Which has fewer?', 'How many more?'],
      render: () => <MatchPairs a={{ sprite: 'rabbit', n: 6 }} b={{ sprite: 'carrot', n: 8 }} />,
    },
    {
      id: 'which-set',
      title: 'Which set has more?',
      ref: 'C1.4 · E12',
      notes: ['Some rounds use bigger pictures for the smaller set: watch for “bigger means more”.', 'After a right answer, read the greater / smaller sentence aloud.'],
      ask: ['Without counting, how can you tell?', 'Are big things always more?'],
      render: () => <WhichSet />,
    },
    {
      id: 'words',
      title: 'Things or numbers?',
      ref: 'C1.4 · E13',
      notes: ['More / fewer compares the number of objects. Greater than / smaller than compares numbers.'],
      render: () => (
        <Teach
          title="The words we use"
          guide={{ who: 'ravi', text: 'Things: more or fewer. Numbers: greater or smaller!' }}
          cards={[
            { head: 'more / fewer', body: 'For things: 5 apples are more than 3 apples.', visual: <div style={{ display: 'grid', gap: '0.3em' }}><SpriteRow name="apple" n={5} size={1.8} /><SpriteRow name="apple" n={3} size={1.8} /></div> },
            { head: 'greater / smaller', body: 'For numbers: 5 is greater than 3.', visual: <div style={{ display: 'flex', gap: '0.5em' }}><NumCard n={5} size={5} /><NumCard n={3} size={5} /></div> },
            { head: 'the same', body: 'Every one has a partner.', visual: <div style={{ display: 'grid', gap: '0.3em' }}><SpriteRow name="rabbit" n={4} size={1.8} /><SpriteRow name="carrot" n={4} size={1.8} /></div> },
          ]}
        />
      ),
    },
    {
      id: 'cards',
      title: 'Flip and compare',
      ref: 'C1.4 · E13',
      notes: ['Cards mix dots and numerals, like the group card game.', '“Switch sentence” flips between greater than and smaller than.'],
      ask: ['Which number is greater? How do you know?'],
      render: () => <CardCompare />,
    },
    {
      id: 'tape-compare',
      title: 'Compare on the tape',
      ref: 'C1.4 · M14',
      notes: ['Connect order to size: numbers further along the tape are greater.'],
      render: () => <NumberTape mode="compare" />,
    },
    {
      id: 'think-spread',
      title: 'Thinking aloud: spread out',
      ref: 'C1.4 · M16',
      notes: ['Let groups discuss before voting. Then “push together” to check.', 'Children are still developing conservation of number: rearranging does not change how many.'],
      ask: ['Who is correct? Why?', 'How can we check?'],
      render: () => <Conservation variant="spread" />,
    },
    {
      id: 'think-size',
      title: 'Thinking aloud: big and small',
      ref: 'C1.4 · M16',
      notes: ['Bigger items do not mean more. Count to check.', 'Some students may argue that a melon is “worth” several cherries: let them discuss, then return to how many.'],
      render: () => <Conservation variant="size" />,
    },
    {
      id: 'quiz',
      title: 'Quick check',
      ref: 'C1.4',
      render: () => (
        <Quiz
          qs={[
            { prompt: 'Which is greater?', visual: <div style={{ display: 'flex', gap: '1em' }}><NumCard n={8} size={7} /><NumCard n={2} size={7} /></div>, options: [8, 2], answer: 8 },
            { prompt: 'Are there more rabbits or more carrots?', visual: <div style={{ display: 'grid', gap: '0.5em' }}><SpriteRow name="rabbit" n={4} size={2.6} /><SpriteRow name="carrot" n={6} size={2.6} /></div>, options: ['rabbits', 'carrots', 'the same'], answer: 'carrots' },
            { prompt: '7 is smaller than…', visual: <NumCard n={7} size={7} />, options: [5, 9, 7], answer: 9 },
            { prompt: 'Which word fits? 4 apples are ___ than 6 apples.', visual: <div style={{ display: 'grid', gap: '0.5em' }}><SpriteRow name="apple" n={4} size={2.4} /><SpriteRow name="apple" n={6} size={2.4} /></div>, options: ['fewer', 'more', 'greater'], answer: 'fewer' },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Story run-through: the whole chapter as one adventure
// ---------------------------------------------------------------------------

const storyDeck: Deck = {
  id: 'p1c1-story',
  kind: 'story',
  title: 'Bolt Loses Count',
  blurb: 'A story run-through of the whole chapter. Bolt’s number chip falls out, and the class helps him relearn 0 to 10.',
  sections: ['C1.1', 'C1.2', 'C1.3', 'C1.4', 'C1.5'],
  refs: ['Recap'],
  minutes: 20,
  cover: { scene: 'night', sprites: ['bolt', 'star', 'star'] },
  slides: [
    { id: 'title', title: 'Title', render: () => <Title kicker="A Numbers to 10 story" title="Bolt Loses Count" sub="Can you help a little robot?" scene="night" cast={[{ who: 'bolt', x: 46 }]} /> },
    {
      id: 'crash',
      title: 'The crash',
      notes: ['Read with voices! Press → for each line.'],
      render: () => (
        <Story
          scene="night"
          cast={[{ who: 'bolt', x: 44 }]}
          props={[{ sprite: 'star', x: 20, y: 14, size: 1.6 }, { sprite: 'star', x: 74, y: 22, size: 1.2 }]}
          lines={[
            { who: null, text: 'One night, a little robot zoomed across the sky…' },
            { who: 'bolt', text: 'Whoooa! *CRASH!* Bzzt… Where am I?' },
            { who: 'bolt', text: 'Oh no! My *number chip* fell out! I can’t count anymore! What comes after 1? Bzzt!' },
          ]}
        />
      ),
    },
    {
      id: 'zero',
      title: 'Zero',
      ref: 'C1.2',
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'pip', x: 16 }, { who: 'bolt', x: 70, flip: true }]}
          lines={[
            { who: 'pip', text: 'Don’t worry, Bolt! We will teach you all the numbers from *0 to 10*.' },
            { who: 'pip', text: 'How many ducks are in this box?', show: <TenFrame filled={0} size={3.4} /> },
            { who: 'bolt', text: 'There are… none?' },
            { who: 'pip', text: 'Yes! *Zero* means there is nothing at all.', show: <div className="lx-bignum"><span>0</span><em>zero</em></div> },
          ]}
        />
      ),
    },
    {
      id: 'count-ducks',
      title: 'Count the ducks',
      ref: 'C1.1',
      notes: ['Invite a student to tap each duck while the class counts aloud.'],
      render: () => <CountTap groups={[{ sprite: 'duck', n: 6 }]} />,
    },
    {
      id: 'train',
      title: 'Numbers in order',
      ref: 'C1.5',
      render: () => (
        <Story
          scene="rail"
          cast={[{ who: 'ravi', x: 18 }, { who: 'bolt', x: 66, flip: true }]}
          lines={[
            { who: 'ravi', text: 'Numbers always go in the *same order*. Each one is *1 more* than the one before.', show: <div style={{ display: 'flex', gap: '0.4em' }}>{[1, 2, 3, 4, 5].map((n) => <NumCard key={n} n={n} size={5} />)}</div> },
            { who: 'bolt', text: 'But my train is missing a number! Can you fix it?' },
          ]}
        />
      ),
    },
    { id: 'train-fix', title: 'Fix the train', ref: 'C1.5', render: () => <NumberTrain dir="up" missing={1} /> },
    {
      id: 'market',
      title: 'At the market',
      ref: 'C1.1',
      render: () => (
        <Story
          scene="market"
          cast={[{ who: 'jessie', x: 18 }, { who: 'bolt', x: 66, flip: true }]}
          lines={[
            { who: 'bolt', text: 'Mmm! Cupcakes! Can I buy one? It costs *$5*.' },
            { who: 'jessie', text: 'Let’s count your dollars, one note at a time: $1, $2, $3, $4, $5!', show: note(5) },
          ]}
        />
      ),
    },
    { id: 'pay', title: 'Pay $5', render: () => <MoneyMake targets={[5]} /> },
    {
      id: 'compare',
      title: 'Who has more?',
      ref: 'C1.4',
      render: () => (
        <Story
          scene="class"
          cast={[{ who: 'pip', x: 16 }, { who: 'bolt', x: 70, flip: true }]}
          lines={[
            { who: 'bolt', text: 'I have 3 batteries. Pip has 5 flies. Who has *more*?', show: <div style={{ display: 'grid', gap: '0.6em' }}><SpriteRow name="star" n={3} size={2.6} /><SpriteRow name="ladybug" n={5} size={2.6} /></div> },
            { who: 'pip', text: 'I have more! *5 is greater than 3*. And 3 is smaller than 5.' },
            { who: 'bolt', text: 'Let me try another one!' },
          ]}
        />
      ),
    },
    { id: 'which', title: 'Which set has more?', ref: 'C1.4', render: () => <WhichSet /> },
    {
      id: 'finale',
      title: 'Bolt is fixed!',
      notes: ['Recap the big ideas together: count each thing once, the last number tells how many, numbers go in order, more / fewer, greater / smaller.'],
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'pip', x: 10 }, { who: 'jessie', x: 34 }, { who: 'bolt', x: 56 }, { who: 'ravi', x: 80, flip: true }]}
          lines={[
            { who: 'bolt', text: 'Ding! My number chip is working again! 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!', show: <Sprite name="trophy" size={6} /> },
            { who: 'jessie', text: 'Remember: count each thing *once*. The *last number* tells how many.' },
            { who: 'ravi', text: 'Numbers go in order. *1 more*, *1 less*.' },
            { who: 'pip', text: 'And when we compare: *more* or *fewer* things, *greater* or *smaller* numbers. Ribbit!' },
            { who: 'bolt', text: 'Thank you, friends! Beep boop! THE END.' },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Student packages: self-paced, scored
// ---------------------------------------------------------------------------

const countQuest: Deck = {
  id: 'p1c1-quest-count',
  kind: 'student',
  title: 'Counting Quest',
  blurb: 'Self-paced practice: count and write, ten-frames, quick looks, number trains and matching. Earns stars.',
  sections: ['C1.1', 'C1.2', 'C1.3', 'C1.5'],
  refs: ['Practice 1–3'],
  minutes: 20,
  cover: { scene: 'sky', sprites: ['jessie', 'star', 'star', 'star'] },
  slides: [
    { id: 'title', title: 'Start', render: () => <Title kicker="Student quest" title="Counting Quest" sub="Earn a star for every challenge!" scene="sky" cast={[{ who: 'jessie', x: 24 }, { who: 'pip', x: 70, flip: true }]} /> },
    { id: 'c1', title: 'Count the fish', scored: true, render: () => <CountTap groups={[{ sprite: 'fish', n: 7 }]} /> },
    { id: 'c2', title: 'Count the flowers', scored: true, render: () => <CountTap groups={[{ sprite: 'flower', n: 4 }]} scene="sky" /> },
    { id: 'tf', title: 'Ten-frame', scored: true, render: () => <TenFrameBuild targets={[8, 4, 6]} /> },
    { id: 'flash', title: 'Quick look', scored: true, render: () => <FlashDots /> },
    { id: 'train-up', title: 'Number train', scored: true, render: () => <NumberTrain dir="up" missing={2} /> },
    { id: 'train-down', title: 'Count back', scored: true, render: () => <NumberTrain dir="down" missing={2} /> },
    { id: 'match', title: 'Match up', scored: true, render: () => <MatchUp count={3} /> },
    {
      id: 'quiz',
      title: 'Boss round',
      scored: true,
      render: () => (
        <Quiz
          title="boss round"
          qs={[
            { prompt: 'How many ladybirds?', visual: <SpriteRow name="ladybug" n={9} size={2.8} />, options: [8, 9, 10], answer: 9 },
            { prompt: 'What comes after 3?', visual: <NumCard n={3} size={7} />, options: [2, 4, 5], answer: 4 },
            { prompt: 'Which shows “ten”?', visual: <div className="lx-wordcard">ten</div>, options: [1, 10, 0], answer: 10 },
          ]}
        />
      ),
    },
  ],
}

const compareQuest: Deck = {
  id: 'p1c1-quest-compare',
  kind: 'student',
  title: 'Compare Quest',
  blurb: 'Self-paced practice: match one to one, more and fewer, greater and smaller, and numbers around us. Earns stars.',
  sections: ['C1.4', 'C1.1'],
  refs: ['Practice 4–7'],
  minutes: 20,
  cover: { scene: 'market', sprites: ['ravi', 'apple', 'apple'] },
  slides: [
    { id: 'title', title: 'Start', render: () => <Title kicker="Student quest" title="Compare Quest" sub="More, fewer, greater, smaller!" scene="market" cast={[{ who: 'ravi', x: 24 }, { who: 'bolt', x: 70, flip: true }]} /> },
    { id: 'pairs', title: 'Match and compare', scored: true, render: () => <MatchPairs /> },
    { id: 'which-1', title: 'Which has more?', scored: true, render: () => <WhichSet /> },
    { id: 'which-2', title: 'Which has fewer?', scored: true, render: () => <WhichSet /> },
    { id: 'cards', title: 'Greater or smaller', scored: true, render: () => <CardCompare /> },
    { id: 'size', title: 'Big and small', scored: true, render: () => <Conservation variant="size" /> },
    { id: 'sort', title: 'Numbers around us', scored: true, render: () => <SortBins /> },
    {
      id: 'quiz',
      title: 'Boss round',
      scored: true,
      render: () => (
        <Quiz
          title="boss round"
          qs={[
            { prompt: 'Which is smaller?', visual: <div style={{ display: 'flex', gap: '1em' }}><NumCard n={4} size={7} /><NumCard n={9} size={7} /></div>, options: [4, 9], answer: 4 },
            { prompt: 'More ducks or more fish?', visual: <div style={{ display: 'grid', gap: '0.5em' }}><SpriteRow name="duck" n={7} size={2.4} /><SpriteRow name="fish" n={5} size={2.4} /></div>, options: ['ducks', 'fish', 'the same'], answer: 'ducks' },
            { prompt: '10 is ___ than 6.', visual: <div style={{ display: 'flex', gap: '1em' }}><NumCard n={10} size={7} /><NumCard n={6} size={7} /></div>, options: ['greater', 'smaller', 'fewer'], answer: 'greater' },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Toolkit: single-screen manipulatives for any lesson
// ---------------------------------------------------------------------------

function tool(id: string, title: string, blurb: string, scene: Scene, sprites: SpriteName[], el: () => ReactNode, sections: string[]): Deck {
  return { id, kind: 'tool', title, blurb, sections, refs: [], minutes: 0, cover: { scene, sprites }, slides: [{ id: 'tool', title, render: el }] }
}

const tools: Deck[] = [
  tool('tool-tenframe', 'Ten-frame & counters', 'Drag counters to build any number 0 to 10.', 'paper', ['counterRed', 'counterRed', 'counterRed'], () => <TenFrameBuild targets={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5)} />, ['C1.2']),
  tool('tool-flash', 'Flash dots', 'Flash a dot card, scatter or ten-frame for quick looks.', 'night', ['star'], () => <FlashDots />, ['C1.2']),
  tool('tool-tape', 'Number tape', 'Hop 1 more / 1 less, hide numbers, ask what is missing.', 'sky', ['pip'], () => <NumberTape mode="hop" />, ['C1.5']),
  tool('tool-train', 'Number train', 'Endless missing-number trains, forward or back.', 'rail', ['bolt'], () => <NumberTrain dir="up" missing={2} />, ['C1.5']),
  tool('tool-cup', 'Counter cup', 'Shake two-colour counters, line them up and match.', 'class', ['counterRed', 'counterYellow'], () => <SpillCompare />, ['C1.4']),
  tool('tool-cards', 'Flip & compare', 'Two random cards and a greater / smaller sentence.', 'class', ['jessie'], () => <CardCompare />, ['C1.4']),
  tool('tool-money', 'Play money', 'Count $1 notes to $10 and swap for a $10 note.', 'market', ['cupcake'], () => <MoneyMake targets={[3, 8, 5, 10, 1, 7]} />, ['C1.1']),
  tool('tool-memory', 'Memory pairs', 'Team game: match dot cards to numerals.', 'space', ['trophy'], () => <MemoryPairs />, ['C1.3']),
]

export const DECKS: Deck[] = [countDeck, orderDeck, compareDeck, storyDeck, countQuest, compareQuest, ...tools]

export function findDeck(id: string | undefined) {
  return DECKS.find((d) => d.id === id)
}
