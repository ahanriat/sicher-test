import * as React from "react";
import { Text, StyleProp, ViewStyle, View } from "react-native";
import Gradient from "./Gradient";
import TouchableScale from "./TouchableScale";

export default function ButtonSecondary(props: ButtonProps) {
  return (
    <TouchableScale
      onPress={props.onPress}
      style={[
        props.style,
        {
          overflow: "visible"
        }
      ]}
    >
      <Gradient
        style={{
          borderRadius: 24,
          height: 48,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 12,
            paddingHorizontal: 24,
            marginHorizontal: 2,
            borderRadius: 22,
            height: 44
          }}
        >
          <Text style={{ fontSize: 16, color: "#296081", fontWeight: "bold" }}>
            {props.label}
          </Text>
        </View>
      </Gradient>
    </TouchableScale>
  );
}

interface ButtonProps {
  label: string;
  icon?: unknown;
  onPress(): void;
  style?: StyleProp<ViewStyle>;
}
