import BaseText from 'components/BaseText';
import SecondaryText from 'components/SecondaryText';
import SlotSelector from 'components/SlotSelector';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors } from 'services/Colors';
import { Fonts } from 'services/Fonts';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1
  },
  subContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    marginHorizontal: 40,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 25,
    shadowColor: 'rgba(119, 191, 233, 0.29)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 8,
    marginTop: 52,
  }
});

export default function BookingDetailsScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 28 }}>
          <BaseText
            text={'my-appointment'}
            style={{ color: 'rgba(41, 96, 129, 0.4)' }}/>
          <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
            <BaseText text={'edit'} style={{ color: Colors.oceanBlue }}/>
          </TouchableOpacity>
        </View>
        <BaseText text={'Test Center A'}
                  style={{ fontFamily: Fonts.bold, fontSize: 20, textAlign: 'center' }}/>
        <SecondaryText text={'Driesener Str, 24 \n Berlin, DE '} style={{ textAlign: 'center', marginTop: 10 }}/>
        <SecondaryText text={'Entrace A'} style={{ textAlign: 'center', fontFamily: Fonts.bold, marginTop: 15 }}/>
        <SlotSelector
          style={{ marginTop: 32 }}
          disabled={true}
          textStyle={{ fontFamily: Fonts.bold, fontSize: 20, textAlign: 'center' }}
          label={`#${parseInt(String(Math.random() * 10000), 10)}`}
          onPress={() => null}/>
        <SlotSelector
          disabled={true}
          style={{ marginTop: 10 }}
          label={'Today'}
          labelRight={'14:45'}
          onPress={() => null}
          selected={true}/>

        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 35, justifyContent: 'center' }}>
          <Image source={require('../../assets/icons/icon-near-me.png')}/>
          <BaseText text={'get-directions'} style={{ marginLeft: 7, fontFamily: Fonts.bold, color: Colors.oceanBlue }}/>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 23, marginLeft: 12 }}>
          <Image source={require('../../assets/icons/icon-calendar.png')}/>
          <BaseText text={'add-to-calendar'}
                    style={{ marginLeft: 7, fontFamily: Fonts.bold, color: Colors.oceanBlue }}/>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 32 }}>
        <Image source={require('../../assets/icons/faq.png')}/>
        <BaseText text={'faq'} style={{ color: 'rgba(41, 96, 129, 0.5)' }}/>

        <View style={{ paddingHorizontal: 50, marginTop: 26, alignItems: 'center' }}>
          <BaseText
            style={{ textAlign: 'center', fontSize: 14, fontFamily: Fonts.bold }}
            text={'Is it possible to get an earlier spot if I come earlier?'}/>
          <BaseText
            style={{ textAlign: 'center', marginTop: 13 }}
            text={'No. Please stick to the time displayed above. We want to embrace social distancing at checkpoints.'}/>
            <Image 
              source={require('../../assets/icons/carousel-dots.png')}
              style={{ marginTop: 44, marginBottom: 50 }} />
        </View>
      </View>
    </ScrollView>
  )
}
