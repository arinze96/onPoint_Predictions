import React from "react";
import { Stack } from "expo-router"; // Import Stack from Expo Router for navigation

const PredictionsStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="predictions" />
      <Stack.Screen name="add-predictions" />
    </Stack>
  );
};

export default PredictionsStackLayout; // Export the PredictionsStackLayout component as default

