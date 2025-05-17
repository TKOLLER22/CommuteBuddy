import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { View } from "react-native";

export default function Login() {
  return (
    <>
      <View
        style={{
          position: "absolute",
          top: "8%",
          left: "5%",
        }}
      >
        <ThemedText type="title">Login</ThemedText>
      </View>

      <ThemedView></ThemedView>
    </>
  );
}
