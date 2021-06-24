import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    width: 150,
    marginRight: 10,
  },
  "container:first-child": {
    margin: 20,
  },
  image: {
    width: "100%",
    height: 150,
  },
  text: {
    fontSize: 13,
    color: "#979797",
    marginTop: 10,
  },
});

export default styles;
