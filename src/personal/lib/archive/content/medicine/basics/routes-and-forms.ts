import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The exact same chemical can be sold as a tablet, an injection, a patch or an inhaler, and the choice is never arbitrary. Each route changes how much of the drug actually reaches the bloodstream, how fast, and for how long, sometimes dramatically.',
  nutshell: [
    'A drug’s **route of administration**, oral, injected, inhaled, topical and more, changes its speed of onset, how much reaches circulation, and how long it lasts.',
    '**Bioavailability** measures exactly what fraction of an administered dose reaches the bloodstream intact, an intravenous injection is defined as 100% by comparison.',
    'Swallowed drugs pass through the liver before reaching the rest of the body (the "first-pass effect"), which can destroy a large fraction of the dose before it ever gets to work.',
    'Faster-acting routes (IV, inhaled) generally trade off against convenience and duration, there is rarely a route that is simply "best" in every respect.',
  ],
  sections: [
    {
      id: 'the-routes',
      title: 'The major routes',
      blocks: [
        {
          t: 'table',
          head: ['Route', 'Example', 'Speed of onset', 'Typical bioavailability'],
          rows: [
            ['Oral (swallowed)', 'A tablet or capsule', 'Slow (30–90 min)', 'Often 20–90%, highly variable by drug'],
            ['Intravenous (IV)', 'A hospital drip or injection directly into a vein', 'Immediate', '100%, by definition'],
            ['Intramuscular (IM)', 'A vaccine shot into muscle', 'Fast (minutes)', 'Usually 75–100%'],
            ['Subcutaneous', 'Insulin injected just under the skin', 'Moderate (15–30 min)', 'Usually 75–100%'],
            ['Inhaled', 'An asthma inhaler', 'Very fast (seconds–minutes) for local lung effect', 'Variable; much of an inhaled dose is swallowed, not inhaled deep enough'],
            ['Transdermal (patch)', 'A nicotine or fentanyl patch', 'Slow, but very steady', 'Can approach 100% over time, bypassing the gut entirely'],
            ['Sublingual', 'A tablet dissolved under the tongue', 'Fast (minutes)', 'Often high, since it skips the gut and liver'],
          ],
          caption: 'Bioavailability figures are broad, illustrative ranges, exact numbers vary hugely by specific drug and formulation, which is exactly why every real drug label specifies its own measured bioavailability rather than relying on a route-based rule of thumb.',
        },
      ],
    },
    {
      id: 'first-pass',
      title: 'The first-pass effect',
      blocks: [
        {
          t: 'flow',
          title: 'Why a swallowed tablet loses some of its dose before it ever "works"',
          nodes: [
            { label: 'Tablet swallowed', tone: 'data' },
            { label: 'Absorbed through the gut wall', tone: 'process' },
            { label: 'Carried directly to the liver first', sub: 'via the hepatic portal vein', tone: 'process' },
            { label: 'Liver enzymes metabolise (break down) some of the drug', sub: 'before it ever reaches general circulation', tone: 'process' },
            { label: 'Only the surviving fraction reaches the rest of the body', tone: 'output' },
          ],
        },
        { t: 'p', text: 'This is why oral bioavailability is so often well below 100%, and why some drugs cannot be taken orally at all, if liver enzymes destroy nearly the entire dose on that first pass, no amount of swallowing more pills reliably fixes it (insulin, for instance, is a protein broken down almost entirely by digestion and the liver before it could ever work, which is exactly why it is injected, not swallowed).' },
        { t: 'callout', tone: 'tip', title: 'Routes that skip the liver’s first pass', text: 'Sublingual, transdermal, inhaled and injected routes all avoid (or substantially reduce) the first-pass effect by not going through the gut-to-liver pathway at all, part of why a sublingual tablet or a patch can achieve effects a swallowed version of the same drug cannot.' },
      ],
    },
    {
      id: 'choosing-a-route',
      title: 'Why a route is chosen',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Speed needed', body: 'A cardiac emergency calls for IV administration (seconds to minutes); a daily blood pressure medication is fine as a once-a-day tablet.' },
            { title: 'The drug’s own chemistry', body: 'Large protein drugs (like insulin or most monoclonal antibodies) are digested if swallowed, so they must be injected; small, stable molecules often tolerate the gut fine.' },
            { title: 'Local vs. whole-body effect', body: 'An inhaler delivers a drug directly to the lungs at a tiny dose, minimising whole-body side effects compared to the much larger oral dose that would be needed to reach the same lung concentration indirectly.' },
            { title: 'Patient practicality', body: 'A once-weekly patch or injection can dramatically improve how reliably a patient actually takes a long-term medication, compared with remembering multiple daily tablets.' },
          ],
          cols: 2,
        },
      ],
    },
  ],
  sources: [
    'Rang, H. P., Ritter, J. M., Flower, R. J., & Henderson, G. (2019). *Rang and Dale’s Pharmacology* (9th ed.). Elsevier.',
    'Shargel, L., & Yu, A. B. C. (2015). *Applied Biopharmaceutics and Pharmacokinetics* (7th ed.). McGraw-Hill.',
  ],
  related: ['medicine/basics/how-drugs-work-pharmacology', 'medicine/basics/drug-names-and-classes', 'medicine/body-systems/the-lungs-and-breathing'],
}

export default guide
