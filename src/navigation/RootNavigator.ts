import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {rootSwitch} from '~/config/navigator';
import IntroScreen from '~/screens/Intro';
import MainStack from '~/navigation/MainStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      [rootSwitch.intro]: IntroScreen,
      [rootSwitch.main]: MainStack,
    },
    {
      initialRouteName: rootSwitch.main,
    },
  ),
);
