import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TabNavigator, StackNavigator, TabBarBottom} from 'react-navigation';
import User from './User';
import Order from './Order';

const UserStackNavigators = StackNavigator({
  User: {
    screen: User,
    navigationOptions: {
      title: '我的',
      headerStyle: {
        backgroundColor: '#2eb257',
        height:20
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
      },
      headerBackTitleStyle: {
        color: 'white',
        fontSize: 14
      },
      headerTintColor: 'white'
    }
  },
  Order: {
    screen: Order
  }
}, {});

export default class UserStackNavigator extends React.Component {
  render() {
    return (<UserStackNavigators/>)
  }
}
