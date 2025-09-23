import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuth = false;

  useEffect(() => { // run after the react render commit the change to the DOM.
    if (!isAuth) {
      router.replace("/auth");
    }
  });

  return <>{children}</>;
}

// This file is used to define the Stack screens.
// Refers to the concept of Stack Navigation, 
// which is a common and fundamental navigation pattern used in mobile applications.
export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack >
        {/* don't want to show the header (toolbar) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
}
