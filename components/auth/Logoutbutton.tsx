import { ThemedButton } from "@/components/ThemedButton";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };

  return <ThemedButton title="Logout" onPress={handleLogout} />;
}
