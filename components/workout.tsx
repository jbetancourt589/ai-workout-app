import CustomText from '@/components/customText';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { ScreenWrapper } from '../components/ScreenWrapper';

type Exercise  = {
    name : string;
};
type WorkoutDayProps = {
  title : string;
  day : number;
  subtitle : string;
  muscleGroups: string[];
  exercises: Exercise[];
}

export default function WorkoutDay({title,day,subtitle,exercises,muscleGroups }: WorkoutDayProps) {





  return (



<ScreenWrapper>
  <ScrollView style = {{padding: 20}}
  showsVerticalScrollIndicator={false}>
    <View style={styles.titleContainer}>
      <CustomText style={styles.title}>{day} ~ {title} </CustomText>
    </View>
    <CustomText style={styles.subTitle}>
{title} : {muscleGroups.length > 0 && muscleGroups.join(' • ')}{subtitle}   </CustomText>
{exercises.map((exercise,index)=>(<View>
  <CustomText style={styles.exerciseTitle}>
    {exercise.name}
  </CustomText>
  
  <View style={styles.weightContainer}>
    <View style={styles.inputGroup}>
    <CustomText>Weight:</CustomText>

    <TextInput style={styles.weightInput} />
    </View>
    <View style={styles.inputGroup}>
    <CustomText>Reps:</CustomText>

    <TextInput style={styles.input} />
    
    </View>
    <View style={styles.inputGroup}>
    <CustomText>Sets:</CustomText>

    <TextInput style={styles.input} />
    
    </View>
    
  
  </View>
  {index !== exercises.length - 1 && <View style={styles.divider} />}
  
  
</View>
))}
 

</ScrollView>
</ScreenWrapper>



  ) 
}
const styles = StyleSheet.create({


  titleContainer: {
    borderColor: '#B28238',
    borderWidth: 1,
    borderRadius: 10,
    
    justifyContent: 'flex-start',
    alignItems: 'center',
    
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  subTitle: {
    fontSize: 10,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center',
  },
  exerciseTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    
  },
  weightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin:10,
    justifyContent: 'space-between',
   
  },
 weightInput: {
  backgroundColor: '#2F2F2F',
  borderRadius: 10,
  paddingVertical: 10,       // smaller height
  paddingHorizontal: 8,    // width inside input
  width: '100%',                // fixed width
  textAlign: 'center',  
  marginVertical: 5,          // optional
     // optional, center the text
},

input: {
  backgroundColor: '#2F2F2F',
  borderRadius: 10,
  paddingVertical: 10,       // smaller height
  paddingHorizontal: 8,     // smaller width
  width: '50%',                // fixed width
  textAlign: 'center',
  marginVertical: 5,          // optional
},

inputGroup: {
  flex: 1,
 
  justifyContent: 'space-between',
  alignItems: 'center',
  marginHorizontal: 10,
}
,
divider:{
  height:'1%',
  backgroundColor: '#B28238',
  marginVertical: 30,
  borderRadius: 10,
  marginHorizontal: 3,
}

})
