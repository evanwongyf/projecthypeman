// Formulas written side by side ("a = b,\qquad c = d") are split at each top-level
// \qquad, so each one gets its own line instead of running off the side of the screen.
// Anything inside braces, \left…\right or an environment is left alone.
export function splitFormulas(tex: string): string[] {
  const parts: string[] = []
  let depth = 0
  let start = 0
  for (let i = 0; i < tex.length; i++) {
    const ch = tex[i]
    if (ch === '\\') {
      const word = /^\\[a-zA-Z]+/.exec(tex.slice(i))?.[0]
      if (word === '\\begin' || word === '\\left') depth++
      else if (word === '\\end' || word === '\\right') depth--
      else if (word === '\\qquad' && depth === 0) {
        parts.push(tex.slice(start, i))
        start = i + word.length
      }
      i += word ? word.length - 1 : 1
    } else if (ch === '{') depth++
    else if (ch === '}') depth--
  }
  parts.push(tex.slice(start))
  return parts.map((p) => p.trim().replace(/^[,;]\s*/, '').replace(/[,;]\s*$/, '').trim()).filter(Boolean)
}
