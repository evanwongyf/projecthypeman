import { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'
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
import { DocumentsPage } from './pages/DocumentsPage'
import { DocumentLabPage } from './pages/DocumentLabPage'
import { NotFound } from './pages/NotFound'
import { RunningPage } from './pages/RunningPage'
import { RaceLabPage } from './pages/RaceLabPage'

// Lessons carry their own pixel art, stage styles and activities, so they load on demand.
const LessonsPage = lazy(() => import('./pages/LessonsPage').then((m) => ({ default: m.LessonsPage })))

// The Archive carries large data sets (shoes, theory, charts), so it loads on demand.
const ArchivePage = lazy(() => import('./pages/ArchivePage').then((m) => ({ default: m.ArchivePage })))
// The personal archive is ~1,400 guides plus 3D, maths and audio engines; every guide loads on its own.
const PersonalArchivePage = lazy(() => import('./pages/PersonalArchivePage').then((m) => ({ default: m.PersonalArchivePage })))

/**
 * Every page inside the terminal. Each tab renders these against its own
 * address (`<Routes location={tab.path}>`), so several pages can stay mounted
 * at once, one per tab, and keep their state while hidden.
 */
export const pageRoutes = (
  <>
    <Route path="/" element={null} />
    <Route path="/students" element={<StudentsPage />} />
    <Route path="/students/:studentId" element={<StudentProfilePage />} />
    <Route path="/classes" element={<ClassesPage />} />
    <Route path="/classes/:classId" element={<ClassDetailPage />} />
    <Route path="/classes/:classId/points" element={<PointsPage />} />
    <Route path="/classes/:classId/seating" element={<SeatingPage />} />
    <Route path="/classes/:classId/seating/:planId" element={<SeatingPage />} />
    <Route path="/classes/:classId/sociogram" element={<SociogramPage />} />
    <Route path="/documents" element={<DocumentsPage />} />
    <Route path="/documents/:documentId" element={<DocumentLabPage />} />
    <Route
      path="/lessons/:deckId?"
      element={
        <Suspense fallback={<p className="label p-8">loading lessons…</p>}>
          <LessonsPage />
        </Suspense>
      }
    />
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
  </>
)
