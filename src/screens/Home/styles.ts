import {StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import colors from '~/theming/colors';
import {HEIGHT, WIDTH} from '~/utils';

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
    height: isIphoneX() ? 150 : 100,
  },
  toolbarWrapper: {
    backgroundColor: '#ffffff',
    width: WIDTH,
    position: 'absolute',
    top: 0,
    paddingTop: isIphoneX() ? 40 : 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarName: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.darkBlue,
    marginLeft: -20,
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
  modalWrapper: {
    paddingBottom: 20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  centered: {
    alignItems: 'center',
  },
  wrapperPadding: {
    padding: 20,
  },

  modalStyle: {
    margin: 0,
    justifyContent: 'flex-end',
    backgroundColor: '#f6f5f5',
  },
  absoluteModal: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: '#000',
    position: 'absolute',
    zIndex: 1000,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
    alignSelf: 'center',
    color: colors.black,
  },
  modalSubTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'left',
    padding: 16,
    alignSelf: 'flex-start',
    color: colors.black,
  },
  textStyleMenu: {
    fontSize: 19,
    color: colors.blackFilter70,
    fontWeight: 'bold',
    marginLeft: 15,
    paddingVertical: 20,
  },
  textStyleWrapper: {
    flex: 1,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalHeaderWrapper: {
    marginTop: 55,
    marginHorizontal: 20,
  },
});
export default styles;
