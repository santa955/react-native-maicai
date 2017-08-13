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
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
let screenWidth = Dimensions
  .get('window')
  .width;
export default class Home extends Component {
  constructor() {
    super()
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.wrapper}>
            <Image
              style={styles.slide}
              source={{
              uri: 'https://ddimg.ddxq.mobi/6f081fc891f651502445702133.jpg'
            }}/>
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
          <View style={styles.block}></View>
          <View style={styles.block}></View>
          <View style={styles.block}></View>
          <View style={styles.block}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  wrapper: {},
  slide: {
    flexDirection: 'row',
    height: screenWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  banner: {
    height: 35
  },
  block: {
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: '#fff'
  },
  menus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 6,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  menu: {
    width: (screenWidth - 10) / 4,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  menuImage: {
    width: 55,
    height: 55
  },
  menuText: {
    fontSize: 10
  }
})