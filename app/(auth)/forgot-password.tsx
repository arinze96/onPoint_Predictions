import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { Formik } from "formik";
import { registerValidationSchema } from "@/utils/validationSchemas";
import CustomButton from "@/components/shared/customButton";
import InputBox from "@/components/shared/inputBox";
import { router } from "expo-router";
import { colors } from "@/constants";

const ForgotPassword = () => {
  const [emailLabel, setEmailLabel] = useState<undefined | "flex" | "none">(
    "none"
  );
  const colorScheme = useColorScheme();

  const imageSource =
    colorScheme === "light"
      ? require("../../assets/images/logo_dark.png")
      : require("../../assets/images/logo_light.png");

  const [emailPlaceholder, setEmailPlaceholder] = useState("Email Address");

  const onHandleSubmit = () => {};

  return (
    <>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          referral: "",
          password_confirmation: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={onHandleSubmit}
        enableReinitialize
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              className="flex-1 justify-center h-full"
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1,
                  backgroundColor:
                    colorScheme === "dark"
                      ? colors.gray[1000]
                      : colors.primary[10],
                }}
              >
                <View className="grow justify-center items-center p-5 dark:bg-black mt-16">
                  <View className="flex-1 justify-between bg-white dark:bg-black">
                    <View>
                    <View className="w-full h-10 mt-10 justify-center items-center">
                          <Image
                            source={imageSource}
                            style={{ width: 140, height: 140 }}
                            resizeMode="contain"
                          />
                        </View>
                        <Text className="text-2xl mb-6 mt-3 font-bold text-customBlack dark:text-white text-center">
                          Forgot Password
                        </Text>
                      <View className="mb-6">
                        <InputBox
                          boxWidth="100%"
                          boxHeight={"16"}
                          keyboardType={"email-address"}
                          displayFloatingLabel={emailLabel}
                          placeholder={emailPlaceholder}
                          onBlur={() => {
                            setEmailLabel("none");
                            setEmailPlaceholder("Email Address");
                          }}
                          onFocus={() => {
                            setEmailLabel("flex");
                            setEmailPlaceholder("");
                          }}
                          label={"Email Address"}
                          textInputWidth={"100%"}
                          displayIcon={"none"}
                          labelBackgroundColor={colors.primary[10]}
                          value={values.email}
                          boxBorderColor={
                            errors.email
                              ? colors.alerts.error
                              : colors.gray[400]
                          }
                          onChangeText={handleChange("email")}
                        />
                      </View>

                      <Animatable.View
                        animation={"slideInUp"}
                        duration={2000}
                        className="w-full my-10"
                      >
                        <CustomButton
                          title="Send Email"
                          buttonStyle="bg-customMainColor"
                          textStyle="text-white"
                          onPress={async () => {router.push("/reset-password")}}
                        />
                      </Animatable.View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </>
  );
};

export default ForgotPassword;
