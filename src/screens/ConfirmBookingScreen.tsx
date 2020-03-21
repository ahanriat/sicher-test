import BaseText from 'components/BaseText';
import SecondaryText from 'components/SecondaryText';
import SlotSelector from 'components/SlotSelector';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors } from 'services/Colors';
import { Fonts } from 'services/Fonts';


interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    marginTop: 20,
  }
})

export default function ConfirmBookingScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/map-test-center.png')}/>
      <View style={{ alignItems: 'center' }}>
        <BaseText text={'Test Center A'} style={{ fontFamily: Fonts.bold, fontSize: 20, marginBottom: 10 }}/>
        <SecondaryText text={'Driesener Str, 24 \n Berlin, DE '} style={{ textAlign: 'center' }}/>
        <TouchableOpacity>
          <BaseText text={'get-directions'}
                    style={{ marginTop: 20, color: Colors.oceanBlue, textDecorationLine: 'underline' }}/>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 50 }}>
        <SlotSelector label={'Today'} labelRight={'14:45'} onPress={() => null} selected={true}/>
      </View>
    </View>
  )
}
