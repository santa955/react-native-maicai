import React from 'react';
import { View, Image, Animated, Easing, StyleSheet, Dimensions } from 'react-native';
let screen = Dimensions.get('window')
export default class Loading extends React.Component {
  constructor() {
    super()
    this.bounceValue = new Animated.Value(0)
    this.scaleValue = new Animated.Value(0)
    this.animateDuration = 800
    this.state = { imageIndex: 0 }
    this.animationImages = [
      require('../static/v1.png'),
      require('../static/v2.png'),
      require('../static/v3.png'),
      require('../static/v4.png')
    ]
  }
  componentDidMount() {
    this.bounce()
    this.scale()
    this.changeImage()
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  render() {
    const bounce = this.bounceValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -25, 0]
    })
    const scale = this.scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [40, 20, 40]
    })

    const bounceAnimateStyle = {
      transform: [{ translateY: bounce }]
    }
    const scaleAnimateStyle = {
      width: scale,
      height: scale
    }
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loading}>
          <Animated.Image
            style={[styles.loadingImage, bounceAnimateStyle]}
            source={this.animationImages[this.state.imageIndex]}>
          </Animated.Image>
          <Animated.View
            style={[styles.bottom, scaleAnimateStyle]}>
          </Animated.View>
        </View>
      </View>
    );
  }

  bounce() {
    this.bounceValue.setValue(0)
    Animated.timing(
      this.bounceValue,
      {
        toValue: 1,
        duration: this.animateDuration,
        easing: Easing.linear
      }
    ).start(() => this.bounce())
  }

  scale() {
    this.scaleValue.setValue(0)
    Animated.timing(
      this.scaleValue,
      {
        toValue: 1,
        duration: this.animateDuration,
        easing: Easing.linear
      }
    ).start(() => this.scale())
  }

  changeImage() {
    this.animationRepeatCount = this.animationImages.length || 0;
    this.intervalId = setInterval(
      () => {
        let imageIndex = this.state.imageIndex + 1;
        if (imageIndex >= this.animationImages.length) {
          imageIndex = 0;
        }
        this.setState({ imageIndex: imageIndex });
      }, this.animateDuration);
  }
}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: screen.height
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingImage: {
    width: 60,
    height: 60,
  },
  bottom: {
    width: 40,
    height: 40,
    backgroundColor: '#e3e3e3',
    borderRadius: 20,
    marginTop: -5,
    transform: [
      { rotateX: '-75deg' },
    ]
  }
})