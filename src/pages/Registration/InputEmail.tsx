import React, { Fragment } from "react";

import { CustomSpacer, CustomTextInput } from "../../components";
import { sh8 } from "../../styles";

interface InputEmailProps {
  inputEmail: string;
  inputEmailError: string;
  disabled?: boolean;
  setInputEmail: (value: string) => void;
}

export const InputEmail = ({ inputEmail, inputEmailError, disabled, setInputEmail }: InputEmailProps) => {
  return (
    <Fragment>
      <CustomTextInput
        autoCapitalize="none"
        editable={!disabled}
        errorMessage={inputEmailError}
        errorUnderline={inputEmailError !== ""}
        label="Email"
        noBorder={disabled}
        onChangeText={setInputEmail}
        placeholder="Email Address"
        keyboardType="email-address"
        textContentType="emailAddress"
        value={inputEmail}
      />
      <CustomSpacer space={sh8} />
    </Fragment>
  );
};
