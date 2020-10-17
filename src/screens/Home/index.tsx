import React, {useRef, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';

import styles from '~/screens/Home/styles';
import Container from '~/components/common/Container';
import Icon from '~/components/common/Icon';
import colors from '~/theming/colors';
import Touchable from '~/components/common/Touchable';
import GalleriaList from '~/modules/Home/components/GalleryList';

const avatarImage = require('~/assets/images/bg-intro.jpg');

const ARRAY_OPTIONS = [
  {
    name: 'Display in fullscreen',
    icon: 'fullscreen',
    type: 'material-community',
    color: '#e92721',
  },
  {
    name: 'Save to Gallery',
    icon: 'download',
    type: 'antdesign',
    color: '#3d0664',
  },
  {
    name: 'Share on Social s Media',
    icon: 'share',
    type: 'entypo',
    color: '#ee7d5b',
  },
];

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const modalizPostMenuRef = useRef(null);
  const handleRefreshClicked = () => {
    setRefreshing(true);
  };

  const handleUpdateRefresh = () => {
    setRefreshing(false);
  };

  const handleOptionSelected = () => {
    closeModalOption();
  };

  const openModalOption = () => {
    modalizPostMenuRef.current?.open();
  };

  const closeModalOption = () => {
    modalizPostMenuRef.current?.close();
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
              <Text style={styles.avatarName}>Galleria</Text>
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
        <GalleriaList
          shouldRefresh={refreshing}
          updateRefresh={handleUpdateRefresh}
          onItemClicked={openModalOption}
        />
        <Modalize
          adjustToContentHeight
          modalStyle={styles.modalStyle}
          withReactModal
          ref={modalizPostMenuRef}>
          <View style={[styles.modalWrapper, styles.wrapperPadding]}>
            {ARRAY_OPTIONS.map((item, index) => (
              <TouchableOpacity
                style={styles.textStyleWrapper}
                activeOpacity={0.6}
                onPress={() => handleOptionSelected(index)}
              >
                <Icon name={item.icon} type={item.type} color={item.color} />
                <Text style={styles.textStyleMenu}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modalize>
      </View>
    </Container>
  );
};
export default HomeScreen;
