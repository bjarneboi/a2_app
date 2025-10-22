import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "../styles";
import InputField from "../components/InputField";

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
      <StatusBar style="auto" />
    </View>     
  );
}
