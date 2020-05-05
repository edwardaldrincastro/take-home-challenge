import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Alert } from 'react-native';
import { Image } from 'react-native-image-crop-picker';

import { ContentPage, CustomSpacer, SafeAreaPage } from '../../components';
import { useRegistrationData } from '../../contexts';
import { imageOpenCamera, imageOpenPicker } from '../../integrations';
import { sh56 } from '../../styles';
import { RequestActionButton, RequestActionUtil, Validator } from '../../utils';
import { UploadIDCard } from './UploadIDCard';

interface RegisterIDCardProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const RegisterIDCardPage = ({ navigation }: RegisterIDCardProps) => {
  const { setRegistrationData, registrationData } = useRegistrationData();
  const inputImage = registrationData.PAGE_REGISTER_ID_PHOTO;

  const buttonDisabled = inputImage.base64 === '';

  const validateInputImage = () => {
    if (!Validator.isNotEmpty(inputImage.base64)) {
      return Alert.alert('There is an error uploading your photo');
    }
  };

  const handlePressNext = () => {
    validateInputImage();
    if (!buttonDisabled && Validator.isNotEmpty(inputImage.base64)) {
      navigation?.navigate('Summary');
    }
  };

  const handleImageResult = (results: Image | Image[]) => {
    if (!Array.isArray(results)) {
      const { data, filename, size, mime, creationDate, path } = results;
      const selectedImage: FileBase64 = { base64: data || '', name: filename, size, type: mime, date: creationDate, path };
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
    const takePhoto: RequestActionButton = { onPress: handleOpenCamera, text: 'Take a Photo' };
    const choosePhoto: RequestActionButton = { onPress: handleOpenPicker, text: 'Photo Library' };
    const buttons = [takePhoto, choosePhoto];
    RequestActionUtil({
      title: 'Upload your ID',
      buttons: buttons,
    });
  };

  return (
    <SafeAreaPage backButton={true} headerTitle="Registration">
      <ContentPage
        buttonDisabled={buttonDisabled}
        buttonText="Next"
        handleOnPressButton={handlePressNext}
        heading="I need more verification,"
        subheading="let me take a photo of your ID.">
        <CustomSpacer space={sh56} />
        <UploadIDCard handleAddMedia={handleAddMedia} inputImage={inputImage} />
      </ContentPage>
    </SafeAreaPage>
  );
};
