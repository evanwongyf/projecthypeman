import { useEffect, useRef, useState } from 'react'
import { photoUrl } from '../api'
import type { Student } from '../types'
import type { PhotoMap } from './build'

/**
 * Student photos as data URLs, for the documents that show one.
 *
 * A PDF has to carry the picture's bytes, and an <image href> pointing at
 * /api/... would be fetched again by the print renderer, so each photo is read
 * once and kept. The natural size comes back with it: the layout needs the
 * aspect ratio to give the picture a box it fits rather than one it stretches
 * into. Photos already loaded are not re-fetched when the selection changes.
 */
export function useStudentPhotos(students: Student[], version: number): PhotoMap {
  const [photos, setPhotos] = useState<PhotoMap>({})
  const cache = useRef<PhotoMap>({})
  const seen = useRef(new Set<string>())
  const lastVersion = useRef(version)

  const wanted = students
    .filter((s) => s.hasPhoto)
    .map((s) => s.id)
    .sort()
    .join(',')

  useEffect(() => {
    // A reload of the terminal may mean a photo was replaced.
    if (lastVersion.current !== version) {
      lastVersion.current = version
      cache.current = {}
      seen.current = new Set()
      setPhotos({})
    }

    let alive = true
    const ids = wanted ? wanted.split(',') : []
    const missing = ids.filter((id) => !seen.current.has(id))
    if (missing.length === 0) return

    for (const id of missing) seen.current.add(id)

    void (async () => {
      for (const id of missing) {
        try {
          const res = await fetch(photoUrl(id, version))
          if (!res.ok) continue
          const blob = await res.blob()
          const src = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(String(reader.result))
            reader.onerror = () => reject(reader.error)
            reader.readAsDataURL(blob)
          })
          const ratio = await new Promise<number>((resolve) => {
            const img = new Image()
            img.onload = () => resolve(img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 0.8)
            img.onerror = () => resolve(0.8)
            img.src = src
          })
          if (!alive) return
          cache.current = { ...cache.current, [id]: { src, ratio } }
          setPhotos(cache.current)
        } catch {
          // A photo that will not load leaves the document without it, which
          // is a document with a gap, not a broken one.
        }
      }
    })()

    return () => {
      alive = false
    }
  }, [wanted, version])

  return photos
}
