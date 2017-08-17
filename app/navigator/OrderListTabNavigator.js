import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import All from '../container/Order/All';
import WaitPay from '../container/Order/WaitPay';
import WaitReceipt from '../container/Order/WaitReceipt';
import WaitComment from '../container/Order/WaitComment';

const App = TabNavigator({
  All: {
    screen: All,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '全部',
      tabBarIcon: ({ tintColor }) => (<Icon name="home" size={24} color={tintColor} />)
    })
  },
  WaitPay: {
    screen: WaitPay,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '待支付',
      tabBarIcon: ({ tintColor }) => (<Icon name="list-ul" size={20} color={tintColor} />)
    })
  },
  WaitReceipt: {
    screen: WaitReceipt,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '待收货',
      tabBarIcon: ({ tintColor }) => (<Icon name="shopping-cart" size={24} color={tintColor} />)
    })
  },
  WaitComment: {
    screen: WaitComment,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '待评价',
      tabBarIcon: ({ tintColor }) => (<Icon name="shopping-cart" size={24} color={tintColor} />)
    })
  }

}, {
    // tabBarComponent: 'TabBarBottom',   tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    initialRouteName: 'All',
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: '#3cb963',
      activeBackgroundColor: '#fff',
      inactiveTintColor: '#333',
      inactiveBackgroundColor: 'fff',
      // showIcon: true,
      tabStyle: {
        paddingBottom: 8,
        height: 40,
      },
      indicatorStyle: {
        backgroundColor: '#3cb963'
      },
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor:'#efefef'
      },
      iconStyle: {
        margin: 0,
        padding: 0
      }
    }
  });

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    width: 12,
    height: 12,
    fontSize: 12,
    backgroundColor: 'red',
    color: '#fff',
    top: 0,
    right: -5,
    opacity: 1
  }
})
export default App;