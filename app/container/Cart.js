import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation';

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.block}>
          <View style={styles.item}></View>
          <View style={styles.item}></View>
          <View style={styles.item}></View>
          <View style={styles.item}></View>
        </View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  block: {
    // flex: 1,
    flexDirection:'row',
    marginBottom: 10,
    justifyContent:'space-between',
    height: 100,
    backgroundColor: '#fff'
  },
  item: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1
  }
})