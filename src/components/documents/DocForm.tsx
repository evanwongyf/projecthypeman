/**
 * The left-hand panel: a template's field sections, rendered as controls.
 *
 * Every control is uncontrolled in the sense that matters here: it writes
 * straight into the draft on change, and the preview on the right rebuilds
 * from that. There is no "apply" step, because a document you have to ask to
 * see is a document you stop looking at.
 */
import { useId, useState } from 'react'
import { Field, FieldGroup } from '../Field'
import { NativeSelect } from '../NativeSelect'
import { IconMinus, IconPlus } from '../Icons'
import type { DocField, DocSection, DocValues, PrefillContext } from '../../lib/documents/types'

/** What every control needs: the draft, the records behind it, and a writer. */
type Shared = {
  values: DocValues
  ctx: PrefillContext
  onChange: (id: string, value: string | string[] | string[][]) => void
}

type Props = Shared & { sections: DocSection[] }

const str = (v: DocValues[string] | undefined) => (typeof v === 'string' ? v : '')

export function DocForm({ sections, values, ctx, onChange }: Props) {
  return (
    <div className="flex flex-col">
      {sections.map((section, i) => (
        <Section key={section.title + i} section={section} values={values} ctx={ctx} onChange={onChange} defaultOpen={i === 0} />
      ))}
    </div>
  )
}

