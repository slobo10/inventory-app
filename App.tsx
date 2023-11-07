import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ListScreen from "./screens/ListScreen";

const App: React.FC = () => {
  const [listItems, setListItems]: [String[], any] = useState([
    "Item1",
    "Item2",
  ]);

  return (
    <View style={styles.container}>
      <ListScreen listItems={listItems} />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 100,
    fontWeight: "bold",
  },
});
