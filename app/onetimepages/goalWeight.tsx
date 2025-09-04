import { router } from 'expo-router';
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from "../../components/ScreenWrapper";


export default function goalWeight() {

  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  return (
    
    <ScreenWrapper>
      <ScrollView>

        <View style={styles.Container}>

          <View style={styles.questionBoxLocationcontainer}>
            <View style={styles.questionBoxProperties}>
              <Text style={styles.questionTextContainer}>What is your goal weight?</Text>
            </View> 
          </View>

         <View style={styles.row}>
        <View style={styles.Weight}>
        <TextInput
      style={styles.currentWeightInput}
      placeholder="Current weight"
      placeholderTextColor="#fff"
      value={currentWeight}
      keyboardType="numeric"
      onChangeText={setCurrentWeight}
    />
  </View>
  
</View>

<View style={styles.row}>
  <View style={styles.Weight}>
    <TextInput
      style={styles.currentWeightInput}
      placeholder="Goal Weight"
      placeholderTextColor="#fff"
      value={goalWeight}
      keyboardType="numeric"
      onChangeText={setGoalWeight}
    />
  </View>
  
    
    </View>
    <View style ={{flex:1, flexDirection:'row', gap:75, margin:10}}>
<TouchableOpacity onPress={() => {router.push('/Push');}} >
      <View style={styles.Skip}>
        <Text style={styles.SkipText}>Skip For Now</Text>
      </View>
    </TouchableOpacity>
    {currentWeight  && goalWeight  && <TouchableOpacity onPress={() => {router.push('/Push');}} >
      <View style={styles.Skip}>
        <Text style={styles.SkipText}>Continue</Text>
      </View>
    </TouchableOpacity>}
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
      backgroundColor: "#1C1919",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      borderColor: "black",
      borderWidth: 2,
    
    },
     weightInput: {
      width: 100,                   // fixed width for lbs
      height: 70,
      backgroundColor: "#1C1919",
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
  });