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
import fr from '~/locales/fr.json';

const avatarImage = require('~/assets/images/bg-intro.jpg');

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [zoomImages, setZoomImages] = useState<Array<any>>([]);
  const [zoomImageIndex, setZoomImageIndex] = useState<number>(0);
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
    setZoomImages([]);
    const imageToDisplay = {
      url: selectedItem?.url,
      freeHeight: true,
    };
    arrayImg.push(imageToDisplay);
    modalizZoom.current?.open();
    setZoomImages(arrayImg);
    setZoomImageIndex(0);
  };

  const handleShareActions = () => {
    setProcessing(true);
    modalizPostMenuRef.current?.close();
    if (selectedItem) {
      RNFetchBlob.config({
        fileCache: true,
        appendExt: 'png',
      })
        .fetch('GET', selectedItem.url)
        .then((response: FetchBlobResponse) => {
          setProcessing(false);
          console.log('File saved to ', response.path());
          Share.open({
            message: `${fr.home.shareMessage} ${selectedItem.author}`,
            url: `file://${response.path()}`,
            type: 'image/png',
            title: 'Share Via',
          });
          return response.readFile('base64');
        })
        .then((base64Data: any) => {
          setProcessing(false);
          displayFlashMessage(fr.home.sharingTitle, fr.home.sharedSuccessfullyMessage, 'success');
          return base64Data;
        })
        .catch((err: any) => {
          setProcessing(false);
          displayFlashMessage(fr.home.sharingTitle, fr.home.errorSharingMessage, 'danger');
          console.log(err);
        });
    }
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
    if (selectedItem) {
      RNFetchBlob.config({
        fileCache: true,
        appendExt: 'png',
      })
        .fetch('GET', selectedItem.url)
        .then((response: FetchBlobResponse) => {
          CameraRoll.save(response.data, {type: 'photo'})
            .then((resp: string) => {
              setProcessing(false);
              displayFlashMessage(
                fr.home.downloadingTitle,
                fr.home.imageDownloadedSuccessfuly,
                'success',
              );
              console.log(resp);
            })
            .catch((err: any) => {
              setProcessing(false);
              displayFlashMessage(
                fr.home.downloadingTitle,
                fr.home.errorDownloadingImage,
                'danger',
              );
              console.log(err);
            });
        })
        .catch((error: any) => {
          setProcessing(false);
          displayFlashMessage(fr.home.downloadingTitle, fr.home.errorDownloadingImage, 'danger');
          console.log(error);
        });
    }
  };

  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: fr.home.downloadPermissionTitle,
          message: fr.home.donloadDescription,
          buttonNegative: fr.home.buttonCancelText,
          buttonPositive: fr.home.buttonOkText,
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        fr.home.saveImageText,
        fr.home.grantPermissionText,
        [{text: fr.home.buttonOkText, onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } catch (err) {
      Alert.alert(
        fr.home.saveImageText,
        `${fr.home.failledToSaveImage} ${err.message}`,
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
          ref={modalizPostMenuRef}>
          <View style={[styles.modalWrapper, styles.wrapperPadding]}>
            {ITEM_ARRAY_OPTIONS.map((item, index) => (
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
