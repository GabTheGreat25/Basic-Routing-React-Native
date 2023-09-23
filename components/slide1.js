import React from "react";
import { View, Text, Button } from "react-native";

export default function Screen1({ navigation }) {
  return (
    <View>
      <Text>This is Screen 1</Text>
      <Button
        title="Go to Slide 2"
        onPress={() => navigation.navigate("slide2")}
      />
      <Button
        title="Go to Slide 3"
        onPress={() => navigation.navigate("slide3")}
      />
    </View>
  );
}
