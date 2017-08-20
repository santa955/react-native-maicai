import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class BottomIndicator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isShow = this.props.show;
    return (isShow
      ? <View style={styles.Indicator}>
          <Image style={styles.IndicatorBg} source={require('../static/bg-bottom.png')}/>
        </View>
      : null)
  }
}

const styles = StyleSheet.create({
  Indicator: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  IndicatorBg: {
    height: 30,
    resizeMode: 'contain'
  }
})