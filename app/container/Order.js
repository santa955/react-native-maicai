import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  constructor() {
    super()
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.root}>
        <Text>Order</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    // marginBottom: 10,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },
})