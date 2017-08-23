import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-looped-carousel';
import SearchHeader from '../components/Header/SearchHeader';
import Block from '../components/Block';
import ScrollList from '../components/ScrollList';
import BottomIndicator from '../components/BottomIndicator';
import BlocksData from '../mock/Home';

console.log(BlocksData)

let screenWidth = Dimensions
  .get('window')
  .width;
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      size: {
        width: screenWidth,
        height: screenWidth / 2
      }
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <SearchHeader></SearchHeader>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            {this.renderSlides(BlocksData.list[0].icon_list)}
          </View>
          <View style={styles.banner}>
            <Image
              resizeMethod="resize"
              style={styles.banner}
              source={{
                uri: 'https://ddimg.ddxq.mobi/bc27ddc54e92b1497233676444.png'
              }} />
          </View>
          {this.renderMenus(BlocksData.list[2].icon_list)}

          {this.renderBlocks(BlocksData.list)}
          <BottomIndicator show="true"></BottomIndicator>
        </ScrollView>
      </View>
    )
  }
  renderSlides(data) {
    let slides = data.map((slide) => {
      return (
        <Image
          key={slide.meteria_id}
          style={styles.slide}
          source={{ uri: slide.icon_url }}
        />
      )
    })
    return (<Carousel
      style={this.state.size}
      delay={3000}
      autoplay
      bullets
      bulletStyle={{
        margin: 5,
        width: 6,
        height: 6,
        backgroundColor: '#ccc',
        borderColor: '#ccc'
      }}
      chosenBulletStyle={{
        margin: 5,
        width: 6,
        height: 6,
        backgroundColor: '#3cb963',
        borderColor: '#3cb963'
      }}
      bulletsContainerStyle={{
        bottom: -10
      }}>
      {slides}
    </Carousel>);
  }
  renderMenus(data) {
    let navigate = this.props.navigation
    let menus = data.map((menu) => {
      return (
        <TouchableOpacity
          key={menu['meteria_id']}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => navigate.navigate('Category')}>
        <View style={styles.menu}>
          <Image
            resizeMethod="resize"
            style={styles.menuImage}
            source={{
              uri: menu.icon_url
            }} />
          <Text style={styles.menuText}>{menu.name}</Text>
        </View>
        </TouchableOpacity>
      )
    })

    return (
      <View style={styles.menus}>
        {menus}
      </View>
    )
  }
  renderBlocks(data) {
    let navigation = this.props.navigation;
    let blocksData = data.filter((blockdata) => {
      return 5 === parseInt(blockdata.type, 10)
        || 3 === parseInt(blockdata.type, 10)
    })

    return blocksData.map((block) => {
      let type = parseInt(block.type, 10)
      return (<Block
        key={type == 5 ? block.meteria_id : block.promotion_id}
        title={type == 5 ? block.title : "限时抢购"}
        subTitle={block.sub_title}
        type={type == 5 ? 2 : 1}
        link="更多">
        <ScrollList
          products={block.product_list}
          navigation={navigation}>
        </ScrollList>
      </Block>)
    })
  }
}

const styles = StyleSheet.create({
  root: {
    // marginBottom: 10,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },
  wrapper: {},
  slide: {
    flex: 1,
    resizeMode: 'contain',
    height: screenWidth / 2
  },
  banner: {
    height: 35
  },
  menus: {
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 20,
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  menu: {
    width: (screenWidth - 20) / 4,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  menuImage: {
    width: 45,
    height: 45
  },
  menuText: {
    fontSize: 12,
    color: '#555'
  }
})