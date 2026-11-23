/**
 * Grammar labs.
 *
 * Six tools for the grammar systems shelf. The first two deliberately share
 * their sentences: a constituency tree and a dependency parse of the same
 * words, so the reader can see that a grammar is a model and that two models
 * can both be right about one sentence.
 */
import { Fragment, useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { Card, Pills, Select, soft } from './kit'
import {
  BUILD_ROOTS,
  DEP_RELATIONS,
  DEP_SENTENCES,
  FUNC_CLAUSES,
  MORPH_WORDS,
  TAM_MODALS,
  TAM_VERBS,
  TREE_SENTENCES,
  TYPOLOGY_FEATURES,
} from '../../lib/grammar/data'
import { buildVerbGroup } from '../../lib/grammar/verbGroup'
import type { Aspect } from '../../lib/grammar/verbGroup'
import type { DepToken, TreeNode } from '../../lib/grammar/data'

type GrammarBlockType = Extract<Block, { t: 'grammar-lab' }>

export default function GrammarBlock({ block, color }: { block: GrammarBlockType; color: string }) {
  switch (block.viz) {
    case 'tree':
      return <TreeLab color={color} />
    case 'dependency':
      return <DependencyLab color={color} />
    case 'functional':
      return <FunctionalLab color={color} />
    case 'morphology':
      return <MorphologyLab color={color} />
    case 'tam':
      return <TamLab color={color} />
    case 'typology':
      return <TypologyLab color={color} />
  }
}

/**
 * Lab text is not passed through the guide's markdown renderer, so the one
 * convention that matters here, *italics* for linguistic examples, is handled
 * on its own.
 */
function Em({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.length > 2 && p.startsWith('*') && p.endsWith('*') ? <em key={i}>{p.slice(1, -1)}</em> : <Fragment key={i}>{p}</Fragment>
      )}
    </>
  )
}

const LINE = 'var(--line)'
const INK = 'var(--ink)'

// ── constituency trees ─────────────────────────────────────────────────────

/** Lay a tree out: leaves get evenly spaced slots, a parent sits over its children. */
type Placed = { label: string; word?: string; x: number; depth: number; kids: Placed[] }

function place(node: TreeNode, depth: number, cursor: { x: number }): Placed {
  if (!node.kids || node.kids.length === 0) {
    const x = cursor.x
    cursor.x += 1
    return { label: node.label, word: node.word, x, depth, kids: [] }
  }
  const kids = node.kids.map((k) => place(k, depth + 1, cursor))
  const x = (kids[0].x + kids[kids.length - 1].x) / 2
  return { label: node.label, x, depth, kids }
}

function flatten(p: Placed, out: Placed[] = []): Placed[] {
  out.push(p)
  for (const k of p.kids) flatten(k, out)
  return out
}

