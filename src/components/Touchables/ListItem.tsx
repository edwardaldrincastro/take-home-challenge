import React, { Fragment, FunctionComponent } from "react";
import { Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native";

import { IcoMoon } from "../../icons";
import {
  centerVertical,
  colorGray,
  colorOrange,
  flexRow,
  fs16MedBlack,
  fsAlignCenter,
  fsCapitalize,
  py,
  sh16,
  sw16,
  sw24,
  sw32,
} from "../../styles";
import { CustomFlexSpacer, CustomSpacer } from "../Views/Spacer";

export interface ListItemProps {
  leftIcon?: string;
  onPress: () => void;
  rightIcon?: string;
  text: string;
  textStyle?: TextStyle;
}

export const ListItem: FunctionComponent<ListItemProps> = ({ leftIcon, onPress, rightIcon, text, textStyle }: ListItemProps) => {
  const itemStyle: ViewStyle = {
    ...flexRow,
    ...centerVertical,
    ...py(sh16),
  };

  const defaultTextStyle: TextStyle = { ...fs16MedBlack, ...fsAlignCenter, ...fsCapitalize, ...textStyle };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={itemStyle}>
        {leftIcon !== undefined ? (
          <Fragment>
            <IcoMoon name={leftIcon} color={colorOrange.primary} size={sw24} />
            <CustomSpacer isHorizontal={true} space={sw32} />
          </Fragment>
        ) : null}
        <Text style={defaultTextStyle}>{text}</Text>
        <CustomFlexSpacer />
        {rightIcon !== undefined ? <IcoMoon name={rightIcon} color={colorGray.secondary} size={sw16} /> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};
