import React, { Component } from "react"
import { Image, TouchableOpacity, View } from "react-native"
import styles from "../../assets/style/ProductsListStyle"
import TextRubik from "./TextRubik"

export default class Product extends Component {

  render() {
    return (
      <View style={styles.product}>
        <TouchableOpacity>
          <Image source={this.props.img} />
          <View>
            <TextRubik>
              {this.props.children}
            </TextRubik>
          </View>
          <View>
            <TextRubik>
              {this.props.price}
            </TextRubik>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
