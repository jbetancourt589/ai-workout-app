import CustomText from '@/components/customText';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



const handleSubmit = (email: string, username: string, password: string, confirmPassword: string) => {
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  // Handle sign up logic here
  console.log("Sign Up Successful", { email, username, password });
}
export default function Landing() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}><Image
        source={require('../assets/images/landing-image.png')}
        style={{ width: 300, height: 300, marginBottom: 20 }}
      />
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>Kraft</CustomText>
        <Text style={styles.subtitle}>Your Plan. Your Pace. Your Power</Text>
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.text}>Email:</Text>
        <TextInput  style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.text}>Username:</Text>
        <TextInput  style={styles.input} value={username} onChangeText={setUsername} />
        <Text style={styles.text}>Password:</Text>
        <TextInput  style={styles.input} secureTextEntry value={password} onChangeText={setPassword}   />
        <Text style={styles.text}>Confirm Password: </Text>
        <TextInput  style={styles.input} secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

        <TouchableOpacity style={styles.button} onPress={() =>{router.push('/(tabs)/workout'); handleSubmit(email, username, password, confirmPassword)}}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: { 
    flex: 1, 

    alignItems: 'center', 
    paddingTop: 30, 
    backgroundColor: '#1C1919'  // Changed to a light gray background
  },
  titleContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  title: { 
    fontWeight: 'heavy',
    color: '#B28238',  
    marginBottom: 30,  
    fontSize: 100
  },
  subtitle: { 
    
    color: '#fff',  
    fontSize: 15, 
    marginTop: -30,
     
  },
  inputContainer: {
    
    width: '80%',
    marginTop: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50, 
    
  },
  input: { 
    height: 40, 
    borderColor: '#B28238', 
    borderWidth: 2, 
    marginBottom: 20, 
    width: '80%', 
    backgroundColor: '#1C1919', 
    padding: 10, 
    borderRadius: 5,
    
  },
  text:{
    color: '#fff', 
    fontSize: 16, 
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1C1919',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderColor: '#B28238',
    borderWidth: 2,
    borderRadius: 5,
    
  },
  buttonText: {
    color: '#B28238', // text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
