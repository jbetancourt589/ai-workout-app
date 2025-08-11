import React, { useState } from 'react'; //importing from react library
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

type WorkoutDay = 'Push' | 'Pull' | 'Legs';

interface Exercise {  
  name: string;
  sets: string;
  reps: string;
  weight: string;
}

type WorkoutData = {
  Push: Exercise[];
  Pull: Exercise[];
  Legs: Exercise[];
};

const initialWorkouts: WorkoutData = { //app default data
  Push: [
    { name: "Incline Press Variation", sets: "", reps: "", weight: "" },
    { name: "Flat Press/Fly Variation", sets: "", reps: "", weight: "" },
    { name: "Tricep Pushdown", sets: "", reps: "", weight: "" },
    { name: "Overhead Tricep Extension", sets: "", reps: "", weight: "" },
    { name: "Shoulder Lateral Raise", sets: "", reps: "", weight: "" }
  ],
  Pull: [
    { name: "Pull-Ups/Pulldown Variation", sets: "", reps: "", weight: "" },
    { name: "Row Variation", sets: "", reps: "", weight: "" },
    { name: "Incline Dumbell Curl", sets: "", reps: "", weight: "" },  
    { name: "Preacher Curl", sets: "", reps: "", weight: "" }
  ],
  Legs: [
    { name: "Squats", sets: "", reps: "", weight: "" },
    { name: "Quad Extension", sets: "", reps: "", weight: "" },
    { name: "Hamstring Curl", sets: "", reps: "", weight: "" },
    { name: "Calf Raise", sets: "", reps: "", weight: "" }
  ]
};

const repRange: [number, number] = [5, 20]; //optimal rep range  * const= variable that cant be reassigned 

const parseRange = (rangeStr: string): [number, number] => {  //converts string into numbers code can interpret ; parseRange = change Range
  const [min, max] = rangeStr.split("-").map(Number);
  return [min, max]; //rep range Ex. 8-12
};
export default function App() { // WHERE DA REAL CODE STARTS (FUNCT. CODE)
  const [day, setDay] = useState<WorkoutDay>("Push");
  const [workoutData, setWorkoutData] = useState<WorkoutData>(initialWorkouts);
  const [feedbackList, setFeedbackList] = useState<string[]>(
    initialWorkouts["Push"].map(() => "")
  );

  const handleChange = (
    exerciseIndex: number,
    field: keyof Exercise,
    value: string
  ) => {
    const updatedDay = [...workoutData[day]];
    updatedDay[exerciseIndex][field] = value;
    setWorkoutData({ ...workoutData, [day]: updatedDay });
  };

  const checkReps = (index: number) => {
    const ex = workoutData[day][index];
    const repInput = ex.reps.trim();
    const [goalMin, goalMax] = repRange;

    let message = "";

    if (repInput.includes("-")) {
      const [minReps, maxReps] = parseRange(repInput);

      if (isNaN(minReps) || isNaN(maxReps)) {
        message = `Please enter a valid rep range or number for ${ex.name}.`;
      } else if (maxReps < goalMin || minReps > goalMax) {
        message = `${ex.name} reps (${repInput}) are outside hypertrophy range (${goalMin}-${goalMax}).`;
      } else {
        message = `${ex.name} is in the optimal hypertrophy range!`;
      }
    } else {
      const reps = parseInt(repInput);

      if (isNaN(reps)) {
        message = `Please enter a valid number or range for ${ex.name}.`;
      } else if (reps < goalMin || reps > goalMax) {
        message = `${ex.name} reps (${reps}) are outside hypertrophy range (${goalMin}-${goalMax}).`;
      } else {
        message = `${ex.name} is in the optimal hypertrophy range!`;
      }
    }

    const updated = [...feedbackList];
    updated[index] = message;
    setFeedbackList(updated);
  };

  const handleTabChange = (d: WorkoutDay) => {
    setDay(d);
    setFeedbackList(workoutData[d].map(() => ""));
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 5 }}>Hypertrophy Workout</Text>

      {/* Tabs for Push/Pull/Legs */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10 }}>
        {(["Push", "Pull", "Legs"] as WorkoutDay[]).map((d) => (
          <TouchableOpacity key={d} onPress={() => handleTabChange(d)}>
            <Text style={{ fontWeight: day === d ? "bold" : "normal", fontSize: 16 }}>{d}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Exercises List */}
      <ScrollView style={{ maxHeight: "85%" }}>
        {workoutData[day].map((exercise, index) => (
          <View key={index} style={{ marginBottom: 20, borderBottomWidth: 1, paddingBottom: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{exercise.name}</Text>

            <Text>Sets</Text>
            <TextInput
              value={exercise.sets}
              onChangeText={(text) => handleChange(index, "sets", text)}
              placeholder="Sets"
              keyboardType="numeric"
              style={{ borderWidth: 1, padding: 5, marginBottom: 5 }}
            />

            <Text>Reps</Text>
            <TextInput
              value={exercise.reps}
              onChangeText={(text) => handleChange(index, "reps", text)}
              placeholder="Reps (e.g. 8-12)"
              style={{ borderWidth: 1, padding: 5, marginBottom: 5 }}
            />

            <Text>Weight</Text>
            <TextInput
              value={exercise.weight}
              onChangeText={(text) => handleChange(index, "weight", text)}
              placeholder="Weight"
              keyboardType="numeric"
              style={{ borderWidth: 1, padding: 5, marginBottom: 5 }}
            />

            <Button title="Check Reps" onPress={() => checkReps(index)} />

            {feedbackList[index] !== "" && (
              <Text style={{ marginTop: 5, fontStyle: "italic", color: "gray" }}>
                {feedbackList[index]}
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}