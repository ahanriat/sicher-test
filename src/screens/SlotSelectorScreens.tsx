import BaseText from 'components/BaseText';
import ButtonSecondary from 'components/ButtonSecondary';
import SecondaryText from 'components/SecondaryText';
import SlotSelector from 'components/SlotSelector';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { Fonts } from 'services/Fonts';


interface Styles {
  container: ViewStyle;
  slotsContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  slotsContainer: {
    marginTop: 40,
    paddingHorizontal: 70,
  }
});

export default function SlotSelectorScreen(props) {
  // @ts-ignore
  const [slots, setSlots] = useState([...Array(20).keys()]);

  return (
    <View style={styles.container}>
      <FlatList
        data={slots}
        ListHeaderComponent={() => {
         return (
           <View style={{ alignItems: 'center', marginBottom: 40 }}>
             <Image source={require('../../assets/search-results-image.png')}/>
             <SecondaryText text={'search-results'} style={{ marginTop: 24 }}/>
             <BaseText style={{ textAlign: 'center' }} text={'recommended-slots'} />
           </View>
         ) 
        }}
        renderItem={({item}) => {
          return <SlotSelector 
            style={{ marginBottom: 16 }}
            label={'toto'}
            labelRight={'titi'}                   
            onPress={() => props.navigation.navigate('ConfirmBooking')}/>
        }}
        style={styles.slotsContainer}/>
    </View>
  )
}
