import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { Text, View } from "react-native";

export default function MyRidesOverview() {
  return (
    <>
      <View style={{ position: "absolute", top: "8%", left: "5%" }}>
        <ThemedText type="title">
          <Text>My Rides</Text>
        </ThemedText>
      </View>
    </>
  );
}
