import React from "react";
import { View } from "react-native";
import styles from "../constants/styles";

const HorizontalView: React.FC<{ children: any }> = ({ children }) => {
  return <View style={styles.horizontalContainer}>{children}</View>;
};

export default HorizontalView;
