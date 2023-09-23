import React from "react";
import { View, Text, Button } from "react-native";

export default function Screen2({ navigation }) {
  return (
    <View>
      <Text>This is Screen 2</Text>
      <Button
        title="Go to Slide 1"
        onPress={() => navigation.navigate("slide1")}
      />
      <Button
        title="Go to Slide 3"
        onPress={() => navigation.navigate("slide3")}
      />
    </View>
  );
}
