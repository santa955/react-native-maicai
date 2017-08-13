import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Block from '../components/Block'

export default class User extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.header}
          source={{
          uri: 'https://ddimg.ddxq.mobi/2f2fff77db77a1500373377648.png'
        }}>
          <View style={styles.userInfo}>
            <Image style={styles.avatar} source={require("../static/logo-default.png")}/>
            <View style={styles.user}>
              <Text style={styles.info}>天朝安国公</Text>
              <Text style={[styles.info, styles.phone]}>1310494424</Text>
            </View>
          </View>
        </Image>
        <Block>
            <Text>测试</Text>
        </Block>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    paddingBottom: 10,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#eee'
  },
  header: {
    padding: 15,
    height: 130,
    justifyContent: 'center'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#fff'
  },
  user: {
    marginLeft: 10
  },
  info: {
    fontSize: 18,
    color: '#fff'
  },
  phone: {
    marginTop: 2,
    fontSize: 16
  }
})