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
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <RiseAnimation staggerDuration={100}>
        <Image source={require("assets/sichertest-logo.png")} />
        <Image source={require("assets/doctor-illu.png")} />

        <View style={{ padding: 44, alignItems: "center" }}>
          <Image source={require("assets/icons/warning-icon.png")} />

          <BaseText
            text={t("Disclaimer").toUpperCase()}
            style={{ marginBottom: 40 }}
          />
          <SecondaryText
            style={{ textAlign: "center" }}
            text={t(`l Usage of this app does not substitute medical treatment by a physician or clinical diagnostics.
The CovApp serves to improve the procedures at the Charité examination centre and other outpatient clinics in connection with the novel Coronavirus SARS-CoV-2. If you currently feel seriously ill, please immediately contact a physician.`)}
          />
        </View>
        <ButtonPrimary
          label={t("Take the test")}
          iconName={"arrowright"}
          onPress={() => navigation.navigate("Questionnaire")}
        />
      </RiseAnimation>
    </SafeAreaView>
  );
}
