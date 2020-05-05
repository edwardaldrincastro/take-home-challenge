import React, { FunctionComponent, ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { flexChild, flexGrow, fs15LightBlack, fs24LightBlack, fs24MedBlack, px, sh16, sh24, sh6, sh8, sw32 } from '../../styles';
import { CustomButton, LinkTextPage } from '../Touchables';
import { CustomFlexSpacer, CustomSpacer, TextSpaceArea } from '../Views';

export interface ContentPageProps {
  buttonDisabled?: boolean;
  buttonText?: string;
  children?: ReactNode;
  handleOnPressButton?: () => void;
  handleOnPressTextLink?: () => void;
  heading?: string;
  noScroll?: boolean;
  spaceToBottom?: number;
  spaceToButton?: number;
  spaceToTop?: number;
  style?: ViewStyle;
  subheading?: string;
  subtitle?: string;
  textLink?: string;
}

export const ContentPage: FunctionComponent<ContentPageProps> = ({
  buttonDisabled,
  buttonText,
  children,
  handleOnPressButton,
  handleOnPressTextLink,
  heading,
  noScroll,
  spaceToBottom,
  spaceToButton,
  spaceToTop,
  style,
  subheading,
  subtitle,
  textLink,
}: ContentPageProps) => {
  const { bottom } = useSafeArea();

  const container: ViewStyle = { ...px(sw32), ...flexChild, ...style };
  const bottomSpace = bottom === 0;
  const defaultSpaceToTop = spaceToTop !== undefined ? spaceToTop : sh24;
  let spaceToBottomFinal = textLink !== undefined ? sh6 : sh24;
  spaceToBottomFinal = spaceToBottom !== undefined ? spaceToBottom : spaceToBottomFinal;

  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={flexGrow}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={!noScroll}
      showsVerticalScrollIndicator={false}>
      <View style={container}>
        <CustomSpacer space={defaultSpaceToTop} />
        <TextSpaceArea space={sh8} style={fs24MedBlack} text={heading} />
        <TextSpaceArea space={sh8} style={fs24LightBlack} text={subheading} />
        <TextSpaceArea space={sh8} style={fs15LightBlack} text={subtitle} />
        {children}
        {spaceToButton !== undefined ? <CustomSpacer space={spaceToButton} /> : <CustomFlexSpacer />}
        {buttonText !== undefined && handleOnPressButton !== undefined ? (
          <CustomButton disabled={buttonDisabled} onPress={handleOnPressButton} text={buttonText} />
        ) : null}
        <LinkTextPage space={sh16} textLink={textLink} textLinkPress={handleOnPressTextLink} />
        <CustomSpacer space={spaceToBottomFinal} />
        {bottomSpace ? <CustomSpacer space={sh24} /> : null}
      </View>
    </ScrollView>
  );
};
