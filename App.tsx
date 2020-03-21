import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BookingDetailsScreen from "screens/BookingDetailsScreen";
import ConfirmBookingScreen from "screens/ConfirmBookingScreen";
import DiagnosisResultScreen from "screens/DiagnosisResultScreen";
import LoadingLocationScreen from "screens/LoadingLocationScreen";

import LoadingScreen from "screens/LoadingScreen";
import SlotSelectorScreen from "screens/SlotSelectorScreens";
import { Colors } from "services/Colors";
import { loadFontsAsync } from "services/Fonts";
import LandingScreen from "screens/LandingScreen";
import { AgeScreen } from "screens/AgeScreen";
import { DiseaseScreen } from "screens/DiseaseScreen";
import { RiskCountryScreen } from "screens/RiskCountryScreen";
import { RiskContactScreen } from "screens/RiskContactScreen";
import { FeverScreen } from "screens/FeverScreen";
import { CoughScreen } from "screens/CoughScreen";

const Stack = createStackNavigator();

function App() {
  const [appStatus, setAppStatus] = useState("loading");
  useEffect(() => {
    loadFontsAsync().then(() => setAppStatus("success"));
  }, []);

  if (appStatus === "loading") {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={"none"}
        screenOptions={{ cardStyle: { backgroundColor: Colors.white } }}
      >
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Home" component={DiagnosisResultScreen} />
        <Stack.Screen
          name="LoadingLocation"
          component={LoadingLocationScreen}
        />
        <Stack.Screen name="SlotSelector" component={SlotSelectorScreen} />
        <Stack.Screen name="ConfirmBooking" component={ConfirmBookingScreen} />
        <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />

        <Stack.Screen name="AgeScreen" component={AgeScreen} />
        <Stack.Screen name="DiseaseScreen" component={DiseaseScreen} />
        <Stack.Screen name="RiskCountryScreen" component={RiskCountryScreen} />
        <Stack.Screen name="RiskContactScreen" component={RiskContactScreen} />
        <Stack.Screen name="FeverScreen" component={FeverScreen} />
        <Stack.Screen name="CoughScreen" component={CoughScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
