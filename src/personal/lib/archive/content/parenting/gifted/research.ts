import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A century of research has followed gifted children into adulthood. The findings correct some popular myths: gifted children mostly grow into healthy, successful adults; ability tested early predicts a great deal; yet the top scorers are not guaranteed eminence, and practice, opportunity and personality decide much of the rest.',
  sections: [
    {
      id: 'studies',
      title: 'Landmark studies',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: '1921–today', title: 'Terman’s “Termites”', body: 'Lewis Terman followed about 1 500 Californian children with IQs above 135. As adults they were healthier, wealthier and better educated than average, but none won a Nobel Prize, while two boys rejected by the study (William Shockley and Luis Alvarez) did. IQ predicts success, but not eminence.' },
          { tag: '1971–today', title: 'SMPY (Study of Mathematically Precocious Youth)', body: 'Julian Stanley, Camilla Benbow and David Lubinski followed 5 000+ children who scored very high on the SAT at age 12–13. Even within the top 1%, those in the top 0.01% earned more PhDs, patents and publications. Spatial ability predicted STEM outcomes beyond maths and verbal scores.' },
          { tag: '1985', title: 'Bloom’s Developing Talent', body: 'Benjamin Bloom interviewed 120 world-class pianists, sculptors, swimmers, tennis players, mathematicians and neurologists. Common pattern: playful early years with a warm teacher, a middle stage of serious, demanding training, and a late stage with a master teacher. Family values of work and achievement mattered.' },
          { tag: '1993', title: 'Deliberate practice', body: 'Anders Ericsson found the best violinists had practised far more, deliberately, than good ones (the source of the popularised “10 000 hours”). Later meta-analyses (Macnamara et al. 2014) found practice explains a meaningful but limited share of variance: about 26% in games, 21% in music, 18% in sport, less in education and professions.' },
        ] },
        { t: 'bars', title: 'Share of performance differences explained by deliberate practice', unit: '%', decimals: 0, items: [
          { label: 'Games (chess etc.)', value: 26 }, { label: 'Music', value: 21 }, { label: 'Sport', value: 18 }, { label: 'Education', value: 4 }, { label: 'Professions', value: 1 },
        ], caption: 'Macnamara, Hambrick & Oswald (2014) meta-analysis. Practice matters, but most variance comes from other factors: starting age, ability, personality, teaching quality, chance.' },
      ],
    },
    {
      id: 'nature-nurture',
      title: 'Genes and environment',
      blocks: [
        { t: 'p', text: 'Heritability of general cognitive ability rises from about 20% in infancy to 50–80% in adulthood (the “Wilson effect”), partly because people increasingly choose environments that suit their genes. Heritability describes differences within a population, not a fixed limit for any child. Environments still matter: adoption studies show rises of up to 12–18 IQ points when children move from deprived to enriched homes, and schooling raises IQ by roughly 1–5 points per year.' },
      ],
    },
  ],
  sources: [
    'Terman, L. M. & Oden, M. H. (1959). The Gifted Group at Mid-Life. Stanford University Press.',
    'Lubinski, D. & Benbow, C. P. (2006). Study of Mathematically Precocious Youth after 35 years. Perspectives on Psychological Science 1(4).',
    'Bloom, B. S. (ed.) (1985). Developing Talent in Young People. Ballantine.',
    'Ericsson, K. A., Krampe, R. T. & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. Psychological Review 100(3).',
    'Macnamara, B. N., Hambrick, D. Z. & Oswald, F. L. (2014). Deliberate practice and performance in music, games, sports, education, and professions: a meta-analysis. Psychological Science 25(8).',
    'Bouchard, T. J. (2013). The Wilson effect: the increase in heritability of IQ with age. Twin Research and Human Genetics 16(5).',
    'van IJzendoorn, M. H., Juffer, F. & Poelhuis, C. W. K. (2005). Adoption and cognitive development. Psychological Bulletin 131(2).',
  ],
  related: ['parenting/gifted/what-is-giftedness', 'parenting/gifted/case-studies'],
}

export default guide
