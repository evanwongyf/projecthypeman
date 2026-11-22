// A beginner's guide to maths notation, matched to a formula's TeX. Every formula in the archive
// gets a walk through exactly the symbols and constructions that appear in it: what the piece
// means in plain words, a tiny example with the arithmetic done, and what happens to the result
// when the piece changes. The wording is about notation, so it is true for every formula that
// uses the piece; the formula's own `where` and `syntax` lists give its specific meanings.

export type NotationEntry = {
  id: string
  // TeX shown as the heading of the entry.
  show: string
  meaning: string
  example: string
  effect: string
}

type Rule = NotationEntry & { test: RegExp }

const R = (id: string, test: RegExp, show: string, meaning: string, example: string, effect: string): Rule => ({ id, test, show, meaning, example, effect })

const RULES: Rule[] = [
  R(
    'frac',
    /\\[dt]?frac|\\over\b/,
    '\\dfrac{a}{b}',
    'A fraction is a division: the number on top (the numerator) is divided by the number on the bottom (the denominator). Read it as "a divided by b" or "a per b". The fraction bar also acts like brackets: everything on top is divided by everything on the bottom.',
    '\\(\\dfrac{12}{4}\\) means 12 ÷ 4 = 3. With a sum on top, \\(\\dfrac{2+4}{3}\\) means (2 + 4) ÷ 3 = 6 ÷ 3 = 2, not 2 + 4/3.',
    'Raise the top and the result rises; raise the bottom and the result falls. \\(\\dfrac{12}{4}=3\\) but \\(\\dfrac{12}{6}=2\\) and \\(\\dfrac{12}{3}=4\\). A bottom that gets close to zero makes the result explode, and a bottom of exactly zero is not allowed.',
  ),
  R(
    'power',
    /\^\s*(\{[^}]*\}|\\?[A-Za-z0-9+-])/,
    'x^{n}',
    'A small raised number is an exponent (a power): it says how many copies of the base to multiply together. \\(x^2\\) is "x squared" (x × x), \\(x^3\\) is x × x × x. A negative exponent means "one over": \\(x^{-1}=1/x\\). An exponent of 1/2 is a square root.',
    '\\(3^2=3\\times3=9\\); \\(2^3=2\\times2\\times2=8\\); \\(10^{-2}=1/10^2=1/100=0.01\\); \\(1.05^{10}\\) means multiply 1.05 by itself ten times, which is about 1.629.',
    'Powers grow fast: \\(2^{10}=1{,}024\\) but \\(2^{20}=1{,}048{,}576\\). That is why a small repeated percentage gain (a power of 1.05) becomes large over many periods, and why squared terms make big values count far more than small ones. If the raised mark is a star, a prime or a letter in brackets, it may be a label instead; the "where" list says which.',
  ),
  R(
    'subscript',
    /_\s*(\{[^}]*\}|\\?[A-Za-z0-9])/,
    'x_{t}',
    'A small lowered mark is a subscript. It is a label, not a calculation: it tells you which one of several similar quantities you mean, such as which period, which asset or which item in a list. It is never multiplied.',
    '\\(x_1\\) is the first value and \\(x_2\\) the second. If the returns in three years were 5%, 8% and −2%, then \\(r_1=5\\%\\), \\(r_2=8\\%\\) and \\(r_3=-2\\%\\). \\(P_0\\) is a price at the start (time zero) and \\(P_t\\) the price at time t.',
    'Changing a subscript changes which number you are looking at, not the arithmetic. \\(r_2\\) and \\(r_3\\) are different inputs. Subscripts such as 0 usually mean "now" or "at the start" and t or n mean "at time t" or "the last one".',
  ),
  R(
    'sqrt',
    /\\sqrt/,
    '\\sqrt{x}',
    'The square root of x is the number that, multiplied by itself, gives x. A root with a small number in its crook, such as a cube root, uses that many copies. Everything under the long bar is rooted together.',
    '\\(\\sqrt{16}=4\\) because 4 × 4 = 16; \\(\\sqrt{2}\\approx1.414\\); \\(\\sqrt{9+16}=\\sqrt{25}=5\\), which is not 3 + 4 = 7.',
    'Square roots grow slowly: to double a \\(\\sqrt{}\\) result you must multiply the number inside by four (\\(\\sqrt{100}=10\\), \\(\\sqrt{400}=20\\)). This is why noise, risk and error often fall only with the square root of the sample size or of time.',
  ),
  R(
    'sum',
    /\\sum/,
    '\\sum_{i=1}^{n}x_i',
    'The big sigma means "add up". The small text under and over it says where to start and stop: \\(i=1\\) at the bottom is the first term and n at the top is the last. Put i into the expression after the sigma for each value, then add all the results.',
    '\\(\\sum_{i=1}^{3}i^2=1^2+2^2+3^2=1+4+9=14\\). For the data 5, 8 and −2, \\(\\sum x_i=5+8-2=11\\), and the average is 11 ÷ 3 ≈ 3.67.',
    'More terms usually make the total bigger. A sum of many small positive terms can be large, and a sum with positive and negative terms can partly cancel. Dividing a sum by the number of terms gives an average, which does not grow as you add more data.',
  ),
  R(
    'prod',
    /\\prod/,
    '\\prod_{i=1}^{n}a_i',
    'The big pi means "multiply together", in the same way that the big sigma means "add". Substitute i = 1, 2, … up to n and multiply the results.',
    '\\(\\prod_{i=1}^{3}(1+r_i)\\) with returns 10%, −5% and 20% is 1.10 × 0.95 × 1.20 = 1.254, so the three years together gained 25.4%.',
    'Multiplying captures compounding: each period builds on the last. One factor of zero makes the whole product zero, and one big loss (a factor of 0.5) halves everything before it, which is why avoiding large losses matters so much.',
  ),
  R(
    'integral',
    /\\int|\\oint/,
    '\\int_a^b f(x)\\,dx',
    'The stretched S is an integral: a sum of infinitely many tiny slices. It gives the area under the curve f between a and b, or the total built up by a changing rate. The "dx" says which variable you are slicing along.',
    'The area under the flat line f(x) = 3 between 0 and 2 is a rectangle 2 wide and 3 high, so \\(\\int_0^2 3\\,dx=6\\). For f(x) = x between 0 and 2 the area is a triangle: ½ × 2 × 2 = 2.',
    'A taller curve or a wider range means more area. If the curve dips below zero, that part counts as negative. Think of it as "a running total" of something that changes continuously, such as distance from speed.',
  ),
  R(
    'deriv',
    /\\partial|\\frac\{d|\\dfrac\{d|\\frac\{\\mathrm\{d\}|\\nabla|\\dot\{|\\ddot\{|f'|\\mathrm\{d\}/,
    '\\dfrac{dy}{dx}',
    'A derivative is a rate of change: how much y changes when x changes by a very small amount, or the slope of the curve at one point. A curly \\(\\partial\\) means the same thing when there are several inputs and only one is allowed to change. A dot over a letter means "its rate of change over time".',
    'For \\(y=x^2\\) the slope at x = 3 is \\(2x=6\\): when x rises by a tiny 0.01, y rises by about 0.06. At x = 0 the slope is 0 (the curve is flat there).',
    'A large derivative means the output is very sensitive to the input; a derivative of zero marks a flat spot, often a peak or a trough; a negative one means the output falls as the input rises.',
  ),
  R(
    'limit',
    /\\lim/,
    '\\lim_{n\\to\\infty}',
    '"The limit as n goes to infinity" asks what value an expression settles toward when n becomes enormous. It does not say n ever reaches infinity, only what the expression approaches.',
    '\\(\\dfrac{1}{n}\\) is 0.1 when n = 10, 0.001 when n = 1,000 and gets as close to 0 as you like, so its limit is 0. \\((1+1/n)^n\\) gives 2.594 at n = 10, 2.7048 at n = 1,000 and approaches e ≈ 2.71828.',
    'Limits tell you the long-run behaviour: whether something settles, grows without bound or oscillates. They justify formulas for continuous compounding and for infinite sums.',
  ),
  R(
    'exp',
    /\\exp|\be\^|e\^\{|\\mathrm\{e\}/,
    'e^{x}',
    'The letter e is a fixed number, about 2.71828, that appears whenever growth happens continuously. \\(e^{x}\\) (also written exp(x)) is e multiplied by itself x times, extended to any x. It always gives a positive number and it is the reverse of the natural logarithm.',
    '\\(e^0=1\\); \\(e^1\\approx2.718\\); \\(e^2\\approx7.389\\); \\(e^{-1}\\approx0.368\\); \\(e^{0.05}\\approx1.0513\\), which is the growth factor of 5% continuously compounded for one year.',
    'When x increases by 1 the result is multiplied by 2.718. Small x gives a result close to 1 + x (so \\(e^{0.01}\\approx1.01\\)). A negative x shrinks toward 0 (decay). Because it grows so quickly, small changes in an exponent produce large changes in the result.',
  ),
  R(
    'log',
    /\\ln|\\log|\\lg/,
    '\\ln x',
    'The natural logarithm ln x answers: "e to what power gives x?". It is the reverse of \\(e^x\\). log with a base (\\(\\log_{10}\\), \\(\\log_2\\)) asks the same question for that base. Logarithms turn multiplying into adding and shrink huge ranges into manageable ones.',
    '\\(\\ln 1=0\\) because \\(e^0=1\\); \\(\\ln e=1\\); \\(\\ln 10\\approx2.303\\); \\(\\log_{10}1000=3\\) because \\(10^3=1000\\); \\(\\log_2 8=3\\) because \\(2^3=8\\). Also \\(\\ln(a\\times b)=\\ln a+\\ln b\\).',
    'Logarithms grow slowly: ln 10 is 2.3 but ln 1,000,000 is only 13.8. Equal steps on a log scale mean equal percentage changes. They are defined only for positive numbers, and a small change in ln x is about the same as the percentage change in x (a rise of 0.05 in ln x is about 5%).',
  ),
  R(
    'trig',
    /\\sin|\\cos|\\tan|\\arcsin|\\arccos|\\arctan|\\sec|\\csc|\\cot|\\sinh|\\cosh|\\tanh/,
    '\\sin\\theta',
    'Sine, cosine and tangent relate an angle in a right-angled triangle to the ratios of its sides, and they also describe waves and cycles. sin and cos swing smoothly between −1 and +1; the "arc" versions (arctan, arcsin) work backwards from a ratio to an angle.',
    '\\(\\sin 0=0\\), \\(\\sin 90^\\circ=1\\), \\(\\cos 0=1\\), \\(\\cos 90^\\circ=0\\), \\(\\sin 30^\\circ=0.5\\). For a ramp that rises 3 over a run of 4, the angle is \\(\\arctan(3/4)\\approx36.9^\\circ\\).',
    'As the angle grows the sine first rises then falls; the pattern repeats every 360° (2π radians). Many formulas use radians, in which a full circle is about 6.283.',
  ),
  R(
    'abs',
    /\\left\||\\lvert|\\vert|\|[^|]+\||\\lVert|\\\|/,
    '|x|',
    'Vertical bars around a number mean absolute value: its distance from zero, ignoring the sign. Double bars around a vector or matrix mean its length (norm).',
    '\\(|5|=5\\) and \\(|-5|=5\\). \\(|3-8|=5\\): the size of the gap between 3 and 8, whichever is bigger. The length of the vector (3, 4) is \\(\\sqrt{3^2+4^2}=5\\).',
    'Absolute value removes direction and keeps size, so positive and negative errors no longer cancel when averaged. It is never negative.',
  ),
  R(
    'minmax',
    /\\min|\\max|\\arg|\\sup|\\inf/,
    '\\max(a,b)',
    'min and max pick the smaller or larger of the listed values. arg max (or arg min) tells you which input gives the largest (or smallest) output, rather than the output itself.',
    '\\(\\max(3,7)=7\\); \\(\\min(3,7)=3\\); \\(\\max(0,-4)=0\\), which turns a negative into zero (useful for payoffs that cannot go below zero). If f(1)=4, f(2)=9 and f(3)=5, then the maximum is 9 and the arg max is 2.',
    'A max never goes below zero if one of its arguments is 0, so it makes a floor. A min caps a value from above. These create kinks: the result changes direction where the two arguments cross.',
  ),
  R(
    'expect',
    /\\mathbb\{E\}|\\mathbb E|\\operatorname\{E\}|\\mathrm\{E\}|\\operatorname\{E|\\langle/,
    '\\mathbb{E}[X]',
    'E[X] is the expected value (the mean) of X: the average of all the possible outcomes, each weighted by how likely it is. It is what you would get on average if you could repeat the situation many times.',
    'A fair die gives 1 to 6 with probability 1/6 each: E = (1+2+3+4+5+6)/6 = 3.5, a value no single roll can show. A bet paying +10 with chance 30% and −4 with chance 70% has \\(E=0.3\\times10+0.7\\times(-4)=3-2.8=+0.2\\).',
    'Raising the chance of the good outcome or the size of the good payoff raises the expectation. An expectation can be positive even when most outcomes are losses, if the winners are big enough, and it says nothing about how spread out the results are.',
  ),
  R(
    'prob',
    /\\Pr\b|\\mathbb\{P\}|\\operatorname\{P\}|\bP\s*\(|\\mid|\\big\|/,
    'P(A\\mid B)',
    'P(A) is the probability of A: a number from 0 (impossible) to 1 (certain), or 0% to 100%. A vertical bar inside, as in P(A | B), means "given that B has happened": the probability of A once you already know B.',
    'A fair coin: P(heads) = 0.5. Drawing an ace from a full deck: 4/52 ≈ 0.077. P(rain | clouds) can differ greatly from P(rain): if it rains on 20% of days but on 60% of cloudy days, then P(rain) = 0.2 and P(rain | cloudy) = 0.6.',
    'Learning something (the condition) can raise or lower a probability. Probabilities of all the exclusive outcomes add up to 1, so if one rises another must fall.',
  ),
  R(
    'variance',
    /\\operatorname\{(Var|Cov|SD|Corr)\}|\\mathrm\{(Var|Cov)\}|\\sigma\b|\\mathbb\{V\}/,
    '\\sigma,\\ \\sigma^2',
    'The standard deviation \\(\\sigma\\) (sigma) measures how spread out the values are around their average: roughly the typical distance from the mean. The variance is its square, \\(\\sigma^2\\). Covariance and correlation measure whether two things move together.',
    'The numbers 4, 6, 8: mean 6; distances from it are −2, 0, +2; squares 4, 0, 4 average to 8/3 ≈ 2.67 (the variance, using n); standard deviation √2.67 ≈ 1.63. The numbers 2, 6, 10 have the same mean but a standard deviation of about 3.27: more spread.',
    'A larger sigma means a wider range of outcomes and so more risk or more noise. Because variance squares the distances, one far-away value counts heavily. Standard deviation is in the same units as the data, which makes it easier to read.',
  ),
  R(
    'bar',
    /\\bar\{|\\overline\{|\\hat\{|\\widehat\{|\\tilde\{|\\widetilde\{|\\check\{|\\breve\{|\\vec\{|\\mathbf\{/,
    '\\bar{x},\\ \\hat{x},\\ \\tilde{x}',
    'Marks over a letter change what the letter means. A bar (\\(\\bar{x}\\)) usually means an average. A hat (\\(\\hat{x}\\)) usually means an estimate or a prediction rather than the true value. A tilde often means an adjusted or approximate version. A bold or arrow letter is a vector (a list of numbers).',
    'If the five daily sales are 10, 12, 11, 13, 14, then \\(\\bar{x}=(10+12+11+13+14)/5=12\\). A model that predicts 12.5 for tomorrow gives \\(\\hat{y}=12.5\\); if the real value is 13, the error is 13 − 12.5 = 0.5.',
    'The mark does not change the arithmetic; it tells you what kind of number it is. Comparing a hat value with the actual value measures how good the estimate is.',
  ),
  R(
    'approx',
    /\\approx|\\simeq|\\sim\b|\\cong|\\doteq/,
    '\\approx',
    '"≈" means approximately equal: close enough for the purpose, but not exactly. A single tilde ("∼") can mean "is distributed as" (follows a certain probability distribution) or "is of similar size as".',
    '\\(\\pi\\approx3.14\\); \\(1.01^{10}\\approx1.105\\) while the exact value is 1.10462. \\(X\\sim N(0,1)\\) reads "X follows a standard normal distribution".',
    'Approximations are accurate for small changes and get worse for big ones: \\(1.01^{10}\\approx1+10\\times0.01=1.10\\) is close, but \\(1.5^{10}\\) is not near \\(1+10\\times0.5=6\\) (the real value is 57.7).',
  ),
  R(
    'propto',
    /\\propto/,
    '\\propto',
    '"∝" means "is proportional to": the two sides rise and fall together in a fixed ratio, so doubling one doubles the other. The constant of proportionality is simply left out.',
    'If distance ∝ time at constant speed, then 2 hours gives twice the distance of 1 hour: 60 km for 1 hour, 120 km for 2 hours. If A ∝ r², doubling r multiplies A by 4.',
    'Proportional relationships are straight lines through zero (if the power is 1). A bigger constant multiplies every value, but the pattern of change is the same.',
  ),
  R(
    'implies',
    /\\Rightarrow|\\Longrightarrow|\\implies|\\iff|\\Leftrightarrow|\\rightarrow|\\to\b|\\mapsto|\\leftarrow|\\longrightarrow/,
    '\\Rightarrow',
    'A double arrow reads "therefore" or "implies": the statement on the left leads logically to the one on the right. A double-headed arrow (⇔) means "if and only if": each statement implies the other. A single arrow can mean "goes to" (a limit) or "maps to" (a function) or "becomes".',
    '\\(x+2=5\\Rightarrow x=3\\): subtract 2 from both sides. \\(x\\to\\infty\\) reads "x grows without bound". \\(f:x\\mapsto x^2\\) says the function squares its input.',
    'An arrow shows direction of reasoning or of change: follow it from left to right to see what each step produces.',
  ),
  R(
    'ineq',
    /\\leq?\b|\\geq?\b|\\ne\b|\\neq|\\ll|\\gg|\\le\b|\\ge\b|[<>]/,
    '\\le,\\ \\ge,\\ \\ne',
    '≤ means "less than or equal to", ≥ "greater than or equal to", ≠ "not equal to". ≪ and ≫ mean "much smaller" and "much larger". They set a rule or a range rather than giving a single value.',
    '\\(x\\ge0\\) allows 0, 1, 2.7 but not −3. A discount rate of at most 8% can be written \\(r\\le0.08\\). A probability always satisfies \\(0\\le p\\le1\\).',
    'Inequalities define allowed ranges or thresholds: the answer changes only when a quantity crosses the boundary (for example a bond is cheap when its price is below its value).',
  ),
  R(
    'times',
    /\\times|\\cdot|\\div|\\pm|\\mp|\\ast/,
    '\\times,\\ \\cdot,\\ \\pm',
    '× and the dot "·" both mean multiply (the dot is used to avoid confusion with the letter x). ÷ means divide. ± means "plus or minus": two answers, one with each sign. Letters written side by side, such as "ab" or "2x", are also multiplied.',
    '\\(3\\cdot4=12\\); \\(2x\\) with x = 5 is 10; \\(10\\pm2\\) means the range from 8 to 12. A forecast of 50 ± 5 means roughly 45 to 55.',
    'Multiplication scales a value; the order does not matter (3 × 4 = 4 × 3) but brackets do, since \\(2\\times(3+4)=14\\) differs from \\(2\\times3+4=10\\).',
  ),
  R(
    'cases',
    /\\begin\{cases\}|\\begin\{array\}/,
    '\\begin{cases}\\ldots\\end{cases}',
    'A large brace with several lines is a piecewise rule: use the first line if its condition holds and the second line if its condition holds, and so on. Only one line applies at a time.',
    'The rule \\(f(x)=\\begin{cases}x&x\\ge0\\\\0&x<0\\end{cases}\\) returns x for positive x and 0 for negative x: f(5) = 5, f(−3) = 0. A tax that is 0% below 20,000 and 2% above has a different formula for each band.',
    'The result can bend or jump where the conditions change. To use it, first decide which condition your input meets, then calculate with that line only.',
  ),
  R(
    'matrix',
    /\\begin\{[pbBvV]?matrix\}|\\mathbf\{[A-Z]\}|\^\{?\\top\}?|\^\{?T\}?|\^\{-1\}/,
    '\\mathbf{A},\\ \\mathbf{x}^{\\top}',
    'A bold capital letter is usually a matrix (a grid of numbers) and a bold lower-case letter a vector (a column of numbers). A raised T (transpose) flips rows and columns. A raised −1 on a matrix means its inverse, the matrix that "undoes" it.',
    'A vector \\(\\mathbf{w}=(0.6,\\,0.4)\\) of portfolio weights and returns \\(\\mathbf{r}=(8\\%,\\,3\\%)\\): \\(\\mathbf{w}^{\\top}\\mathbf{r}=0.6\\times8+0.4\\times3=4.8+1.2=6.0\\%\\). Multiplying a matrix by a vector does many such weighted sums at once.',
    'Matrix notation packs many equations into one line. The shapes must fit: a row of n numbers can be multiplied by a column of n numbers, giving one number.',
  ),
  R(
    'binom',
    /\\binom|\\choose|!/,
    '\\binom{n}{k},\\ n!',
    '\\(n!\\) (n factorial) is n × (n−1) × … × 1. \\(\\binom{n}{k}\\) ("n choose k") counts the ways to pick k things from n when the order does not matter.',
    '\\(4!=4\\times3\\times2\\times1=24\\). \\(\\binom{5}{2}=\\dfrac{5!}{2!\\,3!}=\\dfrac{120}{2\\times6}=10\\): there are 10 ways to choose 2 people from 5.',
    'Factorials grow extremely fast (10! is 3,628,800), so the number of combinations explodes as n grows: this is why brute-force checking becomes impossible.',
  ),
  R(
    'delta',
    /\\Delta|\\delta|\\varepsilon|\\epsilon|\\Updelta/,
    '\\Delta x,\\ \\delta,\\ \\varepsilon',
    'The capital Greek delta Δ in front of a quantity means "the change in" it: new value minus old value. A small delta δ or epsilon ε usually means a very small amount, a tolerance or an error term.',
    'If a price goes from 40 to 44, \\(\\Delta P=44-40=4\\) and the percentage change is \\(\\Delta P/P=4/40=10\\%\\). If a measurement is 9.98 and the target is 10, the error is \\(\\varepsilon=-0.02\\).',
    'A positive Δ means the quantity rose and a negative Δ that it fell. Formulas with Δ often say "if x changes by this much, the result changes by that much".',
  ),
  R(
    'infty',
    /\\infty/,
    '\\infty',
    'The symbol ∞ means infinity: not a number but the idea of growing without any limit. It appears in sums that never stop and in limits.',
    '\\(1+\\tfrac12+\\tfrac14+\\tfrac18+\\ldots\\) goes on for ever, yet adds up to exactly 2. The sum \\(1+2+3+\\ldots\\) never settles; it grows without bound.',
    'Infinite sums settle to a finite value only if the terms shrink fast enough; this is what makes formulas such as perpetuities and geometric series work.',
  ),
  R(
    'text',
    /\\text\{|\\mathrm\{|\\operatorname\{|\\mathit\{|\\textbf\{/,
    '\\text{label}',
    'Words inside a formula (written upright, with \\text) are labels for quantities, not variables. They keep the formula readable: "Profit = Revenue − Cost" is clearer than single letters.',
    '\\(\\text{Profit}=\\text{Revenue}-\\text{Cost}\\) with revenue 120 and cost 90 gives 120 − 90 = 30.',
    'Treat each labelled word as a single number: you substitute its value, you do not multiply its letters.',
  ),
  R(
    'sets',
    /\\in\b|\\notin|\\subset|\\cup|\\cap|\\forall|\\exists|\\mathbb\{R\}|\\mathbb\{N\}|\\mathbb\{Z\}|\\mathbb\{Q\}|\\emptyset|\\setminus/,
    '\\in,\\ \\forall,\\ \\mathbb{R}',
    '∈ means "is an element of" (belongs to a set). ∀ means "for all" and ∃ "there exists". ℝ is the set of all real numbers (any number on the number line), ℕ the counting numbers. ∪ and ∩ are union (either) and intersection (both).',
    '\\(x\\in\\{1,2,3\\}\\) says x is one of 1, 2 or 3. \\(\\forall x>0\\) says "for every positive x". \\(p\\in[0,1]\\) says p is a number from 0 to 1.',
    'Set notation restricts what values are allowed: a result is only meaningful if the inputs belong to the stated set.',
  ),
  R(
    'dots',
    /\\ldots|\\cdots|\\dots|\\vdots|\\ddots/,
    '\\ldots',
    'Three dots mean "and so on, following the same pattern": the terms that are not written out continue in the obvious way up to the last one shown.',
    '\\(1+2+3+\\ldots+10\\) means every whole number from 1 to 10, which adds to 55. \\(x_1,x_2,\\ldots,x_n\\) is a list of n values.',
    'Dots save space; to calculate, write out the missing terms or use a formula for the pattern.',
  ),
  R(
    'underbrace',
    /\\underbrace|\\overbrace|\\underset|\\overset|\\stackrel|\\boxed|\\color|\\left|\\right|\\big|\\Big|\\bigg/,
    '\\underbrace{\\ldots}_{\\text{label}}',
    'Braces, boxes and brackets of varying size are visual aids: an underbrace labels a group of terms; \\left( and \\right) just draw brackets sized to fit; they never change the value. Everything inside a pair of brackets is worked out before it is used outside.',
    '\\(2\\times\\left(3+4\\right)\\) means first add inside the bracket (7) and then multiply: 14. Without the bracket, 2 × 3 + 4 = 10.',
    'Brackets control the order of calculation: change where they sit and the answer changes.',
  ),
]

// Greek letters with their usual jobs, so that a beginner meeting one knows what to look for.
const GREEK: { test: RegExp; show: string; name: string; use: string }[] = [
  { test: /\\alpha\b/, show: '\\alpha', name: 'alpha', use: 'a starting level or intercept, a significance level, or the excess return of a strategy over what its risk predicts' },
  { test: /\\beta\b/, show: '\\beta', name: 'beta', use: 'a sensitivity or slope: how much one thing changes when another changes by one unit (often a stock’s sensitivity to the market)' },
  { test: /\\gamma\b|\\Gamma\b/, show: '\\gamma', name: 'gamma', use: 'a second sensitivity, a decay or discount factor, or (in physics) a ratio of constants' },
  { test: /\\theta\b|\\vartheta\b|\\Theta\b/, show: '\\theta', name: 'theta', use: 'an angle, or a parameter that the model is trying to find' },
  { test: /\\lambda\b|\\Lambda\b/, show: '\\lambda', name: 'lambda', use: 'a rate (how often something happens), a wavelength, or a penalty or weight' },
  { test: /\\mu\b/, show: '\\mu', name: 'mu', use: 'the mean (average) or the expected return' },
  { test: /\\sigma\b|\\Sigma\b/, show: '\\sigma', name: 'sigma', use: 'standard deviation (spread, volatility); a capital Σ means "sum"' },
  { test: /\\rho\b|\\varrho\b/, show: '\\rho', name: 'rho', use: 'correlation (how closely two things move together, between −1 and +1) or a density' },
  { test: /\\tau\b/, show: '\\tau', name: 'tau', use: 'a time constant, a time interval or a threshold' },
  { test: /\\phi\b|\\varphi\b|\\Phi\b/, show: '\\Phi', name: 'phi', use: 'a latitude or an angle, a golden ratio, or (capital Φ) the cumulative normal distribution function, the chance of being below a given number of standard deviations' },
  { test: /\\pi\b/, show: '\\pi', name: 'pi', use: 'the constant 3.14159…, or in economics a profit or an inflation rate; the "where" list says which' },
  { test: /\\omega\b|\\Omega\b/, show: '\\omega', name: 'omega', use: 'an angular speed or frequency, or a weight' },
  { test: /\\eta\b/, show: '\\eta', name: 'eta', use: 'an efficiency, a learning rate or an elasticity' },
  { test: /\\kappa\b/, show: '\\kappa', name: 'kappa', use: 'a curvature, a speed of adjustment or a constant of proportion' },
  { test: /\\nu\b/, show: '\\nu', name: 'nu', use: 'a frequency or a number of degrees of freedom' },
  { test: /\\xi\b|\\zeta\b|\\chi\b|\\psi\b|\\Psi\b/, show: '\\xi,\\chi,\\psi', name: 'xi, zeta, chi, psi', use: 'extra parameters or functions that the formula defines for itself' },
]

export function notationFor(tex: string): NotationEntry[] {
  const out: NotationEntry[] = []
  for (const r of RULES) if (r.test.test(tex)) out.push({ id: r.id, show: r.show, meaning: r.meaning, example: r.example, effect: r.effect })
  const hasVar = out.some((e) => e.id === 'variance')
  const greek = GREEK.filter((g) => g.test.test(tex) && !(hasVar && g.name === 'sigma'))
  if (greek.length) {
    out.push({
      id: 'greek',
      show: greek
        .slice(0, 4)
        .map((g) => g.show)
        .join(',\\ '),
      meaning: `Greek letters are used as ordinary variable names, so that the Latin alphabet does not run out. In this formula: ${greek.map((g) => `${g.name} is usually ${g.use}`).join('; ')}. The "where" list above gives the exact meaning in this formula.`,
      example: 'If σ = 20% and μ = 8%, those are just two numbers (a spread and an average); you would put 0.20 and 0.08 in where the letters appear.',
      effect: 'The Greek letter has no effect of its own: what matters is the number it stands for. Changing that number changes the result in the way the formula’s other symbols show.',
    })
  }
  return out
}

// A method that works for any formula, shown once with each: the steps a beginner can follow.
export const FORMULA_RECIPE: { title: string; body: string }[] = [
  { title: 'Name the unknown', body: 'Find the one quantity the formula produces. It is usually alone on the left of the equals sign, or is the thing the caption says the formula gives.' },
  { title: 'List what you are given', body: 'Every other symbol needs a number. The "where" list tells you what each one means and what unit it is in. If the formula uses a percentage, convert it to a decimal first (8% = 0.08).' },
  { title: 'Work inside-out', body: 'Do what is in the brackets first, then powers and roots, then multiplication and division, then addition and subtraction. Inside a fraction, work out the top and the bottom separately before dividing.' },
  { title: 'Check the size', body: 'Does the answer look reasonable? A probability must be between 0 and 1, a variance cannot be negative, a price should be near a price. If not, look for a slipped decimal or a wrong unit.' },
  { title: 'Change one input', body: 'Raise one number a little and see which way the answer moves and by how much. That is the "effect" of that piece of the formula.' },
]
