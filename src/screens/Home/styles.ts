import {StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import colors from '~/theming/colors';
import {WIDTH} from '~/utils';

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
  headerToolbar: {
    height: 150,
    backgroundColor: '#f64a65',
  },
  toolbarWrapper: {
    backgroundColor: '#f64a65',
    width: WIDTH,
    position: 'absolute',
    top: 0,
    paddingTop: isIphoneX() ? 60 : 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  avatarWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarName: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '900',
    color: colors.white,
    marginLeft: 10,
  },
  headingText: {
    fontSize: 43,
    paddingHorizontal: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '900',
    color: '#000',
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
});
export default styles;
