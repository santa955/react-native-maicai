import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default class Block extends React.Component {
  render() {
    return (
      <View style={styles.block}>
        <View style={styles.blockHeader}>
          <Text style={styles.headerTitle}>{this.props.title}</Text>
          <Text style={styles.headerLink}>{this.props.link || '更多'}</Text>
        </View>
        <View style={styles.blockContent}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block: {
    marginTop: 6,
    justifyContent: 'space-between',
    minHeight: 50,
    backgroundColor: '#fff'
  },
  blockHeader: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#efefef'
  },
  headerTitle: {
    paddingLeft: 10,
    fontSize: 20,
    color: '#333',
    borderLeftWidth: 3,
    borderColor: '#2eb257'
  },
  headerLink: {
    fontSize: 14,
    color: '#2eb257'
  },
  blockContent: {
    padding: 10
  }
})