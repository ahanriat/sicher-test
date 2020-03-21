import React from "react";
import { View, SafeAreaView } from "react-native";
import H1 from "components/H1";
import t from "services/translate";
import RadioList from "components/RadioList";
import ProgressBar from "components/ProgressBar";
import ButtonPrimary from "components/ButtonPrimary";
import ButtonIcon from "components/ButtonIcon";
import BaseText from "components/BaseText";

export function CoughScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProgressBar progress={100} style={{ margin: 24 }} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: 40
        }}
      >
        <H1
          text={t("Do you have a persistent cough?")}
          style={{ textAlign: "center", marginBottom: 40 }}
        />

        <RadioList
          options={[
            { label: t("Yes"), key: "yes" },
            { label: t("No"), key: "no" }
          ]}
          onSelect={() => {
            /** TODO */
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 20,
          justifyContent: "space-around"
        }}
      >
        <ButtonIcon iconName="arrowleft" onPress={navigation.goBack} />
        <ButtonPrimary
          label={t("Next question")}
          iconName="arrowright"
          onPress={() => navigation.navigate("DiagnosisResultScreen")}
        />
      </View>
    </SafeAreaView>
  );
}
