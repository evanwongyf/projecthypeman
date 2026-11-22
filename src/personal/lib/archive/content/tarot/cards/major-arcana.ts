import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The twenty-two Major Arcana are the heart of the deck: a sequence of images from the Fool, setting out on a journey, to the World, which completes it. Since the early twentieth century, readers have treated the series as a story of growth, the Fool’s journey, in which the Fool meets teachers, temptations and crises and returns changed. This guide gives the three acts of the journey, the pairs and patterns that help you remember the cards, and the browser below shows every card with upright and reversed meanings and a question to reflect on.',
  nutshell: [
    'The Majors are numbered **0 to XXI**. The **Fool (0)** begins the journey and the **World (XXI)** completes it.',
    'The sequence can be read in **three acts**: building a self in the world (0 to VII), inner work and integration (VIII to XIV), and facing shadow, crisis and renewal (XV to XXI).',
    'Majors in a spread usually point to **bigger themes** than Minor cards. Many Majors suggest an important or fated-feeling stage.',
    'Numbers help memory: **I** (the Magician) and **XI** (Justice) share the digit pattern of beginnings and balance; **XIII** is Death (transformation), not literal death.',
    'In Rider-Waite-Smith, **Strength is VIII and Justice is XI**. In Marseille decks they are reversed.',
  ],
  sections: [
    {
      id: 'browse',
      title: 'The 22 cards',
      blocks: [
        { t: 'tarot', mode: 'deck', suit: 'major' },
        { t: 'callout', tone: 'tip', title: 'How to use the browser', text: 'Tap a card, read the one-sentence meaning, then the upright and reversed keywords, then the question. Before moving on, close your eyes and say the meaning in your own words.' },
      ],
    },
    {
      id: 'journey',
      title: 'The Fool’s journey in three acts',
      blocks: [
        {
          t: 'table',
          head: ['Act', 'Cards', 'Story'],
          rows: [
            ['I. Entering the world', '0 The Fool, I The Magician, II The High Priestess, III The Empress, IV The Emperor, V The Hierophant, VI The Lovers, VII The Chariot', 'The Fool starts out, learns skills and intuition, meets nature and authority, tradition, love and a choice, and gains early mastery and momentum'],
            ['II. Looking inward', 'VIII Strength, IX The Hermit, X Wheel of Fortune, XI Justice, XII The Hanged Man, XIII Death, XIV Temperance', 'Gentle strength, solitude, the turn of fortune, accountability, surrender, transformation and balance'],
            ['III. Shadow, crisis and completion', 'XV The Devil, XVI The Tower, XVII The Star, XVIII The Moon, XIX The Sun, XX Judgement, XXI The World', 'Confronting attachments and illusions, collapse of false structures, hope, fear, joy, a reckoning and wholeness'],
          ],
          caption: 'The three-act reading is a modern convention (popularised in the twentieth century). It is a useful memory device, not an original design.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: '0 to VII', title: 'Outer development', body: 'Initiative, knowledge, nurture, structure, belonging, choice, drive. These are the tasks of becoming an adult in the world.' },
            { tag: 'VIII to XIV', title: 'Inner development', body: 'Quiet courage, wisdom, change, fairness, letting go, endings and the integration of opposites.' },
            { tag: 'XV to XXI', title: 'Confrontation and fulfilment', body: 'Facing what binds and deceives, going through upheaval, finding hope and joy and answering a call, finally arriving at wholeness.' },
            { tag: 'Cycle', title: 'It begins again', body: 'The World is not an ending but a threshold. The Fool starts out again, now with experience.' },
          ],
        },
      ],
    },
    {
      id: 'patterns',
      title: 'Patterns that help memory',
      blocks: [
        {
          t: 'table',
          head: ['Pair or group', 'Link'],
          rows: [
            ['The Magician (I) and the High Priestess (II)', 'Active will and receptive intuition, the conscious and unconscious'],
            ['The Empress (III) and the Emperor (IV)', 'Nurture and structure; feminine and masculine archetypes of care and authority'],
            ['The Hierophant (V) and the Lovers (VI)', 'Inherited belonging versus chosen commitment'],
            ['Strength (VIII) and the Hermit (IX)', 'Inner courage and inner guidance'],
            ['Justice (XI), the Hanged Man (XII) and Death (XIII)', 'Weighing, suspending and ending: three kinds of change'],
            ['The Devil (XV) and the Tower (XVI)', 'Bondage and the breaking of bondage'],
            ['The Star (XVII), the Moon (XVIII), the Sun (XIX)', 'Hope, fear and joy: three states of light'],
            ['Judgement (XX) and the World (XXI)', 'The call, then completion'],
          ],
        },
        {
          t: 'dodont',
          do: ['Treat “scary” cards (Death, the Tower, the Devil) as symbolic: change, upheaval, attachment.', 'Read each Major in light of your question rather than as a fixed fate.', 'Notice when several Majors appear together: the question may touch something big.'],
          dont: ['Read Death as a prediction of death.', 'Read the Tower as a certain disaster.', 'Assume a Major always outweighs a Minor.'],
        },
        { t: 'links', items: [{ path: 'tarot/cards/wands', note: 'Next: the suit of Wands' }, { path: 'tarot/psychology-and-evidence', note: 'Archetypes and Jung' }] },
      ],
    },
  ],
  sources: [
    'Waite, A. E. (1911). The Pictorial Key to the Tarot.',
    'Nichols, S. (1980). Jung and Tarot: An Archetypal Journey. Samuel Weiser.',
    'Pollack, R. (1980). Seventy-Eight Degrees of Wisdom.',
    'Place, R. M. (2005). The Tarot: History, Symbolism, and Divination.',
  ],
  related: ['tarot/foundations/symbols-and-seeing', 'tarot/cards/wands', 'tarot/psychology-and-evidence'],
}

export default guide
