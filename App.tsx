import BaseText from 'components/Text';
import { useEffect } from 'react';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { loadFontsAsync } from 'services/loadFonts';
import Button from "./src/components/Button";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BaseText text={'Home Page'}/>
      <Button
        style={{ margin: 24 }}
        label={'Go to setings'}
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    loadFontsAsync()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
