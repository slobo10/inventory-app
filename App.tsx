import React, { useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import ListScreen from "./screens/ListScreen";
import styles from "./constants/styles";
import EditScreen from "./screens/EditScreen";

const App: React.FC = () => {
  const [listItems, setListItems]: [string[], Function] = useState([
    "Dog",
    "Another Dog",
    "Super Unexpected Thing: Anotherother Dog",
  ]);

  const [currentScreenState, setCurrentScreen]: [number, Function] =
    useState(0);

  const [currentEditingObject, setCurrentEditingObject]: [
    number | undefined,
    Function
  ] = useState(undefined);

  var currentScreen: React.JSX.Element | undefined = undefined;

  switch (currentScreenState) {
    case 0: {
      currentScreen = (
        <ListScreen
          listItems={listItems}
          onEditMode={(editingObject: number) => {
            setCurrentScreen(1);
            setCurrentEditingObject(editingObject);
          }}
        />
      );
      break;
    }
    case 1: {
      currentScreen = (
        <EditScreen
          listItems={listItems}
          setListItems={setListItems}
          editIndex={currentEditingObject}
          onReturnToMainScreen={() => {
            setCurrentScreen(0);
          }}
        />
      );
      break;
    }
    default: {
      currentScreen = <Text>Something went wrong</Text>;
      break;
    }
  }

  return (
    <View style={styles.rootContainer}>
      {currentScreen}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
