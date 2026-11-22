import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Reading is not natural in the way speaking is; it has to be taught. Decades of research, sometimes called the "science of reading", point to a clear picture: learners need to decode words fluently **and** understand language, and both can be taught explicitly.',
  nutshell: [
    '**The simple view of reading**: reading comprehension = decoding × language comprehension. If either is zero, reading fails.',
    '**Systematic phonics** is the most effective way to teach beginning readers to decode.',
    '**Fluency** frees attention for meaning; build it with repeated, guided oral reading.',
    '**Comprehension** depends heavily on vocabulary and background knowledge, plus a few taught strategies.',
  ],
  sections: [
    {
      id: 'simple-view',
      title: 'The simple view of reading',
      lead: 'Gough and Tunmer (1986).',
      blocks: [
        {
          t: 'table',
          head: ['', 'Weak language comprehension', 'Strong language comprehension'],
          rows: [
            ['Strong decoding', 'Can read words aloud but does not understand them ("barking at print"). Needs vocabulary, knowledge and language.', 'Skilled reader.'],
            ['Weak decoding', 'Struggles with both. Needs both kinds of support.', 'Understands when listening but cannot read the words. Needs phonics and fluency (often the profile in [dyslexia](@teaching/special-education/needs/dyslexia)).'],
          ],
          caption: 'The four profiles of the simple view. Diagnose which side is weak before choosing support.',
        },
        {
          t: 'p',
          text: 'Hollis Scarborough’s "reading rope" (2001) unpacks each side. **Word recognition** strands (phonological awareness, decoding, sight recognition) become increasingly automatic. **Language comprehension** strands (background knowledge, vocabulary, language structures, verbal reasoning, literacy knowledge) become increasingly strategic. Skilled reading is the two ropes woven together.',
        },
      ],
    },
    {
      id: 'phonics',
      title: 'Phonics and decoding',
      blocks: [
        {
          t: 'p',
          text: 'Major reviews, including the US National Reading Panel (2000) and the Rose Review in England (2006), concluded that **systematic phonics** instruction, teaching the links between sounds and letters in a planned sequence, helps beginning readers more than approaches that leave these links to be discovered.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Phonemic awareness', body: 'Hearing and manipulating the sounds in spoken words: *c-a-t*, blending sounds, swapping one sound for another.' },
            { title: 'Grapheme-phoneme correspondences', body: 'Letters and letter groups that represent each sound, taught in a set order (s, a, t, p, i, n… then sh, ch, ai…).' },
            { title: 'Blending to read', body: 'Say each sound, then blend them into a word.' },
            { title: 'Segmenting to spell', body: 'Break a spoken word into its sounds and write the letters for each.' },
            { title: 'Decodable texts', body: 'Early books that use only the sounds taught so far, so learners can succeed by decoding.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Guessing from pictures',
          text: 'Teaching beginners to guess words from pictures, first letters or context ("three-cueing") encourages habits that skilled readers do not use. Skilled readers recognise words by their letters; they use context to understand, not to identify words.',
        },
      ],
    },
    {
      id: 'fluency',
      title: 'Fluency',
      blocks: [
        {
          t: 'p',
          text: 'Fluent reading is accurate, reasonably quick and expressive. When decoding is automatic, working memory is free for meaning (see [cognitive load](@teaching/theories/cognitive-load)).',
        },
        {
          t: 'list',
          items: [
            '**Model** fluent reading aloud, then have learners read the same passage.',
            '**Repeated reading**: reading the same short passage several times with feedback.',
            '**Echo and choral reading**: learners repeat after the teacher, or read together.',
            '**Paired reading**: a stronger reader supports a partner.',
            'Focus on **expression** (prosody) as well as speed; racing is not the goal.',
          ],
        },
      ],
    },
    {
      id: 'comprehension',
      title: 'Comprehension',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Background knowledge', body: 'In a classic study, weak readers who knew a lot about baseball understood a baseball passage better than strong readers who did not (Recht & Leslie, 1988). A knowledge-rich curriculum is a reading strategy.' },
            { title: 'Vocabulary', body: 'Teach high-value words explicitly and meet them often in reading. See [speech, language and vocabulary](@teaching/special-education/needs/speech-language).' },
            { title: 'Taught strategies', body: 'Predicting, questioning, clarifying and summarising, as in **reciprocal teaching** (Palincsar & Brown, 1984). A modest number of lessons on strategies gives most of the benefit.' },
            { title: 'Reading a lot', body: 'Volume matters: lots of reading at an accessible level, including reading aloud to learners from texts above their level.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Gough, P. B., & Tunmer, W. E. (1986). Decoding, reading, and reading disability. *Remedial and Special Education, 7*(1), 6–10.',
    'Scarborough, H. S. (2001). Connecting early language and literacy to later reading (dis)abilities. In S. Neuman & D. Dickinson (Eds.), *Handbook of early literacy research* (pp. 97–110). Guilford.',
    'National Reading Panel. (2000). *Teaching children to read*. NICHD.',
    'Rose, J. (2006). *Independent review of the teaching of early reading*. DfES.',
    'Recht, D. R., & Leslie, L. (1988). Effect of prior knowledge on good and poor readers’ memory of text. *Journal of Educational Psychology, 80*(1), 16–20.',
    'Palincsar, A. S., & Brown, A. L. (1984). Reciprocal teaching of comprehension-fostering and comprehension-monitoring activities. *Cognition and Instruction, 1*(2), 117–175.',
    'Castles, A., Rastle, K., & Nation, K. (2018). Ending the reading wars: Reading acquisition from novice to expert. *Psychological Science in the Public Interest, 19*(1), 5–51.',
  ],
  related: ['teaching/special-education/needs/dyslexia', 'teaching/subjects/writing', 'teaching/special-education/needs/speech-language'],
}

export default guide
