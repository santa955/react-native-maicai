import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OrderHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const navigate = this.props.navigation.navigation;
    return (
      <View style={styels.OrderHeader}>
        <TouchableOpacity
          style={styels.headerButton}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => navigate.goBack(null)}>
          <Icon style={styels.headerBackIcon} name="ios-arrow-back-outline" size={24}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styels.headerButton}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => navigate.goBack(null)}>
          <Icon style={styels.headerBackIcon} name="md-share" size={18}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styels = StyleSheet.create({
  OrderHeader: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  headerButton:{
    flexDirection: 'row',
  },
  headerBackIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    // fontSize: 24,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlignVertical: 'center',
  }
})