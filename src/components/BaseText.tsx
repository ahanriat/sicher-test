import React from "react";
import { Text, StyleSheet, TextStyle, StyleProp, TextProps } from 'react-native';
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
    fontSize: 16,
    lineHeight: 19
  }
});

export default function BaseText(props: BaseTextProps) {
  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
}
