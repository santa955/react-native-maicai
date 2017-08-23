import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchHeader from '../components/Header/SearchHeader';
let screenWidth = Dimensions
  .get('window')
  .width;
export default class Category extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount () { }
  render () {
    return (
      <View style={styles.root}>
        <SearchHeader></SearchHeader>
        <View style={styles.wrapper}>
          <View style={styles.menuContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.menu}>
                <Text style={styles.menuText}>安心蔬菜</Text>
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuText}>豆制品</Text>
              </View>
              <View style={[styles.menu, styles.menuActive]}>
                <Text style={styles.menuText}>新鲜水果</Text>
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuText}>肉禽类</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.item}>
              <Image
                resizeMethod="resize"
                style={styles.itemAvatar}
                source={{ url: 'https://ddimg.ddxq.mobi/59884c358deb1502974199155.jpg!maicai.product.list' }}
              />
              <View>
                <Text style={styles.itemTitle}>肉禽类</Text>
                <Text style={styles.itemSubTitle}>肉禽类</Text>
                <View style={styles.itemAction}>
                  <Text style={styles.itemPrice}>肉禽类</Text>
                  <Icon style={styles.itemCart} name="shopping-cart" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },
  wrapper: {
    flexDirection: 'row'
  },
  menuContainer: {
    backgroundColor: '#f4f4f4',
  },
  menu: {
    maxWidth: 100,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#e8e9e8'
  },
  menuActive: {
    backgroundColor: '#fff'
  },
  menuText: {
    color: '#666',
    fontSize: 14
  },
  listContainer: {
    backgroundColor: '#fff',
    flex: 1
  }
})