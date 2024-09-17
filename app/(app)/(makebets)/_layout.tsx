import React from "react";
import { Stack } from "expo-router"; // Import Stack from Expo Router for navigation

// BankingStackLayout component to define the root layout of the app
const MakebetStackLayout = () => {
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

export default MakebetStackLayout; // Export the MakebetStackLayout component as default

