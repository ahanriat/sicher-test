import React, { Component } from "react";
import { Animated, Easing, StyleProp, ViewStyle } from "react-native";
import range from "lodash/range";

interface StaggerAnimationProps {
  children: React.ReactNode;
  staggerDuration?: number;
  duration?: number;
  delay?: number;
  style?: StyleProp<ViewStyle>;
  easing?: (v: number) => number;
}

export default abstract class StaggerAnimation<T = {}> extends Component<
  StaggerAnimationProps & T
> {
  static defaultProps = {
    staggerDuration: 50,
    duration: 400,
    delay: 0,
    easing: Easing.out(Easing.sin)
  };

  state = {
    animations: range(React.Children.count(this.props.children)).map(
      () => new Animated.Value(this.props.duration ? 0 : 1)
    )
  };

  componentDidMount() {
    const { delay = 0, staggerDuration = 50 } = this.props;
    Animated.sequence([
      Animated.delay(delay),
      Animated.stagger(
        staggerDuration,
        this.state.animations.map(this.entranceAnimation)
      )
    ]).start();
  }

  private entranceAnimation = (animatedValue: Animated.Value) => {
    const { easing, duration = 400 } = this.props;
    return Animated.timing(animatedValue, {
      easing,
      duration,
      toValue: 1,
      useNativeDriver: true
    });
  };
}
