import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import { ContentPage, CustomSpacer, SafeAreaPage } from '../../components';
import { useRegistrationData } from '../../contexts';
import { sh40 } from '../../styles';
import { Validator } from '../../utils';
import { InputEmail } from './InputEmail';

interface RegisterEmailProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const RegisterEmailPage = ({ navigation }: RegisterEmailProps) => {
  const { setRegistrationData, registrationData } = useRegistrationData();
  const inputEmail = registrationData.PAGE_REGISTER_EMAIL;

  const heading = `Hey ${registrationData.PAGE_REGISTER_GIVEN_NAME},`;
  const errEmail = Validator.isEmpty(inputEmail) || Validator.isEmail(inputEmail) ? '' : 'Please enter a valid email';
  const buttonDisabled = inputEmail === '' || errEmail !== '';

  const handlePressNext = () => {
    navigation?.navigate('RegisterPassword');
  };

  const setInputEmail = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_EMAIL: value });
  };

  return (
    <SafeAreaPage backButton={true} headerTitle="Registration">
      <ContentPage
        buttonDisabled={buttonDisabled}
        buttonText="Next"
        handleOnPressButton={handlePressNext}
        heading={heading}
        subheading="can I get your email?">
        <CustomSpacer space={sh40} />
        <InputEmail inputEmail={inputEmail} inputEmailError={errEmail} setInputEmail={setInputEmail} />
      </ContentPage>
    </SafeAreaPage>
  );
};
