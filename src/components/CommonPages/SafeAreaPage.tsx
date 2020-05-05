import React, { Fragment, ReactNode } from 'react';
import { SafeAreaView, StatusBar, StatusBarStyle, ViewStyle } from 'react-native';

import { colorWhite, flexChild, flexNone } from '../../styles';
import { CustomHeader, CustomHeaderProps } from '../Views';

interface SafeArePageProps extends CustomHeaderProps {
  barStyle?: StatusBarStyle;
  bottomBackgroundColor?: string;
  children: ReactNode;
  noHeader?: boolean;
  topBackgroundColor?: string;
}

export const SafeAreaPage = ({
  barStyle,
  bottomBackgroundColor,
  children,
  noHeader,
  topBackgroundColor,
  ...headerProps
}: SafeArePageProps) => {
  const defaultBarStyle = barStyle !== undefined ? barStyle : 'dark-content';

  const safeAreaTopStyle: ViewStyle = {
    ...flexNone,
    backgroundColor: topBackgroundColor !== undefined ? topBackgroundColor : colorWhite.primary,
  };

  const safeAreaBottomStyle: ViewStyle = {
    ...flexChild,
    backgroundColor: bottomBackgroundColor !== undefined ? bottomBackgroundColor : colorWhite.primary,
  };

  return (
    <Fragment>
      <StatusBar barStyle={defaultBarStyle} />
      <SafeAreaView style={safeAreaTopStyle} />
      <SafeAreaView style={safeAreaBottomStyle}>
        {noHeader === true ? null : <CustomHeader {...headerProps} />}
        {children}
      </SafeAreaView>
    </Fragment>
  );
};
