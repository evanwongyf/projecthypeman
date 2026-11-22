import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type BreadcrumbItem = { label: string; onClick?: () => void }

type BreadcrumbValue = {
  items: BreadcrumbItem[]
  setItems: (items: BreadcrumbItem[]) => void
}

const BreadcrumbContext = createContext<BreadcrumbValue | null>(null)

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BreadcrumbItem[]>([])
  const value = useMemo(() => ({ items, setItems }), [items])
  return <BreadcrumbContext.Provider value={value}>{children}</BreadcrumbContext.Provider>
}

function useBreadcrumbContext() {
  const ctx = useContext(BreadcrumbContext)
  if (!ctx) throw new Error('useBreadcrumbContext must be used within a BreadcrumbProvider')
  return ctx
}

export function useBreadcrumbItems() {
  return useBreadcrumbContext().items
}

// Pages call this with a memoized trail (useMemo) to publish it into the page
// chrome. It clears itself on unmount/dependency change so leaving the page,
// or the page's own drill-down state going back to nothing, hides the bar.
export function usePageBreadcrumb(items: BreadcrumbItem[]) {
  const { setItems } = useBreadcrumbContext()
  useEffect(() => {
    setItems(items)
    return () => setItems([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])
}
