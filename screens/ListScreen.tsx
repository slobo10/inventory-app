import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "../constants/styles";
import PrimaryButton from "../components/PrimaryButton";

const ListScreen: React.FC<{
  listItems: string[];
  onEditMode: (editingObject: number) => void;
}> = ({ listItems, onEditMode }) => {
  return (
    <View style={styles.subRootContainer}>
      <FlatList
        data={listItems}
        renderItem={({ item, index }) => (
          <View style={styles.listItemContainer}>
            <Text style={styles.listItemText}>{item}</Text>
            <PrimaryButton onPress={onEditMode.bind(this, index)}>
              Edit
            </PrimaryButton>
          </View>
        )}
      />
    </View>
  );
};

export default ListScreen;
