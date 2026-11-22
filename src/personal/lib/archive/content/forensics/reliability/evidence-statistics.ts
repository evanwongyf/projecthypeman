import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A forensic scientist can tell you how likely the evidence is if the suspect is the source, and how likely it is if someone else is. The court wants to know something different: how likely it is that the suspect *is* the source. Getting from one to the other requires the base rate, and mixing them up has contributed to wrongful convictions.',
  nutshell: [
    'The **likelihood ratio (LR)** compares how probable the evidence is under two competing propositions, prosecution’s and defence’s.',
    '**Bayes’ rule in odds form**: posterior odds = prior odds × LR. The scientist provides the LR; the prior belongs to the court.',
    'The **prosecutor’s fallacy** treats “the chance of this match if innocent” as “the chance of innocence given this match”.',
    'The **defence fallacy** says “a 1-in-a-million profile matches ten people in a city of ten million, so it is worthless”, ignoring the other evidence that narrows the pool.',
    'The **Sally Clark** case shows how a wrong independence assumption and a misread probability can combine into a miscarriage of justice.',
  ],
  sections: [
    {
      id: 'lr',
      title: 'The likelihood ratio',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\underbrace{\frac{P(H_p \mid E)}{P(H_d \mid E)}}_{\text{posterior odds}} = \underbrace{\frac{P(H_p)}{P(H_d)}}_{\text{prior odds}} \times \underbrace{\frac{P(E \mid H_p)}{P(E \mid H_d)}}_{\text{likelihood ratio}}`,
          caption: 'Bayes’ rule written with odds. An LR above 1 supports the prosecution proposition, below 1 the defence proposition, and exactly 1 means the evidence does not help either way.',
          where: [
            { sym: 'H_p', def: 'Prosecution proposition, e.g. “the suspect is the source of the stain”' },
            { sym: 'H_d', def: 'Defence proposition, e.g. “an unknown, unrelated person is the source”' },
            { sym: 'E', def: 'The evidence, e.g. matching DNA profiles' },
          ],
          syntax: [
            { sym: 'P(E \\mid H_p)', say: '“the probability of E given H-p”: how likely this evidence would be if the prosecution proposition were true' },
            { sym: '\\mid', say: 'the vertical bar is read “given”, everything to its right is assumed true' },
            { sym: '\\underbrace{\\cdots}_{\\text{label}}', say: 'a brace under part of a formula just names that part' },
          ],
          worked: {
            title: 'A DNA match with an LR of one million',
            steps: [
              String.raw`Suppose other evidence places the offender among about 10,000 plausible people, so prior odds for the suspect are \(1 : 9{,}999 \approx 1 : 10{,}000\)`,
              String.raw`A full match with RMP 1 in a million gives \(\text{LR} \approx 1/10^{-6} = 1{,}000{,}000\)`,
              String.raw`Posterior odds \(= \tfrac{1}{10{,}000} \times 1{,}000{,}000 = 100\), i.e. \(100 : 1\)`,
              String.raw`As a probability: \(100/(100 + 1) \approx 0.990\)`,
            ],
            answer: String.raw`About a 99% probability the suspect is the source, strong, but not the “999,999 in a million” the prosecutor’s fallacy would claim. With a pool of 10 million instead, the same LR gives odds near 1 : 10, or about 9%.`,
          },
        },
        {
          t: 'plot',
          title: 'Posterior probability depends on the prior',
          x: [-8, 1],
          y: [0, 1],
          xLabel: 'prior odds (powers of ten: −6 means 1 in a million)',
          yLabel: 'posterior probability of Hp',
          curves: [
            { f: (x: number) => 1 / (1 + Math.pow(10, -x) / 1e3), label: 'LR = 1,000' },
            { f: (x: number) => 1 / (1 + Math.pow(10, -x) / 1e6), label: 'LR = 1,000,000' },
            { f: (x: number) => 1 / (1 + Math.pow(10, -x) / 1e9), label: 'LR = 1,000,000,000', dashed: true },
          ],
          points: [{ x: -4, y: 0.99, label: 'worked example' }],
          caption: 'The same evidence can be nearly decisive or nearly useless depending on how many other people could plausibly be the source.',
        },
      ],
    },
    {
      id: 'scales',
      title: 'Putting LRs into words',
      blocks: [
        {
          t: 'levels',
          caption: 'Verbal equivalents recommended by the European Network of Forensic Science Institutes (ENFSI, 2015), weakest first.',
          items: [
            { name: 'LR 2–10', body: 'Weak support for the first proposition over the second.' },
            { name: 'LR 10–100', body: 'Moderate support.' },
            { name: 'LR 100–1,000', body: 'Moderately strong support.' },
            { name: 'LR 1,000–10,000', body: 'Strong support.' },
            { name: 'LR 10,000–1,000,000', body: 'Very strong support.' },
            { name: 'LR over 1,000,000', body: 'Extremely strong support.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The right sentence', text: 'Correct: “The evidence is a million times more probable if the suspect is the source than if an unrelated person is.” Incorrect: “It is a million times more probable that the suspect is the source.” The first is about the evidence; the second is about the hypothesis, and needs a prior.' },
      ],
    },
    {
      id: 'fallacies',
      title: 'Fallacies and the Sally Clark case',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Say how probable the evidence is under each proposition.',
            'State the assumptions behind any probability, such as independence or the reference population.',
            'Consider relatives and alternative explanations for the evidence (transfer, contamination).',
          ],
          dont: [
            'Turn a match probability into a probability of guilt (prosecutor’s fallacy).',
            'Dismiss strong evidence by pointing to a large population while ignoring all other evidence (defence fallacy).',
            'Multiply probabilities of events that may be linked.',
          ],
        },
        {
          t: 'example',
          title: 'Sally Clark (England, 1999–2003)',
          lines: [
            { label: 'Claim', text: 'An expert told the jury the chance of two sudden infant deaths in a family like hers was 1 in 73 million, by squaring an estimate of 1 in 8,543: \\(8{,}543^2 = 72{,}982{,}849\\).' },
            { label: 'Error 1', text: 'Squaring assumes the two deaths are independent. Shared genetic and environmental factors make a second death in the same family considerably more likely.' },
            { label: 'Error 2', text: 'Even a tiny probability of two natural deaths has to be compared with the probability of the alternative, a double murder by a mother, which is also extremely rare.' },
            { label: 'Outcome', text: 'The Royal Statistical Society publicly criticised the figure. Clark’s conviction was quashed on her second appeal in 2003, after undisclosed medical evidence emerged.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Aitken, C., Roberts, P., & Jackson, G. (2010). *Fundamentals of Probability and Statistical Evidence in Criminal Proceedings*. Royal Statistical Society.',
    'Thompson, W. C., & Schumann, E. L. (1987). Interpretation of statistical evidence in criminal trials: The prosecutor’s fallacy and the defense attorney’s fallacy. *Law and Human Behavior*, 11(3), 167–187.',
    'ENFSI (2015). *ENFSI Guideline for Evaluative Reporting in Forensic Science*.',
    'Royal Statistical Society (2001). Statement regarding statistical issues in the Sally Clark case.',
  ],
  related: ['forensics/biological/dna-profiling', 'forensics/reliability/wrongful-convictions', 'forensics/trace-and-pattern/trace-evidence'],
}

export default guide
