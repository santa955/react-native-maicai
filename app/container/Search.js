import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: '', autoFocus: false }
  }
  render() {
    let navigation = this.props.navigation;
    return (
      <View style={styles.root}>
        <View style={styles.searchHeader}>
          <View style={styles.searchForm}>
            <Icon style={styles.headerSearchIcon} name="ios-search" />
            <TextInput
              ref='searchInput'
              style={styles.headerSearchInput}
              selectTextOnFocus={false}
              autoFocus={true}
              editable={true}
              autoCorrect={false}
              multiline={false}
              placeholder="请输入商品名称"
              underlineColorAndroid="transparent"
              value={this.state.inputValue}
              returnKeyType={'search'}
              onChangeText={(text) => {
                this.handlerTextChange(text)
              }}>
            </TextInput>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <TouchableOpacity
            activeOpacity={1}
            focusedOpacity={1}
            onPress={() => navigation.navigate('Home', { 'forceUpdate': true })}>
            <Text style={styles.listItem}>白菜</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            focusedOpacity={1}
            onPress={() => navigation.navigate('Home', { 'forceUpdate': true })}>
            <Text style={styles.listItem}>大杭白菜</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            focusedOpacity={1}
            onPress={() => navigation.navigate('Home', { 'forceUpdate': true })}>
            <Text style={styles.listItem}>小白菜</Text>
          </TouchableOpacity>
        </View>
      </View>)
  }

  handlerTextChange(text) {
    this.setState({ inputValue: text })
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      let searchType = this.props.searchType
      let action = this.props.action
      if (searchType == 'product') {
        action.getSearchProducts(text, 10, 1)
      }
    }, 300)
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
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
  },
  itemsContainer: {
  },
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#fafafa'
  }
})