import React from "react";
import { FlatList, View, Text } from "react-native";

const ListScreen: React.FC<{ listItems: String[] }> = ({ listItems }) => {
  return (
    <View>
      <FlatList
        data={listItems}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default ListScreen;
