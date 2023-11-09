import React from "react";
import { View } from "react-native";
import styles from "../constants/styles";

const HorizontalView: React.FC<{ children: any; style?: any }> = ({
  children,
  style,
}) => {
  return <View style={[styles.horizontalContainer, style]}>{children}</View>;
};

export default HorizontalView;
