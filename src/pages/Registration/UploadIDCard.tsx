import React, { Fragment } from "react";
import { Image, Text, TouchableWithoutFeedback, View, ViewStyle } from "react-native";

import { IcoMoon } from "../..//icons";
import { CustomSpacer } from "../../components";
import { centerHV, colorDarkBlue, colorGray, DEVICE, fs12MedDarkBlue1, fs15MedBlack, sh12, sh20 } from "../../styles";

interface UploadIDCardProps {
  disabled?: boolean;
  handleAddMedia: () => void;
  inputImage: FileBase64;
}

export const UploadIDCard = ({ handleAddMedia, inputImage, disabled }: UploadIDCardProps) => {
  const width = DEVICE.SCREEN.WIDTH;
  const cropHeight = width * 0.7;

  const displayStyle: ViewStyle = {
    ...centerHV,
    height: cropHeight,
    width: "100%",
    borderStyle: "dotted",
    borderWidth: disabled === true ? 0 : 2,
    borderColor: colorGray.secondary,
  };

  const profileStyle: any = {
    height: cropHeight - 4,
    width: "100%",
  };

  return (
    <Fragment>
      <Text style={fs15MedBlack}>Identification Card</Text>
      <CustomSpacer space={sh12} />
      <TouchableWithoutFeedback onPress={disabled === true ? undefined : handleAddMedia}>
        <View style={displayStyle}>
          {inputImage.base64 === "" ? (
            <Fragment>
              <IcoMoon name="camera" size={36} style={{ color: colorDarkBlue.primary }} />
              <CustomSpacer space={sh20} />
              <Text style={fs12MedDarkBlue1}>Upload your Photo</Text>
            </Fragment>
          ) : (
            <Image source={{ uri: `data:${inputImage.type};base64,${inputImage.base64}` }} style={profileStyle} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};
