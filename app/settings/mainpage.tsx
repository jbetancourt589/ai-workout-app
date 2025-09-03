import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { ScreenWrapper } from "../../components/ScreenWrapper";

export default function mainpage () {

    return (
        <ScreenWrapper>
            <View style={styles.Container}>
            
            <View style={styles.settingsBoxcontainer}>
            <View style={styles.settingsBoxProperties}>
              <Text style={styles.settingsTextContainer}>Settings</Text>
            </View>

            
           
            <Text style={styles.headerText}>Account</Text>

            <View style={styles.selectionBox}>
              <Text style={styles.preferencesText}>Preferences</Text>

            </View>

          </View>
          
              
                </View>
        </ScreenWrapper>
    )

}
const styles = StyleSheet.create({
    
  settingsBoxcontainer: {  
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center', 
      paddingVertical: 20,
    },
    settingsBoxProperties: {
    width: "200%",                  // relative instead of fixed 350
    height: 100,
    backgroundColor: "#1C1919",
    borderRadius: 14,
    borderColor: "#b28238",
    borderWidth: 2,
    marginBottom: 20,              // spacing instead of right:85/top
    justifyContent: "center",
    alignItems: "center",
    },
    settingsTextContainer: {
      color: "#b28238",
      fontSize: 45,
      fontFamily: "Nico Moji",
      padding: 10,
      borderRadius: 12,
    },
    Text: {
      fontSize: 25,
      fontFamily: "Nico Moji",
      color: "#ffff",
    },
    headerText: {
      fontSize: 35,
      fontFamily: "Nico Moji",
      color: "#b28238",
      paddingVertical: 20,
      textAlign: "left",
      width: "200%",
      paddingTop:30,
      alignItems: "flex-start",
      flexDirection: "column"
      
    },
    Container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 40,              // instead of top/left
      padding: 20,
    },
    selectionBox: {
     width: "150%",
      height: 110,
      backgroundColor: "#1C1919",
      borderRadius: 14,
      borderColor: "black",
      borderWidth: 2,
      marginVertical: 0,
      alignSelf: 'end',   // overrides parent alignment
      marginLeft: 20,            // adds a small left margin
   
  },
   preferencesText: {
      fontSize: 20,
      fontFamily: "Nico Moji",
      color: "#fff",
      paddingVertical: 15,
      textAlign: "center",
      alignSelf: "flex-start",
      paddingLeft: 10
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
    row: {
      flexDirection: 'row',         // align horizontally
      alignItems: 'center',         // align vertically centered
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 20 // space at the bottom
  },
    Input: {
    color: "white",
    fontSize: 16,
  },

    activeBox: {
      borderColor: "#B28238",
      borderWidth: 2,
  },
    });


