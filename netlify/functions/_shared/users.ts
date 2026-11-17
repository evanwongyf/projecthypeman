import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import { r2, R2_BUCKET, r2Key } from './r2.js'

// Same R2 key credentials as the sibling apps; this app keeps its own user list
// at projecthypeman/auth/users.json.
const USERS_KEY = r2Key('auth', 'users.json')

export type Role = 'admin' | 'user'

export type User = {
  id: number
  username: string
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

export async function getUserByUsername(username: string): Promise<User | undefined> {
  const users = await readUsers()
  return users.find((u) => u.username === username.toLowerCase())
}

export async function upsertUser(params: { username: string; name: string; passwordHash: string; role: Role }): Promise<User> {
  const users = await readUsers()
  const username = params.username.toLowerCase()
  const idx = users.findIndex((u) => u.username === username)

  if (idx >= 0) {
    users[idx] = { ...users[idx], name: params.name, passwordHash: params.passwordHash, role: params.role }
    await writeUsers(users)
    return users[idx]
  }

  const user: User = {
    id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    username,
    name: params.name,
    passwordHash: params.passwordHash,
    role: params.role,
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  await writeUsers(users)
  return user
}
