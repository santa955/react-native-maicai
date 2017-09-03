import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as ACTIONS from '../actions';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: '', autoFocus: false }
  }
  render() {
    let results = this.props.searchResults;
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
          {results.data && results.data.list
            ? this.renderSearchResult(results.data.list)
            : null}
        </View>
      </View>)
  }

  renderSearchResult(data) {
    let navigation = this.props.navigation;
    return data.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => navigation.navigate('Home', { 'forceUpdate': true })}>
          <Text style={styles.listItem}>{item}</Text>
        </TouchableOpacity>
      )
    })
  }

  handlerTextChange(text) {
    let navParam = this.props.navigation.state.params;
    let searchType = navParam.searchType || 'product';
    let action = this.props.action;
    this.setState({ inputValue: text })
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      if (searchType == 'product' && action) {
        action.getSearchProducts(text, 10, 1)
      }
    }, 0)
  }
}

const mapStateToProps = state => {
  return state.searchProducts
};

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(ACTIONS, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

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