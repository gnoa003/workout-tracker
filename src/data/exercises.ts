export interface Exercise {
  name: string
  category: 'Chest' | 'Back' | 'Legs' | 'Shoulders' | 'Arms' | 'Core' | 'Cardio'
}

export const exercises: Exercise[] = [
  // Chest
  { name: 'Bench Press', category: 'Chest' },
  { name: 'Incline Bench Press', category: 'Chest' },
  { name: 'Decline Bench Press', category: 'Chest' },
  { name: 'Push-ups', category: 'Chest' },
  { name: 'Dumbbell Flyes', category: 'Chest' },
  { name: 'Cable Crossovers', category: 'Chest' },

  // Back
  { name: 'Pull-ups', category: 'Back' },
  { name: 'Lat Pulldowns', category: 'Back' },
  { name: 'Barbell Rows', category: 'Back' },
  { name: 'Dumbbell Rows', category: 'Back' },
  { name: 'Face Pulls', category: 'Back' },
  { name: 'Deadlifts', category: 'Back' },

  // Legs
  { name: 'Squats', category: 'Legs' },
  { name: 'Leg Press', category: 'Legs' },
  { name: 'Lunges', category: 'Legs' },
  { name: 'Leg Extensions', category: 'Legs' },
  { name: 'Leg Curls', category: 'Legs' },
  { name: 'Calf Raises', category: 'Legs' },

  // Shoulders
  { name: 'Overhead Press', category: 'Shoulders' },
  { name: 'Lateral Raises', category: 'Shoulders' },
  { name: 'Front Raises', category: 'Shoulders' },
  { name: 'Reverse Flyes', category: 'Shoulders' },
  { name: 'Shrugs', category: 'Shoulders' },

  // Arms
  { name: 'Bicep Curls', category: 'Arms' },
  { name: 'Tricep Pushdowns', category: 'Arms' },
  { name: 'Hammer Curls', category: 'Arms' },
  { name: 'Skull Crushers', category: 'Arms' },
  { name: 'Preacher Curls', category: 'Arms' },

  // Core
  { name: 'Crunches', category: 'Core' },
  { name: 'Planks', category: 'Core' },
  { name: 'Russian Twists', category: 'Core' },
  { name: 'Leg Raises', category: 'Core' },
  { name: 'Mountain Climbers', category: 'Core' },

  // Cardio
  { name: 'Running', category: 'Cardio' },
  { name: 'Cycling', category: 'Cardio' },
  { name: 'Rowing', category: 'Cardio' },
  { name: 'Jump Rope', category: 'Cardio' },
  { name: 'Burpees', category: 'Cardio' }
] 