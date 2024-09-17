import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants";
import { GeneralPadding } from "@/constants/dimensions";

const CustomSingleSports = ({
  index,
  iconName,
  sports,
  offers,
  color,
  action,
}: any) => {
  return (
    <Pressable
      key={index}
      className="w-full h-[60px] justify-between items-center flex-row px-5 rounded-[0.3px] border-b-customMainColorNight border-t-customWhite border-l-customWhite border-r-customWhite"
      onPress={action}
    >
      <View className="flex-row justify-center items-start">
        <Ionicons
          name={iconName}
          size={25}
          style={{ marginRight: 10 }}
          color={color}
        />
        <Text className="text-xl font-bold dark:text-white">{sports}</Text>
      </View>
      <Text className="text-customGray300 dark:text-white">{offers}</Text>
    </Pressable>
  );
};

export default CustomSingleSports;
