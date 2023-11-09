import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  subRootContainer: {
    width: "95%",
  },
  listItemContainer: {
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
  warningText: {
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "red",
    borderRadius: 10,
  },
  primaryButtonText: {
    fontSize: 30,
    backgroundColor: "darkgrey",
    borderRadius: 10,
    margin: 5,
    padding: 5,
    textAlign: "center",
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
});

export default styles;
