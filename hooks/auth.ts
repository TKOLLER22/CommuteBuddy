import { supabase } from "@/lib/supabase";

export async function loginWithEmail({ email, password }: { email: string; password: string }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);
    throw error;
  }

  return data; // includes session and user
}