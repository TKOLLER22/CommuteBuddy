import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { View } from "react-native";

export default function Register() {
  return (
    <>
      <View
        style={{
          position: "absolute",
          top: "8%",
          left: "5%",
        }}
      >
        <ThemedText type="title">Register</ThemedText>
      </View>

      <ThemedView></ThemedView>
    </>
  );
}
