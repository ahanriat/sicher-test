import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TouchableScale from "./TouchableScale";

export default function ButtonIcon({
  onPress,
  iconName,
  style
}: ButtonIconProps) {
  return (
    <TouchableScale onPress={onPress} style={style}>
      <View
        style={{
          backgroundColor: "#E6F2F3",
          width: 48,
          height: 48,
          borderRadius: 24,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <AntDesign
          name={iconName}
          size={20}
          color="#296081"
          style={{
            height: 20
          }}
        />
      </View>
    </TouchableScale>
  );
}

interface ButtonIconProps {
  onPress(): void;
  iconName: string;
  style?: StyleProp<ViewStyle>;
}
