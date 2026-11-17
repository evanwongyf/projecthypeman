import type { Config } from '@netlify/functions'
import bcrypt from 'bcryptjs'
import { getUserByEmail } from './_shared/users.js'
import { buildSessionCookie } from './_shared/auth.js'
import { configError } from './_shared/config.js'

export default async (req: Request) => {
  const bad = configError()
  if (bad) return bad

  const { email, password } = (await req.json()) as { email?: string; password?: string }

  if (!email || !password) {
    return Response.json({ error: 'Email and password are required.' }, { status: 400 })
  }

  const user = await getUserByEmail(email)
  // The same message either way, so a wrong email cannot be told from a wrong
  // password and the form does not confirm which accounts exist.
  if (!user) return Response.json({ error: 'Invalid email or password.' }, { status: 401 })

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) return Response.json({ error: 'Invalid email or password.' }, { status: 401 })

  if (user.disabled) return Response.json({ error: 'This account has been disabled.' }, { status: 403 })

  const cookie = await buildSessionCookie({
    sub: String(user.id),
    username: user.username,
    email: user.email,
    name: user.name,
    role: user.role,
  })

  return Response.json({ ok: true }, { headers: { 'Set-Cookie': cookie } })
}

export const config: Config = { path: '/api/auth/login' }
