import React, { FunctionComponent } from 'react';
import { Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';

import { colorOrange, colorWhite, fs16MedWhite, fsAlignCenter, fsCapitalize, sh50, sw8 } from '../../styles';

export interface CustomButtonProps {
  buttonStyle?: ViewStyle;
  disabled?: boolean;
  onPress: () => void;
  secondary?: boolean;
  text: string;
  textStyle?: TextStyle;
}

export const CustomButton: FunctionComponent<CustomButtonProps> = ({
  buttonStyle,
  disabled,
  onPress,
  secondary,
  text,
  textStyle,
}: CustomButtonProps) => {
  const backgroundColor = secondary === true ? colorWhite.primary : colorOrange.primary;
  const textColor = secondary === true ? colorOrange.primary : colorWhite.primary;

  const defaultButtonStyle: ViewStyle = {
    alignContent: 'center',
    backgroundColor: backgroundColor,
    borderRadius: sw8,
    height: sh50,
    justifyContent: 'center',
    opacity: disabled === true ? 0.5 : 1,
    ...buttonStyle,
  };

  const defaultTextStyle: TextStyle = { ...fs16MedWhite, ...fsAlignCenter, ...fsCapitalize, ...textStyle, color: textColor };

  return (
    <TouchableWithoutFeedback onPress={disabled === true ? undefined : onPress}>
      <View style={defaultButtonStyle}>
        <Text style={defaultTextStyle}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
