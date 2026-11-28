import type { FileFormat } from './duck'

/**
 * Uploaded files live in this browser's IndexedDB, so a dataset survives a
 * reload without ever being sent to the server. On another device the
 * dashboards load but ask for the file again.
 */
export type StoredFile = {
  table: string
  fileName: string
  format: FileFormat
  bytes: Uint8Array
  addedAt: string
}

const DB_NAME = 'hypeman-analytics'
const STORE = 'files'

function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: 'table' })
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function tx<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await open()
  try {
    return await new Promise<T>((resolve, reject) => {
      const req = fn(db.transaction(STORE, mode).objectStore(STORE))
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
  } finally {
    db.close()
  }
}

export async function listFiles(): Promise<StoredFile[]> {
  try {
    return await tx<StoredFile[]>('readonly', (s) => s.getAll() as IDBRequest<StoredFile[]>)
  } catch {
    return [] // private mode or blocked storage: the session still works, it just won't persist
  }
}

export async function saveFile(file: StoredFile): Promise<void> {
  try {
    await tx('readwrite', (s) => s.put(file))
  } catch {
    /* see listFiles */
  }
}

export async function deleteFile(table: string): Promise<void> {
  try {
    await tx('readwrite', (s) => s.delete(table))
  } catch {
    /* see listFiles */
  }
}
