import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Block extends React.Component {
  render() {
    return (
      <View style={styles.block}>
        {this.renderHeader()}
        <View style={styles.blockContent}>
          {this.props.children}
        </View>
      </View>
    )
  }
  renderHeader() {
    let type = parseInt(this.props.type, 10)
    let header = null;
    switch (type) {
      case 1:
        if (this.props.title) {
          header = (
            <View style={styles.blockHeader}>
              <View style={styles.headerTitleMain}>
                <Text
                  style={[styles.titleMain, styles.titleMainLeft, styles.titleWithBorderLeft]}>
                  {this.props.title}
                </Text>
                {this.renderLink()}
              </View>
            </View>
          )
        } else {
          header = null
        }
        break;
      case 2:
        header = (
          <View style={styles.blockHeader}>
            <View style={styles.headerTitleMain}>
              <Text style={styles.titleMain}>{this.props.title}</Text>
              {this.renderLink()}
            </View>
            {this.props.subTitle
              ? (
                <View style={styles.headerTitleSub}>
                  <Text style={styles.titleSub}>{this.props.subTitle}</Text>
                </View>
              )
              : null}
          </View>
        );
        break;
      default:
        break
    }

    return header;
  }

  renderLink() {
    let link = this.props.link;
    const navigate = this.props.navigation;
    if (link) {
      return (
        <TouchableOpacity
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => navigate.navigate('Detail')}>
          <Text style={styles.headerLink}>{this.props.link || '更多'}</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 8,
    justifyContent: 'space-between',
    minHeight: 50,
    backgroundColor: '#fff'
  },
  blockHeader: {
    padding: 10,
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#efefef'
  },
  headerTitleMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerTitleSub: {
    alignItems: 'center'
  },
  titleMain: {
    fontSize: 20,
    color: '#333',
    flex: 1,
    textAlign: 'center'
  },
  titleMainLeft: {
    textAlign: 'left'
  },
  titleWithBorderLeft: {
    paddingLeft: 10,
    borderColor: '#2eb257',
    borderLeftWidth: 3
  },
  titleSub: {
    paddingRight: 28,
    fontSize: 12,
    color: '#666'
  },
  headerLink: {
    fontSize: 14,
    width: 28,
    height: 20,
    color: '#2eb257'
  },
  headerLinkRight: {},
  blockContent: {
    paddingVertical: 10
  }
})