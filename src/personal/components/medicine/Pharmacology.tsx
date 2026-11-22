import { useState } from 'react'
import { PlotChart } from '../finance/PlotChart'
import { Card, Pills, Slider, Stat, soft } from './shared'

// ── drug name stems ──────────────────────────────────────────────────────

type Stem = { stem: string; meaning: string; examples: string[]; note: string }

const STEMS: Stem[] = [
  { stem: '-statin', meaning: 'Cholesterol-lowering drugs that block HMG-CoA reductase, the liver enzyme that makes cholesterol', examples: ['atorvastatin', 'simvastatin', 'rosuvastatin'], note: 'One of the best-known stems"statin" has become a household word largely because of how common these drugs are.' },
  { stem: '-olol', meaning: 'Beta blockers, block adrenaline’s effect on the heart, slowing heart rate and lowering blood pressure', examples: ['metoprolol', 'propranolol', 'atenolol'], note: 'Used for high blood pressure, irregular heart rhythms, and after a heart attack.' },
  { stem: '-pril', meaning: 'ACE inhibitors, block an enzyme that narrows blood vessels, so vessels relax and blood pressure falls', examples: ['lisinopril', 'enalapril', 'captopril'], note: 'A first-line blood pressure treatment; also protects the kidneys in diabetes.' },
  { stem: '-sartan', meaning: 'Angiotensin receptor blockers (ARBs), a different point in the same blood-pressure pathway as the -prils', examples: ['losartan', 'valsartan', 'candesartan'], note: 'Often prescribed when a -pril causes a persistent dry cough, a known side effect ARBs mostly avoid.' },
  { stem: '-prazole', meaning: 'Proton pump inhibitors, block acid production in the stomach lining', examples: ['omeprazole', 'esomeprazole', 'lansoprazole'], note: 'Treats acid reflux and stomach ulcers by directly shutting off the pump that pumps acid into the stomach.' },
  { stem: '-conazole', meaning: 'Antifungal drugs, disrupt a fungal cell membrane component (ergosterol) that human cells don’t have', examples: ['fluconazole', 'itraconazole', 'ketoconazole'], note: 'Easy to confuse with -prazole (acid reducers), the full stem "-conazole" vs "-prazole" is the tell.' },
  { stem: '-cillin', meaning: 'Penicillin-type antibiotics, block bacteria from building their cell wall', examples: ['amoxicillin', 'ampicillin', 'flucloxacillin'], note: 'The oldest modern antibiotic family, descended from Alexander Fleming’s original 1928 discovery.' },
  { stem: '-floxacin', meaning: 'Fluoroquinolone antibiotics, block bacterial DNA replication', examples: ['ciprofloxacin', 'levofloxacin', 'moxifloxacin'], note: 'Broad-spectrum antibiotics, but increasingly reserved for specific infections due to rare but serious side effects.' },
  { stem: '-mab', meaning: 'Monoclonal antibodies, lab-made proteins engineered to bind one specific target in the body', examples: ['adalimumab', 'rituximab', 'trastuzumab'], note: 'A sub-syllable often reveals origin: -ximab (part-mouse, part-human), -zumab (mostly human), -umab (fully human), a window into how the drug was engineered.' },
  { stem: '-nib', meaning: 'Tyrosine kinase inhibitors, block a specific enzyme signal that drives some cancers’ growth', examples: ['imatinib', 'erlotinib', 'sunitinib'], note: 'Imatinib (Gleevec) transformed chronic myeloid leukaemia from often-fatal to a manageable condition for most patients.' },
  { stem: '-vir', meaning: 'Antiviral drugs, interfere with a step a virus needs to copy itself', examples: ['acyclovir', 'oseltamivir', 'sofosbuvir'], note: 'Covers a huge range of targets, from herpes (acyclovir) to influenza (oseltamivir, "Tamiflu") to hepatitis C (sofosbuvir).' },
  { stem: '-oxetine', meaning: 'Selective serotonin reuptake inhibitors (SSRIs), keep more serotonin active between nerve cells', examples: ['fluoxetine', 'paroxetine'], note: 'Fluoxetine (Prozac) was one of the first SSRIs and remains one of the most recognised antidepressant names.' },
  { stem: '-azepam', meaning: 'Benzodiazepines, enhance a calming brain chemical (GABA), producing sedation and reducing anxiety', examples: ['diazepam', 'lorazepam'], note: 'Fast-acting for anxiety and seizures, but habit-forming with prolonged use, typically prescribed short-term.' },
  { stem: '-dipine', meaning: 'Calcium channel blockers, relax blood vessel walls by blocking calcium entry into muscle cells', examples: ['amlodipine', 'nifedipine'], note: 'Another major blood-pressure drug family, working through a completely different mechanism than the -prils or -olols.' },
  { stem: '-gliflozin', meaning: 'SGLT2 inhibitors, make the kidneys remove excess sugar into the urine', examples: ['empagliflozin', 'dapagliflozin'], note: 'A newer diabetes drug class, also shown to protect the heart and kidneys independent of its blood-sugar effect.' },
]

