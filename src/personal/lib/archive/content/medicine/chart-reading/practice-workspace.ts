import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Reading charts and scans is a perceptual skill, and like any skill it improves with deliberate practice: look, commit to an answer, check, and repeat. This page is a workspace: every trace and image from the shelf with the drawing tools to hand, plus a short checklist for describing what you see in words.',
  nutshell: [
    'Use **Quiz me** to commit to an answer before you check; guessing then checking beats re-reading.',
    'Mark what you see with **boxes, circles, arrows and the highlighter**, then compare with the labels.',
    'Describe in a fixed order: **what, where, how big, what else, so what**.',
    'Annotations are saved in your browser for each image, so you can come back and refine them.',
    'All images are **simulated teaching phantoms**: they teach patterns, not diagnosis.',
  ],
  sections: [
    {
      id: 'describe',
      title: 'How to put what you see into words',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'What', body: 'The type of finding: a white shadow, a dark area, a bright lesion, an irregular rhythm.' },
            { title: 'Where', body: 'The location in anatomical terms: right upper zone, distal radius, V1 to V4, left frontal lobe.' },
            { title: 'How big', body: 'Size and shape: 2 cm round, wedge-shaped, spreading, symmetrical.' },
            { title: 'What else', body: 'Related findings and the normal for contrast: effect on neighbouring structures, comparison with the other side.' },
            { title: 'So what', body: 'What it could mean, and what the next step might be. In practice this is a clinician’s decision.' },
          ],
        },
        {
          t: 'example',
          title: 'Example report on the chest X-ray with a nodule',
          lines: [
            { label: 'What', text: 'A well-defined, round opacity.' },
            { label: 'Where', text: 'Right upper zone, peripheral.' },
            { label: 'How big', text: 'About 2 cm, smooth edge, no calcification seen.' },
            { label: 'What else', text: 'The rest of the lungs are clear; no effusion; the heart is a normal size.' },
            { label: 'So what', text: 'A solitary pulmonary nodule: compare with old films and arrange CT.' },
          ],
        },
      ],
    },
    {
      id: 'ecg',
      title: 'ECG practice',
      lead: 'A mystery strip, then the strip lab and the twelve-lead.',
      blocks: [
        { t: 'med-chart', viz: 'ecg-quiz' },
        { t: 'med-chart', viz: 'ecg-lab', rhythm: 'mobitz1' },
        { t: 'med-chart', viz: 'ecg-12lead', rhythm: 'stemi-inf' },
      ],
    },
    {
      id: 'xray',
      title: 'X-ray practice',
      lead: 'Chest films and the wrist.',
      blocks: [
        { t: 'med-chart', viz: 'imaging', set: 'cxr' },
        { t: 'med-chart', viz: 'imaging', set: 'bone' },
      ],
    },
    {
      id: 'mri',
      title: 'MRI practice',
      lead: 'Brain and spine.',
      blocks: [
        { t: 'med-chart', viz: 'imaging', set: 'mri-brain' },
        { t: 'med-chart', viz: 'imaging', set: 'mri-spine' },
      ],
    },
    {
      id: 'habits',
      title: 'Habits that make it stick',
      blocks: [
        {
          t: 'list',
          items: [
            'Practise little and often: ten minutes a day beats an hour a month.',
            'Always read in the same order; the order protects you from satisfaction of search.',
            'Say out loud what you see, then check. Speaking forces you to commit.',
            'Compare normal and abnormal back to back: contrast teaches the pattern.',
            'Teach someone else: if you cannot explain a finding, you do not yet know it.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Not for real decisions', text: 'These tools teach pattern recognition on simulated images. Real investigations are interpreted by trained clinicians who also have the patient’s history, examination and other results. Do not use this site to diagnose or treat anyone.' },
      ],
    },
  ],
  sources: [
    'Ericsson, K. A., Krampe, R. T., and Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. Psychological Review.',
    'Kondo, K. L. (2005). Common errors in radiology and how to avoid them.',
  ],
  related: ['medicine/chart-reading/ecg-basics', 'medicine/chart-reading/chest-xray', 'medicine/chart-reading/mri-basics'],
}

export default guide
