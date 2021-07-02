import React, { Component } from "react"
import { FlatList, Image, Modal, Pressable, SafeAreaView, TouchableOpacity, View } from "react-native"
import styles from "../../assets/style/ProductsListStyle"
import TextRubik from "./TextRubik"
import Topachat from "../../data/topachat.json"
import Ldlc from "../../data/ldlc.json"
import OtherProduct from "./OtherProduct"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default class Product extends Component {

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

  addProduct = (product) => {
    AsyncStorage.getItem("userChoices")
      .then((value) => this.setState({ userChoices: value }))

    let userChoices = this.state.userChoices
    userChoices[this.props.type] = product
    this.setState({ userChoices: userChoices })

    AsyncStorage.setItem("userChoices", JSON.stringify(this.state.userChoices))
    this.setModalVisible(!this.state.modalVisible)

    this.props.navigation.navigate("Home")
  }

  infoProduct = () => {
    return <View>
      <View style={styles.modalUpperContent}>
        <Image resizeMode={"contain"} style={styles.modalImage} source={{ uri: this.props.product.img }} />
        <TextRubik style={styles.modalPrice}>{this.props.product.price}€</TextRubik>
        <TextRubik style={styles.modalAvailable}>actuellement disponible</TextRubik>
        <Pressable style={styles.modalButton} onPress={() => this.addProduct(this.props.product)}>
          <TextRubik style={styles.modalButtonText}>
            AJOUTER LE PRODUIT
          </TextRubik>
        </Pressable>
        <TextRubik>
          Processeur 8-Core 16-Threads Socket 1151 Cache L3 16 Mo Intel UHD Graphics 630 0.014 micron (version
          boîte sans ventilateur - garantie Intel 3 ans)
        </TextRubik>
      </View>
      <View style={styles.modalLowerContent}>
        <TextRubik style={styles.left}>
          Fabricant :{"\n"}
          modèle :{"\n"}
          taille mémoire :{"\n"}
          nom du core :{"\n"}
          Fournisseur :{"\n"}
          Fréquence en mode Turbo :
        </TextRubik>
        <TextRubik style={styles.right}>
          intel{"\n"}
          BX80684I99900K{"\n"}
          3.6 GHz{"\n"}
          coffee lake{"\n"}
          Topachat{"\n"}
          5 GHz
        </TextRubik>
      </View>
    </View>
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }

  findSimilarProduct = (productName) => {
    let otherPrices
    otherPrices = Topachat[this.props.type].filter(product => product.name === productName)
    otherPrices.push(Ldlc[this.props.type].filter(product => product.name === productName))

    return otherPrices
  }

  displayOtherProducts = (otherProduct) => {
    return <OtherProduct data={otherProduct.item} />
  }

  render() {
    const { modalVisible } = this.state

    return (
      <View style={styles.product}>
        <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
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
        </TouchableOpacity>
        <Modal animationType="slide"
               transparent={true}
               visible={modalVisible}
               onRequestClose={() => {
                 this.setModalVisible(!modalVisible)
               }}
        >
          <View style={styles.modal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <TextRubik style={styles.modalHeaderText}>
                  {this.props.product.long_name}
                </TextRubik>
              </View>
              <SafeAreaView style={styles.modalContent}>
                <FlatList
                  ListHeaderComponent={this.infoProduct}
                  data={this.findSimilarProduct(this.props.product.name)}
                  renderItem={product => this.displayOtherProducts(product)}
                  keyExtractor={product => Topachat[this.props.type].indexOf(product)} />
              </SafeAreaView>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
