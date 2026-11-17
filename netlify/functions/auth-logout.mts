import type { Config } from '@netlify/functions'
import { buildClearCookie } from './_shared/auth.js'

export default async () => Response.json({ ok: true }, { headers: { 'Set-Cookie': buildClearCookie() } })

export const config: Config = { path: '/api/auth/logout' }
