import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import ImageViewer from 'react-native-image-zoom-viewer';
import Share from 'react-native-share';

import RNFetchBlob, {FetchBlobResponse} from 'rn-fetch-blob/index';
import CameraRoll from '@react-native-community/cameraroll';
import styles from '~/screens/Home/styles';
import Container from '~/components/common/Container';
import Icon from '~/components/common/Icon';
import colors from '~/theming/colors';
import Touchable from '~/components/common/Touchable';
import GalleriaList from '~/modules/Home/components/GalleryList';
import {IImageType} from '~/modules/Home/types/ImageType';
import Loader from '~/components/common/Loader';
import {displayFlashMessage, HEIGHT, ITEM_ARRAY_OPTIONS, WIDTH} from '~/utils';
import LoadingOverlay from '~/components/common/LoadingOverlay';

const avatarImage = require('~/assets/images/bg-intro.jpg');

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [modalZoomVisible, setmodalZoomVisible] = useState<boolean>(false);
  const [zoomImages, setzoomImages] = useState<Array<any>>([]);
  const [zoomImageIndex, setzoomImageIndex] = useState<number>(0);
  const [selectedItem, setselectedItem] = useState<IImageType>();
  const [processing, setProcessing] = useState<boolean>(false);

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

  const handleShareActions = () => {
    setProcessing(true);
    modalizPostMenuRef.current?.close();
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch('GET', selectedItem?.url)
      .then((response: FetchBlobResponse) => {
        setProcessing(false);
        // alert(resp.path());
        console.log('File saved to ', response.path());
        // if(Platform.OS=='ios'){
        Share.open({
          message: `Hi. Take a look at this picture of ${selectedItem?.author}`,
          url: `file://${response.path()}`,
          type: 'image/png',
          title: 'Share Via',
        });
        // }
        return response.readFile('base64');
      })
      .then((base64Data: any) => {
        setProcessing(false);
        displayFlashMessage('Sharing', 'Image shared successfully !', 'success');
        // remove the file from storage
        return base64Data;
      })
      .catch((err: any) => {
        setProcessing(false);
        displayFlashMessage('Sharing', 'Error while sharing the image !', 'danger');
        console.log(err);
      });
  };

  const handleDownload = async () => {
    setProcessing(true);
    if (Platform.OS === 'android') {
      const granted = await getPermissionAndroid();
      if (!granted) {
        setProcessing(false);
        return;
      }
    }

    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch('GET', selectedItem?.url)
      .then((response: FetchBlobResponse) => {
        CameraRoll.saveToCameraRoll(response.data, 'photo')
          .then((resp: string) => {
            setProcessing(false);
            displayFlashMessage('Downloading', 'Image downloaded successfully !', 'success');
            console.log(resp);
          })
          .catch((err) => {
            setProcessing(false);
            console.log(err);
          });
      })
      .catch((error: any) => {
        setProcessing(false);
        displayFlashMessage('Downloading', 'Error while Downloading the image !', 'danger');
        console.log(error);
      });
  };

  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        'Save remote Image',
        'Grant Me Permission to save Image',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } catch (err) {
      Alert.alert(
        'Save remote Image',
        `Failed to save Image: ${err.message}`,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
      return false;
    }
    return true;
  };

  const handleOptionSelected = (index: number) => {
    closeModalOption();
    switch (index) {
      case 0:
        displayZoomImageView();
        break;
      case 1:
        handleDownload();
        break;
      case 2:
        handleShareActions();
        break;
      default:
        break;
    }
  };

  const openModalOption = (item: IImageType) => {
    setselectedItem(item);
    // @ts-ignore
    modalizPostMenuRef.current?.open();
  };

  const closeModalOption = () => {
    // @ts-ignore
    modalizPostMenuRef.current?.close();
  };

  const renderModalZoom = () => {
    return (
      <Modalize ref={modalizZoom} modalStyle={styles.absoluteModal}>
        <ImageViewer
          style={{width: WIDTH, height: HEIGHT}}
          imageUrls={zoomImages}
          loadingRender={() => <Loader />}
          enablePreload
          index={zoomImageIndex}
          renderHeader={() => (
            <View style={styles.modalHeaderWrapper}>
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
      {processing ? <LoadingOverlay /> : null}
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
            {ITEM_ARRAY_OPTIONS.map((item, index) => (
              <TouchableOpacity
                key={item.id}
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
        {renderModalZoom()}
      </View>
    </Container>
  );
};
export default HomeScreen;
