import React from 'react';
import { Animated } from 'react-native';
import StaggerAnimation from './StaggerAnimation';

export default class RiseAnimation extends StaggerAnimation<{ fromY?: number }> {
  render() {
    const { children, fromY = 10, style } = this.props;

    return React.Children.map(children, (child, index) => {
      const animation = this.state.animations[index];
      return (
        <Animated.View
          style={[
            style,
            {
              opacity: animation,
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [fromY, 0],
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
