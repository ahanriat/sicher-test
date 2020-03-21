import * as Font from 'expo-font';

export const Fonts = {
  black: 'Roboto-Black',
  blackItalic: 'Roboto-BlackItalic',
  bold: 'Roboto-Bold',
  italic: 'Roboto-Italic',
  boldItalic: 'Roboto-BoldItalic',
  light: 'Roboto-Light',
  lightItalic: 'RobotoLightItalic',
  medium: 'Roboto-Medium',
  mediumItalic: 'Roboto-MediumItalic',
  regular: 'Roboto-Regular',
  thin: 'Roboto-Thin',
  thinItalic: 'Roboto-ThinItalic',
};

export type Fonts = keyof typeof Fonts;

export function loadFontsAsync(): Promise<void> {
  return Font.loadAsync({
    'black': require('../../assets/fonts/Roboto-Black.ttf'),
    'blackItalic': require('../../assets/fonts/Roboto-BlackItalic.ttf'),
    'bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    'italic': require('../../assets/fonts/Roboto-Italic.ttf'),
    'bordItalic': require('../../assets/fonts/Roboto-BoldItalic.ttf'),
    'light': require('../../assets/fonts/Roboto-Light.ttf'),
    'lightItalic': require('../../assets/fonts/Roboto-LightItalic.ttf'),
    'medium': require('../../assets/fonts/Roboto-Medium.ttf'),
    'mediumItalic': require('../../assets/fonts/Roboto-MediumItalic.ttf'),
    'regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    'thin': require('../../assets/fonts/Roboto-Thin.ttf'),
    'thinItalic': require('../../assets/fonts/Roboto-ThinItalic.ttf'),
  })
}
