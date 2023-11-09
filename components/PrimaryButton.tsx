import React from "react";
import { Pressable, Text } from "react-native";
import styles from "../constants/styles";

const PrimaryButton: React.FC<{
  children: string;
  active?: boolean;
  onPress?: () => void;
  style?: object;
  textStyle?: object;
}> = ({ children, onPress, style, active, textStyle }) => {
  if (active === undefined) {
    active = true;
  }

  return (
    <Pressable
      onPress={active ? onPress : () => {}}
      style={({ pressed }: { pressed: boolean }) => [
        style,
        (pressed || !active) && { opacity: 0.25 },
      ]}
    >
      <Text style={[styles.primaryButtonText, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
