import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import ListScreen from "./screens/ListScreen";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ListScreen />
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
