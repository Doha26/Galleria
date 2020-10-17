import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from '~/utils';
import Colors from '~/theming/colors';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 500,
    backgroundColor: Colors.blackOverlay,
  },
});
export default styles;
