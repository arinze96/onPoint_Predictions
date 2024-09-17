import { Dimensions, Platform } from "react-native";

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

const GeneralPadding = 20

export const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

export {
    width, height, GeneralPadding
}

export const KEYBOARDKEYS = [
    "1",
    "4",
    "7",
    "empty",
    "2",
    "5",
    "8",
    "0",
    "3",
    "6",
    "9",
    "clear",
  ];