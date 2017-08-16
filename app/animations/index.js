let CustomerAnimate = {
  Horizontal: (props) => {
    const {position, scene, layout} = props;
    const index = scene.index;
    const inputRange = [
      index - 1,
      index,
      index + 0.99,
      index + 1
    ];
    const width = layout.initWidth;
    const outputRange = ([width, 0, -10, -10]);

    const opacity = position.interpolate({
      inputRange,
      outputRange: ([1, 1, 0.3, 0])
    });

    const scale = position.interpolate({
      inputRange,
      outputRange: ([1, 1, 0.95, 0.95])
    });

    const translateY = 0;
    const translateX = position.interpolate({inputRange, outputRange});

    return {
      opacity,
      transform: [{
          scale
        }, {
          translateX
        }, {
          translateY
        }]
    };
  }
}
export default CustomerAnimate