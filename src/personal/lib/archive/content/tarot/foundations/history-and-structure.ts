import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Many people assume tarot is ancient, Egyptian or secret. It is none of these. The earliest tarot decks were made in northern Italy in the 1440s for a card game, and the divinatory use grew from the 1780s. Knowing the real history makes the deck easier to understand and protects you from the myths that surround it. This guide traces how the deck developed, describes its structure in detail, and compares the main traditions of design.',
  nutshell: [
    'Tarot began as a **trick-taking card game** (tarocchi) in northern Italy in the mid-1400s, with a fifth suit of **trump cards**.',
    'Its **occult** use began in France in the 1780s with **Court de Gébelin** and **Etteilla**, who made unsupported claims of Egyptian origin.',
    'The **Hermetic Order of the Golden Dawn** (1880s) systematised correspondences. **Rider-Waite-Smith** (1909) added scenes to every card and set the pattern of most modern decks.',
    'A tarot deck has **78 cards**: 22 Major Arcana and 56 Minor Arcana in four suits of 14.',
    'There are **many traditions** (Marseille, Rider-Waite-Smith, Thoth) and thousands of modern decks. Names, numbering and meanings vary in places.',
  ],
  sections: [
    {
      id: 'history',
      title: 'A short history',
      blocks: [
        {
          t: 'table',
          head: ['Date', 'Event', 'Note'],
          rows: [
            ['About 1440 to 1450', 'First tarot decks made in northern Italy (Milan, Ferrara, Bologna)', 'Hand-painted luxury decks such as the Visconti-Sforza cards; played as a card game (tarocchi) with 21 trumps and the Fool'],
            ['16th to 18th centuries', 'The game spreads across Europe; French and Piedmontese patterns develop', 'The Tarot de Marseille pattern becomes standard in France, with unillustrated number cards'],
            ['1781', 'Antoine Court de Gébelin claims tarot holds ancient Egyptian wisdom', 'No evidence supports this. The earliest tarot predates any such connection by millennia'],
            ['1780s', 'Etteilla (Jean-Baptiste Alliette) publishes the first tarot designed for divination', 'He is often called the first professional card reader'],
            ['19th century', 'Éliphas Lévi and others link the cards to Kabbalah, astrology and ceremonial magic', 'Occult writers build elaborate systems of correspondences'],
            ['1888', 'Hermetic Order of the Golden Dawn founded in London', 'Its members, including A. E. Waite, systematised correspondences with elements, planets and the Hebrew alphabet'],
            ['1909', 'Rider-Waite-Smith deck published (illustrated by Pamela Colman Smith)', 'The first widely used deck with a scene on every one of the 78 cards, including all pip cards'],
            ['1938 to 1943', 'Aleister Crowley and Lady Frieda Harris paint the Thoth deck (published 1969)', 'A symbolic, esoteric deck with its own titles and correspondences'],
            ['1960s to now', 'A popular revival and thousands of new decks', 'Themes from psychology, feminism, art and many cultures'],
          ],
          caption: 'Compiled from the standard scholarly histories (Dummett; Decker and Dummett).',
        },
        { t: 'callout', tone: 'fact', title: 'The myths', text: 'Tarot is not ancient Egyptian, was not created by the Romani, and was not originally a divination tool. Those claims are nineteenth-century inventions. Pamela Colman Smith, who illustrated the best-known deck, was long under-credited; her work shaped how most people picture the cards.' },
      ],
    },
    {
      id: 'structure',
      title: 'How the deck is built',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: '22 cards', title: 'Major Arcana', body: 'The trump cards, numbered 0 (the Fool) to XXI (the World). They represent big themes and turning points: love, power, loss, change, completion.' },
            { tag: '56 cards', title: 'Minor Arcana', body: 'Four suits of 14: Ace to Ten (the number cards, or pips) and four court cards (Page, Knight, Queen, King). They describe everyday life, work and feelings.' },
            { tag: '4 suits', title: 'Wands, Cups, Swords, Pentacles', body: 'Also called batons, staves or rods; chalices; blades; and coins or disks. They correspond to the playing-card suits of clubs, hearts, spades and diamonds.' },
            { tag: '4 courts', title: 'Page, Knight, Queen, King', body: 'People, personalities or stages of development. Some decks rename them (Princess, Prince, Queen, King, or Daughter, Son, Mother, Father).' },
          ],
        },
        {
          t: 'table',
          head: ['Suit', 'Element', 'Playing-card suit', 'Theme'],
          rows: [
            ['Wands', 'Fire', 'Clubs', 'Energy, ambition, creativity, will'],
            ['Cups', 'Water', 'Hearts', 'Emotion, relationships, intuition'],
            ['Swords', 'Air', 'Spades', 'Thought, truth, conflict, communication'],
            ['Pentacles', 'Earth', 'Diamonds', 'Work, money, body, the material world'],
          ],
          caption: 'The Golden Dawn and Rider-Waite-Smith assignment. Some traditions swap the elements of Wands and Swords.',
        },
        { t: 'tarot', mode: 'deck' },
      ],
    },
    {
      id: 'traditions',
      title: 'Traditions and decks',
      blocks: [
        {
          t: 'table',
          head: ['Tradition', 'Features', 'Good for'],
          rows: [
            ['Tarot de Marseille', 'A historic French pattern; number cards show only the suit symbols; Justice is VIII and Strength XI', 'Readers who prefer a classic, open-ended image style'],
            ['Rider-Waite-Smith (RWS)', 'Scenes on every card; Strength VIII and Justice XI; the most common basis for modern decks', 'Beginners, because the pictures carry the meaning; this shelf follows it'],
            ['Thoth (Crowley-Harris)', 'Rich esoteric symbolism, renamed cards, astrological attributions', 'Students of Western esotericism'],
            ['Modern and themed decks', 'Art, culture, psychology, many styles', 'Personal taste. Most follow RWS meanings'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Which deck should I use?', text: 'For learning, choose a Rider-Waite-Smith-based deck with clear imagery on every card, which also lets you use the vast literature written for it. Pick one whose pictures you like to look at; you will be spending time with them.' },
        { t: 'links', items: [{ path: 'tarot/foundations/symbols-and-seeing', note: 'Next: how to look at a card' }, { path: 'tarot/cards/major-arcana', note: 'The Major Arcana' }] },
      ],
    },
  ],
  sources: [
    'Dummett, M. (1980). The Game of Tarot. Duckworth.',
    'Decker, R., Depaulis, T., and Dummett, M. (1996). A Wicked Pack of Cards: The Origins of the Occult Tarot. Duckworth.',
    'Waite, A. E. (1911). The Pictorial Key to the Tarot.',
    'Kaplan, S. R. (1978 to 1990). The Encyclopedia of Tarot, volumes 1 to 3. U.S. Games Systems.',
    'Hundley, J. (2019). Pamela Colman Smith: Artist, Feminist, Mystic (scholarship on the RWS illustrator).',
  ],
  related: ['tarot/start-here', 'tarot/foundations/symbols-and-seeing', 'tarot/cards/major-arcana'],
}

export default guide
