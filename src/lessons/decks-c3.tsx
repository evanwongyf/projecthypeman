import type { ReactNode } from 'react'
import type { Chapter, Deck } from './decks'
import { Sprite, type SpriteName } from './pixel'
import { BondDiagram, DotCard, NumCard, SpriteRow, type Scene } from './kit'
import { Story, Teach, Title } from './scenes'
import { Quiz } from './comparing'
import { EquationBuilder, FactHunt, NumberBond, StoryMaker } from './addition'
import { CupCountBack, FactFamily, FactFlash, FlyAway, MakeTenTray, Mangoes, TakeAway, TossTen } from './subtraction'

export const CHAPTER_3: Chapter = {
  id: 'p1-c3',
  number: 3,
  level: 'Primary 1',
  title: 'Subtraction within 10',
  sections: [
    { id: 'C2.1', name: 'Concepts of subtraction and number bonds' },
    { id: 'C2.2', name: 'Use of − and =' },
    { id: 'C2.3', name: 'Addition and subtraction are related' },
    { id: 'C2.5', name: 'Subtracting within 10' },
    { id: 'C2.7', name: 'Mental calculation within 10' },
  ],
}

const CH = 'p1-c3'

const row = (children: ReactNode) => <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>{children}</div>
const eq = (text: string) => <div className="lx-eq">{text}</div>
const crossed = (s: SpriteName, n: number, k: number, size = 2.6) => (
  <div style={{ display: 'flex', gap: '0.4em', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '30em' }}>
    {[...Array(n)].map((_, i) => (
      <span key={i} className={`lx-set-thing ${i >= n - k ? 'lx-gone' : ''}`}>
        <Sprite name={s} size={size} />
      </span>
    ))}
  </div>
)
const balloons = (n: number, size = 3) => (
  <div style={{ display: 'flex', gap: '0.3em' }}>
    {[...Array(n)].map((_, i) => (
      <Sprite key={i} name="balloon" size={size} pal={{ R: ['#e8423f', '#ffd23f', '#3d7be0', '#4fc35a', '#ff8fb8', '#a565f0'][i % 6], r: '#1d2238' }} />
    ))}
  </div>
)

// ---------------------------------------------------------------------------
// Class deck 1: bonds again, and taking away
// ---------------------------------------------------------------------------

