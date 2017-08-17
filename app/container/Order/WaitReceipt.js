import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, ListView } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderHeader from '../../components/Header/OrderHeader';
import OrderBlock from '../../components/OrderBlock';

export default class WaitReceipt extends Component {
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
        <ScrollView>
          <OrderBlock></OrderBlock>
        </ScrollView>
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