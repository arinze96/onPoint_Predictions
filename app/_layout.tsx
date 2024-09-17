import React, { useEffect } from "react";
import { Slot } from "expo-router"; // Import Stack from Expo Router for navigation
import {
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins"; // Import Poppins fonts and useFonts hook
import * as SplashScreen from "expo-splash-screen";
import { Alert } from "react-native";
import AuthContextProvider from "@/store/context/auth-context";
import { Provider } from "react-redux";
import { store } from "@/store/redux/store";
import { RootSiblingParent } from "react-native-root-siblings";
import { QueryClient, QueryClientProvider } from "react-query";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/utils/toaster";

// RootLayout component to define the root layout of the app
const RootLayout = () => {
  // Load Poppins fonts and track loading status and errors
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  // useEffect hook to hide splash screen once fonts are loaded or if there is an error
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    if (error) {
      Alert.alert(error.name, error.message);
    }
  }, [loaded, error]); // Dependency array for useEffect

  // If fonts are not loaded and there is no error, return null (render nothing)
  if (!loaded && !error) {
    return null;
  }

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RootSiblingParent>
            <Slot />
          </RootSiblingParent>
        </AuthContextProvider>
        <Toast config={toastConfig} />
      </QueryClientProvider>
    </Provider>
  );
};

export default RootLayout; // Export the RootLayout component as default
