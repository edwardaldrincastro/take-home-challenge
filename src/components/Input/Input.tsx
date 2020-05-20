import React, { Fragment, useState } from "react";
import { Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";

import {
  borderBottomGray1,
  borderBottomRed,
  colorGray,
  colorWhite,
  flexChild,
  flexRow,
  fs12MedBlack,
  fs15MedBlack,
  fs18MedBlack,
  py,
  sh16,
  sh8,
  sw4,
} from "../../styles";
import { CustomFlexSpacer, CustomSpacer } from "../Views/Spacer";
import { InputErrorMessage } from "./InputErrorMessage";

// import { InputRightIcon } from "./InputRightIcon";

export interface ITextInputProps extends TextInputProps {
  bottomText?: string;
  errorMessage?: string;
  errorUnderline?: boolean;
  label?: string;
  noBorder?: boolean;
  onFocusOut?: () => void;
  onPressBottomText?: () => void;
  onPressLabel?: () => void;
  rightIcon?: string;
  setRef?: (ref: TextInput | null) => void;
  successIcon?: boolean;
  viewStyle?: ViewStyle;
}

export const CustomTextInput = ({
  bottomText,
  errorMessage,
  errorUnderline,
  label,
  noBorder,
  onFocusOut,
  onPressBottomText,
  onPressLabel,
  rightIcon,
  setRef,
  successIcon,
  viewStyle,
  ...rest
}: ITextInputProps) => {
  const errMessage = errorMessage ? errorMessage : undefined;
  const errUnderline = errorUnderline === true;

  const noBorderBottom = noBorder === true ? { borderBottomWidth: 0 } : undefined;
  const borderBottom = errUnderline ? borderBottomRed : borderBottomGray1;
  const textInputStyle: ViewStyle = { ...borderBottom, ...noBorderBottom, alignItems: "center", flexDirection: "row", ...viewStyle };
  const textStyle: TextStyle = { ...flexChild, ...fs18MedBlack, ...py(sh8) };

  return (
    <Fragment>
      {label === undefined ? null : (
        <Fragment>
          <CustomSpacer space={sh16} />
          <Text style={fs15MedBlack}>{label}</Text>
        </Fragment>
      )}
      <View style={textInputStyle}>
        <CustomSpacer isHorizontal={true} space={sw4} />
        <TextInput
          ref={setRef}
          style={textStyle}
          placeholder={rest.placeholder}
          placeholderTextColor={colorGray.secondary_8}
          underlineColorAndroid={colorWhite.primary}
          {...rest}
        />
      </View>
      <InputErrorMessage errorMessage={errMessage} />
      {bottomText === undefined ? null : (
        <Fragment>
          <CustomSpacer space={sh16} />
          <View style={flexRow}>
            <Text onPress={onPressBottomText} style={fs12MedBlack}>
              {bottomText}
            </Text>
            <CustomFlexSpacer />
          </View>
        </Fragment>
      )}
    </Fragment>
  );
};
