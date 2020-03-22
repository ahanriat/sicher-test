import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import H1 from "components/H1";
import t from "services/translate";
import RadioList from "components/RadioList";
import ProgressBar from "components/ProgressBar";
import ButtonPrimary from "components/ButtonPrimary";
import ButtonIcon from "components/ButtonIcon";
import { setCoughRisk } from "services/QuestionnaireService";

export function RiskCountryScreen({ navigation }) {
  const [isValid, setIsValid] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProgressBar progress={50} style={{ margin: 24 }} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: 40
        }}
      >
        <H1
          text={t("risk-country.title")}
          style={{ textAlign: "center", marginBottom: 40 }}
        />

        <RadioList
          options={[
            { label: t("risk-country.germany"), key: "germany" },
            { label: t("risk-country.italy"), key: "italy" },
            { label: t("risk-country.china"), key: "china" },
            { label: t("risk-country.south_korea"), key: "south_korea" },
            { label: t("risk-country.france"), key: "france" },
            { label: t("risk-country.austria"), key: "austria" },
            { label: t("risk-country.spain"), key: "spain" },
            { label: t("risk-country.usa"), key: "usa" },
            {
              label: t("global.no"),
              key: "none"
            }
          ]}
          onSelect={key => {
            setIsValid(true);
            setCoughRisk(key !== "none");
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
          disabled={!isValid}
          label={t("global.next-question")}
          iconName="arrowright"
          onPress={() => navigation.navigate("RiskContactScreen")}
        />
      </View>
    </SafeAreaView>
  );
}