const awayDeck: Deck = {
  id: 'p1c3-away',
  chapter: CH,
  kind: 'class',
  title: 'Park Day: Taking Away',
  blurb: 'Number bonds again, then subtraction as taking away: tell stories, cross things out, count back and one less.',
  sections: ['C2.1'],
  refs: ['R1', 'E2', 'M3', 'E4', 'E5', 'E6'],
  minutes: 45,
  cover: { scene: 'pond', sprites: ['jessie', 'balloon', 'balloon', 'balloon'] },
  slides: [
    {
      id: 'title',
      title: 'Title',
      render: () => <Title kicker="P1 · Subtraction within 10 · Lesson 1" title="Park Day" sub="Some go away. How many are left?" scene="pond" cast={[{ who: 'jessie', x: 24 }, { who: 'bolt', x: 72, flip: true }]} />,
    },
    {
      id: 'story-park',
      title: 'Story: balloons at the park',
      ref: 'C2.1 · R1',
      notes: ['Recap number bonds and addition with a number story before any subtraction.'],
      ask: ['What do you see in the picture?', 'How many balloons are there altogether?'],
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'jessie', x: 16 }, { who: 'bolt', x: 74, flip: true }]}
          props={[{ sprite: 'balloon', x: 40, y: 10, size: 3 }, { sprite: 'balloon', x: 46, y: 16, size: 2.6 }, { sprite: 'butterfly', x: 62, y: 30, size: 2 }]}
          lines={[
            { who: 'jessie', text: 'Look! *6* balloons are on the balloon cart.', show: balloons(6) },
            { who: 'bolt', text: 'And *4* balloons are flying in the sky!', show: balloons(4) },
            { who: 'jessie', text: 'There are *10* balloons altogether. *6 and 4 make 10.*', show: <BondDiagram a={6} b={4} whole={10} size={1.2} /> },
          ]}
        />
      ),
    },
    {
      id: 'bond-10',
      title: 'Split 10',
      ref: 'C2.1 · E2',
      notes: ['Move 4 counters into one part: how many are not in it? Then bring the parts together: “4 and 6 make 10”.', 'Repeat for 6, 7, 8 and 9.'],
      ask: ['How many are in this part? How many are not?', 'Have we found all the ways?'],
      render: () => <NumberBond wholes={[10, 6, 7, 8, 9]} start={10} />,
    },
    {
      id: 'toss',
      title: 'Toss 10 counters',
      ref: 'C2.1 · M3',
      notes: ['Pairs toss ten two-colour counters and record what lands. Partners check the bond makes 10.', 'No turning counters over to the colour you want!'],
      render: () => <TossTen />,
    },
    {
      id: 'reverse',
      title: 'Put together, take apart',
      ref: 'C2.1 · E4',
      notes: ['Press → to reveal each card.', 'Subtraction is the reverse of addition. Don’t ask students to memorise “part-whole”.', 'Don’t use the − sign yet.'],
      render: () => (
        <Teach
          title="Together and apart"
          scene="sky"
          guide={{ who: 'bolt', text: 'Forwards and backwards!' }}
          cards={[
            { head: 'put together', body: '3 beads and 2 beads make 5 beads.', visual: <BondDiagram a={3} b={2} whole={5} size={0.85} /> },
            { head: 'take apart', body: '5 beads: 3 are blue, 2 are green.', visual: row(<><SpriteRow name="counterYellow" n={3} size={1.8} pal={{ Y: '#3d7be0', y: '#1f4fa8' }} /><SpriteRow name="counterYellow" n={2} size={1.8} pal={{ Y: '#4fc35a', y: '#2e8a3c' }} /></>) },
            { head: 'take away', body: 'I have 5 beads. I give 2 away. 3 are left.', visual: crossed('counterRed', 5, 2, 2) },
          ]}
        />
      ),
    },
    {
      id: 'story-beads',
      title: 'Story: giving beads away',
      ref: 'C2.1 · E4',
      notes: ['Act it out with real objects: “I have 5 beads, take away 2 beads, I will have 3 beads left.”'],
      render: () => (
        <Story
          scene="class"
          cast={[{ who: 'jessie', x: 18 }, { who: 'ravi', x: 72, flip: true }]}
          lines={[
            { who: 'jessie', text: 'I have *5* beads.', show: <SpriteRow name="counterRed" n={5} size={3} /> },
            { who: 'jessie', text: 'I give Ravi *2* beads.', show: crossed('counterRed', 5, 2, 3) },
            { who: 'ravi', text: 'Now Jessie has *3* beads *left*. 5 take away 2 leaves 3!', show: <BondDiagram a={3} b={2} whole={5} size={1.2} /> },
          ]}
        />
      ),
    },
    {
      id: 'take-away',
      title: 'Take away and count back',
      ref: 'C2.1 · E4, E5',
      notes: ['Tap each one you take away. The blue badge shows counting back: 9, 8, 7…', 'Check students count backwards, not forwards.'],
      ask: ['How many were there altogether?', 'How many did we take away?', 'How many are left?'],
      render: () => <TakeAway n={9} k={3} sprite="cherry" />,
    },
    {
      id: 'cup',
      title: 'Hidden in the cup',
      ref: 'C2.1 · E5',
      notes: ['Some counters hide in the cup. Take the others away one by one and count back from 10: “9, 8, 7, 6”. The last number says how many are in the cup.'],
      ask: ['How many are hiding in the cup? How do you know?'],
      render: () => <CupCountBack />,
    },
    {
      id: 'one-less',
      title: 'One less',
      ref: 'C2.1 · E6',
      notes: ['“Now there is one less. There are 4 butterflies left.” Then try 2 less and 3 less.', 'Act it out: 5 students come up, 1 goes back to sit.'],
      ask: ['How many butterflies are left?'],
      render: () => <FlyAway start={5} />,
    },
    {
      id: 'quiz',
      title: 'Quick check',
      ref: 'C2.1',
      render: () => (
        <Quiz
          qs={[
            { prompt: '7 cupcakes. 2 are eaten. How many are left?', visual: crossed('cupcake', 7, 2), options: [4, 5, 9], answer: 5 },
            { prompt: '1 less than 6 is…', visual: <NumCard n={6} size={7} />, options: [5, 7, 4], answer: 5 },
            { prompt: 'Count back from 8, three times. Where do you stop?', visual: <NumCard n={8} size={7} />, options: [4, 5, 6], answer: 5 },
            { prompt: '4 and ? make 10', visual: <BondDiagram a={4} b="?" whole={10} size={1.2} />, options: [5, 6, 7], answer: 6 },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Class deck 2: − and =
// ---------------------------------------------------------------------------

const minusDeck: Deck = {
  id: 'p1c3-minus',
  chapter: CH,
  kind: 'class',
  title: 'Minus and Equals',
  blurb: 'Writing subtraction equations for take-away and part-whole stories, all the facts for a number, and a fact-card game.',
  sections: ['C2.2', 'C2.5'],
  refs: ['E7', 'M8', 'M9'],
  minutes: 40,
  cover: { scene: 'sky', sprites: ['bolt', 'balloon', 'balloon'] },
  slides: [
    {
      id: 'title',
      title: 'Title',
      render: () => <Title kicker="P1 · Subtraction within 10 · Lesson 2" title="Minus & Equals" sub="Write it the maths way!" scene="sky" cast={[{ who: 'ravi', x: 24 }, { who: 'bolt', x: 72, flip: true }]} />,
    },
    {
      id: 'story-minus',
      title: 'Story: the balloons fly away',
      ref: 'C2.2 · E7',
      notes: ['Cover the 6 in the bond, then tell the story backwards.', 'Point to each number and symbol as you read the equation.'],
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'ravi', x: 16 }, { who: 'bolt', x: 74, flip: true }]}
          lines={[
            { who: 'ravi', text: 'There were *10* balloons altogether. *4* flew away!', show: crossed('balloon', 10, 4, 2.6) },
            { who: 'bolt', text: 'There are *6* balloons *left*. Beep! How do I write that?', show: <BondDiagram a={6} b={4} whole={10} size={1.2} /> },
            { who: 'ravi', text: 'We use *−* for “minus”. *10 − 4 = 6*. Ten minus four equals six!', show: eq('10 − 4 = 6') },
            { who: 'bolt', text: 'We can also say: *take away* 4 from 10, or *subtract* 4 from 10. It’s still *6*!' },
          ]}
        />
      ),
    },
    {
      id: 'symbols',
      title: 'Reading subtraction',
      ref: 'C2.2 · E7',
      notes: ['Press → to reveal each card.', 'Subtraction is the reverse of addition: the bond is the same.'],
      render: () => (
        <Teach
          title="Ways to say it"
          scene="sky"
          guide={{ who: 'ravi', text: 'Same bond, read backwards!' }}
          cards={[
            { head: '− minus', body: 'Take a part away from the whole.', visual: <span className="lx-bignum-inline">−</span> },
            { head: '9 − 3 = 6', body: '“Nine minus three equals six.”', visual: crossed('cherry', 9, 3, 1.8) },
            { head: 'take away', body: '“Take away 3 from 9 equals 6.”', visual: <BondDiagram a={3} b={6} whole={9} size={0.85} /> },
            { head: 'part-whole', body: '8 flowers, 4 are red. 8 − 4 = 4 yellow.', visual: row(<><SpriteRow name="flower" n={4} size={1.6} gap={0.15} /><SpriteRow name="flower" n={4} size={1.6} gap={0.15} pal={{ P: '#ffd23f' }} /></>) },
          ]}
        />
      ),
    },
    {
      id: 'eq-away',
      title: 'Write it: taking away',
      ref: 'C2.2 · E7',
      notes: ['Start with the whole, then the part taken away.', 'The “other fact” uses the same bond: 9 − 6 = 3.'],
      ask: ['What is the whole? What did we take away?', 'Read the equation aloud.'],
      render: () => <EquationBuilder op="-" a={9} b={3} sprite="cherry" kind="away" />,
    },
    {
      id: 'eq-part',
      title: 'Write it: part-whole',
      ref: 'C2.2 · E7',
      notes: ['Part-whole: the whole is split into two kinds. Subtract the part we know to find the other.', '“How can we find the number of yellow ones? Take the whole and subtract the red ones.”'],
      render: () => <EquationBuilder op="-" kind="part" />,
    },
    {
      id: 'facts-7',
      title: 'Every fact for 7',
      ref: 'C2.5 · M8',
      notes: ['Recall the bonds of 7 and write each as a subtraction on whiteboards.', 'Press → to reveal each pair.'],
      render: () => (
        <Teach
          title="Subtraction facts for 7"
          scene="paper"
          guide={{ who: 'bolt', text: 'Each bond gives two facts!' }}
          cards={[
            { head: '7 − 1 = 6', body: 'and 7 − 6 = 1', visual: <BondDiagram a={1} b={6} whole={7} size={0.85} /> },
            { head: '7 − 2 = 5', body: 'and 7 − 5 = 2', visual: <BondDiagram a={2} b={5} whole={7} size={0.85} /> },
            { head: '7 − 3 = 4', body: 'and 7 − 4 = 3', visual: <BondDiagram a={3} b={4} whole={7} size={0.85} /> },
          ]}
        />
      ),
    },
    {
      id: 'more-stories',
      title: 'More subtraction stories',
      ref: 'C2.5 · M8',
      notes: ['Switch between “take away” and “part-whole” stories. Students only tell the story and write the equation.'],
      render: () => <EquationBuilder op="-" />,
    },
    {
      id: 'cards',
      title: 'Subtraction fact cards',
      ref: 'C2.7 · M9',
      notes: ['Two teams: say the answer, turn the card over to check, then tap “correct!” or “not quite”.', 'Start with facts within 5; move to within 10 when ready. Ask how they got each answer.'],
      render: () => <FactFlash ops="sub" />,
    },
    {
      id: 'quiz',
      title: 'Quick check',
      ref: 'C2.2, C2.5',
      render: () => (
        <Quiz
          qs={[
            { prompt: 'Which equation fits?', visual: crossed('balloon', 8, 3), options: ['8 − 3 = 5', '8 + 3 = 11', '5 − 3 = 2'], answer: '8 − 3 = 5' },
            { prompt: '10 − 4 = ?', visual: eq('10 − 4 = ?'), options: [5, 6, 7], answer: 6 },
            { prompt: '6 fish, 4 are small. How many are big?', visual: row(<><SpriteRow name="fish" n={4} size={2} /><SpriteRow name="fish" n={2} size={3} /></>), options: [2, 4, 10], answer: 2 },
            { prompt: '5 − 0 = ?', visual: <SpriteRow name="apple" n={5} size={2.6} />, options: [0, 5, 4], answer: 5 },
          ]}
        />
      ),
    },
  ],
}

