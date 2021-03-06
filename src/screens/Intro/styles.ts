import {StyleSheet} from 'react-native';
import colors from '~/theming/colors';

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  headingText: {
    fontSize: 43,
    paddingHorizontal: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '900',
    color: colors.white,
  },
  subheading: {
    fontSize: 17,
    paddingHorizontal: 40,
    marginBottom: 35,
    textAlign: 'center',
    color: colors.whiteGray,
    lineHeight: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  blocWrapper: {
    paddingBottom: 30,
    marginHorizontal: 20,
  },
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
});
export default styles;
