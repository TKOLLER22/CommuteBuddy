import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

export default function RidesOverview() {
  return (
    <>
      <View style={{ position: "absolute", top: "8%", left: "5%" }}>
        <ThemedText type="title">Look For a Ride</ThemedText>
      </View>
    </>
  );
}
