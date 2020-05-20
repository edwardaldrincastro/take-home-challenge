import React, { Fragment } from "react";
import { Text } from "react-native";

import { fs16MedRed, sh8 } from "../../styles";
import { CustomSpacer } from "../Views/Spacer";

export interface InputErrorMessageProps {
  errorMessage?: string;
}

export const InputErrorMessage = ({ errorMessage }: InputErrorMessageProps) => {
  if (errorMessage === undefined) {
    return null;
  }

  return (
    <Fragment>
      <CustomSpacer space={sh8} />
      <Text style={fs16MedRed}>{errorMessage}</Text>
    </Fragment>
  );
};
