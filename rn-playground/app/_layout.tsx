import { Stack } from "expo-router";

// This file is used to define the Stack screens.
// Refers to the concept of Stack Navigation, 
// which is a common and fundamental navigation pattern used in mobile applications.
export default function RootLayout() {
  return <Stack >
    {/* don't want to show the header (toolbar) */}
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>;
}
