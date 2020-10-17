import {StyleSheet} from 'react-native';
import Colors from '~/theming/colors';
import {WIDTH} from '~/utils';
import colors from '~/theming/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH / 2,
    height: 250,
    marginTop: 5,
  },

  imageWrapper: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: colors.lightgray,
    marginHorizontal: 2,
    position: 'relative',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
  },
  detailsWraper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.lightgray,
  },
});
export default styles;
