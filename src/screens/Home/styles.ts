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
    color: colors.darkBlue,
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
  modalSubTitleDesc: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 5,
    alignSelf: 'center',
    color: colors.dark_gray,
  },
  modalButtonFull: {
    height: 50,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.darkBlue,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  },
  modalStyle: {
    margin: 0,
    justifyContent: 'flex-end',
    backgroundColor: '#f6f5f5',
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
});
export default styles;
