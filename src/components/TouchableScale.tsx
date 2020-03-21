import React, { Component } from "react";
import {
  Animated,
  Easing,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  StyleProp,
  ViewStyle
} from "react-native";

export default class TouchableScale extends Component<TouchableScaleProps> {
  private animationValue = new Animated.Value(0);
  render() {
    const { activeScale = 0.9 } = this.props;

    const animatedStyles = {
      backgroundColor: "transparent",
      transform: [
        {
          scale: this.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, activeScale]
          })
        }
      ]
    };
    return (
      <TouchableWithoutFeedback
        onPressIn={this.scaleDownAnimation}
        onPressOut={this.scaleUpAnimation}
        onPress={this.props.onPress}
      >
        <Animated.View style={[this.props.style, animatedStyles]}>
          {this.props.children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  scaleDownAnimation = () =>
    Animated.timing(this.animationValue, {
      useNativeDriver: true,
      toValue: 1,
      duration: 150,
      easing: Easing.out(Easing.quad)
    }).start();

  scaleUpAnimation = () =>
    Animated.timing(this.animationValue, {
      useNativeDriver: true,
      toValue: 0,
      duration: 150,
      easing: Easing.out(Easing.quad)
    }).start();
}

interface TouchableScaleProps extends TouchableWithoutFeedbackProps {
  onPress(...args: any[]): void;
  children: React.ReactNode;
  activeScale?: number;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  activeOpacity?: number;
}
