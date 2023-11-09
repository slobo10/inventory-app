import React from "react";
import { View } from "react-native";
import styles from "../constants/styles";

const HorizontalView: React.FC<{
  children: React.JSX.Element[] | React.JSX.Element;
  style?: {};
}> = ({ children, style }) => {
  return <View style={[styles.horizontalContainer, style]}>{children}</View>;
};

export default HorizontalView;
