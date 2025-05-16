import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import {}
export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28 }}>Let{"'"}s Commute Together!</Text>
      <View
        style={{ backgroundColor: { color }, flexDirection: "row", rowGap: 10 }}
      >
        <Button title="Login" onPress={() => router.replace("/(tabs)/add")} />
        <Button
          title="Register"
          onPress={() => router.replace("/(tabs)/add")}
        />
      </View>
    </View>
  );
}
