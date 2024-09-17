import {
  View,
  Text,
  ScrollView,
  Alert,
  StyleSheet,
  ActivityIndicator,
  Image,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomStatusBar from "@/components/shared/customStatusBar";
import { colors } from "@/constants";
import NavBar from "@/components/shared/customNavbar";
import { toCamelCase } from "@/utils/helpers";
import CustomSettingsCard from "@/components/shared/cunstomSettingCard";
import { GeneralPadding, width } from "@/constants/dimensions";
import CustomButton from "@/components/shared/customButton";
import * as Animatable from "react-native-animatable";

const Settings = ({ navigation }: any) => {
  let [visibleModal, setVisibleModal] = useState<boolean>(false);
  let [userToken, setuserToken] = React.useState<any>();
  let [loading, setLoading] = React.useState(false);
  const [appStateData, setAppStateData] = React.useState({});
  const dispatch = useDispatch();

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

      <View className="flex-1 px-5 bg-customMainColor">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="w-full h-[70px] items-center flex-row mt-[30px]">
            {loading ? (
              <ActivityIndicator size={"small"} color={colors.primary[10]} />
            ) : (
              <>
                <View className="w-[50px] h-[50px] bg-customMainColorDarkMode rounded-[50px] justify-center items-center">
                  <Image
                    source={{
                      uri: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
                    }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                </View>
                <View className="h-[50px] justify-center  ml-3">
                  <Text className="text-customWhite text-[16px] font-bold">
                    {toCamelCase("Arinzechukwu" ? "Arinzechukwu" : "firstname")}{" "}
                    {toCamelCase("Edmund" ? "Edmund" : "lastname")}
                  </Text>
                  <Text className="text-white text-[16px] mt-1">@edmund96</Text>
                </View>
              </>
            )}
          </View>

          <View className="w-full">
            <Text
              className="text-white text-[20px] font-bold mt-6 mb-3"
            >
              Account
            </Text>
          </View>

          <CustomSettingsCard
            iconName="file-text"
            iconColor={colors.primary[10]}
            iconSize={20}
            description="Create Account"
          />

          <CustomSettingsCard
            iconName="user"
            iconColor={colors.primary[10]}
            iconSize={20}
            description="Edit Profile"
          />

          <CustomSettingsCard
            iconName="dollar"
            iconColor={colors.primary[10]}
            iconSize={20}
            description="Buy Subscription"
          />

          <View className="w-full mt-3">
            <Text className="text-white text-[20px] font-bold mt-6 mb-3">Security</Text>
          </View>

          <CustomSettingsCard
            iconName="lock"
            iconColor={colors.primary[10]}
            iconSize={20}
            description="Reset Password"
          />

          <CustomSettingsCard
            iconName="file-text"
            iconColor={colors.primary[10]}
            iconSize={20}
            description="Legal Agreements"
          />

          <View className="w-full mt-3">
            <Text className="text-white text-[20px] font-bold mt-6 mb-3">About Us</Text>
          </View>

          <CustomSettingsCard
            iconName="instagram"
            iconColor={colors.primary[10]}
            iconSize={20}
            description="Follow us on Instagram"
          />

          <CustomSettingsCard
            iconName="envelope-o"
            iconColor={colors.primary[10]}
            iconSize={20}
            description="Email Support"
          />

          <CustomSettingsCard
            iconName="question-circle-o"
            iconColor={colors.primary[10]}
            iconSize={20}
            description="FAQs"
          />

          <CustomSettingsCard
            iconName="times-circle-o"
            iconColor={colors.primary[10]}
            iconSize={20}
            description="Close Account"
          />

          <View className="w-full  my-5">
            <CustomButton
              title="Login"
              buttonStyle="bg-customMainColorGold"
              textStyle="text-white"
              onPress={async () => {}}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Settings;

