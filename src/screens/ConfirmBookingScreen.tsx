import BaseText from 'components/BaseText';
import ButtonPrimary from 'components/ButtonPrimary';
import SecondaryText from 'components/SecondaryText';
import SlotSelector from 'components/SlotSelector';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors } from 'services/Colors';
import { Fonts } from 'services/Fonts';
import getCenter from 'services/TestCenterService';


interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    marginTop: 20,
  }
});

export default function ConfirmBookingScreen(props) {
  const { availableSlot } = props.route.params;
  const center = getCenter(availableSlot.testCenterId);
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/map-test-center.png')}/>
      <View style={{ alignItems: 'center' }}>
        <BaseText text={center.name} style={{ fontFamily: Fonts.bold, fontSize: 20, marginBottom: 10 }}/>
        <SecondaryText text={center.address} style={{ textAlign: 'center' }}/>
        <TouchableOpacity>
          <BaseText text={'get-directions'}
                    style={{ marginTop: 20, color: Colors.oceanBlue, textDecorationLine: 'underline' }}/>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 50, marginTop: 80 }}>
        <SlotSelector
          disabled={true}
          label={availableSlot.dayOfWeek}
          labelRight={availableSlot.time}
          onPress={() => null}
          selected={true}/>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image source={require('../../assets/icons/decline-booking.png')}/>
          </TouchableOpacity>
          <ButtonPrimary
            iconName={'arrowright'}
            label={'Confirm booking'}
            onPress={() => props.navigation.navigate('BookingDetails', { availableSlot })}/>

        </View>
      </View>
      <SecondaryText style={{ textAlign: 'center', marginTop: 70 }} text={'confirmation-disclaimer'}/>
    </View>
  )
}
