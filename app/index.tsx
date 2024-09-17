import React, { useEffect, useRef, useState } from "react";
import { Text, View, Animated, ImageBackground } from "react-native";
import { Redirect, router } from "expo-router";
import { useAuth } from "@/store/context/auth-context";
import CustomLoadingOverlay from "@/components/shared/customLoadingOverlay";
import CustomButton from "@/components/shared/customButton";
import { checkFirstLaunch, setFirstLaunch } from "@/utils/firstLaunch";

const Index = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  // useEffect(() => {
  //   const checkLaunch = async () => {
  //     const firstLaunch = await checkFirstLaunch();
  //     setIsFirstLaunch(firstLaunch);
  //     setLoading(false);
  //   };

  //   checkLaunch();
  // }, []);

  const handleGetStarted = async () => {
    await setFirstLaunch();
    setIsFirstLaunch(true);
  };

  // if (loading) {
  //   return (
  //     <SafeAreaView className="items-center justify-center flex-1 dark:bg-black">
  //       <CustomLoadingOverlay size={65} />
  //     </SafeAreaView>
  //   );
  // }

  // if (isFirstLaunch && !token) {
  //   return <Redirect href={{ pathname: "/(auth)/login" }} />;
  // }

  // if (isFirstLaunch && token) {
  //   return <Redirect href={{ pathname: "/(app)" }} />;
  // }

  return (
    <ImageBackground
      source={require("../assets/images/onboarding.png")}
      className="flex-1 justify-end items-center"
    >
      <View className="w-full px-4">
        <View className="flex-row">
          <View className="flex-1 my-2 ">
            <Text className="text-2xl text-customBlack font-poppinsRegular">
              Welcome to
            </Text>
            <Text className="text-4xl text-customBack font-poppinsMedium dark:text-white">
              Onpoint Predictions
            </Text>
          </View>
        </View>

        <View className="flex-row my-10 w-full justify-between">
          <CustomButton
            title="Login"
            buttonStyle="bg-customPendingColor w-[47%]"
            textStyle="text-black"
            onPress={() => router.replace("/login")}
          />

          <CustomButton
            title="Sign Up"
            buttonStyle="bg-customMainColor w-[47%]"
            textStyle="text-white"
            onPress={async () => {
              await setFirstLaunch();
              router.replace("/signup");
            }}
          />
        </View>

        <View className="mb-20">
          <Text className="text-center text-customWhite font-poppinsRegular">
            The one stop place for football predictions
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Index;
