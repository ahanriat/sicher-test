import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BookingDetailsScreen from 'screens/BookingDetailsScreen';
import ConfirmBookingScreen from "screens/ConfirmBookingScreen";
import DiagnosisResultScreen from "screens/DiagnosisResultScreen";
import LoadingLocationScreen from "screens/LoadingLocationScreen";

import LoadingScreen from "screens/LoadingScreen";
import SlotSelectorScreen from "screens/SlotSelectorScreens";
import { Colors } from "services/Colors";
import { loadFontsAsync } from "services/Fonts";
import LandingScreen from "screens/LandingScreen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

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
        <Stack.Screen name="BookingDetails" component={BookingDetailsScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
