import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import CommonStyle from '../styles'

export default class OrderBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={styles.COrder}>
          <View style={styles.COrderHeader}>
            <View style={styles.CHeaderOrderNum}>
              <Text style={styles.CHeaderText}>订单号:</Text>
              <Text style={styles.CHeaderText}>1808498234882348</Text>
            </View>
            <Text style={[styles.CHeaderText, CommonStyle.linkColor]}>待付款</Text>
          </View>
          <View style={styles.COrderContent}>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/ab27f8e1ccc141493192656117.jpg!maicai.product.list'
                }} />
            </View>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/f85942de1501807250724.jpg!maicai.product.list'
                }} />
            </View>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/61001010320d41493107123157.png!maicai.product.list'
                }} />
            </View>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/ea1978d8880fb1501763224354.png!maicai.product.list'
                }} />
            </View>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/297a7de5436a31502155378670.png!maicai.product.list'
                }} />
            </View>
            <View style={styles.ellipes}>
              <Text>...</Text>
            </View>
          </View>
          <View style={styles.COrderFooter}>
            <Text style={styles.COrderFooterText}>
              共 3 件商品 实付
            <Text style={styles.COrderTextBlod}> ￥89.90 </Text>
              元（免邮）
          </Text>
          </View>
        </View>
        <View style={styles.COrder}>
          <View style={styles.COrderHeader}>
            <View style={styles.CHeaderOrderNum}>
              <Text style={styles.CHeaderText}>订单号:</Text>
              <Text style={styles.CHeaderText}>1345977644564356</Text>
            </View>
            <Text style={styles.CHeaderText}>已完成</Text>
          </View>
          <View style={styles.COrderContent}>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/b79587b2706651495436188267.jpg!maicai.product.list'
                }} />
            </View>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/f3f79f3faf05f1501763165404.jpg!maicai.product.list'
                }} />
            </View>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/f85942de1501807250724.jpg!maicai.product.list'
                }} />
            </View>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/61001010320d41493107123157.png!maicai.product.list'
                }} />
            </View>
            <View style={styles.COrderGoodsCard}>
              <Image
                style={styles.COrderGoods}
                source={{
                  uri: 'https://ddimg.ddxq.mobi/c7206ff1eb431501763290265.png!maicai.product.list'
                }} />
            </View>
            <View style={styles.ellipes}>
              <Text>...</Text>
            </View>
          </View>
          <View style={styles.COrderFooter}>
            <Text style={styles.COrderFooterText}>
              共 3 件商品 实付
          <Text style={styles.COrderTextBlod}> ￥89.90 </Text>
              元（免邮）
        </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  COrder: {
    marginBottom: 6,
  },
  COrderHeader: {
    ...CommonStyle.bgWhite,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CHeaderOrderNum: {
    flexDirection: 'row',
  },
  CHeaderText: {
    marginRight: 5,
    fontSize: 12
  },
  COrderContent: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  COrderGoodsCard: {
    padding: 5,
  },
  COrderGoods: {
    width: 50,
    height: 50
  },
  ellipes: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  COrderFooter: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    ...CommonStyle.bgWhite,
  },
  COrderFooterText: {
    ...CommonStyle.colorBlackLight,
    fontSize: 12,
  },
  COrderTextBlod: {
    paddingHorizontal: 5,
    fontSize: 14,
    ...CommonStyle.colorBlack
  }
})