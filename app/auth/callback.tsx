import { supabase } from "@/lib/supabase";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";

export default function AuthCallback() {
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    const handleDeepLink = async () => {
      const { access_token, refresh_token } = params;

      if (access_token && refresh_token) {
        await supabase.auth.setSession({
          access_token: String(access_token),
          refresh_token: String(refresh_token),
        });

        router.replace("/"); // go to home or wherever
      } else {
        console.warn("No tokens in URL");
      }
    };

    handleDeepLink();
  }, [params, router]);

  return null; // or some loading indicator
}
