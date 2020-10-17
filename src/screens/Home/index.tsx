import React, {useRef, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import {Modalize} from 'react-native-modalize';
import ImageViewer from 'react-native-image-zoom-viewer';

import styles from '~/screens/Home/styles';
import Container from '~/components/common/Container';
import Icon from '~/components/common/Icon';
import colors from '~/theming/colors';
import Touchable from '~/components/common/Touchable';
import GalleriaList from '~/modules/Home/components/GalleryList';
import {IImageType} from '~/modules/Home/types/ImageType';
import Loader from '~/components/common/Loader';
import {HEIGHT, WIDTH} from '~/utils';

const avatarImage = require('~/assets/images/bg-intro.jpg');

const ARRAY_OPTIONS = [
  {
    id: 0,
    name: 'Display in fullscreen',
    icon: 'fullscreen',
    type: 'material-community',
    color: '#e92721',
  },
  {
    id: 1,
    name: 'Save to Gallery',
    icon: 'download',
    type: 'antdesign',
    color: '#3d0664',
  },
  {
    id: 2,
    name: 'Share on Social s Media',
    icon: 'share',
    type: 'entypo',
    color: '#ee7d5b',
  },
];

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [modalZoomVisible, setmodalZoomVisible] = useState<boolean>(false);
  const [zoomImages, setzoomImages] = useState<Array<any>>([]);
  const [zoomImageIndex, setzoomImageIndex] = useState<number>(0);
  const [selectedItem, setselectedItem] = useState<IImageType>();

  const modalizPostMenuRef = useRef(null);
  const modalizZoom = useRef(null);

  const handleRefreshClicked = () => {
    setRefreshing(true);
  };

  const handleUpdateRefresh = () => {
    setRefreshing(false);
  };

  const displayZoomImageView = () => {
    const arrayImg = [];
    setzoomImages([]);
    const imageToDisplay = {
      url: selectedItem?.url,
      freeHeight: true,
    };
    arrayImg.push(imageToDisplay);
    setmodalZoomVisible(true);
    modalizZoom.current?.open();
    setzoomImages(arrayImg);
  };

  const handleOptionSelected = (index: number) => {
    closeModalOption();
    switch (index) {
      case 0:
        displayZoomImageView();
        break;
      default:
        break;
    }
  };

  const openModalOption = (item: IImageType) => {
    setselectedItem(item);
    modalizPostMenuRef.current?.open();
  };

  const closeModalOption = () => {
    modalizPostMenuRef.current?.close();
  };

  const renderModalZoom = () => {
    return (
      <Modalize
        ref={modalizZoom}
        modalStyle={styles.absoluteModal}
      >
        <ImageViewer
          style={{width: WIDTH, height: HEIGHT}}
          imageUrls={zoomImages}
          loadingRender={() => <Loader />}
          enablePreload
          index={zoomImageIndex}
          renderHeader={() => (
            <View style={{marginTop: 55, marginHorizontal: 20}}>
              <TouchableOpacity onPress={() => modalizZoom.current?.close()}>
                <Icon name="close" type="antdesign" color={colors.darkgray} />
              </TouchableOpacity>
            </View>
          )}
          enableSwipeDown
        />
      </Modalize>
    );
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
          onItemClicked={(item) => openModalOption(item)}
        />
        <Modalize
          adjustToContentHeight
          modalStyle={styles.modalStyle}
          withReactModal
          ref={modalizPostMenuRef}
        >
          <View style={[styles.modalWrapper, styles.wrapperPadding]}>
            {ARRAY_OPTIONS.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={styles.textStyleWrapper}
                activeOpacity={0.6}
                onPress={() => handleOptionSelected(index)}>
                <Icon name={item.icon} type={item.type} color={item.color} />
                <Text style={styles.textStyleMenu}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modalize>
        {renderModalZoom()}
      </View>
    </Container>
  );
};
export default HomeScreen;
