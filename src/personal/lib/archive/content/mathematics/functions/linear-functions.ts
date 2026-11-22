import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A linear function is the simplest shape there is: a straight line, with a constant rate of change. Everything about it is controlled by two numbers, how steep it is, and where it crosses the y-axis, and once you can read those off an equation at a glance, reading off a graph becomes just as fast.',
  nutshell: [
    'Slope-intercept form: \\(y = mx + b\\), where m is the slope and b is the y-intercept.',
    'Slope \\(m = \\dfrac{\\Delta y}{\\Delta x}\\): "rise over run", the same ratio between any two points on the line.',
    'Parallel lines share the same slope; perpendicular lines have slopes that multiply to \\(-1\\).',
    'A line is the graph of the simplest possible rate of change: constant.',
  ],
  sections: [
    {
      id: 'slope',
      title: 'Slope and intercept',
      blocks: [
        {
          t: 'math',
          tex: String.raw`y = mx + b`,
          where: [
            { sym: 'm', def: 'Slope: how many units y changes for every 1-unit increase in x' },
            { sym: 'b', def: 'y-intercept: the value of y when x = 0, where the line crosses the y-axis' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`m = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}`,
          caption: '"Rise over run": pick any two points on the line and this ratio is always the same, that constancy is exactly what makes a function linear.',
        },
        {
          t: 'example',
          title: 'Finding the equation of a line through two points',
          lines: [
            { label: 'Points', text: '\\((1, 5)\\) and \\((4, 11)\\)' },
            { label: 'Slope', text: '\\(m = \\dfrac{11-5}{4-1} = \\dfrac{6}{3} = 2\\)' },
            { label: 'Find b', text: 'substitute (1,5): \\(5 = 2(1) + b \\Rightarrow b = 3\\)' },
            { label: 'Equation', text: '\\(y = 2x + 3\\)' },
          ],
        },
        { t: 'math-viz', viz: 'function-explorer' },
      ],
    },
    {
      id: 'forms',
      title: 'Point-slope form, and parallel vs perpendicular',
      blocks: [
        {
          t: 'math',
          tex: String.raw`y - y_1 = m(x - x_1)`,
          caption: 'Point-slope form: useful when you know the slope and one point, without needing to solve for b first. It is just a rearrangement of the slope formula, with \\((x_2,y_2)\\) replaced by the general point (x, y).',
        },
        {
          t: 'math',
          tex: String.raw`\text{Parallel: } m_1 = m_2 \qquad\qquad \text{Perpendicular: } m_1 \cdot m_2 = -1`,
          caption: 'Parallel lines never meet because they rise at exactly the same rate. Perpendicular lines meet at a right angle; their slopes are negative reciprocals of each other (a slope of \\(\\tfrac23\\) pairs with \\(-\\tfrac32\\)).',
        },
        {
          t: 'metric',
          name: 'slope (m)',
          shows: 'How fast y changes as x increases: the single number that completely characterises a straight line\'s steepness and direction. Every linear relationship on this site, from a budget line to a fixed cost-per-unit, is read through its slope.',
          eli5: 'If a line were a hill, slope is how steep the climb is. A gentle hill has a small slope; a cliff face has a huge one; a flat road has a slope of exactly 0.',
          higher: 'A larger positive slope means a steeper upward line: y increases faster for each step to the right. A slope of 5 climbs five times as fast as a slope of 1.',
          lower: 'A smaller (or negative) slope means a flatter, or downward-sloping, line. A negative slope means y decreases as x increases; a slope of exactly 0 is a perfectly flat, horizontal line.',
          typical: 'An undefined slope (division by zero in the rise-over-run formula) happens only for a perfectly vertical line, where \\(\\Delta x = 0\\), vertical lines are the one straight-line shape that cannot be written as \\(y=mx+b\\) at all.',
        },
      ],
    },
  ],
  sources: ['Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/functions/quadratics', 'mathematics/functions/transformations', 'finance/technical/trends'],
}

export default guide
