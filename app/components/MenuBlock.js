import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

export default class MenuBlock extends React.Component {
  render() {
    return (
      <View style={styles.block}>
        {this.props.title
          ? <View style={styles.blockHeader}>
              <Text style={styles.headerTitle}>{this.props.title}</Text>
              <Text style={styles.headerLink}>{this.props.link || '更多'}
              </Text>
            </View>
          : <Text></Text>}
        <View style={styles.blockContent}>
          {this.props.children}
        </View>
      </View>
    )
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