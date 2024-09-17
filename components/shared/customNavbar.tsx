import { View, ActivityIndicator } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "@/constants";

type NavBarProps = {
  backgroundColor: any;
  onPress: () => void;
  action: () => void;
  displayBackIcon?: undefined | "flex" | "none";
  leftIcon?: React.ReactNode;
  rightContent?: React.ReactNode;
};

const NavBar = ({
  backgroundColor,
  onPress,
  action,
  displayBackIcon,
  leftIcon,
  rightContent,
}: NavBarProps) => {
  let [fontsLoaded] = useFonts({
    Katibeh: require("../../assets/fonts/Katibeh-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="w-full h-[80%] justify-center items-center">
        <ActivityIndicator size="large" color={colors.primary.main} />
      </View>
    );
  } else {
    return (
      <View
        style={{
          backgroundColor: backgroundColor,
        }}
        className="w-full items-center flex-row px-5 h-10 justify-between"
      >
        <Pressable
          onPress={onPress}
          style={{ display: displayBackIcon }}
          className="w-[25%] h-full items-start justify-center"
        >
          {leftIcon}
        </Pressable>
        <Pressable
          onPress={action}
          className="w-[25%] h-full items-center flex-row justify-end items-center"
        >
          {rightContent}
        </Pressable>
      </View>
    );
  }
};

export default NavBar;
