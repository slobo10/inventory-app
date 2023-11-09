import React, { useState } from "react";
import { Platform, View, TextInput, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import HorizontalView from "../components/HorizontalView";
import styles from "../constants/styles";

const EditScreen: React.FC<{
  listItems: string[];
  setListItems: Function;
  editIndex: number;
  onReturnToMainScreen: () => void;
}> = ({ listItems, setListItems, editIndex, onReturnToMainScreen }) => {
  const [tempItemValue, setTempItemValue]: [string, Function] = useState(
    listItems[editIndex]
  );

  const [subScreenState, setSubScreenState]: [number, Function] = useState(0);

  var currentSubScreen: React.JSX.Element | undefined = undefined;

  switch (subScreenState) {
    case 0: {
      currentSubScreen = (
        <>
          <TextInput
            style={styles.textInput}
            value={tempItemValue}
            onChangeText={(textValue: string) => {
              setTempItemValue(textValue);
            }}
            onKeyPress={({ key }: any) => {
              console.log(key);
              if (
                key === "Enter" &&
                tempItemValue != listItems[editIndex] &&
                tempItemValue.trim().length > 0
              ) {
                setListItems((oldItems: string[]) => [
                  ...oldItems.slice(0, editIndex),
                  tempItemValue,
                  ...oldItems.slice(editIndex + 1),
                ]);
                onReturnToMainScreen();
              }
            }}
          />
          <HorizontalView>
            <PrimaryButton
              style={{ flex: 1 }}
              onPress={() => {
                if (listItems[editIndex].length == 0) {
                  setListItems((oldItems: string[]) => [
                    ...oldItems.slice(0, editIndex),
                  ]);
                }
                onReturnToMainScreen();
              }}
            >
              Cancel
            </PrimaryButton>
            <PrimaryButton
              active={
                tempItemValue != listItems[editIndex] &&
                tempItemValue.trim().length > 0
              }
              style={{ flex: 1 }}
              onPress={() => {
                setListItems((oldItems: string[]) => [
                  ...oldItems.slice(0, editIndex),
                  tempItemValue,
                  ...oldItems.slice(editIndex + 1),
                ]);
                onReturnToMainScreen();
              }}
            >
              Apply
            </PrimaryButton>
          </HorizontalView>
          <HorizontalView>
            {listItems[editIndex].length > 0 && (
              <PrimaryButton
                style={{ flex: 1 / 2, paddingTop: 10 }}
                textStyle={{ backgroundColor: "red" }}
                onPress={() => {
                  if (Platform.OS == "ios") {
                    Alert.alert(
                      "CONFIRM DELETE!",
                      "Are you sure you want to delete " +
                        listItems[editIndex] +
                        "? This regrettable action cannot be undone!",
                      [
                        {
                          text: "Yes. I'm sure.",
                          onPress: () => {
                            setListItems((oldItems: string[]) => [
                              ...oldItems.slice(0, editIndex),
                              ...oldItems.slice(editIndex + 1),
                            ]);
                            onReturnToMainScreen();
                          },
                          style: "destructive",
                        },
                        { text: "NOOO!", style: "cancel" },
                      ]
                    );
                  } else {
                    setSubScreenState(1);
                  }
                }}
              >
                Delete
              </PrimaryButton>
            )}
          </HorizontalView>
        </>
      );
      break;
    }
    case 1: {
      currentSubScreen = (
        <>
          <Text style={styles.warningText}>
            Are you sure you want to delete "{listItems[editIndex]}"? This
            cannot be undone!
          </Text>
          <HorizontalView>
            <PrimaryButton
              onPress={() => {
                setSubScreenState(0);
              }}
              style={{ flex: 1 }}
              textStyle={{ backgroundColor: "blue" }}
            >
              No
            </PrimaryButton>
            <PrimaryButton
              onPress={() => {
                setListItems((oldItems: string[]) => [
                  ...oldItems.slice(0, editIndex),
                  ...oldItems.slice(editIndex + 1),
                ]);
                onReturnToMainScreen();
              }}
              style={{ flex: 1 }}
              textStyle={{ backgroundColor: "red" }}
            >
              Yes
            </PrimaryButton>
          </HorizontalView>
        </>
      );
      break;
    }
    default: {
      currentSubScreen = <Text>Something went wrong</Text>;
    }
  }

  return <View style={styles.subRootContainer}>{currentSubScreen}</View>;
};

export default EditScreen;
