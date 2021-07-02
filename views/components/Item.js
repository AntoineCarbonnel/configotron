import React, { Component } from "react"
import { Image, TouchableOpacity, View } from "react-native"
import styles from "../../assets/style/HomePageStyle"
import TextRubik from "./TextRubik"

export default class Item extends Component {

  render() {
    return (
      <View style={styles.card}>
        <Image source={this.props.img} />
        <TextRubik>
          {this.props.children}
        </TextRubik>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductsList", { type: this.props.type })}>
          <View style={styles.cardAdd}>
            <TextRubik style={styles.cardAddText}>
              +
            </TextRubik>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
