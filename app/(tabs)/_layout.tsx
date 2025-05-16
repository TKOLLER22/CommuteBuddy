import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ridesOverview"
        options={{
          title: "Rides",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="car.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="myRidesOverview"
        options={{
          title: "My Rides",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="person.crop.circle.fill"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="balanceOverview"
        options={{
          title: "Balance",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="dollarsign.circle.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
