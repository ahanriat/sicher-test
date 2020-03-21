import React from 'react';
import { Animated } from 'react-native';
import StaggerAnimation from './StaggerAnimation';

export default class TobogganAnimation extends StaggerAnimation {
  render() {
    const { children, style } = this.props;

    return React.Children.map(children, (child, index) => {
      const animation = this.state.animations[index];
      return (
        <Animated.View
          style={[
            style,
            {
              transform: [
                {
                  scale: animation.interpolate({
                    inputRange: [0, 0.9],
                    outputRange: [2.5, 1],
                    extrapolate: 'clamp',
                  }),
                },
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                  }),
                },
              ],
            },
          ]}
        >
          {child}
        </Animated.View>
      );
    });
  }
}
