import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import { r2, R2_BUCKET, r2Key } from './r2.js'

// Same R2 key credentials as the sibling apps; this app keeps its own user list
// at projecthypeman/auth/users.json.
const USERS_KEY = r2Key('auth', 'users.json')

export type Role = 'admin' | 'user'

export type User = {
  id: number
  /** Kept as the storage key for the account's data blob; sign-in uses email. */
  username: string
  email: string
  name: string
  passwordHash: string
  role: Role
  disabled?: boolean
  createdAt: string
}

async function readUsers(): Promise<User[]> {
  try {
    const res = await r2.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: USERS_KEY }))
    return JSON.parse(await res.Body!.transformToString()) as User[]
  } catch (err: unknown) {
    const name = err instanceof Error ? err.name : undefined
    const status = (err as { $metadata?: { httpStatusCode?: number } })?.$metadata?.httpStatusCode
    if (name === 'NoSuchKey' || status === 404) return []
    throw err
  }
}

async function writeUsers(users: User[]): Promise<void> {
  await r2.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: USERS_KEY,
      Body: JSON.stringify(users, null, 2),
      ContentType: 'application/json',
    })
  )
}

/**
 * Whether any account exists yet. Signup is open only while this is false, so
 * the route closes itself the moment the first account is claimed.
 */
export async function hasAnyUser(): Promise<boolean> {
  const users = await readUsers()
  return users.length > 0
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await readUsers()
  const wanted = email.trim().toLowerCase()
  return users.find((u) => u.email?.toLowerCase() === wanted)
}

export async function upsertUser(params: {
  username: string
  email: string
  name: string
  passwordHash: string
  role: Role
}): Promise<User> {
  const users = await readUsers()
  const username = params.username.toLowerCase()
  const email = params.email.trim().toLowerCase()

  // Another account already signing in with this email would make the login
  // ambiguous, so refuse rather than shadow it.
  const clash = users.find((u) => u.email?.toLowerCase() === email && u.username !== username)
  if (clash) throw new Error(`Email "${email}" is already used by "${clash.username}".`)

  const idx = users.findIndex((u) => u.username === username)

  if (idx >= 0) {
    users[idx] = {
      ...users[idx],
      email,
      name: params.name,
      passwordHash: params.passwordHash,
      role: params.role,
    }
    await writeUsers(users)
    return users[idx]
  }

  const user: User = {
    id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    username,
    email,
    name: params.name,
    passwordHash: params.passwordHash,
    role: params.role,
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  await writeUsers(users)
  return user
}
