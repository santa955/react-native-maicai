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
        <View style={styles.emptyContainer}>
          <Image
            style={styles.emptyIcon}
            source={require('../../static/icon-order-empty.png')}
          />
          <Text style={styles.emptyText}>暂时还没有待收货订单</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyIcon: {
    width: 63,
    height: 80
  },
  emptyText: {
    marginTop: 15,
    fontSize: 14,
    color: '#999'
  },
})