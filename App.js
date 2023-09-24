import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Slide1 from "./components/slide1";
import Slide2 from "./components/slide2";
import Slide3 from "./components/slide3";
import Screen1 from "./components/screen1";
import Screen2 from "./components/screen2";
import Screen3 from "./components/screen3";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {/* <Stack.Navigator initialRouteName="slide1">
        <Stack.Screen
          name="slide1"
          component={Slide1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="slide2"
          component={Slide2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="slide3"
          component={Slide3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
