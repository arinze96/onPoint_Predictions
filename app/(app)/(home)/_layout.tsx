import React from "react";
import { Stack } from "expo-router"; // Import Stack from Expo Router for navigation

// HomeStackLayout component to define the root layout of the app
const HomeStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default HomeStackLayout; // Export the HomeStackLayout component as default

