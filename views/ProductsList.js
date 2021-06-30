import React, { Component } from "react"
import { Container, Header, Title, View } from "native-base"
import styles from "../assets/style/HomePageStyle"
import TextRubik from "./components/TextRubik"
import { FlatList, Image } from "react-native"
import Topachat from "../data/topachat.json"
import Product from "./components/Product"

export class ProductsList extends Component {

  productsList(product) {
    return (
      <Product img={product.img} price={product.price}>
        {product.name}
      </Product>
    )
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/img/Logo.png")} />
            <Title style={styles.title}>Configotron</Title>
          </View>
        </Header>
        <View style={styles.body}>
          <TextRubik style={styles.bodyTitle}>
            {this.props.route.params.type.name.toUpperCase()}
          </TextRubik>
          <FlatList data={Topachat[this.props.route.params.type.short]}
                    renderItem={product => this.productsList(product.item)} keyExtractor={ product => Topachat[this.props.route.params.type.short].indexOf(product)}>
          </FlatList>
        </View>
      </Container>
    )
  }
}
