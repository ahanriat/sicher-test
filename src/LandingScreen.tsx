import * as React from "react";
import BaseText from "components/BaseText";
import { View, Image } from "react-native";
import ButtonPrimary from "components/ButtonPrimary";
import ButtonSecondary from "components/ButtonSecondary";
import t from "services/translate";
import InputText from "components/TextInput";

export default function LandingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
      <Image
        source={require("../assets/doctor-illu.png")}
        style={{ width: 175, height: 139 }}
      />
      <BaseText text={t("Home Page")} />

      <ButtonPrimary
        style={{ margin: 24 }}
        label={t("Go to setings")}
        iconName={"arrowright"}
        onPress={() => navigation.navigate("Settings")}
      />
      <ButtonPrimary
        style={{ margin: 24 }}
        label={t("Go to setings")}
        onPress={() => navigation.navigate("Settings")}
      />
      <BaseText text={"Home Page"} />
      <InputText placeholder={"Test"} />
      <ButtonSecondary
        style={{ margin: 24 }}
        label={t("Go to setings")}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}
