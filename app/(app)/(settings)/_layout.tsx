import React from "react";
import { Stack } from "expo-router"; // Import Stack from Expo Router for navigation

const SettingsStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="makebets" />
    </Stack>
  );
};

export default SettingsStackLayout; // Export the SettingsStackLayout component as default

