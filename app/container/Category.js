import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchHeader from '../components/Header/SearchHeader';
import BottomIndicator from '../components/BottomIndicator';
let screenWidth = Dimensions
  .get('window')
  .width;
export default class Category extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() { }
  render() {
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
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.item}>
                <Image
                  resizeMethod="resize"
                  style={styles.itemAvatar}
                  source={{
                    uri: 'https://ddimg.ddxq.mobi/e85cecad1501807580770.jpg!maicai.product.list'
                  }} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle} numberOfLines={2}>三红胡萝卜 350-500g三红胡萝卜 350-500g三红胡萝卜 350-500g三红胡萝卜 350-500g</Text>
                  <Text style={styles.itemSubTitle} numberOfLines={1}>红皮红肉红心 胡萝卜精品哦~</Text>
                  <View style={styles.itemAction}>
                    <Text style={styles.itemPrice}>￥2.9</Text>
                    <Icon style={styles.itemCart} name="shopping-cart" />
                  </View>
                </View>
              </View>
              <View style={styles.item}>
                <Image
                  resizeMethod="resize"
                  style={styles.itemAvatar}
                  source={{
                    uri: 'https://ddimg.ddxq.mobi/303c20d81502967140780.jpg!maicai.product.list'
                  }} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle} numberOfLines={2}>铁棍山药 360g</Text>
                  <Text style={styles.itemSubTitle} numberOfLines={1}>口感干面香甜 适合蒸食煲汤做粥</Text>
                  <View style={styles.itemAction}>
                    <Text style={styles.itemPrice}>￥2.9</Text>
                    <Icon style={styles.itemCart} name="shopping-cart" />
                  </View>
                </View>
              </View>
              <View style={styles.item}>
                <Image
                  resizeMethod="resize"
                  style={styles.itemAvatar}
                  source={{
                    uri: 'https://ddimg.ddxq.mobi/e67b81bd514b61495449652429.jpg!maicai.product.list'
                  }} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle} numberOfLines={2}>荷兰豆 300g</Text>
                  <Text style={styles.itemSubTitle} numberOfLines={1}>我就喜欢装嫩 你说怎么办哟</Text>
                  <View style={styles.itemAction}>
                    <Text style={styles.itemPrice}>￥2.9</Text>
                    <Icon style={styles.itemCart} name="shopping-cart" />
                  </View>
                </View>
              </View>
              <View style={styles.item}>
                <Image
                  resizeMethod="resize"
                  style={styles.itemAvatar}
                  source={{
                    uri: 'https://ddimg.ddxq.mobi/bc18a3242d2ba1497232266143.jpg!maicai.product.list'
                  }} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle} numberOfLines={2}>红米苋 300g</Text>
                  <Text style={styles.itemSubTitle} numberOfLines={1}>我的外号叫“长寿菜”！</Text>
                  <View style={styles.itemAction}>
                    <Text style={styles.itemPrice}>￥2.9</Text>
                    <Icon style={styles.itemCart} name="shopping-cart" />
                  </View>
                </View>
              </View>
              <View style={styles.item}>
                <Image
                  resizeMethod="resize"
                  style={styles.itemAvatar}
                  source={{
                    uri: 'https://ddimg.ddxq.mobi/303c20d81502967140780.jpg!maicai.product.list'
                  }} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle} numberOfLines={2}>铁棍山药 360g</Text>
                  <Text style={styles.itemSubTitle} numberOfLines={1}>口感干面香甜 适合蒸食煲汤做粥</Text>
                  <View style={styles.itemAction}>
                    <Text style={styles.itemPrice}>￥2.9</Text>
                    <Icon style={styles.itemCart} name="shopping-cart" />
                  </View>
                </View>
              </View>
              <View style={styles.item}>
                <Image
                  resizeMethod="resize"
                  style={styles.itemAvatar}
                  source={{
                    uri: 'https://ddimg.ddxq.mobi/303c20d81502967140780.jpg!maicai.product.list'
                  }} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle} numberOfLines={2}>铁棍山药 360g</Text>
                  <Text style={styles.itemSubTitle} numberOfLines={1}>口感干面香甜 适合蒸食煲汤做粥</Text>
                  <View style={styles.itemAction}>
                    <Text style={styles.itemPrice}>￥2.9</Text>
                    <Icon style={styles.itemCart} name="shopping-cart" />
                  </View>
                </View>
              </View>
              <View style={styles.item}>
                <Image
                  resizeMethod="resize"
                  style={styles.itemAvatar}
                  source={{
                    uri: 'https://ddimg.ddxq.mobi/303c20d81502967140780.jpg!maicai.product.list'
                  }} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle} numberOfLines={2}>铁棍山药 360g</Text>
                  <Text style={styles.itemSubTitle} numberOfLines={1}>口感干面香甜 适合蒸食煲汤做粥</Text>
                  <View style={styles.itemAction}>
                    <Text style={styles.itemPrice}>￥2.9</Text>
                    <Icon style={styles.itemCart} name="shopping-cart" />
                  </View>
                </View>
              </View>
              <BottomIndicator></BottomIndicator>
            </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'flex-start',
   
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
    flex: 1,
    paddingLeft: 10,
    marginBottom: 48
  },
  item: {
    paddingVertical: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  itemAvatar: {
    marginRight: 10,
    width: 65,
    height: 65
  },
  itemContent: {
    flex: 1
  },
  itemTitle: {
    fontSize: 16,
    color: '#333',
  },
  itemSubTitle: {
    marginTop: 2,
    fontSize: 12,
    color: "#999"
  },
  itemAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },
  itemPrice: {
    fontSize: 16,
    color: '#f95824'
  },
  itemCart: {
    paddingTop: 6,
    fontSize: 14,
    width: 24,
    height: 24,
    color: '#2eb257',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#eee',
    textAlign: 'center'
  }
})