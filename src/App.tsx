import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './lib/auth-context'
import { DesignProvider } from './lib/design-context'
import { ProfileProvider } from './lib/profile-context'
import { ProtectedRoute } from './components/ProtectedRoute'
import { TerminalLayout } from './components/TerminalLayout'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

/**
 * Login and sign-up stand alone. Everything else lives in the terminal, which
 * owns the tabs and renders the page routes (src/routes.tsx) inside each one.
 */
export default function App() {
  return (
    <DesignProvider>
      <AuthProvider>
        <ProfileProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute />}>
              <Route path="*" element={<TerminalLayout />} />
            </Route>
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </DesignProvider>
  )
}
