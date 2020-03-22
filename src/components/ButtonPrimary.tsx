import * as React from "react";
import { Text, StyleProp, ViewStyle } from "react-native";
import Gradient from "./Gradient";
import TouchableScale from "./TouchableScale";

import { AntDesign } from "@expo/vector-icons";

export default function ButtonPrimary(props: ButtonProps) {
  return (
    <TouchableScale
      disabled={props.disabled}
      onPress={props.onPress}
      style={[
        props.style,
        {
          opacity: props.disabled ? 0.5 : 1,
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
        <>
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            {props.label}
          </Text>
          {props.iconName && (
            <AntDesign
              name={props.iconName}
              size={20}
              color="white"
              style={{
                marginLeft: 8,
                height: 20,
                marginRight: -8
              }}
            />
          )}
        </>
      </Gradient>
    </TouchableScale>
  );
}

interface ButtonProps {
  label: string;
  disabled?: boolean;
  iconName?: unknown;
  onPress(): void;
  style?: StyleProp<ViewStyle>;
}
