import 'react-native-gesture-handler';
import * as React from 'react';
import FlashMessage from 'react-native-flash-message';
import RootNavigator from './navigation/RootNavigator';

const App = () => (
  <React.Fragment>
    <FlashMessage style={{zIndex: 10000}} />
    <RootNavigator />
  </React.Fragment>
);
export default App;
