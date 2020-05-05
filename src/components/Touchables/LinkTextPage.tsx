import React, { Fragment } from 'react';
import { Text, TextStyle } from 'react-native';

import { fs16MedOrange, fsAlignCenter, fsCapitalize } from '../../styles';
import { CustomSpacer } from '../Views/Spacer';

interface LinkTextPageProps {
  space: number;
  textLink?: string;
  textLinkPress?: () => void;
}

export const LinkTextPage = ({ space, textLink, textLinkPress }: LinkTextPageProps) => {
  if (!textLink) {
    return null;
  }

  const textLinkStyle: TextStyle = { ...fs16MedOrange, ...fsAlignCenter, ...fsCapitalize };

  return (
    <Fragment>
      <CustomSpacer space={space} />
      <Text onPress={textLinkPress} style={textLinkStyle}>
        {textLink}
      </Text>
    </Fragment>
  );
};
