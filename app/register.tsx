import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { styles } from "../styles";
import InputField from "../components/InputField";
import Button from "../components/Button";

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
