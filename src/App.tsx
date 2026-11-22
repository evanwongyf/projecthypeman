import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './lib/auth-context'
import { DesignProvider } from './lib/design-context'
import { PROFILE_MODES, ProfileProvider, useProfile } from './lib/profile-context'
import { ProtectedRoute } from './components/ProtectedRoute'
import { TerminalLayout } from './components/TerminalLayout'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { StudentsPage } from './pages/StudentsPage'
import { StudentProfilePage } from './pages/StudentProfilePage'
import { ClassesPage } from './pages/ClassesPage'
import { ClassDetailPage } from './pages/ClassDetailPage'
import { PointsPage } from './pages/PointsPage'
import { SeatingPage } from './pages/SeatingPage'
import { HomeworkPage } from './pages/HomeworkPage'
import { HomeworkDetailPage } from './pages/HomeworkDetailPage'
import { SettingsPage } from './pages/SettingsPage'
import { NotFound } from './pages/NotFound'
import { RunningPage } from './pages/RunningPage'

export default function App() {
  return (
    <DesignProvider>
      <AuthProvider>
        <ProfileProvider>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<TerminalLayout />}>
            <Route path="/" element={<HomeRedirect />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/students/:studentId" element={<StudentProfilePage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/classes/:classId" element={<ClassDetailPage />} />
            <Route path="/classes/:classId/points" element={<PointsPage />} />
            <Route path="/classes/:classId/seating" element={<SeatingPage />} />
            <Route path="/classes/:classId/seating/:planId" element={<SeatingPage />} />
            <Route path="/homework" element={<HomeworkPage />} />
            <Route path="/homework/:homeworkId" element={<HomeworkDetailPage />} />
            <Route path="/running" element={<RunningPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        </Routes>
        </ProfileProvider>
      </AuthProvider>
    </DesignProvider>
  )
}

/** "/" lands on the home page of whichever mode is active. */
function HomeRedirect() {
  const { mode } = useProfile()
  return <Navigate to={PROFILE_MODES.find((m) => m.id === mode)?.home ?? '/students'} replace />
}
