import React, { Component } from "react"
import { Container, Header, Title } from "native-base"
import { Image, ScrollView, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "../assets/style/HomePageStyle"
import TextRubik from "./components/TextRubik"
import Item from "./components/Item"
import SplashScreen from "react-native-splash-screen"
import ProductLight from "./components/ProductLight"

export class HomePage extends Component {

  state = {
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

  componentDidMount() {
    AsyncStorage.getItem("userChoices")
      .then((value) => this.setState({ userChoices: JSON.parse(value) }))
    SplashScreen.hide()
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
    AsyncStorage.getItem("userChoices")
      .then((value) => this.setState({ userChoices: JSON.parse(value) }))
  }

  render() {
    const cpu = {
      name: "processeur",
      short: "cpu",
    }
    const cooling = {
      name: "refroidissement",
      short: "cooling",
    }
    const cm = {
      name: "carte mère",
      short: "cm",
    }
    const ram = {
      name: "Mémoire vive",
      short: "ram",
    }
    const gpu = {
      name: "Carte graphique",
      short: "gpu",
    }
    const stockage = {
      name: "Stockage",
      short: "stockage",
    }
    const boitier = {
      name: "Boîtier",
      short: "boitier",
    }

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
            COMPOSANTS
          </TextRubik>
          <ScrollView contentContainerStyle={styles.container}>
            <Item navigation={this.props.navigation} img={require("../assets/img/cpu.png")} type={cpu}>
              Processeur
            </Item>
            {Object.keys(this.state.userChoices.cpu).length !== 0 ?
              <ProductLight navigation={this.props.navigation} product={this.state.userChoices.cpu} type={cpu.short}>
                {this.state.userChoices.cpu.long_name}
              </ProductLight> : false}

            <Item navigation={this.props.navigation} img={require("../assets/img/ventirad.png")} type={cooling}>
              Refroidissement
            </Item>
            {Object.keys(this.state.userChoices.cooling).length !== 0 ?
              <ProductLight navigation={this.props.navigation} product={this.state.userChoices.cooling} type={cooling.short}>
                {this.state.userChoices.cooling.long_name}
              </ProductLight> : false}

            <Item navigation={this.props.navigation} img={require("../assets/img/motherboard.png")} type={cm}>
              Carte mère
            </Item>
            {Object.keys(this.state.userChoices.cm).length !== 0 ?
              <ProductLight navigation={this.props.navigation} product={this.state.userChoices.cm} type={cm.short}>
                {this.state.userChoices.cm.long_name}
              </ProductLight> : false}

            <Item navigation={this.props.navigation} img={require("../assets/img/ram.png")} type={ram}>
              Mémoire vive
            </Item>
            {Object.keys(this.state.userChoices.ram).length !== 0 ?
              <ProductLight navigation={this.props.navigation} product={this.state.userChoices.ram} type={ram.short}>
                {this.state.userChoices.ram.long_name}
              </ProductLight> : false}

            <Item navigation={this.props.navigation} img={require("../assets/img/gpu.png")} type={gpu}>
              Carte Graphique
            </Item>
            {Object.keys(this.state.userChoices.gpu).length !== 0 ?
              <ProductLight navigation={this.props.navigation} product={this.state.userChoices.gpu} type={gpu.short}>
                {this.state.userChoices.gpu.long_name}
              </ProductLight> : false}

            <Item navigation={this.props.navigation} img={require("../assets/img/stockage.png")} type={stockage}>
              Stockage
            </Item>
            {Object.keys(this.state.userChoices.stockage).length !== 0 ?
              <ProductLight navigation={this.props.navigation} product={this.state.userChoices.stockage} type={stockage.short}>
                {this.state.userChoices.stockage.long_name}
              </ProductLight> : false}

            <Item navigation={this.props.navigation} img={require("../assets/img/case.png")} type={boitier}>
              Boîtier
            </Item>
            {Object.keys(this.state.userChoices.boitier).length !== 0 ?
              <ProductLight navigation={this.props.navigation} product={this.state.userChoices.boitier} type={boitier.short}>
                {this.state.userChoices.boitier.long_name}
              </ProductLight> : false}
          </ScrollView>
        </View>
      </Container>
    )
  }
}
