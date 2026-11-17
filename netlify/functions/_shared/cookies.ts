export function parseCookies(req: Request): Record<string, string> {
  const header = req.headers.get('cookie')
  if (!header) return {}
  const out: Record<string, string> = {}
  for (const part of header.split(';')) {
    const idx = part.indexOf('=')
    if (idx === -1) continue
    out[part.slice(0, idx).trim()] = decodeURIComponent(part.slice(idx + 1).trim())
  }
  return out
}

export function serializeCookie(
  name: string,
  value: string,
  options: { maxAge?: number; httpOnly?: boolean; secure?: boolean; sameSite?: 'lax' | 'strict' | 'none'; path?: string } = {}
): string {
  const parts = [`${name}=${encodeURIComponent(value)}`]
  if (options.path) parts.push(`Path=${options.path}`)
  if (options.maxAge !== undefined) parts.push(`Max-Age=${options.maxAge}`)
  if (options.httpOnly) parts.push('HttpOnly')
  if (options.secure) parts.push('Secure')
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`)
  return parts.join('; ')
}
