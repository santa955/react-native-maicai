import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
let screenWidth = Dimensions
  .get('window')
  .width;

export default class ScrollList extends Component {
  constructor() {
    super()
  }

  render () {
    let products = this.props.products
    let cards = products.map((product) => {
      return (
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: product.small_image
            }} />
          <Text style={styles.cardDesc}>{product.product_name}</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>{product.price}</Text>
            <Icon style={styles.cart} name="shopping-cart" />
          </View>
        </View>
      )
    })
    return (
      <ScrollView
        contentContainerStyle={styles.cardList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {cards}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  cardList: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  card: {
    justifyContent: 'flex-start',
    marginLeft: 15,
    width: 100
  },
  cardImage: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    resizeMode: 'center',
    backgroundColor: '#efefef'
  },
  cardDesc: {
    marginTop: 5,
    fontSize: 12,
    height: 32,
    // borderWidth: 1
  },
  cardMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 16,
    color: '#f95824'
  },
  cart: {
    paddingTop: 4,
    fontSize: 16,
    width: 24,
    height: 24,
    color: '#2eb257',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#eee',
    textAlign: 'center'
  }
})