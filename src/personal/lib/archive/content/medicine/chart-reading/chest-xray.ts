import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A chest X-ray is the commonest imaging test in medicine and one of the easiest to misread, because the eye is drawn to the obvious shadow and skips the rest. The cure is a fixed order: check the technique first, then airway, breathing, circulation, diaphragm and everything else. This page teaches the order and seven cases you can label, measure and mark up, using computer-generated teaching phantoms.',
  nutshell: [
    'On an X-ray, **dense things are white** (bone, fluid, tumour, heart) and **air is black** (lungs, stomach bubble).',
    'First check the **technique**: patient details, PA or AP, rotation, inspiration and penetration. A poor film misleads.',
    'Then read in order: **A**irway, **B**reathing (lungs and pleura), **C**irculation (heart and mediastinum), **D**iaphragm, **E**verything else (bones, soft tissue, lines).',
    'Compare **left with right**, and look at the edges: heart borders, diaphragms and costophrenic angles. A lost border points to disease next to it (the **silhouette sign**).',
    'The **cardiothoracic ratio** (heart width ÷ chest width) should be under **0.5** on a PA film.',
  ],
  sections: [
    {
      id: 'physics',
      title: 'Why things look white or black',
      blocks: [
        { t: 'p', text: 'X-rays pass through the body and are absorbed in proportion to the density and thickness of what they cross. Bone absorbs most and shows white; soft tissue and fluid are grey; air absorbs least and shows black. Two different tissues of the same density that touch each other blend into one shadow, which is why a lung full of pus loses its edge against the heart.' },
        {
          t: 'table',
          head: ['Density', 'Looks', 'Examples'],
          rows: [['Air', 'Black', 'Lungs, stomach bubble, trachea, pneumothorax'], ['Fat', 'Dark grey', 'Subcutaneous tissue'], ['Water / soft tissue', 'Grey', 'Heart, blood vessels, muscle, fluid, consolidation, tumour'], ['Bone / calcium', 'White', 'Ribs, spine, calcified nodes'], ['Metal', 'Brilliant white', 'Pacemakers, lines, drains, jewellery']],
        },
      ],
    },
    {
      id: 'ripe',
      title: 'Step 1: is it a good film?',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'R', title: 'Rotation', body: 'The inner ends of the clavicles should sit equally either side of the spine. If not, the chest is turned and one side will look falsely whiter.' },
            { tag: 'I', title: 'Inspiration', body: 'Count the ribs: at least 5 to 6 anterior ribs, or 8 to 10 posterior ribs, above the diaphragm. A shallow breath makes the heart look bigger and the lung bases cloudy.' },
            { tag: 'P', title: 'Projection', body: 'A PA film (X-rays pass from back to front) is the standard. An AP film, taken in a bed, magnifies the heart, so do not diagnose cardiomegaly on an AP film.' },
            { tag: 'E', title: 'Exposure', body: 'The vertebral bodies should just be visible behind the heart. Too white is underexposed, too black is overexposed.' },
          ],
        },
      ],
    },
    {
      id: 'abcde',
      title: 'Step 2: airway, breathing, circulation, diaphragm, everything else',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Airway', body: 'Is the trachea central? Does it narrow or move? Find the carina and the main bronchi.' },
            { title: 'Breathing', body: 'Compare both lungs zone by zone (upper, middle, lower). Look for white patches, dark areas without vessels, and the pleural edges. Follow the lung to the edge of the chest.' },
            { title: 'Circulation', body: 'Heart size (cardiothoracic ratio), heart borders (right atrium, left ventricle), the aortic knuckle, the hila and the width of the mediastinum.' },
            { title: 'Diaphragm', body: 'Smooth domes, the right usually slightly higher. Sharp costophrenic angles. Air under the diaphragm means a perforated gut.' },
            { title: 'Everything else', body: 'Ribs, clavicles, spine and shoulders for fractures or lesions; soft tissues; lines, tubes and pacemakers; the upper abdomen; and the “review areas”: lung apices, behind the heart, under the diaphragm and the hila.' },
          ],
        },
      ],
    },
    {
      id: 'normal',
      title: 'A normal chest X-ray',
      lead: 'Turn on Quiz me to hide the labels and mark each structure yourself, then check. Use the ruler tool to measure the cardiothoracic ratio.',
      blocks: [{ t: 'med-chart', viz: 'imaging', case: 'cxr-normal' }],
    },
    {
      id: 'cases',
      title: 'Seven cases to explore',
      lead: 'Choose a case. The red boxes are the abnormal findings; click one to read what it means. Switch to Quiz me to hunt for them first.',
      blocks: [
        { t: 'med-chart', viz: 'imaging', set: 'cxr' },
        {
          t: 'table',
          head: ['Case', 'The clue', 'Why'],
          rows: [
            ['Pneumothorax', 'Dark zone with no lung markings; a thin pleural line', 'Air between lung and chest wall'],
            ['Pleural effusion', 'White base with a concave upper edge (meniscus), blunted angle', 'Fluid layers at the base'],
            ['Pneumonia', 'Patchy white shadow with air bronchograms; a blurred heart border (silhouette sign)', 'Air sacs filled with pus'],
            ['Cardiomegaly', 'Heart width over half the chest width', 'Heart failure, valve disease, cardiomyopathy'],
            ['Pulmonary nodule', 'A round, well-defined opacity', 'Needs CT and old films to decide'],
            ['Pulmonary oedema', 'Bat-wing haze, Kerley B lines, enlarged heart, small effusions', 'Fluid backing up from a failing left heart'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A tension pneumothorax is a clinical emergency', text: 'A pneumothorax under pressure pushes the heart and trachea to the other side and stops the heart from filling. It is diagnosed and treated at the bedside from the patient’s condition (breathlessness, low blood pressure, absent breath sounds), without waiting for an X-ray.' },
      ],
    },
    {
      id: 'mistakes',
      title: 'Common traps',
      blocks: [
        {
          t: 'dodont',
          do: ['Read the film in the same order every time.', 'Compare with old films if there are any.', 'Check the review areas: apices, behind the heart, under the diaphragm.', 'Correlate with the patient: a white lung means different things in someone with fever and someone with a clot.'],
          dont: ['Do not stop at the first abnormality (“satisfaction of search”).', 'Do not diagnose cardiomegaly on an AP film.', 'Do not forget that an X-ray can be normal in early disease.', 'Do not use this page to interpret a real image: take it to a clinician.'],
        },
        { t: 'callout', tone: 'note', title: 'Phantoms are simplified', text: 'The images are procedurally generated. Real films have overlapping structures, noise, devices and subtle changes that no phantom shows, and a normal-looking film does not exclude disease.' },
      ],
    },
  ],
  sources: [
    'Corne, J., and Pointon, K. (2016). Chest X-Ray Made Easy (4th ed.). Elsevier.',
    'Armstrong, P., Wilson, A. G., Dee, P., and Hansell, D. M. (2018). Imaging of Diseases of the Chest (5th ed.). Elsevier.',
    'Royal College of Radiologists. Guidance on chest radiograph interpretation.',
  ],
  related: ['medicine/chart-reading/bone-xray', 'medicine/body-systems/the-lungs-and-breathing', 'medicine/chart-reading/practice-workspace'],
}

export default guide
