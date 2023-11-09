import React, { useState } from "react";
import { View, TextInput } from "react-native";
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

  return (
    <View style={styles.subRootContainer}>
      <TextInput
        style={styles.textInput}
        value={tempItemValue}
        onChangeText={(textValue: string) => {
          setTempItemValue(textValue);
        }}
      />
      <HorizontalView>
        <PrimaryButton style={{ flex: 1 }} onPress={onReturnToMainScreen}>
          Cancel
        </PrimaryButton>
        <PrimaryButton
          active={
            tempItemValue != listItems[editIndex] && tempItemValue.length > 0
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
    </View>
  );
};

export default EditScreen;
