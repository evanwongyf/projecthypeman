import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The body is conventionally organised into around eleven major organ systems, groups of organs working toward one shared job. None of them actually works in isolation, but having a map of what each system is responsible for makes the rest of biology and medicine far easier to place.',
  nutshell: [
    'Each organ system has a **distinct primary job**, but nearly every one depends directly on at least one or two others to function at all.',
    'The **circulatory and respiratory systems** (covered in depth elsewhere on this shelf) exist largely to serve every other system with oxygen and remove its waste.',
    'The **nervous and endocrine systems** are the body’s two control/communication networks, one fast and electrical, one slower and chemical.',
    'The **immune system** doesn’t have one single organ, it is distributed across bone marrow, the thymus, the spleen, lymph nodes and more.',
  ],
  sections: [
    {
      id: 'the-systems',
      title: 'The major organ systems',
      blocks: [
        {
          t: 'table',
          head: ['System', 'Main organs', 'Primary job'],
          rows: [
            ['Circulatory', 'Heart, blood vessels, blood', 'Transports oxygen, nutrients, hormones and waste throughout the body, see [the heart and circulation](@medicine/body-systems/the-heart-and-circulation)'],
            ['Respiratory', 'Lungs, trachea, diaphragm', 'Exchanges oxygen and carbon dioxide between air and blood, see [the lungs and breathing](@medicine/body-systems/the-lungs-and-breathing)'],
            ['Nervous', 'Brain, spinal cord, nerves', 'Fast electrical signalling for sensation, movement, thought and involuntary control'],
            ['Endocrine', 'Thyroid, pancreas, adrenal glands, pituitary and more', 'Slower, longer-acting chemical signalling via hormones released into the blood'],
            ['Digestive', 'Stomach, intestines, liver, pancreas', 'Breaks food down into absorbable nutrients and eliminates solid waste'],
            ['Immune / lymphatic', 'Bone marrow, thymus, spleen, lymph nodes', 'Defends against pathogens, see [innate](@medicine/immunology/innate-immunity) and [adaptive](@medicine/immunology/adaptive-immunity) immunity'],
            ['Musculoskeletal', 'Bones, muscles, joints, tendons', 'Structural support and movement'],
            ['Urinary / renal', 'Kidneys, bladder', 'Filters blood, removes waste and excess fluid, regulates blood pressure and electrolyte balance'],
            ['Integumentary', 'Skin, hair, nails', 'The body’s outer barrier, protection, temperature regulation, sensation'],
            ['Reproductive', 'Varies by sex', 'Enables reproduction and produces key sex hormones'],
            ['Lymphatic (sometimes grouped with immune)', 'Lymph vessels, lymph nodes', 'Drains excess tissue fluid back into the bloodstream and filters it for pathogens along the way'],
          ],
          caption: 'Different textbooks group these slightly differently (lymphatic and immune are often combined; some split endocrine and exocrine glands separately), the exact count matters less than understanding each system’s core job and how it leans on the others.',
        },
      ],
    },
    {
      id: 'interdependence',
      title: 'No system works alone',
      blocks: [
        { t: 'p', text: 'Textbook diagrams showing each system in isolation can make the body look like a set of independent modules, in reality, nearly every system depends directly on several others working correctly at the same time.' },
        {
          t: 'cards',
          items: [
            { title: 'Circulatory ⇄ almost everything', body: 'Every other organ system depends on the circulatory system to deliver oxygen and nutrients and remove waste, damage to circulation (like a blocked artery) can impair function anywhere downstream of it.' },
            { title: 'Nervous ⇄ muscular', body: 'Muscles cannot contract without a nerve signal triggering them, the nervous and musculoskeletal systems are functionally inseparable for any voluntary movement.' },
            { title: 'Endocrine ⇄ nearly everything', body: 'Hormones from the endocrine system regulate metabolism, growth, stress response, reproduction and blood sugar across essentially every other system in the body.' },
            { title: 'Respiratory ⇄ circulatory', body: 'The respiratory system is useless without the circulatory system to carry the oxygen it captures onward to the rest of the body, and vice versa, the circulatory system has nothing to carry without the lungs supplying fresh oxygen.' },
          ],
          cols: 2,
        },
        { t: 'callout', tone: 'note', title: 'Why this matters for understanding disease', text: 'Many serious conditions cause damage that cascades across systems precisely because of this interdependence, untreated high blood pressure (circulatory) damages the kidneys (urinary) and can damage the retina (nervous system territory); diabetes (endocrine) damages blood vessels (circulatory) which then damages nerves (nervous) and the kidneys (urinary) in turn. Understanding organ systems as a connected network, not a list, is what makes that kind of cascading damage make sense.' },
      ],
    },
  ],
  sources: [
    'Marieb, E. N., & Hoehn, K. (2018). *Human Anatomy and Physiology* (11th ed.). Pearson.',
    'Tortora, G. J., & Derrickson, B. (2017). *Principles of Anatomy and Physiology* (15th ed.). Wiley.',
  ],
  related: ['medicine/body-systems/the-heart-and-circulation', 'medicine/body-systems/the-lungs-and-breathing', 'medicine/immunology/innate-immunity'],
}

export default guide
