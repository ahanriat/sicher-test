import React from 'react';
import { Animated } from 'react-native';
import StaggerAnimation from './StaggerAnimation';

export default class FadeIn extends StaggerAnimation {
  render() {
    const { children, style } = this.props;

    return React.Children.map(children, (child, index) => {
      const animation = this.state.animations[index];
      return (
        <Animated.View
          style={[
            style,
            {
              opacity: animation,
            },
          ]}
        >
          {child}
        </Animated.View>
      );
    });
  }
}
