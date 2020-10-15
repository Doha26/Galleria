import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {rootSwitch} from '~/config/navigator';
import IntroScreen from '~/screens/Intro';

export default createAppContainer(
  createSwitchNavigator(
    {
      [rootSwitch.intro]: IntroScreen,
    },
    {
      initialRouteName: rootSwitch.intro,
    },
  ),
);
