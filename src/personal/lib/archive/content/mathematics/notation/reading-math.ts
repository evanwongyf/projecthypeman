import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Before any single symbol, there are a few habits that make every formula on this site readable: knowing the difference between an expression and an equation, knowing the order operations happen in, and knowing that a letter is just a labelled, unknown (or changeable) number. Get these three habits solid and the rest of this shelf is just vocabulary.',
  nutshell: [
    'An **expression** is a mathematical phrase with a value (\\(3x + 2\\)); an **equation** is a sentence claiming two expressions are equal (\\(3x + 2 = 11\\)).',
    'Order of operations (**PEMDAS**/BODMAS) is a universal agreement on which part of an expression to compute first, so everyone gets the same answer.',
    'A **variable** is a placeholder for a number: sometimes unknown and to be found, sometimes free to vary, sometimes fixed but arbitrary.',
    '**Substitution**, replacing a letter with a number and simplifying, is the single most useful skill for turning an abstract formula into something concrete.',
  ],
  sections: [
    {
      id: 'expr-eq',
      title: 'Expressions versus equations',
      blocks: [
        {
          t: 'table',
          head: ['', 'Expression', 'Equation'],
          rows: [
            ['Looks like', '\\(3x + 2\\)', '\\(3x + 2 = 11\\)'],
            ['Has a verb?', 'No, it is a noun phrase, a value', 'Yes"equals" is the verb; it is a complete sentence'],
            ['Can you "solve" it?', 'No. You can only simplify or evaluate it', 'Yes: find which x makes the sentence true'],
            ['Example reading', '"three x plus two"', '"three x plus two equals eleven"'],
          ],
          caption: 'A huge source of confusion is trying to "solve" an expression, or trying to "simplify" an equation when you actually need to solve it. Ask first: is there an equals sign making a claim, or not?',
        },
        {
          t: 'example',
          title: 'Solving the equation above',
          lines: [
            { label: 'Equation', text: '\\(3x + 2 = 11\\)' },
            { label: 'Subtract 2 from both sides', text: '\\(3x = 9\\)' },
            { label: 'Divide both sides by 3', text: '\\(x = 3\\)' },
            { label: 'Check', text: '\\(3(3) + 2 = 11\\) ✓: substituting the answer back in must make the sentence true' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The golden rule of equations', text: 'Whatever you do to one side of an equation (add, subtract, multiply, divide, square, take a log of…), you must do to the other side too, or the sentence stops being true. This single rule is behind almost every algebraic manoeuvre on this shelf.' },
      ],
    },
    {
      id: 'order',
      title: 'Order of operations',
      blocks: [
        {
          t: 'levels',
          caption: 'Work from the bottom (do these first) to the top (do these last).',
          items: [
            { name: 'Addition and subtraction', body: 'Left to right, last of all.' },
            { name: 'Multiplication and division', body: 'Left to right, before addition and subtraction.' },
            { name: 'Exponents and roots', body: 'Before multiplication and division.' },
            { name: 'Parentheses / brackets', body: 'Whatever is inside them is computed completely first, as its own self-contained problem.' },
          ],
        },
        {
          t: 'example',
          title: 'Why order matters: \\(2 + 3 \\times 4\\)',
          lines: [
            { label: 'Wrong (left to right)', text: '\\((2+3)\\times 4 = 20\\)' },
            { label: 'Right (multiply first)', text: '\\(2 + (3\\times 4) = 2 + 12 = 14\\)' },
            { label: 'Why it matters', text: 'without an agreed order, the same formula would mean different things to different people, PEMDAS exists purely so everyone gets 14' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\frac{2 + 3 \times 4}{\sqrt{9} - 1^{2}} = \frac{2 + 12}{3 - 1} = \frac{14}{2} = 7`,
          caption: 'A fraction bar acts like invisible parentheses: compute the whole top and the whole bottom separately before dividing. Inside the bottom, the root and the power both happen before the subtraction.',
        },
        {
          t: 'dodont',
          do: ['Compute inside the innermost parentheses first, working outward', 'Treat a fraction bar as grouping everything above and below it', 'Rewrite a confusing expression with extra (redundant) parentheses if it helps you see the structure'],
          dont: ['Assume multiplication always happens before division, or addition before subtraction, same-level operations go left to right', 'Forget that a negative sign in front of a variable, like −x², squares x first, then negates: −x² means −(x²), not (−x)²'],
        },
      ],
    },
    {
      id: 'variables',
      title: 'What a variable actually is',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Unknown to solve for', body: 'In \\(3x + 2 = 11\\), x stands for one specific number we don\'t yet know, and the equation is a clue to find it.' },
            { title: 'Free to vary', body: 'In \\(y = 2x + 1\\), x can be any number you like, and y changes along with it: this is what makes it a function, not a single equation to solve.' },
            { title: 'Fixed but arbitrary (a parameter)', body: 'In \\(y = mx + b\\), m and b are specific numbers for a specific line, but we leave them as letters to talk about any line at once, this is how a proof or a general formula stays true for every case.' },
          ],
        },
        {
          t: 'example',
          title: 'Substitution: turning the abstract into the concrete',
          lines: [
            { label: 'General formula', text: '\\(FV = PV(1+r)^n\\) (future value, from [the time value of money](@finance/foundations/time-value))' },
            { label: 'Substitute', text: '\\(PV = 1000,\\ r = 0.06,\\ n = 10\\)' },
            { label: 'Compute', text: '\\(FV = 1000(1.06)^{10} = 1{,}790.85\\)' },
            { label: 'The skill', text: 'every formula on this site becomes a plain arithmetic problem the moment you substitute real numbers for every letter' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Why "x"?', text: 'René Descartes popularised using letters from the end of the alphabet (x, y, z) for unknowns and the start of the alphabet (a, b, c) for known constants, in his 1637 book *La Géométrie*. One popular (though disputed) story is that French printers simply had more spare type for "x" than for other letters. The convention stuck regardless.' },
      ],
    },
  ],
  sources: ['Descartes, R. (1637). *La Géométrie*.', 'Mazur, J. (2014). *Enlightening Symbols*. Princeton University Press.'],
  related: ['mathematics/notation/symbols', 'mathematics/algebra/equations-inequalities', 'mathematics/notation/functions'],
}

export default guide
