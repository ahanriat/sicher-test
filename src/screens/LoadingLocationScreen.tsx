import React, { useEffect } from 'react';
import SecondaryText from 'components/SecondaryText';
import { Image, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default function LoadingLocationScreen(props) {

  useEffect(() => {
    const timout = setTimeout(() => {
      props.navigation.navigate('SlotSelector')
    }, 1000);

    return () => {
      clearTimeout(timout);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/radar-search-image.png')}/>
      <SecondaryText text={'searching-for-centers-around-you'} style={{ marginTop: 27 }}/>
    </View>
  )
}
