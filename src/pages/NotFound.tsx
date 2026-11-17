import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="grid-field flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="label">404 — no such panel</p>
      <Link to="/students" className="btn btn-primary">
        Back to students
      </Link>
    </div>
  )
}