// ---------------------------------------------------------------------------
// Class deck 3: families of facts
// ---------------------------------------------------------------------------

const familyDeck: Deck = {
  id: 'p1c3-family',
  chapter: CH,
  kind: 'class',
  title: 'Fact Families',
  blurb: 'Addition and subtraction are related: four facts from one bond, the mixed fact hunt, stories, making 10 and the mango puzzle.',
  sections: ['C2.3', 'C2.7'],
  refs: ['E10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M17'],
  minutes: 45,
  cover: { scene: 'sky', sprites: ['ladybug', 'ladybug', 'ladybug', 'ladybug'] },
  slides: [
    {
      id: 'title',
      title: 'Title',
      render: () => <Title kicker="P1 · Subtraction within 10 · Lesson 3" title="Fact Families" sub="One bond, four facts!" scene="sky" cast={[{ who: 'pip', x: 24 }, { who: 'jessie', x: 72, flip: true }]} />,
    },
    {
      id: 'story-ladybirds',
      title: 'Story: ladybirds',
      ref: 'C2.3 · E10',
      notes: ['Make an addition story and a subtraction story from the same picture.', 'Students only tell stories; they write the equations.'],
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'pip', x: 16 }, { who: 'jessie', x: 74, flip: true }]}
          props={[{ sprite: 'ladybug', x: 34, y: 18, size: 1.6 }, { sprite: 'ladybug', x: 44, y: 12, size: 1.6 }, { sprite: 'ladybug', x: 54, y: 20, size: 1.6 }]}
          lines={[
            { who: 'pip', text: '*5* ladybirds are on the leaves. *3* ladybirds are flying. *8* altogether!', show: eq('5 + 3 = 8') },
            { who: 'jessie', text: 'And *3 + 5 = 8* too!', show: eq('3 + 5 = 8') },
            { who: 'pip', text: 'There are *8* ladybirds. *3* fly away. *5* are left on the leaves.', show: eq('8 − 3 = 5') },
            { who: 'jessie', text: 'And *8 − 5 = 3*. That’s a whole *family of facts*!', show: <BondDiagram a={5} b={3} whole={8} size={1.2} /> },
          ]}
        />
      ),
    },
    {
      id: 'family-apples',
      title: 'A family of facts',
      ref: 'C2.3 · E10',
      notes: ['Tap each “?” to reveal. 4 red and 3 green apples: 4 + 3 = 7, 3 + 4 = 7, 7 − 4 = 3, 7 − 3 = 4.'],
      ask: ['Tell me an addition story. Now a subtraction story.'],
      render: () => <FactFamily a={4} b={3} sprite="apple" />,
    },
    {
      id: 'family-any',
      title: 'Choose two numbers',
      ref: 'C2.3 · M11',
      notes: ['Pairs choose two numbers (at most one more than 5) and write the four facts.', '“New family” gives a new pair.'],
      render: () => <FactFamily sprite="flower" />,
    },
    {
      id: 'hunt',
      title: 'Same value hunt',
      ref: 'C2.7 · M14',
      notes: ['Find every addition and subtraction card with the same value. “=” means the same value.'],
      render: () => <FactHunt mixed />,
    },
    {
      id: 'cards',
      title: 'Mixed fact cards',
      ref: 'C2.7 · M13',
      notes: ['Addition and subtraction cards mixed. Teams take turns.'],
      render: () => <FactFlash ops="mixed" />,
    },
    {
      id: 'stories',
      title: 'Make number stories',
      ref: 'C2.5 · M12',
      notes: ['Each group gets a target answer and makes one addition and one subtraction story for it.', 'Let students tell their stories if they are not ready to write them.'],
      render: () => <StoryMaker kinds={['away', 'together', 'more']} />,
    },
    {
      id: 'tray',
      title: 'Mathematics around us',
      ref: 'C2.7 · M15',
      notes: ['How many more to make 10? Students may use number facts, count on, count back or subtract from 10.', 'Find more examples: shopping, cooking, saving, sports scores.'],
      render: () => <MakeTenTray />,
    },
    {
      id: 'mangoes',
      title: 'Thinking aloud: mangoes',
      ref: 'C2.7 · M16',
      notes: ['We don’t know how many mangoes there are, so try different numbers for Ravi.', 'Use “more than”, “fewer than” and “the same number”.'],
      ask: ['What do you know about the number of mangoes each child has?', 'Is it always true? Try another number.'],
      render: () => <Mangoes />,
    },
    {
      id: 'review',
      title: 'Review: chapters 1 to 3',
      ref: 'M17 · Review 1',
      notes: ['A quick review across numbers, addition and subtraction to 10.'],
      render: () => (
        <Quiz
          title="review"
          qs={[
            { prompt: 'How many stars?', visual: <SpriteRow name="star" n={8} size={2.6} />, options: [7, 8, 9], answer: 8 },
            { prompt: 'What comes next? 10, 9, 8, 7, …', visual: <NumCard n={7} size={6} />, options: [6, 8, 5], answer: 6 },
            { prompt: '7 is greater than…', visual: <NumCard n={7} size={6} />, options: [9, 4, 7], answer: 4 },
            { prompt: '6 + 2 = ?', visual: row(<><NumCard n={6} size={6} /><DotCard n={2} size={6} /></>), options: [7, 8, 9], answer: 8 },
            { prompt: '9 − 3 = ?', visual: crossed('apple', 9, 3, 2.2), options: [5, 6, 7], answer: 6 },
            { prompt: 'Which fact is in the family of 2, 5, 7?', visual: <BondDiagram a={2} b={5} whole={7} size={1.1} />, options: ['7 − 2 = 5', '5 − 2 = 3', '7 + 2 = 9'], answer: '7 − 2 = 5' },
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
  id: 'p1c3-story',
  chapter: CH,
  kind: 'story',
  title: 'Bolt’s Balloon Day',
  blurb: 'A story run-through of the chapter: balloons fly away, counting back, one less, minus and a family of facts.',
  sections: ['C2.1', 'C2.2', 'C2.3'],
  refs: ['Recap'],
  minutes: 20,
  cover: { scene: 'sky', sprites: ['bolt', 'balloon', 'balloon', 'balloon'] },
  slides: [
    { id: 'title', title: 'Title', render: () => <Title kicker="A subtraction story" title="Bolt’s Balloon Day" sub="Hold on tight!" scene="sky" cast={[{ who: 'bolt', x: 46 }]} /> },
    {
      id: 'balloons',
      title: '10 balloons',
      ref: 'C2.1',
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'bolt', x: 20 }, { who: 'pip', x: 74, flip: true }]}
          lines={[
            { who: 'bolt', text: 'Beep! I bought *10* balloons for the party!', show: balloons(10, 2.6) },
            { who: 'pip', text: 'Whoosh! The wind blew *3* away!', show: crossed('balloon', 10, 3, 2.6) },
            { who: 'bolt', text: 'Count back with me: *10… 9, 8, 7*. I have *7* left.', show: eq('10 − 3 = 7') },
          ]}
        />
      ),
    },
    { id: 'take', title: 'Take away', ref: 'C2.1', render: () => <TakeAway n={10} k={3} sprite="balloon" /> },
    {
      id: 'butterflies',
      title: 'One less',
      ref: 'C2.1',
      render: () => (
        <Story
          scene="pond"
          cast={[{ who: 'jessie', x: 18 }, { who: 'bolt', x: 74, flip: true }]}
          lines={[
            { who: 'jessie', text: 'Look, Bolt! *5* butterflies are dancing in the garden.' },
            { who: 'bolt', text: 'One flew away! Now there is *one less*. *4* are left!' },
          ]}
        />
      ),
    },
    { id: 'fly', title: 'Fly away', ref: 'C2.1', render: () => <FlyAway start={5} /> },
    {
      id: 'family',
      title: 'Party facts',
      ref: 'C2.3',
      render: () => (
        <Story
          scene="class"
          cast={[{ who: 'ravi', x: 14 }, { who: 'jessie', x: 38 }, { who: 'bolt', x: 62 }, { who: 'pip', x: 86, flip: true }]}
          lines={[
            { who: 'ravi', text: 'At the party: *4* red balloons and *3* yellow ones. *7* altogether!', show: <BondDiagram a={4} b={3} whole={7} size={1.2} /> },
            { who: 'jessie', text: '4 + 3 = 7 and 3 + 4 = 7.', show: eq('4 + 3 = 7') },
            { who: 'bolt', text: '7 − 4 = 3 and 7 − 3 = 4. A *family of facts*! Beep boop!', show: eq('7 − 4 = 3') },
            { who: 'pip', text: 'And we still have balloons to take home. Ribbit! THE END.' },
          ]}
        />
      ),
    },
    { id: 'family-fact', title: 'Write the family', ref: 'C2.3', render: () => <FactFamily a={4} b={3} sprite="balloon" /> },
  ],
}

