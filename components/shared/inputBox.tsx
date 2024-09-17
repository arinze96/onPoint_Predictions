import { View, Text, TextInput, useColorScheme } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { InputBoxProps } from "@/types/inputBoxTypes";
import { colors } from "@/constants";

const InputBox = ({
  value,
  boxWidth,
  boxBorderColor,
  displayFloatingLabel,
  placeholder,
  label,
  onBlur,
  onFocus,
  keyboardType,
  textInputWidth,
  secureTextEntry,
  iconName,
  iconSize,
  iconColor,
  displayIcon,
  switchIcon,
  onChangeText,
  editable,
}: InputBoxProps) => {
  const colorScheme = useColorScheme();
  return (
    <>
      <View
        className={`justify-center items-center flex-row px-5 rounded-lg w-[${boxWidth}px] h-14 border`}
        style={{ borderColor: boxBorderColor }}
      >
        <Animatable.View
          animation={"fadeIn"}
          duration={2500}
          style={{
            display: displayFloatingLabel,
          }}
          className={`h-5 justify-center items-center px-2 absolute -top-2 left-2 bg-white dark:bg-black`}
        >
          <Text className="dark:text-white">{label}</Text>
        </Animatable.View>
        <TextInput
          editable={editable}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          autoCapitalize="none"
          onChangeText={onChangeText}
          placeholderTextColor={
            colorScheme == "dark" ? colors.primary[10] : colors.gray[400]
          }
          style={{ width: textInputWidth }}
          className={`h-full text-customBlack`}
        />
        <Pressable
          onPress={switchIcon}
          style={{ display: displayIcon }}
          className={`w-[10%] h-[100%] justify-center items-center ${displayIcon}`}
        >
          <Feather name={iconName} size={iconSize} color={iconColor} />
        </Pressable>
      </View>
    </>
  );
};

export default InputBox;


