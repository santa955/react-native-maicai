import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Order from '../container/Order';
import Category from '../container/Category';
import Cart from '../container/Cart';

const App = TabNavigator({
  Order: {
    screen: Order,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '全部',
      tabBarIcon: ({tintColor}) => (<Icon name="home" size={24} color={tintColor}/>)
    })
  },
  Category: {
    screen: Category,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '待支付',
      tabBarIcon: ({tintColor}) => (<Icon name="list-ul" size={20} color={tintColor}/>)
    })
  },
  Chart: {
    screen: Cart,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '待收货',
      tabBarIcon: ({tintColor}) => (<Icon name="shopping-cart" size={24} color={tintColor}/>)
    })
  },
  Comment: {
    screen: Cart,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '待评价',
      tabBarIcon: ({tintColor}) => (<Icon name="shopping-cart" size={24} color={tintColor}/>)
    })
  }

}, {
  // tabBarComponent: 'TabBarBottom',   tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  lazy: true,
  initialRouteName: 'Order',
  backBehavior: 'none',
  tabBarOptions: {
    activeTintColor: '#3cb963',
    activeBackgroundColor: '#fff',
    inactiveTintColor: '#333',
    inactiveBackgroundColor: 'fff',
    // showIcon: true,
    tabStyle: {
      paddingBottom: 8,
      height: 30
    },
    indicatorStyle: {
      backgroundColor: '#3cb963'
    },
    labelStyle: {
      fontSize: 14
    },
    style: {
      backgroundColor: '#fff'
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