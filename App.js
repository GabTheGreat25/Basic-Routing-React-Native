import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import slide1 from "./components/slide1";
import slide2 from "./components/slide2";
import slide3 from "./components/slide3";

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="slide1">
        <Stack.Screen name="slide1" component={slide1} />
        <Stack.Screen name="slide2" component={slide2} />
        <Stack.Screen name="slide3" component={slide3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
