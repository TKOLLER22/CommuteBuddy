import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Oops...", "Seems like you did not fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Womp womp...", "Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Jeez...", "Passwords should be longer than 8 characters.");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            emailRedirectTo: "commutebuddy://auth/callback",
          },
        },
      });

      if (error) {
        Alert.alert("Registration failed", error.message);
      } else {
        Alert.alert(
          "Success!",
          "Account created successfully! Please check your email to confirm your account."
        );
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        router.replace("/login");
      }
    } catch (error) {
      Alert.alert("Unexpected error", String(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Register
      </ThemedText>

      <ThemedTextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words"
      />
      <ThemedTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <ThemedTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
      />
      <ThemedTextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <ThemedButton
        title={loading ? "Creating Account..." : "Create Account"}
        onPress={() => {
          if (!loading) {
            handleRegister();
          }
        }}
      />
      <ThemedText
        type="link"
        onPress={() => {
          router.replace("/login");
        }}
        style={styles.loginLink}
      >
        Already have an account?
      </ThemedText>
    </ThemedView>
  );
}

export const styles = StyleSheet.create({
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
