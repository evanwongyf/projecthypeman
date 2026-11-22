import { useState } from 'react'
import { Card, Pills, soft } from './shared'

type Genome = 'dna' | 'rna'
type Envelope = 'enveloped' | 'non-enveloped'

const EXAMPLES: Record<`${Genome}-${Envelope}`, { names: string[]; note: string }> = {
  'rna-enveloped': { names: ['Influenza', 'SARS-CoV-2', 'HIV'], note: 'The envelope is fragile outside the body, easily broken apart by soap, heat or dry air, which is a large part of why simple handwashing is so effective against these viruses.' },
  'dna-enveloped': { names: ['Herpes simplex', 'Hepatitis B', 'Varicella (chickenpox)'], note: 'DNA viruses generally mutate more slowly than RNA viruses, since DNA replication has better built-in error-correction.' },
  'rna-non-enveloped': { names: ['Poliovirus', 'Norovirus', 'Rhinovirus (a common-cold virus)'], note: 'No envelope means no fragile outer layer to break, these viruses survive far longer on surfaces and resist soap-based disruption, which is why hand sanitiser alone is less reliable against them than thorough handwashing.' },
  'dna-non-enveloped': { names: ['Adenovirus', 'Human papillomavirus (HPV)'], note: 'Often very stable in the environment, adenoviruses can survive on surfaces for weeks, and some are used as the engineered backbone for several viral-vector vaccines specifically because they are so stable and well studied.' },
}

export function VirusStructure({ color }: { color: string }) {
  const [genome, setGenome] = useState<Genome>('rna')
  const [envelope, setEnvelope] = useState<Envelope>('enveloped')
  const ex = EXAMPLES[`${genome}-${envelope}`]
  const enveloped = envelope === 'enveloped'

  return (
    <Card title="Virus structure explorer" color={color} note="A virus is not a cell, it has no organelles, no metabolism of its own, and cannot reproduce without hijacking a host cell's machinery. Strip away the variety and every virus is built from the same handful of parts, present or absent.">
      <div className="flex flex-wrap gap-2">
        <Pills label="genome type" value={genome} onChange={setGenome} options={[['dna', 'DNA genome'], ['rna', 'RNA genome']]} />
        <Pills label="envelope" value={envelope} onChange={setEnvelope} options={[['enveloped', 'Enveloped'], ['non-enveloped', 'Non-enveloped']]} />
      </div>

      <svg viewBox="0 0 300 260" className="mx-auto block h-auto w-full max-w-xs" role="img" aria-label="Virus structure diagram">
        {enveloped && (
          <g style={{ transformOrigin: '150px 130px', animation: 'med-spin 24s linear infinite' }}>
            <circle cx={150} cy={130} r={95} fill="none" stroke={color} strokeWidth={2} strokeDasharray="4 5" opacity={0.6} />
            {Array.from({ length: 14 }).map((_, i) => {
              const a = (i / 14) * Math.PI * 2
              const x1 = 150 + Math.cos(a) * 95
              const y1 = 130 + Math.sin(a) * 95
              const x2 = 150 + Math.cos(a) * 108
              const y2 = 130 + Math.sin(a) * 108
              return (
                <g key={i}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={2.5} />
                  <circle cx={x2} cy={y2} r={4} fill={color} />
                </g>
              )
            })}
          </g>
        )}
        <circle cx={150} cy={130} r={68} fill="color-mix(in srgb, var(--surface) 70%, white)" stroke="var(--ink)" strokeWidth={2.5} />
        {genome === 'dna' ? (
          <g stroke="#3b6fd8" strokeWidth={2.5} fill="none">
            <path d="M 110 105 Q 130 95 150 105 Q 170 115 190 105" />
            <path d="M 110 130 Q 130 120 150 130 Q 170 140 190 130" />
            <path d="M 110 155 Q 130 145 150 155 Q 170 165 190 155" />
            {[115, 135, 150, 165, 185].map((x, i) => (
              <line key={i} x1={x} y1={103 + (i % 2) * 25} x2={x} y2={128 + (i % 2) * 25} stroke="#3b6fd8" strokeWidth={1.5} opacity={0.6} />
            ))}
          </g>
        ) : (
          <path d="M 105 110 Q 125 90 140 115 Q 155 140 170 115 Q 185 90 198 115 Q 205 135 185 150 Q 160 165 135 150 Q 112 138 105 110" fill="none" stroke="#e07b2a" strokeWidth={3} strokeLinecap="round" />
        )}
        <text x={150} y="252" textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--ink)">
          {enveloped ? 'capsid + envelope + spike proteins' : 'capsid only (no envelope)'}
        </text>
      </svg>
      <style>{`@keyframes med-spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="rounded-[var(--radius)] border px-2.5 py-1.5" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p className="text-[11px] font-bold" style={soft}>capsid</p>
          <p className="text-xs">The protein shell every virus has, protects the genome and often helps it attach to a host cell.</p>
        </div>
        <div className="rounded-[var(--radius)] border px-2.5 py-1.5" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p className="text-[11px] font-bold" style={soft}>genome</p>
          <p className="text-xs">{genome === 'dna' ? 'DNA: double-stranded in most DNA viruses, more stable, slower to mutate.' : 'RNA: usually single-stranded, copies with more errors, mutates faster.'}</p>
        </div>
        <div className="rounded-[var(--radius)] border px-2.5 py-1.5" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p className="text-[11px] font-bold" style={soft}>envelope + spikes</p>
          <p className="text-xs">{enveloped ? 'A lipid membrane stolen from a host cell, studded with spike proteins the virus uses to attach to and enter the next cell.' : 'No envelope, this virus relies on the bare capsid alone to attach and enter a cell.'}</p>
        </div>
      </div>

      <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${color} 14%, var(--surface))` }}>
        <p className="text-xs font-bold">Real examples with this structure</p>
        <p className="mt-1 text-sm font-bold">{ex.names.join(', ')}</p>
        <p className="mt-1 text-xs leading-relaxed" style={soft}>
          {ex.note}
        </p>
      </div>
    </Card>
  )
}
