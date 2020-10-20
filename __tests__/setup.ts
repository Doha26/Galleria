import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = require('jest-fetch-mock');

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native-flash-message', () => {});
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-vector-icons/FontAwesome');
jest.mock('react-navigation-tabs', () => {});
jest.mock('react-native-modalize', () => {});

jest.mock('Dimensions', () => {
  return {
    get: jest.fn().mockReturnValue({width: 100, height: 100}),
  };
});
jest.mock('@react-native-community/cameraroll', () => {
  return {
    deletePhotos: jest.fn(),
    saveToCameraRoll: jest.fn(),
    getPhotos: jest.fn(),
  };
});

jest.mock('react-native-safe-area-context', () => ({
  useSafeArea: () => ({insets: null}),
}));

jest.mock('react-native', () => ({
  StyleSheet: {
    create: jest.fn((e) => e),
  },
}));
jest.mock('react-navigation', () => ({
  NavigationEvents: 'mockNavigationEvents',
}));

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native-share', () => {
  return {
    open: jest.fn(),
  };
});

jest.mock('rn-fetch-blob', () => {
  return {
    DocumentDir: () => {},
    fetch: () => {},
    base64: () => {},
    android: () => {},
    ios: () => {},
    config: () => {},
    session: () => {},
    fs: {
      dirs: {
        MainBundleDir: () => {},
        CacheDir: () => {},
        DocumentDir: () => {},
      },
    },
    wrap: () => {},
    polyfill: () => {},
    JSONStream: () => {},
  };
});

const existsMock = jest.fn();
existsMock.mockReturnValueOnce({then: jest.fn()});
export default {
  DocumentDir: () => {},
  ImageCache: {
    get: {
      clear: () => {},
    },
  },
  fs: {
    exists: existsMock,
    dirs: {
      MainBundleDir: () => {},
      CacheDir: () => {},
      DocumentDir: () => {},
    },
  },
};

/* jest.mock('react-native-img-cache', () => {
  return {
    DocumentDir: () => {},
    ImageCache: {
      get: {
        clear: () => {},
      },
    },
  };
}); */

Enzyme.configure({adapter: new Adapter()});
