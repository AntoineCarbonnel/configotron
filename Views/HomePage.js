import React, { Component } from "react"
import { Container, Header, Title } from "native-base"
import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../assets/style/HomePageStyle"
import TextRubik from "./components/TextRubik"

export class HomePage extends Component {
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
            COMPOSANTS
          </TextRubik>
          <View style={styles.container}>
            <View style={styles.card}>
              <Image style={styles.cardPic} source={require("../assets/img/cpu.png")} />
              <TextRubik style={styles.cardText}>
                Processeur
              </TextRubik>
              <TouchableOpacity  onPress={() => this.props.navigation.push('ProductsList')}>
                <View style={styles.cardAdd}>
                  <TextRubik style={styles.cardAddText}>
                    +
                  </TextRubik>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Image style={styles.cardPic} source={require("../assets/img/ventirad.png")} />
              <TextRubik style={styles.cardText}>
                Refroidissement
              </TextRubik>
              <View style={styles.cardAdd}>
                <TextRubik style={styles.cardAddText}>
                  +
                </TextRubik>
              </View>
            </View>
            <View style={styles.card}>
              <Image style={styles.cardPic} source={require("../assets/img/motherboard.png")} />
              <TextRubik style={styles.cardText}>
                Carte mère
              </TextRubik>
              <View style={styles.cardAdd}>
                <TextRubik style={styles.cardAddText}>
                  +
                </TextRubik>
              </View>
            </View>
            <View style={styles.card}>
              <Image style={styles.cardPic} source={require("../assets/img/ram.png")} />
              <TextRubik style={styles.cardText}>
                Mémoire vive
              </TextRubik>
              <View style={styles.cardAdd}>
                <TextRubik style={styles.cardAddText}>
                  +
                </TextRubik>
              </View>
            </View>
            <View style={styles.card}>
              <Image style={styles.cardPic} source={require("../assets/img/gpu.png")} />
              <TextRubik style={styles.cardText}>
                Carte Graphique
              </TextRubik>
              <View style={styles.cardAdd}>
                <TextRubik style={styles.cardAddText}>
                  +
                </TextRubik>
              </View>
            </View>
            <View style={styles.card}>
              <Image style={styles.cardPic} source={require("../assets/img/stockage.png")} />
              <TextRubik style={styles.cardText}>
                Stockage
              </TextRubik>
              <View style={styles.cardAdd}>
                <TextRubik style={styles.cardAddText}>
                  +
                </TextRubik>
              </View>
            </View>
            <View style={styles.card}>
              <Image style={styles.cardPic} source={require("../assets/img/case.png")} />
              <TextRubik style={styles.cardText}>
                Boîtier
              </TextRubik>
              <View style={styles.cardAdd}>
                <TextRubik style={styles.cardAddText}>
                  +
                </TextRubik>
              </View>
            </View>
          </View>
        </View>
      </Container>
    )
  }
}
