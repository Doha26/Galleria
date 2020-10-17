import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {isIphoneX} from 'react-native-iphone-x-helper';
import HomeScreen from '~/screens/Home';
import FavoriteScreen from '~/screens/Favorite';
import ProfileScreen from '~/screens/Profile';
import SettingScreen from '~/screens/Settings';
import Icon from '~/components/common/Icon';
import colors from '~/theming/colors';

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => <Icon name="ios-image" type="ionicon" />,
      },
    },
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: () => <Icon name="hearto" type="antdesign" />,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: () => <Icon name="user" type="feather" />,
      },
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: () => <Icon name="setting" type="antdesign" />,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: colors.transparent,
      inactiveBackgroundColor: colors.transparent,
      style: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: colors.darkBlue,
        paddingTop: 30,
        height: isIphoneX() ? 70 : 80,
      },
      tabStyle: {
        backgroundColor: colors.transparent,
        marginBottom: !isIphoneX() ? 20 : 0,
      },
    },
    initialRouteName: 'Home',
  },
);
