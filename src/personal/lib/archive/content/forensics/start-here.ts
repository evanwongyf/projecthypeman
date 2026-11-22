import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Forensic science is science applied to questions a court or investigation needs answered: who was here, what happened, when, and with what. This shelf covers the traditional laboratory disciplines and digital forensics side by side, because they share the same backbone, careful collection, an unbroken record, tested methods and honest reporting of uncertainty.',
  nutshell: [
    '**Locard’s exchange principle**: contact between two things tends to leave traces on both, the idea behind almost every kind of trace evidence, including digital traces.',
    'The **chain of custody** records every hand an exhibit passes through; a gap in it can make perfect science worthless in court.',
    'Courts screen expert evidence for **reliability**, in the US through the *Frye* and *Daubert* tests, elsewhere through similar rules, but many methods were admitted for decades before anyone measured their error rates.',
    '**Contamination** and **examiner bias** are the two quiet ways good evidence goes bad; most of forensic procedure exists to prevent them.',
    'The “**CSI effect**” is widely talked about but weakly supported by research: TV shapes expectations, but there is little evidence it systematically changes verdicts.',
  ],
  sections: [
    {
      id: 'process',
      title: 'The forensic process',
      lead: 'Whatever the evidence, a bloodstain or a hard drive, the work moves through the same stages.',
      blocks: [
        {
          t: 'flow',
          title: 'From scene to court',
          nodes: [
            { label: 'Recognise', sub: 'what might be evidence', tone: 'human' },
            { label: 'Document', sub: 'photos, notes, sketches', tone: 'data' },
            { label: 'Collect & preserve', sub: 'package, seal, hash', tone: 'process' },
            { label: 'Analyse', sub: 'validated lab methods', tone: 'model' },
            { label: 'Interpret', sub: 'what the result means', tone: 'model' },
            { label: 'Report & testify', sub: 'with limitations stated', tone: 'output' },
          ],
          caption: 'The chain of custody runs underneath every arrow: each handover is logged.',
        },
        { t: 'p', text: 'Two questions are kept separate throughout. **Source-level** questions ask where a trace came from (“is this DNA the suspect’s?”). **Activity-level** questions ask how it got there (“did it arrive during the assault, or from an innocent handshake the day before?”). Labs are far better at the first; courts usually care about the second.' },
      ],
    },
    {
      id: 'locard',
      title: 'Locard’s exchange principle',
      blocks: [
        { t: 'quote', text: 'Wherever he steps, whatever he touches, whatever he leaves, even unconsciously, will serve as a silent witness against him.', by: 'Paul L. Kirk (1953), summarising the idea usually credited to Edmond Locard' },
        { t: 'p', text: 'Edmond Locard ran one of the first police laboratories, in Lyon from 1910. The tidy slogan “every contact leaves a trace” is a later paraphrase, and it overstates things: traces can be too small to find, can be lost within hours, or can transfer **secondarily** (from person A to an object to person B) without any direct contact at all.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Transfer', body: 'How much material moves depends on pressure, duration, surface type and the material itself.', tag: 'arrives' },
            { title: 'Persistence', body: 'Fibres on clothing drop off fast, most within hours of normal wear. DNA on a handle can be overwritten by the next user.', tag: 'stays' },
            { title: 'Recovery', body: 'What survives must still be found and collected without adding new material or losing what is there.', tag: 'found' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'It applies to computers too', text: 'Logging into a system writes logs, touches files and changes timestamps. Digital investigators lean on the same idea, and, like crime-scene officers, they must avoid leaving their own traces on the evidence.' },
      ],
    },
    {
      id: 'reliability',
      title: 'How courts judge scientific reliability',
      blocks: [
        {
          t: 'table',
          head: ['Standard', 'Where / when', 'Core question'],
          rows: [
            ['*Frye v. United States*', 'US federal courts, 1923; still used in some US states', 'Is the method “generally accepted” in its scientific field?'],
            ['*Daubert v. Merrell Dow*', 'US Supreme Court, 1993; extended to all expert testimony by *Kumho Tire* (1999)', 'Is it testable and tested, peer reviewed, with a known error rate and standards, and generally accepted? The judge acts as gatekeeper.'],
            ['Federal Rule of Evidence 702', 'US; amended 2023', 'The proponent must show it is *more likely than not* that the testimony rests on reliable methods reliably applied.'],
            ['England & Wales', 'Criminal Practice Directions; Law Commission report 2011', 'Expert evidence must be sufficiently reliable; courts consider validity, error and the expert’s limits.'],
            ['Singapore', 'Evidence Act 1893, section 47', 'Expert opinion is admissible where it would substantially help the court on a matter of scientific, technical or specialised knowledge.'],
          ],
          caption: 'A summary only; the detailed tests vary by jurisdiction and are developed through case law.',
        },
        { t: 'callout', tone: 'warn', title: 'Admitted is not the same as validated', text: 'Bite-mark comparison and microscopic hair comparison were admitted in courts for decades. The 2009 US National Academy of Sciences report found that, apart from nuclear DNA analysis, few forensic disciplines had been rigorously shown to connect evidence to a specific source. See [wrongful convictions](@forensics/reliability/wrongful-convictions).' },
      ],
    },
    {
      id: 'contamination',
      title: 'Contamination and the CSI effect',
      blocks: [
        { t: 'example', title: 'The “Phantom of Heilbronn”', lines: [
          { label: 'What looked true', text: 'From 1993 to 2009 the same female DNA profile turned up at about 40 crime scenes across Germany, Austria and France, including a police officer’s murder.' },
          { label: 'What was true', text: 'The DNA belonged to a worker at the factory that made the cotton swabs. The swabs were sterile (free of microbes) but not certified free of human DNA.' },
          { label: 'Lesson', text: 'Sensitive methods detect contamination as readily as evidence. Labs now use DNA-free consumables and elimination databases of staff profiles.' },
        ] },
        { t: 'p', text: 'The **CSI effect** is the claim that crime dramas make jurors expect forensic evidence in every case, or overrate it when present. Surveys (for example Shelton and colleagues’ 2006 study of Michigan jurors) found jurors did expect more scientific evidence, but that expectation did not reliably predict verdicts. The better-supported worry runs the other way: jurors may trust forensic testimony more than its error rates justify.' },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        { t: 'links', items: [
          { path: 'forensics/crime-scene/scene-and-evidence', note: 'Where every case starts' },
          { path: 'forensics/biological/dna-profiling', note: 'The method other disciplines are measured against' },
          { path: 'forensics/reliability/evidence-statistics', note: 'How to read a “1 in a billion” claim' },
          { path: 'forensics/digital-evidence/foundations-and-acquisition', note: 'The start of the digital half' },
          { path: 'forensics/digital-investigation/tools-and-labs', note: 'Practise on legal training images' },
        ] },
        { t: 'callout', tone: 'note', title: 'Scope of this shelf', text: 'Everything here is educational: how methods work, how they are checked and where they fail. It does not give instructions for committing crimes or defeating investigations, and the pathology pages are deliberately non-graphic.' },
      ],
    },
  ],
  sources: [
    'National Research Council (2009). *Strengthening Forensic Science in the United States: A Path Forward*. National Academies Press.',
    'Kirk, P. L. (1953). *Crime Investigation*. Interscience.',
    'Shelton, D. E., Kim, Y. S., & Barak, G. (2006). A study of juror expectations and demands concerning scientific evidence: Does the “CSI effect” exist? *Vanderbilt Journal of Entertainment and Technology Law*, 9, 331–368.',
    '*Daubert v. Merrell Dow Pharmaceuticals, Inc.*, 509 U.S. 579 (1993).',
  ],
  related: ['forensics/crime-scene/scene-and-evidence', 'forensics/reliability/wrongful-convictions', 'forensics/digital-evidence/foundations-and-acquisition'],
}

export default guide
