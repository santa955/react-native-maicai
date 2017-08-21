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
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-looped-carousel';
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
  render () {
    return (
      <View style={styles.root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            {this.renderSlides(BlocksData.list[0].icon_list)}
          </View>
          <View style={styles.banner}>
            <Image
              style={styles.banner}
              source={{
                uri: 'https://ddimg.ddxq.mobi/bc27ddc54e92b1497233676444.png'
              }} />
          </View>
          {this.renderMenus(BlocksData.list[2].icon_list)}
          <Block title="限时抢购" type={1} link="更多" navigation={this.props.navigation}>
            <ScrollList products={BlocksData.list[3].product_list}></ScrollList>
          </Block>
          <Block
            title={BlocksData.list[5].title}
            subTitle={BlocksData.list[5].sub_title}
            type={2}
            link="更多"
            navigation={this.props.navigation}>
            <ScrollList products={BlocksData.list[5].product_list}></ScrollList>
          </Block>
          <Block
            title={BlocksData.list[6].title}
            subTitle={BlocksData.list[6].sub_title}
            type={2}
            link="更多"
            navigation={this.props.navigation}>
            <ScrollList products={BlocksData.list[6].product_list}></ScrollList>
          </Block>
          <Block
            title={BlocksData.list[7].title}
            subTitle={BlocksData.list[7].sub_title}
            type={2}
            link="更多"
            navigation={this.props.navigation}>
            <ScrollList products={BlocksData.list[7].product_list}></ScrollList>
          </Block>
          <Block
            title={BlocksData.list[8].title}
            subTitle={BlocksData.list[8].sub_title}
            type={2}
            link="更多"
            navigation={this.props.navigation}>
            <ScrollList products={BlocksData.list[8].product_list}></ScrollList>
          </Block>
          <BottomIndicator show="true"></BottomIndicator>
        </ScrollView>
      </View>
    )
  }
  renderSlides (data) {
    let slides = data.map((slide) => {
      return (
        <Image
          style={styles.slide}
          source={{ uri: 'https://ddimg.ddxq.mobi/7db68ea93024c1503299932969.jpg' }}
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
  renderMenus (data) {
    let menus = data.map((menu) => {
      return (
        <View style={styles.menu} key={menu['meteria_id']}>
          <Image
            style={styles.menuImage}
            source={{
              uri: menu.icon_url
            }} />
          <Text style={styles.menuText}>{menu.name}</Text>
        </View>)
    })

    return (
      <View style={styles.menus}>
        {menus}
      </View>
    )
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
    width: 70,
    height: 70
  },
  menuText: {
    fontSize: 14
  }
})