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
    this.state = { inputValue: '', autoFocus: false }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.refs.searchInput.focus();
    }
  }
  render() {
    return (
      <View style={styles.searchHeader}>
        {this.props.showLocation ? (<View style={styles.searchLocation}>
          <IconEntypo style={styles.locationIcon} name="location-pin" />
          <Text
            style={styles.locationText}
            numberOfLines={1}>
            {this.props.loction ? this.props.loction : '定位中...'}
          </Text>
          <Icon style={styles.locationIcon} name="md-arrow-dropdown" />
        </View>) : null}
        <View style={styles.searchForm}>
          <TouchableOpacity
            style={{ flex: 1, height: 28 }}
            activeOpacity={1}
            focusedOpacity={1}
            onPress={() => {
              let { navigation, action, searchType } = this.props
              navigation.navigate('Search', { action, searchType })
            }}>
            <Icon style={styles.headerSearchIcon} name="ios-search" />
            <Text style={styles.headerSearchInput}>请输入商品名称</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef'
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
    flex: 1,
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
    flex: 1,
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