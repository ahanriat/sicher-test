import React from "react";
import {
  Text,
  StyleSheet,
  TextStyle,
  StyleProp,
  TextProps
} from "react-native";
import { Fonts } from "services/Fonts";

export interface BaseTextProps extends TextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

interface Styles {
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  text: {
    fontFamily: Fonts.regular,
    color: "#296081",
    fontSize: 32
  }
});

export default function H1(props: BaseTextProps) {
  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
}
