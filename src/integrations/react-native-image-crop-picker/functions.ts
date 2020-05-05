import ImagePicker, { Image, Options } from 'react-native-image-crop-picker';

import { DEVICE } from '../../styles';

const options: Options = {
  includeBase64: true,
  mediaType: 'photo',
  multiple: false,
  cropping: true,
  cropperToolbarTitle: 'Edit Photo',
  // android
  freeStyleCropEnabled: true,
};

type SuccessCallback = (image: Image | Image[]) => void;

const width = DEVICE.SCREEN.WIDTH;
const cropHeight = width * 0.8;

export const imageOpenPicker = async (handleSuccess: SuccessCallback) => {
  try {
    const image = await ImagePicker.openPicker({
      ...options,
      width: width,
      height: cropHeight,
      cropping: true,
    });
    handleSuccess(image);
  } catch (error) {
    if (JSON.stringify(error).includes('cancelled')) {
      console.log('User Cancelled', error);
      return '';
    }
    return console.log('error', error);
  }
};

export const imageOpenCamera = async (handleSuccess: SuccessCallback) => {
  try {
    const image = await ImagePicker.openCamera({
      ...options,
      width: width,
      height: cropHeight,
      cropping: true,
    });
    handleSuccess(image);
  } catch (error) {
    if (JSON.stringify(error).includes('cancelled')) {
      console.log('User Cancelled', error);
      return '';
    }
    return console.log('error', error);
  }
};
