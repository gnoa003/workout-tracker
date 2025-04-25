import { Exercise } from '@/types/workout'
import { Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea, VStack } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface ExerciseFormProps {
  initialExercise?: Exercise
  onSubmit: (exercise: Exercise) => void
  onCancel: () => void
}

export default function ExerciseForm({ initialExercise, onSubmit, onCancel }: ExerciseFormProps) {
  const [exercise, setExercise] = useState<Exercise>(
    initialExercise || {
      id: crypto.randomUUID(),
      name: '',
      sets: 3,
      reps: 10,
      weight: 0,
      notes: ''
    }
  )

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(exercise)
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Exercise Name</FormLabel>
          <Input
            value={exercise.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setExercise({ ...exercise, name: e.target.value })}
            placeholder="e.g. Bench Press"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Sets</FormLabel>
          <NumberInput
            value={exercise.sets}
            onChange={(_: string, value: number) => setExercise({ ...exercise, sets: value })}
            min={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Reps</FormLabel>
          <NumberInput
            value={exercise.reps}
            onChange={(_: string, value: number) => setExercise({ ...exercise, reps: value })}
            min={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Weight (lbs)</FormLabel>
          <NumberInput
            value={exercise.weight}
            onChange={(_: string, value: number) => setExercise({ ...exercise, weight: value })}
            min={0}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Notes</FormLabel>
          <Textarea
            value={exercise.notes}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setExercise({ ...exercise, notes: e.target.value })}
            placeholder="Add any notes about this exercise..."
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          {initialExercise ? 'Update' : 'Add'} Exercise
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </VStack>
    </form>
  )
} 