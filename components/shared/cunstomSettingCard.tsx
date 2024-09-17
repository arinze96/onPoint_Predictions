import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { Switch } from "react-native";
import { CustomSettingsCardProps } from "@/types/customSettingCardTypes";
import { colors } from "@/constants";

const CustomSettingsCard = ({
  onPress,
  description,
  iconName,
  iconSize,
  iconColor,
  download,
}: CustomSettingsCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full h-[30px] items-center flex-row mt-8 justify-between"
    >
      <View className="flex-row w-[70%] h-full items-center">
        <View
          className="w-[12%] h-[30px] mr-3 justify-center items-start"
        >
          <FontAwesome name={iconName} size={iconSize} color={iconColor} />
        </View>
        <Text className="text-white text-[14px]">{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomSettingsCard;

