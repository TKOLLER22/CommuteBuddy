import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react"; // ✅ Added useState
import { ActivityIndicator, View } from "react-native";

export default function Home() {
  const [loading, setLoading] = useState(true); // ✅ This line now works
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        router.replace("/add"); // ✅ user is logged in
      } else {
        setLoading(false); // ✅ show login/register buttons
      }
    };

    checkSession();
  }, []); // ✅ Only run once on mount

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <ThemedText
        type="title"
        style={{ position: "absolute", top: "8%", left: "5%" }}
      >
        Welcome To CommuteBuddy!
      </ThemedText>
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <ThemedButton
            title="Login"
            onPress={() => router.replace("/login")}
          />
          <ThemedButton
            title="Register"
            onPress={() => router.replace("/register")}
          />
        </View>
      </View>
    </>
  );
}
