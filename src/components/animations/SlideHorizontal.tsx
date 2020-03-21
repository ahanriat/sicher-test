import React from 'react';
import { Animated } from 'react-native';

import StaggerAnimation from './StaggerAnimation';

interface SlideHorizontalProps {
  offset: number;
}

export default class SlideHorizontal extends StaggerAnimation<SlideHorizontalProps> {
  static defaultProps = {
    ...StaggerAnimation.defaultProps,
    offset: 300,
  };

  render() {
    const { children, style, offset } = this.props;
    return React.Children.map(children, (child, index) => {
      const animation = this.state.animations[index];
      return (
        <Animated.View
          style={[
            style,
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [offset, 0],
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
