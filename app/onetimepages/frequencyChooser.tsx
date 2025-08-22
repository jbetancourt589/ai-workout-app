import { ScreenWrapper } from "@/components/ScreenWrapper";
import { BackArrow } from "@/components/ui/Arrows";
import { router } from 'expo-router';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function frequencyChooser() {
  return (
    
   <ScreenWrapper>
   
   <View style={styles.Container}>


      <SafeAreaView style={styles.questionBoxLocationcontainer}>
        <View style={styles.questionBoxProperties} >
          <Text style={styles.questionTextContainer}> How many days per week do you want to workout?</Text>
        </View>
      </SafeAreaView>


      <TouchableOpacity style={styles.DaysContainer} onPress={() => {router.push('/onetimepages/goalWeight');}}>
          <Text style={styles.DaysText}>3 Days</Text> 
      </TouchableOpacity>
      

      <TouchableOpacity style={styles.DaysContainer} onPress={() =>  {router.push('/onetimepages/goalWeight');}}>
          <Text style={styles.DaysText}>4 Days</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.DaysContainer} onPress={() =>  {router.push('/onetimepages/goalWeight');}}>
          <Text style={styles.DaysText}>5 Days</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.DaysContainer} onPress={() =>  {router.push('/onetimepages/goalWeight');}}>
          <Text style={styles.DaysText}>6 Days</Text>
      </TouchableOpacity>


      <Text style={styles.reminderText}>
        *Remember to keep rest in mind when choosing your frequency
      </Text>


       <View style={styles.arrows}>
            <BackArrow onPress={() => {router.push('/login')}} />
          </View>
      </View>

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
      borderColor: "#b28238",
      borderWidth: 2
    },
    questionTextContainer: {
      color: "#b28238",
      fontSize: 27,
      fontFamily: "Nico Moji",
      padding: 25,
      borderRadius: 12,
    },
    DaysContainer: {
      width: 330,
      height: 60,
      backgroundColor: "#1C1919",
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
      borderRadius: 14,
      borderColor: "black",
      borderWidth: 2
    },
    DaysText: {
      fontSize: 25,
      fontFamily: "Nico Moji",
      color: "#ffff",
    },
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 150,
    },
    dayButton: {
      width: 330,
      height: 60,
      backgroundColor: "#1C1919",
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
      borderRadius: 14,
      borderColor: "black",
      borderWidth: 2,

    },
    reminderText: {
      fontSize: 17,
      fontFamily: "Nico Moji",
      color: "grey",
      textAlign: 'center',
      width: 300,
      marginTop: 20
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
    
   }
 
  });

  
 