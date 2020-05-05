import React from 'react';
import Modal from 'react-native-modal';

import { noMargin } from '../../styles';

export const BasicModal = ({
  animationIn,
  animationInTiming,
  animationOut,
  animationOutTiming,
  children,
  onClose,
  visible,
}: IBasicModalProps) => {
  const defaultAnimationIn = animationIn !== undefined ? animationIn : 'slideInUp';
  const defaultAnimationOut = animationOut !== undefined ? animationOut : 'slideOutDown';

  return (
    <Modal
      animationIn={defaultAnimationIn}
      animationInTiming={animationInTiming}
      animationOut={defaultAnimationOut}
      animationOutTiming={animationOutTiming}
      isVisible={visible}
      onModalHide={onClose}
      style={noMargin}>
      {children}
    </Modal>
  );
};
