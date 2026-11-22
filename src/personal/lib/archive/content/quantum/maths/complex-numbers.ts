import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Quantum amplitudes are complex numbers. That sounds intimidating, but you only need four ideas: what i is, how to add and multiply complex numbers, how to find a complex number’s size, and how Euler’s formula turns an angle into a complex number. The angle, called the phase, is what lets quantum amplitudes cancel or reinforce.',
  nutshell: [
    '**i** is defined by \\(i^2 = -1\\). A complex number is \\(z = a + bi\\): a real part a and an imaginary part b.',
    'Picture z as a point (or arrow) on a flat plane: a across, b up.',
    'Its **size** (modulus) is \\(|z| = \\sqrt{a^2 + b^2}\\); its **angle** is the phase.',
    '**Euler’s formula** \\(e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\) is an arrow of length 1 at angle θ. Multiplying by it rotates.',
  ],
  sections: [
    {
      id: 'arithmetic',
      title: 'Adding and multiplying',
      blocks: [
        {
          t: 'math',
          tex: String.raw`(a+bi)(c+di) = (ac - bd) + (ad + bc)\,i`,
          caption: 'Multiplying two complex numbers: expand the brackets and use i² = −1.',
          plain: 'Multiply every part of the first bracket by every part of the second, exactly as in ordinary algebra. The only new rule is that whenever i times i appears, you replace it with −1. That is what makes the bd term change sign and move into the real part.',
          where: [
            { sym: 'a, c', def: 'the real parts of the two numbers' },
            { sym: 'b, d', def: 'the imaginary parts (the numbers in front of i)' },
            { sym: 'i', def: 'the imaginary unit, defined so that i² = −1' },
          ],
          syntax: [
            { sym: '(a+bi)(c+di)', say: 'two brackets side by side mean multiply them' },
            { sym: 'bi', say: '“b times i”; a number written next to a letter means multiply' },
            { sym: String.raw`\,i`, say: 'the thin space before i is only spacing; it does not change the meaning' },
          ],
          worked: {
            title: 'Multiply (2 + 3i)(1 − i)',
            steps: [
              String.raw`Identify the parts: \(a = 2\), \(b = 3\), \(c = 1\), \(d = -1\).`,
              String.raw`Real part: \(ac - bd = 2 \times 1 - 3 \times (-1) = 2 + 3 = 5\).`,
              String.raw`Imaginary part: \(ad + bc = 2 \times (-1) + 3 \times 1 = -2 + 3 = 1\).`,
              String.raw`Check by expanding directly: \(2 - 2i + 3i - 3i^2 = 2 + i - 3(-1) = 5 + i\).`,
            ],
            why: [
              'match each number to its slot in the formula; d is −1 because 1 − i means 1 + (−1)i',
              'the real part collects the real × real product and the i × i product, which became −bd',
              'the imaginary part collects the two mixed products, each of which has one i',
              'expanding the brackets by hand is the same calculation, a good check that the formula was used correctly',
            ],
            answer: String.raw`\((2 + 3i)(1 - i) = 5 + i\).`,
          },
        },
        {
          t: 'math',
          tex: String.raw`|z| = \sqrt{a^2 + b^2} = \sqrt{z\,\bar z}, \qquad \bar z = a - bi`,
          caption: 'The modulus (size) of z = a + bi, and its complex conjugate.',
          plain: 'Draw z as an arrow from the origin to the point (a, b). Its length comes from Pythagoras: square both sides, add, and take the square root. The conjugate is the mirror image of z flipped across the horizontal axis, and multiplying z by its conjugate gives the length squared, a plain non-negative real number. In quantum computing the squared size of an amplitude is a probability, so this formula is used constantly.',
          where: [
            { sym: 'z', def: 'a complex number a + bi' },
            { sym: String.raw`|z|`, def: 'the modulus: the distance from 0 to z on the complex plane' },
            { sym: String.raw`\bar z`, def: 'the complex conjugate: the same number with the sign of the imaginary part flipped' },
          ],
          syntax: [
            { sym: String.raw`|z|`, say: 'vertical bars around a number mean its size (absolute value), never negative' },
            { sym: String.raw`\bar z`, say: 'a bar over a letter means “the conjugate of”' },
            { sym: String.raw`\sqrt{\;}`, say: 'square root of everything under the bar' },
          ],
          worked: {
            title: 'Size of 3 + 4i, and a probability',
            steps: [
              String.raw`\(a = 3\), \(b = 4\).`,
              String.raw`\(a^2 + b^2 = 9 + 16 = 25\).`,
              String.raw`\(|z| = \sqrt{25} = 5\).`,
              String.raw`Check with the conjugate: \(z\bar z = (3 + 4i)(3 - 4i) = 9 - 12i + 12i - 16i^2 = 9 + 16 = 25\).`,
              String.raw`An amplitude of \(\tfrac{3}{5} + \tfrac{4}{5}i\) has \(|z|^2 = \tfrac{9}{25} + \tfrac{16}{25} = 1\), a probability of 100%.`,
            ],
            why: [
              'read off the real and imaginary parts',
              'square each part and add, as in Pythagoras’ theorem',
              'the square root turns the squared length back into a length',
              'the i terms cancel and −16i² becomes +16, so z times its conjugate is the squared length, as promised',
              'dividing by 5 scales the arrow to length 1; quantum amplitudes are usually scaled so their squared sizes add to 1',
            ],
            answer: String.raw`\(|3 + 4i| = 5\), and \(|z|^2\) (not \(z^2\)) is what turns an amplitude into a probability.`,
          },
        },
      ],
    },
    {
      id: 'euler',
      title: 'Euler’s formula and phase',
      blocks: [
        {
          t: 'math',
          tex: String.raw`e^{i\theta} = \cos\theta + i\sin\theta`,
          caption: 'Euler’s formula: a complex number of length 1 pointing at angle θ.',
          plain: 'Think of a clock hand of length 1 that starts pointing right (along the real axis) and turns anticlockwise by the angle θ. Its across-coordinate is cos θ and its up-coordinate is sin θ. Euler’s formula is a compact way of writing that hand. Multiplying any complex number by it rotates the number by θ without changing its size. That rotation is called a phase, and phases are what let quantum amplitudes interfere.',
          where: [
            { sym: 'e', def: 'Euler’s number, about 2.718' },
            { sym: String.raw`\theta`, def: 'the angle (in radians: π radians = 180°)' },
            { sym: String.raw`\cos\theta,\ \sin\theta`, def: 'the horizontal and vertical coordinates of a point at angle θ on a circle of radius 1' },
          ],
          syntax: [
            { sym: String.raw`e^{i\theta}`, say: '“e to the i theta”; the whole i·θ is the exponent' },
            { sym: String.raw`\theta`, say: 'the Greek letter theta, commonly used for an angle' },
            { sym: String.raw`\pi`, say: 'pi, about 3.14159; π radians is half a turn' },
          ],
          worked: {
            title: 'The phases quantum computing uses most',
            steps: [
              String.raw`\(\theta = 0\): \(e^{0} = \cos 0 + i \sin 0 = 1 + 0i = 1\).`,
              String.raw`\(\theta = \pi/2\) (90°): \(\cos 90° + i\sin 90° = 0 + 1i = i\).`,
              String.raw`\(\theta = \pi\) (180°): \(\cos 180° + i\sin 180° = -1 + 0i = -1\).`,
              String.raw`\(\theta = \pi/4\) (45°): \(\tfrac{\sqrt2}{2} + \tfrac{\sqrt2}{2}i \approx 0.707 + 0.707i\).`,
              String.raw`Rotation check: \(i \times (3 + 4i) = 3i + 4i^2 = -4 + 3i\), which still has size \(\sqrt{16 + 9} = 5\).`,
            ],
            why: [
              'no turn at all leaves the hand pointing right, the number 1',
              'a quarter turn points straight up, which is i',
              'a half turn points left, which is −1; this is Euler’s famous identity e^{iπ} = −1',
              'an eighth of a turn; this is the phase of the T gate',
              'multiplying by i rotated the arrow by 90° and left its length at 5, showing a phase changes direction but not size',
            ],
            answer: String.raw`\(e^{i\pi} = -1\) is the key fact: a phase of π flips the sign of an amplitude, which is exactly how quantum algorithms make wrong answers cancel.`,
          },
        },
        { t: 'callout', tone: 'tip', title: 'Global versus relative phase', text: 'Multiplying the *whole* state by a phase changes nothing you can ever measure (a global phase). Changing the phase of *one* amplitude relative to another (a relative phase) changes how amplitudes interfere later, and so changes measurement results. Quantum gates mostly work by shifting relative phases.' },
      ],
    },
  ],
  sources: ['Nielsen & Chuang (2010), Appendix and chapter 2.', 'Needham, T. (1997). Visual Complex Analysis. Oxford University Press.'],
  related: ['quantum/maths/vectors-and-matrices', 'quantum/core/qubits-and-measurement'],
}

export default guide
