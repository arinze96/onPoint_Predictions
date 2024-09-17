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

const Login = () => {
  const [emailLabel, setEmailLabel] = useState<undefined | "flex" | "none">(
    "none"
  );
  const colorScheme = useColorScheme();

  const imageSource =
    colorScheme === "light"
      ? require("../../assets/images/logo_dark.png")
      : require("../../assets/images/logo_light.png");

  const [passwordLabel, setPasswordLabel] = useState<
    undefined | "flex" | "none"
  >("none");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email Address");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordIconVisible, setPasswordIconVisible] = useState<
    "eye-off" | "eye"
  >("eye-off");

  const passwordVisibilty = () => {
    setPasswordVisible((previousState) => !previousState);
    if (passwordVisible == false) {
      setPasswordIconVisible("eye");
    } else {
      setPasswordIconVisible("eye-off");
    }
  };

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
                          Login
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
                      <View>
                        <InputBox
                          boxWidth="100%"
                          boxHeight={"16"}
                          displayFloatingLabel={passwordLabel}
                          placeholder={passwordPlaceholder}
                          secureTextEntry={passwordVisible}
                          onBlur={() => {
                            setPasswordLabel("none");
                            setPasswordPlaceholder("Password");
                          }}
                          onFocus={() => {
                            setPasswordLabel("flex");
                            setPasswordPlaceholder("");
                          }}
                          label={"Password"}
                          textInputWidth={"90%"}
                          displayIcon={"flex"}
                          iconName={passwordIconVisible}
                          iconSize={18}
                          iconColor={"gray-500"}
                          switchIcon={() => passwordVisibilty()}
                          labelBackgroundColor={colors.primary[10]}
                          value={values.password}
                          boxBorderColor={
                            errors.password
                              ? colors.alerts.error
                              : colors.gray[400]
                          }
                          onChangeText={handleChange("password")}
                        />
                      </View>
                      <View className="w-full h-12 flex-row justify-between mt-2 items-center">
                        <Text onPress={() => router.push("/forgot-password")} className="font-bold underline dark:text-white">
                        Forgot password?
                        </Text>
                        <View className="flex-row">
                          <Text className="mr-2 text-customGray700 dark:text-gray-300">
                            I don't have account?
                          </Text>
                          <Text
                            className="font-bold underline dark:text-white"
                            onPress={() => router.push("/signup")}
                          >
                            Signup
                          </Text>
                        </View>
                      </View>

                      <Animatable.View
                        animation={"slideInUp"}
                        duration={2000}
                        className="w-full my-10"
                      >
                        <CustomButton
                          title="Login"
                          buttonStyle="bg-customMainColor"
                          textStyle="text-white"
                          onPress={async () => {}}
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

export default Login;
