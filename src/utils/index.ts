import {Dimensions} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const ITEM_ARRAY_OPTIONS = [
  {
    id: 0,
    name: 'Display in fullscreen',
    icon: 'fullscreen',
    type: 'material-community',
    color: '#e92721',
  },
  {
    id: 1,
    name: 'Save to Gallery',
    icon: 'download',
    type: 'antdesign',
    color: '#3d0664',
  },
  {
    id: 2,
    name: 'Share on Social s Media',
    icon: 'share',
    type: 'entypo',
    color: '#ee7d5b',
  },
];

export const displayFlashMessage = (title: string, description: string, type: any) => {
  showMessage({
    message: title,
    description,
    type,
    autoHide: true,
  });
};
