import React, { useState } from "react";
import { View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const EditScreen: React.FC<{
  listItems: string[];
  setListItems: Function;
  editIndex: number;
  onReturnToMainScreen: () => void;
}> = ({ listItems, setListItems, editIndex, onReturnToMainScreen }) => {
  const [tempItemValue, setTempItemValue] = useState(listItems[editIndex]);
  return (
    <View>
      <TextInput
        value={tempItemValue}
        onChangeText={(textValue: string) => {
          setTempItemValue(textValue);
        }}
      />
      <PrimaryButton
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
      <PrimaryButton onPress={onReturnToMainScreen}>Cancel</PrimaryButton>
    </View>
  );
};

export default EditScreen;
