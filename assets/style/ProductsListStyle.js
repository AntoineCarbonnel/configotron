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
  product: {
    borderRadius: 5,
    borderColor: primaryColor,
    borderWidth: 4,
    marginBottom: 10,
  },
  productImage: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  productImageContainer: {
    flex: 1,
    alignItems: "center",
    height: 100,
  },
  productPrice: {
    paddingHorizontal: 10,
    textAlign: "right",
    fontFamily: "Rubik-Bold",
    fontSize: 20,
    color: primaryColor,
  },
  productName: {
    textAlign: "center",
    backgroundColor: primaryColor,
    color: "white",
    paddingVertical: 15,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(48, 134, 222, .7)",
  },
  modalContainer: {
    flex: 1,
    width: "90%",
    marginVertical: 40,
  },
  modalHeader: {
    backgroundColor: primaryColor,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalHeaderText: {
    fontFamily: "Rubik-Bold",
    textAlign: "center",
    color: "white",
  },
  modalContent: {
    flex: 1,
    height: "100%",
    marginHorizontal: 10,
    backgroundColor: "white",
  },
  modalUpperContent: {
    flex: 3,
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  modalImage: {
    flex: 1,
    height: 200,
    width: '100%',
    resizeMode: "contain",
  },
  modalPrice: {
    fontWeight: "bold",
    fontSize: 35,
    marginVertical: 5,
  },
  modalAvailable: {
    fontFamily: "Rubik-Medium",
    color: primaryColor,
  },
  modalLowerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  modalButton: {
    marginVertical: 30,
    paddingVertical: 10,
    width: "100%",
    backgroundColor: "#6AE1EF",
  },
  modalButtonText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  left: {
    fontWeight: "bold",
  },
  right: {
    textAlign: "right",
    fontWeight: "bold",
  },
})
