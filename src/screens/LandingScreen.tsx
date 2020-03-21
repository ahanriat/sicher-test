import React from "react";
import { Image, SafeAreaView } from "react-native";
import BaseText from "components/BaseText";
import SecondaryText from "components/SecondaryText";
import t from "services/translate";
import ButtonPrimary from "components/ButtonPrimary";
import RadioList from "components/RadioList";
import RiseAnimation from "components/animations/RiseAnimation";

export default function LandingScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <RiseAnimation staggerDuration={100}>
        <Image source={require("assets/sichertest-logo.png")} />
        <Image source={require("assets/doctor-illu.png")} />
        <Image source={require("assets/icons/warning-icon.png")} />

        <BaseText text={t("landing.disclaimer.title").toUpperCase()} />
        <SecondaryText text={t("landing.disclaimer.message")} />
        <ButtonPrimary
          label={t("take-the-test")}
          iconName={"arrowright"}
          onPress={() => navigation.navigate("TestScreen")}
        />
      </RiseAnimation>
    </SafeAreaView>
  );
}
