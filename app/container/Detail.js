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
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-looped-carousel';
import BottomIndicator from '../components/BottomIndicator';
import Header from '../components/Header/DetailHeader';
let screenWidth = Dimensions
  .get('window')
  .width;
export default class Detail extends React.Component {
  static navigationOptions = {
    header: (HeaderProps) => {
      return <Header navigation={HeaderProps}/>
    }
  }
  constructor() {
    super();
    this.state = {
      size: {
        width: screenWidth,
        height: screenWidth
      }
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.slideContainer}>
            <Carousel
              // pageStyle={this.state.size}
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
                uri: 'https://ddimg.ddxq.mobi/1f8435ba1496397258544.jpg'
              }}
                onLoadStart={() => {
                alert('start')
              }}
                onLoadEnd={() => {
                alert('end')
              }}/>
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/cfc7b8d21496397263415.jpg'
              }}/>
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/ba2d0c71496397266943.jpg'
              }}/>
            </Carousel>
          </View>
          <View style={styles.detailContainer}>
            <View>
              <Text style={styles.detailTitle}>桂冠刀切馒头 320g/袋</Text>
            </View>
            <View>
              <Text style={styles.detailSubTitle}>16只装 奶香味</Text>
            </View>
            <View style={styles.detailMoreInfo}>
              <View style={styles.moreInfoMain}>
                <Text style={styles.priceCurrent}>￥5.9</Text>
                <Text style={styles.pricePrev}>￥9.9</Text>
                <Text style={styles.buyLimit}>限购一份</Text>
              </View>
              <View>
                <Text style={styles.saleCount}>已售:1389</Text>
              </View>
            </View>
          </View>
          <View style={styles.paramContainer}>
            <View style={styles.paramHeader}>
              <Text style={styles.headeTitle}>规格</Text>
            </View>
            <View style={styles.paramTable}>
              <View style={styles.paramItem}>
                <Text style={styles.lable}>净含量</Text>
                <Text style={styles.param}>320g</Text>
              </View>
              <View style={styles.paramItem}>
                <Text style={styles.lable}>保存条件</Text>
                <Text style={styles.param}>冷藏</Text>
              </View>
              <View style={styles.paramItem}>
                <Text style={styles.lable}>保质期</Text>
                <Text style={styles.param}>9个月</Text>
              </View>
            </View>
          </View>
          <BottomIndicator show="true"></BottomIndicator>
        </ScrollView>
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
  fixedBottonContainer: {
    // position: 'fixed', top: 10, color: '#000',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0 , 0, 0)'
  },
  slideContainer: {
    width: screenWidth,
    height: screenWidth
  },
  slide: {
    flex: 1,
    resizeMode: 'contain',
    height: screenWidth
  },
  detailContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#efefef',
    backgroundColor: '#fff'
  },
  detailTitle: {
    fontSize: 18,
    color: '#333'
  },
  detailSubTitle: {
    marginTop: 5,
    fontSize: 14
  },
  detailMoreInfo: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  moreInfoMain: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  priceCurrent: {
    fontSize: 14,
    color: '#f95824'
  },
  pricePrev: {
    marginLeft: 6,
    fontSize: 10,
    color: '#b2b2b2',
    textDecorationLine: 'line-through'
  },
  buyLimit: {
    paddingHorizontal: 4,
    marginLeft: 6,
    fontSize: 10,
    backgroundColor: '#f85825',
    color: '#fff'
  },
  saleCount: {
    fontSize: 12,
    color: '#999'
  },
  paramContainer: {
    marginVertical: 6,
    backgroundColor: '#fff',
    padding: 10
  },
  paramHeader: {
    paddingVertical: 10
  },
  headeTitle: {
    fontSize: 18,
    color: '#333'
  },
  paramItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#efefef'
  },
  param: {
    fontSize: 14,
    color: '#666'
  },
  lable: {
    width: 100,
    fontSize: 14,
    color: '#666'
  }
})
