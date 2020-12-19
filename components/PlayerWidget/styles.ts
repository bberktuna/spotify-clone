import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 49,
    backgroundColor: "#131313",
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    height: 60,
    justifyContent: "center",
  },
  progress: {
    height: 3,
    backgroundColor: "#bcbcbc",
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  artist: {
    color: "lightgray",
    fontSize: 18,
  },
});

export default styles;
