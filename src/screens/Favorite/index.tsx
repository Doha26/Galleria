import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';

import styles from '~/screens/Favorite/styles';
import Container from '~/components/common/Container';
import fr from '~/locales/fr.json';

const FavoriteScreen = () => {
  return (
    <Container withSafeArea withScroll>
      <View>
        <SafeAreaView style={styles.rootView}>
          <View style={styles.paddingBottom}>
            <Text style={styles.headingText}>{fr.favorite.title}</Text>
          </View>
        </SafeAreaView>
      </View>
    </Container>
  );
};
export default FavoriteScreen;
