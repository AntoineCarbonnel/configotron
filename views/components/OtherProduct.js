import React, { Component } from "react"
import { Pressable, StyleSheet } from "react-native"
import { Container } from "native-base"
import TextRubik from "./TextRubik"

export default class OtherProduct extends Component {

  render() {
    if (!this.props.data.name) {
      return false
    }

    return (
      <Container style={style.container}>
        <TextRubik style={style.name}>
          {this.props.data.long_name}
        </TextRubik>
        <TextRubik style={style.price}>
          {this.props.data.price}€
        </TextRubik>
        <Pressable style={style.button} onPress={() => this.props.addProduct()}>
          <TextRubik style={style.buttonText}>
            AJOUTER
          </TextRubik>
        </Pressable>
      </Container>
    )
  }
}


const primaryColor = "#3086DE"

const style = StyleSheet.create({
  container: {
    height: 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "space-around",
    backgroundColor: "white",
    elevation: 2,
  },
  name: {},
  price: {
    fontWeight: "bold",
    color: primaryColor,
  },
  button: {
    backgroundColor: primaryColor,
    borderRadius: 5,
  },
  buttonText: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "white"
  },

})
