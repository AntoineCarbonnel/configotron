import React, { Component } from "react"
import { StyleSheet, Text } from "react-native"

class TextRubik extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Text style={[styles.font, this.props.style]}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "Rubik-Regular",
    color: "#374D65",
  },
})

export default TextRubik
