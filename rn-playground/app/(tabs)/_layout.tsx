import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// This file is used to define the Tabs screens.
// Refers to the concept of Stack Navigation using tab.
export default function TabsLayout() {
  return <Tabs
    screenOptions={{
      headerStyle: { backgroundColor: "#f5f5f5" },
      headerShadowVisible: false,
      tabBarStyle: {
        backgroundColor: "#f5f5f5",
        borderWidth: 0,
        elevation: 0,
        shadowOpacity: 0
      },
      tabBarActiveTintColor: "#6200ee",
      tabBarInactiveTintColor: "#666666",
    }}>
    <Tabs.Screen
      name="index"
      options={{
        title: "Today's Habits",
        tabBarIcon: ({ color, focused, size }) => {
          return <MaterialCommunityIcons name="calendar-today" size={size} color={color} />;
        }
      }} />
    <Tabs.Screen
      name="streaks"
      options={{
        title: "Streaks",
        tabBarIcon: ({ color, focused, size }) => {
          return <MaterialCommunityIcons name="chart-line" size={size} color={color} />;
        }
      }} />

    <Tabs.Screen
      name="add-habit"
      options={{
        title: "Add Habit",
        tabBarIcon: ({ color, focused, size }) => {
          return <MaterialCommunityIcons name="plus-circle" size={size} color={color} />;
        }
      }} />
  </Tabs>;
}
