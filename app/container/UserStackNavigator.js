import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TabNavigator, StackNavigator, TabBarBottom} from 'react-navigation';
import User from './User';
import Order from './Order';

const UserStackNavigator = StackNavigator({
  User: {
    screen: User,
    navigationOptions: {
      header: null
    }
  },
  Order: {
    screen: Order,
    navigationOptions: {
      title: '订单',
      header: (
        <View>
          <Text>This is my HEADER</Text>
        </View>
      ),
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
    // screenInterpolator : CardStackStyleInterpolator.forHorizontal
  }
});

export default UserStackNavigator