// ---------------------------------------------------------------------------
// Student packages
// ---------------------------------------------------------------------------

const awayQuest: Deck = {
  id: 'p1c3-quest-away',
  chapter: CH,
  kind: 'student',
  title: 'Take-Away Quest',
  blurb: 'Self-paced: take away and count back, the cup game, writing subtraction equations and fact cards. Earns stars.',
  sections: ['C2.1', 'C2.2', 'C2.5'],
  refs: ['Practice 1–5'],
  minutes: 20,
  cover: { scene: 'market', sprites: ['ravi', 'cupcake', 'cupcake'] },
  slides: [
    { id: 'title', title: 'Start', render: () => <Title kicker="Student quest" title="Take-Away Quest" sub="How many are left?" scene="market" cast={[{ who: 'ravi', x: 26 }, { who: 'bolt', x: 70, flip: true }]} /> },
    { id: 'take-1', title: 'Take away', scored: true, render: () => <TakeAway random /> },
    { id: 'take-2', title: 'Take away again', scored: true, render: () => <TakeAway random /> },
    { id: 'cup', title: 'Count back: the cup', scored: true, render: () => <CupCountBack /> },
    { id: 'eq', title: 'Write the equation', scored: true, render: () => <EquationBuilder op="-" /> },
    { id: 'cards', title: 'Fact cards', scored: true, render: () => <FactFlash ops="sub" /> },
    {
      id: 'quiz',
      title: 'Boss round',
      scored: true,
      render: () => (
        <Quiz
          title="boss round"
          qs={[
            { prompt: '6 − 2 = ?', visual: crossed('fish', 6, 2), options: [3, 4, 8], answer: 4 },
            { prompt: '10 − 5 = ?', visual: eq('10 − 5 = ?'), options: [4, 5, 6], answer: 5 },
            { prompt: '2 less than 9 is…', visual: <NumCard n={9} size={7} />, options: [7, 8, 11], answer: 7 },
          ]}
        />
      ),
    },
  ],
}

