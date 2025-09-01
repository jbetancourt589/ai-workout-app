import CustomText from "@/components/customText";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { auth } from "@/FirebaseConfig";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User signed up successfully:", user);
  } catch (error) {
    console.error("Error signing up:", error);
  }
};
export default function Landing() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/landing-image.png")}
            style={{ width: 300, height: 300, marginBottom: 20 }}
          />
          <View style={styles.titleContainer}>
            <CustomText style={styles.title}>Kraft</CustomText>
            <Text style={styles.subtitle}>
              Your Plan. Your Pace. Your Power
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.text}>Username:</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            />
            <Text style={styles.text}>Password:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Text style={styles.text}>Confirm Password: </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => signUp(email, password)}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "#1C1919", // Changed to a light gray background
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    padding: 0,
  },
  title: {
    fontWeight: "heavy",
    color: "#B28238",
    marginBottom: 35,
    fontSize: 80,
  },
  subtitle: {
    color: "#fff",
    fontSize: 15,
    marginTop: -30,
  },
  inputContainer: {
    width: "80%",
    marginTop: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  input: {
    height: 40,
    borderColor: "#B28238",
    borderWidth: 2,
    marginBottom: 20,
    width: "80%",
    backgroundColor: "#1C1919",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1C1919",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderColor: "#B28238",
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonText: {
    color: "#B28238", // text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
