import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Keyboard } from 'react-native';

import { ContentPage, CustomSpacer, SafeAreaPage } from '../../components';
import { useRegistrationData } from '../../contexts';
import { sh40 } from '../../styles';
import { Validator } from '../../utils';
import { InputPassword } from './InputPassword';

interface RegisterPasswordProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const RegisterPasswordPage = ({ navigation }: RegisterPasswordProps) => {
  const { setRegistrationData, registrationData } = useRegistrationData();
  const inputPassword = registrationData.PAGE_REGISTER_PASSWORD;
  const inputRetypePassword = registrationData.PAGE_REGISTER_RETYPE_PASSWORD;

  const handlePressNext = () => {
    if (Validator.isPassword(inputPassword) && Validator.isPassword(inputRetypePassword) && !buttonDisabled) {
      Keyboard.dismiss();
      navigation?.navigate('RegisterIDCard');
    }
  };

  const setInputPassword = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_PASSWORD: value });
  };

  const setInputRetypePassword = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_RETYPE_PASSWORD: value });
  };

  const errPassword = Validator.isEmpty(inputPassword) || Validator.isPassword(inputPassword) ? '' : 'Please enter a valid password';
  let errRetypePassword = '';

  if (!Validator.isPassword(inputRetypePassword)) {
    errRetypePassword = 'Please enter a valid password';
  }
  if (inputPassword !== inputRetypePassword) {
    errRetypePassword = `Your password doesn't match`;
  }

  if (Validator.isEmpty(inputRetypePassword)) {
    errRetypePassword = '';
  }

  const buttonDisabled = inputPassword === '' || inputRetypePassword === '' || errPassword !== '' || errRetypePassword !== '';

  return (
    <SafeAreaPage backButton={true} headerTitle="Registration">
      <ContentPage
        buttonDisabled={buttonDisabled}
        buttonText="Next"
        handleOnPressButton={handlePressNext}
        heading="Let's make it secured,"
        subheading="add your password">
        <CustomSpacer space={sh40} />
        <InputPassword
          inputPassword={inputPassword}
          inputRetypePassword={inputRetypePassword}
          setInputPassword={setInputPassword}
          setInputRetypePassword={setInputRetypePassword}
          inputPasswordError={errPassword}
          inputRetypePasswordError={errRetypePassword}
        />
      </ContentPage>
    </SafeAreaPage>
  );
};
