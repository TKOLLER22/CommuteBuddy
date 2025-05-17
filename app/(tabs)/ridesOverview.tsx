import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

export default function RidesOverview() {
  return (
    <>
      <ThemedView style={{position: 'absolute', top: '8%', left:'5%'}}>
        <ThemedText type="title">Look For a Ride</ThemedText>
      </ThemedView>
    </>
  );
}
