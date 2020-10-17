import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';

import {NavigationScreenProp} from 'react-navigation';
import styles from '~/screens/Settings/styles';
import Container from '~/components/common/Container';

const SettingScreen = ({navigation: {navigate}}: {navigation: NavigationScreenProp<any>}) => {
  return (
    <Container withSafeArea withScroll>
      <View>
        <SafeAreaView style={styles.rootView}>
          <View style={{paddingBottom: 30}}>
            <Text style={styles.headingText}>Settings</Text>
          </View>
        </SafeAreaView>
      </View>
    </Container>
  );
};
export default SettingScreen;
