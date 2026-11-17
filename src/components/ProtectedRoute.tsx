import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../lib/auth-context'
import { DataProvider } from '../lib/data-context'

export function ProtectedRoute() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="label">connecting…</p>
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />

  return (
    <DataProvider>
      <Outlet />
    </DataProvider>
  )
}
