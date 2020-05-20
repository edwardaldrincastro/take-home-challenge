import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Image } from "react-native-image-crop-picker";

import { ContentPage, CustomFlexSpacer, CustomSpacer, SafeAreaPage } from "../components";
import { useStateData } from "../contexts";
import { AxiosInstance, imageOpenCamera, imageOpenPicker, SERVICES, storeData } from "../integrations";
import { sh12 } from "../styles";
import { AlertDialog, RequestActionButton, RequestActionUtil, Validator } from "../utils";
import { InputEmail, InputName, UploadIDCard } from "./Registration";

export const AccountPage = () => {
  const { stateData, setStateData } = useStateData();
  const { givenName, lastName, email, identificationCard, id, password } = stateData.user;

  const [inputEmail, setInputEmail] = useState<string>(email);
  const [inputGivenName, setInputGivenName] = useState<string>(givenName);
  const [inputLastName, setInputLastName] = useState<string>(lastName);
  const [inputImage, setInputImage] = useState<FileBase64>(identificationCard);
  const [rightIcon, setRightIcon] = useState<string>("pencil");

  const errGivenName = Validator.isEmpty(inputGivenName) || Validator.isNameFull(inputGivenName) ? "" : "Please enter a valid name";
  const errLastName = Validator.isEmpty(inputLastName) || Validator.isNameFull(inputLastName) ? "" : "Please enter a valid name";
  const errEmail = Validator.isEmpty(inputEmail) || Validator.isEmail(inputEmail) ? "" : "Please enter a valid email";

  const buttonDisabled =
    inputGivenName === "" ||
    inputLastName === "" ||
    inputEmail === "" ||
    inputImage.base64 === "" ||
    errGivenName !== "" ||
    errLastName !== "" ||
    errEmail !== "";

  const isEditing = rightIcon === "close";
  const buttonText = isEditing ? "Confirm" : undefined;
  const disabled = isEditing ? false : true;

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
    showLoader();
    validateInputImage();
    if (Validator.isNotEmpty(inputImage.base64)) {
      // mock data without security
      const requestBody = {
        email: inputEmail,
        lastName: inputLastName,
        givenName: inputGivenName,
        identificationCard: inputImage,
        password: password,
      };
      const res = await AxiosInstance.put(`${SERVICES.USER}${id}.json`, requestBody);
      if (res.status === 200) {
        hideLoader();
        const updatedUserData = { ...stateData.user, ...res.data };
        await storeData("user", updatedUserData);
        await setStateData(updatedUserData);
        setRightIcon("pencil");
      } else {
        return AlertDialog("Error in Updating", hideLoader);
      }
    }
  };

  const handleImageResult = (results: Image | Image[]) => {
    if (!Array.isArray(results)) {
      const { data, filename, size, mime, creationDate, path } = results;
      const selectedImage: FileBase64 = { base64: data || "", name: filename, size, type: mime, date: creationDate, path };
      return setInputImage(selectedImage);
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

  const handlePressEdit = () => {
    if (rightIcon === "close") {
      setInputGivenName(givenName);
      setInputLastName(lastName);
      setInputEmail(email);
      setInputImage(identificationCard);
      setRightIcon("pencil");
    } else {
      setRightIcon("close");
    }
  };

  return (
    <SafeAreaPage backButton={true} headerTitle="Account Settings" rightIconPress={handlePressEdit} rightIcon={rightIcon}>
      <ContentPage buttonDisabled={buttonDisabled} buttonText={buttonText} handleOnPressButton={handlePressSubmit} spaceToTop={0}>
        <View>
          <InputName
            inputGivenName={inputGivenName}
            inputGivenNameError={errGivenName}
            inputLastName={inputLastName}
            inputLastNameError={errLastName}
            disabled={disabled}
            setInputGivenName={setInputGivenName}
            setInputLastName={setInputLastName}
          />
          <InputEmail inputEmail={inputEmail} inputEmailError={errEmail} disabled={disabled} setInputEmail={setInputEmail} />
          <CustomSpacer space={sh12} />
          <UploadIDCard handleAddMedia={handleAddMedia} inputImage={inputImage} disabled={!isEditing} />
          <CustomSpacer space={sh12} />
        </View>
        <CustomFlexSpacer />
      </ContentPage>
    </SafeAreaPage>
  );
};
