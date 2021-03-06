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
            label={option.label}
            key={option.label}
            onPress={() => {
              setSelectedIndex(index);
              props.onSelect(option.key);
            }}
          />
        ) : (
          <RadioButtonUnchecked
            label={option.label}
            key={option.key}
            onPress={() => {
              setSelectedIndex(index);
              props.onSelect(option.key);
            }}
          />
        )
      )}
    </View>
  );
}

export interface RadioListProps {
  options: Array<{
    label: string;
    key: string;
  }>;
  onSelect(key: string): void;
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
      <Image
        source={require("assets/icons/icon-radio-unchecked.png")}
        style={{ width: 15, height: 15 }}
      />
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
      <Image
        source={require("assets/icons/icon-radio-checked.png")}
        style={{ width: 15, height: 15 }}
      />
      <Text
        style={{
          marginLeft: 8,
          fontSize: 24,
          color: "#44E98A"
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
