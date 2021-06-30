import { StyleSheet } from "react-native"

const primaryColor = "#3086DE"

export default StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginLeft: 10,
    color: "#000",
    fontFamily: "Rubik-Bold",
  },
  body: {
    flex: 1,
    marginHorizontal: 50,
  },
  bodyTitle: {
    textAlign: "center",
    marginLeft: 10,
    marginVertical: 30,
    color: "#3086DE",
    fontSize: 30,
    fontFamily: "Rubik-SemiBold",
  },
  product: {},
})
