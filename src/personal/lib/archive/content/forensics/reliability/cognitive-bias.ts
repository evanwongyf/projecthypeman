import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Many forensic decisions, does this print match, is this peak a real allele, is this pattern a bite, are made by trained humans looking at ambiguous data. Humans are excellent pattern-finders and also predictably biased: what we expect to see shapes what we see. This is not a matter of honesty. It affects careful, ethical experts, and it is best handled by designing procedures that keep irrelevant information away from the decision.',
  nutshell: [
    '**Contextual bias**: case information that has nothing to do with the analysis (a confession, a detective’s certainty) changes how ambiguous evidence is read.',
    '**Confirmation bias**: once a hypothesis forms, people seek and weigh evidence that supports it.',
    'Experiments by Itiel Dror and colleagues showed experienced fingerprint and DNA examiners reaching **different conclusions on the same evidence** when the context changed.',
    'Safeguards include **linear sequential unmasking** (examine the evidence before the reference), **blind verification** and **case managers** who filter information.',
    'Experts tend to believe bias affects others more than themselves, the **bias blind spot**.',
  ],
  sections: [
    {
      id: 'experiments',
      title: 'The experiments',
      blocks: [
        {
          t: 'example',
          title: 'Dror and Charlton (2006): fingerprints',
          lines: [
            { label: 'Set-up', text: 'Five experienced latent print examiners were each shown a pair of prints they had themselves identified as a match years earlier in real casework, without being told.' },
            { label: 'Context', text: 'They were told the pair was the notorious erroneous FBI match from the Mayfield case.' },
            { label: 'Result', text: 'Four of the five changed their conclusion, three to exclusion, one to inconclusive. Only one held to the original identification.' },
          ],
        },
        {
          t: 'example',
          title: 'Dror and Hampikian (2011): a DNA mixture',
          lines: [
            { label: 'Set-up', text: 'A mixture from a real gang-rape case, in which the original analysts knew a co-defendant’s plea deal depended on implicating the suspect, had been reported as “cannot exclude” the suspect.' },
            { label: 'Test', text: 'Seventeen independent DNA analysts were given the same data without that context.' },
            { label: 'Result', text: 'One agreed the suspect could not be excluded; twelve excluded him and four were inconclusive.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Not only pattern evidence', text: 'Bias has been shown in pathology (manner of death judgements influenced by case details), bloodstain analysis, fire investigation and digital forensics, anywhere a human interprets ambiguous data.' },
      ],
    },
    {
      id: 'sources',
      title: 'Where bias comes from',
      blocks: [
        {
          t: 'levels',
          caption: 'Dror’s (2020) eight sources of bias, from the specific case at the bottom to human nature at the top.',
          items: [
            { name: 'The data', body: 'The evidence itself can evoke emotion or suggest a story (a graphic scene, a racially charged message).' },
            { name: 'Reference materials', body: 'Seeing the suspect’s sample first leads you to look for its features in the evidence.' },
            { name: 'Task-irrelevant context', body: 'Confessions, criminal records, detective opinions.' },
            { name: 'Base-rate expectations', body: '“Most cases I see are matches” sets an expectation.' },
            { name: 'Organisational factors', body: 'Working inside a police agency; pressure for results; team loyalty.' },
            { name: 'Education and training', body: 'How examiners were taught to reason and report.' },
            { name: 'Personal factors', body: 'Fatigue, stress, motivation, personality.' },
            { name: 'Human cognition', body: 'Top-down processing is how all human perception works.' },
          ],
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Fallacy: only bad people are biased', body: 'Bias is a normal cognitive process, not misconduct.', tag: 'myth' },
            { title: 'Fallacy: experts are immune', body: 'Expertise can increase reliance on fast, automatic judgements.', tag: 'myth' },
            { title: 'Fallacy: willpower fixes it', body: 'Knowing about bias does not stop it; procedure does.', tag: 'myth' },
          ],
        },
      ],
    },
    {
      id: 'safeguards',
      title: 'Safeguards that work',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Case manager', body: 'A colleague who knows the case decides what information the examiner actually needs, and passes on only that.' },
            { title: 'Evidence first (linear sequential unmasking)', body: 'Analyse and document the questioned evidence, which features are reliable, before seeing any reference sample. Changes made afterwards are recorded and justified.' },
            { title: 'Evidence line-ups', body: 'Give the examiner several reference samples, not just the suspect’s, so the task is not “confirm this one”.' },
            { title: 'Blind verification', body: 'The second examiner does not know the first examiner’s conclusion, or even that there is one.' },
            { title: 'Blind proficiency testing', body: 'Test cases slipped into normal casework measure real-world performance.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Applies to digital forensics too', text: 'A digital examiner told “we know he did it, find the files” is primed to read ambiguous artefacts as intentional. Recording hypotheses for both sides and testing each one is the digital version of linear sequential unmasking. See [reporting](@forensics/digital-investigation/law-ethics-and-reporting).' },
      ],
    },
  ],
  sources: [
    'Dror, I. E., & Charlton, D. (2006). Why experts make errors. *Journal of Forensic Identification*, 56(4), 600–616.',
    'Dror, I. E., & Hampikian, G. (2011). Subjectivity and bias in forensic DNA mixture interpretation. *Science & Justice*, 51(4), 204–208.',
    'Kassin, S. M., Dror, I. E., & Kukucka, J. (2013). The forensic confirmation bias. *Journal of Applied Research in Memory and Cognition*, 2(1), 42–52.',
    'Dror, I. E. (2020). Cognitive and human factors in expert decision making: Six fallacies and the eight sources of bias. *Analytical Chemistry*, 92(12), 7998–8004.',
  ],
  related: ['forensics/trace-and-pattern/fingerprints', 'forensics/reliability/wrongful-convictions', 'forensics/reliability/evidence-statistics'],
}

export default guide
