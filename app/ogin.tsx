import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "../styles";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Login() {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputFieldText}>Username</Text>
        <InputField
          placeholder="Username"
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.inputFieldText}>Password</Text>
        <InputField
          placeholder="Password"
          passwordField
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.loginButtonGroup}>
        <Button
          text="Logg inn"
          path="/login"
          buttonStyle={styles.loginButton}
          buttonTextStyle={styles.loginButtonText}
        />
      </View>
      <View style={styles.loginButtonGroup}>
        <Text>Ny bruker?</Text>
        <Button
          text="Registrer deg her"
          path="/register"
          buttonStyle={styles.loginButton}
          buttonTextStyle={styles.loginButtonText}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