const familyQuest: Deck = {
  id: 'p1c3-quest-family',
  chapter: CH,
  kind: 'student',
  title: 'Family Quest',
  blurb: 'Self-paced: families of facts, the same-value hunt, mixed fact cards and making 10. Earns stars.',
  sections: ['C2.3', 'C2.7'],
  refs: ['Practice 6', 'Review 1'],
  minutes: 20,
  cover: { scene: 'sky', sprites: ['pip', 'ladybug', 'ladybug'] },
  slides: [
    { id: 'title', title: 'Start', render: () => <Title kicker="Student quest" title="Family Quest" sub="One bond, four facts!" scene="sky" cast={[{ who: 'pip', x: 26 }, { who: 'jessie', x: 70, flip: true }]} /> },
    { id: 'family-1', title: 'Fact family', scored: true, render: () => <FactFamily sprite="apple" /> },
    { id: 'family-2', title: 'Another family', scored: true, render: () => <FactFamily sprite="star" /> },
    { id: 'hunt', title: 'Same value hunt', scored: true, render: () => <FactHunt mixed /> },
    { id: 'tray', title: 'Make 10', scored: true, render: () => <MakeTenTray /> },
    { id: 'cards', title: 'Mixed fact cards', scored: true, render: () => <FactFlash ops="mixed" /> },
    {
      id: 'quiz',
      title: 'Boss round',
      scored: true,
      render: () => (
        <Quiz
          title="boss round"
          qs={[
            { prompt: '5 + 4 = 9, so 9 − 4 = ?', visual: <BondDiagram a={5} b={4} whole={9} size={1.1} />, options: [4, 5, 13], answer: 5 },
            { prompt: '3 + ? = 10', visual: eq('3 + ? = 10'), options: [6, 7, 8], answer: 7 },
            { prompt: 'Which is NOT in the family of 1, 6, 7?', visual: <BondDiagram a={1} b={6} whole={7} size={1.1} />, options: ['7 − 1 = 6', '6 − 1 = 5', '1 + 6 = 7'], answer: '6 − 1 = 5' },
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
  tool('tool-takeaway', 'Take away', 'Tap things to take them away while counting back.', 'market', ['cupcake', 'cupcake'], () => <TakeAway random />, ['C2.1']),
  tool('tool-flyaway', 'Butterflies: 1 less', 'Butterflies fly away 1, 2 or 3 at a time.', 'pond', ['butterfly', 'butterfly'], () => <FlyAway start={8} />, ['C2.1']),
  tool('tool-cupback', 'Cup count back', 'Hide some in the cup, count back the rest.', 'class', ['counterRed', 'counterRed'], () => <CupCountBack />, ['C2.1']),
  tool('tool-toss', 'Toss 10', 'Toss two-colour counters and record bonds of 10.', 'class', ['counterRed', 'counterYellow'], () => <TossTen />, ['C2.1']),
  tool('tool-subeq', 'Subtraction equations', 'Random take-away and part-whole stories to write.', 'paper', ['balloon', 'balloon'], () => <EquationBuilder op="-" />, ['C2.2']),
  tool('tool-family', 'Fact families', 'Any bond, its two addition and two subtraction facts.', 'sky', ['ladybug', 'ladybug'], () => <FactFamily sprite="ladybug" />, ['C2.3']),
  tool('tool-factcards', 'Fact cards', 'Team flash cards: subtraction, or mixed with addition.', 'space', ['star'], () => <FactFlash ops="mixed" />, ['C2.7']),
  tool('tool-tray', 'Make 10 tray', 'How many more to make 10?', 'market', ['bun', 'bun'], () => <MakeTenTray />, ['C2.7']),
]

export const CHAPTER_3_DECKS: Deck[] = [awayDeck, minusDeck, familyDeck, storyDeck, awayQuest, familyQuest, ...tools]
