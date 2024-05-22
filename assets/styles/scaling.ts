import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

// Window is what's usable by the app. Screen is the entire screen of the phone, including the status bar, clock etc.
const {width, height} = Dimensions.get('window');

//Iphone 6 7 8
const isSmall = width <= 375 && !DeviceInfo.hasNotch;

// using this for horizontal scaling
const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }

  return 350;
};

const horizontalScale = (size: number) => {
  return (width / guidelineBaseWidth()) * size;
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = (size: number) => {
  return (height / guidelineBaseHeight()) * size;
};

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = (size: number) => {
  return Math.round(width / guidelineBaseFonts()) * size;
};

export {horizontalScale, verticalScale, scaleFontSize};
