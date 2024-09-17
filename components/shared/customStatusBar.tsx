import { colors } from "@/constants";
import React from "react";
import {
    SafeAreaView,
    StatusBar,
    View,
  } from "react-native";
  
  type StatusBarProps = {
    backgroundColor: string;
    barStyle: any;
  };
  
  const CustomStatusBar: React.FC<StatusBarProps> = ({
    backgroundColor,
    barStyle,
  }) => {
    return (
      <View 
      style={[{ backgroundColor }]}>
        <SafeAreaView>
          <StatusBar
            translucent
            barStyle={barStyle}
            backgroundColor={colors.primary.offset_night}
          />
        </SafeAreaView>
      </View>
    );
  };
  
  export  default CustomStatusBar ;
 
  
 
  
  