import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Estimating how long someone has been dead, the post-mortem interval (PMI), is one of the most requested and least precise tasks in forensic pathology. Every method measures a process that runs at a rate depending on temperature, body size, clothing and more. The honest output is always a range, and it widens quickly with time.',
  nutshell: [
    '**Algor mortis**: the body cools towards the surrounding temperature, slowly at first, then roughly exponentially.',
    'The **Henssge nomogram** models that curve using rectal and ambient temperature and body weight, giving a range of about ±3 hours at best in standard conditions.',
    '**Livor mortis** (settling of blood) and **rigor mortis** (stiffening) follow rough timetables but vary widely between people and environments.',
    'After the first day or so, **forensic entomology** becomes the main tool: insect development, tracked in **accumulated degree days**, gives a minimum time since colonisation.',
    'All PMI estimates are ranges, and combining methods narrows them more than any single method alone.',
  ],
  sections: [
    {
      id: 'early-signs',
      title: 'Early changes: livor and rigor',
      blocks: [
        {
          t: 'table',
          head: ['Change', 'What it is', 'Typical timing (highly variable)'],
          rows: [
            ['Livor mortis (hypostasis)', 'Blood settles under gravity into the lowest parts of the body, causing discolouration', 'Visible from about 30 min–2 h; becomes “fixed” (no longer shifts with position) after roughly 8–12 h'],
            ['Rigor mortis', 'Muscles stiffen as cellular energy (ATP) runs out', 'Begins about 2–6 h, fully developed around 12 h, then fades over roughly 24–48 h'],
            ['Algor mortis', 'Cooling towards ambient temperature', 'An initial plateau of a few hours, then faster cooling'],
          ],
          caption: 'Heat speeds every process; cold slows them. Textbook times are rough guides, not clocks.',
        },
        { t: 'callout', tone: 'tip', title: 'Position clues', text: 'Fixed livor that does not match the position a body was found in suggests it was moved some hours after death, often more useful than the timing itself.' },
      ],
    },
    {
      id: 'cooling',
      title: 'Cooling and the Henssge method',
      blocks: [
        { t: 'p', text: 'A naive model, Newton’s law of cooling, has temperature fall exponentially from the moment of death. Real bodies show a **plateau** first, because the core keeps generating some heat and the outer layers must cool before the core does. Claus Henssge fitted a double-exponential curve to measured cases that captures this.' },
        {
          t: 'math',
          tex: String.raw`Q = \frac{T_r - T_a}{37.2 - T_a} = 1.25\,e^{Bt} - 0.25\,e^{5Bt}, \qquad B = -1.2815\,M^{-0.625} + 0.0284`,
          caption: 'Henssge’s formula for ambient temperatures up to about 23 °C. Q is the fraction of the original temperature excess still remaining. In practice it is read from a nomogram (a printed chart), with correction factors for clothing, wind and wet surroundings.',
          where: [
            { sym: 'T_r', def: 'Rectal (core) temperature at the time of measurement, °C' },
            { sym: 'T_a', def: 'Ambient temperature, °C' },
            { sym: '37.2', def: 'Assumed core temperature at death, °C' },
            { sym: 'M', def: 'Body mass in kilograms (multiplied by a corrective factor for clothing and conditions)' },
            { sym: 't', def: 'Time since death in hours, the unknown' },
            { sym: 'B', def: 'Cooling constant, more negative (faster) for lighter bodies' },
          ],
          syntax: [
            { sym: 'e^{Bt}', say: '“e to the B t”: the exponential function; since B is negative, it shrinks from 1 towards 0 as t grows' },
            { sym: 'M^{-0.625}', say: '“M to the minus 0.625”: one over M to the power 0.625, so heavier bodies give a smaller number' },
            { sym: '1.25\\,e^{Bt} - 0.25\\,e^{5Bt}', say: 'a fast-decaying term subtracted from a slow one: at t = 0 it equals 1.25 − 0.25 = 1, and the subtraction is what makes the plateau' },
          ],
          worked: {
            title: '70 kg, unclothed, still air: rectal 30 °C, room 18 °C',
            steps: [
              String.raw`\(Q = (30 - 18)/(37.2 - 18) = 12/19.2 = 0.625\)`,
              String.raw`\(M^{-0.625} = 70^{-0.625} \approx 0.07028\)`,
              String.raw`\(B = -1.2815 \times 0.07028 + 0.0284 \approx -0.06166\)`,
              String.raw`Find \(t\) with \(1.25\,e^{-0.06166t} - 0.25\,e^{-0.3083t} = 0.625\): solve numerically (trial values or a nomogram)`,
              String.raw`Check \(t = 11.0\): \(1.25 \times 0.5067 - 0.25 \times 0.0334 = 0.6334 - 0.0083 \approx 0.625\) ✓`,
            ],
            answer: String.raw`About 11 hours since death, which Henssge’s published limits would turn into a range of roughly 8 to 14 hours. Clothing, a draught or a change in room temperature would shift it.`,
          },
        },
        {
          t: 'plot',
          title: 'Plateau-and-decline cooling versus a simple exponential',
          x: [0, 30],
          y: [16, 38],
          xLabel: 'hours since death',
          yLabel: 'core temperature (°C)',
          curves: [
            { f: (t: number) => 18 + 19.2 * (1.25 * Math.exp(-0.06166 * t) - 0.25 * Math.exp(-0.3083 * t)), label: 'Henssge (70 kg, 18 °C)' },
            { f: (t: number) => 18 + 19.2 * Math.exp(-0.06166 * t), label: 'Newton only', dashed: true },
          ],
          hlines: [{ y: 18, label: 'room temperature' }],
          points: [{ x: 11, y: 30, label: '30 °C at ~11 h' }],
          caption: 'The plateau makes temperature almost useless in the first couple of hours; once a body nears ambient temperature, the curve flattens and the method stops working altogether.',
        },
      ],
    },
    {
      id: 'entomology',
      title: 'Forensic entomology',
      blocks: [
        { t: 'p', text: 'Blowflies (family Calliphoridae) can find a body within minutes to hours if they have access. Their eggs hatch into larvae that grow through three stages, then pupate and emerge as adults. Development speed depends almost entirely on temperature, so entomologists convert time into **thermal units**.' },
        {
          t: 'cycle',
          caption: 'Blowfly life cycle, the oldest stage found on the body marks the minimum time since eggs were laid.',
          items: [
            { name: 'Egg', body: 'Laid in batches; hatch in roughly a day at warm temperatures.' },
            { name: 'Larva (three instars)', body: 'Grows and moults twice; size and instar help age it.' },
            { name: 'Pupa', body: 'A hard brown case; empty cases show adults have already emerged.' },
            { name: 'Adult', body: 'Emerges, mates and lays eggs, starting the cycle again.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{ADD} = \sum_{\text{days}} \max\!\big(0,\; \bar{T}_{\text{day}} - T_{\text{base}}\big)`,
          caption: 'Accumulated degree days. Laboratory rearing tells us how many ADD a species needs to reach each stage; weather-station data for the scene is then summed backwards from discovery until that total is reached. The numbers below are illustrative, not a real species’ values.',
          where: [
            { sym: '\\bar{T}_{\\text{day}}', def: 'Mean temperature for a day at the scene, °C' },
            { sym: 'T_{\\text{base}}', def: 'Developmental threshold: below this the species barely develops' },
          ],
          syntax: [
            { sym: '\\sum_{\\text{days}}', say: '“the sum over days”: work out the bracket for each day and add them up' },
            { sym: '\\max(0, x)', say: '“the maximum of zero and x”: use x if positive, otherwise 0, cold days add nothing' },
            { sym: '\\bar{T}', say: '“T bar”: an average temperature' },
          ],
          worked: {
            title: 'A stage needing 60 ADD above a 10 °C base',
            steps: [
              String.raw`Daily means counting back from discovery: 22, 24, 20, 23, 21 °C`,
              String.raw`Above base: \(12 + 14 + 10 + 13 + 11\)`,
              String.raw`\(= 60\) ADD after five days`,
            ],
            answer: String.raw`The eggs were laid at least about five days before discovery. In cooler weather (say 15 °C means, 5 ADD a day) the same stage would imply about 12 days, temperature dominates the estimate.`,
          },
        },
        { t: 'callout', tone: 'warn', title: 'A minimum, not an exact time', text: 'Entomology estimates when insects arrived, not when death occurred. Indoors, wrapped bodies, burial or cold weather can delay colonisation; local temperature can differ from the nearest weather station; and large larval masses generate their own heat. Experts report a minimum PMI with a range.' },
      ],
    },
  ],
  sources: [
    'Henssge, C., & Madea, B. (2004). Estimation of the time since death in the early post-mortem period. *Forensic Science International*, 144(2–3), 167–175.',
    'Madea, B. (Ed.) (2016). *Estimation of the Time Since Death* (3rd ed.). CRC Press.',
    'Amendt, J., et al. (2007). Best practice in forensic entomology, standards and guidelines. *International Journal of Legal Medicine*, 121, 90–104.',
  ],
  related: ['forensics/death-investigation/cause-and-manner', 'forensics/reliability/wrongful-convictions', 'forensics/crime-scene/scene-and-evidence'],
}

export default guide
