import type { Config } from '@netlify/functions'
import bcrypt from 'bcryptjs'
import { hasAnyUser, upsertUser } from './_shared/users.js'
import { buildSessionCookie } from './_shared/auth.js'
import { configError } from './_shared/config.js'

const MIN_PASSWORD = 8

/** Turn an email into a usable storage key: evan.wong+x@gmail.com -> evanwong */
function usernameFromEmail(email: string): string {
  const local = email.split('@')[0] ?? ''
  const cleaned = local
    .split('+')[0]
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
  return cleaned || 'teacher'
}

export default async (req: Request) => {
  const bad = configError()
  if (bad) return bad

  const open = !(await hasAnyUser())

  // GET reports whether the route is still open, so the login screen can offer
  // it only when it would actually work.
  if (req.method === 'GET') return Response.json({ open })

  // Closed for good once an account exists. This is the whole security model
  // of the route: it exists to claim an empty install, nothing more.
  if (!open) {
    return Response.json(
      { error: 'Signups are closed. This terminal already has an account.' },
      { status: 403 }
    )
  }

  const body = (await req.json()) as {
    name?: string
    email?: string
    username?: string
    password?: string
  }

  const name = body.name?.trim()
  const email = body.email?.trim().toLowerCase()
  const password = body.password ?? ''

  if (!name) return Response.json({ error: 'Your name is required.' }, { status: 400 })
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }
  if (password.length < MIN_PASSWORD) {
    return Response.json(
      { error: `Use a password of at least ${MIN_PASSWORD} characters.` },
      { status: 400 }
    )
  }

  const username = (body.username?.trim().toLowerCase() || usernameFromEmail(email)).replace(
    /[^a-z0-9]/g,
    ''
  )
  if (!username) return Response.json({ error: 'Could not derive a username.' }, { status: 400 })

  // Re-check immediately before writing, so two requests racing an empty
  // install cannot both create an account.
  if (await hasAnyUser()) {
    return Response.json({ error: 'Signups are closed.' }, { status: 403 })
  }

  const passwordHash = await bcrypt.hash(password, 12)
  const user = await upsertUser({ username, email, name, passwordHash, role: 'admin' })

  const cookie = await buildSessionCookie({
    sub: String(user.id),
    username: user.username,
    email: user.email,
    name: user.name,
    role: user.role,
  })

  return Response.json({ ok: true }, { status: 201, headers: { 'Set-Cookie': cookie } })
}

export const config: Config = { path: '/api/auth/signup', method: ['GET', 'POST'] }
