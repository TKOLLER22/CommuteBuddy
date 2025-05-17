import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <ThemedView style={{ justifyContent: "center", alignItems: "center" }}>
        <ThemedText type={"title"}>Lets Commute Together!</ThemedText>
        <ThemedView style={{ flexDirection: "row" }}>
          <ThemedButton
            title="Login"
            onPress={() => router.replace("/login")}
          />
          <ThemedButton
            title="Register"
            onPress={() => router.replace("/register")}
          />
        </ThemedView>
      </ThemedView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.light.background,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     color: Colors.light.text,
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });
