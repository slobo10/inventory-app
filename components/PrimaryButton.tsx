import React from "react";
import { Pressable, Text } from "react-native";
import styles from "../constants/styles";

const PrimaryButton: React.FC<{
  children: string;
  onPress?: any;
}> = ({
  //TODO: Get rid of type: any
  children,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.25 }}
    >
      <Text style={styles.primaryButtonText}>{children}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
