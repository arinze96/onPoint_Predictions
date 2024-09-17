import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

type CustomButtonProps = TouchableOpacityProps & {
  title: string;
  buttonStyle?: string;
  textStyle?: string;
  onPress: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  buttonStyle = "",
  textStyle = "",
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`items-center justify-center py-5 rounded-lg ${buttonStyle}`}
      onPress={onPress}
      {...props}
    >
      <Text className={`text-md font-poppinsBold ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
