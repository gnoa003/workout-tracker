'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { subDays } from 'date-fns';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
  notes: string;
}

interface Workout {
  id: string;
  date: string;
  exercises: Exercise[];
  notes?: string;
}

const mockWorkouts: Workout[] = [
  {
    id: '1',
    date: subDays(new Date(), 3).toISOString(),
    exercises: [
      { name: 'Bench Press', sets: 3, reps: 10, weight: 135, notes: 'Did not go to failure' },
      { name: 'Squats', sets: 4, reps: 8, weight: 185, notes: 'Form felt good' },
      { name: 'Pull-ups', sets: 3, reps: 12, weight: 0, notes: 'Need to work on form' }
    ]
  },
  {
    id: '2',
    date: subDays(new Date(), 2).toISOString(),
    exercises: [
      { name: 'Deadlifts', sets: 3, reps: 8, weight: 225, notes: 'New PR!' },
      { name: 'Overhead Press', sets: 3, reps: 10, weight: 95, notes: 'Shoulder feeling better' },
      { name: 'Bicep Curls', sets: 3, reps: 12, weight: 30, notes: 'Increased weight' }
    ]
  },
  {
    id: '3',
    date: subDays(new Date(), 1).toISOString(),
    exercises: [
      { name: 'Leg Press', sets: 4, reps: 10, weight: 270, notes: 'Feeling strong' },
      { name: 'Lunges', sets: 3, reps: 12, weight: 45, notes: 'Balance improving' },
      { name: 'Calf Raises', sets: 3, reps: 15, weight: 90, notes: 'Need more stretch' }
    ]
  }
];

interface WorkoutContextType {
  workouts: Workout[];
  addWorkout: (workout: Workout) => void;
  updateWorkout: (id: string, updatedWorkout: Workout) => void;
  getWorkout: (id: string) => Workout | undefined;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const [workouts, setWorkouts] = useState<Workout[]>(mockWorkouts);

  const addWorkout = (workout: Workout) => {
    setWorkouts([...workouts, workout]);
  };

  const updateWorkout = (id: string, updatedWorkout: Workout) => {
    setWorkouts(workouts.map(workout => 
      workout.id === id ? updatedWorkout : workout
    ));
  };

  const getWorkout = (id: string) => {
    return workouts.find(workout => workout.id === id);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, updateWorkout, getWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkouts() {
  const context = useContext(WorkoutContext);
  if (context === undefined) {
    throw new Error('useWorkouts must be used within a WorkoutProvider');
  }
  return context;
} 