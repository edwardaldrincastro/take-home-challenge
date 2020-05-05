import React, { Fragment } from 'react';

import { CustomSpacer, CustomTextInput } from '../../components';
import { sh8 } from '../../styles';

interface InputNameProps {
  inputGivenName: string;
  inputGivenNameError: string;
  inputLastName: string;
  inputLastNameError: string;
  disabled?: boolean;
  setInputGivenName: (value: string) => void;
  setInputLastName: (value: string) => void;
}

export const InputName = ({
  inputGivenName,
  inputGivenNameError,
  inputLastName,
  inputLastNameError,
  disabled,
  setInputGivenName,
  setInputLastName,
}: InputNameProps) => {
  return (
    <Fragment>
      <CustomTextInput
        editable={!disabled}
        errorMessage={inputGivenNameError}
        errorUnderline={inputGivenNameError !== ''}
        label="Given Name"
        noBorder={disabled}
        onChangeText={setInputGivenName}
        placeholder="Given Name"
        textContentType="givenName"
        value={inputGivenName}
      />
      <CustomSpacer space={sh8} />
      <CustomTextInput
        editable={!disabled}
        errorMessage={inputLastNameError}
        errorUnderline={inputLastNameError !== ''}
        label="Last Name"
        noBorder={disabled}
        onChangeText={setInputLastName}
        placeholder="Last Name"
        textContentType="familyName"
        value={inputLastName}
      />
      <CustomSpacer space={sh8} />
    </Fragment>
  );
};
