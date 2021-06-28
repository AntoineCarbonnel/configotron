import React, { Component } from "react"
import { Container } from "native-base"
import TextRubik from "./components/TextRubik"

export class ProductsList extends Component {

  componentDidMount() {
    const products = [
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
      {
        name: "Intel i9",
        long_name: "Intel i9 8600-k",
        brand: "Topachat",
        release_date: "20-10-2019",
        options:{
          chipset: "X18"
        },
        price: "349"
      },
    ]
  }


  render() {
    return (
      <Container>
        <TextRubik>

        </TextRubik>
      </Container>
    )
  }
}
