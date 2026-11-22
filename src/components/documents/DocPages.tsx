/**
 * The A4 preview.
 *
 * Each page is one SVG in the document's own coordinate space (points), so the
 * display list drops straight in: an SVG baseline is the number the layout
 * computed, not something the browser infers from its own font metrics. The
 * page scales by changing the SVG's width, which means zooming cannot reflow a
 * line or move a rule.
 */
import { memo } from 'react'
import { CSS_STACK, CSS_STYLE, CSS_WEIGHT } from '../../lib/documents/fonts'
import type { DocLayout, Op } from '../../lib/documents/layout'

function OpNode({ op, family }: { op: Op; family: 'sans' | 'serif' }) {
  switch (op.t) {
    case 'rect':
      return (
        <rect
          x={op.x}
          y={op.y}
          width={op.w}
          height={op.h}
          fill={op.fill ?? 'none'}
          stroke={op.stroke ?? 'none'}
          strokeWidth={op.stroke ? (op.lw ?? 0.7) : undefined}
        />
      )
    case 'line':
      return <line x1={op.x} y1={op.y} x2={op.x2} y2={op.y2} stroke={op.color} strokeWidth={op.lw} />
    case 'image':
      return <image x={op.x} y={op.y} width={op.w} height={op.h} href={op.src} preserveAspectRatio="xMidYMid slice" />
    case 'text': {
      const face = op.font.split('-')[1] as 'r' | 'b' | 'i' | 'bi'
      return (
        <text
          x={op.x}
          y={op.y}
          fontSize={op.size}
          fontFamily={CSS_STACK[family]}
          fontWeight={CSS_WEIGHT(face)}
          fontStyle={CSS_STYLE(face)}
          fill={op.color}
          xmlSpace="preserve"
        >
          {op.text}
        </text>
      )
    }
  }
}

const DocPage = memo(function DocPage({
  page,
  layout,
  index,
}: {
  page: { ops: Op[] }
  layout: DocLayout
  index: number
}) {
  return (
    <div className="doc-page" data-page={index + 1}>
      <svg
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        width={layout.width}
        height={layout.height}
        role="img"
        aria-label={`Page ${index + 1}`}
        shapeRendering="geometricPrecision"
      >
        <rect x={0} y={0} width={layout.width} height={layout.height} fill="#ffffff" />
        {page.ops.map((op, i) => (
          <OpNode key={i} op={op} family={layout.family} />
        ))}
      </svg>
    </div>
  )
})

export function DocPages({ layout }: { layout: DocLayout }) {
  return (
    <div className="doc-stack">
      {layout.pages.map((page, i) => (
        <DocPage key={i} page={page} layout={layout} index={i} />
      ))}
    </div>
  )
}
