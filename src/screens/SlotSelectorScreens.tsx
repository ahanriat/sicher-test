import RiseAnimation from "components/animations/RiseAnimation";
import BaseText from "components/BaseText";
import SecondaryText from "components/SecondaryText";
import SlotSelector from "components/SlotSelector";
import React, { useState } from "react";
import { Image, View, ViewStyle, ScrollView } from "react-native";
import t from "services/translate";
import { Fonts } from "services/Fonts";

interface Styles {
  container: ViewStyle;
  slotsContainer: ViewStyle;
}

export default function SlotSelectorScreen(props) {
  // @ts-ignore
  const theSlots = [...Array(6).keys()].map(i => {
    const dayOfWeek = i >= 5 ? t("tomorow") : t("today");
    const time = `${i + 6}:${i > 5 ? i - i : i}${i % 2 === 0 ? 5 : 0}`;
    return {
      dayOfWeek,
      time,
      testCenterId: Math.floor(Math.random() * 3)
    };
  });

  const [slots] = useState(theSlots);

  return (
    <ScrollView
      style={{
        flex: 1
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <Image
          style={{ width: 187, height: 187, marginTop: 44 }}
          source={require("../../assets/search-results-image.png")}
        />
        <SecondaryText text={t("search-results")} style={{ marginTop: 24 }} />
        <BaseText
          style={{
            textAlign: "center",
            marginTop: 20,
            fontFamily: Fonts.bold
          }}
          text={t("recommend-slots")}
        />
      </View>
      <RiseAnimation style={{ flex: 1 }}>
        {slots.map((slot, index) => (
          <SlotSelector
            key={slot.time + index}
            style={{ marginBottom: 16, width: 300, alignSelf: "center" }}
            label={slot.dayOfWeek}
            labelRight={slot.time}
            onPress={() =>
              props.navigation.navigate("ConfirmBooking", {
                availableSlot: slot
              })
            }
          />
        ))}
      </RiseAnimation>
    </ScrollView>
  );
}
