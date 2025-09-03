import { router } from 'expo-router';
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from "../../components/ScreenWrapper";


export default function goalWeight() {

  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const currentFilled = currentWeight.trim().length > 0;
  const goalFilled = goalWeight.trim().length > 0;  //trims off excess whitespace and checks if input is filled

  return (
<<<<<<< HEAD

  <ScreenWrapper>
=======
    
    <ScreenWrapper>
      <ScrollView>
>>>>>>> 923e7c47e2d4d249e420d21b206a1b1f2fcd8fd6

  <View style={styles.Container}>

          <View style={styles.questionBoxLocationcontainer}>
            <View style={styles.questionBoxProperties}>
              <Text style={styles.questionTextContainer}>What is your goal weight?</Text>
            </View> 
          </View>

    <View style={styles.row}>
        <View style={styles.Weight}> 
        <Text style={styles.Text}>Current Weight</Text>
        </View>

      <View style={[styles.weightInput, currentFilled && styles.activeBox]}>
        <TextInput
        style={styles.currentWeightInput}
        placeholder="lbs"
        placeholderTextColor="#fff"
        value={currentWeight}
        keyboardType="numeric"
        onChangeText={setCurrentWeight}
        />
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.Weight}>
      <Text style={styles.Text}>Goal Weight</Text>
    </View>

    <View style={[styles.weightInput, goalFilled && styles.activeBox]}>
      <TextInput
      style={styles.currentWeightInput}
      placeholder="lbs"
      placeholderTextColor="#fff"
      value={goalWeight}
      keyboardType="numeric"
      onChangeText={setGoalWeight}
      />
    </View>
    
  </View>

  
    <TouchableOpacity onPress={() => {router.push('/workout');}} style={styles.forwardArrow}>
      <View style={styles.Skip}>
        <Text style={styles.SkipText}>Skip For Now</Text>
      </View>
    </TouchableOpacity>
  
    
    
    
    <View style={styles.arrows}>

      <BackArrow onPress={() => {router.push('/onetimepages/frequencyChooser')}} />

      {currentFilled && goalFilled && (

      <ForwardArrow onPress={() => {
      console.log("Current Weight:", currentWeight, "Goal Weight:", goalWeight);
      router.push('/login');}} >
      </ForwardArrow>

      )}
    
    </View>


    </View>
    </ScrollView>
  </ScreenWrapper>
  

  );

}

 const styles = StyleSheet.create( {   //allows for container to be used in multiple places

    questionBoxLocationcontainer: {  
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center', 
    },
    questionBoxProperties: {
      width: 350,
      height: 110,
      backgroundColor: "#1C1919",
      borderRadius: 14,
      marginTop: 40,
      marginBottom:80,
      borderColor: "#b28238",
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    questionTextContainer: {
      color: "#b28238",
      fontSize: 20,
      fontFamily: "Nico Moji",
      padding: 2,
      borderRadius: 12,
  
      textAlign: 'center',
       
    },
    Text: {
      fontSize: 15,
      fontFamily: "Nico Moji",
      color: "#ffff",
    },
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 150,
    },
    Weight: {
      width: 250,
      height: 70,
      backgroundColor: "#2F2F2F",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      borderColor: "black",
      borderWidth: 2,
      marginRight: 12,
    },
     weightInput: {
      width: 100,                   // fixed width for lbs
      height: 70,
      backgroundColor: "#2f2f2f",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      borderColor: "black",
      borderWidth: 2,
    },
    backArrow: {
      position: 'absolute',
      top: 380,
      left: 20,
      color: "white",
      fontSize: 50,
    },
    forwardArrow: {
      position: 'absolute',
      top: 380,
      right: 120,
      color: "white",
      fontSize: 50,
    },
    row: {
      flexDirection: 'row',         // align horizontally
      alignItems: 'center',         // align vertically centered
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 140 // space at the bottom
    },
    Input: {
    color: "white",
    fontSize: 16,
    },
    currentWeightInput: {
      fontFamily: "Nico Moji",
      fontSize: 15,
      textAlign: 'center',
      color: "#ffff",
      width: '100%',
    },
    arrows: {
    position: "absolute",
    bottom: 5, 
    top: 750,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
   paddingHorizontal: 35,
    },
    Skip: {
      width: 150,
      height: 70,
      backgroundColor: "#1C1919",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      borderColor: "#b28238",
      borderWidth: 2,
      marginRight: 12,
      padding: 10,
      marginBottom: 10
    },
    SkipText: {
      fontSize: 15,
      fontFamily: "Nico Moji",
      color: "#ffff",
      textAlign: 'center',
    },
    activeBox: {
      borderColor: "#B28238",
      borderWidth: 2,
    },
  });