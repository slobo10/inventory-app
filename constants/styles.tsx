import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: "95%",
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    marginBottom: 10,
    borderRadius: 10,
  },
  listItemText: {
    flex: 1,
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: "5%",
  },
  primaryButtonText: {
    flex: 1,
    fontSize: 30,
    backgroundColor: "darkgrey",
    borderRadius: 10,
    margin: 5,
    padding: 5,
    textAlign: "center",
  },
});

export default styles;