export function DrugNames({ color }: { color: string }) {
  const [i, setI] = useState(0)
  const s = STEMS[i]
  return (
    <Card title="Decoding a drug name" color={color} note="The World Health Organization assigns every drug an International Nonproprietary Name (INN), the generic name, distinct from a manufacturer's brand name, built largely from standardised word stems that signal what class of drug it is and often how it works. Learn the stem, and an unfamiliar drug name stops being a random string of syllables.">
      <Pills label="word stem" value={s.stem} onChange={(v) => setI(STEMS.findIndex((x) => x.stem === v))} options={STEMS.map((x) => [x.stem, x.stem] as [string, string])} />
      <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${color} 14%, var(--surface))` }}>
        <p className="text-lg font-bold">{s.stem}</p>
        <p className="mt-1 text-sm leading-relaxed">{s.meaning}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {s.examples.map((ex) => {
          const idx = ex.toLowerCase().indexOf(s.stem.replace('-', '').toLowerCase())
          return (
            <span key={ex} className="rounded-[var(--radius)] border px-2.5 py-1.5 font-mono text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
              {idx === -1 ? (
                ex
              ) : (
                <>
                  {ex.slice(0, idx)}
                  <strong style={{ color }}>{ex.slice(idx, idx + s.stem.replace('-', '').length)}</strong>
                  {ex.slice(idx + s.stem.replace('-', '').length)}
                </>
              )}
            </span>
          )
        })}
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        {s.note}
      </p>
    </Card>
  )
}

// ── dose-response curve ──────────────────────────────────────────────────

export function DoseResponse({ color }: { color: string }) {
  const [ec50, setEc50] = useState(10)
  const [hill, setHill] = useState(1.5)
  const [emax, setEmax] = useState(100)

  const effect = (d: number) => (d <= 0 ? 0 : (emax * d ** hill) / (ec50 ** hill + d ** hill))

  return (
    <Card title="Dose-response curve explorer" color={color} note="Almost every drug's effect follows an S-shaped (sigmoid) curve against dose, not a straight line, a tiny dose does almost nothing, a middle range of doses does most of the work, and effect levels off at a maximum (Emax) no extra dose can exceed.">
      <PlotChart
        block={{
          t: 'plot',
          x: [0, 100],
          y: [0, 105],
          xLabel: 'dose',
          yLabel: 'effect (% of maximum)',
          curves: [{ f: effect, color }],
          vlines: [{ x: ec50, label: `EC50 = ${ec50}` }],
          hlines: [{ y: emax / 2, label: '50% effect' }],
        }}
      />
      <div className="flex flex-wrap gap-3">
        <Slider label="EC50 (potency, dose for 50% effect)" value={ec50} min={2} max={50} step={1} onChange={setEc50} />
        <Slider label="Hill coefficient (curve steepness)" value={hill} min={0.5} max={4} step={0.1} onChange={setHill} />
        <Slider label="Emax (maximum possible effect)" value={emax} min={20} max={100} step={5} onChange={setEmax} show={`${emax}%`} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="potency" value={ec50 < 15 ? 'high' : ec50 < 30 ? 'moderate' : 'low'} tone={color} />
        <Stat label="EC50" value={ec50} />
        <Stat label="max effect (Emax)" value={`${emax}%`} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        Lowering EC50 shifts the whole curve left, a more potent drug, reaching the same effect at a smaller dose. Changing Emax instead raises or lowers the curve's ceiling, a more or less effective drug, regardless of dose. These are genuinely different properties: a drug can be highly potent (small EC50) but weakly effective (low Emax), or the reverse, and the distinction matters for choosing between two drugs.
      </p>
    </Card>
  )
}
