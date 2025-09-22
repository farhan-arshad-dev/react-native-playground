import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// This file is used to define the Tabs screens.
// Refers to the concept of Stack Navigation using tab.
export default function TabsLayout() {
  return <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
    <Tabs.Screen
      name="index"
      options={{
        title: "Home",
        tabBarIcon: ({ color, focused }) => {
          return focused ?
            <FontAwesome name="home" size={24} color={color} /> :
            <Ionicons name="home-outline" size={24} color={color} />
        }
      }} />

    <Tabs.Screen
      name="login"
      options={{
        title: "Login",
        tabBarIcon: ({ color, focused }) => {
          return <MaterialCommunityIcons name="login" size={24} color={color} />
        }
      }} />
  </Tabs>;
}
