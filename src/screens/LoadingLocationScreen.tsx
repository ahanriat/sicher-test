import React, { useEffect } from "react";
import SecondaryText from "components/SecondaryText";
import { Image, StyleSheet, View, Animated } from "react-native";
import t from "services/translate";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Fonts } from "services/Fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function LoadingLocationScreen(props) {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(200),
      Animated.spring(animatedValue, {
        useNativeDriver: true,
        toValue: 1,
        speed: 0.8
      })
    ]).start();
    const timout = setTimeout(() => {
      props.navigation.navigate("SlotSelector");
    }, 2000);

    return () => {
      clearTimeout(timout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 1.3, 1]
              })
            }
          ]
        }}
      >
        <Image
          style={{ width: 187, height: 187, marginVertical: 44 }}
          source={require("../../assets/radar-search-image.png")}
        />
      </Animated.View>
      <SecondaryText
        text={t("searching-for-centers-around-you")}
        style={{
          marginTop: 27
          // fontFamily: Fonts.bold,
          // color: Colors.blueGrey
        }}
      />
    </View>
  );
}
