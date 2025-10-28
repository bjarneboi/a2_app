import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { styles } from "../styles";
import InputField from "../components/InputField";
import Button from "../components/Button";
import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

const [username, setUsername] = React.useState("");
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [confirmPassword, setConfirmPassword] = React.useState("");

const nav = useNavigation<NativeStackNavigationProp<any>>();

const createProfile = async (response: any) => {
  db()
    .ref("/users/" + response.user.uid)
    .set({
      username,
      email,
    });
};

const registerUser = async () => {
  if (email && password) {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      if (response.user) {
        await createProfile(response);
        nav.replace("Main");
      }
    } catch (error) {
      Alert.alert("Registration Error", (error as Error).message);
    }
  }
};

const Register = () => {
  return (
    <View style={styles.registerScreenContainer}>
      <ScrollView contentContainerStyle={styles.registerContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.registerText}>{"* Skriv inn Brukernavn"}</Text>
          <InputField
            placeholder="eksempel"
            onChangeText={(text) => {}}
            passwordField={false}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.registerText}>{"* Skriv inn Epost-adresse"}</Text>
          <InputField
            placeholder="eksempel@mail.no"
            onChangeText={(text) => {}}
            passwordField={false}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.registerText}>{"* Skriv inn Passord"}</Text>
          <InputField
            placeholder="Skriv inn passord..."
            onChangeText={(text) => {}}
            passwordField={true}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.registerText}>
            {"* Skriv inn Passord på nytt"}
          </Text>
          <InputField
            placeholder="Skriv inn passord..."
            onChangeText={(text) => {}}
            passwordField={true}
          />
        </View>
        <View style={styles.inputGroup}>
          <Button
            text="Registrer deg"
            path="/login"
            buttonStyle={styles.loginButton}
            buttonTextStyle={styles.loginButtonText}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
