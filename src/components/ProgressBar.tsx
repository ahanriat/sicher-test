import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <View
      style={[
        props.style,
        {
          height: 12,
          alignSelf: "stretch",
          borderRadius: 12,
          flexDirection: "row",
          overflow: "hidden"
        }
      ]}
    >
      <View
        style={{
          flex: props.progress,
          backgroundColor: "#3AF087",
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12
        }}
      />
      <View
        style={{
          flex: 100 - props.progress,
          backgroundColor: "#A7D9BC",
          opacity: 0.3,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12
        }}
      />
    </View>
  );
}

interface ProgressBarProps {
  progress: number;
  style?: StyleProp<ViewStyle>;
}
