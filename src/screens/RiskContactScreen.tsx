import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import H1 from "components/H1";
import t from "services/translate";
import RadioList from "components/RadioList";
import ProgressBar from "components/ProgressBar";
import ButtonPrimary from "components/ButtonPrimary";
import ButtonIcon from "components/ButtonIcon";
import BaseText from "components/BaseText";
import { setCloseContactRisk } from "services/QuestionnaireService";

export function RiskContactScreen({ navigation }) {
  const [isValid, setIsValid] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProgressBar progress={66} style={{ margin: 24 }} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: 40
        }}
      >
        <H1
          text={t("risk-contact.title")}
          style={{ textAlign: "center", marginBottom: 40 }}
        />
        <BaseText
          style={{ textAlign: "center", marginBottom: 40 }}
          text={t("risk-contact.disclaimer")}
        />

        <RadioList
          options={[
            { label: t("global.yes"), key: "yes" },
            { label: t("global.no"), key: "no" }
          ]}
          onSelect={key => {
            setIsValid(true);
            setCloseContactRisk(key === "yes");
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
          onPress={() => navigation.navigate("FeverScreen")}
        />
      </View>
    </SafeAreaView>
  );
}
