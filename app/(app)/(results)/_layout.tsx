import React from "react";
import { Stack } from "expo-router"; // Import Stack from Expo Router for navigation

const ResultsStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="results" />
    </Stack>
  );
};

export default ResultsStackLayout; // Export the ResultsStackLayout component as default

