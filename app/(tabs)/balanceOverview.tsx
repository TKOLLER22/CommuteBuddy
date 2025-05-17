import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { Text, View } from "react-native";

export default function BalancedOverview() {
  return (
    <>
      <View style={{ position: "absolute", top: "8%", left: "5%" }}>
        <ThemedText type="title"><Text>Balance</Text></ThemedText>
      </View>
    </>
  );
}