function Section({
  section,
  values,
  ctx,
  onChange,
  defaultOpen,
}: Shared & { section: DocSection; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const filled = section.fields.filter((f) => {
    const v = values[f.id]
    if (Array.isArray(v)) return v.length > 0
    return !!str(v).trim()
  }).length

  return (
    <section className="border-b hairline">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left transition-colors sm:px-6"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ background: open ? 'var(--panel-2)' : 'transparent' }}
      >
        <span className="min-w-0">
          <span className="label block">{section.title}</span>
          {section.hint && (
            <span className="mt-0.5 block text-xs" style={{ color: 'var(--ink-faint)' }}>
              {section.hint}
            </span>
          )}
        </span>
        <span className="mono shrink-0 text-[11px]" style={{ color: 'var(--ink-faint)' }}>
          {filled}/{section.fields.length}
        </span>
      </button>
      {open && (
        <div className="grid gap-4 px-5 pt-1 pb-5 sm:px-6">
          {section.fields.map((field) => (
            <Control key={field.id} field={field} values={values} ctx={ctx} onChange={onChange} />
          ))}
        </div>
      )}
    </section>
  )
}

function Control({ field, values, ctx, onChange }: Shared & { field: DocField }) {
  const value = values[field.id]

  if (field.kind === 'check') {
    const on = !!str(value).trim()
    return (
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
          checked={on}
          onChange={(e) => onChange(field.id, e.target.checked ? 'yes' : '')}
        />
        <span className="min-w-0">
          <span className="text-sm">{field.label}</span>
          {field.hint && (
            <span className="mt-0.5 block text-xs" style={{ color: 'var(--ink-faint)' }}>
              {field.hint}
            </span>
          )}
        </span>
      </label>
    )
  }

  if (field.kind === 'table') {
    return <TableControl field={field} values={values} ctx={ctx} onChange={onChange} />
  }

  if (field.kind === 'chips') {
    return <ChipsControl field={field} values={values} ctx={ctx} onChange={onChange} />
  }

  if (field.kind === 'select') {
    const dynamic = field.dynamicOptions?.(ctx) ?? null
    const options = dynamic ?? (field.options ?? []).map((o) => ({ value: o, label: o }))
    return (
      <Field label={field.label} hint={field.hint} required={field.required}>
        <NativeSelect className="w-full" value={str(value)} onChange={(e) => onChange(field.id, e.target.value)}>
          <option value="">{options.length ? 'Not set' : 'Nothing to choose'}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </NativeSelect>
      </Field>
    )
  }

  if (field.kind === 'textarea') {
    return (
      <Field label={field.label} hint={field.hint} required={field.required}>
        <textarea
          className="field min-h-20 w-full resize-y"
          rows={field.rows ?? 4}
          value={str(value)}
          placeholder={field.placeholder}
          onChange={(e) => onChange(field.id, e.target.value)}
        />
      </Field>
    )
  }

  return (
    <Field label={field.label} hint={field.hint} required={field.required}>
      <input
        className="field w-full"
        type={field.kind === 'date' ? 'date' : field.kind === 'number' ? 'number' : 'text'}
        inputMode={field.kind === 'number' ? 'decimal' : undefined}
        value={str(value)}
        placeholder={field.placeholder}
        onChange={(e) => onChange(field.id, e.target.value)}
      />
    </Field>
  )
}

/** Comma-free tag entry: type, press Enter, it becomes a chip. */
function ChipsControl({ field, values, onChange }: Shared & { field: DocField }) {
  const current = Array.isArray(values[field.id]) ? (values[field.id] as string[]) : []
  const list = current.filter((x): x is string => typeof x === 'string')
  const [draft, setDraft] = useState('')

  const add = () => {
    const next = draft.trim()
    if (!next || list.includes(next)) return setDraft('')
    onChange(field.id, [...list, next])
    setDraft('')
  }

  return (
    <FieldGroup label={field.label} hint={field.hint}>
      <div className="flex flex-wrap gap-1.5">
        {list.map((item) => (
          <button
            key={item}
            type="button"
            className="chip chip-neutral"
            onClick={() => onChange(field.id, list.filter((x) => x !== item))}
            title="Remove"
          >
            {item}
            <IconMinus className="h-3 w-3" />
          </button>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <input
          className="field min-w-0 flex-1"
          value={draft}
          placeholder={field.placeholder ?? 'Add one and press Enter'}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              add()
            }
          }}
        />
        <button type="button" className="btn btn-ghost" onClick={add} disabled={!draft.trim()}>
          <IconPlus className="h-3 w-3" />
          Add
        </button>
      </div>
    </FieldGroup>
  )
}

/** Repeatable rows. Blank rows are kept while editing and dropped when rendering. */
function TableControl({ field, values, onChange }: Shared & { field: DocField }) {
  const columns = field.columns ?? ['Value']
  const id = useId()
  const stored = Array.isArray(values[field.id]) ? values[field.id] : []
  const rows: string[][] = Array.isArray(stored) && stored.every((r) => Array.isArray(r)) ? (stored as string[][]) : []
  const shown = rows.length ? rows : Array.from({ length: field.startRows ?? 3 }, () => columns.map(() => ''))

  const write = (next: string[][]) => onChange(field.id, next)
  const setCell = (r: number, c: number, text: string) => {
    const next = shown.map((row) => columns.map((_, i) => row[i] ?? ''))
    next[r][c] = text
    write(next)
  }

  return (
    <FieldGroup label={field.label} hint={field.hint}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} className="label px-1 pb-1 text-left font-normal">
                  {column}
                </th>
              ))}
              <th className="w-8" />
            </tr>
          </thead>
          <tbody>
            {shown.map((row, r) => (
              <tr key={`${id}-${r}`}>
                {columns.map((column, c) => (
                  <td key={column} className="p-0.5 align-top">
                    <input
                      className="field w-full !px-2 !py-1.5 text-[13px]"
                      value={row[c] ?? ''}
                      onChange={(e) => setCell(r, c, e.target.value)}
                      aria-label={`${field.label}, row ${r + 1}, ${column}`}
                    />
                  </td>
                ))}
                <td className="p-0.5 align-middle">
                  <button
                    type="button"
                    className="btn btn-ghost !px-1.5 !py-1"
                    onClick={() => write(shown.filter((_, i) => i !== r))}
                    aria-label={`Remove row ${r + 1}`}
                    disabled={shown.length === 1}
                  >
                    <IconMinus className="h-3 w-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className="btn btn-ghost mt-2"
        onClick={() => write([...shown, columns.map(() => '')])}
      >
        <IconPlus className="h-3 w-3" />
        Add row
      </button>
    </FieldGroup>
  )
}
