import RiseAnimation from "components/animations/RiseAnimation";
import TobogganAnimation from "components/animations/TobogganAnimation";
import BaseText from "components/BaseText";
import ButtonPrimary from "components/ButtonPrimary";
import SecondaryText from "components/SecondaryText";
import * as React from "react";
import {
  Image,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  Linking
} from "react-native";
import { Fonts } from "services/Fonts";
import t from "services/translate";
import { isTestPositive } from "services/QuestionnaireService";

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: Fonts.regular,
    fontWeight: "900"
  }
});

export default function DiagnosisResultScreen({ navigation }) {
  if (isTestPositive()) {
    return (
      <View style={styles.container}>
        <RiseAnimation>
          <Image
            source={require("../../assets/doctor-not-tested.png")}
            style={{ width: 175, height: 139 }}
          />
          <BaseText
            text={t("test-result-positive")}
            style={{ marginTop: 33, fontFamily: Fonts.bold }}
          />
          <ButtonPrimary
            style={{ marginVertical: 30 }}
            label={t("find-closest-test-centers")}
            iconName={"arrowright"}
            onPress={() => navigation.navigate("LoadingLocation")}
          />

          <Image source={require("../../assets/icons/warning-icon.png")} />
          <SecondaryText text={t("allow-location")} />
          <SecondaryText text={t("we-dont-store-datas")} />
        </RiseAnimation>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <RiseAnimation>
        <Image
          source={require("../../assets/doctor-test-ok.png")}
          style={{ width: 175, height: 139 }}
        />
        <BaseText
          text={t("test-result-negative")}
          style={{ marginTop: 33, fontFamily: Fonts.bold }}
        />
        <ButtonPrimary
          style={{ marginVertical: 30 }}
          label={t("find-help")}
          iconName={"arrowright"}
          onPress={() => {
            Linking.openURL(
              "https://www.bundesgesundheitsministerium.de/coronavirus.html"
            );
            setTimeout(() => navigation.navigate("LandingScreen"), 1000);
          }}
        />
      </RiseAnimation>
    </View>
  );
}
