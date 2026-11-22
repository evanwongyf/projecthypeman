import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A medicine label and a prescription are both written in a kind of shorthand: a name that might be generic or a brand, a status code that controls how you can get it, and abbreviations that go back centuries. None of it is complicated once you know the pattern.',
  nutshell: [
    '**Generic name** is the active ingredient, the same wherever in the world you are. **Brand name** is one manufacturer’s trademark for it, and can change by country.',
    '**OTC** (over the counter): no prescription needed. **Rx**: needs a prescriber. **C-II to C-V**: a US controlled substance, with tighter rules as the number gets smaller.',
    '**Sig codes** on a prescription (bid, prn, qhs…) are abbreviations of Latin instructions, still in everyday pharmacy use.',
    '**The strength is per unit**, not per day, 500 mg per tablet, not 500 mg total, so the dosing instructions matter as much as the number on the label.',
    'When in doubt about anything on a label, a pharmacist can explain it in under a minute, free, without an appointment.',
  ],
  sections: [
    {
      id: 'names',
      title: 'Generic names and brand names',
      blocks: [
        {
          t: 'p',
          text: 'Every medicine has exactly one generic name, its International Nonproprietary Name, describing the active chemical itself. A manufacturer can then sell that same chemical under a trademarked brand name, and once patent protection ends, other manufacturers can sell it generically, usually far cheaper, under the generic name or their own brand.',
        },
        {
          t: 'table',
          head: ['Generic name', 'Some brand names you might see', 'Same drug?'],
          rows: [
            ['acetaminophen (paracetamol)', 'Tylenol, Panadol, Calpol', 'Yes, identical active ingredient'],
            ['ibuprofen', 'Advil, Motrin, Nurofen', 'Yes'],
            ['atorvastatin', 'Lipitor', 'Yes, Lipitor is simply the original brand'],
            ['sertraline', 'Zoloft', 'Yes'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The most common accidental overdose',
          text: 'Acetaminophen hides inside dozens of combination cold, flu and pain products under names that do not obviously say so, check the active ingredients list, not just the brand name, before stacking two products, especially for fever and pain relief taken together.',
        },
      ],
    },
    {
      id: 'status',
      title: 'OTC, prescription, and controlled substances',
      blocks: [
        {
          t: 'diagram',
          title: 'What governs how you can get a medicine',
          caption: 'A simplified US framework; exact rules and schedules vary by country.',
          nodes: [
            { id: 'start', label: 'A medicine', shape: 'pill', tone: 'ink', col: 1, row: 0 },
            { id: 'q1', label: 'Safe enough to self-select with label instructions?', shape: 'diamond', tone: 'teal', col: 0, row: 1 },
            { id: 'otc', label: 'OTC', sub: 'buy without a prescription', shape: 'rect', tone: 'mint', col: 0, row: 2, w: 150 },
            { id: 'q2', label: 'Real risk of misuse or dependence?', shape: 'diamond', tone: 'pink', col: 2, row: 1 },
            { id: 'rx', label: 'Rx only', sub: 'needs a prescriber, no abuse-schedule rules', shape: 'rect', tone: 'orange', col: 2, row: 2, w: 160 },
            { id: 'q3', label: 'How high is that risk?', shape: 'diamond', tone: 'pink', col: 3, row: 2 },
            { id: 'c5', label: 'C-V', sub: 'lowest controlled risk, e.g. some cough syrups', shape: 'rect', tone: 'mustard', col: 3, row: 3, w: 130 },
            { id: 'c2', label: 'C-II', sub: 'highest controlled risk, e.g. oxycodone, Adderall', shape: 'rect', tone: 'lavender', col: 1, row: 3, w: 150 },
          ],
          edges: [
            { from: 'start', to: 'q1' },
            { from: 'q1', to: 'otc', label: 'yes', tone: 'mint' },
            { from: 'q1', to: 'q2', label: 'no', tone: 'orange' },
            { from: 'q2', to: 'rx', label: 'no', tone: 'orange' },
            { from: 'q2', to: 'q3', label: 'yes', tone: 'pink' },
            { from: 'q3', to: 'c5', label: 'lower' },
            { from: 'q3', to: 'c2', label: 'higher' },
          ],
        },
        {
          t: 'table',
          head: ['Schedule', 'Meaning', 'Examples from this reference'],
          rows: [
            ['OTC', 'No prescription required', 'Ibuprofen, loratadine, omeprazole (standard dose)'],
            ['Rx', 'Prescription required, not scheduled', 'Lisinopril, sertraline, levothyroxine'],
            ['C-V', 'Controlled, lowest abuse potential of the scheduled drugs', 'Some low-dose codeine cough preparations'],
            ['C-IV', 'Lower abuse potential, real dependence risk', 'Alprazolam, diazepam, zolpidem, tramadol'],
            ['C-III', 'Moderate abuse potential', 'Some codeine combination products'],
            ['C-II', 'Highest prescribable abuse potential, tightest rules (no refills, careful record-keeping)', 'Oxycodone, morphine, fentanyl, methylphenidate, Adderall'],
          ],
        },
      ],
    },
    {
      id: 'sig',
      title: 'Reading the instructions (sig codes)',
      blocks: [
        {
          t: 'p',
          text: 'The directions on a pharmacy label, “Sig” for the Latin *signa*, “write”, are usually a translation of abbreviations a prescriber wrote, most of them from Latin and centuries old.',
        },
        {
          t: 'table',
          head: ['Abbreviation', 'Latin', 'Meaning'],
          rows: [
            ['qd', 'quaque die', 'once a day'],
            ['bid', 'bis in die', 'twice a day'],
            ['tid', 'ter in die', 'three times a day'],
            ['qid', 'quater in die', 'four times a day'],
            ['q4h', 'quaque 4 hora', 'every 4 hours'],
            ['qhs', 'quaque hora somni', 'at bedtime'],
            ['ac', 'ante cibum', 'before meals'],
            ['pc', 'post cibum', 'after meals'],
            ['prn', 'pro re nata', 'as needed'],
            ['po', 'per os', 'by mouth'],
            ['stat', 'statim', 'immediately, right now'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'qd and qod are being phased out',
          text: 'Handwritten “qd” (daily) and “qod” (every other day) have been mistaken for each other and for “qid” so often, with real dosing errors, that most hospitals and many pharmacies now require “once daily” or “every other day” spelled out instead. If you ever see qd or qod on a label, it is worth double-checking with the pharmacist exactly what was meant.',
        },
      ],
    },
    {
      id: 'strength',
      title: 'Strength, form and “as needed”',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Strength is per unit', body: 'A “500 mg” tablet contains 500 mg in that one tablet, not 500 mg total in the bottle. Two tablets of a 500 mg drug is 1000 mg, not 500 mg split in half.', tag: 'common confusion' },
            { title: 'Form changes the dose that reaches you', body: 'The same milligram number can act differently as a tablet, a liquid or an injection, see “Routes and forms” on the medicine basics shelf for why.', tag: 'see also' },
            { title: '“As needed” still has a ceiling', body: 'A prn instruction almost always comes with a maximum per day, even if the label does not repeat it on every line, check the printed maximum, not just the per-dose amount.', tag: 'read the whole label' },
            { title: 'Refills are not automatic renewals', body: 'A refill count is how many more times the same prescription can be filled without seeing the prescriber again, not a daily allowance.', tag: 'label literacy' },
          ],
        },
      ],
    },
  ],
}

export default guide
