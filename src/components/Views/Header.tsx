import React, { FunctionComponent } from 'react';
import { Text, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';

import { IcoMoon } from '../../icons';
import { centerHorizontal, centerHV, colorBlack, colorWhite, flexRow, fs15MedBlack, px, sh60, sw20, sw30, sw60 } from '../../styles';
import { BackButton } from '../Special/BackButton';
import { CustomFlexSpacer } from './Spacer';

export interface CustomHeaderProps {
  backButton?: boolean;
  handleBackButton?: () => void;
  headerHeight?: number;
  headerTitle?: string;
  rightIcon?: string;
  rightIconPress?: () => void;
}

export const CustomHeader: FunctionComponent<CustomHeaderProps> = ({
  backButton,
  handleBackButton,
  headerHeight,
  headerTitle,
  rightIcon,
  rightIconPress,
}: CustomHeaderProps) => {
  const height = headerHeight !== undefined ? headerHeight : sh60;

  const headerStyle: ViewStyle = {
    ...flexRow,
    ...px(sw30),
    backgroundColor: colorWhite.primary,
    height: height,
  };

  const sideContainer: ViewStyle = {
    ...centerHorizontal,
    width: sw60,
  };

  return (
    <View style={headerStyle}>
      <View style={sideContainer}>{backButton === true ? <BackButton handleBackButton={handleBackButton} /> : null}</View>
      <CustomFlexSpacer />
      <View style={centerHV}>
        <Text style={fs15MedBlack}>{headerTitle}</Text>
      </View>
      <CustomFlexSpacer />
      <View style={sideContainer}>
        {rightIcon !== undefined ? (
          <View style={flexRow}>
            <CustomFlexSpacer />
            <TouchableWithoutFeedback onPress={rightIconPress}>
              <IcoMoon color={colorBlack.primary} name={rightIcon} size={sw20} />
            </TouchableWithoutFeedback>
          </View>
        ) : null}
      </View>
    </View>
  );
};
