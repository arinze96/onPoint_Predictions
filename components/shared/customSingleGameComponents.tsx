import {
  View,
  Text,
  Pressable,
  Animated,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { GeneralPadding, height, width } from "@/constants/dimensions";
import { SingleGameComponentProps } from "@/types/singleComponentTypes";
import { colors, shadow } from "@/constants";

const CustomeSingleGameComponents = ({
  home,
  away,
  live_game_time_in_minutes,
  game_started_at,
  league_name,
  win_rate_by_percentage,
  prediction,
}: SingleGameComponentProps) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => animate());
    };

    animate();
  }, [opacity]);

  return (
    <Pressable
      style={{ borderBottomWidth: 0.2 }}
      className="w-full bg-customWhite px-5 border-b-customMainColorNight"
    >
      <View className="w-full h-[30px] flex-row items-center justify-between mt-3">
        <View className="w-[45%] h-full items-start justify-center">
          <Text className="font-bold text-center" numberOfLines={1}>
            {home}
          </Text>
        </View>
        <View className="w-[10%] h-full items-start justify-center">
          <Text
            className="text-lg text-center text-customGray300 font-bold"
            numberOfLines={1}
          >
            VS
          </Text>
        </View>
        <View className="w-[45%] h-full items-end justify-center">
          <Text className="font-bold text-center" numberOfLines={1}>
            {away}
          </Text>
        </View>
      </View>
      <View className="w-full h-[30px] my-3 flex-row items-center justify-center">
        <View className="w-[30px] h-[30px] rounded-[30px]">
          <Image
            source={require("../../assets/images/city.png")}
            className="w-[30px] h-[30px] rounded-[30px]"
          />
        </View>
        <FontAwesome5
          name={"exchange-alt"}
          size={15}
          color={colors.gray[300]}
          style={{ paddingHorizontal: 20 }}
        />
        <View className="w-[30px] h-[30px] rounded-[30px]">
          <Image
            source={require("../../assets/images/city.png")}
            className="w-[30px] h-[30px] rounded-[30px]"
          />
        </View>
      </View>
      <View className="w-full h-[20px] flex-row items-center pr-3 mt-2 justify-between">
        <View className="flex-row w-[57%] h-full items-center justify-between">
          <View className="w-[18%] h-[80%] rounded justify-center items-center mr-3 flex-row bg-customRed pl-2">
            <Animated.View
              style={{ opacity }}
              className="w-[6px] h-[6px] rounded-full mr-1 bg-customWhite"
            />
            <Text className="text-[9px] mr-2 text-customWhite font-bold">
              {live_game_time_in_minutes}
            </Text>
          </View>
          <Text className="text-[10px] mr-2 font-bold">{game_started_at}</Text>
          <Text className="text-xs mr-2 text-gray-500">|</Text>
          <Text className="text-xs mr-text-gray-500">{league_name}</Text>
        </View>
        <View className="w-[22%] h-full bg-customMainColorOffset rounded px-1 items-center justify-center flex-row">
          <Text className="text-customWhite text-xs mr-2 font-bold">
            Win {win_rate_by_percentage}
          </Text>
          <Ionicons
            name={"checkmark-circle"}
            size={12}
            color={colors.primary[10]}
          />
        </View>
      </View>

      <View className="w-full h-[20px] flex-row items-center pr-3 my-4 justify-between">
        <View
          className="flex-row w-[57%] h-full items-center justify-start"
        >
          <Text className="font-bold text-center">Prediction</Text>
        </View>
        <Text
          className="text-[10px] font-bold"
        >
          {prediction}
        </Text>
      </View>
    </Pressable>
  );
};

export default CustomeSingleGameComponents;

