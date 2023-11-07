import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "../constants/styles";

const ListScreen: React.FC<{ listItems: String[] }> = ({ listItems }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={listItems}
        renderItem={({ item }) => <Text style={styles.listText}>{item}</Text>}
      />
    </View>
  );
};

export default ListScreen;
