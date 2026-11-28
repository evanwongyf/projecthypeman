import type { ReactNode } from 'react'
import type { Chapter, Deck } from './decks'
import { Sprite, type SpriteName } from './pixel'
import { BondDiagram, DotCard, NumCard, SpriteRow, type Scene } from './kit'
import { Story, Teach, Title } from './scenes'
import { MemoryPairs } from './counting'
import { Quiz } from './comparing'
import { AddMachine, BeanBags, EqualsThink, EquationBuilder, FactHunt, HiddenCubes, NumberBond, OneMore, PutTogether, StoryMaker } from './addition'

export const CHAPTER_2: Chapter = {
  id: 'p1-c2',
  number: 2,
  level: 'Primary 1',
  title: 'Addition within 10',
  sections: [
    { id: 'C2.1', name: 'Concepts of addition and number bonds' },
    { id: 'C2.2', name: 'Use of + and =' },
    { id: 'C2.5', name: 'Adding within 10' },
    { id: 'C2.7', name: 'Mental calculation within 10' },
  ],
}

const CH = 'p1-c2'

const row = (children: ReactNode) => <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>{children}</div>
const coins = (n: number) => (
  <div style={{ display: 'flex', gap: '0.4em' }}>
    {[...Array(n)].map((_, i) => (
      <Sprite key={i} name="coin" size={2.6} />
    ))}
  </div>
)
const groups = (s: SpriteName, a: number, b: number) => (
  <div style={{ display: 'grid', gap: '0.6em' }}>
    <SpriteRow name={s} n={a} size={2.6} />
    <SpriteRow name={s} n={b} size={2.6} />
  </div>
)

// ---------------------------------------------------------------------------
// Class deck 1: number bonds
// ---------------------------------------------------------------------------

