import React from "react";
import {
  ViewStyle,
  Platform,
  Linking,
  View,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import getCenter from "services/TestCenterService";
import BaseText from "components/BaseText";
import t from "services/translate";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Fonts } from "services/Fonts";
import SecondaryText from "components/SecondaryText";
import SlotSelector from "components/SlotSelector";

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1
  },
  subContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    marginHorizontal: 40,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 25,
    shadowColor: "rgba(119, 191, 233, 0.29)",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 8,
    marginTop: 52,
    elevation: 5
  }
});

export default function BookingDetailsScreen(props) {
  const { availableSlot } = props.route.params;
  const center = getCenter(availableSlot.testCenterId);
  const resetRoute = () => {
    props.navigation.popToTop();
  };

  const openMaps = () => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
    const latLng = `52.5200,13.4050`;
    const label = center.address;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 28
          }}
        >
          <BaseText
            text={t("booking-details.title")}
            style={{ color: "rgba(41, 96, 129, 0.4)" }}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 20 }}
            onPress={resetRoute}
          >
            <BaseText
              text={t("booking-details.edit")}
              style={{ color: Colors.oceanBlue }}
            />
          </TouchableOpacity>
        </View>
        <BaseText
          text={center.name}
          style={{ fontFamily: Fonts.bold, fontSize: 20, textAlign: "center" }}
        />
        <SecondaryText
          text={center.address}
          style={{ textAlign: "center", marginTop: 10 }}
        />
        <SecondaryText
          text={"Eingang A"}
          style={{ textAlign: "center", fontFamily: Fonts.bold, marginTop: 15 }}
        />
        <SlotSelector
          style={{ marginTop: 32 }}
          disabled={true}
          textStyle={{
            fontFamily: Fonts.bold,
            fontSize: 20,
            textAlign: "center",
            flex: 1
          }}
          label={`#${parseInt(String(Math.random() * 10000), 10)}`}
          onPress={() => null}
        />
        <SlotSelector
          disabled={true}
          style={{ marginTop: 10 }}
          label={availableSlot.dayOfWeek}
          labelRight={availableSlot.time}
          onPress={() => null}
          selected={true}
        />

        <TouchableOpacity
          onPress={openMaps}
          style={{
            flexDirection: "row",
            marginTop: 35,
            justifyContent: "center"
          }}
        >
          <Image
            source={require("../../assets/icons/icon-near-me.png")}
            style={{ height: 18, width: 18 }}
          />
          <BaseText
            text={t("booking-details.get-directions")}
            style={{
              marginLeft: 7,
              fontFamily: Fonts.bold,
              color: Colors.oceanBlue
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Your appointment was added to your calendar")
          }
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 23,
            marginLeft: 12
          }}
        >
          <Image
            source={require("../../assets/icons/icon-calendar.png")}
            style={{ height: 18, width: 16 }}
          />
          <BaseText
            text={t("booking-details.add-to-calendar")}
            style={{
              marginLeft: 7,
              fontFamily: Fonts.bold,
              color: Colors.oceanBlue
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 32 }}>
        <Image
          source={require("../../assets/icons/faq.png")}
          style={{ width: 29, height: 29 }}
        />
        <BaseText
          text={t("booking-details.faq")}
          style={{ color: "rgba(41, 96, 129, 0.5)", marginTop: 10 }}
        />

        <View
          style={{ paddingHorizontal: 50, marginTop: 26, alignItems: "center" }}
        >
          <BaseText
            style={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: Fonts.bold
            }}
            text={t("booking-details.question-1")}
          />
          <BaseText
            style={{ textAlign: "center", marginTop: 13 }}
            text={t("booking-details.answer-1")}
          />
          <Image
            source={require("../../assets/icons/carousel-dots.png")}
            style={{ marginTop: 44, marginBottom: 50 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
