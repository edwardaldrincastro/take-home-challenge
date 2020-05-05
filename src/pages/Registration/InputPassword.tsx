import React, { Fragment, useState } from 'react';

import { CustomSpacer, CustomTextInput } from '../../components';
import { sh8 } from '../../styles';

interface InputPasswordProps {
  inputPassword: string;
  inputPasswordError: string;
  inputRetypePassword: string;
  inputRetypePasswordError: string;
  setInputPassword: (value: string) => void;
  setInputRetypePassword: (value: string) => void;
}

export const InputPassword = ({
  inputPassword,
  inputPasswordError,
  inputRetypePassword,
  inputRetypePasswordError,
  setInputPassword,
  setInputRetypePassword,
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const showPasswordText = showPassword ? 'Show Password' : 'Hide Password';

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Fragment>
      <CustomTextInput
        autoCapitalize="none"
        errorMessage={inputPasswordError}
        errorUnderline={inputPasswordError !== ''}
        label="Password"
        onChangeText={setInputPassword}
        placeholder="Password"
        secureTextEntry={showPassword}
        textContentType="newPassword"
        value={inputPassword}
      />
      <CustomSpacer space={sh8} />
      <CustomTextInput
        autoCapitalize="none"
        bottomText={showPasswordText}
        onPressBottomText={handleShowPassword}
        errorMessage={inputRetypePasswordError}
        errorUnderline={inputRetypePasswordError !== ''}
        label="Retype Password"
        onChangeText={setInputRetypePassword}
        placeholder="Retype Password"
        secureTextEntry={showPassword}
        textContentType="newPassword"
        value={inputRetypePassword}
      />
      <CustomSpacer space={sh8} />
    </Fragment>
  );
};
