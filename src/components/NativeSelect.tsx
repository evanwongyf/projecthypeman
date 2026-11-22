import { Children, Fragment, isValidElement } from 'react'
import type { ReactNode } from 'react'
import { Select, type SelectOption } from './Select'

/**
 * A drop-in for <select> that renders the house dropdown instead of the device menu.
 * It takes the same children (<option>, <optgroup>) and calls onChange with an
 * event-like object, so ported code using `e.target.value` works unchanged.
 */
export function NativeSelect({
  value,
  onChange,
  children,
  className,
  style,
  disabled,
  'aria-label': ariaLabel,
}: {
  value?: string | number
  onChange?: (e: { target: { value: string } }) => void
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  id?: string
  'aria-label'?: string
}) {
  const options = collect(children)
  // Inline-sized selects (width auto, or no w-full) stay compact like the original.
  const fit = style?.width === 'auto' || !/\bw-full\b|max-w-full/.test(className ?? '')
  return (
    <div className={disabled ? 'pointer-events-none opacity-50' : undefined} style={{ display: fit ? 'inline-block' : 'block', minWidth: fit ? '8rem' : undefined }}>
      <Select
        value={String(value ?? '')}
        onChange={(v) => onChange?.({ target: { value: v } })}
        options={options}
        ariaLabel={ariaLabel}
        fit={fit}
      />
    </div>
  )
}

function text(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(text).join('')
  if (isValidElement<{ children?: ReactNode }>(node)) return text(node.props.children)
  return ''
}

function collect(children: ReactNode, group?: string): SelectOption[] {
  const out: SelectOption[] = []
  Children.forEach(children, (child) => {
    if (!isValidElement<{ value?: string | number; label?: string; children?: ReactNode }>(child)) return
    if (child.type === 'optgroup') {
      out.push(...collect(child.props.children, child.props.label))
    } else if (child.type === 'option') {
      const label = text(child.props.children)
      const value = child.props.value !== undefined ? String(child.props.value) : label
      out.push({ value, label: group ? `${group} · ${label}` : label })
    } else if (child.type === Fragment || Array.isArray(child.props.children)) {
      out.push(...collect(child.props.children, group))
    }
  })
  return out
}
