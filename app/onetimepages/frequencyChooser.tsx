import { ScreenWrapper } from "@/components/ScreenWrapper";
import { BackArrow, ForwardArrow } from "@/components/ui/Arrows";
import { router } from 'expo-router';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


export default function frequencyChooser() {

   const [selectedDays, setSelectedDays] = useState<number | null>(null); // state outside function

  const handleSelect = (days: number) => {   // fix handleSelect
    setSelectedDays(days);
    console.log("Selected:", days);  //  log which one
    
  }; 
  return (
    
   <ScreenWrapper>
   
   <View style={styles.Container}>


      <SafeAreaView style={styles.questionBoxLocationcontainer}>
        <View style={styles.questionBoxProperties} >
          <Text style={styles.questionTextContainer}> How many days per week do you want to workout?</Text>
        </View>
      </SafeAreaView>

                  
      <TouchableOpacity style={[styles.DaysContainer, selectedDays == 3 && styles.DayContainerActive]} onPress={() => handleSelect(3)}>
          <Text style={styles.DaysText}>3 Days</Text> 
      </TouchableOpacity> 
      

      <TouchableOpacity style={[styles.DaysContainer, selectedDays == 4 && styles.DayContainerActive]} onPress={() => handleSelect(4)}>
          <Text style={styles.DaysText}>4 Days</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.DaysContainer, selectedDays == 5 && styles.DayContainerActive]} onPress={() => handleSelect(5)}>
          <Text style={styles.DaysText}>5 Days</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.DaysContainer, selectedDays == 6 && styles.DayContainerActive]} onPress={() => handleSelect(6)}>
          <Text style={styles.DaysText}>6 Days</Text>
      </TouchableOpacity>


      <Text style={styles.reminderText}>
        *Remember to keep rest in mind when choosing your frequency
      </Text>


       <View style={styles.BackArrow}>
            <BackArrow onPress={() => {router.push('/login')}} />
          </View>

       {selectedDays !== null && (
        <View style={styles.ForwardArrow}>
            <ForwardArrow onPress={() => router.push("/onetimepages/goalWeight")} />
          </View>
      )}

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
      marginTop: 10,
      borderColor: "#b28238",
      borderWidth: 2
    },
    questionTextContainer: {
      color: "#b28238",
      fontSize: 27,
      fontFamily: "Nico Moji",
      padding: 2,
      borderRadius: 12,
    },
    DaysContainer: {
      width: 330,
      height: 60,
      backgroundColor: "#2f2f2f",
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
      
      borderRadius: 14,
      borderColor: "black",
      borderWidth: 2
    },
    DayContainerActive: {
      borderColor: "#B28238",
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
      marginBottom: 60,
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
     BackArrow: {
    position: "absolute",
    bottom: 5, 
    top: 750,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
   paddingHorizontal: 35,
   },
   ForwardArrow: {   // NEW position for forward arrow
    position: "absolute",
    top: 750,
    right: 20,
    bottom: 5
  }
 
  });

  
 