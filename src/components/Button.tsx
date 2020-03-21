import * as React from "react";
import { Text, StyleProp, ViewStyle } from "react-native";
import Gradient from "./Gradient";
import TouchableScale from "./TouchableScale";

export default function Button(props: ButtonProps) {
  return (
    <TouchableScale
      onPress={props.onPress}
      style={[
        props.style,
        {
          shadowColor: "#67BCEF",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.7,
          overflow: "visible",
          borderRadius: 24,
          shadowRadius: 8
        }
      ]}
    >
      <Gradient
        style={{
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 24,
          height: 48,
          justifyContent: "space-between",
          backgroundColor: "transparent",
          alignItems: "center",
          flexDirection: "row",
          elevation: 5
        }}
      >
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          {props.label}
        </Text>
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
