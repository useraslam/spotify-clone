import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
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
    color: "#979797",
    fontSize: 16,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  lyrics: {
    color: "white",
    fontSize: 16,
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
