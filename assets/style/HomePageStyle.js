import { StyleSheet } from "react-native"

const primaryColor = "#3086DE"

export default StyleSheet.create({
  white: {
    color: "#fff",
  },
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
    color: "#000",
    fontSize: 30,
    fontFamily: "Rubik-SemiBold",
  },
  container: {
    height: '70%',
    justifyContent: 'space-around',
  },
  card: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: {
      width: -5,
      height: -12,
    },
    shadowColor: "#000",
    shadowOpacity: .1,
    backgroundColor: "#fff",
    elevation: 4,
    paddingLeft: 10,
  },

  cardAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    aspectRatio: 1,
    backgroundColor: primaryColor,
  },
  cardAddText: {
    color: '#fff',
    fontFamily: 'Rubik-Medium',
    fontSize: 48,
  }
})
