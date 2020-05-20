import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Alert } from "react-native";
import { Image } from "react-native-image-crop-picker";

import { ContentPage, CustomSpacer, SafeAreaPage } from "../../components";
import { useRegistrationData, useStateData } from "../../contexts";
import { AxiosInstance, imageOpenCamera, imageOpenPicker, SERVICES } from "../../integrations";
import { sh12, sh32, sh40 } from "../../styles";
import { AlertDialog, RequestActionButton, RequestActionUtil, Validator } from "../../utils";
import { InputEmail } from "./InputEmail";
import { InputName } from "./InputName";
import { InputPassword } from "./InputPassword";
import { UploadIDCard } from "./UploadIDCard";

interface SummaryProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const SummaryPage = ({ navigation }: SummaryProps) => {
  const { setStateData } = useStateData();
  const { setRegistrationData, registrationData, clearRegistrationData } = useRegistrationData();

  const inputEmail = registrationData.PAGE_REGISTER_EMAIL;
  const inputGivenName = registrationData.PAGE_REGISTER_GIVEN_NAME;
  const inputLastName = registrationData.PAGE_REGISTER_LAST_NAME;
  const inputImage = registrationData.PAGE_REGISTER_ID_PHOTO;
  const inputPassword = registrationData.PAGE_REGISTER_PASSWORD;
  const inputRetypePassword = registrationData.PAGE_REGISTER_RETYPE_PASSWORD;

  const setInputEmail = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_EMAIL: value });
  };

  const setInputGivenName = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_GIVEN_NAME: value });
  };

  const setInputLastName = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_LAST_NAME: value });
  };

  const setInputPassword = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_PASSWORD: value });
  };

  const setInputRetypePassword = (value: string) => {
    setRegistrationData({ ...registrationData, PAGE_REGISTER_RETYPE_PASSWORD: value });
  };

  const validateInputImage = () => {
    if (!Validator.isNotEmpty(inputImage.base64)) {
      return Alert.alert("There is an error uploading your photo");
    }
  };

  const showLoader = () => {
    setStateData({ loading: true });
  };

  const hideLoader = () => {
    setStateData({ loading: false });
  };

  const handlePressSubmit = async () => {
    validateInputImage();
    showLoader();
    if (!buttonDisabled && Validator.isNotEmpty(inputImage.base64)) {
      // mock data without security
      const requestBody = {
        email: inputEmail,
        lastName: inputLastName,
        givenName: inputGivenName,
        identificationCard: inputImage,
        password: inputPassword,
      };
      const res = await AxiosInstance.post(SERVICES.USERS, requestBody);
      if (res.status === 200) {
        clearRegistrationData();
        hideLoader();
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: "Welcome" }, { name: "Login" }],
          }),
        );
      } else {
        return AlertDialog("Error in Registration", hideLoader);
      }
    }
  };

  const handleImageResult = (results: Image | Image[]) => {
    if (!Array.isArray(results)) {
      const { data, filename, size, mime, creationDate, path } = results;
      const selectedImage: FileBase64 = { base64: data || "", name: filename, size, type: mime, date: creationDate, path };
      return setRegistrationData({ ...registrationData, PAGE_REGISTER_ID_PHOTO: selectedImage });
    }
  };

  const handleOpenCamera = () => {
    imageOpenCamera(handleImageResult);
  };
  const handleOpenPicker = () => {
    imageOpenPicker(handleImageResult);
  };

  const handleAddMedia = () => {
    const takePhoto: RequestActionButton = { onPress: handleOpenCamera, text: "Take a Photo" };
    const choosePhoto: RequestActionButton = { onPress: handleOpenPicker, text: "Photo Library" };
    const buttons = [takePhoto, choosePhoto];
    RequestActionUtil({
      title: "Upload your ID",
      buttons: buttons,
    });
  };

  const errGivenName = Validator.isEmpty(inputGivenName) || Validator.isNameFull(inputGivenName) ? "" : "Please enter a valid name";
  const errLastName = Validator.isEmpty(inputLastName) || Validator.isNameFull(inputLastName) ? "" : "Please enter a valid name";
  const errEmail = Validator.isEmpty(inputEmail) || Validator.isEmail(inputEmail) ? "" : "Please enter a valid email";
  const errPassword = Validator.isEmpty(inputPassword) || Validator.isPassword(inputPassword) ? "" : "Please enter a valid password";
  let errRetypePassword = "";

  if (!Validator.isPassword(inputRetypePassword)) {
    errRetypePassword = "Please enter a valid password";
  }
  if (inputPassword !== inputRetypePassword) {
    errRetypePassword = `Your password doesn't match`;
  }

  if (Validator.isEmpty(inputRetypePassword)) {
    errRetypePassword = "";
  }

  const buttonDisabled =
    inputGivenName === "" ||
    inputLastName === "" ||
    inputEmail === "" ||
    inputPassword === "" ||
    inputRetypePassword === "" ||
    inputImage.base64 === "" ||
    errGivenName !== "" ||
    errLastName !== "" ||
    errEmail !== "" ||
    errPassword !== "" ||
    errRetypePassword !== "";

  return (
    <SafeAreaPage backButton={true} headerTitle="Registration">
      <ContentPage
        buttonDisabled={buttonDisabled}
        buttonText="Submit"
        handleOnPressButton={handlePressSubmit}
        heading="Almost done,"
        subheading="please confirm your details.">
        <CustomSpacer space={sh40} />
        <InputName
          inputGivenName={inputGivenName}
          inputGivenNameError={errGivenName}
          inputLastName={inputLastName}
          inputLastNameError={errLastName}
          setInputGivenName={setInputGivenName}
          setInputLastName={setInputLastName}
        />
        <InputEmail inputEmail={inputEmail} inputEmailError={errEmail} setInputEmail={setInputEmail} />
        <InputPassword
          inputPassword={inputPassword}
          inputRetypePassword={inputRetypePassword}
          setInputPassword={setInputPassword}
          setInputRetypePassword={setInputRetypePassword}
          inputPasswordError={errPassword}
          inputRetypePasswordError={errRetypePassword}
        />
        <CustomSpacer space={sh12} />
        <UploadIDCard handleAddMedia={handleAddMedia} inputImage={inputImage} />
        <CustomSpacer space={sh32} />
      </ContentPage>
    </SafeAreaPage>
  );
};
