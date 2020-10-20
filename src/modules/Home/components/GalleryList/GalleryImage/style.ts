import {Platform, StyleSheet} from 'react-native';
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
    marginHorizontal: 5,
    position: 'relative',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    borderRadius: Platform.OS === 'android' ? 16 : 0,
    marginHorizontal: Platform.OS === 'android' ? 2 : 0,
  },
  detailsWraper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.lightgray,
  },
  fallBackWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
