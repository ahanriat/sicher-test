import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

interface MaxWidthProps {
  children: React.ReactNode;
  maxWidth?: number;
  style?: StyleProp<ViewStyle>;
}

export default function MaxWidth(props: MaxWidthProps) {
  const { style, maxWidth = 375, children } = props;
  return (
    <View
      style={[
        { flex: 1, flexDirection: "row", justifyContent: "center" },
        style
      ]}
    >
      <View style={{ maxWidth, flex: 1 }}>{children}</View>
    </View>
  );
}
