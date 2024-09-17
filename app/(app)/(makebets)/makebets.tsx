import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  Animated,
  Image,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import CustomStatusBar from "@/components/shared/customStatusBar";
import NavBar from "@/components/shared/customNavbar";
import { colors, shadow } from "@/constants";
import { AllSports, sportsLogo } from "@/constants/mock";
import { width } from "@/constants/dimensions";
import CustomSingleSports from "@/components/shared/customSingleSports";
import { router } from "expo-router";

const MakeBets = ({ navigation }: any) => {
  const [iconName, setIconName] = useState<any>("search");
  const [home, setHome] = useState("Real Madrid FC");
  const [away, setAway] = useState("Manchester City FC");
  const [league_, setLeague_] = useState("UEFA Champions League");
  const opacity = useRef(new Animated.Value(1)).current;
  const colorScheme = useColorScheme();

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
      <CustomStatusBar
        backgroundColor={colors.primary.offset}
        barStyle={"light"}
      />
      <NavBar
        backgroundColor={colors.primary.offset}
        onPress={() => navigation.goBack()}
        action={() => alert("here")}
        leftIcon={
          <MaterialIcons
            name={"arrow-back-ios"}
            size={18}
            color={colors.primary[10]}
          />
        }
        rightContent={
          <>
            <Text className="text-customWhite font-bold mr-2">$200</Text>
            <MaterialIcons
              name={"add-circle"}
              size={22}
              color={colors.primary.offset_yellow}
            />
          </>
        }
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 h-full items-center bg-customMainColor"
      >
        <View className="flex-1 px-5">
          <View className="items-center justify-center mx-5">
            <View
              style={{
                shadowColor: shadow[6].shadowColor,
                shadowOffset: shadow[6].shadowOffset,
                shadowOpacity: shadow[6].shadowOpacity,
                shadowRadius: shadow[6].shadowRadius,
                elevation: shadow[6].elevation,
              }}
              className="w-full h-10 mt-3 rounded-full px-4 flex-row justify-between items-center bg-customMainColorLight"
            >
              <MaterialIcons
                name={iconName}
                size={22}
                color={colors.gray[200]}
                style={{ display: "flex" }}
              />
              <TextInput
                value=""
                placeholder="Search"
                keyboardType="default"
                cursorColor={colors.gray[200]}
                onBlur={() => {
                  setIconName("search");
                }}
                onFocus={() => {
                  setIconName("keyboard");
                }}
                autoCapitalize="none"
                placeholderTextColor={colors.gray[200]}
                style={{ width: "90%", height: "100%" }}
              />
            </View>
          </View>

          <View
            style={{
              width: width,
            }}
            className="flex-1 bg-customMainColorLighter rounded-tr-[30px] rounded-tl-[30px] pt-3 mt-5 "
          >
            <View className="w-full h-[50px] flex-row mb-3 items-center justify-between px-5">
              <Text className="text-xl font-bold text-customWhite">
                Popular Sports
              </Text>
            </View>

            <View className="flex-1 w-full">
              <View className="justify-center items-center mb-5 pl-5">
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ flexGrow: 1 }}
                  horizontal={true}
                >
                  <>
                    {AllSports?.map((items: any, index: number) => {
                      return (
                        <TouchableOpacity onPress={() => router.push("/add-predictions")} key={index} className="mr-5">
                          <View className="w-[90px] h-[90px] mt-5 bg-customWhite dark: bg-customMainColorLight rounded-xl justify-center items-center">
                            <Image
                              source={sportsLogo[items?.imageKey]}
                              style={{
                                width: 35,
                                height: 35,
                                borderRadius: 35,
                              }}
                            />
                            <Text className="text-center text-[12px] dark:text-white">
                              {items?.sports}
                            </Text>
                          </View>
                          <View
                            style={{
                              zIndex: 2000,
                              shadowColor: shadow[6].shadowColor,
                              shadowOffset: shadow[6].shadowOffset,
                              shadowOpacity: shadow[6].shadowOpacity,
                              shadowRadius: shadow[6].shadowRadius,
                              elevation: shadow[6].elevation,
                            }}
                            className="w-[75px] h-[20px] justify-center items-center bg-customMainColorGold rounded-full absolute top-[10px] left-[8px]"
                          >
                            <Text className="items-center text-[10px] font-bold">
                              {items?.offers} Offers
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </>
                </ScrollView>
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
              >
                <View className="px-5 grow">
                  <View className="w-full bg-customWhite dark: bg-customMainColorDarkMode rounded-[30px] mt-5">
                    <View className="w-full h-[60px] rounded-tl-[30px] rounded-tr-[30px] justify-between items-center flex-row px-5 border-[0.3px] border-t-customWhite border-l-customWhite border-r-customWhite">
                      <Text className="text-[20px] font-bold dark:text-white">Favourite</Text>
                      <Text className="dark:text-white">Prediction Offers</Text>
                    </View>
                    {AllSports?.filter((items: any) => items.favourited).map(
                      (items: any, index: number) => {
                        return (
                          <CustomSingleSports
                            key={index}
                            iconName={"heart"}
                            sports={items?.sports}
                            offers={items?.offers}
                            color={colors.alerts.error}
                            action={() => router.push("/add-predictions")}
                          />
                        );
                      }
                    )}
                  </View>

                  <View className="w-full bg-customWhite rounded-[30px] mt-5 dark: bg-customMainColorDarkMode">
                    <View className="w-full h-[60px] rounded-tl-[30px] rounded-tr-[30px] justify-between items-center flex-row px-5 border-[0.3px] border-t-customWhite border-l-customWhite border-r-customWhite">
                      <Text className="text-[20px] font-bold dark:text-white">All Sports</Text>
                      <Text className="dark:text-white">Prediction Offers</Text>
                    </View>
                    {AllSports?.map((items: any, index: number) => {
                      return (
                        <CustomSingleSports
                          key={index}
                          iconName={"heart-outline"}
                          sports={items?.sports}
                          offers={items?.offers}
                          color={colorScheme == "dark" ? colors.primary[10]  : colors.primary.offset_night}
                          action={() => router.push("/add-predictions")}
                        />
                      );
                    })}
                  </View>
                    <View className="w-full h-[100px]"></View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default MakeBets;
