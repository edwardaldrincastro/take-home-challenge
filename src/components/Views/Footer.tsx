import React, { FunctionComponent } from 'react';
import { TouchableWithoutFeedback, View, ViewStyle } from 'react-native';

import { IcoMoon } from '../../icons';
import { centerHV, colorGray, colorOrange, colorWhite, flexChild, flexRow, px, sh50, sw24, sw30 } from '../../styles';

export interface CustomFooterProps {
  activeIndex: number;
  items: FooterItem[];
}

export const CustomFooter: FunctionComponent<CustomFooterProps> = ({ activeIndex, items }: CustomFooterProps) => {
  const height = sh50;

  const footerStyle: ViewStyle = {
    ...flexRow,
    ...px(sw30),
    backgroundColor: colorWhite.primary,
    height: height,
  };

  const itemContainer: ViewStyle = {
    ...centerHV,
    ...flexChild,
  };

  return (
    <View style={footerStyle}>
      {items.map((item: FooterItem, index: number) => {
        const color = index === activeIndex ? colorOrange.primary : colorGray.secondary;
        return (
          <TouchableWithoutFeedback key={index} onPress={item.onPress}>
            <View style={itemContainer}>
              <IcoMoon color={color} name={item.icon} size={sw24} />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};
