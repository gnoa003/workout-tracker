import { Link } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { useWorkouts } from '../context/WorkoutContext'

export default function WorkoutList() {
  const { workouts } = useWorkouts()

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Workout Tracker</h1>
        <Link
          to="/new-workout"
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          New Workout
        </Link>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {workouts.map((workout) => (
          <Link
            key={workout.id}
            to={`/edit-workout/${workout.id}`}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">
                {format(new Date(workout.date), 'MMMM d, yyyy')}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {workout.exercises.map((exercise, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {exercise.name}
                </span>
              ))}
            </div>
            {workout.notes && (
              <div className="mt-4 text-gray-600">
                <p className="text-sm italic">"{workout.notes}"</p>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
} 