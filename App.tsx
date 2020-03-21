import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./src/LandingScreen";
import LoadingScreen from "./src/LoadingScreen";
import { loadFontsAsync } from "services/Fonts";

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
