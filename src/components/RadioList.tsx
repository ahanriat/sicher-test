import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity
} from "react-native";

export default function RadioList(props: RadioListProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <View style={{ alignItems: "flex-start" }}>
      {props.options.map((option, index) =>
        index === selectedIndex ? (
          <RadioButtonChecked
            label={option}
            key={option}
            onPress={() => {
              setSelectedIndex(index);
              props.onSelect(index);
            }}
          />
        ) : (
          <RadioButtonUnchecked
            label={option}
            key={option}
            onPress={() => {
              setSelectedIndex(index);
              props.onSelect(index);
            }}
          />
        )
      )}
    </View>
  );
}

export interface RadioListProps {
  options: string[];
  onSelect(index: number): void;
  style?: StyleProp<ViewStyle>;
}

function RadioButtonUnchecked(props: RadioButtonProps) {
  return (
    <TouchableOpacity
      style={[
        props.style,
        {
          flexDirection: "row",
          alignItems: "center",
          height: 56
        }
      ]}
      onPress={props.onPress}
    >
      <Image source={require("assets/icons/icon-radio-unchecked.png")} />
      <Text style={{ marginLeft: 8, fontSize: 24, color: "#296081" }}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
}

function RadioButtonChecked(props: RadioButtonProps) {
  return (
    <TouchableOpacity
      style={[
        props.style,
        {
          flexDirection: "row",
          alignItems: "center",
          height: 56
        }
      ]}
      onPress={props.onPress}
    >
      <Image source={require("assets/icons/icon-radio-checked.png")} />
      <Text
        style={{
          marginLeft: 8,
          fontSize: 24,
          color: "#44E98A",
          fontWeight: "bold"
        }}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  );
}

interface RadioButtonProps {
  label: string;
  onPress(): void;
  style?: StyleProp<ViewStyle>;
}
