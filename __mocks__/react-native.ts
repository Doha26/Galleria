import * as ReactNative from 'react-native';

export const alert = jest.fn();
export const Alert = {alert};

export const dimensionWidth = 100;
export const Dimensions = {
  get: jest.fn().mockReturnValue({width: dimensionWidth, height: 100}),
};

export const Image = 'Image';

export const keyboardDismiss = jest.fn();
export const Keyboard = {
  dismiss: keyboardDismiss,
};

export const Platform = {
  ...ReactNative.Platform,
  OS: 'ios',
  Version: 123,
  isTesting: true,
  select: (objs: any) => objs.ios,
};

export default Object.setPrototypeOf(
  {
    Alert,
    Dimensions,
    Image,
    Keyboard,
    Platform,
  },
  ReactNative,
);
