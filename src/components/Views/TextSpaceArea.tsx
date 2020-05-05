import React, { Fragment } from 'react';
import { Text, TextStyle } from 'react-native';

import { CustomSpacer } from '../Views/Spacer';

export interface TextSpaceAreaProps {
  space: number;
  style?: TextStyle;
  text?: string;
}

export const TextSpaceArea = ({ space, style, text }: TextSpaceAreaProps) => {
  if (!text) {
    return null;
  }

  return (
    <Fragment>
      <Text style={style}>{text}</Text>
      <CustomSpacer space={space} />
    </Fragment>
  );
};
