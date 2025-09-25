import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();   // helps to access the info in which screen user is.

  useEffect(() => { // run after the react render commit the change to the DOM.
    const inAuthGroup = segments[0] === "auth";
    if (!user && !inAuthGroup && !isLoadingUser) {
      router.replace("/auth");
    } else if (user && inAuthGroup && !isLoadingUser) {
      router.replace("/");  // redirect to the home page.
    }
  }, [user, segments]); // only run effect on change of user OR segments

  return <>{children}</>;
}

// This file is used to define the Stack screens.
// Refers to the concept of Stack Navigation, 
// which is a common and fundamental navigation pattern used in mobile applications.
export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard>
        <Stack >
          {/* don't want to show the header (toolbar) */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RouteGuard>
    </AuthProvider>
  );
}
