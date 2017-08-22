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
export default class SearchHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // const navigate = this.props.navigation.navigation;
    const navigate = null
    return (
      <View style={styels.searchHeader}>
        <View style={styels.searchLocation}>
          <IconEntypo style={styels.locationIcon} name="location-pin" />
          <Text
            style={styels.locationText}
            numberOfLines={1}>
            中西大厦中西大厦中西大厦中西大厦中西大厦
          </Text>
          <Icon style={styels.locationIcon} name="md-arrow-dropdown" />
        </View>
        <View style={styels.searchForm}>
          <Icon style={styels.headerSearchIcon} name="ios-search" />
          <TextInput
            style={styels.headerSearchInput}
            selectTextOnFocus={false}
            editable={true}
            autoCorrect={false}
            multiline={false}
            placeholder="请输入商品名称"
            underlineColorAndroid="transparent">
          </TextInput>
        </View>
      </View>
    )
  }
}

const styels = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderBottomColor:'#efefef'
  },
  searchLocation: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  locationText: {
    fontSize: 14,
    maxWidth: 100,
    flexWrap: 'nowrap'
  },
  searchForm: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSearchIcon: {
    position: 'absolute',
    left: 5,
    width: 28,
    height: 28,
    zIndex: 1,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  headerSearchInput: {
    flex:1,
    paddingLeft: 35,
    paddingVertical: 2,
    height: 28,
    borderWidth: 0,
    backgroundColor: '#f2f2f2',
    borderRadius: 14,
    fontSize: 14,
    color: '#666'
    // outline: 'none'
  }
})