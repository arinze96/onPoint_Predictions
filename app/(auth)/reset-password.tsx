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
  
  const ResetPassword = () => {
    const colorScheme = useColorScheme();
  
    const imageSource =
      colorScheme === "light"
        ? require("../../assets/images/logo_dark.png")
        : require("../../assets/images/logo_light.png");
  
    const [passwordLabel, setPasswordLabel] = useState<
      undefined | "flex" | "none"
    >("none");
    const [confirmPasswordLabel, setConfirmPasswordLabel] = useState<
      undefined | "flex" | "none"
    >("none");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
    const [confirmPasswordPlaceholder, setConfirmPasswordPlaceholder] =
      useState("Confirm Password");
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [passwordIconVisible, setPasswordIconVisible] = useState<
      "eye-off" | "eye"
    >("eye-off");
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
    const [confirmPasswordIconVisible, setConfirmPasswordIconVisible] = useState<
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
  
    const confirmPasswordVisibilty = () => {
      setConfirmPasswordVisible((previousState) => !previousState);
      if (confirmPasswordVisible == false) {
        setConfirmPasswordIconVisible("eye");
      } else {
        setConfirmPasswordIconVisible("eye-off");
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
                  className="grow"
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
                          Reset Password
                        </Text>
                        <View className="mb-6">
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
                            iconColor={colorScheme == "dark" ? colors.primary[10] : colors.gray[500]}
                            switchIcon={() => passwordVisibilty()}
                            labelBackgroundColor={colors.primary[10]}
                            value={values.password}
                            boxBorderColor={errors.password ? colors.alerts.error : colors.gray[400]}
                            onChangeText={handleChange("password")}
                          />
                        </View>
                        <View>
                          <InputBox
                            boxWidth="100%"
                            boxHeight={"16"}
                            displayFloatingLabel={confirmPasswordLabel}
                            secureTextEntry={confirmPasswordVisible}
                            placeholder={confirmPasswordPlaceholder}
                            onBlur={() => {
                              setConfirmPasswordLabel("none");
                              setConfirmPasswordPlaceholder("Confirm Password");
                            }}
                            onFocus={() => {
                              setConfirmPasswordLabel("flex");
                              setConfirmPasswordPlaceholder("");
                            }}
                            label={"Confirm Password"}
                            textInputWidth={"90%"}
                            displayIcon={"flex"}
                            iconName={confirmPasswordIconVisible}
                            iconSize={18}
                            iconColor={colorScheme == "dark" ? colors.primary[10] : colors.gray[500]}
                            switchIcon={() => confirmPasswordVisibilty()}
                            labelBackgroundColor={colors.primary[10]}
                            value={values.password_confirmation}
                            boxBorderColor={errors.password_confirmation ? colors.alerts.error : colors.gray[400]}
                            onChangeText={handleChange("password_confirmation")}
                          />
                        </View>
                        <View className="w-full h-12 flex-row justify-end items-center">
                          <Text className="mr-2 text-customGray700 dark:text-gray-300">Already have an account?</Text>
                          <Text className="font-bold underline dark:text-white" onPress={() => router.push("/login")}>Login</Text>
                        </View>
  
                        <Animatable.View
                          animation={"slideInUp"}
                          duration={2000}
                          className="w-full my-10"
                        >
                          <CustomButton
                            title="Reset Password"
                            buttonStyle="bg-customMainColor"
                            textStyle="text-white"
                            onPress={async () => {router.push("/otp-verify")}}
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
  
  export default ResetPassword;
  