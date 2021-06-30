import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

class TextRubik extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text style={[styles.font, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "Rubik-Regular"
  },
});

export default TextRubik;
