import * as React from "react";
import { ViewStyle, StyleProp } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Gradient(props: GradientProps) {
  return (
    <LinearGradient
      colors={["#67BCEF", "#2EE4E0"]}
      start={[0, 0]}
      end={[1, 0]}
      style={props.style}
    >
      {props.children}
    </LinearGradient>
  );
}

interface GradientProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactElement;
}
