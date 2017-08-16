import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuBlock from '../components/MenuBlock';
import Order from '../container/Order'

export default class User extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.root}>
        <Image
          style={styles.header}
          source={{
          uri: 'https://ddimg.ddxq.mobi/2f2fff77db77a1500373377648.png'
        }}>
          <View style={styles.userInfo}>
            <Image style={styles.avatar} source={require("../static/logo-default.png")}/>
            <View style={styles.user}>
              <Text style={styles.info}>天朝安国公</Text>
              <Text style={[styles.info, styles.phone]}>1310494424</Text>
            </View>
          </View>
        </Image>
        <View style={styles.orderBlock}>
          <TouchableOpacity
            activeOpacity={1}
            focusedOpacity={1}
            onPress={() => navigate('Order', {name: 'Brent'})}>
            <View style={styles.blockHeader}>
              <View style={styles.headerItem}>
                <Image style={styles.icon} source={require("../static/icon-order.png")}/>
                <Text style={styles.name}>我的订单</Text>
              </View>
              <View style={styles.headerItem}>
                <Text style={styles.desc}>查看全部订单</Text>
                <Icon style={[styles.iconArrow, styles.orderIconArrow]} name="angle-right"></Icon>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.blockContent}>
            <View style={styles.headerMenus}>
              <View style={styles.headerMenu}>
                <Image
                  style={styles.headerMenuIcon}
                  source={require("../static/icon-wait-pay.png")}/>
                <Text style={styles.menuText}>待支付</Text>
              </View>
              <View style={styles.headerMenu}>
                <Image
                  style={styles.headerMenuIcon}
                  source={require("../static/icon-wait-receipt.png")}/>
                <Text style={styles.menuText}>待收货</Text>
              </View>
              <View style={styles.headerMenu}>
                <Image
                  style={styles.headerMenuIcon}
                  source={require("../static/icon-wait-comment.png")}/>
                <Text style={styles.menuText}>待评价</Text>
              </View>
              <View style={styles.headerMenu}>
                <Image
                  style={styles.headerMenuIcon}
                  source={require("../static/icon-customer-service.png")}/>
                <Text style={styles.menuText}>售后/退款</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.menusBlock}>
          <View style={styles.menuItem}>
            <Image style={styles.menuIcon} source={require("../static/icon-discount.png")}/>
            <Text style={styles.menuName}>我的优惠券</Text>
            <Icon style={styles.iconArrow} name="angle-right"></Icon>
          </View>
          <View style={styles.menuItem}>
            <Image
              style={styles.menuIcon}
              source={require("../static/icon-address-book.png")}/>
            <Text style={styles.menuName}>我的收货地址</Text>
            <Icon style={styles.iconArrow} name="angle-right"></Icon>
          </View>
        </View>
        <View style={styles.menusBlock}>
          <View style={styles.menuItem}>
            <Image
              style={styles.menuIcon}
              source={require("../static/icon-suggestion.png")}/>
            <Text style={styles.menuName}>意见与建议</Text>
            <Icon style={styles.iconArrow} name="angle-right"></Icon>
          </View>
          <View style={styles.menuItem}>
            <Image style={styles.menuIcon} source={require("../static/icon-setting.png")}/>
            <Text style={styles.menuName}>应用设置</Text>
            <Icon style={styles.iconArrow} name="angle-right"></Icon>
          </View>
          <View style={styles.menuItem}>
            <Image style={styles.menuIcon} source={require("../static/icon-phone.png")}/>
            <Text style={styles.menuName}>联系客服</Text>
            <Icon style={styles.iconArrow} name="angle-right"></Icon>
          </View>
        </View>
        <View style={styles.menusBlock}>
          <View style={styles.menuItem}>
            <Image style={styles.menuIcon} source={require("../static/icon-gift.png")}/>
            <Text style={styles.menuName}>邀请有礼</Text>
            <Icon style={styles.iconArrow} name="angle-right"></Icon>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    paddingBottom: 10,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#eee'
  },
  header: {
    padding: 15,
    height: 130,
    justifyContent: 'center'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#fff'
  },
  user: {
    marginLeft: 10
  },
  info: {
    fontSize: 18,
    color: '#fff'
  },
  phone: {
    marginTop: 2,
    fontSize: 16
  },
  orderBlock: {
    marginTop: 8,
    backgroundColor: '#fff'
  },
  blockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#efefef',
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 30,
    height: 30
  },
  desc: {
    fontSize: 12,
    color: '#999',
    marginRight: 15
  },
  iconArrow: {
    position: 'absolute',
    right: 10,
    fontSize: 18,
    color: '#999'
  },
  orderIconArrow: {
    right: 0
  },
  blockContent: {
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  headerMenus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  headerMenu: {
    alignItems: 'center'
  },
  headerMenuIcon: {
    width: 28,
    height: 28
  },
  menuIcon: {
    width: 28,
    height: 28,
    marginRight: 5
  },
  menuText: {
    fontSize: 12,
    color: '#666'
  },
  menusBlock: {
    marginTop: 8,
    backgroundColor: '#fff'
  },
  menuItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#efefef'
  },
  menuName: {
    fontSize: 14,
    color: '#666'
  }
})