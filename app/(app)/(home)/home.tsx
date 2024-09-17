import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import CustomStatusBar from "@/components/shared/customStatusBar";
import NavBar from "@/components/shared/customNavbar";
import { continents, homeGames, league } from "@/constants/mock";
import CustomPredictionBlock from "@/components/shared/customPredictionBlock";
import CustomeSingleGameComponents from "@/components/shared/customSingleGameComponents";
import { StyleSheet } from "react-native";
import { height, width } from "@/constants/dimensions";
import { colors, shadow } from "@/constants";

const Home = ({ navigation }: any) => {
  const [iconName, setIconName] = useState<any>("search");
  const [value, setValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [home, setHome] = useState("Real Madrid FC");
  const [away, setAway] = useState("Manchester City FC");
  const [league_, setLeague_] = useState("UEFA Champions League");
  const [displayModal, setDisplayModal] = useState<any>(false);
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

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

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
        <TouchableWithoutFeedback
          className="flex-1 h-full items-center bg-customMainColor"
          onPress={Keyboard.dismiss}
          accessible={true}
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
                  className="flex"
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
                  style={{width: "90%", height: "100%"}}
                />
              </View>
            </View>
            <View
              style={{ width: width }}
              className="w-full h-16 justify-between items-center flex-row px-5"
            >
              <Pressable>
                <Text className="font-bold text-customWhite">Live</Text>
              </Pressable>
              <Pressable>
                <Text className="font-bold text-customWhite">Today</Text>
              </Pressable>
              <Pressable>
                <Text className="font-bold text-customWhite">Tommorrow</Text>
              </Pressable>
              <Ionicons name={"filter"} size={22} color={colors.primary[10]} />
            </View>

            <View
              style={{
                width: width,
              }}
              className="rounded-t-3xl pt-4 px-5 bg-customMainColorLighter"
            >
              <View
                className="w-full h-[70px] rounded-t-3xl pt-2 flex-row justify-between bg-customMainColorLighter"
              >
                <View className="bg-customMainColor items-center w-[48%] h-10 rounded-lg">
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={continents}
                    maxHeight={350}
                    labelField="label"
                    iconColor="#fff"
                    valueField="value"
                    placeholder={"Select Continent"}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>
                <View className="bg-customMainColor items-center w-[48%] h-10 rounded-lg">
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={league}
                    maxHeight={350}
                    labelField="label"
                    iconColor="#fff"
                    valueField="value"
                    placeholder={"Select League"}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>
              </View>
              <View className="w-full">
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ flexGrow: 1 }}
                >
                  <>
                    {homeGames?.map((items: any, index: number) => {
                      return (
                        <CustomPredictionBlock
                          predictions={items}
                          key={index}
                          predictionDetails={() => toggleModal()}
                        />
                      );
                    })}
                  </>
                </ScrollView>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Pressable
        onPress={() => toggleModal()}
        style={{
          width: width,
          height: height,
          backgroundColor: colors.gray[1100],
          display: displayModal ? "flex" : "none",
        }}
        className="absolute items-end justify-end"
      >
        <View className="w-full h-[85%] rounded-t-3xl pb-24 bg-customWhite">
          <View className="w-full h-[6%] mt-10 mb-2 px-5 items-start justify-between flex-row">
            <FontAwesome
              name={"close"}
              size={25}
              style={styles.closeButton}
              color={colors.gray[1000]}
              onPress={() => toggleModal()}
            />
            <Text className="font-bold text-xl">Matches Predictions</Text>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <>
              {homeGames?.map((items: any, index: number) => {
                return (
                  <View key={index}>
                    <CustomeSingleGameComponents
                      key={index}
                      home={items?.home}
                      away={items?.away}
                      live_game_time_in_minutes={
                        items?.live_game_time_in_minutes
                      }
                      game_started_at={items?.game_started_at}
                      league_name={items.league_name}
                      win_rate_by_percentage={items?.win_rate_by_percentage}
                      prediction={items.prediction}
                    />
                  </View>
                );
              })}
            </>
          </ScrollView>
        </View>
      </Pressable>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  
  dropdown: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  placeholderStyle: {
    fontSize: 12,
    color: colors.primary[10],
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: colors.primary[10],
  },
  closeButton: { fontWeight: "bold" },
});
