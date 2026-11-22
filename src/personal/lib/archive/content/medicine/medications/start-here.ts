import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'This is a reference, not a doctor: 152 medications across every major class, each with what it treats, how it works, its common and serious side effects, and what to know before taking it, plus real photographs of the actual tablet or capsule for most of them, sourced from a US government archive. Use it to understand a medicine you or someone you care for has been prescribed, to recognise a pill you found, or to see how a whole class of drugs fits together. It cannot replace a pharmacist, a doctor, or the leaflet in the box.',
  nutshell: [
    '**152 medications, 13 classes**, from everyday pain relief to cancer care, each with uses, mechanism, side effects and warnings.',
    '**Real photos for most entries**, from the NIH National Library of Medicine’s Pillbox archive: public-domain photographs of actual US prescription tablets and capsules.',
    '**One example appearance, not the only one.** The same generic drug is made by dozens of manufacturers, each with its own colour, shape and imprint. Never identify a pill from a photo alone.',
    '**This is education, not advice.** Dosing, interactions and suitability depend on your full health history. Always follow the label and ask a pharmacist or doctor.',
    '**In an emergency, a suspected overdose, a severe allergic reaction, chest pain, difficulty breathing, call emergency services immediately.** Do not look it up first.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What is covered',
      blocks: [
        {
          t: 'p',
          text: 'Thirteen classes, grouped the way a pharmacy or a hospital formulary would group them, each with its own guide and its own filtered view of the medication browser: pain and fever, antibiotics, antivirals and antifungals, heart and blood pressure, diabetes, mental health, breathing and allergy, stomach and gut, thyroid and hormones, seizures and neurology, skin/eyes/ears, immune system and cancer care, and prescription-strength electrolytes and supplements.',
        },
        {
          t: 'table',
          head: ['For each medication', 'What you get'],
          rows: [
            ['Names', 'Generic name and common brand names'],
            ['Forms', 'Tablet, capsule, liquid, injection, patch, inhaler, cream and so on'],
            ['Uses', 'What it is prescribed for'],
            ['Mechanism', 'How it actually works in the body, in plain language'],
            ['Common side effects', 'What many people notice, usually mild'],
            ['Serious side effects', 'What should prompt a call to a doctor or emergency care'],
            ['A warning or caution', 'The one thing most worth knowing about that specific drug'],
            ['Status', 'Over-the-counter, prescription-only, or a US controlled-substance schedule (C-II to C-V)'],
            ['Pregnancy note', 'A short, plain caution, always a conversation with a clinician, not a verdict from this page'],
            ['A photo', 'Where the Pillbox archive has one: colour, shape, dosage form and the imprint stamped on the tablet'],
          ],
        },
      ],
    },
    {
      id: 'browse',
      title: 'Try the full browser',
      blocks: [
        { t: 'med-browser' },
      ],
    },
    {
      id: 'source',
      title: 'Where the data and photos come from',
      blocks: [
        {
          t: 'p',
          text: 'The clinical text, uses, mechanism, side effects, warnings, is written for this reference, drawing on standard pharmacology. The photographs are different: they are real. They come from **NLM Pillbox**, a photographic database the US National Library of Medicine ran to help identify prescription pills, frozen at its final August 2020 snapshot when the programme was retired. The underlying data is a US government work and in the public domain.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Never identify a pill from a photo alone',
          text: 'The same generic drug, say, 500mg metformin, is manufactured by a dozen different companies, each with its own tablet colour, shape and stamped imprint, and manufacturers change suppliers over time. A photo here shows one real example, not a fingerprint. If you need to identify an unknown pill, use the imprint code with a pharmacist or a proper pill-identification tool, or simply ask a pharmacist directly, they do this every day and it takes them seconds.',
        },
        {
          t: 'p',
          text: 'Pillbox only ever photographed **prescription** solid oral dosage forms, tablets and capsules, submitted by manufacturers. That is why 19 of the 152 medications here, mostly injections, inhalers, patches, insulins and eye drops, have no photo: they were never in scope for the archive. It also never covered over-the-counter products, supplements or compounded medicines, though a few common OTC drugs are included here for completeness with no photo attached.',
        },
      ],
    },
    {
      id: 'limits',
      title: 'What this reference cannot do',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use it to understand a medicine you have already been prescribed, before or after a doctor’s appointment.',
            'Use it to learn how a class of drugs works as a group, why an ACE inhibitor and an ARB are usually not combined, say.',
            'Use the serious-side-effects list as a checklist of what would make you seek care.',
            'Treat the pregnancy note as a reason to bring the topic up with your own clinician, not as the final answer.',
          ],
          dont: [
            'Do not use it to diagnose yourself or decide you do not need to see a doctor.',
            'Do not use it to identify a found or unlabelled pill with confidence.',
            'Do not use it to decide drug interactions are safe; see the interactions and safety page and ask a pharmacist.',
            'Do not stop or change a prescribed medicine based on anything read here without talking to the prescriber.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Coverage is a selection, not a formulary',
          text: '152 medications is extensive for a reference built this way, but it is nowhere near the tens of thousands of products on a pharmacy shelf. Combination products, paediatric dosing, veterinary use, and many less common drugs are out of scope. If a specific medicine is not here, that says nothing about whether it is safe or important, only that this page had to stop somewhere.',
        },
      ],
    },
  ],
}

export default guide
