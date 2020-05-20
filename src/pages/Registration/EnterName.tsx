import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

import { ContentPage, CustomSpacer, SafeAreaPage } from "../../components";
import { useRegistrationData } from "../../contexts";
import { sh40 } from "../../styles";
import { Validator } from "../../utils";
import { InputName } from "./InputName";

interface RegisterNameProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const RegisterNamePage = ({ navigation }: RegisterNameProps) => {
  const { setRegistrationData, registrationData } = useRegistrationData();

  const inputGivenName = registrationData.PAGE_REGISTER_GIVEN_NAME;
  const inputLastName = registrationData.PAGE_REGISTER_LAST_NAME;

  const errGivenName = Validator.isEmpty(inputGivenName) || Validator.isNameFull(inputGivenName) ? "" : "Please enter a valid name";
  const errLastName = Validator.isEmpty(inputLastName) || Validator.isNameFull(inputLastName) ? "" : "Please enter a valid name";

  const buttonDisabled = inputGivenName === "" || inputLastName === "" || errGivenName !== "" || errLastName !== "";

  const handlePressNext = () => {
    navigation?.navigate("RegisterEmail");
  };

  const setInputGivenName = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_GIVEN_NAME: value });
  };

  const setInputLastName = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_LAST_NAME: value });
  };

  return (
    <SafeAreaPage backButton={true} headerTitle="Registration">
      <ContentPage
        buttonDisabled={buttonDisabled}
        buttonText="Next"
        handleOnPressButton={handlePressNext}
        heading="Hello! I'm Eya,"
        subheading="what's your name?">
        <CustomSpacer space={sh40} />
        <InputName
          inputGivenName={inputGivenName}
          inputGivenNameError={errGivenName}
          inputLastName={inputLastName}
          inputLastNameError={errLastName}
          setInputGivenName={setInputGivenName}
          setInputLastName={setInputLastName}
        />
      </ContentPage>
    </SafeAreaPage>
  );
};
