import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { ContentPage, CustomFlexSpacer, CustomSpacer, SafeAreaPage, TextSpaceArea } from '../components';
import { LocalAssets } from '../constants';
import { centerHV, flexChild, fs15LightBlack, fs24MedBlack, fsAlignCenter, sh16, sh8, sw240 } from '../styles';

interface WelcomePageProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const WelcomePage = ({ navigation }: WelcomePageProps) => {
  const { bottom } = useSafeArea();

  const handlePressLogin = () => {
    navigation?.navigate('Login');
  };
  const handlePressSignUp = () => {
    navigation?.navigate('RegisterName');
  };

  return (
    <SafeAreaPage noHeader={true}>
      <ContentPage
        buttonText="Open an Account"
        handleOnPressButton={handlePressSignUp}
        textLink="I Already Have an Account"
        handleOnPressTextLink={handlePressLogin}>
        <CustomFlexSpacer />
        <View style={{ ...flexChild, ...centerHV }}>
          <Image source={LocalAssets.AppIcon} style={{ width: sw240, height: sw240, resizeMode: 'contain' }} />
          <CustomFlexSpacer />
          <TextSpaceArea space={sh8} style={fs24MedBlack} text="Welcome" />
          <TextSpaceArea
            space={sh8}
            style={{ ...fs15LightBlack, ...fsAlignCenter }}
            text="Create an account and start earning money while tracking your spending."
          />
        </View>
        {bottom === 0 ? <CustomSpacer space={sh16} /> : null}
      </ContentPage>
    </SafeAreaPage>
  );
};
