import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { styles } from "../styles";

interface InputFieldProps {
  placeholder: string;
  passwordField?: boolean;
  onChangeText: (text: string) => void;
}

const InputField = ({
  placeholder,
  passwordField,
  onChangeText,
}: InputFieldProps) => {
  return (
    <View style={styles.inputFieldContainer}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={passwordField ? true : false}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputField;
