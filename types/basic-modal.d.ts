
declare type Animation = import('react-native-animatable').Animation
declare type CustomAnimation = import('react-native-animatable').CustomAnimation

declare interface IBasicModalProps {
  animationIn?: Animation | CustomAnimation;
  animationInTiming?: number;
  animationOut?: Animation | CustomAnimation;
  animationOutTiming?: number;
  children: JSX.Element;
  onClose?: () => void;
  visible: boolean;
}
