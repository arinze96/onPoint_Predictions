import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import useDimensions from "@/utils/useDimensions";
import { KEYBOARDKEYS } from "@/constants/dimensions";
import { errorToast, successToast } from "@/utils/toaster";
import CustomButton from "@/components/shared/customButton";
import { router } from "expo-router";
import * as Animatable from "react-native-animatable";

const { width, height } = useDimensions();

const PinVerify = () => {
  const [pin, setPin] = useState(""); // Single state to hold the PIN

  const handleKeyPress = (key: any) => {
    if (key === "clear") {
      setPin(pin.slice(0, -1));
    } else if (key !== "empty" && pin.length < 4) {
      setPin(pin + key);
    }
  };

  const handleSubmit = () => {
    const correctPin = "1234";
    if (pin === correctPin) {
      successToast("Pin Verification Successful!!");
    } else {
      setPin("");
      errorToast("You Entered The Wrong Pin. Try Again");
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ width: width, height: height }}
          className="px-2 dark:bg-black"
        >
          <View className="h-full px-4">
            <View className="w-full h-25 mb-8 items-center justify-center mt-24">
              <Text className="text-center font-medium text-lg text-black dark:text-white">
                Enter your 4-digit PIN
              </Text>
              <Text className="text-center text-lg mt-4 text-gray-600 font-normal dark:text-white">
                The 4-Digit PIN is solely meant for your account security
              </Text>
            </View>

            <View className="w-full h-8 justify-center items-center flex-row">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <View
                    key={index}
                    className={`w-4 h-4 rounded-full ml-2.5 ${
                      index < pin.length ? "bg-customMainColor" : "bg-gray-300"
                    }`}
                  ></View>
                ))}
            </View>

            <View className="w-full h-80 mt-8 flex flex-wrap">
              {KEYBOARDKEYS.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleKeyPress(item)}
                  className="w-1/3 h-1/4 justify-center items-center"
                >
                  {item === "empty" ? null : item === "clear" ? (
                    <Ionicons name={"backspace"} size={24} color={"#787a76"} />
                  ) : (
                    <Text className="text-black text-lg dark:text-white">
                      {item}
                    </Text>
                  )}
                </Pressable>
              ))}
            </View>
            <Animatable.View
              animation={"slideInUp"}
              duration={2000}
              className="w-full my-10 px-4"
            >
              <CustomButton
                title="Enter"
                buttonStyle="bg-customMainColor"
                textStyle="text-white"
                onPress={async () => {
                  router.push("/");
                }}
              />
            </Animatable.View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default PinVerify;
