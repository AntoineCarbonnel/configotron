import React, { Component } from "react"
import { Container, Header, Title } from "native-base"
import { Image, Text, View } from "react-native"
import styles from "../assets/style/HomePageStyle"
import TextRubik from "./components/TextRubik"

export class ProductsList extends Component {
  render() {
    return (
      <Container >
        <TextRubik>
          Ceci est une productList
        </TextRubik>
      </Container>
    )
  }
}
