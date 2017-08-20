import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Carousel from 'react-native-looped-carousel';
let screenWidth = Dimensions
  .get('window')
  .width;
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: {
        width: screenWidth,
        height: screenWidth / 2
      }
    }
  }
  componentDidMount() {}
  render() {
    return (
      <View>
        <View>
          <Carousel
            delay={4000}
            style={this.state.size}
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slideContainer: {
    height: screenWidth / 2
  },
  slide: {
    flex: 1,
    resizeMode: 'contain',
    height: screenWidth / 2
  },
  dot: {
    backgroundColor: 'red'
  }
})