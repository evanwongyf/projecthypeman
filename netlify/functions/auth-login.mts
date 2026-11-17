import type { Config } from '@netlify/functions'
import bcrypt from 'bcryptjs'
import { getUserByUsername } from './_shared/users.js'
import { buildSessionCookie } from './_shared/auth.js'

export default async (req: Request) => {
  const { username, password } = (await req.json()) as { username?: string; password?: string }

  if (!username || !password) {
    return Response.json({ error: 'Username and password are required.' }, { status: 400 })
  }

  const user = await getUserByUsername(username)
  if (!user) return Response.json({ error: 'Invalid username or password.' }, { status: 401 })

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) return Response.json({ error: 'Invalid username or password.' }, { status: 401 })

  if (user.disabled) return Response.json({ error: 'This account has been disabled.' }, { status: 403 })

  const cookie = await buildSessionCookie({
    sub: String(user.id),
    username: user.username,
    name: user.name,
    role: user.role,
  })

  return Response.json({ ok: true }, { headers: { 'Set-Cookie': cookie } })
}

export const config: Config = { path: '/api/auth/login' }
