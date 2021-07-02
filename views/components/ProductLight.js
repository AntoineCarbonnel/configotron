import React, { Component } from "react"
import { Image, View } from "react-native"
import styles from "../../assets/style/ProductsListStyle"
import TextRubik from "./TextRubik"

export default class ProductLight extends Component {

  state = {
    modalVisible: false,
    userChoices: {
      cpu: {},
      cooling: {},
      cm: {},
      ram: {},
      gpu: {},
      stockage: {},
      boitier: {},
    },
  }

  render() {

    return (
      <View style={styles.product}>
        <View style={styles.productImageContainer}>
          <Image style={styles.productImage} source={{ uri: this.props.product.img }} />
        </View>
        <View>
          <TextRubik style={styles.productPrice}>
            {this.props.product.price}€
          </TextRubik>
        </View>
        <View>
          <TextRubik style={styles.productName}>
            {this.props.children.toUpperCase()}
          </TextRubik>
        </View>
      </View>
    )
  }
}
