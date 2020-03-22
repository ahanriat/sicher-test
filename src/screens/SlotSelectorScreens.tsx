import RiseAnimation from 'components/animations/RiseAnimation';
import BaseText from 'components/BaseText';
import SecondaryText from 'components/SecondaryText';
import SlotSelector from 'components/SlotSelector';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';

interface Styles {
  container: ViewStyle;
  slotsContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1
  },
  slotsContainer: {
    marginTop: 40,
    paddingHorizontal: 70
  }
});

export default function SlotSelectorScreen(props) {
  // @ts-ignore
  const theSlots = [...Array(10).keys()]
    .map((i) => {
      const dayOfWeek = i > 6 ? 'Tomorow' : 'Today';
      const time = `${i + 6}:${i > 6 ? i - i : i}${i % 2 === 0 ? 5 : 0}`;
      return {
        dayOfWeek,
        time,
        testCenterId: 0
      }
    })

  const [slots] = useState(theSlots);

  return (
    <RiseAnimation style={styles.container}>
      <FlatList
        data={slots}
        ListHeaderComponent={() => {
          return (
            <View style={{ alignItems: 'center', marginBottom: 40 }}>
              <Image
                source={require('../../assets/search-results-image.png')}
              />
              <SecondaryText
                text={'search-results'}
                style={{ marginTop: 24 }}
              />
              <BaseText
                style={{ textAlign: 'center' }}
                text={'recommended-slots'}
              />
            </View>
          );
        }}
        renderItem={({ item }) => {
          const availableSlot = {
            ...item,
          }
          return (
            <SlotSelector
              style={{ marginBottom: 16 }}
              label={item.dayOfWeek}
              labelRight={item.time}
              onPress={() => props.navigation.navigate('ConfirmBooking', { availableSlot })}
            />
          );
        }}
        style={styles.slotsContainer}
      />
    </RiseAnimation>
  );
}
