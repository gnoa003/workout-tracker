import { Routes, Route } from 'react-router-dom'
import WorkoutList from './components/WorkoutList'
import NewWorkout from './components/NewWorkout'
import EditWorkout from './components/EditWorkout'
import Progress from './components/Progress'
import BottomNav from './components/BottomNav'
import { WorkoutProvider } from './context/WorkoutContext'

function App() {
  return (
    <WorkoutProvider>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
        <div className="w-[390px] min-w-[320px] max-w-[100%] h-[100vh] max-h-[100vh] bg-white rounded-[40px] shadow-xl overflow-hidden relative border-8 border-gray-800 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<WorkoutList />} />
              <Route path="/new-workout" element={<NewWorkout />} />
              <Route path="/edit-workout/:id" element={<EditWorkout />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </div>
          <div className="flex-shrink-0">
            <BottomNav />
          </div>
        </div>
      </div>
    </WorkoutProvider>
  )
}

export default App 