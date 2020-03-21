import React from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { Colors } from 'services/Colors';
import { Fonts } from 'services/Fonts';


interface Props extends TextInputProps {
  
}

interface Style {
  component: ViewStyle
}

const styles = StyleSheet.create<Style>({
  component: {
    backgroundColor: Colors.white,
    height: 64,
    width: '100%',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: Colors.grey,
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.grey,
  }
});


export default function InputText(props: Props) {
  return (
    <TextInput 
      {...props}
      style={styles.component}
    />
  ) 
}
