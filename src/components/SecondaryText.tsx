import BaseText, { BaseTextProps } from "components/BaseText";
import React from "react";
import { Colors } from "services/Colors";

export default function SecondaryText(props: BaseTextProps) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: 16,
          color: Colors.blueGrey
        },
        props.style
      ]}
    />
  );
}
