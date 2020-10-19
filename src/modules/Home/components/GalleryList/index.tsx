import React, {useEffect, useRef, useState} from 'react';
import {withNavigation} from 'react-navigation';
import Masonry from 'react-native-masonry-layout';
import {View, ScrollView, Alert, NativeScrollEvent} from 'react-native';
import PropTypes from 'prop-types';

import GalleriaImageItem from '~/modules/Home/components/GalleryList/GalleryImage';
import Loader from '~/components/common/Loader';
import {IImageType} from '~/modules/Home/types/ImageType';
import {API_QUERY_TYPE} from '~/constants';
import api from '~/services';
import fr from '~/locales';

const GalleryList = ({
  shouldRefresh,
  updateRefresh,
  onItemClicked,
}: {
  shouldRefresh: boolean;
  updateRefresh: () => void;
  onItemClicked: (item: IImageType) => void;
}) => {
  const [loading, setLoading] = useState(true);

  //  Create a ref for the component that will hold Data
  const dataList = useRef(null);

  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    setLoading(false);
    const {data, status} = await api.get(API_QUERY_TYPE.LIST);

    if (status !== 200) {
      Alert.alert(fr.home.unableToFetchText);
    } else if (data) {
      if (shouldRefresh) {
        dataList.current?.clear();
        setLoading(true);
      }
      const ImageList = data.map((item: IImageType) => {
        return {
          url: item.download_url,
          height: randomInteger(),
          author: item.author,
        };
      });
      dataList.current?.addItems(ImageList);
      updateRefresh();
    }
  };

  const handleItemPressed = (item: IImageType) => {
    onItemClicked(item);
  };

  function randomInteger() {
    // Random a height between 250 and 300 300
    return Math.floor(Math.random() * (300 - 150 + 1)) + 250;
  }

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}: NativeScrollEvent) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  };

  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }
    return (
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(event: any) => {
          if (isCloseToBottom(event.nativeEvent)) {
            loadData();
          }
        }}>
        <View style={{flex: 1, backgroundColor: '#fff', paddingBottom: 30}}>
          {loading ? (
            <Loader />
          ) : (
            <Masonry
              removeClippedSubviews
              style={{flex: 1}}
              columns={2}
              ref={dataList}
              containerStyle={{padding: 5}}
              renderItem={(item: any) => (
                <GalleriaImageItem imageItem={item} onPress={(el) => handleItemPressed(el)} />
              )}
            />
          )}
        </View>
      </ScrollView>
    );
  };

  return renderContent();
};

GalleryList.propsTypes = {
  shouldRefresh: PropTypes.bool,
  updateRefresh: PropTypes.func,
  onItemClicked: PropTypes.func,
};
GalleryList.defaultProps = {
  shouldRefresh: false,
  updateRefresh: () => null,
  onItemClicked: () => null,
};

export default withNavigation(GalleryList);