function TreeSvg({ tree, color }: { tree: TreeNode; color: string }) {
  const { nodes, width, height, leafRow } = useMemo(() => {
    const cursor = { x: 0 }
    const root = place(tree, 0, cursor)
    const all = flatten(root)
    const maxDepth = Math.max(...all.map((n) => n.depth))
    // Leaves sit on one row below the deepest internal node, so the words line up.
    return { nodes: all, width: Math.max(cursor.x, 1), height: maxDepth + 2, leafRow: maxDepth + 1 }
  }, [tree])

  const COL = 86
  const ROW = 52
  const W = width * COL
  const H = height * ROW + 10
  const cx = (n: Placed) => n.x * COL + COL / 2
  const cy = (n: Placed) => (n.kids.length === 0 ? leafRow - 1 : n.depth) * ROW + 24

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ maxWidth: '100%', height: 'auto' }} role="img" aria-label="Phrase structure tree">
        {nodes.flatMap((n) =>
          n.kids.map((k) => (
            <line key={`${n.label}${n.x}-${k.label}${k.x}`} x1={cx(n)} y1={cy(n) + 6} x2={cx(k)} y2={cy(k) - 12} stroke={LINE} strokeWidth={1.2} />
          ))
        )}
        {nodes.map((n) => (
          <g key={`${n.label}-${n.x}-${n.depth}`}>
            <text x={cx(n)} y={cy(n)} textAnchor="middle" fontSize={13} fontWeight={700} fill={n.kids.length ? color : INK}>
              {n.label}
            </text>
            {n.word && (
              <>
                <line x1={cx(n)} y1={cy(n) + 6} x2={cx(n)} y2={cy(n) + 22} stroke={LINE} strokeWidth={1.2} />
                <text x={cx(n)} y={cy(n) + 36} textAnchor="middle" fontSize={14} fontStyle="italic" fill={INK}>
                  {n.word}
                </text>
              </>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

function TreeLab({ color }: { color: string }) {
  const [id, setId] = useState(TREE_SENTENCES[0].id)
  const [alt, setAlt] = useState(false)
  const s = TREE_SENTENCES.find((x) => x.id === id)!
  const showing = alt && s.alt ? s.alt.tree : s.tree

  return (
    <Card
      title="Constituency tree explorer"
      color={color}
      note="A phrase structure tree says which words group together. The tests below are the evidence for the grouping: substitution, movement, coordination and ellipsis all work on constituents and fail on everything else."
    >
      <Select label="Sentence" value={id} onChange={(v) => { setId(v); setAlt(false) }} options={TREE_SENTENCES.map((x) => [x.id, x.text])} />
      <p className="text-xs leading-relaxed" style={soft}>
        <Em text={s.note} />
      </p>
      {s.alt && (
        <Pills
          label="Reading"
          value={alt ? 'alt' : 'main'}
          options={[
            ['main', 'You looked through the telescope'],
            ['alt', s.alt.reading],
          ]}
          onChange={(v) => setAlt(v === 'alt')}
        />
      )}
      <TreeSvg tree={showing} color={color} />
      {s.tests && (
        <div className="grid gap-2">
          {s.tests.map((t) => (
            <div key={t.name} className="rounded-[var(--radius)] border p-3" style={{ borderColor: LINE }}>
              <p className="flex flex-wrap items-baseline gap-2 text-sm font-bold">
                {t.name}
                <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase" style={{ background: t.passes ? 'color-mix(in srgb, var(--mint) 40%, transparent)' : 'color-mix(in srgb, var(--pink) 40%, transparent)' }}>
                  {t.passes ? 'constituent' : 'not a constituent'}
                </span>
              </p>
              <p className="mt-1 text-xs" style={soft}>
                <Em text={t.how} />
              </p>
              <p className="mt-1.5 text-sm">{t.result}</p>
              <p className="mt-1 text-xs" style={soft}>
                <Em text={t.note} />
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}

// ── dependency arcs ────────────────────────────────────────────────────────

function DepArcs({ tokens, color, focus }: { tokens: DepToken[]; color: string; focus: string | null }) {
  // Words are laid out on a line; each arc is a curve from head to dependent,
  // its height set by the distance, so nested arcs nest visibly.
  const widths = tokens.map((t) => Math.max(t.word.length, t.pos.length) * 8.6 + 26)
  const xs: number[] = []
  let run = 10
  for (const w of widths) {
    xs.push(run + w / 2)
    run += w
  }
  const W = run + 10
  const maxSpan = Math.max(...tokens.map((t, i) => (t.head < 0 ? 1 : Math.abs(t.head - i))), 1)
  const TOP = 26 + maxSpan * 20
  const H = TOP + 62

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ maxWidth: '100%', height: 'auto' }} role="img" aria-label="Dependency parse">
        {tokens.map((t, i) => {
          if (t.head < 0) return null
          const from = xs[t.head]
          const to = xs[i]
          const span = Math.abs(t.head - i)
          const lift = TOP - span * 20
          const mid = (from + to) / 2
          const on = !focus || focus === t.rel
          return (
            <g key={`arc-${i}`} opacity={on ? 1 : 0.18}>
              <path d={`M ${from} ${TOP} C ${from} ${lift}, ${to} ${lift}, ${to} ${TOP - 6}`} fill="none" stroke={on ? color : LINE} strokeWidth={1.4} />
              <path d={`M ${to} ${TOP - 6} l -3.5 -6 l 7 0 z`} fill={on ? color : LINE} />
              <text x={mid} y={lift + 10} textAnchor="middle" fontSize={10.5} fontWeight={700} fill={on ? color : LINE}>
                {t.rel}
              </text>
            </g>
          )
        })}
        {tokens.map((t, i) => (
          <g key={`tok-${i}`}>
            <text x={xs[i]} y={TOP + 22} textAnchor="middle" fontSize={14} fill={INK} fontWeight={t.head < 0 ? 700 : 400}>
              {t.word}
            </text>
            <text x={xs[i]} y={TOP + 40} textAnchor="middle" fontSize={10} fill="var(--ink-soft)">
              {t.pos}
            </text>
            {t.head < 0 && (
              <text x={xs[i]} y={TOP + 56} textAnchor="middle" fontSize={9.5} fontWeight={700} fill={color}>
                ROOT
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

function DependencyLab({ color }: { color: string }) {
  const [id, setId] = useState(DEP_SENTENCES[0].id)
  const [focus, setFocus] = useState<string | null>(null)
  const s = DEP_SENTENCES.find((x) => x.id === id)!
  const used = [...new Set(s.tokens.filter((t) => t.head >= 0).map((t) => t.rel))]

  return (
    <Card
      title="Dependency parse explorer"
      color={color}
      note="Dependency grammar has no phrases. Every word but one hangs off exactly one other word, and the labels say what the relationship is. These are Universal Dependencies labels, the scheme that treebanks and parsers actually use."
    >
      <Select label="Sentence" value={id} onChange={(v) => { setId(v); setFocus(null) }} options={DEP_SENTENCES.map((x) => [x.id, x.text])} />
      <p className="text-xs leading-relaxed" style={soft}>
        <Em text={s.note} />
      </p>
      <DepArcs tokens={s.tokens} color={color} focus={focus} />
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setFocus(null)}
          className="rounded-full border px-2.5 py-1 text-xs font-bold"
          style={{ borderColor: focus === null ? color : LINE, color: focus === null ? color : 'var(--ink-soft)' }}
        >
          all
        </button>
        {used.map((rel) => (
          <button
            key={rel}
            type="button"
            onClick={() => setFocus(focus === rel ? null : rel)}
            className="rounded-full border px-2.5 py-1 text-xs font-bold"
            style={{ borderColor: focus === rel ? color : LINE, color: focus === rel ? color : 'var(--ink-soft)' }}
          >
            {rel}
          </button>
        ))}
      </div>
      <dl className="grid gap-1.5">
        {used
          .map((rel) => DEP_RELATIONS.find((r) => r.rel === rel))
          .filter((r): r is (typeof DEP_RELATIONS)[number] => !!r)
          .map((r) => (
            <div key={r.rel} className="flex flex-wrap gap-x-2 text-xs">
              <dt className="font-bold" style={{ color }}>
                {r.rel}
              </dt>
              <dd style={soft}>
                {r.name}: <Em text={r.gloss} />
              </dd>
            </div>
          ))}
      </dl>
    </Card>
  )
}

// ── systemic functional grammar ────────────────────────────────────────────

const META = {
  transitivity: { label: 'Experiential (what is going on)', key: 'transitivity' as const },
  mood: { label: 'Interpersonal (the exchange)', key: 'mood' as const },
  textual: { label: 'Textual (how it is organised)', key: 'textual' as const },
}

function FunctionalLab({ color }: { color: string }) {
  const [id, setId] = useState(FUNC_CLAUSES[0].id)
  const [layer, setLayer] = useState<'transitivity' | 'mood' | 'textual'>('transitivity')
  const c = FUNC_CLAUSES.find((x) => x.id === id)!

  const tone = (label: string) => {
    if (layer === 'textual') return label === 'Theme' ? 'var(--mustard)' : 'var(--paper-2)'
    if (layer === 'mood') return label.includes('Finite') || label === 'Subject' || label === 'Finite' ? 'var(--teal)' : 'var(--paper-2)'
    if (label.startsWith('Process')) return 'var(--orange)'
    if (label.startsWith('Circumstance')) return 'var(--paper-2)'
    return 'var(--mint)'
  }

  return (
    <Card
      title="Clause analyser: the three metafunctions"
      color={color}
      note="Halliday's claim is that every clause does three jobs at once. The same words are analysed three different ways, and switching the layer changes nothing about the clause, only what you are looking at."
    >
      <Select label="Clause" value={id} onChange={setId} options={FUNC_CLAUSES.map((x) => [x.id, x.text])} />
      <Pills
        label="Layer"
        value={layer}
        options={[
          ['transitivity', 'Experiential'],
          ['mood', 'Interpersonal'],
          ['textual', 'Textual'],
        ]}
        onChange={setLayer}
      />
      <p className="text-xs font-bold" style={soft}>
        {META[layer].label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {c.spans.map((span, i) => {
          const label = span[META[layer].key]
          return (
            <div key={i} className="min-w-24 flex-1 rounded-[var(--radius)] border p-2" style={{ borderColor: LINE, background: `color-mix(in srgb, ${tone(label)} 35%, transparent)` }}>
              <p className="text-sm font-medium">{span.text}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wide" style={soft}>
                {label}
              </p>
            </div>
          )
        })}
      </div>
      <div className="grid gap-2 text-xs leading-relaxed">
        {layer === 'transitivity' && (
          <p>
            <strong>Process type: {c.process}.</strong> <Em text={c.processNote} />
          </p>
        )}
        {layer === 'mood' && (
          <p>
            <strong>Mood: {c.moodType}.</strong> The Subject and the Finite together are what you argue with. Tag the clause and you will find you repeat exactly those two.
          </p>
        )}
        {layer === 'textual' && (
          <p>
            <Em text={c.themeNote} />
          </p>
        )}
      </div>
    </Card>
  )
}

// ── morphology ─────────────────────────────────────────────────────────────

const KIND_TONE: Record<string, string> = {
  prefix: 'var(--lavender)',
  root: 'var(--mustard)',
  suffix: 'var(--teal)',
  infix: 'var(--pink)',
}

function MorphologyLab({ color }: { color: string }) {
  const [mode, setMode] = useState<'split' | 'build'>('split')
  const [wordId, setWordId] = useState(MORPH_WORDS[0].word)
  const [rootId, setRootId] = useState(BUILD_ROOTS[0].root)
  const w = MORPH_WORDS.find((x) => x.word === wordId)!
  const r = BUILD_ROOTS.find((x) => x.root === rootId)!

  return (
    <Card
      title="Inside the word"
      color={color}
      note="A morpheme is the smallest piece that carries meaning. Derivational morphemes build new words, often changing the word class; inflectional morphemes do not make a new word, they fit the word into its sentence. English has only eight inflections left."
    >
      <Pills label="Mode" value={mode} options={[['split', 'Split a word'], ['build', 'Build from a root']]} onChange={setMode} />

      {mode === 'split' ? (
        <>
          <Select label="Word" value={wordId} onChange={setWordId} options={MORPH_WORDS.map((x) => [x.word, x.word])} />
          <div className="flex flex-wrap items-stretch gap-1">
            {w.parts.map((p, i) => (
              <div key={i} className="min-w-20 flex-1 rounded-[var(--radius)] border p-2 text-center" style={{ borderColor: LINE, background: `color-mix(in srgb, ${KIND_TONE[p.kind]} 32%, transparent)` }}>
                <p className="font-mono text-sm font-bold">{p.form}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide" style={soft}>
                  {p.kind}
                </p>
                <p className="text-[10px]" style={soft}>
                  {p.type === 'lexical' ? 'lexical' : p.type}
                </p>
              </div>
            ))}
          </div>
          <dl className="grid gap-1 text-xs">
            {w.parts.map((p, i) => (
              <div key={i} className="flex flex-wrap gap-x-2">
                <dt className="font-mono font-bold" style={{ color }}>
                  {p.form}
                </dt>
                <dd style={soft}>
                  <Em text={p.gloss} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-xs leading-relaxed" style={soft}>
            <Em text={w.note} />
          </p>
        </>
      ) : (
        <>
          <Select label="Root" value={rootId} onChange={setRootId} options={BUILD_ROOTS.map((x) => [x.root, `${x.root} (${x.pos})`])} />
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={soft}>
                  <th className="pb-1 text-xs font-bold uppercase">Affixes</th>
                  <th className="pb-1 text-xs font-bold uppercase">Word</th>
                  <th className="pb-1 text-xs font-bold uppercase">Class</th>
                  <th className="pb-1 text-xs font-bold uppercase">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {r.forms.map((f) => (
                  <tr key={f.word} className="border-t" style={{ borderColor: LINE }}>
                    <td className="py-1.5 font-mono text-xs" style={soft}>
                      {f.affixes.length ? f.affixes.join(' + ') : 'none'}
                    </td>
                    <td className="py-1.5 font-bold">{f.word}</td>
                    <td className="py-1.5 text-xs" style={soft}>
                      {f.pos}
                    </td>
                    <td className="py-1.5 text-xs" style={soft}>
                      {f.gloss}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs leading-relaxed" style={soft}>
            One root, {r.forms.length} words. This is why vocabulary is better learned in families than in lists: the affixes are a finite set, and they do the same job every time.
          </p>
        </>
      )}
    </Card>
  )
}

// ── tense, aspect, modality ────────────────────────────────────────────────

function TamLab({ color }: { color: string }) {
  const [verbIdx, setVerbIdx] = useState(0)
  const [tense, setTense] = useState<'past' | 'present'>('present')
  const [aspect, setAspect] = useState<Aspect>('simple')
  const [modal, setModal] = useState('none')
  const [voice, setVoice] = useState<'active' | 'passive'>('active')
  const [person, setPerson] = useState<'she' | 'they'>('she')

  const verb = TAM_VERBS[verbIdx]
  const built = buildVerbGroup({ verb, tense, aspect, modal, voice, person })
  // In the passive the patient becomes the subject, so swapping the subject
  // noun keeps the sentence readable while the person choice still drives
  // agreement.
  const subject = voice === 'passive' ? (person === 'she' ? 'The report' : 'The reports') : person === 'she' ? 'She' : 'They'
  const object = voice === 'passive' ? '' : ' the report'
  const sentence = `${subject} ${built.words.join(' ')}${object}.`

  return (
    <Card
      title="The verb group machine"
      color={color}
      note="English has two inflected tenses, past and present. Everything else in the twelve-tense table is aspect, modality or voice stacked on top, in a fixed order: modal, perfect, progressive, passive, verb. Only the first element is finite, which is why only the first one shows tense."
    >
      <div className="flex flex-wrap gap-3">
        <Select label="Verb" value={String(verbIdx)} onChange={(v) => setVerbIdx(Number(v))} options={TAM_VERBS.map((v, i) => [String(i), v.base])} />
        <Select label="Subject" value={person} onChange={(v) => setPerson(v as 'she' | 'they')} options={[['she', 'she'], ['they', 'they']]} />
        <Select label="Modality" value={modal} onChange={setModal} options={TAM_MODALS.map((m) => [m, m === 'none' ? 'none' : m])} />
      </div>
      <Pills label="Tense" value={tense} options={[['present', 'Present'], ['past', 'Past']]} onChange={setTense} />
      <Pills
        label="Aspect"
        value={aspect}
        options={[
          ['simple', 'Simple'],
          ['progressive', 'Progressive'],
          ['perfect', 'Perfect'],
          ['perfect-progressive', 'Perfect progressive'],
        ]}
        onChange={setAspect}
      />
      <Pills label="Voice" value={voice} options={[['active', 'Active'], ['passive', 'Passive']]} onChange={setVoice} />

      <p className="rounded-[var(--radius)] border p-3 text-lg" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        {sentence}
      </p>

      <div className="grid gap-1.5">
        {built.parts.map((p, i) => (
          <div key={i} className="flex flex-wrap items-baseline gap-2 text-xs">
            <span className="rounded px-1.5 py-0.5 font-mono text-sm font-bold" style={{ background: `color-mix(in srgb, ${color} 18%, transparent)` }}>
              {p.word}
            </span>
            <span style={soft}>{p.role}</span>
          </div>
        ))}
      </div>

      {modal !== 'none' && tense === 'past' && (
        <p className="text-xs leading-relaxed" style={soft}>
          Note what happened: with a modal in place, the past tense had nowhere to land. Modals do not inflect, so a past modal is a different word (*can* becomes *could*), and the pair is only sometimes about time at all.
        </p>
      )}
    </Card>
  )
}

// ── typology ───────────────────────────────────────────────────────────────

function TypologyLab({ color }: { color: string }) {
  const [id, setId] = useState(TYPOLOGY_FEATURES[0].id)
  const f = TYPOLOGY_FEATURES.find((x) => x.id === id)!

  return (
    <Card
      title="How other languages do it"
      color={color}
      note="Every feature here is a choice English made, not a fact about language. Proportions are the rough shape of the World Atlas of Language Structures samples, which are indicative rather than exact."
    >
      <Select label="Feature" value={id} onChange={setId} options={TYPOLOGY_FEATURES.map((x) => [x.id, x.name])} />
      <p className="text-sm font-bold">{f.question}</p>
      <p className="text-xs leading-relaxed" style={soft}>
        <Em text={f.explain} />
      </p>
      <div className="grid gap-2">
        {f.values.map((v) => (
          <div key={v.value} className="rounded-[var(--radius)] border p-3" style={{ borderColor: LINE }}>
            <p className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-sm font-bold" style={{ color }}>
                {v.value}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wide" style={soft}>
                {v.share}
              </span>
            </p>
            <p className="mt-1 text-xs" style={soft}>
              <Em text={v.languages} />
            </p>
            {v.example && (
              <p className="mt-1.5 text-sm">
                <span className="italic">{v.example}</span>
                {v.gloss && (
                  <span className="ml-2 font-mono text-[11px]" style={soft}>
                    {v.gloss}
                  </span>
                )}
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        <strong>English:</strong> <Em text={f.englishNote} />
      </p>
    </Card>
  )
}
