import { useNavigation, useNavigationState } from '@react-navigation/native';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { IcoMoon } from '../../icons';
import { flexRow, fs18MedOrange, sw14 } from '../../styles';
import { CustomSpacer } from '../Views/Spacer';

export interface BackButtonProps {
  handleBackButton?: () => void;
  withBackButton?: () => void;
}

export const BackButton = ({ handleBackButton, withBackButton }: BackButtonProps) => {
  const navigation = useNavigation();
  const stateIndex = useNavigationState((state) => state.index);

  if (stateIndex === 0) {
    return null;
  }

  const onPress = () => {
    if (handleBackButton !== undefined) {
      handleBackButton();
    } else {
      navigation?.goBack();
      if (withBackButton !== undefined) {
        withBackButton();
      }
    }
  };
  return (
    <View style={flexRow}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={flexRow}>
          <IcoMoon name="caret-left" style={fs18MedOrange} />
          <CustomSpacer isHorizontal={true} space={sw14} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
