import React, { Component } from "react"
import { Container, Header, Title } from "native-base"
import { Image, View } from "react-native"
import styles from "../assets/style/HomePageStyle"
import TextRubik from "./components/TextRubik"
import Item from "./components/Item"

export class HomePage extends Component {
  render() {
    const cpu = {
      name: "processeur",
      short: "cpu"
    }
    const cooling = {
      name: "refroidissement",
      short: "cooling"
    }
    const cm = {
      name: "carte mère",
      short: "cm"
    }
    const ram = {
      name: "Mémoire vive",
      short: "ram",
    }
    const gpu = {
      name: "Carte graphique",
      short: "gpu"
    }
    const stockage = {
      name: "Stockage",
      short: "stockage"
    }
    const boitier = {
      name: "Boîtier",
      short: "case"
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
          <View style={styles.container}>
            <Item navigation={this.props.navigation} img={require("../assets/img/cpu.png")} type={cpu}>
              Processeur
            </Item>
            <Item navigation={this.props.navigation} img={require("../assets/img/ventirad.png")} type={cooling}>
              Refroidissement
            </Item>
            <Item navigation={this.props.navigation} img={require("../assets/img/motherboard.png")} type={cm}>
              Carte mère
            </Item>
            <Item navigation={this.props.navigation} img={require("../assets/img/ram.png")} type={ram}>
              Mémoire vive
            </Item>
            <Item navigation={this.props.navigation} img={require("../assets/img/gpu.png")} type={gpu}>
              Carte Graphique
            </Item>
            <Item navigation={this.props.navigation} img={require("../assets/img/stockage.png")} type={stockage}>
              Stockage
            </Item>
            <Item navigation={this.props.navigation} img={require("../assets/img/case.png")} type={boitier}>
              Boîtier
            </Item>
          </View>
        </View>
      </Container>
    )
  }
}
