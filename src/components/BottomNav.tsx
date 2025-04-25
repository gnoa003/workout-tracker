import { Link, useLocation } from 'react-router-dom'
import { ClipboardDocumentListIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function BottomNav() {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white border-t border-gray-200 rounded-b-[32px]">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center flex-1 h-full ${
            isActive('/') ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <ClipboardDocumentListIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Workouts</span>
        </Link>
        <Link
          to="/progress"
          className={`flex flex-col items-center justify-center flex-1 h-full ${
            isActive('/progress') ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <ChartBarIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Progress</span>
        </Link>
      </div>
    </nav>
  )
} 