import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from '~/screens/Settings/styles';
import Container from '~/components/common/Container';
import fr from '~/locales/fr.json';

const SettingScreen = () => {
  return (
    <Container withSafeArea withScroll>
      <View>
        <SafeAreaView style={styles.rootView}>
          <View style={styles.bottomPading}>
            <Text style={styles.headingText}>{fr.setting.title}</Text>
          </View>
        </SafeAreaView>
      </View>
    </Container>
  );
};
export default SettingScreen;
