import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Load from '../components/Loading'

let screenWidth = Dimensions
  .get('window')
  .width;
export default class Loading extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Load><Text>FADE IN</Text></Load>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f6f6f6'
  },

})