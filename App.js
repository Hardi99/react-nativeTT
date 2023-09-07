import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./containers/HomeScreen";
import PopularScreen from "./containers/PopularScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Films Populaires" component={PopularScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
