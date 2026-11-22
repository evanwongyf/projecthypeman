// Beginner explanations layered onto the archive's formulas without touching the guides that
// hold them. Each topic has a file in ./topics mapping a formula's TeX (whitespace squeezed) to a
// plain-words story, a reason for every step of its worked example, and a whole worked example
// for formulas that had none. The formula block merges these in when it renders.

export type Worked = { title?: string; steps: string[]; why?: string[]; answer: string }
export type Explain = { plain?: string; why?: string[]; worked?: Worked }
export type ExplainMap = Record<string, Explain>

const FILES = import.meta.glob<ExplainMap>('./topics/*.ts', { import: 'default' })
const cache = new Map<string, Promise<ExplainMap>>()

export const texKey = (tex: string) => tex.replace(/\s+/g, ' ').trim()

export function loadExplain(topic: string): Promise<ExplainMap> {
  const file = `./topics/${topic}.ts`
  if (!FILES[file]) return Promise.resolve({})
  let p = cache.get(file)
  if (!p) {
    p = FILES[file]().then((m) => Object.fromEntries(Object.entries(m).map(([k, v]) => [texKey(k), v])))
    cache.set(file, p)
  }
  return p
}

export const explainTopics = () => Object.keys(FILES).map((f) => f.slice('./topics/'.length, -3))
