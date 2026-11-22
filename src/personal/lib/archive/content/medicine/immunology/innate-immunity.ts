import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Long before any pathogen-specific response is possible, the body has already thrown up a series of fast, generic defences, physical barriers, roaming cells that eat anything foreign on sight, and a chemical alarm system that recruits reinforcements within minutes. This is innate immunity: not smart, but fast, and present from birth.',
  nutshell: [
    '**Physical and chemical barriers** (skin, mucus, stomach acid) stop the overwhelming majority of pathogens before an "immune response" is even needed.',
    '**Phagocytes** (neutrophils and macrophages) are white blood cells that physically engulf and digest pathogens, no prior exposure required.',
    '**Inflammation**, redness, heat, swelling, pain, is the visible sign of blood vessels widening and immune cells being recruited to a site of damage or infection.',
    'Innate immunity is **fast (minutes to hours) but non-specific**, it treats a huge range of threats in roughly the same way, unlike the slower, precisely targeted adaptive response covered next.',
  ],
  sections: [
    {
      id: 'barriers',
      title: 'The first line: barriers that stop infection before it starts',
      blocks: [
        {
          t: 'table',
          head: ['Barrier', 'How it works'],
          rows: [
            ['Skin', 'A physical wall, plus mildly acidic, salty surface conditions that many microbes can’t tolerate'],
            ['Mucus (airways, gut)', 'Traps particles and pathogens, which are then physically cleared (coughed up, swallowed) before they can establish an infection'],
            ['Stomach acid', 'Around pH 1.5–3.5, destroys the overwhelming majority of microbes swallowed with food or water'],
            ['Tears, saliva', 'Contain enzymes (like lysozyme) that directly break down bacterial cell walls'],
            ['Cilia (tiny hairs lining airways)', 'Beat in a coordinated wave that physically sweeps mucus (and trapped pathogens) up and out of the lungs'],
          ],
          caption: 'This is genuinely the body’s most effective defence by sheer volume, the vast majority of pathogen exposures never progress past this stage at all, which is part of why barrier damage (a cut, a burn, a smoking-damaged airway) so directly raises infection risk.',
        },
      ],
    },
    {
      id: 'phagocytes',
      title: 'Phagocytes: cells that eat the problem',
      blocks: [
        {
          t: 'flow',
          title: 'Phagocytosis: how a white blood cell destroys a pathogen',
          nodes: [
            { label: 'Pathogen detected', sub: 'often via generic molecular patterns common to many microbes', tone: 'data' },
            { label: 'The phagocyte engulfs it', sub: 'surrounding and internalising the pathogen', tone: 'process' },
            { label: 'Digestive enzymes break it down', sub: 'inside a specialised internal compartment', tone: 'process' },
            { label: 'Fragments may be displayed on the surface', sub: 'bridging to the adaptive immune system', tone: 'output' },
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'Neutrophils', def: 'The most abundant white blood cell and usually the first responders to a bacterial infection, short-lived but produced and mobilised in enormous numbers very quickly, which is why a bacterial infection often causes a measurable spike in neutrophil count.' },
            { term: 'Macrophages', def: 'Longer-lived phagocytes that patrol tissues continuously, and also act as a bridge to adaptive immunity by presenting fragments of what they’ve digested to T cells.' },
            { term: 'Natural killer (NK) cells', def: 'Unlike phagocytes, NK cells don’t eat pathogens directly, they detect and destroy the body’s own cells when those cells show signs of viral infection or cancerous change, triggering the infected cell to self-destruct.' },
          ],
        },
      ],
    },
    {
      id: 'inflammation',
      title: 'Inflammation and fever',
      blocks: [
        { t: 'p', text: 'When tissue is damaged or infected, local cells release chemical signals that widen nearby blood vessels and make them more permeable, producing the four classic signs of inflammation: redness and heat (more blood flow), swelling (fluid and cells leaking into the tissue), and pain (nerve endings irritated by the chemical signals themselves). Unpleasant as it feels, this is the delivery mechanism bringing more immune cells to exactly where they’re needed.' },
        { t: 'callout', tone: 'tip', title: 'Fever is a weapon, not just a symptom', text: 'A raised body temperature isn’t simply a side effect of infection, many pathogens reproduce measurably more slowly at higher temperatures, and several immune processes actually work faster when warmer. Fever is the body deliberately shifting the environment against the pathogen, triggered by the same chemical signals (called pyrogens) that drive inflammation. This is part of why doctors are often cautious about reflexively suppressing a modest fever rather than letting it run its course, though a very high or prolonged fever does need medical attention.' },
        { t: 'p', text: 'Innate immunity buys time and limits early damage, but it cannot "learn" a specific pathogen or improve with repeat exposure. The system that does that, slower to start, but precisely targeted and able to remember, is adaptive immunity, covered next.' },
      ],
    },
  ],
  sources: [
    'Murphy, K., & Weaver, C. (2016). *Janeway’s Immunobiology* (9th ed.). Garland Science.',
    'Abbas, A. K., Lichtman, A. H., & Pillai, S. (2021). *Cellular and Molecular Immunology* (10th ed.). Elsevier.',
  ],
  related: ['medicine/immunology/adaptive-immunity', 'medicine/microbiology/virus-structure-and-types', 'medicine/immunology/vaccines-and-immunity'],
}

export default guide
