import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderHeader from '../../components/Header/OrderHeader'

export default class All extends Component {
  static navigationOptions = {
    header: (HeaderProps) => {
      return <OrderHeader navigation={HeaderProps} />
    }
  }
  constructor() {
    super()
  }
  componentDidMount() { }
  render() {
    return (
      <View style={styles.root}>
        <Text>Wait Pay</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  }
})