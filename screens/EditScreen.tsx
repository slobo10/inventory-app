import React from "react";
import { View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const EditScreen: React.FC<{
  editingObject: String;
  onReturnToMainScreen: () => void;
}> = ({ editingObject, onReturnToMainScreen }) => {
  return (
    <View>
      <Text>Editing Item: {editingObject}</Text>
      <PrimaryButton onPress={onReturnToMainScreen}>
        Return to list.
      </PrimaryButton>
    </View>
  );
};

export default EditScreen;
