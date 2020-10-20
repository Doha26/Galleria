import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from '~/screens/Profile/styles';
import Container from '~/components/common/Container';
import fr from '~/locales/fr.json';

const ProfileScreen = () => {
  return (
    <Container withSafeArea withScroll>
      <View>
        <SafeAreaView style={styles.rootView}>
          <View style={styles.paddingBottom}>
            <Text style={styles.headingText}>{fr.profile.title}</Text>
          </View>
        </SafeAreaView>
      </View>
    </Container>
  );
};
export default ProfileScreen;
