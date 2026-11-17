import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './lib/auth-context'
import { DesignProvider } from './lib/design-context'
import { ProtectedRoute } from './components/ProtectedRoute'
import { TerminalLayout } from './components/TerminalLayout'
import { Login } from './pages/Login'
import { StudentsPage } from './pages/StudentsPage'
import { StudentProfilePage } from './pages/StudentProfilePage'
import { ClassesPage } from './pages/ClassesPage'
import { ClassDetailPage } from './pages/ClassDetailPage'
import { HomeworkPage } from './pages/HomeworkPage'
import { HomeworkDetailPage } from './pages/HomeworkDetailPage'
import { SettingsPage } from './pages/SettingsPage'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <DesignProvider>
      <AuthProvider>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<TerminalLayout />}>
            <Route path="/" element={<Navigate to="/students" replace />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/students/:studentId" element={<StudentProfilePage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/classes/:classId" element={<ClassDetailPage />} />
            <Route path="/homework" element={<HomeworkPage />} />
            <Route path="/homework/:homeworkId" element={<HomeworkDetailPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        </Routes>
      </AuthProvider>
    </DesignProvider>
  )
}
