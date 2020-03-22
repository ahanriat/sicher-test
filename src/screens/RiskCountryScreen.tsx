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
          text={t(
            "Have you been traveling to the risk areas in the past 4 weeks?"
          )}
          style={{ textAlign: "center", marginBottom: 40 }}
        />

        <RadioList
          options={[
            { label: t("Germany"), key: "germany" },
            { label: t("Italy"), key: "italy" },
            { label: t("China"), key: "china" },
            { label: t("South Korea"), key: "south_korea" },
            { label: t("France"), key: "france" },
            { label: t("Austria"), key: "austria" },
            { label: t("Spain"), key: "spain" },
            { label: t("USA"), key: "usa" },
            {
              label: t("No"),
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
          label={t("Next question")}
          iconName="arrowright"
          onPress={() => navigation.navigate("RiskContactScreen")}
        />
      </View>
    </SafeAreaView>
  );
}
