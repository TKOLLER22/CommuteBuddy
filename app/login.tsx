import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { loginWithEmail } from "@/hooks/auth";
import { useRouter } from "expo-router";
import React, { useState } from "react";

import { StyleSheet } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await loginWithEmail({ email, password });
      router.replace("/add"); // Navigate to home/dashboard
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Login
        </ThemedText>

        {/* replace with your UI */}
        <ThemedTextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <ThemedTextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <ThemedButton
          title={loading ? "Logging in..." : "Login"}
          onPress={handleLogin}
        />
        <ThemedText
          type="link"
          onPress={() => {
            router.replace("/register");
          }}
          style={styles.loginLink}
        >
          {"Don't have an account?"}
        </ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 15,
    textAlign: "left",
  },
  loginLink: {
    marginTop: 15,
    textAlign: "center",
  },
});
