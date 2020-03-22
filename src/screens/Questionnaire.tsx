import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Colors } from "services/Colors";
import { AgeScreen } from "screens/AgeScreen";
import { DiseaseScreen } from "screens/DiseaseScreen";
import { RiskCountryScreen } from "screens/RiskCountryScreen";
import { RiskContactScreen } from "screens/RiskContactScreen";
import { FeverScreen } from "screens/FeverScreen";
import { CoughScreen } from "screens/CoughScreen";

const Stack = createStackNavigator();

function Questionnaire() {
  return (
    <Stack.Navigator
      headerMode={"none"}
      screenOptions={{ cardStyle: { backgroundColor: Colors.white } }}
    >
      <Stack.Screen name="AgeScreen" component={AgeScreen} />
      <Stack.Screen name="DiseaseScreen" component={DiseaseScreen} />
      <Stack.Screen name="RiskCountryScreen" component={RiskCountryScreen} />
      <Stack.Screen name="RiskContactScreen" component={RiskContactScreen} />
      <Stack.Screen name="FeverScreen" component={FeverScreen} />
      <Stack.Screen name="CoughScreen" component={CoughScreen} />
    </Stack.Navigator>
  );
}

export default Questionnaire;
