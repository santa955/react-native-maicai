import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
let screenWidth = Dimensions
  .get('window')
  .width;
export default class Category extends Component {
  render() {
    return (
      <View>
        <View>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            paginationStyle={{
            top: 0
          }}>
            <View>
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/6f081fc891f651502445702133.jpg'
              }}/>
            </View>
            <View>
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/e0082b524f56d1502275949019.jpg'
              }}/>
            </View>
            <View>
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/893d493f5fd061502276163620.jpg'
              }}/>
            </View>
            <View>
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/5a34b1acff2cd1501849276250.jpg'
              }}/>
            </View>
            <View>
              <Image
                style={styles.slide}
                source={{
                uri: 'https://ddimg.ddxq.mobi/1e9e79591502331927513.jpg'
              }}/>
            </View>
          </Swiper>
        </View>
        <Text>≤‚ ‘</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1, flexDirection: 'row', height: screenWidth / 2
  },
  slide: {
    flexDirection: 'row',
    width: screenWidth,
    height: screenWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  }
})