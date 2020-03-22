import React from "react";
import { Image, SafeAreaView, View } from "react-native";
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 44
      }}
    >
      <RiseAnimation staggerDuration={100}>
        <Image
          source={require("assets/sichertest-logo.png")}
          style={{ width: 120, height: 45 }}
        />
        <Image
          style={{ width: 175, height: 139 }}
          source={require("assets/doctor-illu.png")}
        />

        <View style={{ padding: 44, alignItems: "center" }}>
          <Image
            style={{ width: 72, height: 72 }}
            source={require("assets/icons/warning-icon.png")}
          />

          <BaseText
            text={t("landing.disclaimer").toUpperCase()}
            style={{ marginBottom: 40, fontWeight: "bold" }}
          />
          <SecondaryText
            style={{ textAlign: "center", maxWidth: 400 }}
            text={t("landing.disclaimer.message")}
          />
        </View>
        <ButtonPrimary
          label={t("landing.cta.take-the-test")}
          iconName={"arrowright"}
          onPress={() => navigation.navigate("Questionnaire")}
        />
      </RiseAnimation>
    </SafeAreaView>
  );
}
