import { Routes, Route, Navigate } from 'react-router-dom'
import WorkoutList from './components/WorkoutList'
import NewWorkout from './components/NewWorkout'
import EditWorkout from './components/EditWorkout'
import Progress from './components/Progress'
import BottomNav from './components/BottomNav'
import { WorkoutProvider } from './context/WorkoutContext'

function App() {
  return (
    <WorkoutProvider>
      <div className="h-screen bg-gray-200 flex items-center justify-center p-4">
        <div className="w-[390px] min-w-[320px] max-w-[100%] h-[80vh] max-h-[80vh] bg-white rounded-[40px] shadow-xl relative border-8 border-gray-800 flex flex-col">
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto pb-16">
              <Routes>
                <Route path="/" element={<WorkoutList />} />
                <Route path="/workout-tracker" element={<Navigate to="/" replace />} />
                <Route path="/new-workout" element={<NewWorkout />} />
                <Route path="/edit-workout/:id" element={<EditWorkout />} />
                <Route path="/progress" element={<Progress />} />
              </Routes>
            </div>
          </div>
          <div className="mt-auto">
            <BottomNav />
          </div>
        </div>
      </div>
    </WorkoutProvider>
  )
}

export default App 