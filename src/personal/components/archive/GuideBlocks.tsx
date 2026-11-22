import { Suspense, lazy, useEffect, useState } from 'react'
import type { ComponentType, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Block } from '../../lib/archive/guide'
import { FORMULA_RECIPE, notationFor } from '../../lib/archive/notation'
import { ObjectiveBuilder } from './tools/ObjectiveBuilder'
import { RevisionPlanner } from './tools/RevisionPlanner'
import { BarChart } from './BarChart'
import { DiagramBlock, MindmapBlock } from './DiagramBlocks'
import { archiveHref, archivePath, resolvePath } from '../../lib/archive/topics'
import { useReadGuides } from '../../lib/archive/progress'
import { loadExplain, texKey } from '../../lib/archive/explain'
import type { Explain } from '../../lib/archive/explain'

const SignBlock = lazy(() => import('../sign/SignBlock'))
const FitBlock = lazy(() => import('../fitness/FitBlock'))
const FinBlock = lazy(() => import('../finance/FinBlock'))
const AiBlock = lazy(() => import('../ai/AiBlock'))
const MathBlock = lazy(() => import('../math/MathBlock'))
const SportsBlock = lazy(() => import('../sports/SportsBlock'))
const F1Block = lazy(() => import('../sports/f1/F1Block'))
const TeachBlock = lazy(() => import('../lab/TeachBlock'))
const LearnBlock = lazy(() => import('../lab/LearnBlock'))
const SecBlock = lazy(() => import('../lab/SecBlock'))
const WxBlock = lazy(() => import('../lab/WxBlock'))
const FootballBlock = lazy(() => import('../lab/FootballBlock'))
const WxChartBlock = lazy(() => import('../lab/WxChartBlock'))
const MedChartBlock = lazy(() => import('../medicine/MedChartBlock'))
const TarotBlock = lazy(() => import('../tarot/TarotBlock'))
const MedBrowser = lazy(() => import('../medicine/MedBrowser'))
const BandageBlock = lazy(() => import('../firstaid/BandageBlock'))
const EquipmentBlock = lazy(() => import('../firstaid/EquipmentBlock'))
const SpeechBlock = lazy(() => import('../speech/SpeechBlocks'))
const NetLab = lazy(() => import('../networking/NetLab'))
const GameLab = lazy(() => import('../gametheory/GameLab'))
const NutrientExplorer = lazy(() => import('../food/NutrientExplorer'))
const RecipeCard = lazy(() => import('../food/RecipeCard'))
const MbtiBlock = lazy(() => import('../personality/MbtiBlock'))
const FoodPhotos = lazy(() => import('../food/FoodPhotos'))
const BrainMap = lazy(() => import('../medicine/BrainMap'))
const TetrisBlock = lazy(() => import('../games/TetrisBlock'))
const StrudelBlock = lazy(() => import('../strudel/StrudelBlock'))
const FxCard = lazy(() => import('../strudel/FxCard'))
const KnotBlock = lazy(() => import('../survival/KnotBlock'))
const FinLab = lazy(() => import('../lab/FinLab'))
const BankBlock = lazy(() => import('../lab/BankBlock'))
const AcctBlock = lazy(() => import('../lab/AcctBlock'))
const FitLab = lazy(() => import('../lab/FitLab'))
const CloudBlock = lazy(() => import('../lab/CloudBlock'))
const QuantBlock = lazy(() => import('../lab/QuantBlock'))
const GamesBlock = lazy(() => import('../games/GamesBlock'))
const MedBlock = lazy(() => import('../medicine/MedBlock'))
const MilBlock = lazy(() => import('../military/MilBlock'))
const CardHand = lazy(() => import('../games/CardHand').then((m) => ({ default: m.CardHand })))
const TileHand = lazy(() => import('../games/CardHand').then((m) => ({ default: m.TileHand })))
const TexBlock = lazy(() => import('../finance/Tex'))
const InlineTex = lazy(() => import('../finance/Tex').then((m) => ({ default: m.InlineTex })))

// ── inline text ────────────────────────────────────────────────────────────
// Guide text supports **bold**, *italic*, [label](target) and maths between \( and \)
// (typeset with KaTeX). A link target starting with @ is another archive page
// ("@teaching/theories/cognitive-load"); anything else opens in a new tab.

// Bold and italic may nest (*italic with **bold** inside*, **bold with *italic* inside**): the
// italic pattern steps over whole **bold** runs, and both parts render through Rich again.
const INLINE = /\\\((.+?)\\\)|\*\*(.+?)\*\*|\*(?!\*)((?:\*\*.+?\*\*|[^*])+?)\*(?!\*)|\[([^\]]+)\]\(([^)]+)\)/g

