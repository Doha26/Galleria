import React, {useState} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';

import styles from '~/screens/Home/styles';
import Container from '~/components/common/Container';
import Icon from '~/components/common/Icon';
import colors from '~/theming/colors';
import Touchable from '~/components/common/Touchable';
import GalleriaList from '~/modules/Home/components/GalleryList';

const avatarImage = require('~/assets/images/bg-intro.jpg');

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefreshClicked = () => {
    setRefreshing(true);
  };

  const handleUpdateRefresh = () => {
    setRefreshing(false);
  };

  return (
    <Container>
      <View>
        <SafeAreaView style={[styles.headerToolbar]}>
          <View style={styles.toolbarWrapper}>
            <View style={styles.avatarWrapper}>
              <Touchable>
                <Image source={avatarImage} style={styles.avatar} />
              </Touchable>
              <Text style={styles.avatarName}>Pavel</Text>
            </View>
            <Icon
              name="refresh"
              type="material-community"
              color={colors.white}
              size={35}
              clickable
              onPress={handleRefreshClicked}
            />
          </View>
        </SafeAreaView>
        <GalleriaList shouldRefresh={refreshing} updateRefresh={handleUpdateRefresh} />
      </View>
    </Container>
  );
};
export default HomeScreen;
