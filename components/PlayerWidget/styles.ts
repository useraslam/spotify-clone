import { StyleSheet } from "react-native";
import { Dimensions, StatusBar } from "react-native";

const statusBarHeght: any = StatusBar.currentHeight;

const screenHeight = Dimensions.get("screen").height;
const windowHeight = Dimensions.get("window").height;
const navbarHeight = screenHeight - windowHeight + statusBarHeght;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: navbarHeight / 2,
    backgroundColor: "#141414",
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "#242424",
    borderTopWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-around",
    marginLeft: 10,
    paddingVertical: 2,
  },

  title: {
    color: "white",
    fontSize: 16,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  artist: {
    color: "#979797",
    fontSize: 12,
  },
  dots: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
