import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import CartHeader from '../components/Header/CartHeader';

let screenWidth = Dimensions
  .get('window')
  .width;
export default class Cart extends Component {
  render() {
    let navigate = this.props.navigation
    return (
      <View style={styles.root}>
        <CartHeader></CartHeader>
        <View style={styles.emptyContainer}>
          <Image
            style={styles.emptyIcon}
            source={require('../static/icon-cart-empty.png')}
          />
          <Text style={styles.emptyText}>购物车还是空的</Text>
          <TouchableOpacity
            activeOpacity={1}
            focusedOpacity={1}
            onPress={() => navigate.navigate('Home')}>
            <Text style={styles.emptyButton}>去逛逛</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f6f6f6'
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyIcon: {
    width: 65,
    height: 65
  },
  emptyText: {
    marginTop: 15,
    fontSize: 14,
    color: '#999'
  },
  emptyButton: {
    marginTop: 5,
    paddingVertical: 6,
    paddingHorizontal: 50,
    backgroundColor: '#3cb963',
    color:'#fff',
    fontSize: 14,
    borderRadius: 2
  }
})