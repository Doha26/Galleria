import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';

import {NavigationScreenProp} from 'react-navigation';
import styles from '~/screens/Intro/styles';
import BackgroundImage from '~/components/config/BackgroundImage';
import Container from '~/components/common/Container';
import Button from '~/components/common/Button';
import colors from '~/theming/colors';

const slideBg = require('~/assets/images/bg-intro.jpg');

const getStarted = (navigate: Function) => {
  navigate('Home');
};

const IntroScreen = ({navigation: {navigate}}: {navigation: NavigationScreenProp<any>}) => {
  return (
    <Container>
      <BackgroundImage source={slideBg} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <SafeAreaView style={styles.rootView}>
            <View />
            <View style={{paddingBottom: 30}}>
              <Text style={styles.headingText}>Welcome</Text>
              <Text style={styles.subheading}>
                Let&apos;s browse some awesome images from around the worlds`
              </Text>
              <Button
                text="Get started"
                color={colors.pink}
                onPress={() => {
                  getStarted(navigate);
                }}
                tintColor={colors.black}
              />
            </View>
          </SafeAreaView>
        </ScrollView>
      </BackgroundImage>
    </Container>
  );
};
export default IntroScreen;
