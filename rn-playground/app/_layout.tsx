import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* To pass the auth context (data/functions) using the context hook. */}
      <AuthProvider>
        {/* 
        Provided by the react-native-paper => It serves as a context provider, 
        making the defined theme available to all React Native Paper components within its scope. 
        */}
        <PaperProvider>

          {/* 
        This will ensure that our app's UI components avoid areas that could be obscured by 
        things like the device notches and status bar. Just a way for the app to adapt screen 
        in a safe way. 
        
        In short The "safe area" refers to the region of the screen that is not 
        covered by these elements, ensuring that your app's content is fully visible and interactive.
       */}
          <SafeAreaProvider>
            <RouteGuard>
              <Stack >
                {/* don't want to show the header (toolbar) */}
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
            </RouteGuard>
          </SafeAreaProvider>
        </PaperProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
