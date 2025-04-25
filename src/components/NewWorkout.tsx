import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlusIcon, TrashIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { exercises } from '../data/exercises'
import { useWorkouts } from '../context/WorkoutContext'
import { format } from 'date-fns'

interface Exercise {
  name: string
  sets: number
  reps: number
  weight: number
  notes: string
}

interface Workout {
  id: string
  date: string
  exercises: Exercise[]
}

export default function NewWorkout() {
  const navigate = useNavigate()
  const { addWorkout } = useWorkouts()
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[]>([
    { name: '', sets: 3, reps: 10, weight: 0, notes: '' }
  ])

  const addExercise = () => {
    setWorkoutExercises([...workoutExercises, { name: '', sets: 3, reps: 10, weight: 0, notes: '' }])
  }

  const removeExercise = (index: number) => {
    setWorkoutExercises(workoutExercises.filter((_, i) => i !== index))
  }

  const updateExercise = (index: number, field: keyof Exercise, value: string | number) => {
    const newExercises = [...workoutExercises]
    newExercises[index] = { ...newExercises[index], [field]: value }
    setWorkoutExercises(newExercises)
  }

  const saveWorkout = () => {
    const workout: Workout = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      exercises: workoutExercises
    }
    addWorkout(workout)
    navigate('/')
  }

  // Group exercises by category
  const exercisesByCategory = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.category]) {
      acc[exercise.category] = []
    }
    acc[exercise.category].push(exercise)
    return acc
  }, {} as Record<string, typeof exercises>)

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold">New Workout for {format(new Date(), 'MMMM d, yyyy')}</h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {workoutExercises.map((exercise, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">Exercise {index + 1}</h2>
              {workoutExercises.length > 1 && (
                <button
                  onClick={() => removeExercise(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Exercise
                </label>
                <select
                  value={exercise.name}
                  onChange={(e) => updateExercise(index, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select an exercise</option>
                  {Object.entries(exercisesByCategory).map(([category, exercises]) => (
                    <optgroup key={category} label={category}>
                      {exercises.map((ex) => (
                        <option key={ex.name} value={ex.name}>
                          {ex.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sets
                </label>
                <input
                  type="number"
                  value={exercise.sets}
                  onChange={(e) => updateExercise(index, 'sets', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reps
                </label>
                <input
                  type="number"
                  value={exercise.reps}
                  onChange={(e) => updateExercise(index, 'reps', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weight (lbs)
                </label>
                <input
                  type="number"
                  value={exercise.weight}
                  onChange={(e) => updateExercise(index, 'weight', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <input
                type="text"
                value={exercise.notes}
                onChange={(e) => updateExercise(index, 'notes', e.target.value)}
                placeholder="Add notes for this exercise (e.g., form cues, how it felt)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}

        <button
          onClick={addExercise}
          className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          Add Exercise
        </button>

        <div className="flex justify-center">
          <button
            onClick={saveWorkout}
            className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold"
          >
            Complete Workout
          </button>
        </div>
      </div>
    </div>
  )
} 