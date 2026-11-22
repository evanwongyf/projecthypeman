import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Blood and other body fluids can answer two different kinds of question. Chemistry and DNA ask *what is this and whose is it?* Bloodstain pattern analysis (BPA) asks *how did it get here?*, using the shape and distribution of stains to reconstruct events. The first rests on strong science; the second rests on real physics but leans heavily on examiner judgement.',
  nutshell: [
    '**Presumptive tests** (Kastle–Meyer, luminol) are quick and sensitive but can react to other substances; **confirmatory tests** establish that a stain is blood, and whether it is human.',
    'Stains are classified as **passive** (drips, pools), **transfer** (swipes, contact marks) or **spatter** (droplets projected through the air).',
    'For a droplet hitting a flat surface, the **impact angle** can be estimated from the stain’s width-to-length ratio: \\(\\sin\\alpha = W/L\\).',
    'Lines traced back from several stains give an **area of convergence**; adding the angles estimates an **area of origin** in 3D.',
    'The 2009 NAS report and later studies found BPA conclusions can be **subjective and inconsistent** between analysts; the measurements are sounder than the stories built on them.',
  ],
  sections: [
    {
      id: 'tests',
      title: 'Is it blood? Is it human?',
      blocks: [
        {
          t: 'table',
          head: ['Fluid', 'Presumptive (screening)', 'Confirmatory'],
          rows: [
            ['Blood', 'Kastle–Meyer (phenolphthalein), leucomalachite green, luminol, all use the catalytic activity of haem', 'Microcrystal tests (Takayama); immunochromatographic strips specific to human haemoglobin'],
            ['Semen', 'Acid phosphatase colour test; UV fluorescence', 'Sperm cells under the microscope; prostate-specific antigen (PSA/p30)'],
            ['Saliva', 'Amylase activity', 'Limited; usually inferred, then DNA typed'],
          ],
          caption: 'Presumptive tests are chosen for sensitivity, confirmatory tests for specificity.',
        },
        { t: 'callout', tone: 'myth', title: 'Luminol does not prove blood', text: 'Luminol glows on contact with haem, but also with some bleaches, metals such as copper, and certain plant peroxidases. A glow is a lead for sampling, never a conclusion. Luminol can also dilute stains, so it is used after other documentation.' },
      ],
    },
    {
      id: 'patterns',
      title: 'Pattern types',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Passive', body: 'Formed by gravity: drips, flows, pools. Drip stains on a flat surface from a stationary source tend to be round.', tag: 'gravity' },
            { title: 'Transfer', body: 'A bloodied object touched a surface: a swipe (wet blood carried onto a surface) or a wipe (something moved through an existing stain).', tag: 'contact' },
            { title: 'Spatter', body: 'Droplets projected through the air, for example by impact, by being flung from a moving object (cast-off), or by breathing.', tag: 'airborne' },
          ],
        },
        { t: 'p', text: 'An elongated stain usually has a narrow “tail” pointing in the **direction of travel**. Size is a weaker clue than many textbooks once suggested: older schemes that sorted spatter into low, medium and high velocity have largely been replaced by descriptive categories, because droplet size overlaps heavily between mechanisms.' },
      ],
    },
    {
      id: 'angles',
      title: 'The geometry: impact angle and origin',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sin\alpha = \frac{W}{L} \qquad\Longrightarrow\qquad \alpha = \arcsin\!\left(\frac{W}{L}\right)`,
          caption: 'A spherical droplet striking at a shallow angle leaves a long, narrow ellipse; striking straight on (90°) it leaves a circle, where width equals length. Measure the ellipse only, excluding the tail.',
          where: [
            { sym: '\\alpha', def: 'Impact angle between the droplet’s path and the surface (90° is perpendicular)' },
            { sym: 'W', def: 'Width of the elliptical part of the stain' },
            { sym: 'L', def: 'Length of the elliptical part, not including the tail' },
          ],
          syntax: [
            { sym: '\\sin\\alpha', say: '“sine of alpha”: in a right-angled triangle, the side opposite the angle divided by the longest side' },
            { sym: '\\arcsin', say: '“arc sine” (written \\(\\sin^{-1}\\) on calculators): runs sine backwards, turning a ratio between 0 and 1 back into an angle' },
            { sym: '\\Longrightarrow', say: '“which means”: the right-hand form follows from the left' },
          ],
          worked: {
            title: 'Two measured stains',
            steps: [
              String.raw`Stain A: \(W = 6\) mm, \(L = 12\) mm, so \(W/L = 0.5\)`,
              String.raw`\(\alpha = \arcsin(0.5) = 30^\circ\)`,
              String.raw`Stain B: \(W = 4.2\) mm, \(L = 9.8\) mm, so \(W/L \approx 0.4286\)`,
              String.raw`\(\alpha = \arcsin(0.4286) \approx 25.4^\circ\)`,
            ],
            answer: String.raw`Stain A struck at about 30°, stain B at about 25°. A 0.5 mm error in measuring a small stain can shift the angle by several degrees, which is why analysts measure many stains, not one.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`h = d \tan\alpha`,
          caption: 'The “tangent method” for the height of origin above the surface, once the area of convergence on the surface has been found by tracing stain directions back to where they cross.',
          where: [
            { sym: 'h', def: 'Estimated height of the blood source above the surface' },
            { sym: 'd', def: 'Distance along the surface from the stain to the area of convergence' },
          ],
          syntax: [
            { sym: '\\tan\\alpha', say: '“tangent of alpha”: opposite side over adjacent side, here, height over ground distance' },
            { sym: 'd \\tan\\alpha', say: 'multiply the distance by the tangent of the angle' },
          ],
          worked: {
            title: 'Stain A again',
            steps: [
              String.raw`Stain A is \(d = 80\) cm from the area of convergence and struck at \(\alpha = 30^\circ\)`,
              String.raw`\(\tan 30^\circ \approx 0.5774\)`,
              String.raw`\(h = 80 \times 0.5774 \approx 46.2\) cm`,
            ],
            answer: String.raw`About 46 cm above the floor. Because real droplets fall in curves under gravity and drag rather than straight lines, the straight-line method tends to **overestimate** height; it gives an upper region, not a point.`,
          },
        },
        { t: 'callout', tone: 'note', title: 'Strings and software', text: 'Traditionally, strings were run from each stain at its impact angle and the region where they bunched up marked the origin. Software now does the same from photographs and can model curved trajectories, but the inputs are still hand-selected stains.' },
      ],
    },
    {
      id: 'limits',
      title: 'How far can BPA be trusted?',
      blocks: [
        {
          t: 'list',
          items: [
            'The NAS report (2009) noted that BPA opinions were often “more subjective than scientific” and that training requirements varied enormously.',
            'A large 2021 black-box study (Hicklin and colleagues) found analysts frequently disagreed on classifying the same patterns, and a meaningful share of conclusions were wrong.',
            'Journalistic and legal investigations, such as ProPublica’s 2018 reporting on the Joe Bryan case in Texas, documented convictions resting on analysts with minimal training.',
            'The physics of single droplets is well understood; reconstructing a whole sequence of events from many stains is where errors enter.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Strong versus weak claims', text: 'Stronger: “these stains are consistent with blood travelling from left to right.” Weaker, and in need of support: “the victim was struck three times while kneeling.” Good reports keep observations, inferences and alternatives visibly separate.' },
      ],
    },
  ],
  sources: [
    'Bevel, T., & Gardner, R. M. (2008). *Bloodstain Pattern Analysis with an Introduction to Crime Scene Reconstruction* (3rd ed.). CRC Press.',
    'Hicklin, R. A., et al. (2021). Accuracy and reproducibility of conclusions by forensic bloodstain pattern analysts. *Forensic Science International*, 325, 110856.',
    'National Research Council (2009). *Strengthening Forensic Science in the United States: A Path Forward*.',
  ],
  related: ['forensics/biological/dna-profiling', 'forensics/reliability/cognitive-bias', 'forensics/crime-scene/scene-and-evidence'],
}

export default guide
