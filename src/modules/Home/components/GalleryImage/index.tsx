import React, {Suspense} from 'react';
import {withNavigation} from 'react-navigation';
import {View, Platform, ActivityIndicator, Image} from 'react-native';
import PropTypes from 'prop-types';

import FastImage from 'react-native-fast-image';
import {CachedImage} from '~/components/ImageCache';
import Colors from '~/theming/colors';
import {WIDTH} from '~/utils';
import {IImageType} from '~/modules/Home/types/ImageType';
import styles from '~/modules/Home/components/GalleryImage/style';
import Touchable from '~/components/common/Touchable';

const GalleryImageItem = ({
  imageItem,
  onPress,
}: {
  imageItem: IImageType;
  onPress: (imageItem: IImageType) => void;
}) => {
  const {url, height} = imageItem;

  // Handle onPress
  const handleOnPress = (mImageItem: IImageType) => {
    onPress(mImageItem);
  };

  return (
    <View style={[styles.container, {height}]}>
      <Touchable onPress={() => handleOnPress(imageItem)} style={styles.imageWrapper}>
        <Suspense
          fallback={() => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ActivityIndicator
                color={Colors.red}
                style={{marginVertical: Platform.OS === 'ios' ? 10 : 0}}
                size={Platform.OS === 'ios' ? 1 : 24}
              />
            </View>
          )}>
          <FastImage
            source={{uri: url, priority: FastImage.priority.normal}}
            style={[styles.image, {height, width: WIDTH / 2}]}
            resizeMode="stretch"
          />
        </Suspense>
      </Touchable>
    </View>
  );
};
GalleryImageItem.propsTypes = {
  imageItem: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.number,
    url: PropTypes.string,
    download_url: PropTypes.string,
  }),
  onPress: PropTypes.func,
};
export default withNavigation(GalleryImageItem);
