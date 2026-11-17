import { useEffect, useState } from 'react'

/**
 * A stable "now" for the render pass, re-read on an interval so an assigned
 * homework flips to overdue on its own without a reload.
 */
export function useNow(intervalMs = 60_000): number {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return now
}
