import { LogoutButton } from "@/components/auth/Logoutbutton";
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { Text, View } from "react-native";

export default function AccountOverview() {
  return (
    <>
      <View style={{ position: "absolute", top: "8%", left: "5%" }}>
        <ThemedText type="title">
          <Text>Add Your Route</Text>
        </ThemedText>
        <LogoutButton />
      </View>
    </>
  );
}
