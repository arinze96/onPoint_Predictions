import {
  View,
  Text,
  Image,
  Animated,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { colors, shadow } from "@/constants";

const CustomPredictionBlock = ({
  predictions,
  navigation,
  predictionDetails,
}: any) => {
  const [home, setHome] = useState("Real Madrid FC");
  const [away, setAway] = useState("Manchester City FC");
  const [league_, setLeague_] = useState("UEFA Champions League");
  const opacity = useRef(new Animated.Value(1)).current;

  const adjustClubName = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  React.useEffect(() => {
    setHome(adjustClubName(home, 15));
    setAway(adjustClubName(away, 15));
    setLeague_(adjustClubName(league_, 22));
  }, [home, away, setHome, setAway, league_, setLeague_]);

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
    <>
      <Pressable
        onPress={predictionDetails}
        className="w-full h-[210px] px-2 bg-customWhite rounded-3xl relative"
      >
        <View className="w-full flex-row items-center justify-between h-8 mt-2 px-1">
          <View className="w-[45%] h-full items-center justify-center">
            <Text className="font-bold text-center text-lg" numberOfLines={1}>
              {predictions?.home}
            </Text>
          </View>
          <View className="w-[10%] h-full items-center justify-center">
            <Text
              className="text-xl text-center text-gray-300 font-bold"
              numberOfLines={1}
            >
              VS
            </Text>
          </View>
          <View className="w-[45%] h-full items-center justify-center">
            <Text className="font-bold text-center text-lg" numberOfLines={1}>
              {predictions?.away}
            </Text>
          </View>
        </View>
        <View className="w-full h-6 flex-row items-center pr-3 justify-between">
          <View className="flex-row w-[57%] h-full items-center justify-between">
            <View className="w-[20%] h-[90%] rounded justify-center items-center mr-2 flex-row bg-customRed px-2">
              <Animated.View
                style={{ opacity }}
                className="w-[6px] h-[6px] rounded-full mr-1 bg-customWhite"
              />
              <Text
                style={{
                  fontSize: 7,
                }}
                className="mr-2 text-customWhite font-bold"
              >
                {predictions?.live_game_time_in_minutes}
              </Text>
            </View>
            <Text className="text-xs mr-1.5 font-bold text-customMainColorOffset">
              {predictions?.game_started_at}
            </Text>
            <Text className="text-xs mr-2 text-gray-500">|</Text>
            <Text className="text-xs mr-text-gray-500">
              {predictions?.league_name}
            </Text>
          </View>
          <View className="w-[22%] h-full bg-customMainColorOffset rounded px-1 items-center justify-center flex-row">
            <Text className="text-customWhite text-xs mr-2 font-bold">
              Win {predictions?.win_rate_by_percentage}
            </Text>
            <Ionicons
              name={"checkmark-circle"}
              size={12}
              color={colors.primary[10]}
            />
          </View>
        </View>
        <View className="w-full  h-6 flex-row items-center pr-3 justify-between mt-1">
          <View className="flex-row w-[47%] h-full items-center justify-center">
            <FontAwesome5
              name={"map-marker-alt"}
              size={12}
              style={{ marginLeft: 20, marginRight: 5 }}
              color={colors.primary.offset_one}
            />
            <Text className="text-xs mr-text-gray-500">
              {predictions?.game_location}
            </Text>
          </View>
          <View className="w-[42%] h-full rounded px-2 items-center justify-center flex-row">
            <Text className="text-xs mr-text-gray-500">Predictor</Text>
            <Text className="text-xs mr-2 text-gray-500">|</Text>
            <Text className="text-xs mr-1.5 font-bold text-customMainColorOffset">
              {predictions?.predictor}
            </Text>
          </View>
        </View>
        <View className="w-full h-6 flex-row items-center pr-3 justify-between mt-1">
          <View className="flex-row w-[57%] h-full items-center justify-start">
            <View className="w-[30px] h-[30px] rounded-[30px] mr-3">
              <Image
                source={require("../../assets/images/madrid.png")}
                className="w-[30px] h-[30px] rounded-[30px] mr-3"
              />
            </View>
            <Text className="font-bold text-center">
              {predictions?.home}
            </Text>
          </View>
          <View className="h-full border border-customMainColorOffset rounded px-3 items-center justify-center">
            <Text className="text-customMainColorOffset text-xs mr-2 font-bold">
              Home
            </Text>
          </View>
        </View>
        <View className="w-full h-6 flex-row items-center pr-3 justify-between my-3">
          <View className="flex-row w-[57%] h-full items-center justify-start">
            <View className="w-[30px] h-[30px] rounded-[30px] mr-3"></View>
            <Text className="font-bold text-center">Prediction</Text>
          </View>
          <Text className="text-customMainColorOffset text-xs mr-2 font-bold">
            Over 2.5
          </Text>
        </View>

        <View
          className="w-full h-[20px] flex-row items-center pr-3 justify-between"
        >
          <View className="flex-row w-[57%] h-full items-center justify-start">
            <View className="w-[30px] h-[30px] rounded-[30px] mr-3">
              <Image
                source={require("../../assets/images/city.png")}
                className="w-[30px] h-[30px] rounded-[30px] mr-3"
                resizeMode="contain"
              />
            </View>
            <Text className="font-bold text-center">
              {predictions?.away}
            </Text>
          </View>
          <View className="h-full border border-customMainColorOffset rounded px-3 items-center justify-center">
            <Text className="text-customMainColorOffset text-xs mr-2 font-bold">
              Away
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable className="w-full h-[30px] -mb-2" onPress={predictionDetails}>
        <View
          style={{
            zIndex: 2000,
            top: "-55%",
            left: "40%",
            transform: [{ translateX: -50 }],
            borderWidth: 0.3,
            borderColor: colors.primary.offset_one,
            shadowColor: shadow[6].shadowColor,
            shadowOffset: shadow[6].shadowOffset,
            shadowOpacity: shadow[6].shadowOpacity,
            shadowRadius: shadow[6].shadowRadius,
            elevation: shadow[6].elevation,
          }}
          className="h-[30px] w-[50%] bg-customWhite px-5 absolute rounded-2xl flex-row justify-between items-center"
        >
          <Text className="text-customMainColorOffset font-bold text-xs">
            View All 28 Markets
          </Text>
          <FontAwesome5
            name={"chevron-circle-right"}
            size={15}
            color={colors.primary.offset_light}
          />
        </View>
      </Pressable>
    </>
  );
};

export default CustomPredictionBlock;

