import React, { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import ListScreen from "./screens/ListScreen";
import styles from "./constants/styles";

const App: React.FC = () => {
  const [listItems, setListItems]: [String[], any] = useState([
    "Item1",
    "Item2",
  ]);

  return (
    <View style={styles.rootContainer}>
      <ListScreen listItems={listItems} />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
