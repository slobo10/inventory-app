import React from "react";
import { Pressable, Text } from "react-native";
import styles from "../constants/styles";

const PrimaryButton: React.FC<{
  children: string;
  style?: any;
  onPress?: () => void;
}> = ({ children, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }: { pressed: boolean }) => [
        style,
        pressed && { opacity: 0.25 },
      ]}
    >
      <Text style={styles.primaryButtonText}>{children}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
