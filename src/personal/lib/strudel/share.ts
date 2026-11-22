// strudel.cc share links carry the code base64-encoded in the URL hash; the runner here reads
// the same format from `#code=...`, so a demo or song can be handed over in a link.

export function codeToHash(code: string): string {
  const bytes = new TextEncoder().encode(code)
  let bin = ''
  for (const b of bytes) bin += String.fromCharCode(b)
  return encodeURIComponent(btoa(bin))
}

export function hashToCode(hash: string): string {
  const b64 = decodeURIComponent(hash)
  const bin = atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4))
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)))
}

export const RUNNER_PATH = '/dashboard/relax/strudel'

export function runnerLink(code: string): string {
  return `${RUNNER_PATH}#code=${codeToHash(code)}`
}

export function strudelCcLink(code: string): string {
  return `https://strudel.cc/#${codeToHash(code)}`
}
