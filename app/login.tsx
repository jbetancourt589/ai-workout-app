import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Landing() {
  const router = useRouter();

  return (
    <View style={styles.container}><Image
        source={require('../assets/images/landing-image.png')}
        style={{ width: 300, height: 300, marginBottom: 20 }}
      />
      <View style={styles.titleContainer}>
        <View><Text style={styles.title}>Kraft</Text></View>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your email" style={styles.input} />
        <TextInput placeholder="Enter your password" style={styles.input} secureTextEntry />
      
        <TouchableOpacity style={styles.button} onPress={() => {router.push('/onetimepages/frequencyChooser');}}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: { 
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingTop: 30, 
    backgroundColor: '#2f2f2f'  // Changed to a light gray background
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  title: { 
    color: '#FFD700',  
    marginBottom: 20,  
    fontSize: 150 
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20, 
    width: '80%', 
    backgroundColor: 'white', 
    padding: 10, 
    borderRadius: 5,
    
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000', // text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
