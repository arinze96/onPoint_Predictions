import { View, ActivityIndicator } from "react-native";
import React from "react";
import { StyledComponent } from "nativewind";

type CustomLoadingOverlayProps = {
  size?: number;
  color?: string;
};
const CustomLoadingOverlay: React.FC<CustomLoadingOverlayProps> = ({
  size = 35,
}) => {
  return (
    <View className="items-center justify-center flex-1">
      <StyledComponent
        component={ActivityIndicator}
        size={size}
        className="text-customPurpleDark"
      />
    </View>
  );
};

export default CustomLoadingOverlay;
