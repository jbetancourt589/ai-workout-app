import CustomText from '@/components/customText'
import { Pencil } from 'lucide-react-native'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { ScreenWrapper } from '../components/ScreenWrapper'

type Exercise = {
  name: string
}

type WorkoutDayProps = {
  title: string
  day: number
  subtitle: string
  muscleGroups: string[]
  exercises: Exercise[]
}

export default function WorkoutDay({ title, day, subtitle, exercises, muscleGroups }: WorkoutDayProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedExercises, setSelectedExercises] = useState(exercises)

  const toggleEdit = () => setIsEditing(!isEditing)

  const handleToggleExercise = (exerciseName: string) => {
    setSelectedExercises(
      (prev) =>
        prev.find((ex) => ex.name === exerciseName)
          ? prev.filter((ex) => ex.name !== exerciseName) // deselect
          : [...prev, { name: exerciseName }] // reselect
    )
  }

  return (
    <ScreenWrapper>
      <ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        {/* Title and Pencil */}
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>{title} </CustomText>
          <TouchableOpacity onPress={toggleEdit}>
            <Pencil color={isEditing ? 'yellow' : 'white'} />
          </TouchableOpacity>
        </View>

        {/* Subtitle */}
        <CustomText style={styles.subTitle}>
          {title} : {muscleGroups.length > 0 && muscleGroups.join(' • ')}
          {subtitle}{' '}
        </CustomText>

        {/* Exercises */}
        {exercises.map((exercise, index) => {
          const isSelected = selectedExercises.find((ex) => ex.name === exercise.name)
          return (
            <TouchableOpacity
              key={index}
              disabled={!isEditing}
              onPress={() => handleToggleExercise(exercise.name)}
              style={{ opacity: isSelected ? 1 : 0.4 }} // faded if deselected
            >
              <CustomText style={styles.exerciseTitle}>{exercise.name}</CustomText>

              {isSelected && (
                <View style={styles.weightContainer}>
                  <View style={styles.inputGroup}>
                    <CustomText style={{ color: 'white' }}>Weight:</CustomText>
                    <TextInput style={styles.weightInput} />
                  </View>
                  <View style={styles.inputGroup}>
                    <CustomText style={{ color: 'white' }}>Reps:</CustomText>
                    <TextInput style={styles.input} />
                  </View>
                  <View style={styles.inputGroup}>
                    <CustomText style={{ color: 'white' }}>Sets:</CustomText>
                    <TextInput style={styles.input} />
                  </View>
                </View>
              )}

              {index !== exercises.length - 1 && <View style={styles.divider} />}
            </TouchableOpacity>
          )
        })}
        <TouchableOpacity style={{ backgroundColor: '#B28238', padding: 10, margin: 20 }}>
          <CustomText style={{ textAlign : 'center' }}>Submit</CustomText>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 16,
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 10,
    color: 'white',
    marginBottom: 25,
    textAlign: 'center',
  },
  exerciseTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  weightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  weightInput: {
    backgroundColor: '#2F2F2F',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: '100%',
    textAlign: 'center',
    marginVertical: 5,
  },
  input: {
    backgroundColor: '#2F2F2F',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: '50%',
    textAlign: 'center',
    marginVertical: 5,
  },
  inputGroup: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#B28238',
    marginVertical: 30,
    borderRadius: 10,
    marginHorizontal: 3,
  },
})
