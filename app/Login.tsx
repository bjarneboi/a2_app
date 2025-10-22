import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "../styles";
import InputField from "../components/InputField";

export default function Login() {
  return (
    <View style={styles.loginContainer}>
      <Text>Hello world!</Text>
      <InputField
        placeholder="Username"
        onChangeText={(text) => console.log(text)}
      />
      <InputField
        placeholder="Password"
        passwordField
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
}
