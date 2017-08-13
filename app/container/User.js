import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { TabNavigator } from 'react-navigation';

export default class User extends Component {
    render() {
        return (
            <View>
          <Text>{'\n'}</Text>
          <Text>嘿，猜猜这里是谁？</Text>
        </View>
        );
    }
}