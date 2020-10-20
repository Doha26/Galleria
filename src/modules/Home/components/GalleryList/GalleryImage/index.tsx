import React, {Suspense} from 'react';
import {withNavigation} from 'react-navigation';
import {View, Platform, ActivityIndicator, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import Colors from '~/theming/colors';
import {WIDTH} from '~/utils';
import {IImageType} from '~/modules/Home/types/ImageType';
import styles from '~/modules/Home/components/GalleryList/GalleryImage/style';

const GalleryImageItem = ({
  imageItem,
  onPress,
}: {
  imageItem: IImageType;
  onPress: (imageItem: IImageType) => void;
}) => {
  // Destructuring to access url and height
  const {url, height} = imageItem;

  // Handle onPress
  const handleOnPress = (mImageItem: IImageType) => {
    onPress(mImageItem);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, {height}]}
      onPress={() => handleOnPress(imageItem)}>
      <View style={styles.imageWrapper}>
        <Suspense
          fallback={() => (
            <View style={styles.fallBackWrapper}>
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
      </View>
    </TouchableOpacity>
  );
};
GalleryImageItem.propsTypes = {
  imageItem: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.number,
    url: PropTypes.string,
    // eslint-disable-next-line @typescript-eslint/camelcase
    download_url: PropTypes.string,
  }),
  onPress: PropTypes.func,
};
export default withNavigation(GalleryImageItem);
