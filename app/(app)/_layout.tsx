import React from "react";
// import { useAuth } from "@/store/context/auth-context";
import { Redirect, Tabs } from "expo-router";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

// AppLayout component to define the root layout of the app
const AppLayout = () => {
  // const { token } = useAuth();

  // if (!token) return <Redirect href={"/login"} />;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          height: 72,
          elevation: 0,
          backgroundColor: "#35AC7E",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarLabelStyle: { color: "#fff" },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }: any) => (
            <MaterialCommunityIcons
              name={focused ? "home-variant" : "home-variant-outline"}
              size={20}
              color={focused ? "#fff" : "#F3F3F3"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(predictions)"
        options={{
          tabBarLabel: "Predictions",
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome5
              name={focused ? "exchange-alt" : "exchange-alt"}
              size={20}
              color={focused ? "#fff" : "#F3F3F3"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(makebets)"
        options={{
          tabBarLabel: "Makebets",
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              size={20}
              color={focused ? "#fff" : "#F3F3F3"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(results)"
        options={{
          tabBarLabel: "Results",
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome6
              name={focused ? "file-lines" : "file-lines"}
              size={20}
              color={focused ? "#fff" : "#F3F3F3"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={20}
              color={focused ? "#fff" : "#F3F3F3"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppLayout; // Export the AppLayout component as default
