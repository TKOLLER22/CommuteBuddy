import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

export default function Add() {
  return (
    <>
      <ThemedView style={{position: 'absolute', top: '8%', left:'5%'}}>
        <ThemedText type="title">Add Your Route</ThemedText>
      </ThemedView>
    </>
  );
}
