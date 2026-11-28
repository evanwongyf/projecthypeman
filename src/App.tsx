import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './lib/auth-context'
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
import { SociogramPage } from './pages/SociogramPage'
import { HomeworkPage } from './pages/HomeworkPage'
import { HomeworkDetailPage } from './pages/HomeworkDetailPage'
import { SettingsPage } from './pages/SettingsPage'
import { NotFound } from './pages/NotFound'
import { RunningPage } from './pages/RunningPage'
import { RaceLabPage } from './pages/RaceLabPage'

// The Archive carries large data sets (shoes, theory, charts), so it loads on demand.
const ArchivePage = lazy(() => import('./pages/ArchivePage').then((m) => ({ default: m.ArchivePage })))
// The personal archive is ~1,400 guides plus 3D, maths and audio engines; every guide loads on its own.
const PersonalArchivePage = lazy(() => import('./pages/PersonalArchivePage').then((m) => ({ default: m.PersonalArchivePage })))

export default function App() {
  return (
    <>
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
            <Route path="/classes/:classId/sociogram" element={<SociogramPage />} />
            <Route path="/homework" element={<HomeworkPage />} />
            <Route path="/homework/:homeworkId" element={<HomeworkDetailPage />} />
            <Route path="/running" element={<RunningPage />} />
            <Route path="/running/race-lab" element={<RaceLabPage />} />
            <Route
              path="/running/archive"
              element={
                <Suspense fallback={<p className="label p-8">loading archive…</p>}>
                  <ArchivePage />
                </Suspense>
              }
            />
            <Route
              path="/personal/archive/*"
              element={
                <Suspense fallback={<p className="label p-8">loading archive…</p>}>
                  <PersonalArchivePage />
                </Suspense>
              }
            />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        </Routes>
        </ProfileProvider>
      </AuthProvider>
    </>
  )
}

/** "/" lands on the home page of whichever mode is active. */
function HomeRedirect() {
  const { mode } = useProfile()
  return <Navigate to={PROFILE_MODES.find((m) => m.id === mode)?.home ?? '/students'} replace />
}
