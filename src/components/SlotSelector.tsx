import SecondaryText from "components/SecondaryText";
import * as React from "react";
import {
  Text,
  StyleProp,
  ViewStyle,
  View,
  Image,
  TextStyle
} from "react-native";
import { Colors } from "services/Colors";
import Gradient from "./Gradient";
import TouchableScale from "./TouchableScale";

export default function SlotSelector(props: ButtonProps) {
  return (
    <TouchableScale
      disabled={props.disabled}
      onPress={props.onPress}
      style={[
        props.style,
        {
          overflow: "visible"
        }
      ]}
    >
      <Gradient
        colors={props.selected && ["#35F285", "#6FCF97"]}
        style={{
          borderRadius: 24,
          height: 48,
          justifyContent: "center"
        }}
      >
        <View
          style={{
            backgroundColor: props.selected ? "" : "white",
            paddingVertical: 12,
            paddingLeft: props.selected ? 11 : 24,
            paddingRight: 24,
            marginHorizontal: 2,
            borderRadius: 22,
            height: 44,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1
            }}
          >
            {props.selected && (
              <Image
                source={require("../../assets/icons/green-checkbox.png")}
                style={{ marginRight: 20, height: 23, width: 23 }}
              />
            )}
            <SecondaryText
              text={props.label}
              style={[
                props.selected && { color: Colors.white },
                props.textStyle
              ]}
            />
          </View>
          {props.labelRight && (
            <SecondaryText
              text={props.labelRight}
              style={props.selected && { color: Colors.white }}
            />
          )}
        </View>
      </Gradient>
    </TouchableScale>
  );
}

interface ButtonProps {
  label: string;
  labelRight?: string;
  icon?: unknown;

  onPress(): void;
  textStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
  selected?: boolean;
  disabled?: boolean;
}
