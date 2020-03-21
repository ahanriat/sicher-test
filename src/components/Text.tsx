import React from 'react';
import { Text, StyleSheet, TextStyle, ViewProps, StyleProp } from 'react-native';

interface Props {
  text: string;
  styles?: StyleProp<TextStyle>;
}

interface Styles {
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  text: {
    fontFamily: 'regular',
    fontSize: 16,
    lineHeight: 19
  }
});

export default function BaseText(props: Props) {
  return (
    <Text style={[styles.text, props.styles]}>
      {props.text}
    </Text>
  )
}
