import BaseText from "components/BaseText";
import { useEffect } from "react";
import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ButtonPrimary from "components/ButtonPrimary";
import ButtonSecondary from "components/ButtonSecondary";
import InputText from 'components/TextInput';
import { loadFontsAsync } from 'services/Fonts';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
      <Image
        source={require("./assets/doctor-illu.png")}
        style={{ width: 175, height: 139 }}
      />
      <BaseText text={"Home Page"} />

      <ButtonPrimary
        style={{ margin: 24 }}
        label={"Go to setings"}
        iconName={"arrowright"}
        onPress={() => navigation.navigate("Settings")}
      />
      <ButtonPrimary
        style={{ margin: 24 }}
        label={"Go to setings"}
        onPress={() => navigation.navigate("Settings")}
      />
      <BaseText text={'Home Page'}/>
      <InputText placeholder={'Test'} />
      <ButtonSecondary
        style={{ margin: 24 }}
        label={"Go to setings"}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    loadFontsAsync();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