export function Rich({ text }: { text: string }) {
  const out: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(INLINE)) {
    const at = m.index ?? 0
    if (at > last) out.push(text.slice(last, at))
    const key = at
    if (m[1] !== undefined)
      out.push(
        <Suspense key={key} fallback={<code>{m[1]}</code>}>
          <InlineTex tex={m[1]} />
        </Suspense>,
      )
    else if (m[2] !== undefined)
      out.push(
        <b key={key}>
          <Rich text={m[2]} />
        </b>,
      )
    else if (m[3] !== undefined)
      out.push(
        <i key={key}>
          <Rich text={m[3]} />
        </i>,
      )
    else if (m[5].startsWith('@'))
      out.push(
        <Link key={key} to={`/personal/archive/${m[5].slice(1)}`} className="font-bold underline decoration-2 underline-offset-2">
          {m[4]}
        </Link>,
      )
    else
      out.push(
        <a key={key} href={m[5]} target="_blank" rel="noreferrer" className="font-bold underline decoration-2 underline-offset-2">
          {m[4]}
        </a>,
      )
    last = at + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}

const soft = { color: 'var(--ink-soft)' }
const tint = (color: string, pct = 22) => `color-mix(in srgb, ${color} ${pct}%, var(--surface))`

// ── blocks ─────────────────────────────────────────────────────────────────

const CALLOUT = {
  tip: { label: 'Tip', color: 'var(--mint)', glyph: '✓' },
  warn: { label: 'Watch out', color: 'var(--orange)', glyph: '!' },
  note: { label: 'Note', color: 'var(--teal)', glyph: 'i' },
  myth: { label: 'Myth', color: 'var(--pink)', glyph: '✕' },
  fact: { label: 'Fun fact', color: 'var(--lavender)', glyph: '★' },
}

