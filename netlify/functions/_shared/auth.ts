import { SignJWT, jwtVerify } from 'jose'
import { parseCookies, serializeCookie } from './cookies.js'

export const SESSION_COOKIE = 'session'

const secret = new TextEncoder().encode(process.env.SESSION_SECRET ?? 'dev-only-insecure-secret-change-me')

export type SessionPayload = {
  sub: string
  username: string
  name: string
  role: 'admin' | 'user'
}

export async function createSessionToken(payload: SessionPayload) {
  return new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('30d').sign(secret)
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload as unknown as SessionPayload
  } catch {
    return null
  }
}

export async function getSession(req: Request): Promise<SessionPayload | null> {
  const token = parseCookies(req)[SESSION_COOKIE]
  if (!token) return null
  return verifySessionToken(token)
}

export async function buildSessionCookie(payload: SessionPayload): Promise<string> {
  const token = await createSessionToken(payload)
  return serializeCookie(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.CONTEXT === 'production' || process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })
}

export function buildClearCookie(): string {
  return serializeCookie(SESSION_COOKIE, '', { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 0 })
}

/** Guard for every data route: resolves the signed-in teacher or returns a 401 response. */
export async function requireSession(req: Request): Promise<{ session: SessionPayload } | { response: Response }> {
  const session = await getSession(req)
  if (!session) return { response: Response.json({ error: 'Unauthorized' }, { status: 401 }) }
  return { session }
}
