import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Does tarot work? That depends on what “work” means. As a way of predicting events, there is no good evidence that it does, and several reasons why readings feel accurate even when they are not. As a way of prompting reflection, many people find it useful, much as they might use a journal prompt or a conversation with a thoughtful friend. This guide sets out the psychology: the Barnum effect, cold reading, confirmation bias and projection. It also looks at Jung’s ideas, which many readers draw on, and at the ethics of reading for other people.',
  nutshell: [
    'There is **no good evidence that tarot predicts the future** or reveals hidden facts. Claims of accuracy are explained by well-documented psychology.',
    'The **Barnum (Forer) effect**: people rate vague, flattering statements as highly accurate descriptions of themselves.',
    '**Cold reading** uses cues, probabilities and the sitter’s own reactions to seem to know more than the reader does.',
    '**Confirmation bias** makes us notice hits and forget misses; **projection** makes us read our own concerns into ambiguous images.',
    'Used as a **prompt for reflection**, tarot can help people think and talk about their lives. That value does not depend on the cards being predictive.',
  ],
  sections: [
    {
      id: 'barnum',
      title: 'The Barnum effect',
      blocks: [
        { t: 'p', text: 'In 1948 psychologist Bertram Forer gave his students a “personal” description based on a personality test, and asked them to rate how well it fitted them. They gave it an average of 4.3 out of 5. Every student had been given the same text, assembled from horoscope books. It included lines such as “You have a great need for other people to like and admire you”, and “At times you are extroverted and sociable, while at other times you are introverted and reserved”. Statements like these are true of almost everyone, flattering, and vague enough to fit any life. The effect has been replicated many times and is named after P. T. Barnum (“a little something for everyone”).' },
        {
          t: 'table',
          head: ['Feature of a statement', 'Why it feels accurate'],
          rows: [
            ['Vague or general', 'Fits many circumstances; the listener fills in the detail'],
            ['Flattering', 'People accept positive descriptions more readily'],
            ['Double-edged (“you are sometimes X and sometimes Y”)', 'Covers both possibilities'],
            ['Personalised in framing', 'Believing a statement was made for you increases acceptance'],
            ['From an authority or ritual', 'The setting and the cards raise credibility'],
          ],
        },
      ],
    },
    {
      id: 'cold',
      title: 'Cold reading and other mechanisms',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Cold reading', title: 'Seeming to know', body: 'A reader uses age, dress, manner and reactions, plus common concerns (love, work, money, health), to make guesses and adjust to the response. The sitter remembers the hits.' },
            { tag: 'Shotgunning', title: 'Many guesses', body: 'Offering many statements, some of which will fit, and letting the sitter pick out the ones that do.' },
            { tag: 'Confirmation bias', title: 'Remembering hits', body: 'We notice and recall matches with our experience and forget the misses, so the reading seems better than it was.' },
            { tag: 'Projection', title: 'Reading yourself into the picture', body: 'Ambiguous images invite us to see our own concerns in them, as with an inkblot. This is the sitter’s insight, offered by the image.' },
            { tag: 'Self-fulfilling', title: 'Acting on the reading', body: 'If a reading suggests you will be confident, you may behave more confidently, so the “prediction” appears to come true.' },
            { tag: 'Randomness', title: 'Seeing patterns', body: 'Humans are pattern-finders. We find meaning in random draws.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'What controlled tests find', text: 'When researchers test claims of paranormal prediction or reading under controlled conditions, results are consistent with chance. There are few high-quality studies of tarot in particular, and the lack of evidence for any mechanism by which cards could carry information about the future is a main reason scientists do not accept it as prediction.' },
      ],
    },
    {
      id: 'reflect',
      title: 'Tarot as reflection',
      blocks: [
        { t: 'p', text: 'None of this makes tarot worthless. A random image gives you something to talk about, a structure for thinking in stages, and a safe distance from which to look at your own situation. Therapists use projective techniques, cards, drawings and objects, in a similar way, and journaling prompts work on the same principle. The value comes from what you bring to the cards, not from what they contain.' },
        {
          t: 'table',
          head: ['Benefit', 'How tarot supports it'],
          rows: [
            ['Perspective', 'A random card can interrupt a rut, pushing you to consider a view you had not thought of'],
            ['Articulation', 'You have to put a feeling or situation into words to interpret the card'],
            ['Structure', 'Positions in a spread break a messy problem into parts'],
            ['Ritual and pause', 'A set routine creates a calm space to think'],
            ['Conversation', 'It can give two people a shared language for talking about difficult subjects'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Jung and archetypes', text: 'Carl Jung proposed that humanity shares “archetypes”, recurring symbolic patterns in myths and dreams such as the hero, the mother, the shadow. He mentioned tarot in a 1933 seminar as images of archetypal transformation, and later writers, such as Sallie Nichols in Jung and Tarot (1980), developed a psychological reading of the Major Arcana as stages of individuation. Jungian archetypes are an influential idea in psychology’s history but are not scientifically established, and Jung did not claim tarot predicts the future.' },
      ],
    },
    {
      id: 'ethics',
      title: 'Ethics of reading for others',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Be honest that tarot is a tool for reflection, not a guarantee. Do not claim certainty.',
            'Do not predict death, illness, pregnancy, infidelity or other things that could frighten or mislead.',
            'Do not make medical, legal or financial recommendations. Encourage professional help where needed.',
            'Never frighten someone into paying (“a curse on you”) or into repeated readings. This is exploitation.',
            'Respect privacy and consent. Do not read for someone about a third party without thought.',
            'Be especially careful with people who are grieving, desperate or in distress.',
            'Check local laws: in some places paid fortune-telling is regulated, and misleading claims can be an offence.',
          ],
        },
        {
          t: 'dodont',
          do: ['Offer interpretations as possibilities and ask what resonates.', 'Encourage the sitter to make their own decisions.', 'Keep readings kind and non-fatalistic.', 'Keep a sceptical mind about your own readings.'],
          dont: ['Claim supernatural powers you cannot show.', 'Charge more for “removing” bad luck.', 'Replace medical or mental health care.', 'Use fear as a hook.'],
        },
        {
          t: 'p',
          text: 'You can enjoy the imagery, the history and the practice of reflection without believing that cards know anything. A healthy attitude is to hold it lightly: curious about what it brings up, sceptical about what it claims, and clear that the decisions are yours.',
        },
        { t: 'links', items: [{ path: 'thinking/biases', note: 'Cognitive biases' }, { path: 'forensics/reliability/cognitive-bias', note: 'How bias fools experts' }, { path: 'tarot/start-here', note: 'Back to the start' }] },
      ],
    },
  ],
  sources: [
    'Forer, B. R. (1949). The fallacy of personal validation: a classroom demonstration of gullibility. Journal of Abnormal and Social Psychology.',
    'Dickson, D. H., and Kelly, I. W. (1985). The “Barnum effect” in personality assessment: a review of the literature. Psychological Reports.',
    'Hyman, R. (1977). Cold reading: how to convince strangers that you know all about them. The Zetetic.',
    'Nichols, S. (1980). Jung and Tarot: An Archetypal Journey. Samuel Weiser.',
    'Nickerson, R. S. (1998). Confirmation bias: a ubiquitous phenomenon in many guises. Review of General Psychology.',
    'Decker, R., and Dummett, M. (2002). A History of the Occult Tarot, 1870–1970. Duckworth.',
  ],
  related: ['tarot/start-here', 'tarot/reading/asking-and-spreads', 'forensics/reliability/cognitive-bias'],
}

export default guide
