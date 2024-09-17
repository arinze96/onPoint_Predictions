import {
  View,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { height } from "@/constants/dimensions";
import { router } from "expo-router";
import { colors } from "@/constants";

const OTPVerify = ({ navigation }: any) => {
  const [disabled, setdisabled] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [countDownSeconds, setCountDownSeconds] = useState(30);
  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 6 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
      style={{ height: height }}
      className="bg-customMainColor"
    >
      <View className="flex-1 px-10 bg-customMainColor">
        <Text className="text-customWhite font-bold mt-28 text-2xl">
          Enter the 6 digit code sent to your email address
        </Text>
        <View className="w-full mt-10 justify-between">
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            autoFocus={true}
            cellCount={6}
            rootStyle={{ marginTop: 20 }}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[
                  {
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: colors.primary[10],
                  },
                  isFocused && {
                    borderColor: colors.alerts.pending,
                  },
                ]}
                className={`w-11 h-11 leading-[38px] rounded-xl text-customWhite text-[24px] text-primary-10 ml-1 text-center`}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

        <View className="w-full mt-12 h-10 justify-center px-4 flex-row">
          <TouchableOpacity disabled={disabled}>
            <Text
              className={`mr-2 ${disabled ? "text-customGray200" : "text-customWhite"}`}
            >
              Resend Code
            </Text>
          </TouchableOpacity>
          <Text className="text-customWhite">00:{countDownSeconds}</Text>
        </View>

        <View className="w-full mt-32">
          <TouchableOpacity
            onPress={() => router.push("/home")}
            // disabled={value.length < 6 ? true : false}
            style={{
              backgroundColor:
                value.length < 6
                  ? colors.gray[300]
                  : colors.primary.offset_yellow,
            }}
            className="w-full h-14 justify-center items-center  rounded-2xl"
          >
            {verifying ? (
              <ActivityIndicator size={"small"} color="white" />
            ) : (
              <Text className="text-customWhite text-lg font-bold">Verify</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OTPVerify;

