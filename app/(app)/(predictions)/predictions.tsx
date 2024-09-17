import { View, Text, ScrollView, Pressable, StyleSheet, Platform } from "react-native";
import React, { useState } from "react";
import CustomStatusBar from "@/components/shared/customStatusBar";
import NavBar from "@/components/shared/customNavbar";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, shadow } from "@/constants";
import { GeneralPadding, width } from "@/constants/dimensions";
import { homeGames } from "@/constants/mock";
import CustomPredictionBlock from "@/components/shared/customPredictionBlock";


const Predictions = ({ navigation }: any) => {
  const [winOrLoss, setWinOrLoss] = useState("win");
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
      <View
        className="w-full h-[60px] bg-customMainColor flex-row items-center justify-between"
      >
        <Pressable
          onPress={() => setWinOrLoss("win")}
          style={{
            borderBottomColor:
              winOrLoss == "win"
                ? colors.primary.offset_yellow
                : colors.primary.offset,
          }}
          className="w-[50%] h-full justify-center items-center border-b-[5px]"
        >
          <Text className="text-customWhite font-bold">
            WINS
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setWinOrLoss("loss")}
          style={{
            borderBottomColor:
              winOrLoss == "loss"
                ? colors.primary.offset_yellow
                : colors.primary.offset,
          }}
          className="w-[50%] h-full justify-center items-center border-b-[5px]"
        >
          <Text className="text-customWhite font-bold">
            LOSSES
          </Text>
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {winOrLoss == "win" ? (
          <View
            className="flex-1 px-5 bg-customGray100 pt-8"
          >
            {homeGames?.map((items: any, index: number) => {
              return <CustomPredictionBlock predictions={items} key={index} />;
            })}
          </View>
        ) : (
          <View
            className="flex-1 px-5 bg-customGray100 pt-8"
          >
            {homeGames?.map((items: any, index: number) => {
              return <CustomPredictionBlock predictions={items} key={index} />;
            })}
          </View>
        //  
        )}
      </ScrollView>
    </>
  );
};

export default Predictions;
