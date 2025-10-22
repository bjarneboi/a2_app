import {
  Pressable,
  Text,
  type GestureResponderEvent,
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";

import { router } from "expo-router";

import { styles } from "../styles";

interface ButtonProps {
  text: string;
  path: Parameters<typeof router.push>[0];
  buttonStyle: StyleProp<ViewStyle>;
  buttonTextStyle: StyleProp<TextStyle>;
}

export default function Button({
  path,
  text,
  buttonStyle,
  buttonTextStyle,
}: ButtonProps) {
  const handlePress = () => {
    router.push(path);
  };

  return (
    <Pressable onPress={handlePress} style={buttonStyle}>
      <Text style={buttonTextStyle}>{text}</Text>
    </Pressable>
  );
}