const bondsDeck: Deck = {
  id: 'p1c2-bonds',
  chapter: CH,
  kind: 'class',
  title: 'Beach Bonds: Number Bonds',
  blurb: 'Split a whole into two parts every way you can, bonds of 10, hidden cubes and a make-10 card game.',
  sections: ['C2.1'],
  refs: ['R1', 'E2', 'E3', 'M4', 'M9'],
  minutes: 45,
  cover: { scene: 'beach', sprites: ['pip', 'shell', 'shell', 'shell'] },
  slides: [
    {
      id: 'title',
      title: 'Title',
      render: () => <Title kicker="P1 · Addition within 10 · Lesson 1" title="Beach Bonds" sub="Two parts make a whole!" scene="beach" cast={[{ who: 'jessie', x: 22 }, { who: 'pip', x: 72, flip: true }]} />,
    },
    {
      id: 'story-beach',
      title: 'Story: a day at the beach',
      ref: 'C2.1 · R1',
      notes: ['Make number stories aloud; students do not write them.', 'Accept every way of finding the total, then ask for another way.'],
      ask: ['What do you see in the picture?', 'How many friends are there altogether?', 'How did you get 8? Is there another way?'],
      render: () => (
        <Story
          scene="beach"
          cast={[{ who: 'jessie', x: 12 }, { who: 'ravi', x: 34 }, { who: 'pip', x: 62 }, { who: 'bolt', x: 86, flip: true }]}
          props={[
            { sprite: 'shell', x: 30, y: 64, size: 1.6 },
            { sprite: 'shell', x: 50, y: 68, size: 1.6 },
            { sprite: 'butterfly', x: 40, y: 14, size: 2 },
          ]}
          lines={[
            { who: 'jessie', text: 'We’re at the beach! *2* friends are building a sandcastle.', show: <SpriteRow name="ravi" n={2} size={4} /> },
            { who: 'ravi', text: '*6* friends are playing in the water. How many friends are there *altogether*?', show: groups('jessie', 2, 6) },
            { who: 'pip', text: '1, 2, 3… 8! There are *8* friends altogether. *2 and 6 make 8.*' },
            { who: 'bolt', text: 'Beep! Can we make 8 in another way? What about *4 and 4*?' },
          ]}
        />
      ),
    },
    {
      id: 'bond-6',
      title: 'Split 6 every way',
      ref: 'C2.1 · E2 (LE 2a)',
      notes: ['Tap a counter to swap it between parts, or drag it. “Record” saves each new way.', 'Say each bond aloud: “2 and 4 make 6.” Bring the parts together to show the whole.', '2 and 4, and 4 and 2, count as the same way here: the whole is the same.'],
      ask: ['How many are in each part?', 'Can you find another way to make 6?', 'Have we found all the ways? How do you know?'],
      render: () => <NumberBond wholes={[6, 7, 8, 9]} start={6} />,
    },
    {
      id: 'part-whole',
      title: 'Parts and whole',
      ref: 'C2.1 · E3',
      notes: ['Press → to reveal each card.', 'Keep the bond diagram tied to a story, never a stand-alone fill-in.', 'Say “3 and 7 make 10”. Do not show 3 + 7 = 10 yet.'],
      render: () => (
        <Teach
          title="A number bond"
          scene="beach"
          guide={{ who: 'jessie', text: 'Two parts make one whole!' }}
          cards={[
            { head: 'two parts', body: '3 red cubes and 7 yellow cubes.', visual: row(<><SpriteRow name="cube" n={3} size={1.15} gap={0.1} /><SpriteRow name="cube" n={7} size={1.15} gap={0.1} pal={{ R: '#ffd23f', r: '#e0a400' }} /></>) },
            { head: 'one whole', body: '10 cubes altogether.', visual: <div style={{ display: 'flex', gap: '0.15em' }}><SpriteRow name="cube" n={3} size={1.15} gap={0.1} /><SpriteRow name="cube" n={7} size={1.15} gap={0.1} pal={{ R: '#ffd23f', r: '#e0a400' }} /></div> },
            { head: '3 and 7 make 10', body: 'We draw it like this.', visual: <BondDiagram a={3} b={7} whole={10} size={0.9} /> },
            { head: 'same whole', body: '7 and 3 also make 10.', visual: <BondDiagram a={7} b={3} whole={10} size={0.9} /> },
          ]}
        />
      ),
    },
    {
      id: 'bond-10',
      title: 'Bonds of 10',
      ref: 'C2.1 · E3',
      notes: ['Pairs work with 10 multilink cubes in two colours can mirror this slide.', 'Metacognition: to be sure you have every pair, add 1 to one part and take 1 from the other.'],
      ask: ['You have 3 red and 7 yellow. What do 3 and 7 make?', 'How can we be sure we found every pair?'],
      render: () => <NumberBond wholes={[10, 5, 9]} start={10} />,
    },
    {
      id: 'hidden',
      title: 'Hidden cubes',
      ref: 'C2.1 · M4',
      notes: ['Count all the cubes first. Then hide some under the cup and ask how many are hiding.', 'Play it with real cubes in a closed hand afterwards.'],
      ask: ['How many cubes did Bolt have?', 'How many can you see? How many are hiding?'],
      render: () => <HiddenCubes />,
    },
    {
      id: 'make-10',
      title: 'Make 10 card game',
      ref: 'C2.1 · M4, M9',
      notes: ['Two teams. Flip a dot card and a numeral card; keep them if they make 10.', 'Table version: numeral cards 1 to 9, say “SNAP” when two cards make 10.'],
      render: () => <MemoryPairs makeTen pairs={5} />,
    },
    {
      id: 'quiz',
      title: 'Quick check',
      ref: 'C2.1',
      render: () => (
        <Quiz
          qs={[
            { prompt: '4 and ? make 7', visual: <BondDiagram a={4} b="?" whole={7} size={1.2} />, options: [2, 3, 4], answer: 3 },
            { prompt: 'Which pair makes 10?', visual: <BondDiagram a="?" b="?" whole={10} size={1.2} />, options: ['4 and 5', '6 and 4', '3 and 6'], answer: '6 and 4' },
            { prompt: 'How many are hiding? 9 cubes, you see 5.', visual: <SpriteRow name="cube" n={5} size={3} />, options: [3, 4, 5], answer: 4 },
            { prompt: '2 and 6 make…', visual: groups('shell', 2, 6), options: [7, 8, 9], answer: 8 },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Class deck 2: putting together and counting on
// ---------------------------------------------------------------------------

const addDeck: Deck = {
  id: 'p1c2-add',
  chapter: CH,
  kind: 'class',
  title: 'Put Together & Count On',
  blurb: 'Addition as putting two sets together and adding on: count all, count on, swap the order, 1 more and the adding machine.',
  sections: ['C2.1', 'C2.5'],
  refs: ['R5', 'E6', 'E7', 'E8', 'E12'],
  minutes: 45,
  cover: { scene: 'market', sprites: ['tomato', 'tomato', 'apple', 'apple', 'apple'] },
  slides: [
    {
      id: 'title',
      title: 'Title',
      render: () => <Title kicker="P1 · Addition within 10 · Lesson 2" title="Count On!" sub="Put them together. How many altogether?" scene="market" cast={[{ who: 'ravi', x: 22 }, { who: 'bolt', x: 72, flip: true }]} />,
    },
    {
      id: 'story-apples',
      title: 'Story: two plates of apples',
      ref: 'C2.1 · R5',
      notes: ['Check prior knowledge of count all and number bonds.', 'Use the word “altogether” again and again.'],
      ask: ['How many red apples? How many green apples?', 'How many apples are there altogether?'],
      render: () => (
        <Story
          scene="market"
          cast={[{ who: 'ravi', x: 16 }, { who: 'bolt', x: 76, flip: true }]}
          lines={[
            { who: 'ravi', text: 'I have *4* red apples on this plate.', show: <SpriteRow name="apple" n={4} size={3.4} /> },
            { who: 'bolt', text: 'And I have *3* green apples on mine!', show: <div style={{ filter: 'hue-rotate(115deg)' }}><SpriteRow name="apple" n={3} size={3.4} /></div> },
            { who: 'ravi', text: 'Let’s put them *together*. How many apples are there *altogether*?' },
            { who: 'bolt', text: '1, 2, 3, 4, 5, 6, 7! *4 and 3 make 7.* There are 7 apples altogether!', show: <BondDiagram a={4} b={3} whole={7} size={1.2} /> },
          ]}
        />
      ),
    },
    {
      id: 'put-together',
      title: 'Put together: count all',
      ref: 'C2.1 · E6',
      notes: ['“Count all” numbers every item from 1. Finish with a number story: “There are 4 red pens. There are 2 blue pens. There are 6 pens altogether.”', 'Don’t use + and = yet.'],
      ask: ['How many are there altogether?', 'Tell me the number story.'],
      render: () => <PutTogether sprite="apple" a={4} b={2} />,
    },
    {
      id: 'count-on-teach',
      title: 'Count all or count on?',
      ref: 'C2.1 · E7',
      notes: ['Press → to reveal each card.', 'Counting on: keep the first number in your head and count the rest.'],
      render: () => (
        <Teach
          title="Two ways to find altogether"
          scene="market"
          guide={{ who: 'bolt', text: 'Counting on saves my battery!' }}
          cards={[
            { head: 'count all', body: 'Start at 1: 1, 2, 3, 4, 5, 6, 7, 8.', visual: groups('tomato', 5, 3) },
            { head: 'count on', body: 'Say 5, then count on: 6, 7, 8!', visual: row(<><NumCard n={5} size={5} /><SpriteRow name="tomato" n={3} size={2.4} /></>) },
            { head: '5 and 3 make 8', body: 'Both ways give 8 altogether.', visual: <BondDiagram a={5} b={3} whole={8} size={0.9} /> },
          ]}
        />
      ),
    },
    {
      id: 'count-on',
      title: 'Count on with plates',
      ref: 'C2.1 · E7',
      notes: ['Press “count on”: the first plate turns into its number, then we count on.', '“Swap ⇄” reverses the plates: do we still get the same number altogether? (Don’t use the word “commutative”.)', 'Ask which is faster: counting on from the smaller or the greater number. Let students decide for themselves.'],
      ask: ['Is there any difference if I place the plates the other way?', 'Which way helps us count faster? Why?'],
      render: () => <PutTogether sprite="tomato" a={5} b={3} />,
    },
    {
      id: 'count-on-cards',
      title: 'Count on from a card',
      ref: 'C2.1 · E8',
      notes: ['Start with the numeral card and count on the dots: “6… 7, 8”.', 'Let students describe how they added, even if they counted all. Don’t insist one way is faster.'],
      ask: ['How did you add?', 'Did anyone add in a different way?'],
      render: () => <PutTogether card a={6} b={2} />,
    },
    {
      id: 'one-more',
      title: '1 more',
      ref: 'C2.5 · E12',
      notes: ['“We add on when we are putting in more.” The total gets larger.', 'Introduce “1 more than”: 1 more than 3 is 4, and write 3 + 1 = 4.'],
      ask: ['How many will there be if I add 1 more?'],
      render: () => <OneMore />,
    },
    {
      id: 'machine',
      title: 'The adding machine',
      ref: 'C2.5 · E12 (Practice 4)',
      notes: ['Drag a number in; it comes out with more added. Predict before it comes out.', 'Change the machine to add 1, 2, 3 or 4.'],
      ask: ['What will come out if I put in 5?', 'What did the machine do to each number?'],
      render: () => <AddMachine k={3} />,
    },
    {
      id: 'quiz',
      title: 'Quick check',
      ref: 'C2.1, C2.5',
      render: () => (
        <Quiz
          qs={[
            { prompt: 'How many altogether?', visual: groups('tomato', 3, 4), options: [6, 7, 8], answer: 7 },
            { prompt: 'Count on from 6: how many altogether?', visual: row(<><NumCard n={6} size={6} /><DotCard n={3} size={6} /></>), options: [8, 9, 10], answer: 9 },
            { prompt: '1 more than 7 is…', visual: <NumCard n={7} size={7} />, options: [6, 8, 9], answer: 8 },
            { prompt: '2 and 5 make the same as 5 and…', visual: <BondDiagram a={5} b="?" whole={7} size={1.1} />, options: [2, 3, 7], answer: 2 },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Class deck 3: + and =, addition stories, thinking aloud
// ---------------------------------------------------------------------------

const plusDeck: Deck = {
  id: 'p1c2-plus',
  chapter: CH,
  kind: 'class',
  title: 'Plus and Equals',
  blurb: 'Writing addition equations, two facts for each bond, the fact hunt, making addition stories, and what “=” really means.',
  sections: ['C2.2', 'C2.5', 'C2.7'],
  refs: ['E10', 'E11', 'M13', 'M14', 'M15', 'M16'],
  minutes: 45,
  cover: { scene: 'sky', sprites: ['bolt', 'star', 'star'] },
  slides: [
    {
      id: 'title',
      title: 'Title',
      render: () => <Title kicker="P1 · Addition within 10 · Lesson 3" title="Plus & Equals" sub="Write it the maths way!" scene="sky" cast={[{ who: 'bolt', x: 24 }, { who: 'jessie', x: 72, flip: true }]} />,
    },
    {
      id: 'story-symbols',
      title: 'Story: Bolt learns + and =',
      ref: 'C2.2 · E10',
      notes: ['Act it out with cubes in two hands: 3 blue and 2 red.', 'Read 3 + 2 = 5 as “three plus two equals five”.'],
      render: () => (
        <Story
          scene="class"
          cast={[{ who: 'jessie', x: 18 }, { who: 'bolt', x: 72, flip: true }]}
          lines={[
            { who: 'jessie', text: 'I have *3* blue pens and *2* red pens. That’s *5* pens altogether.' },
            { who: 'bolt', text: 'Beep! *3 and 2 make 5.* Can I write that faster?', show: <BondDiagram a={3} b={2} whole={5} size={1.2} /> },
            { who: 'jessie', text: 'Yes! We use *+* for “plus” and *=* for “equals”.', show: <div className="lx-eq">3 <span>+</span> 2 <span>=</span> 5</div> },
            { who: 'bolt', text: '“Three *plus* two *equals* five!” And 2 + 3 = 5 too!', show: <div className="lx-eq">2 <span>+</span> 3 <span>=</span> 5</div> },
          ]}
        />
      ),
    },
    {
      id: 'symbols',
      title: 'The new symbols',
      ref: 'C2.2 · E10',
      notes: ['Press → to reveal each card.', 'Ask: what does “=” mean? When do we use it? How do we write it?'],
      render: () => (
        <Teach
          title="Writing addition"
          scene="sky"
          guide={{ who: 'bolt', text: 'Two facts from one bond!' }}
          cards={[
            { head: '+ plus', body: 'Put the parts together.', visual: <span className="lx-bignum-inline">+</span> },
            { head: '= equals', body: 'Both sides have the same value.', visual: <span className="lx-bignum-inline">=</span> },
            { head: '3 + 2 = 5', body: '“Three plus two equals five.”', visual: <BondDiagram a={3} b={2} whole={5} size={0.9} /> },
            { head: '2 + 3 = 5', body: 'Swap the parts: same whole!', visual: <BondDiagram a={2} b={3} whole={5} size={0.9} /> },
          ]}
        />
      ),
    },
    {
      id: 'equation',
      title: 'Write the equation',
      ref: 'C2.2 · E11 (LE 2b)',
      notes: ['Tell the story first, then drag numbers to write the equation.', 'Either order of the parts is accepted; the other fact is shown after.', 'Some stories include 0: adding 0 leaves the number the same.'],
      ask: ['What are the parts? What is the whole?', 'Can you write another addition fact for this story?'],
      render: () => <EquationBuilder a={4} b={3} sprite="apple" />,
    },
    {
      id: 'equation-2',
      title: 'More stories, more equations',
      ref: 'C2.2 · E11',
      notes: ['Press “new story” for more. Get students to say the story before dragging.'],
      render: () => <EquationBuilder />,
    },
    {
      id: 'fact-hunt',
      title: 'Fact hunt',
      ref: 'C2.7 · M13 (game 2)',
      notes: ['Find every card with the same value as the yellow card. Groups can race on mini whiteboards.', 'Aim for quick recall of facts within 10.'],
      render: () => <FactHunt />,
    },
    {
      id: 'story-maker',
      title: 'Make an addition story',
      ref: 'C2.5 · M14',
      notes: ['Pick a picture and the numbers, tell the story aloud, then reveal the equation.', '“Put together” and “more come” are the two kinds of addition story.', 'Students can then make a story for a partner to solve.'],
      ask: ['Tell me your number story.', 'What is the addition equation?'],
      render: () => <StoryMaker />,
    },
    {
      id: 'pocket-money',
      title: 'Mathematics around us',
      ref: 'C2.5 · M15',
      notes: ['Talk about pocket money: how much we spend and save.', 'Go through the days in a week and the school days in a week. Accept answers that fit real weeks with holidays.'],
      ask: ['How many $1 coins does Jessie use for recess in a school week?', 'How many coins could she save in 7 weeks?'],
      render: () => (
        <Story
          scene="market"
          cast={[{ who: 'jessie', x: 20 }, { who: 'ravi', x: 74, flip: true }]}
          lines={[
            { who: 'jessie', text: 'I get *6* coins of $1 for pocket money every week!', show: coins(6) },
            { who: 'jessie', text: 'I use *1* coin for recess every school day. There are *5* school days.', show: coins(5) },
            { who: 'ravi', text: 'So *5 and 1 make 6*. You save 1 coin each week!', show: <BondDiagram a={5} b={1} whole={6} size={1.2} /> },
            { who: 'ravi', text: 'How many coins can you save in *7* weeks? What if there is a holiday?' },
          ]}
        />
      ),
    },
    {
      id: 'think-equals',
      title: 'Thinking aloud: =',
      ref: 'C2.2 · M16',
      notes: ['Think-pair-share: decide alone, discuss in pairs, then share.', '3 + 5 = 4 + 4 is correct: “=” means both sides have the same value.'],
      ask: ['What does the = sign mean?', 'Is 3 + 5 = 4 + 4 correct? Why?'],
      render: () => <EqualsThink />,
    },
    {
      id: 'think-bags',
      title: 'Thinking aloud: bean bags',
      ref: 'C2.1 · M16',
      notes: ['Make sure students see there are 10 bean bags, not 7.', 'There are 5 of each colour, so 6 and 1 is impossible.'],
      ask: ['How many bean bags are in the basket?', 'Why can’t it be 6 blue and 1 green?'],
      render: () => <BeanBags take={7} />,
    },
    {
      id: 'quiz',
      title: 'Quick check',
      ref: 'C2.2, C2.7',
      render: () => (
        <Quiz
          qs={[
            { prompt: '3 + 4 = ?', visual: groups('star', 3, 4), options: [6, 7, 8], answer: 7 },
            { prompt: 'Which is another fact for 6 + 2 = 8?', visual: <BondDiagram a={6} b={2} whole={8} size={1.1} />, options: ['2 + 6 = 8', '8 + 2 = 6', '6 + 8 = 2'], answer: '2 + 6 = 8' },
            { prompt: '7 + 0 = ?', visual: <SpriteRow name="cherry" n={7} size={2.6} />, options: [0, 7, 8], answer: 7 },
            { prompt: 'Which has the same value as 5 + 2?', visual: <div className="lx-fact lx-fact-target">5 + 2</div>, options: ['4 + 2', '3 + 4', '6 + 2'], answer: '3 + 4' },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Story run-through
// ---------------------------------------------------------------------------

const storyDeck: Deck = {
  id: 'p1c2-story',
  chapter: CH,
  kind: 'story',
  title: 'Pip’s Picnic',
  blurb: 'A story run-through of the chapter: number bonds, putting together, counting on, + and =, and adding zero.',
  sections: ['C2.1', 'C2.2', 'C2.5'],
  refs: ['Recap'],
  minutes: 20,
  cover: { scene: 'beach', sprites: ['pip', 'bun', 'bun', 'cupcake'] },
  slides: [
    { id: 'title', title: 'Title', render: () => <Title kicker="An addition story" title="Pip’s Picnic" sub="Who’s hungry?" scene="beach" cast={[{ who: 'pip', x: 30 }, { who: 'bolt', x: 66, flip: true }]} /> },
    {
      id: 'packing',
      title: 'Packing the basket',
      ref: 'C2.1',
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'pip', x: 18 }, { who: 'jessie', x: 72, flip: true }]}
          lines={[
            { who: 'pip', text: 'Ribbit! Picnic day! I’m packing *8* buns.' },
            { who: 'jessie', text: 'Let’s put them in two bags. How can we split *8*?' },
            { who: 'pip', text: '*2 and 6 make 8.* Or *4 and 4*! There are lots of ways!', show: row(<><BondDiagram a={2} b={6} whole={8} size={1} /><BondDiagram a={4} b={4} whole={8} size={1} /></>) },
          ]}
        />
      ),
    },
    { id: 'split', title: 'Split 8 every way', ref: 'C2.1', render: () => <NumberBond wholes={[8]} start={8} /> },
    {
      id: 'beach',
      title: 'At the beach',
      ref: 'C2.1',
      render: () => (
        <Story
          scene="beach"
          cast={[{ who: 'bolt', x: 18 }, { who: 'ravi', x: 72, flip: true }]}
          lines={[
            { who: 'bolt', text: 'I found *5* shells! Ravi found *3* more.', show: groups('shell', 5, 3) },
            { who: 'ravi', text: 'Count on from 5: *6, 7, 8*. There are *8* shells altogether!' },
            { who: 'bolt', text: 'Beep! 5 + 3 = 8. Five *plus* three *equals* eight!', show: <div className="lx-eq">5 <span>+</span> 3 <span>=</span> 8</div> },
          ]}
        />
      ),
    },
    { id: 'count-shells', title: 'Count on the shells', ref: 'C2.1', render: () => <PutTogether sprite="shell" a={5} b={3} /> },
    {
      id: 'zero',
      title: 'Adding zero',
      ref: 'C2.5',
      render: () => (
        <Story
          scene="beach"
          cast={[{ who: 'jessie', x: 18 }, { who: 'pip', x: 72, flip: true }]}
          lines={[
            { who: 'jessie', text: 'There are *7* strawberries on my plate and *0* on the other plate.', show: row(<><SpriteRow name="cherry" n={7} size={2.6} /></>) },
            { who: 'pip', text: 'Adding *0* means adding nothing. *7 + 0 = 7*!', show: <div className="lx-eq">7 <span>+</span> 0 <span>=</span> 7</div> },
          ]}
        />
      ),
    },
    { id: 'eq', title: 'Write the equation', ref: 'C2.2', render: () => <EquationBuilder a={2} b={6} sprite="bun" /> },
    {
      id: 'finale',
      title: 'Picnic time!',
      notes: ['Recap: two parts make a whole; count on from the bigger number; + means plus, = means equals; adding 0 changes nothing.'],
      render: () => (
        <Story
          scene="beach"
          cast={[{ who: 'pip', x: 12 }, { who: 'jessie', x: 36 }, { who: 'bolt', x: 60 }, { who: 'ravi', x: 84, flip: true }]}
          lines={[
            { who: 'jessie', text: 'Two *parts* make a *whole*. 2 and 6 make 8!' },
            { who: 'ravi', text: 'To add, *count on* from the bigger number.' },
            { who: 'bolt', text: '*+* means plus. *=* means equals: the same value on both sides!' },
            { who: 'pip', text: 'And now… *8* buns for *8* friends? Hmm, there are only 4 of us. More for me! Ribbit! THE END.', show: <Sprite name="bun" size={5} /> },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Student packages
// ---------------------------------------------------------------------------

const bondQuest: Deck = {
  id: 'p1c2-quest-bonds',
  chapter: CH,
  kind: 'student',
  title: 'Bond Quest',
  blurb: 'Self-paced: find every bond of a number, hidden cubes and the make-10 memory game. Earns stars.',
  sections: ['C2.1'],
  refs: ['Practice 1'],
  minutes: 20,
  cover: { scene: 'beach', sprites: ['jessie', 'cube', 'cube', 'cube'] },
  slides: [
    { id: 'title', title: 'Start', render: () => <Title kicker="Student quest" title="Bond Quest" sub="Two parts make a whole!" scene="beach" cast={[{ who: 'jessie', x: 26 }, { who: 'bolt', x: 70, flip: true }]} /> },
    { id: 'bond-7', title: 'All the ways to make 7', scored: true, render: () => <NumberBond wholes={[7]} start={7} /> },
    { id: 'hidden-1', title: 'Hidden cubes', scored: true, render: () => <HiddenCubes max={7} /> },
    { id: 'hidden-2', title: 'More hidden cubes', scored: true, render: () => <HiddenCubes /> },
    { id: 'bond-10', title: 'All the ways to make 10', scored: true, render: () => <NumberBond wholes={[10]} start={10} /> },
    { id: 'make-10', title: 'Make 10 memory', scored: true, render: () => <MemoryPairs makeTen pairs={4} /> },
    {
      id: 'quiz',
      title: 'Boss round',
      scored: true,
      render: () => (
        <Quiz
          title="boss round"
          qs={[
            { prompt: '6 and ? make 9', visual: <BondDiagram a={6} b="?" whole={9} size={1.2} />, options: [2, 3, 4], answer: 3 },
            { prompt: '? and 5 make 10', visual: <BondDiagram a="?" b={5} whole={10} size={1.2} />, options: [4, 5, 6], answer: 5 },
            { prompt: '1 and 7 make…', visual: groups('cube', 1, 7), options: [6, 8, 9], answer: 8 },
          ]}
        />
      ),
    },
  ],
}

const plusQuest: Deck = {
  id: 'p1c2-quest-plus',
  chapter: CH,
  kind: 'student',
  title: 'Plus Quest',
  blurb: 'Self-paced: altogether, count on, the adding machine, writing equations and the fact hunt. Earns stars.',
  sections: ['C2.2', 'C2.5', 'C2.7'],
  refs: ['Practice 2–5'],
  minutes: 20,
  cover: { scene: 'space', sprites: ['bolt', 'star', 'star'] },
  slides: [
    { id: 'title', title: 'Start', render: () => <Title kicker="Student quest" title="Plus Quest" sub="Add them up!" scene="space" cast={[{ who: 'bolt', x: 30 }, { who: 'ravi', x: 68, flip: true }]} /> },
    { id: 'together', title: 'Altogether', scored: true, render: () => <PutTogether random sprite="apple" /> },
    { id: 'count-on', title: 'Count on', scored: true, render: () => <PutTogether card random /> },
    { id: 'machine', title: 'Adding machine', scored: true, render: () => <AddMachine k={2} /> },
    { id: 'equation', title: 'Write the equation', scored: true, render: () => <EquationBuilder /> },
    { id: 'hunt', title: 'Fact hunt', scored: true, render: () => <FactHunt /> },
    {
      id: 'quiz',
      title: 'Boss round',
      scored: true,
      render: () => (
        <Quiz
          title="boss round"
          qs={[
            { prompt: '4 + 5 = ?', visual: groups('fish', 4, 5), options: [8, 9, 10], answer: 9 },
            { prompt: '0 + 6 = ?', visual: <SpriteRow name="duck" n={6} size={2.6} />, options: [0, 6, 7], answer: 6 },
            { prompt: '2 more than 8 is…', visual: <NumCard n={8} size={7} />, options: [9, 10, 6], answer: 10 },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Toolkit
// ---------------------------------------------------------------------------

function tool(id: string, title: string, blurb: string, scene: Scene, sprites: SpriteName[], el: () => ReactNode, sections: string[]): Deck {
  return { id, chapter: CH, kind: 'tool', title, blurb, sections, refs: [], minutes: 0, cover: { scene, sprites }, slides: [{ id: 'tool', title, render: el }] }
}

const tools: Deck[] = [
  tool('tool-bonds', 'Number bond builder', 'Split any whole from 5 to 10 into two parts and record every way.', 'beach', ['counterRed', 'counterYellow'], () => <NumberBond wholes={[5, 6, 7, 8, 9, 10]} start={5} />, ['C2.1']),
  tool('tool-hidden', 'Hidden cubes', 'Count, hide some under the cup, ask how many are hiding.', 'class', ['cube', 'cube'], () => <HiddenCubes />, ['C2.1']),
  tool('tool-together', 'Plates: count on', 'Two plates, count all or count on, swap the order.', 'market', ['tomato', 'tomato'], () => <PutTogether random sprite="tomato" />, ['C2.1']),
  tool('tool-machine', 'Adding machine', 'Drop a number in; it comes out 1, 2, 3 or 4 more.', 'space', ['bolt'], () => <AddMachine />, ['C2.5']),
  tool('tool-equation', 'Equation builder', 'Random picture stories to write as _ + _ = _.', 'paper', ['star', 'star'], () => <EquationBuilder />, ['C2.2']),
  tool('tool-facts', 'Fact hunt', 'Find every fact with the same value. Quick-recall race.', 'night', ['star'], () => <FactHunt />, ['C2.7']),
  tool('tool-story', 'Story maker', 'Build addition stories with pictures, then the equation.', 'pond', ['duck', 'duck'], () => <StoryMaker />, ['C2.5']),
  tool('tool-make10', 'Make 10 memory', 'Team game: a dot card and a numeral that make 10.', 'space', ['trophy'], () => <MemoryPairs makeTen pairs={5} />, ['C2.1']),
]

export const CHAPTER_2_DECKS: Deck[] = [bondsDeck, addDeck, plusDeck, storyDeck, bondQuest, plusQuest, ...tools]