export function GuideBlock({ block, color }: { block: Block; color: string }) {
  switch (block.t) {
    case 'p':
      return (
        <p className="max-w-2xl text-sm leading-relaxed sm:text-base">
          <Rich text={block.text} />
        </p>
      )

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag className={`max-w-2xl space-y-1.5 pl-5 text-sm leading-relaxed sm:text-base ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
          {block.items.map((item, i) => (
            <li key={i}>
              <Rich text={item} />
            </li>
          ))}
        </Tag>
      )
    }

    case 'callout': {
      const c = CALLOUT[block.tone]
      return (
        <div className="flex max-w-2xl gap-3 rounded-[var(--radius)] border p-4" style={{ borderColor: 'var(--line)', background: tint(c.color) }}>
          <span
            aria-hidden
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-bold"
            style={{ borderColor: 'var(--line)', background: c.color, color: '#1c1410' }}
          >
            {c.glyph}
          </span>
          <div className="min-w-0 text-sm leading-relaxed">
            <p className="font-bold">{block.title ? <Rich text={block.title} /> : c.label}</p>
            <p className="mt-0.5">
              <Rich text={block.text} />
            </p>
          </div>
        </div>
      )
    }

    case 'cards':
      return (
        <div className={`grid gap-3 sm:grid-cols-2 ${block.cols === 3 ? 'xl:grid-cols-3' : ''}`}>
          {block.items.map((card, i) => (
            <div key={i} className="card-surface flex flex-col gap-1 rounded-[var(--radius)] p-4">
              {card.tag && (
                <span className="eyebrow font-bold" style={soft}>
                  <Rich text={card.tag} />
                </span>
              )}
              <p className="font-bold">
                <Rich text={card.title} />
              </p>
              <p className="text-sm leading-relaxed" style={soft}>
                <Rich text={card.body} />
              </p>
            </div>
          ))}
        </div>
      )

    case 'steps':
      return (
        <ol className="flex max-w-2xl flex-col gap-3">
          {block.items.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius)] border font-mono text-sm font-bold"
                style={{ borderColor: 'var(--line)', background: tint(color, 45) }}
              >
                {i + 1}
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="font-bold">
                  <Rich text={s.title} />
                </p>
                <p className="mt-0.5 text-sm leading-relaxed" style={soft}>
                  <Rich text={s.body} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      )

    case 'table':
      return <GuideTable block={block} color={color} />

    case 'levels':
      return <Levels block={block} color={color} />

    case 'cycle':
      return (
        <figure className="flex flex-col gap-2">
          <ol className="grid gap-2 sm:grid-cols-2">
            {block.items.map((s, i) => (
              <li key={i} className="relative flex gap-3 rounded-[var(--radius)] border p-3.5" style={{ borderColor: 'var(--line)', background: tint(color, 12 + i * 8) }}>
                <span aria-hidden className="font-mono text-sm font-bold">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-bold">
                    <Rich text={s.name} />
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed" style={soft}>
                    <Rich text={s.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <figcaption className="text-xs font-bold" style={soft}>
            ↻ <Rich text={block.caption ?? `After step ${block.items.length}, the cycle starts again at step 1.`} />
          </figcaption>
        </figure>
      )

    case 'quote':
      return (
        <blockquote className="max-w-2xl border-l-4 py-1 pl-4" style={{ borderColor: color }}>
          <p className="text-base italic leading-relaxed sm:text-lg">
            “<Rich text={block.text} />”
          </p>
          {block.by && (
            <footer className="mt-1 text-xs font-bold" style={soft}>
              {block.by}
            </footer>
          )}
        </blockquote>
      )

    case 'terms':
      return (
        <dl className="grid max-w-3xl gap-x-4 gap-y-2.5 sm:grid-cols-[minmax(8rem,auto)_1fr]">
          {block.items.map((t, i) => (
            <div key={i} className="contents">
              <dt className="text-sm font-bold">
                <Rich text={t.term} />
              </dt>
              <dd className="text-sm leading-relaxed" style={soft}>
                <Rich text={t.def} />
              </dd>
            </div>
          ))}
        </dl>
      )

    case 'dodont':
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {(
            [
              ['Do', block.do, 'var(--mint)', '✓'],
              ['Avoid', block.dont, 'var(--orange)', '✕'],
            ] as const
          ).map(([label, items, c, g]) => (
            <div key={label} className="rounded-[var(--radius)] border p-4" style={{ borderColor: 'var(--line)', background: tint(c, 18) }}>
              <p className="font-bold">{label}</p>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed">
                {items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="font-bold">
                      {g}
                    </span>
                    <span>
                      <Rich text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )

    case 'example':
      return (
        <div className="max-w-2xl rounded-[var(--radius)] border border-dashed p-4" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p className="eyebrow font-bold">example</p>
          <p className="mt-0.5 font-bold">
            <Rich text={block.title} />
          </p>
          <div className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed">
            {block.lines.map((l, i) => (
              <p key={i}>
                {l.label && <span className="mr-1.5 rounded px-1.5 py-0.5 font-mono text-xs font-bold" style={{ background: tint(color, 45) }}>{l.label}</span>}
                <Rich text={l.text} />
              </p>
            ))}
          </div>
        </div>
      )

    case 'checklist':
      return <Checklist items={block.items} color={color} />

    case 'tool':
      return block.tool === 'revision-planner' ? <RevisionPlanner color={color} /> : <ObjectiveBuilder color={color} />

    case 'links':
      return <GuideLinks items={block.items} color={color} />

    case 'handshapes':
    case 'signs':
    case 'sign-tool':
      return (
        <Suspense fallback={<div className="h-48 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <SignBlock block={block} color={color} />
        </Suspense>
      )

    case 'math':
      return <MathView block={block} color={color} />

    case 'metric':
      return <MetricBlock block={block} color={color} />

    case 'candles':
    case 'plot':
    case 'fin-tool':
      return (
        <Suspense fallback={<div className="h-64 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <FinBlock block={block} color={color} />
        </Suspense>
      )

    case 'ai-viz':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <AiBlock block={block} color={color} />
        </Suspense>
      )

    case 'math-viz':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <MathBlock block={block} color={color} />
        </Suspense>
      )

    case 'proof':
      return <ProofBlock block={block} color={color} />

    case 'sports-viz':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <SportsBlock block={block} color={color} />
        </Suspense>
      )

    case 'bars':
      return <BarChart block={block} color={color} />

    case 'teach-viz':
    case 'learn-lab':
    case 'sec-viz':
    case 'cloud-viz':
    case 'quant-viz':
    case 'wx-viz':
    case 'bank-viz':
    case 'acct-viz':
    case 'fit-lab':
    case 'pitch':
    case 'wx-chart':
    case 'fin-lab':
    case 'ftbl-viz': {
      const labs = { 'teach-viz': TeachBlock, 'learn-lab': LearnBlock, 'sec-viz': SecBlock, 'cloud-viz': CloudBlock, 'quant-viz': QuantBlock, 'wx-viz': WxBlock, 'bank-viz': BankBlock, 'acct-viz': AcctBlock, 'fit-lab': FitLab, pitch: FootballBlock, 'wx-chart': WxChartBlock, 'fin-lab': FinLab, 'ftbl-viz': FootballBlock }
      const Lab = labs[block.t] as ComponentType<{ block: never; color: string }>
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <Lab block={block as never} color={color} />
        </Suspense>
      )
    }

    case 'med-chart':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <MedChartBlock block={block} color={color} />
        </Suspense>
      )

    case 'speak':
    case 'tones':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <SpeechBlock block={block} color={color} />
        </Suspense>
      )

    case 'tarot':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <TarotBlock block={block} color={color} />
        </Suspense>
      )

    case 'net-lab':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <NetLab block={block} color={color} />
        </Suspense>
      )

    case 'game-lab':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <GameLab block={block} color={color} />
        </Suspense>
      )

    case 'nutrient-explorer':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <NutrientExplorer color={color} />
        </Suspense>
      )

    case 'food-photos':
      return (
        <Suspense fallback={<div className="h-48 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <FoodPhotos block={block} color={color} />
        </Suspense>
      )

    case 'mbti':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <MbtiBlock block={block} color={color} />
        </Suspense>
      )

    case 'recipe':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <RecipeCard block={block} color={color} />
        </Suspense>
      )

    case 'brain-map':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <BrainMap color={color} />
        </Suspense>
      )

    case 'fx-card':
      return (
        <Suspense fallback={<div className="h-48 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <FxCard block={block} color={color} />
        </Suspense>
      )

    case 'strudel':
      return (
        <Suspense fallback={<div className="h-40 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <StrudelBlock block={block} color={color} />
        </Suspense>
      )

    case 'tetris':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <TetrisBlock block={block} color={color} />
        </Suspense>
      )

    case 'knot':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <KnotBlock block={block} color={color} />
        </Suspense>
      )

    case 'f1-viz':
      return (
        <Suspense fallback={<div className="h-96 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <F1Block block={block} color={color} />
        </Suspense>
      )

    case 'games-viz':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <GamesBlock block={block} color={color} />
        </Suspense>
      )

    case 'card-hand':
      return (
        <Suspense fallback={<div className="h-24 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <CardHand block={block} />
        </Suspense>
      )

    case 'tile-hand':
      return (
        <Suspense fallback={<div className="h-24 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <TileHand block={block} />
        </Suspense>
      )

    case 'med-viz':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <MedBlock block={block} color={color} />
        </Suspense>
      )

    case 'mil-viz':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <MilBlock block={block} color={color} />
        </Suspense>
      )

    case 'code':
      return <CodeBlock block={block} color={color} />

    case 'flow':
      return <FlowBlock block={block} color={color} />

    case 'diagram':
      return <DiagramBlock block={block} color={color} />

    case 'med-browser':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <MedBrowser fixedClass={block.cls} />
        </Suspense>
      )

    case 'bandage':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <BandageBlock block={block} color={color} />
        </Suspense>
      )

    case 'first-aid-kit':
      return (
        <Suspense fallback={<div className="h-72 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <EquipmentBlock block={block} color={color} />
        </Suspense>
      )

    case 'mindmap':
      return <MindmapBlock block={block} color={color} />

    case 'exercises':
    case 'fit-tool':
      return (
        <Suspense fallback={<div className="h-64 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />}>
          <FitBlock block={block} color={color} />
        </Suspense>
      )
  }
}

// A numbered reading list of other archive pages, with ticks for ones already read.
function GuideLinks({ items, color }: { items: { path: string; note?: string }[]; color: string }) {
  const read = useReadGuides()
  return (
    <ol className="flex max-w-3xl flex-col gap-2">
      {items.map(({ path, note }, i) => {
        const trail = resolvePath(path.split('/'))
        if (!trail) return null
        const node = trail[trail.length - 1]
        const done = read.has(archivePath(trail))
        return (
          <li key={path}>
            <Link to={archiveHref(trail)} className="card-surface flex items-start gap-3 rounded-[var(--radius)] p-3.5 pointer-coarse:min-h-16">
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-bold"
                style={{ borderColor: 'var(--line)', background: done ? 'var(--mint)' : tint(color, 45) }}
              >
                {done ? '✓' : i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold">{node.title}</span>
                <span className="block text-sm leading-relaxed" style={soft}>
                  {note ? <Rich text={note} /> : node.blurb}
                </span>
              </span>
              <span aria-hidden className="self-center font-bold">
                →
              </span>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

// ── code ───────────────────────────────────────────────────────────────────
// A small highlighter: comments, strings, numbers, keywords and function names.

const PY_KEYWORDS = new Set('def return if elif else for while in import from as class with lambda not and or is None True False try except raise yield pass break continue print self'.split(' '))
const SHELL_WORDS = new Set(['pip', 'python', 'cd', 'git', 'npm', 'conda'])
const TOKEN = /(#.*$)|("""[\s\S]*?"""|'[^'\n]*'|"[^"\n]*")|(\b\d+(?:\.\d+)?(?:e-?\d+)?\b)|([A-Za-z_]\w*)(?=\s*\()|([A-Za-z_]\w*)/gm

function highlight(code: string, lang: string) {
  if (lang === 'text') return [code]
  const out: ReactNode[] = []
  let last = 0
  for (const m of code.matchAll(TOKEN)) {
    const at = m.index ?? 0
    if (at > last) out.push(code.slice(last, at))
    const [all, comment, str, num, fn, word] = m
    const style =
      comment !== undefined
        ? { color: 'var(--ink-soft)', fontStyle: 'italic' }
        : str !== undefined
          ? { color: '#2f8a5e' }
          : num !== undefined
            ? { color: '#b8560f' }
            : fn !== undefined
              ? { color: '#3b6fd8', fontWeight: 700 }
              : word !== undefined && (PY_KEYWORDS.has(word) || (lang === 'bash' && SHELL_WORDS.has(word)))
                ? { color: '#8a3fc9', fontWeight: 700 }
                : null
    out.push(
      style ? (
        <span key={at} style={style}>
          {all}
        </span>
      ) : (
        all
      ),
    )
    last = at + all.length
  }
  if (last < code.length) out.push(code.slice(last))
  return out
}

function CodeBlock({ block, color }: { block: Extract<Block, { t: 'code' }>; color: string }) {
  const [copied, setCopied] = useState(false)
  const lang = block.lang ?? 'python'
  return (
    <figure className="flex max-w-3xl flex-col gap-1.5">
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <div className="flex items-center justify-between gap-2 border-b-2 px-3 py-1.5" style={{ borderColor: 'var(--line)', background: tint(color, 25) }}>
          <span className="truncate font-mono text-xs font-bold">{block.title ?? lang}</span>
          <button
            type="button"
            className="rounded-full border px-2.5 py-0.5 text-[11px] font-bold pointer-coarse:min-h-9"
            style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
            onClick={() => {
              void navigator.clipboard?.writeText(block.code).then(() => {
                setCopied(true)
                window.setTimeout(() => setCopied(false), 1500)
              })
            }}
          >
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <pre className="whitespace-pre-wrap break-words px-3 py-2.5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]" style={{ background: 'var(--paper-2)' }}>
          <code>{highlight(block.code.replace(/^\n/, '').replace(/\n$/, ''), lang)}</code>
        </pre>
      </div>
      {block.caption && (
        <figcaption className="text-xs" style={soft}>
          <Rich text={block.caption} />
        </figcaption>
      )}
    </figure>
  )
}

// ── flowcharts ────────────────────────────────────────────────────────────

const FLOW_TONE = { data: 'var(--teal)', model: 'var(--lavender)', process: 'var(--mint)', output: 'var(--mustard)', human: 'var(--pink)' }

function FlowBlock({ block, color }: { block: Extract<Block, { t: 'flow' }>; color: string }) {
  return (
    <figure className="flex max-w-4xl flex-col gap-2">
      {block.title && (
        <p className="text-sm font-bold">
          <Rich text={block.title} />
        </p>
      )}
      <ol className="flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-3">
        {block.nodes.map((n, i) => (
          <li key={i} className="flex flex-col items-center sm:flex-row">
            <div
              className="w-full rounded-[var(--radius)] border px-3 py-2 text-center sm:w-auto sm:max-w-[13rem]"
              style={{ borderColor: 'var(--line)', background: tint(n.tone ? FLOW_TONE[n.tone] : color, 40), boxShadow: 'var(--shadow-card)' }}
            >
              <p className="text-sm font-bold leading-snug">
                <Rich text={n.label} />
              </p>
              {n.sub && (
                <p className="mt-0.5 text-xs leading-snug" style={soft}>
                  <Rich text={n.sub} />
                </p>
              )}
            </div>
            {i < block.nodes.length - 1 && (
              <span aria-hidden className="px-1.5 py-0.5 text-lg font-bold leading-none">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            )}
          </li>
        ))}
      </ol>
      {block.loop && (
        <p className="w-fit rounded-full border border-dashed px-3 py-1 text-xs font-bold" style={{ borderColor: 'var(--line)' }}>
          ↺ {block.loop}
        </p>
      )}
      {block.caption && (
        <figcaption className="text-xs" style={soft}>
          <Rich text={block.caption} />
        </figcaption>
      )}
    </figure>
  )
}

// A table on wide screens; on phones each row becomes its own card, with the column
// headings as labels, so nothing has to scroll sideways.
function GuideTable({ block, color }: { block: Extract<Block, { t: 'table' }>; color: string }) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full min-w-[26rem] border-collapse text-left text-sm">
          <thead>
            <tr style={{ background: tint(color, 35) }}>
              {block.head.map((h, i) => (
                <th key={i} scope="col" className="border-b-2 px-3 py-2 font-bold" style={{ borderColor: 'var(--line)' }}>
                  <Rich text={h} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, r) => (
              <tr key={r} style={{ background: r % 2 ? 'var(--paper-2)' : 'var(--surface)' }}>
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th key={c} scope="row" className="px-3 py-2 align-top font-bold">
                      <Rich text={cell} />
                    </th>
                  ) : (
                    <td key={c} className="px-3 py-2 align-top leading-relaxed">
                      <Rich text={cell} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.caption && (
        <figcaption className="text-xs" style={soft}>
          <Rich text={block.caption} />
        </figcaption>
      )}
    </figure>
  )
}

// Lowest level at the bottom, like a staircase you climb.
function Levels({ block, color }: { block: Extract<Block, { t: 'levels' }>; color: string }) {
  const n = block.items.length
  return (
    <figure className="flex flex-col gap-2">
      <ol className="flex flex-col-reverse gap-2">
        {block.items.map((lvl, i) => (
          <li
            key={i}
            className="rounded-[var(--radius)] border p-3.5"
            style={{
              borderColor: 'var(--line)',
              background: tint(color, 14 + Math.round((i / Math.max(1, n - 1)) * 50)),
              marginRight: `${(n - 1 - i) * 3}%`,
            }}
          >
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-mono text-xs font-bold" style={soft}>
                {i + 1}
              </span>
              <span className="font-bold">
                <Rich text={lvl.name} />
              </span>
            </div>
            <p className="mt-0.5 text-sm leading-relaxed">
              <Rich text={lvl.body} />
            </p>
            {lvl.verbs && (
              <p className="mt-1.5 flex flex-wrap gap-1">
                {lvl.verbs.map((v) => (
                  <span key={v} className="rounded-full border px-2 py-0.5 text-[11px] font-bold" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
                    {v}
                  </span>
                ))}
              </p>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="text-xs" style={soft}>
        <Rich text={block.caption ?? 'Read from the bottom up: each level builds on the ones below it.'} />
      </figcaption>
    </figure>
  )
}

function Checklist({ items, color }: { items: string[]; color: string }) {
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false))
  const count = done.filter(Boolean).length
  return (
    <div className="card-surface max-w-2xl rounded-[var(--radius)] p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="font-bold">Checklist</p>
        <span className="eyebrow font-bold">
          {count} / {items.length}
        </span>
      </div>
      <ul className="mt-2 flex flex-col gap-1">
        {items.map((item, i) => (
          <li key={i}>
            <label className="flex cursor-pointer items-start gap-2.5 rounded-[var(--radius)] px-1.5 py-1.5 text-sm leading-relaxed pointer-coarse:min-h-11">
              <input
                type="checkbox"
                checked={done[i]}
                onChange={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ accentColor: color }}
              />
              <span style={{ textDecoration: done[i] ? 'line-through' : 'none', color: done[i] ? 'var(--ink-soft)' : 'var(--ink)' }}>
                <Rich text={item} />
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

// How to read a formula's notation aloud: each symbol or operator and what it tells you to do.
function SyntaxGuide({ items, color }: { items: { sym: string; say: string }[]; color: string }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <p className="eyebrow border-b-2 px-4 py-1.5 font-bold" style={{ borderColor: 'var(--line)', background: tint(color, 22) }}>
        how to read the notation
      </p>
      <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-3 gap-y-1.5 px-4 py-3 text-sm">
        {items.map((it, i) => (
          <div key={i} className="contents">
            <dt className="font-semibold">
              <Rich text={`\\(${it.sym}\\)`} />
            </dt>
            <dd className="leading-relaxed" style={soft}>
              <Rich text={it.say} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

// For complete beginners: a plain-words story of the formula (when the guide has one), a method
// that works for any formula, and a walk through exactly the notation this formula uses, each
// piece with its meaning, a tiny worked example and what happens when it changes.
function FormulaPrimer({ tex, plain, color }: { tex: string; plain?: string; color: string }) {
  const entries = notationFor(tex)
  return (
    <details open className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <summary className="eyebrow cursor-pointer px-4 py-2 font-bold" style={{ background: tint(color, 15) }}>
        new to maths? read this formula from scratch
      </summary>
      <div className="flex flex-col gap-3 px-4 py-3 text-sm leading-relaxed">
        {plain && (
          <p>
            <span className="eyebrow mr-1.5 font-bold" style={soft}>
              in plain words
            </span>
            <Rich text={plain} />
          </p>
        )}
        <div>
          <p className="eyebrow mb-1 font-bold" style={soft}>
            how to use any formula
          </p>
          <ol className="flex flex-col gap-1">
            {FORMULA_RECIPE.map((st, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold" style={{ background: tint(color, 45) }}>
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <b>{st.title}.</b> <span style={soft}>{st.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        {entries.length > 0 && (
          <div>
            <p className="eyebrow mb-1 font-bold" style={soft}>
              the notation in this formula, piece by piece
            </p>
            <div className="flex flex-col gap-2.5">
              {entries.map((en) => (
                <div key={en.id} className="rounded-[var(--radius)] border px-3 py-2" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
                  <p className="font-semibold">
                    <Rich text={`\\(${en.show}\\)`} />
                  </p>
                  <p>
                    <b>What it means.</b> <span style={soft}><Rich text={en.meaning} /></span>
                  </p>
                  <p>
                    <b>Try it.</b> <span style={soft}><Rich text={en.example} /></span>
                  </p>
                  <p>
                    <b>What changes.</b> <span style={soft}><Rich text={en.effect} /></span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </details>
  )
}

// A formula block, with any beginner explanation from lib/archive/explain merged in: a plain
// story, a reason for each worked step, or a whole worked example where the guide has none.
function MathView({ block, color }: { block: Extract<Block, { t: 'math' }>; color: string }) {
  const [ex, setEx] = useState<Explain | undefined>()
  useEffect(() => {
    const topic = window.location.pathname.split('/archive/')[1]?.split('/')[0]
    if (!topic) return
    let live = true
    loadExplain(topic).then((m) => live && setEx(m[texKey(block.tex)]))
    return () => {
      live = false
    }
  }, [block.tex])
  const worked = block.worked ? { ...block.worked, why: block.worked.why ?? ex?.why } : ex?.worked
  return (
    <div className="flex max-w-3xl flex-col gap-2.5">
      <Suspense fallback={<pre className="max-w-3xl overflow-x-auto rounded-[var(--radius)] p-4 text-sm" style={{ background: 'var(--paper-2)' }}>{block.tex}</pre>}>
        <TexBlock tex={block.tex} caption={block.caption} where={block.where} color={color} />
      </Suspense>
      {block.syntax && block.syntax.length > 0 && <SyntaxGuide items={block.syntax} color={color} />}
      {worked && <WorkedExample worked={worked} color={color} />}
      <FormulaPrimer tex={block.tex} plain={block.plain ?? ex?.plain} color={color} />
    </div>
  )
}

// A formula with real numbers plugged in, one step at a time, ending in the answer. Each step
// may carry its reason, shown in brackets after it.
function WorkedExample({ worked, color }: { worked: { title?: string; steps: string[]; why?: string[]; answer: string }; color: string }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-dashed" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
      <p className="eyebrow border-b-2 border-dashed px-4 py-1.5 font-bold" style={{ borderColor: 'var(--line)' }}>
        worked example{worked.title ? ` · ${worked.title}` : ''}
      </p>
      <ol className="flex flex-col gap-1.5 px-4 py-3 text-sm leading-relaxed">
        {worked.steps.map((st, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold" style={{ background: tint(color, 45) }}>
              {i + 1}
            </span>
            <span className="min-w-0">
              <Rich text={st} />
              {worked.why?.[i] && (
                <span className="ml-1 text-[13px] italic" style={soft}>
                  [<Rich text={worked.why[i]} />]
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>
      <p className="border-t-2 border-dashed px-4 py-2.5 text-sm font-bold" style={{ borderColor: 'var(--line)', background: tint(color, 22) }}>
        <span className="mr-1.5">→</span>
        <Rich text={worked.answer} />
      </p>
    </div>
  )
}

// A metric explained for reading: what it shows, a simplified (ELI5) version, and what a
// higher or lower reading implies, as a two-sided scale.
function MetricBlock({ block, color }: { block: Extract<Block, { t: 'metric' }>; color: string }) {
  return (
    <figure className="max-w-3xl overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <div className="flex items-center gap-2 border-b-2 px-4 py-2.5" style={{ borderColor: 'var(--line)', background: tint(color, 30) }}>
        <span aria-hidden className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-bold" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          ?
        </span>
        <p className="font-bold">
          Reading <Rich text={block.name} />
        </p>
      </div>
      <div className="flex flex-col gap-3 px-4 py-3.5">
        <p className="text-sm leading-relaxed">
          <span className="eyebrow mr-1.5 font-bold" style={soft}>
            What it shows
          </span>
          <Rich text={block.shows} />
        </p>
        <div className="rounded-[var(--radius)] border border-dashed px-3 py-2.5" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p className="eyebrow font-bold" style={soft}>
            ELI5
          </p>
          <p className="mt-0.5 text-sm leading-relaxed">
            <Rich text={block.eli5} />
          </p>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2">
          <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: tint('var(--mint)', 16) }}>
            <p className="flex items-center gap-1.5 text-xs font-bold">
              <span aria-hidden>↑</span> Higher means
            </p>
            <p className="mt-1 text-sm leading-relaxed">
              <Rich text={block.higher} />
            </p>
          </div>
          <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: tint('var(--orange)', 16) }}>
            <p className="flex items-center gap-1.5 text-xs font-bold">
              <span aria-hidden>↓</span> Lower means
            </p>
            <p className="mt-1 text-sm leading-relaxed">
              <Rich text={block.lower} />
            </p>
          </div>
        </div>
        {block.typical && (
          <p className="text-xs" style={soft}>
            <span className="font-bold">In practice: </span>
            <Rich text={block.typical} />
          </p>
        )}
      </div>
    </figure>
  )
}

// A formal proof: a claim, optional given assumptions, and a chain of statement/reason
// pairs, ending with a ∎. Two columns on wide screens, stacked on phones.
const PROOF_METHOD = {
  direct: 'Direct proof',
  contradiction: 'Proof by contradiction',
  induction: 'Proof by induction',
  contrapositive: 'Proof by contrapositive',
  counterexample: 'Disproof by counterexample',
}

function ProofBlock({ block, color }: { block: Extract<Block, { t: 'proof' }>; color: string }) {
  return (
    <figure className="flex max-w-3xl flex-col gap-0 overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 px-4 py-2.5" style={{ borderColor: 'var(--line)', background: tint(color, 30) }}>
        <p className="font-bold">
          <span className="eyebrow mr-1.5" style={soft}>
            Claim
          </span>
          <Rich text={block.claim} />
        </p>
        {block.method && (
          <span className="shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-bold" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
            {PROOF_METHOD[block.method]}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 px-4 py-3.5">
        {block.given && block.given.length > 0 && (
          <div className="text-sm leading-relaxed">
            <span className="eyebrow mr-1.5 font-bold" style={soft}>
              Given
            </span>
            {block.given.map((g, i) => (
              <span key={i}>
                {i > 0 && '; '}
                <Rich text={g} />
              </span>
            ))}
          </div>
        )}
        <ol className="flex flex-col gap-2">
          {block.steps.map((s, i) => (
            <li key={i} className="grid grid-cols-[1.5rem_1fr] gap-x-2 gap-y-0.5 sm:grid-cols-[1.5rem_minmax(0,1.3fr)_minmax(0,1fr)]">
              <span aria-hidden className="font-mono text-xs font-bold" style={soft}>
                {i + 1}.
              </span>
              <span className="text-sm leading-relaxed">
                <Rich text={s.statement} />
              </span>
              <span className="col-start-2 text-xs italic leading-relaxed sm:col-start-3" style={soft}>
                <Rich text={s.reason} />
              </span>
            </li>
          ))}
        </ol>
        <p className="flex items-center justify-end gap-2 text-sm font-bold">
          {block.note && (
            <span className="mr-auto text-xs font-normal italic" style={soft}>
              <Rich text={block.note} />
            </span>
          )}
          <span aria-hidden>∎</span>
        </p>
      </div>
    </figure>
  )
}
