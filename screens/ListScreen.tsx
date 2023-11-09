import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "../constants/styles";
import PrimaryButton from "../components/PrimaryButton";
import HorizontalView from "../components/HorizontalView";

const ListScreen: React.FC<{
  listItems: string[];
  onEditMode: (editingObject: number) => void;
}> = ({ listItems, onEditMode }) => {
  return (
    <View style={styles.subRootContainer}>
      <FlatList
        data={listItems}
        renderItem={({ item, index }) => (
          <HorizontalView style={styles.listItemContainer}>
            <Text style={styles.listItemText}>{item}</Text>
            <PrimaryButton onPress={onEditMode.bind(this, index)}>
              Edit
            </PrimaryButton>
          </HorizontalView>
        )}
      />
    </View>
  );
};

export default ListScreen;
