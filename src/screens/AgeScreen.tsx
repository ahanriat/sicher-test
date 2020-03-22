import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import H1 from "components/H1";
import t from "services/translate";
import RadioList from "components/RadioList";
import ProgressBar from "components/ProgressBar";
import ButtonPrimary from "components/ButtonPrimary";
import ButtonIcon from "components/ButtonIcon";
import { setAgeRisk } from "services/QuestionnaireService";

export function AgeScreen({ navigation }) {
  const [isValid, setIsValid] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProgressBar progress={16} style={{ margin: 24 }} />
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <H1 text={t("age.title")} style={{ marginBottom: 44 }} />

        <RadioList
          options={[
            { label: t("age.under_40"), key: "under_40" },
            { label: t("age.40_50"), key: "40_50" },
            { label: t("age.51-60"), key: "51-60" },
            { label: t("age.61-70"), key: "61-70" },
            { label: t("age.71-80"), key: "71-80" },
            { label: t("age.over_80"), key: "over_80" }
          ]}
          onSelect={key => {
            setIsValid(true);
            setAgeRisk(key !== "under_40");
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
          onPress={() => navigation.navigate("DiseaseScreen")}
        />
      </View>
    </SafeAreaView>
  );
}
