import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TabNavigator} from 'react-navigation';
let screenWidth = Dimensions
  .get('window')
  .width;
export default class Cart extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.slide}
          source={{
          uri: 'https://ddimg.ddxq.mobi/5c2b5ec47056b1493116406706.png'
        }}/>
        <Image
          style={{
          width: 370,
          height: 370
        }}
          source={{
          uri: 'https://ddimg.ddxq.mobi/f620821a500761497432658650.jpg'
        }}/>
        <Image
          style={styles.slide}
          source={{
          uri: 'https://ddimg.ddxq.mobi/6e72873a765b11497432677615.jpg'
        }}/>
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
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: '#fff'
  },
  item: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1
  },
  slide: {
    width: 370,
    height: 370
  }
})