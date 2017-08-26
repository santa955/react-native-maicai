import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
export default class CartHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styels.CartHeader}>
        <View style={styels.TitleContainer}>
          <Text style={styels.title}>购物车（2）</Text>
        </View>
        <View style={styels.actionContainer}>
          <Text style={[styels.actionDelete, styels.actionDeleteActive]}>删除</Text>
        </View>
      </View>
    )
  }
}

const styels = StyleSheet.create({
  CartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400'
  },
  actionContainer: {
    position: 'absolute',
    right: 10
  },
  actionDelete: {
    color: '#999',
    fontSize: 14
  },
  actionDeleteActive: {
    color: '#3cb963'
  }
})