import React from "react";
import { View, Text, Button } from "react-native";

export default function Screen3({ navigation }) {
  return (
    <View>
      <Text>This is Screen 3</Text>
      <Button
        title="Go to Slide 1"
        onPress={() => navigation.navigate("slide1")}
      />
      <Button
        title="Go to Slide 2"
        onPress={() => navigation.navigate("slide2")}
      />
    </View>
  );
}
