import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "../constants/styles";
import PrimaryButton from "../components/PrimaryButton";

const ListScreen: React.FC<{ listItems: String[] }> = ({ listItems }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={listItems}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Text style={styles.listItemText}>{item}</Text>
            <PrimaryButton>Edit</PrimaryButton>
          </View>
        )}
      />
    </View>
  );
};

export default ListScreen;
