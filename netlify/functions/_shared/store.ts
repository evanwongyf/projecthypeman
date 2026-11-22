import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import { r2, R2_BUCKET, r2Key } from './r2.js'
import { emptyData, type TerminalData } from './types.js'

/** One JSON blob per signed-in teacher: projecthypeman/data/<username>.json */
function dataKey(username: string) {
  return r2Key('data', `${username.toLowerCase()}.json`)
}

/**
 * Blobs written by earlier builds predate some fields, so every read fills the
 * gaps. Doing it here means the rest of the code can assume the arrays exist
 * instead of guarding at every use.
 */
function migrate(data: TerminalData): TerminalData {
  data.seatingPlans ??= []
  for (const p of data.seatingPlans) p.seats ??= {}
  for (const s of data.students) {
    s.ccas ??= []
    s.interests ??= []
    s.characteristics ??= []
    s.guardians ??= []
    s.relationships ??= []
    s.notes ??= []
    s.incidents ??= []
    for (const r of s.relationships) r.notes ??= []
  }
  return data
}

export async function readData(username: string): Promise<TerminalData> {
  try {
    const res = await r2.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: dataKey(username) }))
    const parsed = JSON.parse(await res.Body!.transformToString()) as Partial<TerminalData>
    return migrate({ ...emptyData(), ...parsed })
  } catch (err: unknown) {
    const name = err instanceof Error ? err.name : undefined
    const status = (err as { $metadata?: { httpStatusCode?: number } })?.$metadata?.httpStatusCode
    if (name === 'NoSuchKey' || status === 404) return emptyData()
    throw err
  }
}

export async function writeData(username: string, data: TerminalData): Promise<void> {
  await r2.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: dataKey(username),
      Body: JSON.stringify(data, null, 2),
      ContentType: 'application/json',
    })
  )
}

/** Read, mutate, write. Returns whatever the mutator returns. */
export async function mutate<T>(username: string, fn: (data: TerminalData) => T | Promise<T>): Promise<T> {
  const data = await readData(username)
  const result = await fn(data)
  await writeData(username, data)
  return result
}

// ---- student photos ----

function photoKey(username: string, studentId: string) {
  return r2Key('photos', username.toLowerCase(), studentId)
}

export async function putPhoto(username: string, studentId: string, bytes: Uint8Array, contentType: string) {
  await r2.send(
    new PutObjectCommand({ Bucket: R2_BUCKET, Key: photoKey(username, studentId), Body: bytes, ContentType: contentType })
  )
}

export async function getPhoto(username: string, studentId: string): Promise<{ bytes: Uint8Array; contentType: string } | null> {
  try {
    const res = await r2.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: photoKey(username, studentId) }))
    return { bytes: await res.Body!.transformToByteArray(), contentType: res.ContentType ?? 'image/jpeg' }
  } catch (err: unknown) {
    const status = (err as { $metadata?: { httpStatusCode?: number } })?.$metadata?.httpStatusCode
    if ((err instanceof Error && err.name === 'NoSuchKey') || status === 404) return null
    throw err
  }
}

export async function deletePhoto(username: string, studentId: string) {
  await r2.send(new DeleteObjectCommand({ Bucket: R2_BUCKET, Key: photoKey(username, studentId) }))
}

export function newId(): string {
  return crypto.randomUUID()
}

export function nowIso(): string {
  return new Date().toISOString()
}

// ---- generic JSON objects ----
//
// The Document Lab keeps each project in its own object rather than in the one
// big blob: a project carries its whole version history, and /api/data is read
// on every page load, so folding them in would make every request pay for
// documents nobody asked for. The blob stays the terminal's records; these are
// the documents written from them.

export async function readJsonAt<T>(parts: string[], fallback: () => T): Promise<T> {
  try {
    const res = await r2.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: r2Key(...parts) }))
    return JSON.parse(await res.Body!.transformToString()) as T
  } catch (err: unknown) {
    const status = (err as { $metadata?: { httpStatusCode?: number } })?.$metadata?.httpStatusCode
    if ((err instanceof Error && err.name === 'NoSuchKey') || status === 404) return fallback()
    throw err
  }
}

export async function writeJsonAt(parts: string[], value: unknown): Promise<void> {
  await r2.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: r2Key(...parts),
      Body: JSON.stringify(value),
      ContentType: 'application/json',
    })
  )
}

export async function deleteKey(parts: string[]): Promise<void> {
  await r2.send(new DeleteObjectCommand({ Bucket: R2_BUCKET, Key: r2Key(...parts) }))
}
