import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A logarithm answers one question: "what power do I need?" If exponents turn a power into a number (\\(2^3 = 8\\)), logarithms run it backwards, turning a number back into the power that made it (\\(\\log_2 8 = 3\\)). Once that single idea is solid, logs stop being mysterious, they are simply the undo button for exponentiation, and the reason anything that grows or shrinks multiplicatively (interest, pH, earthquakes, sound) gets measured on a log scale.',
  nutshell: [
    '\\(\\log_b(x) = y\\) means "b to the power y equals x": \\(b^y = x\\). Logs and exponents are inverse operations.',
    'The log laws (turning multiplication into addition, powers into multiplication) are just the exponent laws, read backwards.',
    '**e** ≈ 2.71828 is the natural base; \\(\\ln(x) = \\log_e(x)\\) is the natural logarithm, and it is everywhere in continuous growth and calculus.',
    'A log scale compresses huge ranges into something readable: pH, decibels, the Richter scale, and stock "log returns" all use one.',
  ],
  sections: [
    {
      id: 'question',
      title: 'The question a logarithm asks',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\log_b(x) = y \quad\Longleftrightarrow\quad b^y = x`,
          where: [
            { sym: 'b', def: 'The base: the number being repeatedly multiplied' },
            { sym: 'x', def: 'The result you already have' },
            { sym: 'y', def: 'The unknown power, what the logarithm finds' },
          ],
          caption: 'Two ways of writing the exact same fact. If one is true, so is the other.',
        },
        {
          t: 'example',
          title: 'Reading \\(\\log_2(8) = 3\\)',
          lines: [
            { label: 'In words', text: '"2 to what power gives 8?"' },
            { label: 'Answer', text: '3, because \\(2^3 = 8\\)' },
            { label: 'Check both forms', text: '\\(\\log_2(8) = 3\\) and \\(2^3 = 8\\) say the same thing' },
          ],
        },
        {
          t: 'table',
          head: ['Exponent form', 'Logarithm form', 'In words'],
          rows: [
            ['\\(10^2 = 100\\)', '\\(\\log_{10}(100) = 2\\)', '10 to what power gives 100? 2.'],
            ['\\(5^3 = 125\\)', '\\(\\log_5(125) = 3\\)', '5 to what power gives 125? 3.'],
            ['\\(2^{-1} = 0.5\\)', '\\(\\log_2(0.5) = -1\\)', '2 to what power gives 0.5? −1.'],
            ['\\(b^0 = 1\\)', '\\(\\log_b(1) = 0\\)', 'any base to the power 0 gives 1, always.'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'There is no logarithm of a non-positive number', text: 'Since \\(b^y\\) (for a positive base b) is always positive, no power of b can ever equal 0 or a negative number. \\(\\log_b(x)\\) is only defined for \\(x > 0\\), this is exactly why option 3 in the [function domains](@mathematics/notation/functions) table excludes zero and negatives.' },
      ],
    },
    {
      id: 'laws',
      title: 'The log laws, derived from exponent laws',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\log_b(MN) = \log_b(M) + \log_b(N)`,
          caption: 'Multiplication inside becomes addition outside. Derivation: let \\(M = b^p\\) and \\(N = b^q\\), so \\(\\log_b M = p\\) and \\(\\log_b N = q\\). Then \\(MN = b^p b^q = b^{p+q}\\) by the exponent product law, so \\(\\log_b(MN) = p + q = \\log_b M + \\log_b N\\).',
        },
        {
          t: 'math',
          tex: String.raw`\log_b\!\left(\frac{M}{N}\right) = \log_b(M) - \log_b(N)`,
          caption: 'Division becomes subtraction, the same derivation, using the exponent quotient law instead.',
        },
        {
          t: 'math',
          tex: String.raw`\log_b(M^k) = k\,\log_b(M)`,
          caption: 'A power inside comes out as a multiplier. Derivation: with \\(M = b^p\\), \\(M^k = b^{pk}\\) by the power-of-a-power law, so \\(\\log_b(M^k) = pk = k \\log_b M\\).',
        },
        {
          t: 'example',
          title: 'Using the laws to simplify, without a calculator',
          lines: [
            { label: 'Problem', text: 'Simplify \\(\\log_2(32) - \\log_2(4)\\)' },
            { label: 'Subtraction law', text: '\\(= \\log_2(32/4) = \\log_2(8)\\)' },
            { label: 'Answer', text: '\\(= 3\\), since \\(2^3 = 8\\)' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\log_b(x) = \frac{\log_k(x)}{\log_k(b)}`,
          caption: 'Change of base: converts a log in an awkward base (b) into logs in a base your calculator actually has (usually 10 or e). Derivation: let \\(y = \\log_b(x)\\), so \\(b^y = x\\); take \\(\\log_k\\) of both sides, giving \\(y \\log_k(b) = \\log_k(x)\\), then divide.',
        },
        {
          t: 'example',
          title: '\\(\\log_5(50)\\) on a calculator that only has log₁₀',
          lines: [
            { label: 'Change of base', text: '\\(\\log_5(50) = \\dfrac{\\log_{10}(50)}{\\log_{10}(5)}\\)' },
            { label: 'Compute', text: '\\(\\approx \\dfrac{1.699}{0.699} \\approx 2.431\\)' },
            { label: 'Check', text: '\\(5^{2.431} \\approx 50\\) ✓' },
          ],
        },
      ],
    },
    {
      id: 'natural',
      title: 'The natural log and e',
      blocks: [
        {
          t: 'math',
          tex: String.raw`e = \lim_{m\to\infty}\left(1+\frac{1}{m}\right)^m \approx 2.718281828\ldots`,
          caption: 'Euler\'s number. It arises from asking "what if interest compounded every instant, infinitely often?"see [the time value of money](@finance/foundations/time-value), where this exact limit is worked through with real interest rates.',
        },
        {
          t: 'math',
          tex: String.raw`\ln(x) = \log_e(x) \qquad \frac{d}{dx}\ln(x) = \frac{1}{x} \qquad \frac{d}{dx}e^x = e^x`,
          caption: 'The natural log, base e. It is the overwhelming favourite in calculus because of that last property: eˣ is the only function that is its own derivative, which makes continuous growth and decay (radioactive decay, population growth, compound interest) naturally expressed with e.',
        },
        {
          t: 'plot',
          title: 'log base 2, base 10 and base e, compared',
          x: [0.1, 10],
          y: [-3, 3],
          curves: [
            { f: (x: number) => Math.log2(x), label: 'log₂(x)', color: '#3b6fd8' },
            { f: (x: number) => Math.log10(x), label: 'log₁₀(x)', color: '#e07b2a' },
            { f: (x: number) => Math.log(x), label: 'ln(x)', color: '#2f9e6e' },
          ],
          caption: 'All three cross (1, 0), since any base to the power 0 is 1. A smaller base makes the curve climb faster (log₂ needs fewer "doublings" to reach a given x than ln needs "e-foldings").',
        },
        { t: 'fin-tool', tool: 'compound' },
      ],
    },
    {
      id: 'scales',
      title: 'Why things get put on a log scale',
      blocks: [
        {
          t: 'table',
          head: ['Scale', 'Formula', 'Why log?'],
          rows: [
            ['pH (acidity)', '\\(\\text{pH} = -\\log_{10}[\\text{H}^+]\\)', 'Hydrogen-ion concentration spans a trillion-fold range; a log turns that into a friendly 0–14'],
            ['Decibels (loudness)', '\\(dB = 10\\log_{10}(I/I_0)\\)', 'The ear perceives loudness roughly logarithmically, and sound intensities span many orders of magnitude'],
            ['Richter scale (earthquakes)', 'magnitude \\(\\propto \\log_{10}(\\text{amplitude})\\)', 'Each whole-number step is a 10× jump in shaking, which is easier to communicate than the raw amplitude'],
            ['Stock log returns', '\\(r = \\ln(P_1/P_0)\\)', 'From [risk and return](@finance/foundations/risk-return): log returns add up cleanly over time, where simple returns do not'],
          ],
        },
        {
          t: 'example',
          title: 'A pH calculation',
          lines: [
            { label: 'Given', text: 'hydrogen-ion concentration \\([\\text{H}^+] = 10^{-7}\\) (neutral water)' },
            { label: 'pH', text: '\\(-\\log_{10}(10^{-7}) = -(-7) = 7\\)' },
            { label: 'One step more acidic', text: 'pH 6 means \\([\\text{H}^+] = 10^{-6}\\): **ten times** more hydrogen ions, not just "one more"' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Slide rules and star brightness', text: 'For 350 years, from John Napier\'s invention of logarithms in 1614 until electronic calculators arrived in the 1970s, the slide rule, a mechanical device for adding lengths proportional to logarithms, turning multiplication into addition, was the standard tool of engineers and scientists. Astronomers still rate star brightness on a logarithmic "magnitude" scale invented by the ancient Greek astronomer Hipparchus.' },
      ],
    },
  ],
  sources: ['Napier, J. (1614). *Mirifici Logarithmorum Canonis Descriptio*.', 'Maor, E. (1994). *e: The Story of a Number*. Princeton University Press.', 'Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/algebra/exponents-roots', 'finance/foundations/time-value', 'mathematics/functions/exponential-log-graphs'],
}

export default guide
