import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import CustomStatusBar from "@/components/shared/customStatusBar";
import NavBar from "@/components/shared/customNavbar";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/constants";
import { continents } from "@/constants/mock";
import { GeneralPadding, width } from "@/constants/dimensions";

const AddPredictions = ({ navigation }: any) => {
  const [value, setValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState(false);
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
        <View className="flex-1 px-5">
          <View
            style={{
              width: width,
            }}
            className="flex-1 bg-customMainColorLighter border-customMainColorLighter mt-5 pt-3 px-5 rounded-tr-[30px] rounded-tl-[30px]"
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <>
                <View className="flex-row justify-between items-center h-[20px] mt-5">
                  <Text className="text-[22px] font-bold text-customWhite">
                    SELECT TEAMS
                  </Text>
                </View>
                <View className="w-full h-[50px] mb-3 items-center justify-between">
                  <View className="w-full mt-5">
                    <View className="w-full h-[40px] rounded-xl bg-customMainColorDarkMode items-center mt-5">
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
                    <View className="w-full h-[40px] rounded-xl bg-customMainColorDarkMode items-center mt-5">
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
                        placeholder={"Select Country"}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item) => {
                          setValue(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View className="w-full h-[40px] rounded-xl bg-customMainColorDarkMode items-center mt-5">
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
                    <View className="w-full h-[40px] rounded-xl bg-customMainColorDarkMode items-center mt-5">
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
                        placeholder={"Select Fixtures"}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item) => {
                          setValue(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View className="w-full h-[40px] rounded-xl bg-customMainColorDarkMode items-center mt-5">
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
                        placeholder={"Select Fixtures"}
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
                  <View className="w-full flex-row justify-between">
                    <View className="w-[48%] h-[40px] rounded-xl bg-customMainColorDarkMode items-center mt-5">
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
                        placeholder={"Select Home Team"}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item) => {
                          setValue(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View className="w-[48%] h-[40px] rounded-xl bg-customMainColorDarkMode items-center mt-5">
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
                        placeholder={"Select Away Team"}
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

                  <Pressable className="w-full h-[40px] rounded-xl bg-customMainColorGold mt-10 justify-center items-center pl-3 ">
                    <Text className="text-customWhite text-[14px] font-bold">
                      Upload
                    </Text>
                  </Pressable>
                </View>
              </>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default AddPredictions;

const styles = StyleSheet.create({
  dropdown: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
    paddingHorizontal: 20,
  },

  placeholderStyle: {
    fontSize: 12,
    color: colors.primary[10],
  },
  selectedTextStyle: {
    fontSize: 12,
    color: colors.primary[10],
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: colors.primary[10],
  },
});
