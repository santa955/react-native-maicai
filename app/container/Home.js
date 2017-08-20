import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-looped-carousel';
import Block from '../components/Block';
import ScrollList from '../components/ScrollList';
import BottomIndicator from '../components/BottomIndicator';
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <Carousel
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
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/01d57f2698fd51503020791480.jpg'
              }}/>
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/081ab8971502876133546.jpg'
              }}/>
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/140a821ba60d61499052414948.png'
              }}/>
            </Carousel>
          </View>
          <View style={styles.banner}>
            <Image
              style={styles.banner}
              source={{
              uri: 'https://ddimg.ddxq.mobi/bc27ddc54e92b1497233676444.png'
            }}/>
          </View>
          <View style={styles.menus}>
            <View style={styles.menu}>
              <Image
                style={styles.menuImage}
                source={{
                uri: 'https://ddimg.ddxq.mobi/350653cbe2e051493116155472.png'
              }}/>
              <Text style={styles.menuText}>蔬菜豆制品</Text>
            </View>
            <View style={styles.menu}>
              <Image
                style={styles.menuImage}
                source={{
                uri: 'https://ddimg.ddxq.mobi/5c2b5ec47056b1493116406706.png'
              }}/>
              <Text style={styles.menuText}>肉禽蛋</Text>
            </View>
            <View style={styles.menu}>
              <Image
                style={styles.menuImage}
                source={{
                uri: 'https://ddimg.ddxq.mobi/8a9a0479cf4f61499831878525.png'
              }}/>
              <Text style={styles.menuText}>鲜活水产</Text>
            </View>
            <View style={styles.menu}>
              <Image
                style={styles.menuImage}
                source={{
                uri: 'https://ddimg.ddxq.mobi/e2905f11498536072898.png'
              }}/>
              <Text style={styles.menuText}>新鲜水果</Text>
            </View>
            <View style={styles.menu}>
              <Image
                style={styles.menuImage}
                source={{
                uri: 'https://ddimg.ddxq.mobi/9357ed551493274274884.png'
              }}/>
              <Text style={styles.menuText}>乳品粮油</Text>
            </View>
            <View style={styles.menu}>
              <Image
                style={styles.menuImage}
                source={{
                uri: 'https://ddimg.ddxq.mobi/6523f5d7418ee1502605471944.png'
              }}/>
              <Text style={styles.menuText}>拼团</Text>
            </View>
            <View style={styles.menu}>
              <Image
                style={styles.menuImage}
                source={{
                uri: 'https://ddimg.ddxq.mobi/a676292b515fc1493117110092.png'
              }}/>
              <Text style={styles.menuText}>邻里团</Text>
            </View>
            <View style={styles.menu}>
              <Image
                style={styles.menuImage}
                source={{
                uri: 'https://ddimg.ddxq.mobi/2375e33c1501225549294.png'
              }}/>
              <Text style={styles.menuText}>邀请有礼</Text>
            </View>
          </View>
          <Block title="限时抢购" type={1} link="更多" navigation={this.props.navigation}>
            <ScrollList></ScrollList>
          </Block>
          <Block
            title="小排拼团没？"
            subTitle="9.9元我拼了！细数与小排的美味搭配"
            type={2}
            link="更多"
            navigation={this.props.navigation}>
            <ScrollList></ScrollList>
          </Block>
          <Block
            title="新品驾到"
            subTitle="缸鸭狗手工系列 老底子的宁波味道"
            type={2}
            link="更多"
            navigation={this.props.navigation}>
            <ScrollList></ScrollList>
          </Block>
          <BottomIndicator show="true"></BottomIndicator>
        </ScrollView>
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