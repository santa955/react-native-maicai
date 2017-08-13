import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './container/Home';
import Category from './container/Category';
import Cart from './container/Cart';
import User from './container/User';

const App = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => (<Icon name="home" size={20} color={tintColor}/>)
    })
  },
  Category: {
    screen: Category,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '分类',
      tabBarIcon: ({tintColor}) => (<Icon name="list-ul" size={18} color={tintColor}/>)
    })
  },
  Chart: {
    screen: Cart,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '购物车',
      tabBarIcon: ({tintColor}) => (<Icon name="shopping-cart" size={20} color={tintColor}/>)
    })
  },
  User: {
    screen: User,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (<Icon name="user" size={20} color={tintColor}/>)
    })
  }
}, {
  // tabBarComponent: 'TabBarBottom',
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  lazy: true,
  initialRouteName: 'Home',
  backBehavior: 'none',
  tabBarOptions: {
    activeTintColor: '#3cb963',
    activeBackgroundColor: 'white',
    inactiveTintColor: '#333',
    inactiveBackgroundColor: 'white',
    showIcon: true,
    tabStyle: {
      margin: 0,
      paddingBottom: 8,
      height: 48
    },
    indicatorStyle: {
      margin: 0,
      padding: 0,
      height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    labelStyle: {
      fontSize: 10,
      margin: 0,
      padding: 0
    },
    style: {
      margin: 0,
      padding: 0,
      backgroundColor: '#fff'
    },
    iconStyle: {
      margin: 0,
      padding: 0
    }
  }
});
export default App;