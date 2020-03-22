import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import H1 from "components/H1";
import t from "services/translate";
import RadioList from "components/RadioList";
import ProgressBar from "components/ProgressBar";
import ButtonPrimary from "components/ButtonPrimary";
import ButtonIcon from "components/ButtonIcon";
import { setDiseaseRisk } from "services/QuestionnaireService";

export function DiseaseScreen({ navigation }) {
  const [isValid, setIsValid] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProgressBar progress={32} style={{ margin: 24 }} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: 40
        }}
      >
        <H1
          text={t("disease.title")}
          style={{ textAlign: "center", marginBottom: 40 }}
        />

        <RadioList
          options={[
            { label: t("disease.lung_condition"), key: "lung_condition" },
            { label: t("disease.diabetes"), key: "diabetes" },
            { label: t("disease.obesity"), key: "obesity" },
            { label: t("global.no"), key: "none" },
            { label: t("disease.unknown"), key: "unknown" }
          ]}
          onSelect={key => {
            setIsValid(true);
            setDiseaseRisk(key !== "none" && key !== "unknow");
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
          onPress={() => navigation.navigate("RiskCountryScreen")}
        />
      </View>
    </SafeAreaView>
  );
}
