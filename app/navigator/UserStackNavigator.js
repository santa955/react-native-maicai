import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TabNavigator, StackNavigator, TabBarBottom} from 'react-navigation';
import User from '../container/User';
import OrderListTabNavigator from '../navigator/OrderListTabNavigator';
import CustomerAnimate from '../animations'

const UserStackNavigator = StackNavigator({
  User: {
    screen: User,
    navigationOptions: {
      header: null
    }
  },
  Order: {
    screen: OrderListTabNavigator,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2eb257',
        height: 20
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
  }
}, {
  transitionConfig: () => {
    return {
      screenInterpolator: (sceneProps) => {
        return CustomerAnimate.Horizontal(sceneProps);
      }
    }
  }
});

export default UserStackNavigator
