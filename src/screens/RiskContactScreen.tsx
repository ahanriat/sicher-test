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
          text={t("Have you had close contact with a confirmed case?")}
          style={{ textAlign: "center", marginBottom: 40 }}
        />
        <BaseText
          style={{ textAlign: "center", marginBottom: 40 }}
          text="Close contact with a confirmed case means:
Face-to-face contact for longer than 15 minutes 
Direct, physical contact (touching, shaking hands, kissing)
Being within 2 meters of the person for more than 15 minutes.
Contact with or exchange of body fluids
Living in the same apartment"
        />

        <RadioList
          options={[
            { label: t("Yes"), key: "yes" },
            { label: t("No"), key: "no" }
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
          label={t("Next question")}
          iconName="arrowright"
          onPress={() => navigation.navigate("FeverScreen")}
        />
      </View>
    </SafeAreaView>
  );
}
