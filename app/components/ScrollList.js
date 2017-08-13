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
let screenWidth = Dimensions
  .get('window')
  .width;

export default class ScrollList extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.cardList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/ab27f8e1ccc141493192656117.jpg!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>熟咸鸭蛋2枚约120g</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/f85942de1501807250724.jpg!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>本地黄瓜 400-600g</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/61001010320d41493107123157.png!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>优选山东千禧果500g/盒</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/ea1978d8880fb1501763224354.png!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>澳洲冷冻牛尾段500g</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/297a7de5436a31502155378670.png!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>新鲜活杀黑鱼1条 约400-500g</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/05418456569cd1500433628339.png!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>崇乡源黑毛猪夹心肉糜 350g</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/659b4267fd2021496804813199.jpg!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>油麦菜 300g</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/b79587b2706651495436188267.jpg!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>清美厚百叶 170g/袋</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/f3f79f3faf05f1501763165404.jpg!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>舟山冰鲜小黄鱼 约300g</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
            uri: 'https://ddimg.ddxq.mobi/c7206ff1eb431501763290265.png!maicai.product.list'
          }}/>
          <Text style={styles.cardDesc}>紫色细长茄 310g</Text>
          <View style={styles.cardMore}>
            <Text style={styles.price}>￥5.90</Text>
            <Icon style={styles.cart} name="shopping-cart"/>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  cardList: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  card: {
    justifyContent: 'flex-start',
    marginLeft: 15,
    width: 100
  },
  cardImage: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    resizeMode: 'center',
    backgroundColor: '#efefef'
  },
  cardDesc: {
    marginTop: 5,
    fontSize: 12,
    height: 28,
    // borderWidth: 1
  },
  cardMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 16,
    color: '#f95824'
  },
  cart: {
    paddingTop: 4,
    fontSize: 16,
    width: 24,
    height: 24,
    color: '#2eb257',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#eee',
    textAlign: 'center'
  }
})